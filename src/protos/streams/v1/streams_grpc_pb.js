// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
//  Copyright 2020 The Authors
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var streams_v1_streams_pb = require('../../streams/v1/streams_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_google_protobuf_Any(arg) {
  if (!(arg instanceof google_protobuf_any_pb.Any)) {
    throw new Error('Expected argument of type google.protobuf.Any');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Any(buffer_arg) {
  return google_protobuf_any_pb.Any.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var StreamingService = (exports.StreamingService = {
  newStream: {
    path: '/com.docker.api.protos.streams.v1.Streaming/NewStream',
    requestStream: true,
    responseStream: true,
    requestType: google_protobuf_any_pb.Any,
    responseType: google_protobuf_any_pb.Any,
    requestSerialize: serialize_google_protobuf_Any,
    requestDeserialize: deserialize_google_protobuf_Any,
    responseSerialize: serialize_google_protobuf_Any,
    responseDeserialize: deserialize_google_protobuf_Any,
  },
});

exports.StreamingClient = grpc.makeGenericClientConstructor(StreamingService);
