"use strict";
var svg2png = require('svg2png');
var path = require('path');
var mime = require('mime');
var allowedTypes = [
    'image/svg+xml'
];

exports.convert = function(req, res) {
    var tmpFileName = req.files.svgFile.path;
    if (allowedTypes.indexOf(mime.lookup(tmpFileName)) !== -1) {
        var resFileName = path.join(__dirname, 'res.png');
        svg2png(tmpFileName, resFileName, function(err) {
            if (err) {
                console.log('Error when image converted');
                req.session.error = {
                    type: 'CONVERT_ERROR',
                    message: err
                };
            }
            req.session.result = {
                status: 'DONE',
                path: resFileName
            };
            res.redirect('/done');
        });
    } else {
        req.session.error = {
            type: 'WRONG_MIME_TYPE',
            message: 'Wrong mime type'
        };
        res.redirect('/done');
    }
};
