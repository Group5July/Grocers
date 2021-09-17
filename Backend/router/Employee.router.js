let express = require("express"); //load express module
let router = express.Router(); //create router reference
let employeeController = require("../controller/employee.controller");


router.post("/signIn",employeeController.signIn);
router.post("/signUp",employeeController.signUp);
router.post("/updateEmployeeDetails",employeeController.updateEmployeeDetails);
router.post("/getEmployeeInfo",employeeController.getEmployeeInfo)

module.exports=router;