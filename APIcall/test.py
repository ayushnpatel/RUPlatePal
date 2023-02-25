import requests
import json
from pprint import pprint
from requests.auth import HTTPBasicAuth

# Call an API
#auth = HTTPBasicAuth('x-api-key', 'fd03d916c4ff4d1885e54662d18c7f32')
spoonacular_api_key = 'fd03d916c4ff4d1885e54662d18c7f32'

url = 'https://api.spoonacular.com/recipes/findByNutrients'

min_protein = 10

query_params = "apiKey=" + spoonacular_api_key + \
 "&min_protein=" + str(min_protein)

query = url + "?" + query_params

spoonacular_response = requests.get(query)

print(spoonacular_response.json())
#print.pprint(spoonacular_response.json())




