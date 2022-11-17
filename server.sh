#! /bin/bash

cd client
npm run build

cd ../server
sudo python3 app.py