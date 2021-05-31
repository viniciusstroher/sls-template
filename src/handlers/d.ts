const AWS = require('aws-sdk');

import {
  SQSAws, AWSCredentials
} from '../utils/sqs';

exports.handler = async (event, context) => {
  const {
    requestContext: { connectionId, routeKey },
  } = event;
    console.log(routeKey)
  if (routeKey === "$connect") {
    // handle new connection
    return {
      statusCode: 200
    }
  }
    
  if (routeKey === "$disconnect") {
    // handle disconnection
    return {
      statusCode: 200
    }
  }
   
  console.log(event)

  const endpoint = process.env.IS_OFFLINE ? 'http://localhost:3001' : event.requestContext.domainName + '/' + event.requestContext.stage
  
  console.log('endpoint',endpoint)
  AWSCredentials()
  const apigwManagementApi = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint
  });
  await apigwManagementApi.postToConnection({ ConnectionId: event.requestContext.connectionId, Data: 'olaaa :)' }).promise();

  // $default handler
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, oe!` }),
  }    
}