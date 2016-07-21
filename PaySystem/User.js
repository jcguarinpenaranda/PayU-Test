var User = (function () {
    function User() {
    }
    User.prototype.getLanguage = function () {
        return this.language;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLanguage = function (l) {
        this.language = l;
        return this;
    };
    User.prototype.setFirstName = function (fn) {
        this.firstName = fn;
        return this;
    };
    User.prototype.setLastName = function (ln) {
        this.lastName = ln;
        return this;
    };
    User.prototype.setName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        return this;
    };
    User.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.setPhone = function (phone) {
        this.phone = phone;
        return this;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setIp = function (ip) {
        this.ip = ip;
        return this;
    };
    User.prototype.getIp = function () {
        return this.ip;
    };
    return User;
})();
exports.User = User;
