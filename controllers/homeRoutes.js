const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/auth");

// route to get all blogs for homepage
router.get("/", async(req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{
                model: User,
                attributes: ["name"],
            }, ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render("homepage", { blogs, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/profile", withAuth, async(req, res) => {
    // res.render("profile", { loggedIn: req.session.loggedIn });
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude: ["password"] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render("profile", {
            ...user,
            loggedIn: true,
        });
    } catch (err) {
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