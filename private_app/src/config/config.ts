const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    SECRET_KEY: Joi.string().required().description("Custom app secret key"),
    API_KEY: Joi.string().required().description("Custom app key"),
    SHOP_URL: Joi.string()
      .required()
      .description("Shop url with myshopify.com"),
    SHOPIFY_ACCESS_TOKEN: Joi.string()
      .required()
      .description("Custom app access token"),
    SCOPE: Joi.string().required().description("Custom app scope"),
    DB_USER: Joi.string().required().description("Database user"),
    DB_PASSWORD: Joi.string().required().description("Database password"),
    DB_NAME: Joi.string().required().description("Database name"),
    DOMAIN: Joi.string().description("Domain").default("http://127.0.0.1:3000")
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  sKey: envVars.SECRET_KEY,
  key: envVars.API_KEY,
  url: envVars.SHOP_URL,
  acToken: envVars.SHOPIFY_ACCESS_TOKEN,
  scope: envVars.SCOPE,
  dbUser: envVars.DB_USER,
  dbPass: envVars.DB_PASSWORD,
  dbName: envVars.DB_NAME,
  domain: envVars.DOMAIN
};
