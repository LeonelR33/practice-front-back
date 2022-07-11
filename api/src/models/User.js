const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const User = (sequelize) => {
    sequelize.define("User",{
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(value, salt)
                this.setDataValue("password", hash)
            }
        },
        confirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        token: {
            type: DataTypes.TEXT,
        },
        userRol: {
            type: DataTypes.STRING,
            defaultValue: "user",
        },
        banned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    })
    .prototype.comparePassword = function(formPassword){
    const password = this.getDataValue("password");

    return bcrypt.compareSync(formPassword, password)
  }
}

module.exports = User;