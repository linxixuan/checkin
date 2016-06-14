var fs = require('fs');
var path = require('path');
var csv = require('csv');

var Controller = {
    index: function*() {
        var filePath = path.resolve(__dirname, '../static/index.html');
        var content = fs.readFileSync(filePath).toString();
        this.set('Content-Type', 'text/html');
        this.body = content;
    },

    test: function*() {
        var input = '"key_1","key_2"\n"value 1","value 2"';
        csv.parse(input, function(err, data){
            csv.transform(data, function(data) {
                return data.map(function(value) {return value.toUpperCase()});
            }, function(err, data){
                csv.stringify(data, function(err, data){
                    process.stdout.write(data);
                });
            });
        });
    }
};

module.exports = Controller;
