
DS.RESTAdapter.map('HubStar.Article', {
    credits: {embedded: 'load'}
});
HubStar.Article = DS.Model.extend({
    mega: DS.belongsTo('HubStar.Mega', {embedded: 'always'}),
    article_sparkJobId: DS.attr('string'),
    article_heliumMediaId: DS.attr('string'),
    article_type: DS.attr('string'),
    article_headline: DS.attr('string'),
    article_subHeadline: DS.attr('string'),
    article_body: DS.attr('string'),
    article_credits_text: DS.attr('string'),
    article_photography: DS.attr('string'),
    article_featureName: DS.attr('string'),
    article_channelId: DS.attr('string'),
    article_reports: DS.attr('string'),
    article_delivered: DS.attr('string'),
    article_homepageUrl: DS.attr('string'),
    article_contactDetails: DS.attr('string'),
    article_project: DS.attr('string'),
    article_sequence: DS.attr('string'),
    article_supplier: DS.attr('string'),
    article_category: DS.attr('string'),
    article_writer: DS.attr('string'),
    article_image_url: DS.attr('string'),
    article_writer_user_id: DS.attr('string'),
    article_book_id: DS.attr('string'),
    credits: DS.hasMany('HubStar.Credit'),
    didLoad: function() {

    }
});


