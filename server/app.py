from flask import Flask, send_from_directory, request
from flask_cors import CORS
import json
import model

import os
os.chdir(__file__.replace(os.path.basename(__file__), ''))


app = Flask(__name__, static_folder='../client/build')
CORS(app)

TEST_CASE_DATA_PATH = "../model/data/raw_subset"


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/predict', methods=['POST'])
def predict():
    data = []
    for feat in model.selected_feats:
        data.append(request.json[feat])
    
    result, prob = model.predict(data)
    return json.dumps({
        'res': result,
        'prob': prob,
        'labels': model.labels
    })


@app.route('/test/<int:num>')
def test_case(num):
    print(model.predict)
    with open(f"{TEST_CASE_DATA_PATH}/BVP_{num}.csv", 'r') as f:
        BVP = f.read()
    with open(f"{TEST_CASE_DATA_PATH}/EDA_{num}.csv", 'r') as f:
        EDA = f.read()

    return json.dumps({
        "BVP": BVP,
        "EDA": EDA
    })


if __name__ == '__main__':
    app.run(use_reloader=True, host='0.0.0.0', port=80, threaded=True)