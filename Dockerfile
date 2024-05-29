FROM node:20.13.1-alpine

LABEL authors="hmoua"

WORKDIR /app

FROM node:16.13-alpine

LABEL authors="hmoua"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache git bash dos2unix mysql-client

COPY . ./

RUN dos2unix wait-for-it.sh entrypoint.sh && chmod +x wait-for-it.sh entrypoint.sh

ARG DATABASE_URL
ARG MYSQL_ROOT_PASSWORD
ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD

ENV DATABASE_URL=${DATABASE_URL}
ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}

RUN npm run build

RUN apk add --no-cache python3 py3-pip
RUN ln -s /usr/bin/python3 /usr/bin/python


EXPOSE 5050

ENTRYPOINT ["/app/entrypoint.sh"]

