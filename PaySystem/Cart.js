var ProductOrder_1 = require('./ProductOrder');
var Cart = (function () {
    function Cart() {
        this.productOrders = [];
    }
    Cart.prototype.isSetCurrency = function () {
        return (this.currency) ? true : false;
    };
    Cart.prototype.setCurrency = function (currency) {
        if (!this.currency) {
            this.currency = currency;
        }
    };
    Cart.prototype.validateIfNewProductMatchesWithCurrency = function (currency) {
        if (this.isSetCurrency()) {
            return this.currency === currency;
        }
        else {
            this.setCurrency(currency);
            return true;
        }
    };
    Cart.prototype.getCurrency = function () {
        return this.currency;
    };
    Cart.prototype.addProduct = function (p, quantity) {
        if (!this.validateIfNewProductMatchesWithCurrency(p.getCurrency())) {
            throw new Error("New products must have same currency");
        }
        var prodOrder = new ProductOrder_1.ProductOrder(p, quantity);
        this.productOrders.push(prodOrder);
        return this;
    };
    Cart.prototype.getProductOrders = function () {
        return this.productOrders;
    };
    Cart.prototype.calculateTotal = function () {
        var total = 0;
        this.productOrders.forEach(function (p) {
            total += p.getPrice();
        });
        return total;
    };
    return Cart;
})();
exports.Cart = Cart;
