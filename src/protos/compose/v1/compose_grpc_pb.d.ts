// package: com.docker.api.protos.compose.v1
// file: compose/v1/compose.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as compose_v1_compose_pb from "../../compose/v1/compose_pb";

interface IComposeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    up: IComposeService_IUp;
    down: IComposeService_IDown;
}

interface IComposeService_IUp extends grpc.MethodDefinition<compose_v1_compose_pb.ComposeUpRequest, compose_v1_compose_pb.ComposeUpResponse> {
    path: string; // "/com.docker.api.protos.compose.v1.Compose/Up"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<compose_v1_compose_pb.ComposeUpRequest>;
    requestDeserialize: grpc.deserialize<compose_v1_compose_pb.ComposeUpRequest>;
    responseSerialize: grpc.serialize<compose_v1_compose_pb.ComposeUpResponse>;
    responseDeserialize: grpc.deserialize<compose_v1_compose_pb.ComposeUpResponse>;
}
interface IComposeService_IDown extends grpc.MethodDefinition<compose_v1_compose_pb.ComposeDownRequest, compose_v1_compose_pb.ComposeDownResponse> {
    path: string; // "/com.docker.api.protos.compose.v1.Compose/Down"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<compose_v1_compose_pb.ComposeDownRequest>;
    requestDeserialize: grpc.deserialize<compose_v1_compose_pb.ComposeDownRequest>;
    responseSerialize: grpc.serialize<compose_v1_compose_pb.ComposeDownResponse>;
    responseDeserialize: grpc.deserialize<compose_v1_compose_pb.ComposeDownResponse>;
}

export const ComposeService: IComposeService;

export interface IComposeServer {
    up: grpc.handleUnaryCall<compose_v1_compose_pb.ComposeUpRequest, compose_v1_compose_pb.ComposeUpResponse>;
    down: grpc.handleUnaryCall<compose_v1_compose_pb.ComposeDownRequest, compose_v1_compose_pb.ComposeDownResponse>;
}

export interface IComposeClient {
    up(request: compose_v1_compose_pb.ComposeUpRequest, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeUpResponse) => void): grpc.ClientUnaryCall;
    up(request: compose_v1_compose_pb.ComposeUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeUpResponse) => void): grpc.ClientUnaryCall;
    up(request: compose_v1_compose_pb.ComposeUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeUpResponse) => void): grpc.ClientUnaryCall;
    down(request: compose_v1_compose_pb.ComposeDownRequest, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeDownResponse) => void): grpc.ClientUnaryCall;
    down(request: compose_v1_compose_pb.ComposeDownRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeDownResponse) => void): grpc.ClientUnaryCall;
    down(request: compose_v1_compose_pb.ComposeDownRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeDownResponse) => void): grpc.ClientUnaryCall;
}

export class ComposeClient extends grpc.Client implements IComposeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public up(request: compose_v1_compose_pb.ComposeUpRequest, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeUpResponse) => void): grpc.ClientUnaryCall;
    public up(request: compose_v1_compose_pb.ComposeUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeUpResponse) => void): grpc.ClientUnaryCall;
    public up(request: compose_v1_compose_pb.ComposeUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeUpResponse) => void): grpc.ClientUnaryCall;
    public down(request: compose_v1_compose_pb.ComposeDownRequest, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeDownResponse) => void): grpc.ClientUnaryCall;
    public down(request: compose_v1_compose_pb.ComposeDownRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeDownResponse) => void): grpc.ClientUnaryCall;
    public down(request: compose_v1_compose_pb.ComposeDownRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: compose_v1_compose_pb.ComposeDownResponse) => void): grpc.ClientUnaryCall;
}
