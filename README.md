# News Scraper
<img src ='https://th.bing.com/th/id/R.5ab0346b5585a876b1ede8735541c750?rik=fIGAorgeVW4Esw&riu=http%3a%2f%2fwww.masterbrand.com%2f-%2fmedia%2fmasterbrand%2fpages%2fdesign_101%2fnewspapers.jpg%3fw%3d200&ehk=IUNsXLcSoSFdB%2fBrG476%2fZkQ3vTamsmT9cfsd4DN3N0%3d&risl=&pid=ImgRaw&r=0'>
This is a web scraper made using Nodejs and the some of the packages that are used to scrape certain websites. In this project, the Hindustan Times Website is scraped for getting the latest news articles and then forms a Json file of all the link of articles and the title of the respective article.
The site is live at here: https://newsscraper-d6gn.onrender.com/


## Preview 

<img src='https://github.com/krishanwalia30/news_scraper/assets/101003187/c52197c4-5d5d-44f6-b22c-2de042ad4aae'>

## Packages Used

While making this project the packages that were used to scrape the News Website and then make it an API are:-
### Cheerio
Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure. It does not interpret the result as a web browser does. Specifically, it does not produce a visual rendering, apply CSS, load external resources, or execute JavaScript which is common for a SPA (single page application). This makes Cheerio much, much faster than other solutions. If your use case requires any of this functionality, you should consider browser automation software like Puppeteer and Playwright or DOM emulation projects like JSDom.

### Axios
Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE .

### Express Js
Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.
