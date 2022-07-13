#!/usr/bin/python
import requests
import json

url       = "https://trefle.io/api/auth/claim?token=bWVXWThmZlpBUWlTV3NaaCtQWVM5QT09&origin=http://192.168.1.108"
response  = requests.request("POST", url).json()
JWT_Token = response['token']

print(JWT_Token) # This writes the token to the file www/JW_Token.txt because in the crontab I have > to file which means that what ever is outputed by this python script is writen to the file.
