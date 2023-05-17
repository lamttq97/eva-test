# EVA test

Test for Create a REST API that allows customers to leave products on each product and stores them in a database, then display the comments on each product page.


## Tech Stack

This template combines a number of third party open-source tools:

- [Express](https://expressjs.com/) builds the backend.
- [React](https://reactjs.org/) frontend.

The following Shopify tools complement these third-party tools to ease app development:

- [Shopify API library](https://github.com/Shopify/shopify-node-api) adds OAuth to the Express backend. This lets users install the app and grant scope permissions.
- [Polaris React](https://polaris.shopify.com/) is a powerful design system and component library that helps developers build high quality, consistent experiences for Shopify merchants.

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [have a MySQL installed](https://www.mysql.com/) if you don’t have one.
1. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Installing theme

This template can be installed using your preferred package manager:

Install the zip file in `storefront` folder and install theme

#### Private app

Private app is Shopify app but create directly in shopify store. App can only be created and installed for that store only. You must create an app in your admin store dashboard. 
 1. Enter your store [app page](https://admin.shopify.com/store/eva-test-liam/settings/apps)
 2. Click on `Develop apps` if you haven't accept to create it, please accept that
 3. Click on `Create an apps` button on top right
 4. After enter app name go to `Configurations` and select `Admin API integration` to select `write_products, write_product_listings, read_customer, write_themes`
 5. Go to `API Credentials` click install after that note access token, secret app key, app key
 6. Duplicate `env.example` and enter configuration necessary

 Note: For the DB, it will be your local database installed on your computer or you can replace it if you intend to deploy it to a server.

#### Install package for the private app

Using yarn:

```shell
yarn
```

Using npm:

```shell
npm install
```
#### Migrating database

After all package have been installed in `node_modules`, start migrate db. 

Using yarn

```shell
yarn migrate
```

Using npm:

```shell
npm run migrate
```

#### Deployment
You can develop locally using your preferred package manager. Run one of the following commands from the root of your app.

Using yarn:

```shell
yarn dev
```

Using npm:

```shell
npm run dev
```

Open the URL generated in your console. It will show app basic feature.

Note: This is a private app so app can't have theme app extension which is better for store owner customize. 

After install to the main theme. There will have a `sections/comment.liquid` file in theme. Add file to main theme in order to use


## Hosting

You can use ngrok to host this application for purpose of testing