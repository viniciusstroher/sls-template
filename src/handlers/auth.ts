const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

// Policy helper function
const generatePolicy = (principalId, effect, resource) => {
  const authResponse:any = {};
  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument:any = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    const statementOne:any = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
}
/*
    adicionar ao header do endpoint
    Authorization: <token>
    Secret: 12345
    Precisar ter id
    {
    "sub": "1234567890",
    "name": "Vinicius Stroher",
    "iat": 1516239022,
    "id": 1
    }

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZpbmljaXVzIFN0cm9oZXIiLCJpYXQiOjE1MTYyMzkwMjIsImlkIjoxfQ.tfvdpPXcAzaXfjt_-oyvQbZa1fK1rFz-sFDNJS4EI84

*/
module.exports.handler = (event, context, callback) => {

  // check header or url parameters or post parameters for token
  console.log("###################################")
  const token = event.authorizationToken;
  console.log('token: ',token)

  if (!token)
    return callback(null, 'Unauthorized');
  // verifies secret and checks exp
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      console.log('err: ',err)
      console.log('decoded: ',err)
      console.log('process.env.JWT_SECRET: ', process.env.JWT_SECRET)
    if (err)
      return callback(null, 'Unauthorized');

    // if everything is good, save to request for use in other routes
    return callback(null, generatePolicy(decoded.id, 'Allow', event.methodArn))
  });

};