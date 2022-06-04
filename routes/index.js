var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home (req, res, next) {
  res.render('index', {title: "home"});
}

/* GET about page. */
router.get('/about', about);

function about (req, res, next) {
  res.render('about', {title: "about"});
}


/* GET projects page. */
router.get('/projects', projects);

function projects (req, res, next) {
  res.render('projects', {title: "projects"});
}

/* GET services page. */
router.get('/projects', projects);

function projects (req, res, next) {
  res.render('projects', {title: "projects"});
}

/* GET services page. */
router.get('/services', services);

function services (req, res, next) {
  res.render('services', {title: "services"});
}

/* GET contact page. */
router.get('/contact', contact);

function contact (req, res, next) {
  res.render('contact', {title: "contact"});
}
module.exports = router;
