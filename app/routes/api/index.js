const router = require("express").Router();
const postRoutes = require("./posts");
const bookRoutes = require("./books");

// Post routes
router.use("/posts", postRoutes);
// Book routes
router.use("/books", bookRoutes);

module.exports = router;
