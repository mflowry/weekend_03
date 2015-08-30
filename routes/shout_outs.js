
var express = require('express');
var router = express.Router();
var fs = require('fs');//fs means file system
var path = require('path');

/* GET shout-outs  */
router.get('/:id?', function(req, res, next) {//entering an id is optional

    var id = req.params.id;

    var file = path.join(__dirname, '../models/shout_outs.json');
    fs.readFile(file, 'utf8', function(err, data){
        if (err) {
            next(err);//next middleware--error handler
        } else {
            var shouts = JSON.parse(data);
            console.log(shouts);
            //var shouts = obj; // if no shouts are found that match the id, then return all shouts
            //obj.forEach(function (elem) {
            //    if (elem.id == id) {
            //        shouts = elem;
            //    }
            //});
            res.json(shouts);//returns the data as a json stream
        }
    })
});

module.exports = router;