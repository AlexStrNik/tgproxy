var socks5 = require('simple-socks');
var port = process.env.PORT;
server = socks5.createServer().listen(process.env.PORT,function () {
    console.log('SOCKS5 proxy server started on localhost:process.env.PORT');
});
