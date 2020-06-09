// package: com.docker.api.protos.containers.v1
// file: containers/v1/containers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Port extends jspb.Message { 
    getHostPort(): number;
    setHostPort(value: number): Port;

    getContainerPort(): number;
    setContainerPort(value: number): Port;

    getProtocol(): string;
    setProtocol(value: string): Port;

    getHostIp(): string;
    setHostIp(value: string): Port;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Port.AsObject;
    static toObject(includeInstance: boolean, msg: Port): Port.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Port, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Port;
    static deserializeBinaryFromReader(message: Port, reader: jspb.BinaryReader): Port;
}

export namespace Port {
    export type AsObject = {
        hostPort: number,
        containerPort: number,
        protocol: string,
        hostIp: string,
    }
}

export class Container extends jspb.Message { 
    getId(): string;
    setId(value: string): Container;

    getImage(): string;
    setImage(value: string): Container;

    getStatus(): string;
    setStatus(value: string): Container;

    getCommand(): string;
    setCommand(value: string): Container;

    getCpuTime(): number;
    setCpuTime(value: number): Container;

    getMemoryUsage(): number;
    setMemoryUsage(value: number): Container;

    getMemoryLimit(): number;
    setMemoryLimit(value: number): Container;

    getPidsCurrent(): number;
    setPidsCurrent(value: number): Container;

    getPidsLimit(): number;
    setPidsLimit(value: number): Container;

    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): Container;
    addLabels(value: string, index?: number): string;

    clearPortsList(): void;
    getPortsList(): Array<Port>;
    setPortsList(value: Array<Port>): Container;
    addPorts(value?: Port, index?: number): Port;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Container.AsObject;
    static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Container;
    static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
}

export namespace Container {
    export type AsObject = {
        id: string,
        image: string,
        status: string,
        command: string,
        cpuTime: number,
        memoryUsage: number,
        memoryLimit: number,
        pidsCurrent: number,
        pidsLimit: number,
        labelsList: Array<string>,
        portsList: Array<Port.AsObject>,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteRequest;

    getForce(): boolean;
    setForce(value: boolean): DeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: string,
        force: boolean,
    }
}

export class DeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
    }
}

export class StopRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): StopRequest;

    getTimeout(): number;
    setTimeout(value: number): StopRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopRequest): StopRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopRequest;
    static deserializeBinaryFromReader(message: StopRequest, reader: jspb.BinaryReader): StopRequest;
}

export namespace StopRequest {
    export type AsObject = {
        id: string,
        timeout: number,
    }
}

export class StopResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StopResponse): StopResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopResponse;
    static deserializeBinaryFromReader(message: StopResponse, reader: jspb.BinaryReader): StopResponse;
}

export namespace StopResponse {
    export type AsObject = {
    }
}

export class RunRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): RunRequest;

    getImage(): string;
    setImage(value: string): RunRequest;

    clearPortsList(): void;
    getPortsList(): Array<Port>;
    setPortsList(value: Array<Port>): RunRequest;
    addPorts(value?: Port, index?: number): Port;


    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    clearVolumesList(): void;
    getVolumesList(): Array<string>;
    setVolumesList(value: Array<string>): RunRequest;
    addVolumes(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunRequest): RunRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunRequest;
    static deserializeBinaryFromReader(message: RunRequest, reader: jspb.BinaryReader): RunRequest;
}

export namespace RunRequest {
    export type AsObject = {
        id: string,
        image: string,
        portsList: Array<Port.AsObject>,

        labelsMap: Array<[string, string]>,
        volumesList: Array<string>,
    }
}

export class RunResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunResponse): RunResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunResponse;
    static deserializeBinaryFromReader(message: RunResponse, reader: jspb.BinaryReader): RunResponse;
}

export namespace RunResponse {
    export type AsObject = {
    }
}

export class ExecRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ExecRequest;

    getCommand(): string;
    setCommand(value: string): ExecRequest;

    getStreamId(): string;
    setStreamId(value: string): ExecRequest;

    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): ExecRequest;
    addArgs(value: string, index?: number): string;

    clearEnvList(): void;
    getEnvList(): Array<string>;
    setEnvList(value: Array<string>): ExecRequest;
    addEnv(value: string, index?: number): string;

    getTty(): boolean;
    setTty(value: boolean): ExecRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecRequest): ExecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecRequest;
    static deserializeBinaryFromReader(message: ExecRequest, reader: jspb.BinaryReader): ExecRequest;
}

export namespace ExecRequest {
    export type AsObject = {
        id: string,
        command: string,
        streamId: string,
        argsList: Array<string>,
        envList: Array<string>,
        tty: boolean,
    }
}

export class ExecResponse extends jspb.Message { 
    getOutput(): Uint8Array | string;
    getOutput_asU8(): Uint8Array;
    getOutput_asB64(): string;
    setOutput(value: Uint8Array | string): ExecResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecResponse): ExecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecResponse;
    static deserializeBinaryFromReader(message: ExecResponse, reader: jspb.BinaryReader): ExecResponse;
}

export namespace ExecResponse {
    export type AsObject = {
        output: Uint8Array | string,
    }
}

export class ListRequest extends jspb.Message { 
    getAll(): boolean;
    setAll(value: boolean): ListRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRequest;
    static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
    export type AsObject = {
        all: boolean,
    }
}

export class ListResponse extends jspb.Message { 
    clearContainersList(): void;
    getContainersList(): Array<Container>;
    setContainersList(value: Array<Container>): ListResponse;
    addContainers(value?: Container, index?: number): Container;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResponse;
    static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
    export type AsObject = {
        containersList: Array<Container.AsObject>,
    }
}

export class LogsRequest extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): LogsRequest;

    getFollow(): boolean;
    setFollow(value: boolean): LogsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogsRequest): LogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogsRequest;
    static deserializeBinaryFromReader(message: LogsRequest, reader: jspb.BinaryReader): LogsRequest;
}

export namespace LogsRequest {
    export type AsObject = {
        containerId: string,
        follow: boolean,
    }
}

export class LogsResponse extends jspb.Message { 
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): LogsResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogsResponse): LogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogsResponse;
    static deserializeBinaryFromReader(message: LogsResponse, reader: jspb.BinaryReader): LogsResponse;
}

export namespace LogsResponse {
    export type AsObject = {
        value: Uint8Array | string,
    }
}
