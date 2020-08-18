ifeq (${DOCKER_GITHUB_TOKEN},)
	@echo "DOCKER_GITHUB_TOKEN empty
	@echo "Set with a GitHub token that has access to docker/compose-cli"
	exit 1
endif

IMG?=node-sdk-test

all: test

.PHONY: test
test:
	@docker build --target test --tag ${IMG} --build-arg DOCKER_GITHUB_TOKEN .
	docker run --rm \
		-v /var/run/docker.sock:/var/run/docker.sock \
		${IMG}

.PHONY: protos
protos:
	@docker build --target protos --build-arg DOCKER_GITHUB_TOKEN --output ./src .
