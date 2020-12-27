const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    blog_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    for_sale_ad: {
        type: DataTypes.BOOLEAN,
    },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
}, );

module.exports = Blog;