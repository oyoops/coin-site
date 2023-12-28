import pandas as pd
import json

# Read the CSV file
df = pd.read_csv('airdrop_addresses_community.csv')

# Convert DataFrame to a list of dictionaries
data_list = df.to_dict(orient='records')

# Convert the list of dictionaries to a JSON formatted string
json_data = json.dumps(data_list, indent=4)

# Formatting the JSON string to JavaScript array format
js_array = f"const dataTable = {json_data};"

# Print the JavaScript array
print(js_array)

# Optionally, write the JavaScript array to a file
with open('airdrop_addresses_community.js', 'w') as file:
    file.write(js_array)
