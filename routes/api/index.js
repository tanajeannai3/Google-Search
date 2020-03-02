const router = require("express").Router();
const bookRoutes = require("./book");

//Book Routes
router.use("/books", bookRoutes);

module.exports = router;