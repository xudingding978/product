HubStar.AboutBook = DS.Model.extend({        
    book_id: DS.attr('string'),
    book_title: DS.attr('string'),
    book_description: DS.attr('string'),
    book_image_url: DS.attr('string'),
    book_read_url: DS.attr('string'),
    book_buy_url: DS.attr('string'),
    read_available: DS.attr('boolean'),
    buy_available: DS.attr('boolean'),
    optional: DS.attr('string'),
    display_size: DS.attr('number'),
    getSize: function() {
        var size = false;        
        if (this.get('display_size') != 0) {
            console.log('111111');
            size = true;
        }
        return size;
    }.property('display_size'),
    didLoad: function() {

    }
});

