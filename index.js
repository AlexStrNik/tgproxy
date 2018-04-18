var socks5 = require('simple-socks');
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
server = socks5.createServer().listen(port,ip,function () {
    console.log(`SOCKS5 proxy server started on ${ip}:${port}`);
});
server.on('proxyConnect', function (info, destination) {
    console.log('connected to remote server at %s:%d', info.host, info.port);

    destination.on('data', function (data) {
        console.log(data.length);
    });
});

// When data arrives from the remote connection
server.on('proxyData', function (data) {
    console.log(data.length);
});

// When an error occurs connecting to remote destination
server.on('proxyError', function (err) {
    console.error('unable to connect to remote server');
    console.error(err);
});

// When a proxy connection ends
server.on('proxyEnd', function (response, args) {
    console.log('socket closed with code %d', response);
    console.log(args);
});
