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

import { homedir, platform } from 'os';

import { credentials } from '@grpc/grpc-js';
import { ContainersClient } from './protos/containers/v1/containers_grpc_pb';
import { ContextsClient } from './protos/contexts/v1/contexts_grpc_pb';
import { ComposeClient } from './protos/compose/v1/compose_grpc_pb';
import { StreamingClient } from './protos/streams/v1/streams_grpc_pb';

let addr = 'unix:////./pipe/dockerCliApi';
if (platform() !== 'win32') {
  const homeDir = homedir();
  addr = `unix://${homeDir}/.docker/run/docker-cli-api.sock`;
}
export class Containers extends ContainersClient {
  constructor(address: string = addr) {
    super(address, credentials.createInsecure());
  }
}

export class Contexts extends ContextsClient {
  constructor(address: string = addr) {
    super(address, credentials.createInsecure());
  }
}

export class Compose extends ComposeClient {
  constructor(address: string = addr) {
    super(address, credentials.createInsecure());
  }
}

export class Streams extends StreamingClient {
  constructor(address: string = addr) {
    super(address, credentials.createInsecure());
  }
}
