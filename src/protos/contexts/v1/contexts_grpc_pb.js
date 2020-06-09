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
