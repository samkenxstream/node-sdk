import * as fs from 'fs';
import * as path from 'path';
import { Octokit } from '@octokit/rest';
const { request } = require('@octokit/request');

const download = async () => {
  const octokit = new Octokit({
    auth: process.env.DOCKER_GITHUB_TOKEN,
  });

  const asdf = new Octokit();

  const latestReleases = await octokit.repos.listReleases({
    owner: 'docker',
    repo: 'compose-cli',
    page: 1,
    per_page: 1,
  });

  if (latestReleases.data.length !== 1) {
    throw new Error('Found more than one release');
  }

  const latestRelease = latestReleases.data[0];

  console.log(`Found release ${latestRelease.name}`);

  const linuxAsset = latestRelease.assets.find(
    (asset) => asset.name == 'docker-linux-amd64'
  );

  if (!linuxAsset) {
    throw new Error('linux asset not found');
  }

  const options = asdf.repos.getReleaseAsset.endpoint.merge({
    headers: {
      Accept: 'application/octet-stream',
    },
    owner: 'docker',
    repo: 'compose-cli',
    asset_id: linuxAsset.id,
    access_token: process.env.DOCKER_GITHUB_TOKEN,
  });

  const response = await request(options);

  const binPath = linuxAsset.name;
  const file = fs.createWriteStream(binPath);

  file.write(Buffer.from(response.data));
  file.end();
  file.close();
  fs.chmodSync(path.resolve(binPath), 755);
};

(async function () {
  try {
    await download();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
