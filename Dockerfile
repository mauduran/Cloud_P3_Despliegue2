FROM node:12-alpine

ARG PORT_NUM=4500
ENV PORT=4500

LABEL autor="Mauricio"

WORKDIR /usr/src/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT_NUM}

CMD [ "npm", "start" ]