let express = require("express");
let router = express.Router();
let OrderController = require("../controller/Orders.controller");

router.post("/addOderDetaiks", OrderController.addOrderDetails);
// router.post("/signUp", userController.signUp);
// router.put("/updateDetails", userController.updateUser);
// router.get("/retriveUserId/:userId",userController.retriveUserId);
module.exports = router;   