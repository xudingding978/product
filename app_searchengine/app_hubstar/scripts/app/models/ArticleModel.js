define(
        'models/ArticleModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Article', {
        'mega': {embedded: 'always'}
    });
    var ArticleModel = DS.Model.extend({
        mega: DS.hasMany('App.Object'),
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

