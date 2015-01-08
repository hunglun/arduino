
"use strict";


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    // res.send('<h1>Hello World</h1>')
    res.sendFile(__dirname+'/arduino.html');
});

//serial port related
try {
    SerialPort = require("serialport").SerialPort;
}catch (err) {
    console.log("It looks like serialport didn't compile properly. This is a common problem and its fix is well documented here https://github.com/voodootikigod/node-serialport#to-install");
    throw "Missing serialport dependency";
}

var SerialPort = require("serialport").SerialPort
var port ='/dev/ttys001';
var serialPort = new SerialPort(port, {
  baudrate: 57600
}, true); // this is the openImmediately flag [default is true]


// Arduino is connected
serialPort.on("open", function(data) {
    console.log('serial connection on')
    
    // WebSocket connection handler
    io.on('connection', function (socket) {
        
        /***********************
            joystick related
        ***********************/

	serialPort.on('data', function(data) {
	    console.log('data received: ' + data);
            socket.emit('joystick-vertical',1)
	    
	});
	serialPort.write("ls\n", function(err, results) {
	    console.log('err ' + err);
	    console.log('results ' + results);
	});

        // board.analogRead(board.A0, function(val) {   
        //     socket.emit('joystick-vertical',val)
        // });
        // board.analogRead(board.A1, function(val) {   
        //     console.log(val);
        //     socket.emit('joystick-horizon',val)
        // });

        /* open led light at pin 13 */
        console.log('web client connected: '+ socket.id);
        
        socket.on('disconnect', function () {
            /* open led light at pin 13 when someone disconnect */

            console.log('web client disconnected: '+ socket.id);
        });

        socket.on('manualClose', function () {
            /* open led light at pin 13 when someone disconnect */
            console.log('web client close led: '+ socket.id);
        });


    });
});

http.listen(3000,function(){
    console.log('listening on port 3000');
})

