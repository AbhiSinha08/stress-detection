#! /bin/bash

# Running as root
sudo -s

apt update
apt install -y python3 pip
git clone https://github.com/AbhiSinha08/stress-detection.git
cd stress-detection
pip install -r requirements.txt

chmod +x train.sh
chmod +x server.sh

./train.sh

sudo ./server.sh