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
