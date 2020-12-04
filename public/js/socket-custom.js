var socket = io();
socket.on('connect', function() {
    console.log('Connected to the server');
});

socket.on('disconnect', function() {
    console.log('connection lost');
});

socket.emit('sendMsg', {
    user: 'Julian',
    msg: 'Hello World'
}, function(resp) {
    console.log('Response: ', resp);
});

socket.on('sendMsg', function(message) {
    console.log(message);
});