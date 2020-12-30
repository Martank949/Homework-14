const sequelize = require("../config/connection");
// const Blog = require("../models/Blog");
const seedBlogData = require("./blogData");
const userData = require("./userData");
//const blogData = require("./blogData");

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await seedBlogData();

    await userData();

    // await Blog.bulkCreate(blogData, {
    //     individualHooks: true,
    //     returning: true,
    // });

    process.exit(0);
};

seedDatabase();