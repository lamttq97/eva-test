import { GraphQLAPI } from "../../config/shopify";
import { MUTATION_PRODUCT_METAFIELD } from "../../utils/graphQLQuery"


/**
 * Update product comments count whenever a new one created
**/
export const updateMetafield = async (id: string, count: number) => {
    const data = await GraphQLAPI.query({
      data: {
        query: MUTATION_PRODUCT_METAFIELD,
        variables: {
          input: {
            id: id,
            "metafields": [
                {
                  "namespace": "global",
                  "key": "comment_count",
                  "type": "number_integer",
                  "value": count.toString()
                },
              ],
          },
        },
      },
    });
    return data.body;
}
