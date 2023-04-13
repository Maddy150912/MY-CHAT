const exppress = require("express");
const router = exppress.Router();
const {
  registerUser,
  adminUser,
  allUsers,
  userRegister,
  loginUser,
} = require("../controlers/userControlers");
const { protect } = require("../middleware/authMiddleware");

// register admin, users & search users
router.route("/").post(registerUser).get(protect, allUsers); //.post(register the admin) .get(search user)
router.route("/adminlogin").post(adminUser); // login the adminUser
router.route("/userregister").post(userRegister); // user registration
router.post("/login", loginUser); // login registered user

module.exports = router;
