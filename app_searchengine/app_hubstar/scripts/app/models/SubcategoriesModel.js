define(
        'models/SubcategoriesModel',
        [
            'ember',
            'emberData'
        ], function() {


    var SubcategoriesModel = DS.Model.extend({
        search_topic: DS.attr('string'),
 
        didLoad: function() {
         //   console.log(this.get('sub_topic'));
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return SubcategoriesModel;
}
);

