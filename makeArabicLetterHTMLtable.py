#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Apr 17 07:22:45 2024

@author: hamidsarve
"""
import pandas as pd
import numpy as np

# Read the CSV file
df = pd.read_csv('arabic_letters.csv')

df.replace(np.nan, '', regex=True, inplace=True)


# Convert the DataFrame to an HTML table
html_table = df.to_html(index = False)

# Print the HTML table
print(html_table)

# Write the HTML table to a file
with open('arabic_letters.html', 'w') as f:
    f.write(html_table)