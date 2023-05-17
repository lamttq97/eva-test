/**
 * GRAPHQL query for Shopify GraphQL
**/

export const QUERY_CUSTOMER_NAME=             `
query ($id: ID! ) {
    customer(id: $id) {
        firstName
        lastName
    }
}`;

export const QUERY_PRODUCT_COMMENT = `
query ($handle: String!, $key: String!, $namespace: String!) {
    productByHandle(handle: $handle) {
      id
      metafield (namespace: $namespace, key: $key) {
        value
      }
    }
}`


export const MUTATION_PRODUCT_METAFIELD = `
mutation updateProductMetafields($input: ProductInput!) {
    productUpdate(input: $input) {
      product {
        id
      }
      userErrors {
        message
        field
      }
    }
  }
`