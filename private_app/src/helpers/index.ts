import { getCustomerName } from "./query/customer";
import { getMainTheme } from "./query/theme";
import { AddFile } from "./mutation/asset";
import { updateMetafield } from "./mutation/product";
import { getProductCount } from './query/product'

const shopifyAPI = {
  getCustomerName,
  getMainTheme,
  getProductCount,
  updateMetafield,
  AddFile
}

export default shopifyAPI