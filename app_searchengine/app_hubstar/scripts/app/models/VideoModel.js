define(
        'models/VideoModel',
        [
            'ember',
            'emberData'
        ], function() {

    var VideoModel = DS.Model.extend({
        
        
        
        
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return VideoModel;
}
);

