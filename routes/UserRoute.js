const { CreateUser, GetUsers, GetSingleUser, EditUser, DeleteUser } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/createUser", CreateUser);
router.get("/GetUsers", GetUsers);
router.get("/SingleUser/:id", GetSingleUser);
router.put("/EditUser", EditUser);
router.delete("/DeleteUser/:id", DeleteUser);

module.exports = router;