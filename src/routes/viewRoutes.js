const renderHomepage = require("../controllers/view");
const renderNotes = require("../controllers/view");

const { Router } = require("express");
const router = Router();

router.get("/", renderHomepage);
router.get("/index", renderNotes);

module.exports = router;
