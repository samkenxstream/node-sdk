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
    }
}

export class ComposeDownRequest extends jspb.Message { 

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
    }
}

export class ComposeDownResponse extends jspb.Message { 

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
    }
}
