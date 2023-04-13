const express = require("express");
const { sendMessage, allMessage } = require("../controlers/messageControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, sendMessage); // sending the messgae
router.route("/:chatId").get(protect, allMessage); // display all messages

module.exports = router;
