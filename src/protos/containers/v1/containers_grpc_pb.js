// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
//  Copyright 2020 Docker, Inc.
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
var containers_v1_containers_pb = require('../../containers/v1/containers_pb.js');

function serialize_com_docker_api_protos_containers_v1_DeleteRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.DeleteRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_DeleteRequest(buffer_arg) {
  return containers_v1_containers_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_DeleteResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.DeleteResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_DeleteResponse(buffer_arg) {
  return containers_v1_containers_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_ExecRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.ExecRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.ExecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_ExecRequest(buffer_arg) {
  return containers_v1_containers_pb.ExecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_ExecResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.ExecResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.ExecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_ExecResponse(buffer_arg) {
  return containers_v1_containers_pb.ExecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_InspectRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.InspectRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.InspectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_InspectRequest(buffer_arg) {
  return containers_v1_containers_pb.InspectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_InspectResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.InspectResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.InspectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_InspectResponse(buffer_arg) {
  return containers_v1_containers_pb.InspectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_ListRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.ListRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_ListRequest(buffer_arg) {
  return containers_v1_containers_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_ListResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.ListResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_ListResponse(buffer_arg) {
  return containers_v1_containers_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_LogsRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.LogsRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.LogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_LogsRequest(buffer_arg) {
  return containers_v1_containers_pb.LogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_LogsResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.LogsResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.LogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_LogsResponse(buffer_arg) {
  return containers_v1_containers_pb.LogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_RunRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.RunRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.RunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_RunRequest(buffer_arg) {
  return containers_v1_containers_pb.RunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_RunResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.RunResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.RunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_RunResponse(buffer_arg) {
  return containers_v1_containers_pb.RunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_StartRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.StartRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.StartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_StartRequest(buffer_arg) {
  return containers_v1_containers_pb.StartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_StartResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.StartResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.StartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_StartResponse(buffer_arg) {
  return containers_v1_containers_pb.StartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_StopRequest(arg) {
  if (!(arg instanceof containers_v1_containers_pb.StopRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.StopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_StopRequest(buffer_arg) {
  return containers_v1_containers_pb.StopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_containers_v1_StopResponse(arg) {
  if (!(arg instanceof containers_v1_containers_pb.StopResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.containers.v1.StopResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_containers_v1_StopResponse(buffer_arg) {
  return containers_v1_containers_pb.StopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContainersService = exports.ContainersService = {
  list: {
    path: '/com.docker.api.protos.containers.v1.Containers/List',
    requestStream: false,
    responseStream: false,
    requestType: containers_v1_containers_pb.ListRequest,
    responseType: containers_v1_containers_pb.ListResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_ListRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_ListRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_ListResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_ListResponse,
  },
  start: {
    path: '/com.docker.api.protos.containers.v1.Containers/Start',
    requestStream: false,
    responseStream: false,
    requestType: containers_v1_containers_pb.StartRequest,
    responseType: containers_v1_containers_pb.StartResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_StartRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_StartRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_StartResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_StartResponse,
  },
  stop: {
    path: '/com.docker.api.protos.containers.v1.Containers/Stop',
    requestStream: false,
    responseStream: false,
    requestType: containers_v1_containers_pb.StopRequest,
    responseType: containers_v1_containers_pb.StopResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_StopRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_StopRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_StopResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_StopResponse,
  },
  run: {
    path: '/com.docker.api.protos.containers.v1.Containers/Run',
    requestStream: false,
    responseStream: false,
    requestType: containers_v1_containers_pb.RunRequest,
    responseType: containers_v1_containers_pb.RunResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_RunRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_RunRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_RunResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_RunResponse,
  },
  exec: {
    path: '/com.docker.api.protos.containers.v1.Containers/Exec',
    requestStream: false,
    responseStream: false,
    requestType: containers_v1_containers_pb.ExecRequest,
    responseType: containers_v1_containers_pb.ExecResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_ExecRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_ExecRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_ExecResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_ExecResponse,
  },
  logs: {
    path: '/com.docker.api.protos.containers.v1.Containers/Logs',
    requestStream: false,
    responseStream: true,
    requestType: containers_v1_containers_pb.LogsRequest,
    responseType: containers_v1_containers_pb.LogsResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_LogsRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_LogsRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_LogsResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_LogsResponse,
  },
  delete: {
    path: '/com.docker.api.protos.containers.v1.Containers/Delete',
    requestStream: false,
    responseStream: false,
    requestType: containers_v1_containers_pb.DeleteRequest,
    responseType: containers_v1_containers_pb.DeleteResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_DeleteRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_DeleteRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_DeleteResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_DeleteResponse,
  },
  inspect: {
    path: '/com.docker.api.protos.containers.v1.Containers/Inspect',
    requestStream: false,
    responseStream: false,
    requestType: containers_v1_containers_pb.InspectRequest,
    responseType: containers_v1_containers_pb.InspectResponse,
    requestSerialize: serialize_com_docker_api_protos_containers_v1_InspectRequest,
    requestDeserialize: deserialize_com_docker_api_protos_containers_v1_InspectRequest,
    responseSerialize: serialize_com_docker_api_protos_containers_v1_InspectResponse,
    responseDeserialize: deserialize_com_docker_api_protos_containers_v1_InspectResponse,
  },
};

exports.ContainersClient = grpc.makeGenericClientConstructor(ContainersService);
