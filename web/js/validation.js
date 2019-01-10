(function (window) {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@[a-zA-Z0-9]+\.com$/.test(email);
        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);