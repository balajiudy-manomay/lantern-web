import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { getCredential } from "./auth";
import "isomorphic-fetch";

let graphClient: Client | null = null;

export function getGraphClient() {
  if (!graphClient) {
    const credential = getCredential();
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ["https://graph.microsoft.com/.default"],
    });
    graphClient = Client.initWithMiddleware({ authProvider });
  }
  return graphClient;
}

