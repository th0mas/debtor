FROM node:10-alpine

RUN apk update && apk add inotify-tools

COPY package*.json /opt/
COPY yarn.lock /opt/
WORKDIR /opt/
RUN yarn install
ENV PATH /opt/node_modules/.bin:$PATH

COPY . /opt/app
WORKDIR /opt/app

CMD yarn start