const express = require('express');
const server = express();
const port = 3000;

server.get('/hello', (req, res)=>{ res.send('Hi Amazon') } );

server.listen(port, ()=>{ console.log(`Server is running on port ${port} `) });