// package: com.docker.api.protos.context.v1
// file: contexts/v1/contexts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Context extends jspb.Message { 
    getName(): string;
    setName(value: string): Context;

    getContexttype(): string;
    setContexttype(value: string): Context;

    getCurrent(): boolean;
    setCurrent(value: boolean): Context;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
}

export namespace Context {
    export type AsObject = {
        name: string,
        contexttype: string,
        current: boolean,
    }
}

export class SetCurrentRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): SetCurrentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCurrentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetCurrentRequest): SetCurrentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCurrentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCurrentRequest;
    static deserializeBinaryFromReader(message: SetCurrentRequest, reader: jspb.BinaryReader): SetCurrentRequest;
}

export namespace SetCurrentRequest {
    export type AsObject = {
        name: string,
    }
}

export class SetCurrentResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCurrentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetCurrentResponse): SetCurrentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCurrentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCurrentResponse;
    static deserializeBinaryFromReader(message: SetCurrentResponse, reader: jspb.BinaryReader): SetCurrentResponse;
}

export namespace SetCurrentResponse {
    export type AsObject = {
    }
}

export class ListRequest extends jspb.Message { 

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
    }
}

export class ListResponse extends jspb.Message { 
    clearContextsList(): void;
    getContextsList(): Array<Context>;
    setContextsList(value: Array<Context>): ListResponse;
    addContexts(value?: Context, index?: number): Context;


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
        contextsList: Array<Context.AsObject>,
    }
}
