import 'source-map-support/register';
import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

import {
    AWSCredentials, AwsConfig
} from '../utils/sqs';

export const handler = async (
    event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`only accept GET method, you tried: ${event.httpMethod}`);
    }
    
    console.info('received:', event);
    console.log('teste', AwsConfig, AWSCredentials);
    const message = 'oi'
    const response = {
        statusCode: 200,
        body: JSON.stringify({message, queue: process.env.A_QUEUE, region: process.env.AWS_REGION_ENV, config: AwsConfig() || "blah"})
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    
    return response;
}