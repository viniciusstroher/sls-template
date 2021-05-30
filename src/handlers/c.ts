import 'source-map-support/register';
import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

import {
    AWSCredentials, AwsConfig, SQSAws
} from '../utils/sqs';

export const handler = async (
    event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`only accept GET method, you tried: ${event.httpMethod}`);
    }

    const sqs:any = await SQSAws()
    const queueParams = {
        MessageGroupId: 'store-1',
        MessageBody: JSON.stringify({teste:true}),
        QueueUrl: 'http://sqs:9324/queue/dev-aqueue.fifo',
        MessageAttributes: {
            'id_store': {
                DataType: 'Number',
                StringValue: '18'
            }
        }
    }
    console.log('is offline?', process.env.IS_OFFLINE, process.env.A_QUEUE_NAME)
    console.log(process.env)
    const message = await sqs.sendMessage(queueParams).promise()

    // const message = 'oi'
    const response = {
        statusCode: 200,
        body: JSON.stringify({message, queue: process.env.A_QUEUE, region: process.env.AWS_REGION_ENV})
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    
    return response;
}