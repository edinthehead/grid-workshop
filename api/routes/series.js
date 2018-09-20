var express = require('express');
var router = express.Router();

var FILE = './../data/series.json';
var fileService = require('../services/fileService');

router.get('/', function (request, response, next) {
    fileService.readJSON(FILE, function (err, result) {
        if (err)
            throw err;
        response.json(result.series);
    });
});

module.exports = router;