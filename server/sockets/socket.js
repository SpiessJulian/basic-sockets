const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User connected');

    client.emit('sendMsg', {
        user: 'Admin',
        message: 'Welcome to this app'
    });

    client.on('disconnect', () => {
        console.log('user disconnected');
    });

    client.on('sendMsg', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMsg', data);

        /* if (data.user) {
            callback({
                res: 'all good'
            });
        } else {
            callback({
                res: 'all wrong!!'
            });
        } */

    });

});