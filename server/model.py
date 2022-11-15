import pickle
import numpy as np
import os
os.chdir(__file__.replace(os.path.basename(__file__), ''))
os.chdir('../model')

filename = 'trained_model.sav'
model = pickle.load(open(filename, 'rb'))

def predict(arr):
    arr = np.array(arr)

    global model
    result = model.predict(arr.reshape(1,-1)).flatten()
    prob = model.predict_proba(arr.reshape(1,-1)).flatten()
    return result, prob