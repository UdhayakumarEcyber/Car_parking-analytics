#!/usr/bin/env python3
import sys
import json
import requests

CarParks = {
    'Level1':{
        'capacity':50,
        'percentage':70,
    },
    'Level2':{
        'capacity':30,
        'percentage':110,
    },
    'Level3':{
        'capacity':40,
        'percentage':50,
    },
}
def updateMasterData(url,apiKey):
    headers = {
        'Content-Type':'application/json',
        'Authorization':'APIKEY ' + apiKey,
        'User-Agent':'Mozilla',
        'Host':'510church.v4.iviva.cloud'
    }
    data = {
        'carparks':[{'name':k,'capacity':v['capacity']} for k,v in CarParks.items()]
    }
    print(url,data)
    r = requests.post(url  + '/Lucy/CarParks/carparks',headers=headers,data=json.dumps(data))
    r.raise_for_status()
    print (r.text)
def main():
    url = sys.argv[1]
    apiKey = sys.argv[2]
    updateMasterData(url,apiKey)


main()