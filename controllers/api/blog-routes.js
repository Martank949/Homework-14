const router = require("express").Router();
const Blog = require("../../models/Blog");

// route to create/add a blog
router.post("/", async(req, res) => {
    try {
        const blogData = await Blog.create({
            blog_name: req.body.blog_name,
            description: req.body.description,
            user_name: req.body.user_name,
            for_sale: req.body.for_sale,
        });
        res.status(200).json(blogData);
        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render("main", {
            blogData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// According to MVC, what is the role of this action method?
// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put("/:id", async(req, res) => {
    // Where is this action method sending the data from the body of the fetch request? Why?
    // It is sending the data to the Model so that one blog can be updated with new data in the database.
    try {
        const blog = await Blog.update({
            blog_name: req.body.blog_name,
            description: req.body.description,
            user_name: req.body.user_name,
            for_sale: req.body.for_sale,
        }, {
            where: {
                id: req.params.id,
            },
        }, );
        // If the database is updated successfully, what happens to the updated data below?
        // The updated data (blog) is then sent back to handler that dispatched the fetch request.
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;