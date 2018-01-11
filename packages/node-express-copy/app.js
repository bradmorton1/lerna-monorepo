const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Moon!'))

let server = app.listen(3000, () => console.log('Example app listening on port 3000'))

var handler = function() {
    server.close();
  };

module.exports = server;
module.exports.handler = handler;