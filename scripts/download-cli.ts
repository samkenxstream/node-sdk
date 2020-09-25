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
import * as tar from 'tar';
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
    (asset) => asset.name == 'docker-linux-amd64.tar.gz'
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

  const binPath = "docker";
  const tarPath = linuxAsset.name;
  const file = fs.createWriteStream(tarPath);

  file.write(Buffer.from(response.data));
  console.log(`downloaded ${tarPath}`);
  file.end(() => {
    tar.x(
      {
          file: tarPath,
          strip:1
      },
    ).then(() => {
      console.log(`extracted ${tarPath}`);
      fs.chmodSync(path.resolve(binPath), 755);
      console.log(`updated ${binPath} as executable`);
    })
  });
};

(async function () {
  try {
    await download();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
