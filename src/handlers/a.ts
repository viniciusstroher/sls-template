import 'source-map-support/register';
import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

import {
    SQSAws, uuidv4
} from 'sqs';

export const handler = async (
    event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`only accept GET method, you tried: ${event.httpMethod}`);
    }
    
    console.info('received:', event);

    const queue = process.env.IS_OFFLINE ? process.env.A_QUEUE_OFFLINE : process.env.A_QUEUE
    const sqs:any = await SQSAws()
    const uuid = uuidv4()
    const queueParams = {
        MessageGroupId: 'store-1',
        MessageBody: JSON.stringify({uuid, teste:true}),
        QueueUrl: queue,
        MessageAttributes: {}
    }

    const message = await sqs.sendMessage(queueParams).promise()
    // const message = 'oi'
    const response = {
        statusCode: 200,
        body: JSON.stringify({message, queue: process.env.A_QUEUE, region: process.env.AWS_REGION_ENV})
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    
    return response;
}