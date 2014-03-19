HubStar.SaveToProfile = DS.Model.extend({
    profile_id: DS.attr('string'),
    type: DS.attr('string'),
    profile_name:DS.attr('string'),
    profile_pic:DS.attr('string')
//    getTypeAdmin: function() {
//        return this.get('type') === 'administrator';
//    }.property('type'),
//            getTypeEditor: function() {
//        return this.get('type') === 'editor';
//    }.property('type'),
//            getTypeCreator: function() {
//        return this.get('type') === 'creator';
//    }.property('type')
});

