import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { v4 } from "uuid";

const s3client = new S3Client({});

async function handler(event: APIGatewayProxyEvent, context: Context) {

  const command = new ListBucketsCommand({});
  const listBucketsResult = (await s3client.send(command)).Buckets

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!, here are your buckets:' + JSON.stringify(listBucketsResult))
  }
  console.log(event);

  return response;
}

export { handler }