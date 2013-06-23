define(
        'models/ArticleModel',
        [
            'ember',
            'emberData'
        ], function() {

    var ArticleModel = DS.Model.extend({
        mega: DS.belongsTo('App.Mega', {embedded: 'always'}),
        article_title: DS.attr('string'),
        article_text: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        type: DS.attr('string'),
        image_url: DS.attr('string'),
        didLoad: function() {
//            console.log('model loaded', this.toJSON());
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return ArticleModel;
}
);

