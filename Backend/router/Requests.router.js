let express = require("express");
let router = express.Router();
let requestController = require("../controller/Requests.controller");

router.post("/getRequests",requestController.getAllRequestDetails);
router.post("/storeRequest",requestController.storedRequestInfo);

module.exports = router;