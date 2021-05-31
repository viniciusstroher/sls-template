FROM node:12-slim
RUN apt-get update && apt-get install -y inetutils*
RUN npm install -g serverless
WORKDIR /app
VOLUME /app