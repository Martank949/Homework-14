const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/auth");

// route to get all blogs for homepage
router.get("/", async(req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{
                model: User,
                attributes: ["username"],
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
            plain: true,
        });
        console.log(userData);

        res.render("profile", {
            ...userData,
            loggedIn: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to get one blog
router.get("/blog/:id", async(req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id); {
            include: [{
                model: User,
                attributes: ["name"],
            }, ];
        }
        const blog = blogData.get({ plain: true });
        res.render("blog", {
            ...blog,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//route for all the blogs

router.get("/blogs", (req, res) => {
    //get blogs from db and render them in view
    res.send("BLOGS");
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