"use strict";
/*
   Copyright 2020 The Authors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streams = exports.Compose = exports.Contexts = exports.Containers = void 0;
const os_1 = require("os");
const grpc_js_1 = require("@grpc/grpc-js");
const containers_grpc_pb_1 = require("./protos/containers/v1/containers_grpc_pb");
const contexts_grpc_pb_1 = require("./protos/contexts/v1/contexts_grpc_pb");
const compose_grpc_pb_1 = require("./protos/compose/v1/compose_grpc_pb");
const streams_grpc_pb_1 = require("./protos/streams/v1/streams_grpc_pb");
let addr = 'unix:////./pipe/dockerCliApi';
if (os_1.platform() !== 'win32') {
    const homeDir = os_1.homedir();
    addr = `unix://${homeDir}/.docker/run/docker-cli-api.sock`;
}
class Containers extends containers_grpc_pb_1.ContainersClient {
    constructor(address = addr) {
        super(address, grpc_js_1.credentials.createInsecure());
    }
}
exports.Containers = Containers;
class Contexts extends contexts_grpc_pb_1.ContextsClient {
    constructor(address = addr) {
        super(address, grpc_js_1.credentials.createInsecure());
    }
}
exports.Contexts = Contexts;
class Compose extends compose_grpc_pb_1.ComposeClient {
    constructor(address = addr) {
        super(address, grpc_js_1.credentials.createInsecure());
    }
}
exports.Compose = Compose;
class Streams extends streams_grpc_pb_1.StreamingClient {
    constructor(address = addr) {
        super(address, grpc_js_1.credentials.createInsecure());
    }
}
exports.Streams = Streams;
//# sourceMappingURL=index.js.map