#! /bin/bash

cd client
npm install --save-dev
npm build

cd ../server
sudo python3 app.py