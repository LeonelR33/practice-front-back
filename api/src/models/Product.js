const { DataTypes } = require("sequelize/types")

const Product = (sequelize) => {
    sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
        },
    })
}