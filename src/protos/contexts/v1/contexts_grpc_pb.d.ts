// package: com.docker.api.protos.context.v1
// file: contexts/v1/contexts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as contexts_v1_contexts_pb from "../../contexts/v1/contexts_pb";

interface IContextsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setCurrent: IContextsService_ISetCurrent;
    list: IContextsService_IList;
}

interface IContextsService_ISetCurrent extends grpc.MethodDefinition<contexts_v1_contexts_pb.SetCurrentRequest, contexts_v1_contexts_pb.SetCurrentResponse> {
    path: string; // "/com.docker.api.protos.context.v1.Contexts/SetCurrent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contexts_v1_contexts_pb.SetCurrentRequest>;
    requestDeserialize: grpc.deserialize<contexts_v1_contexts_pb.SetCurrentRequest>;
    responseSerialize: grpc.serialize<contexts_v1_contexts_pb.SetCurrentResponse>;
    responseDeserialize: grpc.deserialize<contexts_v1_contexts_pb.SetCurrentResponse>;
}
interface IContextsService_IList extends grpc.MethodDefinition<contexts_v1_contexts_pb.ListRequest, contexts_v1_contexts_pb.ListResponse> {
    path: string; // "/com.docker.api.protos.context.v1.Contexts/List"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contexts_v1_contexts_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<contexts_v1_contexts_pb.ListRequest>;
    responseSerialize: grpc.serialize<contexts_v1_contexts_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<contexts_v1_contexts_pb.ListResponse>;
}

export const ContextsService: IContextsService;

export interface IContextsServer {
    setCurrent: grpc.handleUnaryCall<contexts_v1_contexts_pb.SetCurrentRequest, contexts_v1_contexts_pb.SetCurrentResponse>;
    list: grpc.handleUnaryCall<contexts_v1_contexts_pb.ListRequest, contexts_v1_contexts_pb.ListResponse>;
}

export interface IContextsClient {
    setCurrent(request: contexts_v1_contexts_pb.SetCurrentRequest, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.SetCurrentResponse) => void): grpc.ClientUnaryCall;
    setCurrent(request: contexts_v1_contexts_pb.SetCurrentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.SetCurrentResponse) => void): grpc.ClientUnaryCall;
    setCurrent(request: contexts_v1_contexts_pb.SetCurrentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.SetCurrentResponse) => void): grpc.ClientUnaryCall;
    list(request: contexts_v1_contexts_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: contexts_v1_contexts_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: contexts_v1_contexts_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.ListResponse) => void): grpc.ClientUnaryCall;
}

export class ContextsClient extends grpc.Client implements IContextsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setCurrent(request: contexts_v1_contexts_pb.SetCurrentRequest, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.SetCurrentResponse) => void): grpc.ClientUnaryCall;
    public setCurrent(request: contexts_v1_contexts_pb.SetCurrentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.SetCurrentResponse) => void): grpc.ClientUnaryCall;
    public setCurrent(request: contexts_v1_contexts_pb.SetCurrentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.SetCurrentResponse) => void): grpc.ClientUnaryCall;
    public list(request: contexts_v1_contexts_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: contexts_v1_contexts_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: contexts_v1_contexts_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contexts_v1_contexts_pb.ListResponse) => void): grpc.ClientUnaryCall;
}
