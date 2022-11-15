#! /bin/bash

cd model
rm train_model.py -f
python3 -m jupyter nbconvert model.ipynb --to python --output train_model --ClearOutputPreprocessor.enabled=True --TagRemovePreprocessor.enabled=True --TagRemovePreprocessor.remove_cell_tags 'nbconvert_remove'
python3 train_model.py > /dev/null

echo "Model trained and saved at model/trained_model.sav"