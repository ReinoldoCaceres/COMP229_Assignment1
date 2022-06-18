var express = require('express');
var router = express.Router();

let contactController = require("../controller/contact");

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET home page. */
router.get('/list', contactController.contactList);

//Routers for edit

router.get('/edit/:id', requireAuth, contactController.displayEditPage);
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// //Router for delete
router.get('/delete/:id', requireAuth, contactController.performDelete);

//Routers to add documents
router.get("/add", requireAuth, contactController.displayAddPage);
router.post("/add", requireAuth, contactController.processAddPage);

module.exports = router;