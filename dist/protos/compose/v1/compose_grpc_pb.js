// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (c) 2020 Docker Inc.
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use, copy,
// modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
