var FO = FO || {};

FO.PosterView = Backbone.View.extend({

	el: 'body',

	initialize: function ( options ) {
		_.bindAll(this, 'render');

		this.model.bind('change', this.render);
        this.model.bind('reset', this.render);
	},

    events: {

        "click #poster": "openLink",
        "click #poster-wrapper": "closeOverlay"

    },

	render: function() {

		$(this.el).append(_.template( FO.Templates.Poster, { model: this.model } ));

        // Position
        var poster = $(this.el).find('#poster');

        poster.css('left', ($(document).width() / 2) - (poster.width() / 2) + 'px');
        poster.css('top', ($(document).height() / 2) - (poster.height() / 2) + 'px');

        poster.fadeIn(400);

        return this;
    },

    openLink: function(e) {

        //e.preventDefault();
        e.stopPropagation();

        //console.log();

        //$(window).href($(this).attr('href'));

    },

    closeOverlay: function(e) {

        e.preventDefault();

        // Remove Overlay
        $('#poster-wrapper').remove();

        // navigate router back
        FO.App.navigate("/");

    }

});