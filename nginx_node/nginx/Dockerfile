FROM nginx:1.15.0-alpine

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT dockerize -template /etc/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -wait tcp://app:3000 -timeout 40s nginx -g "daemon off;"

COPY nginx.conf /etc/nginx/conf.d/default.conf