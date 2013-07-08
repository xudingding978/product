define(
        'models/CategoryModel',
        [
            'ember',
            'emberData'
        ], function() {

    var CategoryModel = DS.Model.extend({







        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return CategoryModel;
}
);

