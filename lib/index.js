var mysql = require('mysql');
var bluebird = require('bluebird');

module.exports = function(poolConfiguration) {
  var pool = mysql.createPool(poolConfiguration);

  return {
    getConnection: function() {
      var defer = bluebird.defer();

      pool.getConnection(function(err, connection) {
        if(err) {
          defer.reject(err);
        } else {
          defer.resolve(connection);
        }
      });

      return defer.promise;
    }
  };
};
