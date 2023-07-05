
const Scraper = require('../Utils/scapper')
const Product = require('../models/Product');

exports.getProducts = async(req, res, next) => {

    Scraper.performScraping()

    
}