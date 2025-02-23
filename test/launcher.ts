import { handler } from "../src/services/spaces/handler";
import * as dotenv from "dotenv";

dotenv.config();

const method = process.argv[2]?.toUpperCase();
const id = ["GET_BY_ID", "PUT", "DELETE"].includes(method) ? process.argv[3] : "";
const location = ["POST", "PUT"].includes(method) ? process.argv[method === "PUT" ? 4 : 3] : "";

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
    "PUT": {
        httpMethod: "PUT",
        queryStringParameters: { id },
        body: JSON.stringify({ location }),
    },
    "DELETE": {
        httpMethod: "DELETE",
        queryStringParameters: { id },
    },
};

const event = events[method.toUpperCase()] || events["GET"];

handler(event as any, {} as any);
