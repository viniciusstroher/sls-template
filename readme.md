## Creating aws profile
### Para poder criar os objetos na aws é necessario ter um profile de IAM valida
### para tal, é necessari rodar o seguinte comando:

```bash
    aws configure 

    ou

    aws configure --profile teste #especificando o profile

    #AWS Access Key ID [None]: AKIA4QMTIFCPEEXEEOUQ
    #AWS Secret Access Key [None]: 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
    #Default region name [None]: us-east-2
    #Default output format [None]: json
```
---

## Deploying
### Para realizar o deploy é necessario rodar o seguinte comando

### ex:
```bash
    sls deploy -s dev --aws-profile teste

```

* -s prod = stage dev
* --aws-profile teste = pega o profile de aws configurado em ~/.aws/credentials contendo as regras do IAM

---

## Offline container
### 
```bash 
    # stack
    docker-compose up -d
    #sqs
    docker run -dit -p 9324:9324 -p 9325:9325 softwaremill/elasticmq-native

    #api gateway
    docker build -t sls/offline .
    docker run -dit -v %cd%:/app -p 3000:3000 --name offline sls/offline
```

É necessario um fix no pacote serverless-offlin-sqs
    node_modules\serverless-offline-sqs\src\sqs.js
    
    //FIX
    L:52
    let {QueueUrl} = await this.client.getQueueUrl({QueueName: queueName}).promise();
    QueueUrl = QueueUrl.replace("localhost","sqs")
    return QueueUrl

    L:70-72
    let {QueueUrl} = await this.client.getQueueUrl({QueueName: queueName}).promise();
    //fix
    QueueUrl = QueueUrl.replace("localhost","sqs")

    Ele gera a conenction como localhost:9324 e precisa ser sqs pois esta em um container
    
    https://github.com/CoorpAcademy/serverless-plugins/pull/114