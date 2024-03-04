import requests
import json

# Basic python script to populate the Database with types
base_url = 'http://localhost:8080'

add_type_endpoint = '/type/add'

types = [
    {
        'typeName': 'Document',
        'customAttribute1': 'Author',
        'customAttribute2': 'Security Rating',
        'customAttribute3': 'Location',
        'customAttribute4': 'Project Name'
    },
    {
        'typeName': 'Project Report',
        'customAttribute1': 'Project Name',
        'customAttribute2': 'Budget',
        'customAttribute3': 'Project Manager',
        'customAttribute4': 'Milestone'
    },
    {
        'typeName': 'Source Code',
        'customAttribute1': 'Version',
        'customAttribute2': 'GitHub',
        'customAttribute3': 'Issues'
    }
]

# Loop through the list of types and make POST requests to add them to the database
for type in types:
    url = base_url + add_type_endpoint
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(type), headers=headers)

    # Check the response status code
    if response.status_code == 200:
        print(f"Type added successfully: {type['typeName']}")
    else:
        print(f"Failed to add type: {type['typeName']}. Status code: {response.status_code}")
