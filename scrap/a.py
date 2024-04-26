import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def crawl_website(url, limit=5):
    visited_urls = set()
    to_visit = [url]
    counter = 0

    while to_visit and counter < limit:
        current_url = to_visit.pop(0)
        
        if current_url in visited_urls:
            continue

        try:
            response = requests.get(current_url)
            response.raise_for_status()
            visited_urls.add(current_url)

            # Parse the HTML content
            soup = BeautifulSoup(response.text, 'html.parser')

            # Extract links from the current page
            for link in soup.find_all('a', href=True):
                absolute_link = urljoin(current_url, link['href'])
                if absolute_link.startswith(url):
                    to_visit.append(absolute_link)
                
            # Extract all <p> tags from the current page
            paragraphs = soup.find_all('p')
            save_paragraphs(current_url, paragraphs)
            
            print(f"Visited {len(visited_urls)} URLs")
            counter += 1

        except Exception as e:
            print(f"Error accessing {current_url}: {e}")

    return visited_urls

def save_paragraphs(url, paragraphs):
    with open("data.html", "a") as file:
        file.write(f"<h2>{url}</h2>\n")
        for p in paragraphs:
            file.write(str(p) + "\n")

# Crawl the website
starting_url = "https://www.goldpriceindia.com/"
crawl_website(starting_url, limit=5)

print("Paragraphs from visited URLs have been stored in data.html file.")
