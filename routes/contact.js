var express = require('express');
var router = express.Router();

let contactController = require("../controller/contact");

/* GET home page. */
router.get('/list', contactController.contactList);

//Routers for edit

router.get('/edit/:id', contactController.displayEditPage);
router.post('/edit/:id', contactController.processEditPage);

// //Router for delete
router.get('/delete/:id', contactController.performDelete);

//Routers to add documents
router.get("/add", contactController.displayAddPage);
router.post("/add", contactController.processAddPage);

module.exports = router;