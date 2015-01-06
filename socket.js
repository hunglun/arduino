
"use strict";

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// socket.emit('joystick-vertical',val)
// console.log(val);
// socket.emit('joystick-horizon',val)
app.get('/',function(req,res){
    // res.send('<h1>Hello World</h1>')
    res.sendFile(__dirname+'/arduino.html');
});

io.on('connection', function (socket) {

    console.log('client connected: ' + socket.id);

    socket.on('disconnect', function () {
	/* open led light at pin 13 when someone disconnect */

	console.log('client disconnected: '+ socket.id);
    });

    socket.on('manualClose', function () {
	/* open led light at pin 13 when someone disconnect */
	console.log('client close led: '+ socket.id);
    });

    socket.on('moveUp',function (){
	socket.emit('joystick-vertical',1);
	console.log('move up');

    });

    socket.on('moveDown',function (){
	socket.emit('joystick-vertical',600);
	console.log('move down');

    });


    socket.on('moveRight',function (){
	socket.emit('joystick-horizon',1);
	console.log('move Right');

    });

    socket.on('moveLeft',function (){
	socket.emit('joystick-horizon',600);
	console.log('move left');

    });

});

http.listen(3000,function(){
    console.log('listening on port 3000');
})
             
