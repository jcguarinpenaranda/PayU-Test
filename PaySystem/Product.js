var Product = (function () {
    function Product(name, price, currency) {
        this.name = name;
        this.price = price || 0;
        this.currency = currency;
    }
    Product.prototype.setName = function (_name) {
        this.name = _name;
    };
    Product.prototype.setPrice = function (_price) {
        this.price = _price;
        return this;
    };
    Product.prototype.setCurrency = function (_c) {
        this.currency = _c;
        return this;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getCurrency = function () {
        return this.currency;
    };
    return Product;
})();
exports.Product = Product;
