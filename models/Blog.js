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
    user_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_posted: {
        type: DataTypes.DATE,
        default: () => new Date(),
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    for_sale_ad: {
        type: DataTypes.BOOLEAN,
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
}, );

module.exports = Blog;