# template-minimal-node-express-api

This is a minimum TypeScript Node/Express API that is ready to add any data source to and host at online backend providers such as Render.

![grafik](https://github.com/edwardtanguay/template-minimal-node-express-api/assets/446574/4898dafc-85e7-4ac5-b3cd-c20087b4636c)

## features

- Node/Express
- TypeScript
  - executed with tsx
  - compiled with tsc
  - watched with nodemon
- ES6 modules
- .env file
- routers
- handlers
- online hosting ready

## setup
  - `npm i`
  - create **.env** file in root directory

```
APP_TITLE = Node/Express API
```

## start
  - `npm run dev`

## hosting

- the **package.json** file has two scripts ready for hosting: `build` and `start`
- if you want to host this backend at a hosting service such as **Render**, use these scripts:
  - build command: `npm i && npm run build`
  - start command: `npm start`
- this template is hosted at https://template-minimal-node-express-api.onrender.com (published as free Render web server which has a 30-60 second delay if API has not been recently accessed)

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/4c57128a-c648-4c9a-9c3f-509fc1fb72aa)
