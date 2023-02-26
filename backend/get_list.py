import gspread
import requests
import json
from pprint import pprint
from requests.auth import HTTPBasicAuth
food_dict = {}

sa = gspread.service_account(filename="credentials.json")

def get_data(spreadsheet_name, worksheet_name):
    spreadsheet = sa.open(spreadsheet_name)
    worksheet = spreadsheet.worksheet(worksheet_name)
    data = worksheet.get_all_values()
    return data

def update_dict(data):
    for d in data:
        if d[0].lower() in food_dict.keys():
            food_dict[d[0].lower()] += int(d[1])
        else:
            food_dict[d[0].lower()] = int(d[1])
    return food_dict

def print_dict():
    for food, waste in food_dict.items():
        print("Food: {food}, Waste: {waste} ounces".format(food = food, waste = waste))

if __name__ == '__main__':
    sa = gspread.service_account(filename="credentials.json")
    ss1 = "testsheet"
    ws1 = "Class Data"
    data = get_data(ss1, ws1)
    update_dict(data)
    ss2 = "Food Data"
    ws2 = "Sheet1"
    data2 = get_data(ss2, ws2)
    update_dict(data2)
    with open("ingredients.txt") as ingre:
        lines = ingre.readlines()
        l = set(map(lambda s: s.strip(), lines))
    listOfFood = {}
    for k,v in food_dict.items():
        if k in l:
            listOfFood[k] = v
        else:
            temp = k
            while True:
                temp = " ".join(temp.split(" ")[1:])
                if temp in l:
                    listOfFood[temp] = v
                    break
                if len(temp.split(" ")) == 1:
                    break

# Call an API
spoonacular_api_key = 'fd03d916c4ff4d1885e54662d18c7f32'
findByIngredients_url = 'https://api.spoonacular.com/recipes/findByIngredients?'

ingredientList = [k for k in listOfFood]

string_ingredient = "&ingredients="
for count,val in enumerate(ingredientList):
    if count == 0:
        string_ingredient = string_ingredient + val
    else:
        string_ingredient = string_ingredient+"+"+val
    
    string_ingredient = string_ingredient+","

string_ingredient = string_ingredient[:len(string_ingredient)-1]
amountOfRecipes = 10
string_ingredient = string_ingredient+"&number=" + str(amountOfRecipes)
findByIngredients_params = "apiKey=" + spoonacular_api_key + string_ingredient + "&ignorePantry=False"
findByIngredients_query = findByIngredients_url  + findByIngredients_params

findByIngredients_response = requests.get(findByIngredients_query)

#tempList = {}

for c,v in enumerate(findByIngredients_response.json()):
    recipe_id = findByIngredients_response.json()[c]["id"]
    analyzedInstructions_url = f'https://api.spoonacular.com/recipes/{recipe_id}/analyzedInstructions?'
    analyzedInstructions_params = "apiKey=" + spoonacular_api_key
    analyzedInstructions_query = analyzedInstructions_url  + analyzedInstructions_params

    analyzedInstructions_response = requests.get(analyzedInstructions_query)
    with open("steps/steps"+str(c)+".json",'w') as u:
        json.dump(analyzedInstructions_response.json(), u)

with open("allrecipes.json",'w') as t:
    json.dump(findByIngredients_response.json(), t)