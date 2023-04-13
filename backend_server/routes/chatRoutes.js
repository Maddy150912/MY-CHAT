const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  creategroupChat,
  fetchChats,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controlers/chatController");
const { userList } = require("../controlers/userControlers");
const router = express.Router();

router.route("/").post(protect, accessChat); // creating the chat
router.route("/").get(protect, fetchChats); // Retrive all chats from the DB for particular user
router.route("/group").post(protect, creategroupChat); // creating a groupChat
router.route("/rename").put(protect, renameGroup); // rename the groupChat
router.route("/groupadd").put(protect, addToGroup); // adding user in group
router.route("/groupremove").put(protect, removeFromGroup); // remove user from group
router.get("/userlist", userList); //display all users name and email

module.exports = router;
