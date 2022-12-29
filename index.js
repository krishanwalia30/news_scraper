const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const articles = []
const base = "https://www.hindustantimes.com/latest-news"

axios(base).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)

    $(".hdg3", html).each(function () {
        const title = $(this).text()
        const url = $(this).children().attr('href')

        const baseUrl = "https://www.hindustantimes.com"

        articles.push({
            title,
            url: baseUrl + url
        })
    })
})


app.listen(PORT, () => console.log(`Running server at Port: ${PORT}`))

app.get('/', (req, res) => {
    // res.json({
    //     "message": "API is working fine"
    // });
    res.json(articles);
})