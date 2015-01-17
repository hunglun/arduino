arduino
=======

Ideas
=====
[Mon Dec 29 10:17:39 MPST 2014]

1. Use socat to create a pair of virtual serial ports.

2. send serial message via virtual serial com to pretend that the messages come from Arduino board.

3. run "node arduino.js"

Reference:
http://blog.aripd.com/2014/08/running-socat-on-mac-os-x.html

Implementation
==============

[Mon Dec 29 20:46:43 SGT 2014]

sudo port install socat in macbook.

now I need to simulate the arduino board and joystick.

And then implement the protocol that arduino.js can understand.

[Wed Jan  7 02:07:34 SGT 2015]
simulate joystick using 4 HTML buttons. 

create a new object socket.js to send back a move command to arduino.html

[Fri Jan  9 05:42:28 SGT 2015]
create serial_server.js that moves the chess piece up, whenever this is serial data coming in.

Next, Implement a serial data-on handler, based on firmata.js

[Sat Jan 17 13:06:35 SGT 2015]
create simulator/serial_client.sh that report version and send analog read command to arduino.js

add console.log statement in firmata.js.

But the problem is that arduino.js does not report successful serial connection, though firmata.js does receive the messages.

[Sat Jan 17 23:50:50 SGT 2015]
Run : node arduino.js

Use the simulator/serial_client.sh to move the chess down and left. 

Remember to use socat to create a pair of virtual serial connection. 

Change the serial port in arduino.js accordingly.

Read protocol.md for the message format.

https://github.com/firmata/protocol

I will close this project for now. Over the past few weeks, I have learnt about the firmata midi protocol, socket io, express and node.js. This is really fun.