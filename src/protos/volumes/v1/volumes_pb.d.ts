// package: com.docker.api.protos.volumes.v1
// file: volumes/v1/volumes.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Volume extends jspb.Message { 
    getId(): string;
    setId(value: string): Volume;

    getDescription(): string;
    setDescription(value: string): Volume;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Volume.AsObject;
    static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Volume;
    static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
    export type AsObject = {
        id: string,
        description: string,
    }
}

export class AciVolumeCreateOptions extends jspb.Message { 
    getStorageAccount(): string;
    setStorageAccount(value: string): AciVolumeCreateOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AciVolumeCreateOptions.AsObject;
    static toObject(includeInstance: boolean, msg: AciVolumeCreateOptions): AciVolumeCreateOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AciVolumeCreateOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AciVolumeCreateOptions;
    static deserializeBinaryFromReader(message: AciVolumeCreateOptions, reader: jspb.BinaryReader): AciVolumeCreateOptions;
}

export namespace AciVolumeCreateOptions {
    export type AsObject = {
        storageAccount: string,
    }
}

export class VolumesCreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): VolumesCreateRequest;


    hasAciOption(): boolean;
    clearAciOption(): void;
    getAciOption(): AciVolumeCreateOptions | undefined;
    setAciOption(value?: AciVolumeCreateOptions): VolumesCreateRequest;


    getOptionsCase(): VolumesCreateRequest.OptionsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesCreateRequest): VolumesCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesCreateRequest;
    static deserializeBinaryFromReader(message: VolumesCreateRequest, reader: jspb.BinaryReader): VolumesCreateRequest;
}

export namespace VolumesCreateRequest {
    export type AsObject = {
        name: string,
        aciOption?: AciVolumeCreateOptions.AsObject,
    }

    export enum OptionsCase {
        OPTIONS_NOT_SET = 0,
    
    ACI_OPTION = 2,

    }

}

export class VolumesCreateResponse extends jspb.Message { 

    hasVolume(): boolean;
    clearVolume(): void;
    getVolume(): Volume | undefined;
    setVolume(value?: Volume): VolumesCreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesCreateResponse): VolumesCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesCreateResponse;
    static deserializeBinaryFromReader(message: VolumesCreateResponse, reader: jspb.BinaryReader): VolumesCreateResponse;
}

export namespace VolumesCreateResponse {
    export type AsObject = {
        volume?: Volume.AsObject,
    }
}

export class VolumesListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesListRequest): VolumesListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesListRequest;
    static deserializeBinaryFromReader(message: VolumesListRequest, reader: jspb.BinaryReader): VolumesListRequest;
}

export namespace VolumesListRequest {
    export type AsObject = {
    }
}

export class VolumesListResponse extends jspb.Message { 
    clearVolumesList(): void;
    getVolumesList(): Array<Volume>;
    setVolumesList(value: Array<Volume>): VolumesListResponse;
    addVolumes(value?: Volume, index?: number): Volume;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesListResponse): VolumesListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesListResponse;
    static deserializeBinaryFromReader(message: VolumesListResponse, reader: jspb.BinaryReader): VolumesListResponse;
}

export namespace VolumesListResponse {
    export type AsObject = {
        volumesList: Array<Volume.AsObject>,
    }
}

export class VolumesDeleteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): VolumesDeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesDeleteRequest): VolumesDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesDeleteRequest;
    static deserializeBinaryFromReader(message: VolumesDeleteRequest, reader: jspb.BinaryReader): VolumesDeleteRequest;
}

export namespace VolumesDeleteRequest {
    export type AsObject = {
        id: string,
    }
}

export class VolumesDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesDeleteResponse): VolumesDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesDeleteResponse;
    static deserializeBinaryFromReader(message: VolumesDeleteResponse, reader: jspb.BinaryReader): VolumesDeleteResponse;
}

export namespace VolumesDeleteResponse {
    export type AsObject = {
    }
}

export class VolumesInspectRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): VolumesInspectRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesInspectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesInspectRequest): VolumesInspectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesInspectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesInspectRequest;
    static deserializeBinaryFromReader(message: VolumesInspectRequest, reader: jspb.BinaryReader): VolumesInspectRequest;
}

export namespace VolumesInspectRequest {
    export type AsObject = {
        id: string,
    }
}

export class VolumesInspectResponse extends jspb.Message { 

    hasVolume(): boolean;
    clearVolume(): void;
    getVolume(): Volume | undefined;
    setVolume(value?: Volume): VolumesInspectResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumesInspectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumesInspectResponse): VolumesInspectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumesInspectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumesInspectResponse;
    static deserializeBinaryFromReader(message: VolumesInspectResponse, reader: jspb.BinaryReader): VolumesInspectResponse;
}

export namespace VolumesInspectResponse {
    export type AsObject = {
        volume?: Volume.AsObject,
    }
}
