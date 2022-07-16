const { DataTypes } = require("sequelize")

const Product = (sequelize) => {
    sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
        },
    })
}

module.exports = Product;