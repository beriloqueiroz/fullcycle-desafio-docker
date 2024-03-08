FROM node:alpine3.15

WORKDIR /usr/src/app

RUN apk update --no-cache \
    && apk add --no-cache wget openssl

ENV DOCKERIZE_VERSION v0.7.0

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY ./package*.json .

RUN npm install

COPY . .

EXPOSE 3000
