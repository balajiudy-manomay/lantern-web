import { ClientSecretCredential } from "@azure/identity";

let credential: ClientSecretCredential | null = null;

export function getCredential() {
  if (!credential) {
    const tenantId = process.env.GRAPH_TENANT_ID;
    const clientId = process.env.GRAPH_CLIENT_ID;
    const clientSecret = process.env.GRAPH_CLIENT_SECRET;

    if (!tenantId || !clientId || !clientSecret) {
      throw new Error(
        `Microsoft Graph credentials are not fully configured. ` +
        `Missing: ${[
          !tenantId && "GRAPH_TENANT_ID",
          !clientId && "GRAPH_CLIENT_ID",
          !clientSecret && "GRAPH_CLIENT_SECRET"
        ].filter(Boolean).join(", ")}`
      );
    }

    credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
  }
  return credential;
}

