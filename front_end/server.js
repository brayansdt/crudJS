/**
 * Javascript to start a simple server on node.js
 */
var connect = require("connect");
var serveStatic = require("serve-static");

connect().use(serveStatic(__dirname)).listen(8007);
console.log("Running static server in port 8007...");