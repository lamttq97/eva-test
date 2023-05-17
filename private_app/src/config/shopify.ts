require("@shopify/shopify-api/adapters/node");
import { shopifyApi,  ApiVersion, Session  } from "@shopify/shopify-api";
import { restResources } from "@shopify/shopify-api/rest/admin/2023-01";

import { config } from "./config";

export const shopify = shopifyApi({
  apiKey: config.key,
  apiSecretKey: config.sKey,
  scopes: config.scope,
  hostName: "localhost",
  apiVersion: ApiVersion.January23,
  restResources,
  isEmbeddedApp: false
});

//fake session Id since this is private app
export const session = new Session({
  shop: config.url,
  accessToken: config.acToken,
  id: '2134-34-3521-5235',
  state: 'active',
  isOnline: false,
});

export const RestAPI = new shopify.clients.Rest({
  session: session,
  apiVersion: ApiVersion.January23,
});

export const GraphQLAPI = new shopify.clients.Graphql({
  session: session,
  apiVersion: ApiVersion.January23,
});

