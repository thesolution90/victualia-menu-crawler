FROM node:alpine

ENV SLACKCHANNEL=tobefilledin
ENV SLACKWEBHOOK=tobefilledin
ENV SLACKUSER=tobefilledin

COPY . .
WORKDIR /app

CMD [ "npm", "run", "start" ]