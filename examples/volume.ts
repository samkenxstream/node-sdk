/*
   Copyright 2020 The Authors

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

import { Volumes } from '../src/index';
import {
  AciVolumeCreateOptions,
  VolumesCreateRequest,
  VolumesCreateResponse,
  VolumesListRequest,
  VolumesListResponse,
} from '../src/volumes';

const client = new Volumes();

client.volumesList(
  new VolumesListRequest(),
  (error: grpc.ServiceError | null, response: VolumesListResponse) => {
    if (error != null) {
      throw error;
    }
    response.getVolumesList().forEach((volume) => {
      console.log(
        volume.getId() + " : " + volume.getDescription()
      );
    });
  }
);

let request = new VolumesCreateRequest();
request.setName("test-volume")
let aciVolumeCreateOptions = new AciVolumeCreateOptions();
aciVolumeCreateOptions.setStorageAccount("mystorageaccount")
request.setAciOption(aciVolumeCreateOptions)

client.volumesCreate(
  request,
  (error: grpc.ServiceError | null, response: VolumesCreateResponse) => {
    if (error != null) {
      console.log(error.message);
    } else {
      console.log(
        response.getVolume()?.getId()
      );
    }
  }
);
