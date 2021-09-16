let express = require("express"); //load express module
let router = express.Router(); //create router reference
let adminController = require("../controller/Admin.controller")

router.get("/adminDetails",adminController.getAdminDetails);

module.exports=router;