FROM node:8.9-alpine

COPY public public
COPY server.js server.js
COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm install --production

CMD ["node", "server"]
