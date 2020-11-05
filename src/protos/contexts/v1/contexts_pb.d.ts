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

    getDescription(): string;
    setDescription(value: string): Context;


    hasDockerEndpoint(): boolean;
    clearDockerEndpoint(): void;
    getDockerEndpoint(): DockerEndpoint | undefined;
    setDockerEndpoint(value?: DockerEndpoint): Context;


    hasAciEndpoint(): boolean;
    clearAciEndpoint(): void;
    getAciEndpoint(): AciEndpoint | undefined;
    setAciEndpoint(value?: AciEndpoint): Context;


    hasEcsEndpoint(): boolean;
    clearEcsEndpoint(): void;
    getEcsEndpoint(): EcsEndpoint | undefined;
    setEcsEndpoint(value?: EcsEndpoint): Context;


    getEndpointCase(): Context.EndpointCase;

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
        description: string,
        dockerEndpoint?: DockerEndpoint.AsObject,
        aciEndpoint?: AciEndpoint.AsObject,
        ecsEndpoint?: EcsEndpoint.AsObject,
    }

    export enum EndpointCase {
        ENDPOINT_NOT_SET = 0,
    
    DOCKER_ENDPOINT = 5,

    ACI_ENDPOINT = 6,

    ECS_ENDPOINT = 7,

    }

}

export class DockerEndpoint extends jspb.Message { 
    getHost(): string;
    setHost(value: string): DockerEndpoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DockerEndpoint.AsObject;
    static toObject(includeInstance: boolean, msg: DockerEndpoint): DockerEndpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DockerEndpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DockerEndpoint;
    static deserializeBinaryFromReader(message: DockerEndpoint, reader: jspb.BinaryReader): DockerEndpoint;
}

export namespace DockerEndpoint {
    export type AsObject = {
        host: string,
    }
}

export class AciEndpoint extends jspb.Message { 
    getRegion(): string;
    setRegion(value: string): AciEndpoint;

    getResourceGroup(): string;
    setResourceGroup(value: string): AciEndpoint;

    getSubscriptionId(): string;
    setSubscriptionId(value: string): AciEndpoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AciEndpoint.AsObject;
    static toObject(includeInstance: boolean, msg: AciEndpoint): AciEndpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AciEndpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AciEndpoint;
    static deserializeBinaryFromReader(message: AciEndpoint, reader: jspb.BinaryReader): AciEndpoint;
}

export namespace AciEndpoint {
    export type AsObject = {
        region: string,
        resourceGroup: string,
        subscriptionId: string,
    }
}

export class EcsEndpoint extends jspb.Message { 
    getProfile(): string;
    setProfile(value: string): EcsEndpoint;

    getFromEnvironment(): boolean;
    setFromEnvironment(value: boolean): EcsEndpoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EcsEndpoint.AsObject;
    static toObject(includeInstance: boolean, msg: EcsEndpoint): EcsEndpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EcsEndpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EcsEndpoint;
    static deserializeBinaryFromReader(message: EcsEndpoint, reader: jspb.BinaryReader): EcsEndpoint;
}

export namespace EcsEndpoint {
    export type AsObject = {
        profile: string,
        fromEnvironment: boolean,
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
