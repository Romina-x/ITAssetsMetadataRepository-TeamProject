import requests
import json

# Basic python script to populate the Database
base_url = 'http://localhost:8080'

add_asset_endpoint = '/asset/add'

assets = [
    {
        'type': 'Document',
        'title': 'Customer Requirements',
        'link': 'http://example.com/asset1',
        'lineNum': 100,
        'progLang': 'Java',
        'isDocumentedIn': '2',
        'dependsOn': '3',
        'succeededBy': '4',
        'customAttribute1': 'Jim Prince',
        'customAttribute2': 'Official Sensitive',
        'customAttribute3': 'Local',
        'customAttribute4': 'Prometheus'
    },
    {
        'type': 'Project Report',
        'title': 'Monthly Project Update',
        'link': 'www.prince2.com',
        'lineNum': 200,
        'progLang': 'English',
        'isDocumentedIn': '1',
        'dependsOn': '1',
        'succeededBy': '2',
        'customAttribute1': 'Artemis',
        'customAttribute2': 'Q1',
        'customAttribute3': 'Alan Cooper',
        'customAttribute4': 'Delivery'
    },
    {
        'type': 'Document',
        'title': 'Initial Specification',
        'link': 'http://example.com/asset3',
        'lineNum': 200,
        'progLang': 'Python',
        'isDocumentedIn': '1',
        'dependsOn': '2',
        'succeededBy': '4',
        'customAttribute1': 'Tom Clancy',
        'customAttribute2': 'Unclassified',
        'customAttribute3': 'Cloud',
        'customAttribute4': 'Flame'
    }
]

# Loop through the list of assets and make POST requests to add them to the database
for asset in assets:
    url = base_url + add_asset_endpoint
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(asset), headers=headers)

    # Check the response status code
    if response.status_code == 200:
        print(f"Asset added successfully: {asset['title']}")
    else:
        print(f"Failed to add asset: {asset['title']}. Status code: {response.status_code}")
