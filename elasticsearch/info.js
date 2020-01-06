var client = require('./connection');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});