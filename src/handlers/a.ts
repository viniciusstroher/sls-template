import 'source-map-support/register';
import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

export const handler = async (
    event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`only accept GET method, you tried: ${event.httpMethod}`);
    }
    
    console.info('received:', event);

    const response = {
        statusCode: 200,
        body: JSON.stringify({message: 'hello world'})
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    
    return response;
}