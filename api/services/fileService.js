var Promise = require('promise');
var fs = require('fs');
var readFile = Promise.denodeify(fs.readFile);
var writeFile = Promise.denodeify(fs.writeFile);

var fileService = {};

fileService.readJSON = function (filename, callback) {
    return readFile(filename, 'utf8')
        .then(JSON.parse)
        .nodeify(callback);
};

module.exports = fileService;