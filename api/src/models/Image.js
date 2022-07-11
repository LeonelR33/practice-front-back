const { DataTypes } = require("sequelize");

const Image = (sequelize) => {
    sequelize.define("Image", {
        image: {
            type: DataTypes.BLOB,
        }
    })
}