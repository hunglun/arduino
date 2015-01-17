#report version
python -c "import sys; sys.stdout.write('\xf9\xe0\x10\x10')" > /dev/ttys003
#report firmware name and version
python -c "import sys; sys.stdout.write('\xf0\x79\x10\x10python\xf7')" > /dev/ttys003
#report capability : initialise pin 0 and pin 1 to analog of resolution of xff.
python -c "import sys; sys.stdout.write('\xf0\x6c\x01\xff\x7f\x01\xff\x7f\xf7')" > /dev/ttys003


#analog mapping response
python -c "import sys; sys.stdout.write('\xf0\x6a\x00\x01\xf7')" > /dev/ttys003

#analog message response
python -c "import sys; sys.stdout.write('\xe0\x00\x10\x10')" > /dev/ttys003
python -c "import sys; sys.stdout.write('\xe1\x00\x10\x10')" > /dev/ttys003



