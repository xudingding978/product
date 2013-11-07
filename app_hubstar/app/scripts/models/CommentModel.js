HubStar.Comment = DS.Model.extend({
    commenter_profile_pic_url: DS.attr('string'),
    commenter_id: DS.attr('string'),
    name: DS.attr('string'),
    content: DS.attr('string'),
    time_stamp: DS.attr('string'),
    is_delete: DS.attr('boolean'),
    optional: DS.attr('string'),
    message_id: DS.attr('string'),
    isEdit: DS.attr('boolean'),
    getUser: function() {
        return this.get('commenter_id') === localStorage.loginStatus;
    }.property('isUserSelf'),
    didLoad: function() {

    }


});
