const User = require("./User");
const Blog = require("./Blog");

User.hasMany(Blog, {
    foreignKey: "blog_id",
    onDelete: "CASCADE",
});

Blog.belongsTo(User, {
    foreignKey: "blog_id",
});

module.exports = { User, Blog };