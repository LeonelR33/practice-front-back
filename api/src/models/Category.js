const { DataTypes } = require("sequelize");

const Category = (sequelize) => {
    sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
        },
    })
}