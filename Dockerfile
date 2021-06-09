FROM node:12-slim
RUN DEBIAN_FRONTEND=noninteractive && apt-get update && apt-get install -y inetutils* && apt-get install -y netcat
RUN npm install -g serverless npm-watch
WORKDIR /app
# precisa rodar o build do tsc antes de criar o container
# quando tiver mts
# ln -s /app/dist/utils/sqs.js /opt/nodejs/sqs.js 
# ln -s /app/dist/l2/a.js /opt/nodejs/a.js 
RUN ln -s /app/dist/utils /opt/nodejs 
VOLUME /app