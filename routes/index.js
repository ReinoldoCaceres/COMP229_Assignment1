// index.js
// Reinoldo Caceres
// 301176428
// Jun 4

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home (req, res, next) {
  res.render('index', {title: "home", userName: req.user ? req.user.username : ''});
}

/* GET about page. */
router.get('/about', about); 

function about (req, res, next) {
  res.render('about', {title: "about", userName: req.user ? req.user.username : ''});
}


/* GET projects page. */
router.get('/projects', projects);

function projects (req, res, next) {
  res.render('projects', {title: "projects", userName: req.user ? req.user.username : ''});
}

/* GET projects page. */
router.get('/projects', projects);

function projects (req, res, next) {
  res.render('projects', {title: "projects", userName: req.user ? req.user.username : ''});
}

/* GET services page. */
router.get('/services', services);

function services (req, res, next) {
  res.render('services', {title: "services", userName: req.user ? req.user.username : ''});
}

/* GET contact page. */
router.get('/contact', contact);

function contact (req, res, next) {
  res.render('contact', {title: "contact", userName: req.user ? req.user.username : ''});
}
module.exports = router;
