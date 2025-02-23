import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { postSpaces } from "./PostSpaces";
import { getSpaces } from "./GetSpaces";
import { postSpacesWithDoc } from "./PostSpacesWithDoc";
import { updateSpaces } from "./UpdateSpaces";

const ddbClient = new DynamoDBClient({})

async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  let message: string;

  try {
    switch (event.httpMethod) {
      case 'GET':
        const getItemResponse = await getSpaces(event, ddbClient);
        console.log(getItemResponse)
        return getItemResponse;
      case 'POST':
        const postItemResponse = await postSpacesWithDoc(event, ddbClient);
        console.log(postItemResponse)
        return postItemResponse;
      case 'PUT':
        const putItemResponse = await updateSpaces(event, ddbClient);
        console.log(putItemResponse)
        return putItemResponse;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error.message)
    }
  }

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message)
  }

  return response;
}

export { handler }