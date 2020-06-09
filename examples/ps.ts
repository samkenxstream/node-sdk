import * as grpc from '@grpc/grpc-js';

import { ListRequest, ListResponse } from '../src/containers';
import { Containers } from '../src/index';

const client = new Containers();
client.list(
  new ListRequest(),
  (error: grpc.ServiceError | null, response: ListResponse) => {
    if (error != null) {
      throw error;
    }
    const containers = response.getContainersList();
    containers.forEach((container) => {
      console.log(
        container.getId(),
        container.getImage(),
        container.getStatus()
      );
    });
  }
);
