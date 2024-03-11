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
        'customAttribute1': 'Jim Prince',
        'customAttribute2': 'Official Sensitive',
        'customAttribute3': 'Local',
        'customAttribute4': 'Prometheus',
        'association1': '1',
        'association2': '2',
        'association3': '3',
        'association4': '4',
        'associationRelation1': 'Depends on',
        'associationRelation2': 'Obseleced by',
        'associationRelation3': 'Replaces',
        'associationRelation4': 'Suceeded by',
    },
    {
        'type': 'Project Report',
        'title': 'Monthly Project Update',
        'link': 'www.prince2.com',
        'lineNum': 200,
        'progLang': 'English',
        'customAttribute1': 'Artemis',
        'customAttribute2': 'Q1',
        'customAttribute3': 'Alan Cooper',
        'customAttribute4': 'Delivery',
        'association1': '55',
        'association2': '66',
        'associationRelation1': 'Depends on',
        'associationRelation2': 'Obseleced by'
    },
    {
        'type': 'Document',
        'title': 'Initial Specification',
        'link': 'http://example.com/asset3',
        'lineNum': 200,
        'progLang': 'Python',
        'customAttribute1': 'Tom Clancy',
        'customAttribute2': 'Unclassified',
        'customAttribute3': 'Cloud',
        'customAttribute4': 'Flame',
        'association1': '6',
        'association2': '2',
        'association3': '8',
        'association4': '4',
        'associationRelation1': 'Depends on',
        'associationRelation2': 'Part of',
        'associationRelation3': 'Replaces',
        'associationRelation4': 'Suceeded by'
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
