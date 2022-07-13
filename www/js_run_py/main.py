import requests.test
from bs4 import BeautifulSoup
from urllib.request import urlopen

url  = "https://en.wikipedia.org/wiki/" + "Chlorophytum_comosum"

with urlopen(url) as response:
     soup = BeautifulSoup(response, 'html.parser')

page =  soup.find("div", {"class": "mw-parser-output"})
p    = page.findAll('p')[1].get_text()
x = 0
for i in p:
    p = p.replace("[" + str(x) + "]", "")
    x = int(x)
    x = x + 1
print(p)

