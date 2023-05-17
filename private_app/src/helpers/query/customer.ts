import { GraphQLAPI } from "../../config/shopify";
import { QUERY_CUSTOMER_NAME} from "../../utils/graphQLQuery"


/**
 * Get customer name by id
**/
export const getCustomerName = async (id: string) => {
    const data = await GraphQLAPI.query({
      data: {
        query: QUERY_CUSTOMER_NAME,
        variables: {
            id: id,
        },
      },
    });
    return data.body;
}
