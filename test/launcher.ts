import { handler } from "../src/services/spaces/handler";
import * as dotenv from "dotenv";

dotenv.config();

const method = process.argv[2]?.toUpperCase();
const location = method === "POST" ? process.argv[3] : '';
const id = method === "GET_BY_ID" ? process.argv[3] : '';

const events: Record<string, any> = {
    "GET": { httpMethod: "GET" },
    "GET_BY_ID": {
        httpMethod: "GET",
        queryStringParameters: { id },
    },
    "POST": {
        httpMethod: "POST",
        body: JSON.stringify({ location }),
    },
};

const event = events[method.toUpperCase()] || events["GET"];

handler(event as any, {} as any);
