# Docker CLI JavaScript SDK

![CI](https://github.com/docker/node-sdk/workflows/CI/badge.svg)

This repository contains the source for the Node SDK to work with the
experimental Docker command line for Azure integration. The SDK is available as
an [npm package](https://www.npmjs.com/package/@docker/sdk)

> :warning: This SDK is in beta, expect things to change or break!

## Getting started

Add `@docker/sdk` to the dependencies

```console
yarn add @docker/sdk
```

You can then use the SDK:

```typescript
// import the contexts client
import { Contexts } from '@docker/sdk';
// import request and response classes
import { ListRequest, ListResponse } from '@docker/sdk/contexts';

const client = new Contexts();

// Get the list of contexts
client.list(new ListRequest(), (err: any, resp: ListResponse) => {
  if (err) {
    console.error(err);
    return;
  }

  const contexts = resp.getContextsList().map((c) => new Context(c.getName()));

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
