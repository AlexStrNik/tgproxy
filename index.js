var socks5 = require('simple-socks');
server = socks5.createServer().listen(1080,function () {
    console.log('SOCKS5 proxy server started on localhost:1080');
});
