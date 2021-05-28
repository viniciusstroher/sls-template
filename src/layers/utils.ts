
export const SQSAws = async () => {
    return new Promise(async function(resolve, reject) {
        try {
            const AWS = require('aws-sdk')

            AWS.config = {
                //colocar em variaveis de ambiente
                credentials: {
                    accessKeyId: 'AKIA4QMTIFCPEEXEEOUQ',
                    secretAccessKey: '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',
                },
                region:'sa-east-1'
            }

            return resolve(new AWS.SQS())
        } catch(err) {
            return reject(`Erro ao inicializar SQS - ${err}`)
        }
    })
}