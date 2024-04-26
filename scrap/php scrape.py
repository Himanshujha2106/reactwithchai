import requests
from bs4 import BeautifulSoup

url = "https://www.goldpriceindia.com/gold-price-ambala.php"

try:
    response = requests.get(url)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Now you can use BeautifulSoup to extract information from the HTML content
    # For example, you can find all <p> tags and print their contents
    paragraphs = soup.find_all('p')
    for p in paragraphs:
        print(p.text)

except Exception as e:
    print("Error accessing the PHP file:", e)
