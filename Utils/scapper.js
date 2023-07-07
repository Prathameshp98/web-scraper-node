const cheerio = require("cheerio")
const axios = require("axios")

const Product = require('../models/Product');

const getData = async(url) => {

    return await axios.request({
        method: "GET",
        url: url,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    }) 
}

const scraperUtil = async($) => {
    
    
    const promise = $('.variant-img-container')
            .each(async(index, element) => {
                const pageUrl = $(element).attr("href")

                const type = $($('.vegnonveg--icon')).attr("src")
                const rating = $($('.flexing-rating-child')[index]).text()

                const response = await getData("https://www.healthkart.com" + pageUrl)
                $ = cheerio.load(response.data);

                const images = []

                const name = $($('.variantInfo_var-info__nm__ZlOER')[0]).text()
                const quantity = $($('.__CONSTCLS_item_weight')[0]).text().split('₹')[0]
                const price = $($('.price-value-value')[0]).text()
                const imgs = $('.slick-track').children().find('.play-btn').attr("src")
                images.push(imgs)

                const scrapedData = {
                    name: name,
                    quantity: quantity,
                    price: price,
                    images: images,
                    type: type,
                    rating: rating
                }

                const product = new Product(scrapedData);

                product.save()
                    .then(result => {
                        console.log("Added scraped data")
                    })
                    .catch(err => console.log(err))     

            })

    await Promise.all(promise)
}

exports.performScraping = async() => {

    const response = await getData("https://www.healthkart.com/whey-protein?navKey=SCT-snt-pt-wp");
    let $ = cheerio.load(response.data);

    await scraperUtil($)

    return;

}