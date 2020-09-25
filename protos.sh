# Copyright 2020 Docker CLI JavaScript SDK authors

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#     http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/bin/bash

node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./src/protos \
    --grpc_out=grpc_js:./src/protos \
    -I src/protos \
    src/protos/contexts/v1/*.proto \
    src/protos/containers/v1/*.proto \
    src/protos/compose/v1/*.proto \
    src/protos/streams/v1/*.proto

# generate d.ts codes
node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=generate_package_definition:./src/protos \
    -I src/protos \
    src/protos/contexts/v1/*.proto \
    src/protos/containers/v1/*.proto \
    src/protos/compose/v1/*.proto \
    src/protos/streams/v1/*.proto
