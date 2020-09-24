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

import { BytesMessage as PbBytesMessage } from './protos/streams/v1/streams_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

export class BytesMessage extends PbBytesMessage {
  toAny(): google_protobuf_any_pb.Any {
    const any = new google_protobuf_any_pb.Any();
    any.pack(this.serializeBinary(), this.name());
    return any;
  }

  static fromAny(any: google_protobuf_any_pb.Any): BytesMessage {
    return (any.unpack(
      PbBytesMessage.deserializeBinary,
      'com.docker.api.protos.streams.v1.BytesMessage'
    ) as unknown) as BytesMessage;
  }

  name(): string {
    return 'type.googleapis.com/com.docker.api.protos.streams.v1.BytesMessage';
  }
}
