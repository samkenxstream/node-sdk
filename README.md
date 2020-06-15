# Docker CLI JavaScript SDK
![CI](https://github.com/docker/node-sdk/workflows/CI/badge.svg)

<!-- FIXME(chris-crone): Add link to NPM package -->
This repository contains the source code for the Docker CLI JavaScript SDK. You
can find the NPM module [here](https://xxx).

> :warning: This SDK is in beta, expect things to change or break!

## Getting started

Add `node-sdk` to the dependencies 

```console
yarn add git+https://github.com/docker/node-sdk.git
```

You can then use the SDK:

```typescript
// import the contexts client
import { Contexts } from "@docker/sdk";
// Import the request/response types for contexts.
// Note: While this is not released on npm you will need to import these
// as `@docker/sdk/dist/contexts`. Once the library is released the import path
// will be `@docker/sdk/contexts`.
import {
  ListRequest,
  ListResponse,
} from "@docker/sdk/dist/contexts";

const client = new Contexts();

// Get the list of contexts
client.list(new ListRequest(), (err: any, resp: ListResponse) => {
    if (err) {
        console.error(err);
        return;
    }

    const contexts = resp
        .getContextsList()
        .map((c) => new Context(c.getName()));

    console.log(contexts);
});
```

When you run this code you should see a list of contexts, for example:

```console
$ ts-node example.ts
aci-context
default
```

## Examples

You can find examples for how to use this SDK in the [examples](./examples)
directory.
