var ProductOrder = (function () {
    function ProductOrder(p, q) {
        this.product = p;
        this.quantity = q;
    }
    ProductOrder.prototype.addOneMore = function () {
        this.quantity++;
        return this;
    };
    ProductOrder.prototype.removeOne = function () {
        this.quantity > 0 ? this.quantity-- : 0;
        return this;
    };
    ProductOrder.prototype.removeAll = function () {
        this.quantity = 0;
        return this;
    };
    ProductOrder.prototype.getPrice = function () {
        var price = 0;
        for (var i = 0; i < this.quantity; i++) {
            price += this.product.getPrice();
        }
        return price;
    };
    return ProductOrder;
})();
exports.ProductOrder = ProductOrder;
