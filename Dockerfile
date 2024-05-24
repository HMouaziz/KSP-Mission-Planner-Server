FROM node:16.13-alpine

LABEL authors="hmoua"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache git

COPY . ./

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

RUN ls -al src

RUN npm run build

RUN apk add --no-cache python3 py3-pip

EXPOSE 3000

CMD ["node", "main.js"]
