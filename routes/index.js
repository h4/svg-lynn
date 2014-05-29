"use strict";
var convert = require('./convert');
var done = require('./done');

exports.index = function(req, res){
    res.render('index', {
        title: 'Index page'
    });
};

exports.convert = convert.convert;
exports.done = done.done;
