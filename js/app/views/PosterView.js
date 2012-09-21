var FO = FO || {};

FO.PosterView = Backbone.View.extend({

	el: '#poster',

	initialize: function ( options ) {
		_.bindAll(this, 'render');

		this.model.bind('change', this.render);
        this.model.bind('reset', this.render);
	},

	render: function() {

		$(this.el).append(_.template( FO.Templates.Poster, { model: this.model } ));

		//console.log(this.model.get(this.options.selected));

        // var that = this,
        //     itemsCollection = this.model.toJSON()[0].items;

        // // Add first feature
        // $(that.el).append(_.template( FO.Templates.SignItem, { id: itemsCollection[0].id, title: that.jumblify(itemsCollection[0].title), hVal: 2, tVal: 1 } ));

        // // 2nd Feature
        // $(that.el).append(_.template( FO.Templates.SignItem, { id: itemsCollection[1].id, title: that.jumblify(itemsCollection[1].title), hVal: 3, tVal: 2 } ));

        // var subItems = $('<div/>');

        // $(subItems).addClass('sub-items');

        // // Rest of items
        // _.each(_.rest(itemsCollection, 2), function (item, index, context){

        //     // Append item to the sign
        //     $(subItems).append(_.template( FO.Templates.SignItem, { id: itemsCollection[index+2].id, title: that.jumblify(item.title), hVal: 4, tVal: 3 } ));

        // });

        // $(that.el).append($(subItems));

        return this;
    }

});