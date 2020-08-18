export DOCKER_BUILDKIT=1

IMG?=node-sdk-test

all: build

.PHONY: build
build:
	@docker build --target build --output ./src .

.PHONY: test
test: check-token
	@docker build --target test --tag ${IMG} --build-arg DOCKER_GITHUB_TOKEN .
	@docker run --rm \
		-v /var/run/docker.sock:/var/run/docker.sock \
		${IMG}
	@docker rmi ${IMG}

.PHONY: lint
lint:
	@docker build --target lint .

.PHONY: protos
protos: check-token
	@docker build --target protos --build-arg DOCKER_GITHUB_TOKEN --output ./src .

.PHONY: check-token
check-token:
ifeq (${DOCKER_GITHUB_TOKEN},)
	$(error "Set DOCKER_GITHUB_TOKEN with a GitHub token that has access to docker/compose-cli")
endif
