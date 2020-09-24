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

import * as grpc from '@grpc/grpc-js';

import { Containers } from '../src/index';
import { ListRequest, ListResponse } from '../src/containers';

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
