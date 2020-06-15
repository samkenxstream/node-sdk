import * as os from 'os';

import { credentials } from '@grpc/grpc-js';
import { ContainersClient } from './protos/containers/v1/containers_grpc_pb';
import { ContextsClient } from './protos/contexts/v1/contexts_grpc_pb';
import { ComposeClient } from './protos/compose/v1/compose_grpc_pb';
import { StreamingClient } from './protos/streams/v1/streams_grpc_pb';

let addr = 'unix:////./pipe/dockerCliApi';
if (os.platform() !== 'win32') {
  const homeDir = os.homedir();
  addr = `unix://${homeDir}/Library/Containers/com.docker.docker/Data/docker-cli-api.sock`;
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
