var FO = FO || {};

FO.Router = Backbone.Router.extend({
    routes: {
        "": "showHomepage",
        "work/:id": "showDetail"
    },

    showHomepage: function () {

        var that = this;

        FO.FolioCollection = new FO.Folio();

        FO.FolioCollection.fetch({
             success:function () {

                var folioView = new FO.SignView({
                    el: $('#folio-items'),
                    model: FO.FolioCollection
                });

                $('#sign').append(folioView.render().el);

                if (that.requestedId) that.showDetail(that.requestedId);
            }
        });
    },

    showDetail: function(id) {

        if (FO.FolioCollection) {

            var folioModel;

            _.each(FO.FolioCollection.models[0].attributes.items, function (obj) {
                if (obj.id === parseInt(id, 10)) {
                    folioModel = new FO.Poster(obj);
                }
            });

            var Poster = new FO.PosterView( { model: folioModel } );

            $('body').append(Poster.render().el);

        }
        else {
            this.requestedId = id;
            this.showHomepage();
        }

        // Create poster based on this:

        // http://www.a2591.com/2008/09/movie-posters-with-brand-integration.html

    }

});