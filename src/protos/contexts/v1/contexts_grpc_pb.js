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
var contexts_v1_contexts_pb = require('../../contexts/v1/contexts_pb.js');

function serialize_com_docker_api_protos_context_v1_ListRequest(arg) {
  if (!(arg instanceof contexts_v1_contexts_pb.ListRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.context.v1.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_context_v1_ListRequest(buffer_arg) {
  return contexts_v1_contexts_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_context_v1_ListResponse(arg) {
  if (!(arg instanceof contexts_v1_contexts_pb.ListResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.context.v1.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_context_v1_ListResponse(buffer_arg) {
  return contexts_v1_contexts_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_context_v1_SetCurrentRequest(arg) {
  if (!(arg instanceof contexts_v1_contexts_pb.SetCurrentRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.context.v1.SetCurrentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_context_v1_SetCurrentRequest(buffer_arg) {
  return contexts_v1_contexts_pb.SetCurrentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_context_v1_SetCurrentResponse(arg) {
  if (!(arg instanceof contexts_v1_contexts_pb.SetCurrentResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.context.v1.SetCurrentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_context_v1_SetCurrentResponse(buffer_arg) {
  return contexts_v1_contexts_pb.SetCurrentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContextsService = exports.ContextsService = {
  // Sets the current request for all calls
setCurrent: {
    path: '/com.docker.api.protos.context.v1.Contexts/SetCurrent',
    requestStream: false,
    responseStream: false,
    requestType: contexts_v1_contexts_pb.SetCurrentRequest,
    responseType: contexts_v1_contexts_pb.SetCurrentResponse,
    requestSerialize: serialize_com_docker_api_protos_context_v1_SetCurrentRequest,
    requestDeserialize: deserialize_com_docker_api_protos_context_v1_SetCurrentRequest,
    responseSerialize: serialize_com_docker_api_protos_context_v1_SetCurrentResponse,
    responseDeserialize: deserialize_com_docker_api_protos_context_v1_SetCurrentResponse,
  },
  // Returns the list of existing contexts
list: {
    path: '/com.docker.api.protos.context.v1.Contexts/List',
    requestStream: false,
    responseStream: false,
    requestType: contexts_v1_contexts_pb.ListRequest,
    responseType: contexts_v1_contexts_pb.ListResponse,
    requestSerialize: serialize_com_docker_api_protos_context_v1_ListRequest,
    requestDeserialize: deserialize_com_docker_api_protos_context_v1_ListRequest,
    responseSerialize: serialize_com_docker_api_protos_context_v1_ListResponse,
    responseDeserialize: deserialize_com_docker_api_protos_context_v1_ListResponse,
  },
};

exports.ContextsClient = grpc.makeGenericClientConstructor(ContextsService);
