const router = require("express").Router();
const { Blog } = require("../models");

// route to get all blogs for homepage
router.get("/", async(req, res) => {
    try {
        const blogData = await Blog.findAll();

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render("all", { blogs, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to get one blog
router.get("/blog/:id", async(req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if (!blogData) {
            res.status(404).json({ message: "No blog with this id!" });
            return;
        }
        const blog = blogData.get({ plain: true });
        res.render("blog", blog);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login route
router.get("/login", (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    // Otherwise, render the 'login' template
    res.render("login");
});

module.exports = router;