import * as grpc from '@grpc/grpc-js';

import { ListRequest, ListResponse } from '../src/contexts';
import { Contexts } from '../src';

const client = new Contexts();
client.list(
  new ListRequest(),
  (error: grpc.ServiceError | null, res: ListResponse) => {
    if (error != null) {
      throw error;
    }

    res.getContextsList().forEach((context) => {
      console.log(
        context.getName(),
        context.getContexttype(),
        context.getCurrent() ? '*' : ''
      );
    });
  }
);
