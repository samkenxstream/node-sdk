// package: com.docker.api.protos.streams.v1
// file: streams/v1/streams.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class BytesMessage extends jspb.Message { 
    getType(): IOStream;
    setType(value: IOStream): BytesMessage;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): BytesMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BytesMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BytesMessage): BytesMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BytesMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BytesMessage;
    static deserializeBinaryFromReader(message: BytesMessage, reader: jspb.BinaryReader): BytesMessage;
}

export namespace BytesMessage {
    export type AsObject = {
        type: IOStream,
        value: Uint8Array | string,
    }
}

export class ResizeMessage extends jspb.Message { 
    getWidth(): number;
    setWidth(value: number): ResizeMessage;

    getHeight(): number;
    setHeight(value: number): ResizeMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResizeMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ResizeMessage): ResizeMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResizeMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResizeMessage;
    static deserializeBinaryFromReader(message: ResizeMessage, reader: jspb.BinaryReader): ResizeMessage;
}

export namespace ResizeMessage {
    export type AsObject = {
        width: number,
        height: number,
    }
}

export class ExitMessage extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): ExitMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExitMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ExitMessage): ExitMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExitMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExitMessage;
    static deserializeBinaryFromReader(message: ExitMessage, reader: jspb.BinaryReader): ExitMessage;
}

export namespace ExitMessage {
    export type AsObject = {
        status: number,
    }
}

export enum IOStream {
    STDIN = 0,
    STDOUT = 1,
    STDERR = 2,
}
