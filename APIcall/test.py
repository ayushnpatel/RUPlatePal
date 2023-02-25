import requests
import json
from pprint import pprint
from requests.auth import HTTPBasicAuth

# Call an API
#auth = HTTPBasicAuth('x-api-key', 'fd03d916c4ff4d1885e54662d18c7f32')
spoonacular_api_key = 'fd03d916c4ff4d1885e54662d18c7f32'

url = 'https://api.spoonacular.com/recipes/findByIngredients?'

ingredientList = ["apples","flour","sugar","plums"]

postString = "&ingredients="
for count,val in enumerate(ingredientList):
    if count == 0:
        postString = postString + val
    else:
        postString = postString+"+"+val
    
    postString = postString+","
postString = postString[:len(postString)-1]
amountOfRecipes = 2
postString = postString+"&number=" + str(amountOfRecipes)
query_params = "apiKey=" + spoonacular_api_key + postString
#"&ingredients=apples,+flour,+sugar&number=2&ignorePantry=False"

query = url  + query_params

spoonacular_response = requests.get(query)

print(spoonacular_response.json())




