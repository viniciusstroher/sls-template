FROM node:12-slim
RUN DEBIAN_FRONTEND=noninteractive && apt-get update && apt-get install -y inetutils* && apt-get install -y netcat
RUN npm install -g serverless npm-watch
WORKDIR /app
VOLUME /app