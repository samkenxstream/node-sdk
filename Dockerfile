# syntax = docker/dockerfile:experimental
FROM node:12-buster-slim AS base
WORKDIR /src
ARG DOCKER_GITHUB_TOKEN
ENV DOCKER_GITHUB_TOKEN=${DOCKER_GITHUB_TOKEN}
COPY package.json .
COPY yarn.lock .

RUN --mount=type=cache,target=/usr/local/share/.cache/yarn/v6 \
    yarn install --frozen-lockfile

COPY . .

FROM base AS test
CMD ["yarn", "test"]
VOLUME ["/var/run/docker.sock"]
COPY --from=docker /usr/local/bin/docker /usr/local/bin/com.docker.cli
RUN yarn download-cli

FROM base AS download-protos
RUN yarn download-protos
RUN ./protos.sh

FROM scratch AS protos
COPY --from=download-protos /src/src /
