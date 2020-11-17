// package: com.docker.api.protos.compose.v1
// file: compose/v1/compose.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ComposeUpRequest extends jspb.Message { 
    getProjectname(): string;
    setProjectname(value: string): ComposeUpRequest;

    getWorkdir(): string;
    setWorkdir(value: string): ComposeUpRequest;

    clearFilesList(): void;
    getFilesList(): Array<string>;
    setFilesList(value: Array<string>): ComposeUpRequest;
    addFiles(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeUpRequest): ComposeUpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeUpRequest;
    static deserializeBinaryFromReader(message: ComposeUpRequest, reader: jspb.BinaryReader): ComposeUpRequest;
}

export namespace ComposeUpRequest {
    export type AsObject = {
        projectname: string,
        workdir: string,
        filesList: Array<string>,
    }
}

export class ComposeUpResponse extends jspb.Message { 
    getProjectname(): string;
    setProjectname(value: string): ComposeUpResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeUpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeUpResponse): ComposeUpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeUpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeUpResponse;
    static deserializeBinaryFromReader(message: ComposeUpResponse, reader: jspb.BinaryReader): ComposeUpResponse;
}

export namespace ComposeUpResponse {
    export type AsObject = {
        projectname: string,
    }
}

export class ComposeDownRequest extends jspb.Message { 
    getProjectname(): string;
    setProjectname(value: string): ComposeDownRequest;

    getWorkdir(): string;
    setWorkdir(value: string): ComposeDownRequest;

    clearFilesList(): void;
    getFilesList(): Array<string>;
    setFilesList(value: Array<string>): ComposeDownRequest;
    addFiles(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeDownRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeDownRequest): ComposeDownRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeDownRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeDownRequest;
    static deserializeBinaryFromReader(message: ComposeDownRequest, reader: jspb.BinaryReader): ComposeDownRequest;
}

export namespace ComposeDownRequest {
    export type AsObject = {
        projectname: string,
        workdir: string,
        filesList: Array<string>,
    }
}

export class ComposeDownResponse extends jspb.Message { 
    getProjectname(): string;
    setProjectname(value: string): ComposeDownResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeDownResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeDownResponse): ComposeDownResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeDownResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeDownResponse;
    static deserializeBinaryFromReader(message: ComposeDownResponse, reader: jspb.BinaryReader): ComposeDownResponse;
}

export namespace ComposeDownResponse {
    export type AsObject = {
        projectname: string,
    }
}

export class ComposeStacksRequest extends jspb.Message { 
    getProjectname(): string;
    setProjectname(value: string): ComposeStacksRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeStacksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeStacksRequest): ComposeStacksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeStacksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeStacksRequest;
    static deserializeBinaryFromReader(message: ComposeStacksRequest, reader: jspb.BinaryReader): ComposeStacksRequest;
}

export namespace ComposeStacksRequest {
    export type AsObject = {
        projectname: string,
    }
}

export class ComposeStacksResponse extends jspb.Message { 
    clearStacksList(): void;
    getStacksList(): Array<Stack>;
    setStacksList(value: Array<Stack>): ComposeStacksResponse;
    addStacks(value?: Stack, index?: number): Stack;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeStacksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeStacksResponse): ComposeStacksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeStacksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeStacksResponse;
    static deserializeBinaryFromReader(message: ComposeStacksResponse, reader: jspb.BinaryReader): ComposeStacksResponse;
}

export namespace ComposeStacksResponse {
    export type AsObject = {
        stacksList: Array<Stack.AsObject>,
    }
}

export class Stack extends jspb.Message { 
    getId(): string;
    setId(value: string): Stack;

    getName(): string;
    setName(value: string): Stack;

    getStatus(): string;
    setStatus(value: string): Stack;

    getReason(): string;
    setReason(value: string): Stack;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stack.AsObject;
    static toObject(includeInstance: boolean, msg: Stack): Stack.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stack, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stack;
    static deserializeBinaryFromReader(message: Stack, reader: jspb.BinaryReader): Stack;
}

export namespace Stack {
    export type AsObject = {
        id: string,
        name: string,
        status: string,
        reason: string,
    }
}

export class ComposeServicesRequest extends jspb.Message { 
    getProjectname(): string;
    setProjectname(value: string): ComposeServicesRequest;

    getWorkdir(): string;
    setWorkdir(value: string): ComposeServicesRequest;

    clearFilesList(): void;
    getFilesList(): Array<string>;
    setFilesList(value: Array<string>): ComposeServicesRequest;
    addFiles(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeServicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeServicesRequest): ComposeServicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeServicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeServicesRequest;
    static deserializeBinaryFromReader(message: ComposeServicesRequest, reader: jspb.BinaryReader): ComposeServicesRequest;
}

export namespace ComposeServicesRequest {
    export type AsObject = {
        projectname: string,
        workdir: string,
        filesList: Array<string>,
    }
}

export class ComposeServicesResponse extends jspb.Message { 
    clearServicesList(): void;
    getServicesList(): Array<Service>;
    setServicesList(value: Array<Service>): ComposeServicesResponse;
    addServices(value?: Service, index?: number): Service;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComposeServicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ComposeServicesResponse): ComposeServicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComposeServicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComposeServicesResponse;
    static deserializeBinaryFromReader(message: ComposeServicesResponse, reader: jspb.BinaryReader): ComposeServicesResponse;
}

export namespace ComposeServicesResponse {
    export type AsObject = {
        servicesList: Array<Service.AsObject>,
    }
}

export class Service extends jspb.Message { 
    getId(): string;
    setId(value: string): Service;

    getName(): string;
    setName(value: string): Service;

    getReplicas(): number;
    setReplicas(value: number): Service;

    getDesired(): number;
    setDesired(value: number): Service;

    clearPortsList(): void;
    getPortsList(): Array<string>;
    setPortsList(value: Array<string>): Service;
    addPorts(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
    export type AsObject = {
        id: string,
        name: string,
        replicas: number,
        desired: number,
        portsList: Array<string>,
    }
}
