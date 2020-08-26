import * as fs from 'fs';
import * as path from 'path';
import { Readable } from 'stream';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.DOCKER_GITHUB_TOKEN,
});

const get = async (p: string) => {
  try {
    const response = await octokit.repos.getContent({
      owner: 'docker',
      repo: 'compose-cli',
      path: p,
    });
    if (Array.isArray(response.data)) {
      for (let n of response.data) {
        await get(n.path);
      }
      return;
    }

    if (p.endsWith('.proto')) {
      console.log(`Downloading ${response.data.path}`);
      const dir = path.dirname(response.data.path);
      fs.mkdirSync(`src/${dir}`, { recursive: true });
      const buffer = Buffer.from(response.data.content, 'base64');
      const data = Readable.from(buffer.toString('ascii'));
      data.pipe(fs.createWriteStream(`src/${p}`));
    }
  } catch (e) {
    console.error(e);
  }
};

(async function () {
  get('protos');
})();
