const AWS = require('aws-sdk')

export const SQSAws = async () => {
    return new Promise(async function(resolve, reject) {
        try {
            // console.log(process.env);
            AWS.config = {
                //colocar em variaveis de ambiente
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    sessionToken: process.env.AWS_SESSION_TOKEN
                },
                region: process.env.AWS_DEFAULT_REGION
            }

            console.log(AWS.config)
            
            return resolve(new AWS.SQS())
        } catch(err) {
            return reject(`Erro ao inicializar SQS - ${err}`)
        }
    })
}