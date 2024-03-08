import requests
import json

# Basic python script to populate the Database
base_url = 'http://localhost:8080'

add_user_endpoint = '/user/add'

users = [
    {
        'name': 'Terry Admin',
        'password': 'Everything',
        'role': 'admin'
    },
    {
        'name': 'Maria User',
        'password': 'Some',
        'role': 'user'
    },
    {
        'name': 'Rebecca Reader',
        'password': 'Little',
        'role': 'reader'
    }
]

# Loop through the list of assets and make POST requests to add them to the database
for user in users:
    url = base_url + add_user_endpoint
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(user), headers=headers)

    # Check the response status code
    if response.status_code == 200:
        print(f"User added successfully: {user['name']}")
    else:
        print(f"Failed to add user: {user['name']}. Status code: {response.status_code}")
