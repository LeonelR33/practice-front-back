require('dotenv').config();
const { Sequelize, Model } = require('sequelize');
const user_model = require("./models/User");
const product_model = require("./models/Product");
const category_model = require("./models/Category");
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, NODE_ENV, DB_PORT
  } = process.env;
  

let sequelize =
  NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );

user_model(sequelize);
product_model(sequelize);
category_model(sequelize);

const { User, Product, Category } = sequelize.models;

Product.belongsToMany(Category, { through: 'Product_Category' } )
Category.belongsToMany(Product, { through: 'Product_Category' } )

Product.belongsToMany(User, { through: 'Favorites' })
User.belongsToMany(Product, { through: 'Favorites' })

module.exports = {
    ...sequelize.models,
    dbconn: sequelize,
}