const router = require("express").Router();
const seeder = require("../seeds/seed.js");

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.get("/api/seeder/:password", (req, res) => {
    if (req.params.password === process.env.secret) {
        seeder();
    }
});

module.exports = router;