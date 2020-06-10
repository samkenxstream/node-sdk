import { ContainersClient } from './protos/containers/v1/containers_grpc_pb';
import { ContextsClient } from './protos/contexts/v1/contexts_grpc_pb';
import { ComposeClient } from './protos/compose/v1/compose_grpc_pb';
import { StreamingClient } from './protos/streams/v1/streams_grpc_pb';
export declare class Containers extends ContainersClient {
    constructor();
}
export declare class Contexts extends ContextsClient {
    constructor();
}
export declare class Compose extends ComposeClient {
    constructor();
}
export declare class Streams extends StreamingClient {
    constructor();
}
