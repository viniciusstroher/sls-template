import 'source-map-support/register';
import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

import {
    SQSAws
} from '../utils/sqs';

export const handler = async (
    event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`only accept GET method, you tried: ${event.httpMethod}`);
    }
    
    console.info('received:', event);

    const sqs:any = await SQSAws()
    const queueParams = {
        MessageBody: JSON.stringify({teste:true}),
        QueueUrl: process.env.A_QUEUE,
        MessageAttributes: {
            'id_store': {
                DataType: 'Number',
                StringValue: '18'
            }
        }
    }

    const message = await sqs.sendMessage(queueParams).promise()

    const response = {
        statusCode: 200,
        body: JSON.stringify({message, queue: process.env.A_QUEUE})
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    
    return response;
}