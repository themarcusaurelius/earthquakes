const elasticsearch=require('elasticsearch');
const MARKS_DASHBOARD = "https://vz5ub26znfu682o50c:rdrca5ixdrk6rqlw@espnap.vizion.ai:443"
//const TEST_DASHBOARD = "https://vz19xcxoqslqlvfkpp:tbop46izufuya7xl@espnap.vizion.ai:443"

var client = new elasticsearch.Client({  
  hosts: [
    MARKS_DASHBOARD
  ],     
  //log: 'trace', 
  maxSockets: 30,
  keepAlive: false,  
  requestTimeout: Infinity,
  sniffInterval: false,
});  
  
module.exports = client;        