
const Scraper = require('../Utils/scapper')

const Product = require('../models/Product');

exports.getProducts = async(req, res, next) => {

    Scraper.performScraping()
                
    Product
        .find()
        .then((products) => {
            console.log("Fetched docs")
            Product
                .deleteMany({})
                .then(async(result) => {
                    console.log("All docs deleted successfully") 
                    res.render('home', {
                        products: products
                    })        
                })
                .catch(err => console.log(err))
            
        })
        .catch(err => console.log(err))

    
    
}