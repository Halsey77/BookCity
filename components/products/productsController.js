const productsService = require('./productsService');

exports.list = async (req, res) => {
    const products = await productsService.list(!isNaN(req.query.page) && req.query.page > 0 ? req.query.page - 1:0);
    res.render('productsList', {products: products});
}

exports.showDetail = async (req, res) => {
    const id = req.query.ID;
    const productDetail = await productsService.showDetail(id)
    res.render('productdetail', {productDetail});
}