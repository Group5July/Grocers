let express = require("express");
let router = express.Router();
let RaiseTicketController = require("../controller/RaiseTicket.controller");

router.post("/sendTicketDetails",RaiseTicketController.raiseTicketDetails);

module.exports = router;