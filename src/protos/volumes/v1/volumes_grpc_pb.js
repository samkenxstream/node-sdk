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
var volumes_v1_volumes_pb = require('../../volumes/v1/volumes_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_com_docker_api_protos_volumes_v1_VolumesCreateRequest(arg) {
  if (!(arg instanceof volumes_v1_volumes_pb.VolumesCreateRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.volumes.v1.VolumesCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_volumes_v1_VolumesCreateRequest(buffer_arg) {
  return volumes_v1_volumes_pb.VolumesCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_volumes_v1_VolumesCreateResponse(arg) {
  if (!(arg instanceof volumes_v1_volumes_pb.VolumesCreateResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.volumes.v1.VolumesCreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_volumes_v1_VolumesCreateResponse(buffer_arg) {
  return volumes_v1_volumes_pb.VolumesCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_volumes_v1_VolumesDeleteRequest(arg) {
  if (!(arg instanceof volumes_v1_volumes_pb.VolumesDeleteRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.volumes.v1.VolumesDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_volumes_v1_VolumesDeleteRequest(buffer_arg) {
  return volumes_v1_volumes_pb.VolumesDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_volumes_v1_VolumesDeleteResponse(arg) {
  if (!(arg instanceof volumes_v1_volumes_pb.VolumesDeleteResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.volumes.v1.VolumesDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_volumes_v1_VolumesDeleteResponse(buffer_arg) {
  return volumes_v1_volumes_pb.VolumesDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_volumes_v1_VolumesListRequest(arg) {
  if (!(arg instanceof volumes_v1_volumes_pb.VolumesListRequest)) {
    throw new Error('Expected argument of type com.docker.api.protos.volumes.v1.VolumesListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_volumes_v1_VolumesListRequest(buffer_arg) {
  return volumes_v1_volumes_pb.VolumesListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_docker_api_protos_volumes_v1_VolumesListResponse(arg) {
  if (!(arg instanceof volumes_v1_volumes_pb.VolumesListResponse)) {
    throw new Error('Expected argument of type com.docker.api.protos.volumes.v1.VolumesListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_docker_api_protos_volumes_v1_VolumesListResponse(buffer_arg) {
  return volumes_v1_volumes_pb.VolumesListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var VolumesService = exports.VolumesService = {
  volumesCreate: {
    path: '/com.docker.api.protos.volumes.v1.Volumes/VolumesCreate',
    requestStream: false,
    responseStream: false,
    requestType: volumes_v1_volumes_pb.VolumesCreateRequest,
    responseType: volumes_v1_volumes_pb.VolumesCreateResponse,
    requestSerialize: serialize_com_docker_api_protos_volumes_v1_VolumesCreateRequest,
    requestDeserialize: deserialize_com_docker_api_protos_volumes_v1_VolumesCreateRequest,
    responseSerialize: serialize_com_docker_api_protos_volumes_v1_VolumesCreateResponse,
    responseDeserialize: deserialize_com_docker_api_protos_volumes_v1_VolumesCreateResponse,
  },
  volumesList: {
    path: '/com.docker.api.protos.volumes.v1.Volumes/VolumesList',
    requestStream: false,
    responseStream: false,
    requestType: volumes_v1_volumes_pb.VolumesListRequest,
    responseType: volumes_v1_volumes_pb.VolumesListResponse,
    requestSerialize: serialize_com_docker_api_protos_volumes_v1_VolumesListRequest,
    requestDeserialize: deserialize_com_docker_api_protos_volumes_v1_VolumesListRequest,
    responseSerialize: serialize_com_docker_api_protos_volumes_v1_VolumesListResponse,
    responseDeserialize: deserialize_com_docker_api_protos_volumes_v1_VolumesListResponse,
  },
  volumesDelete: {
    path: '/com.docker.api.protos.volumes.v1.Volumes/VolumesDelete',
    requestStream: false,
    responseStream: false,
    requestType: volumes_v1_volumes_pb.VolumesDeleteRequest,
    responseType: volumes_v1_volumes_pb.VolumesDeleteResponse,
    requestSerialize: serialize_com_docker_api_protos_volumes_v1_VolumesDeleteRequest,
    requestDeserialize: deserialize_com_docker_api_protos_volumes_v1_VolumesDeleteRequest,
    responseSerialize: serialize_com_docker_api_protos_volumes_v1_VolumesDeleteResponse,
    responseDeserialize: deserialize_com_docker_api_protos_volumes_v1_VolumesDeleteResponse,
  },
};

exports.VolumesClient = grpc.makeGenericClientConstructor(VolumesService);
