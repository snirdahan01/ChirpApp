/**
 * Created by Snir Dahan on 20-Jan-17.
 */
var express = require('express');
var router = express.Router();

/*GET home page. */
router.get('/', function(rq, res, next){
   res.render('index', {title: "Chirp"}) ;
});

module.exports = router;