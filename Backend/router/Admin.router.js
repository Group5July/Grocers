let express = require("express"); //load express module
let router = express.Router(); //create router reference
let adminController = require("../controller/Admin.controller")

router.post("/adminLogin", adminController.signIn);
router.post("/addEmployee", adminController.addEmployee);
router.delete("/deleteEmployee/:employeeEmail", adminController.deleteEmployee);

module.exports=router;