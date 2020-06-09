// package: com.docker.api.protos.streams.v1
// file: streams/v1/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as streams_v1_streams_pb from "../../streams/v1/streams_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IStreamingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    newStream: IStreamingService_INewStream;
}

interface IStreamingService_INewStream extends grpc.MethodDefinition<google_protobuf_any_pb.Any, google_protobuf_any_pb.Any> {
    path: string; // "/com.docker.api.protos.streams.v1.Streaming/NewStream"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_protobuf_any_pb.Any>;
    requestDeserialize: grpc.deserialize<google_protobuf_any_pb.Any>;
    responseSerialize: grpc.serialize<google_protobuf_any_pb.Any>;
    responseDeserialize: grpc.deserialize<google_protobuf_any_pb.Any>;
}

export const StreamingService: IStreamingService;

export interface IStreamingServer {
    newStream: grpc.handleBidiStreamingCall<google_protobuf_any_pb.Any, google_protobuf_any_pb.Any>;
}

export interface IStreamingClient {
    newStream(): grpc.ClientDuplexStream<google_protobuf_any_pb.Any, google_protobuf_any_pb.Any>;
    newStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_protobuf_any_pb.Any, google_protobuf_any_pb.Any>;
    newStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_protobuf_any_pb.Any, google_protobuf_any_pb.Any>;
}

export class StreamingClient extends grpc.Client implements IStreamingClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public newStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_protobuf_any_pb.Any, google_protobuf_any_pb.Any>;
    public newStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_protobuf_any_pb.Any, google_protobuf_any_pb.Any>;
}
