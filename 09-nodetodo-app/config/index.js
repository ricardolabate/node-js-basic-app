// requiring ./local-file (same folder)
var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + 
                ':' + configValues.pwd + 
                '@ds149059.mlab.com:49059/nodetododatabase';
    }

};