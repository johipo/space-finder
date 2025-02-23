import { handler } from "../src/services/spaces/handler";

    process.env.AWS_REGION = "eu-west-1",
    process.env.TABLE_NAME = "SpacesTable-0277555f1943"

    // handler({
    //     httpMethod: 'POST',
    //     body: JSON.stringify({
    //         location: 'London'
    //     })
    // } as any, {} as any);


    // handler({
    //     httpMethod: 'GET'
    // } as any, {} as any);


    handler({
        httpMethod: 'GET',
       queryStringParameters: {
        id: '527495f1-15bb-4025-9ce9-516d2cfc45db'
       }
    } as any, {} as any);