// package: com.docker.api.protos.volumes.v1
// file: volumes/v1/volumes.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as volumes_v1_volumes_pb from "../../volumes/v1/volumes_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IVolumesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    volumesCreate: IVolumesService_IVolumesCreate;
    volumesList: IVolumesService_IVolumesList;
    volumesDelete: IVolumesService_IVolumesDelete;
}

interface IVolumesService_IVolumesCreate extends grpc.MethodDefinition<volumes_v1_volumes_pb.VolumesCreateRequest, volumes_v1_volumes_pb.VolumesCreateResponse> {
    path: string; // "/com.docker.api.protos.volumes.v1.Volumes/VolumesCreate"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<volumes_v1_volumes_pb.VolumesCreateRequest>;
    requestDeserialize: grpc.deserialize<volumes_v1_volumes_pb.VolumesCreateRequest>;
    responseSerialize: grpc.serialize<volumes_v1_volumes_pb.VolumesCreateResponse>;
    responseDeserialize: grpc.deserialize<volumes_v1_volumes_pb.VolumesCreateResponse>;
}
interface IVolumesService_IVolumesList extends grpc.MethodDefinition<volumes_v1_volumes_pb.VolumesListRequest, volumes_v1_volumes_pb.VolumesListResponse> {
    path: string; // "/com.docker.api.protos.volumes.v1.Volumes/VolumesList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<volumes_v1_volumes_pb.VolumesListRequest>;
    requestDeserialize: grpc.deserialize<volumes_v1_volumes_pb.VolumesListRequest>;
    responseSerialize: grpc.serialize<volumes_v1_volumes_pb.VolumesListResponse>;
    responseDeserialize: grpc.deserialize<volumes_v1_volumes_pb.VolumesListResponse>;
}
interface IVolumesService_IVolumesDelete extends grpc.MethodDefinition<volumes_v1_volumes_pb.VolumesDeleteRequest, volumes_v1_volumes_pb.VolumesDeleteResponse> {
    path: string; // "/com.docker.api.protos.volumes.v1.Volumes/VolumesDelete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<volumes_v1_volumes_pb.VolumesDeleteRequest>;
    requestDeserialize: grpc.deserialize<volumes_v1_volumes_pb.VolumesDeleteRequest>;
    responseSerialize: grpc.serialize<volumes_v1_volumes_pb.VolumesDeleteResponse>;
    responseDeserialize: grpc.deserialize<volumes_v1_volumes_pb.VolumesDeleteResponse>;
}

export const VolumesService: IVolumesService;

export interface IVolumesServer {
    volumesCreate: grpc.handleUnaryCall<volumes_v1_volumes_pb.VolumesCreateRequest, volumes_v1_volumes_pb.VolumesCreateResponse>;
    volumesList: grpc.handleUnaryCall<volumes_v1_volumes_pb.VolumesListRequest, volumes_v1_volumes_pb.VolumesListResponse>;
    volumesDelete: grpc.handleUnaryCall<volumes_v1_volumes_pb.VolumesDeleteRequest, volumes_v1_volumes_pb.VolumesDeleteResponse>;
}

export interface IVolumesClient {
    volumesCreate(request: volumes_v1_volumes_pb.VolumesCreateRequest, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesCreateResponse) => void): grpc.ClientUnaryCall;
    volumesCreate(request: volumes_v1_volumes_pb.VolumesCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesCreateResponse) => void): grpc.ClientUnaryCall;
    volumesCreate(request: volumes_v1_volumes_pb.VolumesCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesCreateResponse) => void): grpc.ClientUnaryCall;
    volumesList(request: volumes_v1_volumes_pb.VolumesListRequest, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesListResponse) => void): grpc.ClientUnaryCall;
    volumesList(request: volumes_v1_volumes_pb.VolumesListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesListResponse) => void): grpc.ClientUnaryCall;
    volumesList(request: volumes_v1_volumes_pb.VolumesListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesListResponse) => void): grpc.ClientUnaryCall;
    volumesDelete(request: volumes_v1_volumes_pb.VolumesDeleteRequest, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesDeleteResponse) => void): grpc.ClientUnaryCall;
    volumesDelete(request: volumes_v1_volumes_pb.VolumesDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesDeleteResponse) => void): grpc.ClientUnaryCall;
    volumesDelete(request: volumes_v1_volumes_pb.VolumesDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class VolumesClient extends grpc.Client implements IVolumesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public volumesCreate(request: volumes_v1_volumes_pb.VolumesCreateRequest, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesCreateResponse) => void): grpc.ClientUnaryCall;
    public volumesCreate(request: volumes_v1_volumes_pb.VolumesCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesCreateResponse) => void): grpc.ClientUnaryCall;
    public volumesCreate(request: volumes_v1_volumes_pb.VolumesCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesCreateResponse) => void): grpc.ClientUnaryCall;
    public volumesList(request: volumes_v1_volumes_pb.VolumesListRequest, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesListResponse) => void): grpc.ClientUnaryCall;
    public volumesList(request: volumes_v1_volumes_pb.VolumesListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesListResponse) => void): grpc.ClientUnaryCall;
    public volumesList(request: volumes_v1_volumes_pb.VolumesListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesListResponse) => void): grpc.ClientUnaryCall;
    public volumesDelete(request: volumes_v1_volumes_pb.VolumesDeleteRequest, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumesDelete(request: volumes_v1_volumes_pb.VolumesDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumesDelete(request: volumes_v1_volumes_pb.VolumesDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volumes_v1_volumes_pb.VolumesDeleteResponse) => void): grpc.ClientUnaryCall;
}
