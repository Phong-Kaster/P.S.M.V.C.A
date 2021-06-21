/* =========== LIBRARY =========== */
const express = require('express');
const router = express.Router();


/* =========== CONTROLLERS =========== */
const indexController = require('../controllers/indexController.js');
const aboutController = require('../controllers/aboutController');


/* =========== ROUTERS =========== */
router.get("/", indexController.renderHomePage);
router.post("/",indexController.getWeather);
router.get("/about", aboutController.renderAboutPage);

module.exports = router;