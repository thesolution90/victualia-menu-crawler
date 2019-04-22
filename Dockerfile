FROM node:alpine

COPY . .
WORKDIR /app

RUN npm i

CMD [ "npm", "run", "start" ]