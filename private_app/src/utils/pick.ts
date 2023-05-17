/**
 * Create an object composed of the picked object properties
**/
interface pickObject {
  [key: string]: any;
}
const pick = (object: pickObject, keys : string[]) : Object => {
  return keys.reduce((obj: pickObject, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export default pick