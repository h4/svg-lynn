"use strict";
var message = '';
var sizeOf = require('image-size');

exports.done = function(req, res){

    var dimensions;
    if (req.session.error) {
        message = req.session.error.message;
    } else {
        message = '';

    }
    if (req.session.result) {
        dimensions = sizeOf(req.session.result.path);
    }
    req.session.error = null;
    res.render('done', {
        dimensions: dimensions,
        error_message: message,
        title: 'Index page'
    });
};
