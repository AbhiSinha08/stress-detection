import pickle
import numpy as np
import os
os.chdir(__file__.replace(os.path.basename(__file__), ''))
os.chdir('../model')

filename = 'trained_model.sav'
model = pickle.load(open(filename, 'rb'))

selected_feats =   [
        'BVP_mean', 'BVP_std', 'EDA_phasic_mean', 'EDA_phasic_min', 'EDA_smna_min', 
        'EDA_tonic_mean', 'Resp_mean', 'Resp_std', 'TEMP_mean', 'TEMP_std', 'TEMP_slope',
        'BVP_peak_freq', 'age', 'height', 'weight'
    ]

labels = {
    0: "Amused",
    1: "Neutral",
    2: "Stressed"
}

def predict(arr):
    arr = np.array(arr)

    global model
    result = model.predict(arr.reshape(1,-1)).flatten()
    prob = model.predict_proba(arr.reshape(1,-1)).flatten()
    return result.tolist(), prob.tolist()