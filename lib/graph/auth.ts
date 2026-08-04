import { ClientSecretCredential } from "@azure/identity";

export const credential = new ClientSecretCredential(
  process.env.GRAPH_TENANT_ID || "",
  process.env.GRAPH_CLIENT_ID || "",
  process.env.GRAPH_CLIENT_SECRET || ""
);
