define(
        'models/PartnerModel',
        [
            'ember',
            'emberData'
        ], function() {


    var PartnerModel = DS.Model.extend({
        partner_id: DS.attr('string'),
 
        didLoad: function() {
         //   console.log(this.get('sub_topic'));
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return PartnerModel;
}
);

