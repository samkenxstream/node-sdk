const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

import { Contexts } from '../src';
import { ListRequest, ListResponse } from '../src/contexts';
import { ServiceError } from '@grpc/grpc-js';

describe('SDK', () => {
  let proc;

  let cli = path.resolve('docker-linux-amd64');
  if (!fs.existsSync(cli)) {
    cli = 'docker';
  }
  const address = 'unix:///tmp/test.sock';

  beforeAll(() => {
    proc = spawn(cli, ['serve', '--address', address]);
  });

  afterAll(() => {
    proc.kill('SIGINT');
  });

  it('can call the backend', (done) => {
    setTimeout(() => {
      const client = new Contexts(address);
      client.list(
        new ListRequest(),
        (error: ServiceError, response: ListResponse) => {
          expect(error).toBeNull();
          expect(response.getContextsList().length).toBeGreaterThan(0);
          done();
        }
      );
    }, 1000);
  });
});
