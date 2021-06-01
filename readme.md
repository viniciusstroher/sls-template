## Ambiente Node
## Para rodar o ambiente é necessario ter a versao de node 10.16.0 e docker
```bash
    nvm install 10.16.0
    nvm use 10.16.0
```
---
## Creating aws profile
### Para poder criar os objetos na aws é necessario ter um profile de IAM valida
### para tal, é necessario rodar o seguinte comando:

```bash
    aws configure 

    ou

    aws configure --profile <nome do profile ex: teste> #especificando o profile

    #AWS Access Key ID [None]: <acessKey do iam>
    #AWS Secret Access Key [None]: <secretKey do iam>
    #Default region name [None]: <region ex: us-west-2>
    #Default output format [None]: json
```
---

## Deploy da solução na aws
### Para realizar o deploy é necessario rodar o seguinte comando

### ex:
```bash
    npm run deploy -- -s dev --aws-profile teste
    # * -s dev = stage dev
    # * --aws-profile teste = pega o profile de aws configurado em ~/.aws/credentials contendo as regras do IAM
```

---

## Rodar o ambiente em Dev
### Para rodar o modo offline rode o seguinte comando
```bash 
    npm run offline
```
