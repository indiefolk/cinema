var FO = FO || {};

FO.SignView = Backbone.View.extend({

    template: _.template( FO.Templates.SignItem, { model: this.model }),

    initialize: function () {

        _.bindAll(this, 'render');

        this.model.bind('change', this.render);
        this.model.bind('reset', this.render);

        //this.$el.on('click', 'a', this.clickItem);

    },


    // events: {
    //     "click a"   : "showItem"
    // },


    render: function() {

        var that = this,
            itemsCollection = this.model.toJSON()[0].items;

        // Add first feature
        $(that.el).append(_.template( FO.Templates.SignItem, { id: itemsCollection[0].id, title: that.jumblify(itemsCollection[0].title), hVal: 2, tVal: 1 } ));

        // 2nd Feature
        $(that.el).append(_.template( FO.Templates.SignItem, { id: itemsCollection[1].id, title: that.jumblify(itemsCollection[1].title), hVal: 3, tVal: 2 } ));

        var subItems = $('<div/>');

        $(subItems).addClass('sub-items');

        // Rest of items
        _.each(_.rest(itemsCollection, 2), function (item, index, context){

            // Append item to the sign
            $(subItems).append(_.template( FO.Templates.SignItem, { id: itemsCollection[index+2].id, title: that.jumblify(item.title), hVal: 4, tVal: 3 } ));

        });

        $(that.el).append($(subItems));

        return this;
    },


    jumblify: function ( text ) {

        var output = '';

        // loop through characters and add span with random changes/colours
        for (var i = 0, len = text.length; i < len; i++) {

            if (text[i] === ' ') {
                output += ' ';
            }
            else {
                output += '<span' + this.getTextClasses() + '>' + text[i] + '</span>';
            }

        }

        return output;

    },


    getTextClasses: function () {
        // return some styling classes
        // Uses incredibly complex algorithm

        var output = [];

        var rnd1 = Math.floor(Math.random()*11),
            rnd2 = Math.floor(Math.random()*11),
            rnd3 = Math.floor(Math.random()*11);

        // Rotate random letters
        if (rnd1 === 3) {
            output.push('off-left');
        }
        else if (rnd1 === 8) {
            output.push('off-right');
        }

        // colour random letters red
        if (rnd2 === 5) {
            output.push('red-letter');
        }

        // change letter spacing of random letters
        if (rnd3 === 2 || rnd3 === 7) {
            output.push('close');
        }

        if (output.length > 0) {
            return ' class="' + output.join(' ') + '"';
        }
        else {
            return '';
        }
    },


    showItem: function (e) {

        e.preventDefault();
        e.stopPropagation();

        FO.App.navigate($(this).attr('href'), {trigger: true, replace: true});

    }

});