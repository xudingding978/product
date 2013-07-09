define(
        'models/SubcateModel',
        [
            'ember',
            'emberData'
        ], function() {


    var SubcateModel = DS.Model.extend({
        category_topic: DS.attr('string'),
        subcategories: DS.attr('string'),
        sub_topic: function() {
            return this.get('subcategories').split(",");
        }.property('subcategories'),
        didLoad: function() {
         //   console.log(this.get('sub_topic'));
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return SubcateModel;
}
);

