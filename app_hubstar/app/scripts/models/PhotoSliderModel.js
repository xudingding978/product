HubStar.PhotoSlider= DS.Model.extend({
        id: DS.attr('string'),
        profile_id: DS.attr('string'),
        type: DS.attr('string'),
        photo_title: DS.attr('string'),
        descripttion: DS.attr('string'),
        image_url: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        
        didLoad: function() {

        }
    });
