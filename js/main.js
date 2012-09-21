/* Author:
    JL

    Folio
*/

// Namespaced to FO
var FO = FO || {};

FO.core = (function () {

    function init() {

        // Setup backbone

        FO.App = new FO.Router();

        Backbone.history.start();//{pushState: true});

    }

    return {
        init: init
    };

})();

$(document).ready(function () {

    FO.core.init();

});



