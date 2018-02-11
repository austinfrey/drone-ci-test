FROM node:8.9-alpine

COPY public public
COPY server.js server.js
COPY package.json package.json

RUN npm install

CMD ["node", "server"]
