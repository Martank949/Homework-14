const sequelize = require("../config/connection");
const { User, Blog } = require("../models");

const userData = require("./userData.json");
const blogData = require("./blogData.json");

const seedDatabase = async() => {
    try {
        await sequelize.sync({ force: true });

        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        for (const blog of blogData) {
            await Blog.create({
                ...blog,
                blog_id: users[Math.floor(Math.random() * users.length)].id,
            });
        }
        console.log("seeding successful!");
    } catch (err) {
        console.log(err);
    }
    process.exit(0);
};

module.exports = seedDatabase;