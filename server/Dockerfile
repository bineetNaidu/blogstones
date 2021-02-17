FROM node:14.14.0-alpine

ARG DUMB_INIT_VERSION=1.2.2
RUN apk add --no-cache build-base python2 yarn && \
 wget -O dumb-init -q https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
 chmod +x dumb-init
ADD . /home/node


WORKDIR /BlogStones
COPY package.json ./
RUN yarn install
COPY ./ ./

CMD [ "yarn", "dev" ]