const cheerio = require("cheerio")
const axios = require("axios")

exports.performScraping = async() => {

    const response = await axios.request({
        method: "GET",
        url: "https://nutrabay.com/product-category/bodybuilding/proteins/whey-proteins/",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    const $ = cheerio.load(response.data);
    console.log($)
}