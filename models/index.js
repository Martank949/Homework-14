const User = require("./User");
const Blog = require("./blog");

User.hasMany(Blog, {
    foreignKey: "blog_id",
});

// Blog.belongsTo(User, {
//     foreignKey: "blog_id",
// });

module.exports = { User, Blog };