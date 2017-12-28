var config = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + config.uname + ':' + config.pwd + '@ds027295.mlab.com:27295/node_todo_sample88';
    }
}

