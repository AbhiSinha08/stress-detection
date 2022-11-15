import os
os.chdir(__file__.replace(os.path.basename(__file__), ''))

print(os.path.pardir)