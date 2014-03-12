
DS.RESTAdapter.map('HubStar.User', {
    collections: {embedded: 'load'},
    followers: {embedded: 'load'},
    followings: {embedded: 'load'},
    messages: {embedded: 'load'},
    conversations: {embedded: 'load'},
    notifications: {embedded: 'load'},
    profiles: {embedded:'always'}
});


HubStar.User = DS.Model.extend({
    identifier: DS.attr('string'),
    active_status: false,
    cover_url: DS.attr('string'),
    cover_url_small: DS.attr('string'),
    profile_url: DS.attr('string'),
    website_url: DS.attr('string'),
    about_me: DS.attr('string'),
    facebook_link: DS.attr('string'),
    twitter_link: DS.attr('string'),
    googleplus_link: DS.attr('string'),
    pinterest_link: DS.attr('string'),
    linkedin_link: DS.attr('string'),
    youtube_link: DS.attr('string'),
    photo_url: DS.attr('string'),
    photo_url_large: DS.attr('string'),
    display_name: DS.attr('string'),
    description: DS.attr('string'),
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    gender: DS.attr('string'),
    language: DS.attr('string'),
    age: DS.attr('string'),
    birth_day: DS.attr('string'),
    birth_month: DS.attr('string'),
    birth_year: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    email_verified: DS.attr('string'),
    country: DS.attr('string'),
    region: DS.attr('string'),
    city: DS.attr('string'),
    zip: DS.attr('string'),
    address: DS.attr('string'),
    password: DS.attr('string'),
    notification_setting:DS.attr('string'),
    selected_topics: DS.attr('string'),
    profiles: DS.hasMany('HubStar.SaveToProfile'),
    collections: DS.hasMany('HubStar.Collection'),
    followers: DS.hasMany('HubStar.Follower'),
    followings: DS.hasMany('HubStar.Follower'),
    messages: DS.hasMany('HubStar.UserMessage'),
    conversations: DS.hasMany('HubStar.UserConversation'),
    notifications: DS.hasMany('HubStar.Notification'),
    profileSave: function() {
      if(this.get("profiles")===undefined||this.get("profiles")===null||this.get("profiles").get("length")===0)
            {
                return false;
            }
            else{
                return true;
            }
    }.property('profiles')
});




