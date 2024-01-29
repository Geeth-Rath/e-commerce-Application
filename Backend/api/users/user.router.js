const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  refreshtoken,
  getUserByUserId,
  getUsers,
  logout,
} = require("./user.controller");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/profile/:id", checkToken, getUserByUserId);
router.post("/refresh-token", refreshtoken);
router.post("/logout", checkToken,logout);



module.exports = router;
