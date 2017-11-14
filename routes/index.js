var express = require('express');
var router = express.Router();
var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })});


router.get('/getAllRoutes', controllerMongoCollection.getAllRoutes);

router.post('/', function(req, res, next) {
        res.send("Hello "+req.body.name);
});

module.exports = router;
