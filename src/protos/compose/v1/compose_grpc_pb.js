// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
//  Copyright 2020 Docker Compose CLI authors
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
var compose_v1_compose_pb = require('../../compose/v1/compose_pb.js');

function serialize_com_docker_api_protos_compose_v1_ComposeDownRequest(arg) {
  if (!(arg instanceof compose_v1_compose_pb.ComposeDownRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.compose.v1.ComposeDownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_compose_v1_ComposeDownRequest(buffer_arg) {
  return compose_v1_compose_pb.ComposeDownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_compose_v1_ComposeDownResponse(arg) {
  if (!(arg instanceof compose_v1_compose_pb.ComposeDownResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.compose.v1.ComposeDownResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_compose_v1_ComposeDownResponse(buffer_arg) {
  return compose_v1_compose_pb.ComposeDownResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_compose_v1_ComposeUpRequest(arg) {
  if (!(arg instanceof compose_v1_compose_pb.ComposeUpRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.compose.v1.ComposeUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_compose_v1_ComposeUpRequest(buffer_arg) {
  return compose_v1_compose_pb.ComposeUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_compose_v1_ComposeUpResponse(arg) {
  if (!(arg instanceof compose_v1_compose_pb.ComposeUpResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.compose.v1.ComposeUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_compose_v1_ComposeUpResponse(buffer_arg) {
  return compose_v1_compose_pb.ComposeUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ComposeService = exports.ComposeService = {
  up: {
    path: '/com.docker.api.protos.compose.v1.Compose/Up',
    requestStream: false,
    responseStream: false,
    requestType: compose_v1_compose_pb.ComposeUpRequest,
    responseType: compose_v1_compose_pb.ComposeUpResponse,
    requestSerialize: serialize_com_docker_api_protos_compose_v1_ComposeUpRequest,
    requestDeserialize: deserialize_com_docker_api_protos_compose_v1_ComposeUpRequest,
    responseSerialize: serialize_com_docker_api_protos_compose_v1_ComposeUpResponse,
    responseDeserialize: deserialize_com_docker_api_protos_compose_v1_ComposeUpResponse,
  },
  down: {
    path: '/com.docker.api.protos.compose.v1.Compose/Down',
    requestStream: false,
    responseStream: false,
    requestType: compose_v1_compose_pb.ComposeDownRequest,
    responseType: compose_v1_compose_pb.ComposeDownResponse,
    requestSerialize: serialize_com_docker_api_protos_compose_v1_ComposeDownRequest,
    requestDeserialize: deserialize_com_docker_api_protos_compose_v1_ComposeDownRequest,
    responseSerialize: serialize_com_docker_api_protos_compose_v1_ComposeDownResponse,
    responseDeserialize: deserialize_com_docker_api_protos_compose_v1_ComposeDownResponse,
  },
};

exports.ComposeClient = grpc.makeGenericClientConstructor(ComposeService);
