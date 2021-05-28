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

