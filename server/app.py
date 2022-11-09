import os
from flask import Flask, send_from_directory
from flask_cors import CORS
import json

#os.chdir(__file__.replace(os.path.basename(__file__), ''))


app = Flask(__name__, static_folder='./build')
CORS(app)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, host='0.0.0.0', port=80, threaded=True)