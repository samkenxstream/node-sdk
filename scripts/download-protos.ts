/*
   Copyright 2020 Docker CLI JavaScript SDK authors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import * as fs from 'fs';
import * as path from 'path';
import { Readable } from 'stream';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({});

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
