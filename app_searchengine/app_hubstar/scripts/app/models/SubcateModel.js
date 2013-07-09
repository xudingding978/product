define(
        'models/SubcateModel',
        [
            'ember',
            'emberData'
        ], function() {


    var SubcateModel = DS.Model.extend({
        cate: DS.belongsTo('App.Cate', {embedded: 'always'}),
        category_topic: DS.attr('string'),
        subcategories: DS.attr('string'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return SubcateModel;
}
);

