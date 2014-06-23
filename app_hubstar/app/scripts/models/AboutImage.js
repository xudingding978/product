HubStar.AboutImage = DS.Model.extend({        
    image_id: DS.attr('string'),
    image_title: DS.attr('string'),
    image_desc: DS.attr('string'),
    image_url: DS.attr('string'),
    image_link: DS.attr('string'),
    optional: DS.attr('string'),
    display: function() {
        if (this.get('image_url') === null || this.get('image_url') === "") {
            return false;
        } else {
            return true;
        }
    }.property('image_url'),
    didLoad: function() {

    }
});

