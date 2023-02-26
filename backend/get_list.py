import gspread

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
    print(food_dict)
    print(listOfFood)
   #print_dict()