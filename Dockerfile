FROM node:12-slim
RUN npm install -g serverless
WORKDIR /app
VOLUME /app