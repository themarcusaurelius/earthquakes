var client = require('./connection.js');

function checkIndices() {
    client.indices.exists({index: 'apd_reports'}, (err, res, status) => {
        if (res) {
            console.log('index already exists');
        } else {
            client.indices.create( {index: 'apd_reports'}, (err, res, status) => {
            console.log(err, res, status);
        })
      }
    })
};

checkIndices()