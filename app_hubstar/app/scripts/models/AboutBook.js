HubStar.AboutBook = DS.Model.extend({        
    book_id: DS.attr('string'),
    book_title: DS.attr('string'),
    book_description: DS.attr('string'),
    book_image_url: DS.attr('string'),
    book_read_url: DS.attr('string'),
    book_buy_url: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    }
});

