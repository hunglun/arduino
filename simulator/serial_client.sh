#report version
python -c "import sys; sys.stdout.write('\xf9\xe0\x10\x10')" > /dev/ttys003

# analog read command
python -c "import sys; sys.stdout.write('\xe0\x10\x10')" > /dev/ttys003
