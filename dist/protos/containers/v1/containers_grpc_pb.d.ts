// package: com.docker.api.protos.containers.v1
// file: containers/v1/containers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as containers_v1_containers_pb from "../../containers/v1/containers_pb";

interface IContainersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IContainersService_IList;
    stop: IContainersService_IStop;
    run: IContainersService_IRun;
    exec: IContainersService_IExec;
    logs: IContainersService_ILogs;
    delete: IContainersService_IDelete;
    inspect: IContainersService_IInspect;
}

interface IContainersService_IList extends grpc.MethodDefinition<containers_v1_containers_pb.ListRequest, containers_v1_containers_pb.ListResponse> {
    path: string; // "/com.docker.api.protos.containers.v1.Containers/List"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<containers_v1_containers_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<containers_v1_containers_pb.ListRequest>;
    responseSerialize: grpc.serialize<containers_v1_containers_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<containers_v1_containers_pb.ListResponse>;
}
interface IContainersService_IStop extends grpc.MethodDefinition<containers_v1_containers_pb.StopRequest, containers_v1_containers_pb.StopResponse> {
    path: string; // "/com.docker.api.protos.containers.v1.Containers/Stop"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<containers_v1_containers_pb.StopRequest>;
    requestDeserialize: grpc.deserialize<containers_v1_containers_pb.StopRequest>;
    responseSerialize: grpc.serialize<containers_v1_containers_pb.StopResponse>;
    responseDeserialize: grpc.deserialize<containers_v1_containers_pb.StopResponse>;
}
interface IContainersService_IRun extends grpc.MethodDefinition<containers_v1_containers_pb.RunRequest, containers_v1_containers_pb.RunResponse> {
    path: string; // "/com.docker.api.protos.containers.v1.Containers/Run"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<containers_v1_containers_pb.RunRequest>;
    requestDeserialize: grpc.deserialize<containers_v1_containers_pb.RunRequest>;
    responseSerialize: grpc.serialize<containers_v1_containers_pb.RunResponse>;
    responseDeserialize: grpc.deserialize<containers_v1_containers_pb.RunResponse>;
}
interface IContainersService_IExec extends grpc.MethodDefinition<containers_v1_containers_pb.ExecRequest, containers_v1_containers_pb.ExecResponse> {
    path: string; // "/com.docker.api.protos.containers.v1.Containers/Exec"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<containers_v1_containers_pb.ExecRequest>;
    requestDeserialize: grpc.deserialize<containers_v1_containers_pb.ExecRequest>;
    responseSerialize: grpc.serialize<containers_v1_containers_pb.ExecResponse>;
    responseDeserialize: grpc.deserialize<containers_v1_containers_pb.ExecResponse>;
}
interface IContainersService_ILogs extends grpc.MethodDefinition<containers_v1_containers_pb.LogsRequest, containers_v1_containers_pb.LogsResponse> {
    path: string; // "/com.docker.api.protos.containers.v1.Containers/Logs"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<containers_v1_containers_pb.LogsRequest>;
    requestDeserialize: grpc.deserialize<containers_v1_containers_pb.LogsRequest>;
    responseSerialize: grpc.serialize<containers_v1_containers_pb.LogsResponse>;
    responseDeserialize: grpc.deserialize<containers_v1_containers_pb.LogsResponse>;
}
interface IContainersService_IDelete extends grpc.MethodDefinition<containers_v1_containers_pb.DeleteRequest, containers_v1_containers_pb.DeleteResponse> {
    path: string; // "/com.docker.api.protos.containers.v1.Containers/Delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<containers_v1_containers_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<containers_v1_containers_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<containers_v1_containers_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<containers_v1_containers_pb.DeleteResponse>;
}
interface IContainersService_IInspect extends grpc.MethodDefinition<containers_v1_containers_pb.InspectRequest, containers_v1_containers_pb.InspectResponse> {
    path: string; // "/com.docker.api.protos.containers.v1.Containers/Inspect"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<containers_v1_containers_pb.InspectRequest>;
    requestDeserialize: grpc.deserialize<containers_v1_containers_pb.InspectRequest>;
    responseSerialize: grpc.serialize<containers_v1_containers_pb.InspectResponse>;
    responseDeserialize: grpc.deserialize<containers_v1_containers_pb.InspectResponse>;
}

export const ContainersService: IContainersService;

export interface IContainersServer {
    list: grpc.handleUnaryCall<containers_v1_containers_pb.ListRequest, containers_v1_containers_pb.ListResponse>;
    stop: grpc.handleUnaryCall<containers_v1_containers_pb.StopRequest, containers_v1_containers_pb.StopResponse>;
    run: grpc.handleUnaryCall<containers_v1_containers_pb.RunRequest, containers_v1_containers_pb.RunResponse>;
    exec: grpc.handleUnaryCall<containers_v1_containers_pb.ExecRequest, containers_v1_containers_pb.ExecResponse>;
    logs: grpc.handleServerStreamingCall<containers_v1_containers_pb.LogsRequest, containers_v1_containers_pb.LogsResponse>;
    delete: grpc.handleUnaryCall<containers_v1_containers_pb.DeleteRequest, containers_v1_containers_pb.DeleteResponse>;
    inspect: grpc.handleUnaryCall<containers_v1_containers_pb.InspectRequest, containers_v1_containers_pb.InspectResponse>;
}

export interface IContainersClient {
    list(request: containers_v1_containers_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: containers_v1_containers_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: containers_v1_containers_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ListResponse) => void): grpc.ClientUnaryCall;
    stop(request: containers_v1_containers_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stop(request: containers_v1_containers_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stop(request: containers_v1_containers_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.StopResponse) => void): grpc.ClientUnaryCall;
    run(request: containers_v1_containers_pb.RunRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.RunResponse) => void): grpc.ClientUnaryCall;
    run(request: containers_v1_containers_pb.RunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.RunResponse) => void): grpc.ClientUnaryCall;
    run(request: containers_v1_containers_pb.RunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.RunResponse) => void): grpc.ClientUnaryCall;
    exec(request: containers_v1_containers_pb.ExecRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    exec(request: containers_v1_containers_pb.ExecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    exec(request: containers_v1_containers_pb.ExecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    logs(request: containers_v1_containers_pb.LogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<containers_v1_containers_pb.LogsResponse>;
    logs(request: containers_v1_containers_pb.LogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<containers_v1_containers_pb.LogsResponse>;
    delete(request: containers_v1_containers_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: containers_v1_containers_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: containers_v1_containers_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    inspect(request: containers_v1_containers_pb.InspectRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.InspectResponse) => void): grpc.ClientUnaryCall;
    inspect(request: containers_v1_containers_pb.InspectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.InspectResponse) => void): grpc.ClientUnaryCall;
    inspect(request: containers_v1_containers_pb.InspectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.InspectResponse) => void): grpc.ClientUnaryCall;
}

export class ContainersClient extends grpc.Client implements IContainersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public list(request: containers_v1_containers_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: containers_v1_containers_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: containers_v1_containers_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public stop(request: containers_v1_containers_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stop(request: containers_v1_containers_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stop(request: containers_v1_containers_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public run(request: containers_v1_containers_pb.RunRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.RunResponse) => void): grpc.ClientUnaryCall;
    public run(request: containers_v1_containers_pb.RunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.RunResponse) => void): grpc.ClientUnaryCall;
    public run(request: containers_v1_containers_pb.RunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.RunResponse) => void): grpc.ClientUnaryCall;
    public exec(request: containers_v1_containers_pb.ExecRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    public exec(request: containers_v1_containers_pb.ExecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    public exec(request: containers_v1_containers_pb.ExecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    public logs(request: containers_v1_containers_pb.LogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<containers_v1_containers_pb.LogsResponse>;
    public logs(request: containers_v1_containers_pb.LogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<containers_v1_containers_pb.LogsResponse>;
    public delete(request: containers_v1_containers_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: containers_v1_containers_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: containers_v1_containers_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public inspect(request: containers_v1_containers_pb.InspectRequest, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.InspectResponse) => void): grpc.ClientUnaryCall;
    public inspect(request: containers_v1_containers_pb.InspectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.InspectResponse) => void): grpc.ClientUnaryCall;
    public inspect(request: containers_v1_containers_pb.InspectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: containers_v1_containers_pb.InspectResponse) => void): grpc.ClientUnaryCall;
}
