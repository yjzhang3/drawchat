var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path')
var port = process.env.PORT || 3000 

/*app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

app.use(express.static(path.join(__dirname,'public')));


function onConnection(socket){
    socket.on('drawing',(data) => socket.broadcast.emit('drawing',data));
    console.log('drawing and chatting start')
}

io.on('connection',onConnection);

var numUsers = 0; // have to initialize the variable first 

io.on('connection', (socket) => {
    var addedUser = false;

    socket.on('new message',(data) => { // if the client emits 'new message'
	socket.broadcast.emit('new message',{
	    username:socket.username,
	    message:data
	});
	console.log('message:' + data);
    });

    socket.on('add user',(username) => { // when the cliet emits "add user"
	// we will see what this means
	if (addedUser) return; // of course this is false, so won't return

	// store username in the socket session for this client
	socket.username = username; // how many users can socket.username store??
	++numUsers;
	addedUser = true;
	socket.emit('login', {
	    numUsers:numUsers
	});

	socket.broadcast.emit('user joined', { // broadcast to everyone that someone has joined
	    username: socket.username,
	    numUsers: numUsers
	});
    });

    socket.on('typing',() => { // when the client emits 'typing'
	socket.broadcast.emit('typing', {
	    username: socket.username
	});
    });

    socket.on('stop typing',() => {
	socket.broadcast.emit('stop typing', {
	    username: socket.username
	});
    });

    socket.on('disconnect',() => {
	if (addedUser) {
	    --numUsers;

	    socket.broadcast.emit('user left', {
		username: socket.username,
		numUsers: numUsers
	    });

	}
	console.log('user disconnected');
    });
});


	
/*  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
}); 

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
*/

http.listen(port, () => {
    console.log('Server listening at port %d', port);
});
