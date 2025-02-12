import { executeQuery } from "@datocms/cda-client";
import { cache } from "react";

const dedupedPerformRequest = cache(async (serialzedArgs) =>{
  return executeQuery(...JSON.parse(serialzedArgs));
})

export function performRequest(query, options) {
  return dedupedPerformRequest(JSON.stringify([
    query,
    {
      ...options,
      token: process.env.DATOCMS_READONLY_TOKEN,
      environment: "main",
    },
  ]));
}