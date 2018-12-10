import uuid from 'node-uuid';

export const handler = (event, context, callback) => {
  console.log('aws-lambda-sample-' + uuid.v4());
};