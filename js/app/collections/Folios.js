var FO = FO || {};

FO.FolioItem = Backbone.Model.extend();


FO.Folio = Backbone.Collection.extend({

    model: FO.FolioItem,

    url: 'js/data/data.json',

    parse: function (response) {

        return response;

    }

});