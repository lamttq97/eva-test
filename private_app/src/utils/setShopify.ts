/**
 * Create an object composed of the picked object properties
 * 
**/
const setShopifyId = (type: string, id: string) => {
  return "gid://shopify/" + type + "/" + id;
};

export default setShopifyId;
