import { GraphQLAPI } from "../../config/shopify";
import { QUERY_PRODUCT_COMMENT} from "../../utils/graphQLQuery"


/**
 * Get customer name by id
**/
export const getProductCount = async (product: string) : Promise<any> => {
  try {    
    const data = await GraphQLAPI.query({
      data: {
        query: QUERY_PRODUCT_COMMENT,
        variables: {
            handle: product,
            namespace: "global",
            key: "comment_count"
        },
      },
    });
    return data.body;

  } catch (error) {
    console.log(error)
  }

}
