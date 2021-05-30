const AWS = require('aws-sdk')

export const AWSCredentials = () => {
    if(process.env.IS_OFFLINE){
        process.env.AWS_ACCESS_KEY_ID = 'root'
        process.env.AWS_SECRET_ACCESS_KEY = 'root'
    }
    
    AWS.config = {
        //colocar em variaveis de ambiente
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            sessionToken: process.env.AWS_SESSION_TOKEN
        },
        region: process.env.AWS_DEFAULT_REGION
    }
    
}

export const AwsConfig = () => AWS.config

export const SQSAws = async () => {
    return new Promise(async function(resolve, reject) {
        try {

            AWSCredentials()
            console.log(AWS.config)
            
            return resolve(new AWS.SQS())
        } catch(err) {
            return reject(`Erro ao inicializar SQS - ${err}`)
        }
    })
}