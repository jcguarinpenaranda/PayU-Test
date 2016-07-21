var Cart_1 = require('./Cart');
var User_1 = require('./User');
var PayUOrder = (function () {
    function PayUOrder(merchantId) {
        this.host = "https://secure.payu.com/api/v2_1/orders";
        this.testHost = "https://secure.snd.payu.com/api/v2_1/orders";
        this.testMode = false;
        this.merchantId = merchantId;
        this.cart = new Cart_1.Cart();
        this.user = new User_1.User();
    }
    PayUOrder.prototype.test = function () {
        this.testMode = true;
        return this;
    };
    PayUOrder.prototype.order = function () {
        var host = "";
        if (this.isTestMode()) {
            host = this.testHost;
        }
        else {
            host = this.host;
        }
        var json = {
            merchantPosId: this.getMerchantId(),
            host: host,
            notifyUrl: this.getNotifyUrl(),
            currencyCode: this.getCart().getCurrency(),
            totalAmount: this.getCart().calculateTotal(),
            buyer: {
                email: this.getUser().getEmail(),
                firstName: this.getUser().getFirstName(),
                lastName: this.getUser().getLastName(),
                language: this.getUser().language,
                phone: this.getUser().getPhone()
            }
        };
    };
    PayUOrder.prototype.setNotifyUrl = function (url) {
        this.notifyUrl = url;
        return this;
    };
    PayUOrder.prototype.getNotifyUrl = function () {
        return this.notifyUrl;
    };
    PayUOrder.prototype.getCart = function () {
        return this.cart;
    };
    PayUOrder.prototype.getUser = function () {
        return this.user;
    };
    PayUOrder.prototype.isTestMode = function () {
        return this.testMode;
    };
    PayUOrder.prototype.getMerchantId = function () {
        return this.merchantId;
    };
    return PayUOrder;
})();
exports.PayUOrder = PayUOrder;
