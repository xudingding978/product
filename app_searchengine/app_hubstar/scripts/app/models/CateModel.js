define(
        'models/CateModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Cate', {
        subcate: {embedded: 'always'},
    });

    var CateModel = DS.Model.extend({
        topic: DS.attr('string'),
        subcate: DS.hasMany('App.Subcate'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return CateModel;
}
);

