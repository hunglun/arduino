arduino
=======

Ideas
=====
[Mon Dec 29 10:17:39 MPST 2014]

1. Use socat to create a pair of virtual serial ports.
2. Compile and run firmata cpp code on host machine.
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