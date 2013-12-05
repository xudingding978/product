(function() {

var HubStar = window.HubStar = Ember.Application.createWithMixins({
    LOG_TRANSITIONS: false,
    LOG_BINDINGS: false,
    ready: function() {
        HubStar.set("isLogin", false);
        HubStar.set("checkLoginStatus", false);
          HubStar.set("showDiscoveryBar", true);
        HubStar.set("afterSearch", false);
        HubStar.set("setHight", null);
//        requiredBackEnd('tenantConfiguration', 'doesAdDisplay', null, 'post', function(callbck) {
//            var array = $.map(callbck, function(value, index) {
//                return [value];
//            });
//            HubStar.set('ads', array);
//            //console.log(HubStar.get('ads'));
//        });
        HubStar.set('chooseCollection', null);
        HubStar.set('isMansonryPageLoad', false);
        HubStar.set('searchStart', false);
        HubStar.set('photoDomain', "http://s3.hubsrv.com/trendsideas.com");
        HubStar.set('geoLocation', "Global");
    }
});

/* Order and include as you please. */


})();

(function() {



Handlebars.registerHelper('submitButton', function(text) {
    return new Handlebars.SafeString('<button  id="login" type="submit" class="btn btn-primary">' + text + '</button>');
});

Handlebars.registerHelper('plainButton', function(text) {
    return new Handlebars.SafeString('<button   type="submit" class="btn btn-primary">' + text + '</button>');
});

Handlebars.registerHelper('mailto', function(field) {
    var address = this.get(field);
    if (address) {
        return new Handlebars.SafeString('<a href="mailto: ' + address + '" />' + address + '</a>');
    }
});


Handlebars.registerHelper('checkInputFilesSize', function(object) {

    return new Handlebars.SafeString(
            "<p>" + object.length + "</p>"
            );

});

//Handlebars.registerHelper('subtraction', function(minuend, subtrahend) {
//    minuend = Ember.getPath(this, minuend);
//    subtrahend = Ember.getPath(this, subtrahend);
//    return parseInt(minuend) - parseInt(subtrahend);
//});



Ember.Handlebars.registerBoundHelper('length', function(size) {

    if (size === "" || size === null || size === undefined) {
        return 0;
    }
    else {
        var partnerlength = size.split(',');
        return partnerlength.length;
    }


});



Ember.Handlebars.registerBoundHelper('videolength', function(number) {

    if (number === "" || number === null || number === undefined) {
        return 0;
    }
    else if (number.match(/www.youtube.com/g) !== -1 && number.match(/www.youtube.com/g) !== null) {
        return number.match(/www.youtube.com/g).length - 1;
    }

    else
        return 0;


});



Ember.Handlebars.registerBoundHelper('ebooklength', function(number) {

    if (number === "" || number === null || number === undefined) {
        return 0;
    }
    else if (number.match(/library.trendsideas.com/g) !== -1 && number.match(/library.trendsideas.com/g) !== null) {
        return number.match(/library.trendsideas.com/g).length;
    }

    else
        return 0;



});


Ember.Handlebars.registerBoundHelper('date', function(date) {
    if (date === "" || date === null || date === undefined) {
        return "";
    } else {
        var matches = date.match('^[0-9]+$');
        if (matches !== null) {
            return moment.unix(date).fromNow();
        } else {
            return moment(date).fromNow();
        }
    }
});

Ember.Handlebars.registerBoundHelper('dateTImeStamp', function(date) {
    if (date === "" || date === null || date === undefined) {
        return "";
    } else {
        var matches = date.match('^[0-9]+$');
        if (matches !== null) {
            return moment.unix(date).valueOf();
        } else {
            return moment(date).valueOf();
        }
    }
});

Ember.Handlebars.registerBoundHelper('isThumbUped', function(userids, megaId) {
    if (userids === null || userids === undefined)
    {
        userids = "";
    }

    setTimeout(function() {
        if (userids.indexOf(localStorage.loginStatus) !== -1)
        {

            var div_id = "#thumbUpBtn_" + megaId;
            $(div_id).removeClass("new-btn");

        }
    }, 20);
});




Ember.Handlebars.registerBoundHelper('test', function(test) {
});







})();

(function() {

HubStar.AboutBook = DS.Model.extend({        
    book_id: DS.attr('string'),
    book_title: DS.attr('string'),
    book_description: DS.attr('string'),
    book_image_url: DS.attr('string'),
    book_read_url: DS.attr('string'),
    book_buy_url: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    }
});



})();

(function() {

HubStar.AboutImage = DS.Model.extend({        
    image_id: DS.attr('string'),
    image_title: DS.attr('string'),
    image_desc: DS.attr('string'),
    image_url: DS.attr('string'),
    image_link: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    }
});



})();

(function() {

DS.RESTAdapter.map('HubStar.AboutUs', {
    about_video: {embedded: 'always'},
    about_image: {embedded: 'always'},
    about_book: {embedded: 'always'}
});



HubStar.AboutUs = DS.Model.extend({
    about_id: DS.attr('string'),
    about_desc: DS.attr('string'),
    about_template_id: DS.attr('string'),
    about_video: DS.hasMany('HubStar.AboutVideo'), 
    about_image: DS.hasMany('HubStar.AboutImage'), 
    about_book: DS.hasMany('HubStar.AboutBook'), 
    optional: DS.attr('string'),
    didLoad: function() {

    }
});


})();

(function() {

HubStar.AboutVideo = DS.Model.extend({        
    video_id: DS.attr('string'),
    video_title: DS.attr('string'),
    video_desc: DS.attr('string'),
    video_url: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    },
    getVideoURL: function() {
//        console.log('11111111');
    }
//    getVideoURL: function() {
////        for (var i = 0; i < this.get('about_us').objectAt(0).get('about_video').get('length'); i ++) {
//            var video_url = this.get('video_url').split('?');
//            if (video_url.get('length') >1) {
//                if (video_url[1].split('=')[1].length >10) {
//                    var VideoURL = '//www.youtube.com/embed/'+video_url[1].split('=')[1];
//                    return VideoURL;
//                }
//                return '';
//            } else {
//                return '';
//            }
////        }
//    }.property('video_url')
});



})();

(function() {


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




})();

(function() {


    DS.RESTAdapter.map('HubStar.Cate', {
        subcate: {embedded: 'always'}
    });

    HubStar.Cate = DS.Model.extend({
        topic: DS.attr('string'),
        subcate: DS.hasMany('HubStar.Subcate'),
        didLoad: function() {

        }
    });



})();

(function() {

HubStar.Collection = DS.Model.extend({
    title: DS.attr('string'),
    desc: DS.attr('string'),
    collection_ids: DS.attr('string'),
    created_at: DS.attr('string'),
    cover: DS.attr('string'),
    parent_type: DS.attr('string'),
    optional:DS.attr('string'),
    type:DS.attr('string'),
    didLoad: function() {
    },
        getCollectionId: function()
    {
        var id = "C" + this.get('id');
        return id;
    }.property('id')
});


})();

(function() {

HubStar.Comment = DS.Model.extend({
    commenter_profile_pic_url: DS.attr('string'),
    commenter_id: DS.attr('string'),
    name: DS.attr('string'),
    content: DS.attr('string'),
    time_stamp: DS.attr('string'),
    is_delete: DS.attr('boolean'),
    optional: DS.attr('string'),
    message_id: DS.attr('string'),
    isEdit: DS.attr('boolean'),
    getUser: function() {
        return this.get('commenter_id') === localStorage.loginStatus;
    }.property('isUserSelf'),
    didLoad: function() {

    }


});


})();

(function() {

HubStar.ConversationItem = DS.Model.extend({
    item_id: DS.attr('string'),
    name: DS.attr('string'),
    time_stamp: DS.attr('string'),
    content: DS.attr('string'),
    sender_id:DS.attr('string'),
    sender_photo_url_large: DS.attr('string')
});



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


DS.RESTAdapter.map('HubStar.Conversation', {

    ConversationCollection: {embedded: 'load'}
});


HubStar.Conversation = DS.Model.extend({
     conversation_id: DS.attr('string'),
     participation_ids: DS.attr('string'),
    ConversationCollection: DS.hasMany('HubStar.ConversationItem')
        
});





})();

(function() {

HubStar.Credit = DS.Model.extend({
    credits_id: DS.attr('string'),
    credits_name: DS.attr('string'),
    credits_text: DS.attr('string'),
    credits_category_name: DS.attr('string'),
    credits_sub_category_name: DS.attr('string'),
    optional:DS.attr('string'),
    didLoad: function() {
    }
});


})();

(function() {

HubStar.Email= DS.Model.extend({
        displayName: DS.attr('string'),
        displayEmail: DS.attr('string'),
        recieveProfile: DS.attr('string'),
        emailBody: DS.attr('string'),
        emailSubject: DS.attr('string'),
        emailDestination: DS.attr('string'),
        emaiCCDestination: DS.attr('string'),
        emaiBCCDestination: DS.attr('string'),
        projectCategory: DS.attr('string'),
        projectTimeframe: DS.attr('string'),
        projectBudget: DS.attr('string'),
        projectExperience: DS.attr('string'),
        projectSubCategoryItem: DS.attr('string'),
        didLoad: function() {

        }
    });





})();

(function() {

HubStar.Follower = DS.Model.extend({
        
                follower_profile_pic_url: DS.attr('string'),
                follower_id: DS.attr('string'),
                type: DS.attr('string'),
                name: DS.attr('string'),
                type: DS.attr('string'),
                time_stamp: DS.attr('string'),
                is_delete: DS.attr('boolean'),
                didLoad: function() {

                }


            });



})();

(function() {

HubStar.Keyword = DS.Model.extend({        
    keyword_id: DS.attr('string'),
    keyword_name: DS.attr('string'),
    create_date: DS.attr('number'),
    expire_date: DS.attr('number'),
    value: DS.attr('number'),
    profile_id: DS.attr('string'),
    collection_id: DS.attr('string'),
    is_delete: DS.attr('boolean'),
    didLoad: function() {

    }
});



})();

(function() {


DS.RESTAdapter.map('HubStar.Mega', {
    photo: {embedded: 'always'},
    user: {embedded: 'always'},
    comments: {embedded: 'load'},
    reviews:{embedded: 'load'},
    profile: {embedded: 'load'},
    keyword: {embedded: 'always'},
    videoes: {embedded: 'always'},
    article: {embedded: 'always'}
});

HubStar.Mega = DS.Model.extend(Ember.Copyable, {
    accessed: DS.attr('string'),
    boost: DS.attr('string'),
    category: DS.attr('string'),
    categories: DS.attr('string'),
    creator_profile_pic: DS.attr('string'),
    created: DS.attr('string'),
    creator: DS.attr('string'),
    country: DS.attr('string'),
    collection_id: DS.attr('string'),
    collection_count: DS.attr('string'),
    deleted: DS.attr('string'),
    domains: DS.attr('string'),
    editors: DS.attr('string'),
    geography: DS.attr('string'),
    likes_count: DS.attr('string'),
    is_active: DS.attr('boolean'),
    is_indexed: DS.attr('boolean'),
    keywords: DS.attr('string'),
    keyword_num: DS.attr('number'),
    object_image_linkto: DS.attr('string'),
    object_image_url: DS.attr('string'),
    object_title: DS.attr('string'),
    object_description: DS.attr('string'),
    owner_type: DS.attr('string'), // profiles or user can upload files, this could help to link back to their profile.
    owner_profile_pic: DS.attr('string'),
    owner_title: DS.attr('string'), //profile name
    owner_id: DS.attr('string'), //profile id
    owner_contact_email: DS.attr('string'),
    owner_contact_cc_emails: DS.attr('string'),
    owner_contact_bcc_emails: DS.attr('string'),
    people_like: DS.attr('string'),
    region: DS.attr('string'),
    suburb: DS.attr('string'),
    status_id: DS.attr('string'),
    subcategories: DS.attr('string'),
    timezone: DS.attr('string'),
    topic: DS.attr('string'),
    type: DS.attr('string'),
    updated: DS.attr('string'),
    uri_url: DS.attr('string'),
    view_count: DS.attr('string'),
    optional: DS.attr('string'),
    isFollow: DS.attr('boolean'),
    //--------------------------
    photo: DS.hasMany('HubStar.Photo'),
    user: DS.hasMany('HubStar.User'),
    profile: DS.hasMany('HubStar.Profile'),
    comments: DS.hasMany('HubStar.Comment'),
    reviews: DS.hasMany('HubStar.Review'),
    article: DS.hasMany('HubStar.Article'),
    keyword: DS.hasMany('HubStar.Keyword'),
    videoes: DS.hasMany('HubStar.Video'),
    photo_album_id: function() {
        return "#album_" + this.get('id');
    }.property('id'),
    more_button: function() {
        return "more_button_" + this.get('id');
    }.property('id'),
    collape_button: function() {
        return "collape_button_" + this.get('id');
    }.property('id'),
    getProfile_id: function() {
        return "#/profiles/" + this.get('owner_id');
    }.property('owner_id'),
    getProfile: function() {
        return this.get('type') === 'profile';
    }.property('type'),
    getPhoto: function() {
        return this.get('type') === 'photo';
    }.property('type'),
    getVideo: function() {
        return this.get('type') === 'video';
    }.property('type'),
    getFile: function() {
        return this.get('type') === 'file';
    }.property('type'),
    getArticle: function() {
        return this.get('type') === 'article';
    }.property('type'),
    getIdeabook: function() {
        return this.get('type') === 'ideabook';
    }.property('type'),
    getDiscussion: function() {
        return this.get('type') === 'discussion';
    }.property('type'),
              getAd: function() {
        return this.get('type') === 'ad';
    }.property('type'),
    updateMegaWithUrl: function(mega, url)
    {
        var tempurl = getRestAPIURL();
        var id = mega.get('id');
        mega.set('optional', id);
        $.ajax({
            url: tempurl + '/megas/' + url,
            type: 'POST',
            data: JSON.stringify(mega),
            success: function() {
                HubStar.store.save();
            }
        });
    },
    didLoad: function() {
    }
});


})();

(function() {


DS.RESTAdapter.map('HubStar.Meganew', {
    profile: {embedded: 'always'}
});

HubStar.Meganew = DS.Model.extend(Ember.Copyable, {
    accessed: DS.attr('string'),
    boost: DS.attr('string'),
    category: DS.attr('string'),
    categories: DS.attr('string'),
    creator_profile_pic: DS.attr('string'),
    created: DS.attr('string'),
    creator: DS.attr('string'),
    country: DS.attr('string'),
    collection_id: DS.attr('string'),
    collection_count: DS.attr('string'),
    deleted: DS.attr('string'),
    domains: DS.attr('string'),
    editors: DS.attr('string'),
    geography: DS.attr('string'),
    likes_count: DS.attr('string'),
    is_active: DS.attr('boolean'),
    is_indexed: DS.attr('boolean'),
    keywords: DS.attr('string'),
    keyword_num: DS.attr('number'),
    object_image_linkto: DS.attr('string'),
    object_image_url: DS.attr('string'),
    object_title: DS.attr('string'),
    object_description: DS.attr('string'),
    owner_type: DS.attr('string'), // profiles or user can upload files, this could help to link back to their profile.
    owner_profile_pic: DS.attr('string'),
    owner_title: DS.attr('string'), //profile name
    owner_id: DS.attr('string'), //profile id
    owner_contact_email: DS.attr('string'),
    owner_contact_cc_emails: DS.attr('string'),
    owner_contact_bcc_emails: DS.attr('string'),
    people_like: DS.attr('string'),
    region: DS.attr('string'),
    suburb: DS.attr('string'),
    status_id: DS.attr('string'),
    subcategories: DS.attr('string'),
    timezone: DS.attr('string'),
    topic: DS.attr('string'),
    type: DS.attr('string'),
    updated: DS.attr('string'),
    uri_url: DS.attr('string'),
    view_count: DS.attr('string'),
    optional: DS.attr('string'),
    isFollow: DS.attr('boolean'),
    //--------------------------
    profile: DS.hasMany('HubStar.Profile')





});


})();

(function() {

HubStar.Message = DS.Model.extend({
    reply_id: DS.attr('string'),
    user_id: DS.attr('string'),
    time_stamp: DS.attr('string'),
    msg: DS.attr('string'),
    url:DS.attr('string'),
    user_name: DS.attr('string'),
    photo_url_large: DS.attr('string'),
    enableToEdit: DS.attr('string')
});



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.Notification = DS.Model.extend({
    notification_id: DS.attr('string'),
    user_id: DS.attr('string'),
    type: DS.attr('string'),
    time: DS.attr('string'),
    content:DS.attr('string'),
    action_id:DS.attr('string'),
    isRead:false
});





})();

(function() {

HubStar.Photo = DS.Model.extend({
        // mega: DS.belongsTo('HubStar.Mega', {embedded: 'always'}),
        photo_source_id: DS.attr('string'),
        photo_title: DS.attr('string'),
        photo_image_linkto: DS.attr('string'),
        photo_technicalSpecification: DS.attr('string'),
        photo_sequence: DS.attr('string'),
        photo_isExtra: DS.attr('string'),
        photo_caption: DS.attr('string'),
        photo_link_text: DS.attr('string'),
        photo_link_url: DS.attr('string'),
        photo_original_filename: DS.attr('string'),
        photo_original_width: DS.attr('string'),
        photo_original_height: DS.attr('string'),
        photo_type: DS.attr('string'),
        photo_file_name: DS.attr('string'),
        photo_collection_name: DS.attr('string'),
        photo_categories: DS.attr('string'), //[] 
        photo_keywords: DS.attr('string'), //[ ]
        photo_brands: DS.attr('string'), // [ ]
        photo_image_original_url: DS.attr('string'), // [ ]
        photo_image_hero_url: DS.attr('string'), // [ ]
        photo_image_thumbnail_url: DS.attr('string'), // [ ]
        photo_image_preview_url: DS.attr('string'), // [ ]
        photo_products: DS.attr('string'), // [ ] 
        photo_articleId: DS.attr('string'),
        photo_heliumId: DS.attr('string'),


        didLoad: function() {

        }
    });





})();

(function() {

HubStar.PhotoSlider= DS.Model.extend({
        id: DS.attr('string'),
        profile_id: DS.attr('string'),
        type: DS.attr('string'),
        photo_title: DS.attr('string'),
        descripttion: DS.attr('string'),
        image_url: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        
        didLoad: function() {

        }
    });


})();

(function() {


DS.RESTAdapter.map('HubStar.Profile', {
    collections: {embedded: 'load'},
    followers: {embedded: 'load'},
    reviews:{embedded: 'load'},
    keywords: {embedded: 'load'},
    about_us: {embedded: 'load'}
});
HubStar.Profile = DS.Model.extend({
    profile_category: DS.attr('string'),
    profile_hero_url: DS.attr('string'),
    profile_pic_url: DS.attr('string'),
    profile_bg_url: DS.attr('string'),
    profile_hero_cover_url: DS.attr('string'),
    profile_physical_address: DS.attr('string'),
    profile_suburb: DS.attr('string'),
    profile_contact_number: DS.attr('string'),
    profile_contact_user: DS.attr('string'),
    profile_about_us: DS.attr('string'),
    profile_cover_text: DS.attr('string'),
    profile_boost: DS.attr('string'),
    profile_name: DS.attr('string'), //
    profile_contact_first_name: DS.attr('string'),
    profile_contact_last_name: DS.attr('string'),
    profile_contact_email: DS.attr('string'),
    profile_keywords: DS.attr('string'),
    profile_keywords_num: DS.attr('number'),
    profile_package_name: DS.attr('string'),
    profile_regoin: DS.attr('string'),
    profile_country: DS.attr('string'),
    profile_hours: DS.attr('string'),
    profile_areas_serviced: DS.attr('string'),
    profile_website: DS.attr('string'),
    profile_website_url: DS.attr('string'),
    profile_client_name: DS.attr('string'),
    profile_editors: DS.attr('string'),
    profile_domains: DS.attr('string'),
    profile_creater: DS.attr('string'),
    profile_partner_ids: DS.attr('string'),
    profile_isActive: DS.attr('string'),
    profile_isDeleted: DS.attr('string'),
    profile_facebook_link: DS.attr('string'),
    profile_twitter_link: DS.attr('string'),
    profile_googleplus_link: DS.attr('string'),
    profile_pinterest_link: DS.attr('string'),
    profile_linkedin_link: DS.attr('string'),
    profile_youtube_link: DS.attr('string'),
    profile_analytics_code: DS.attr('string'),
    profile_average_review: DS.attr('string'),
    profile_average_review_length: DS.attr('string'),
    profile_google_map:DS.attr('string'),
    owner: DS.attr('string'),
    owner_contact_email: DS.attr('string'),
    owner_contact_cc_emails: DS.attr('string'),
    owner_contact_bcc_emails: DS.attr('string'),
    followers: DS.hasMany('HubStar.Follower'),
    collections: DS.hasMany('HubStar.Collection'),
    reviews: DS.hasMany('HubStar.Review'),
    keywords: DS.hasMany('HubStar.Keyword'),
    show_keyword_id: DS.attr('string'),
    about_us: DS.hasMany('HubStar.AboutUs'),
//    getTenKeywords: function() {
//        var tenKeywords =  this.get('keywords').slice(0,10);
//        return tenKeywords;
//    }.property('keywords')
});






})();

(function() {

HubStar.Reply = DS.Model.extend({
    review_reply_id: DS.attr('string'),
    review_user_id: DS.attr('string'),
    review_time_stamp: DS.attr('string'),
    review_msg: DS.attr('string'),
    review_userself: DS.attr('boolean'),
    review_user_name: DS.attr('string'),
    review_photo_url_large: DS.attr('string'),
    review_enableToEdit: DS.attr('boolean'),
    optional: DS.attr('string'),
    getUser: function() {
        return this.get('review_user_id') === localStorage.loginStatus;
    }.property('isUserSelf')
});



})();

(function() {



DS.RESTAdapter.map('HubStar.Review', {

    reply_reviews: {embedded: 'load'}
});



HubStar.Review = DS.Model.extend({
    review_id: DS.attr('string'),
    review_user_photo_url: DS.attr('string'),
    review_user_name: DS.attr('string'),
    review_user_id: DS.attr('string'),
    review_content: DS.attr('string'),
    review_time_stamp: DS.attr('string'),
    review_is_delete: DS.attr('boolean'),
    review_is_edit: DS.attr('boolean'),
    review_star_rating_value: DS.attr('number'),  
    review_count: DS.attr('string'),
    review_length: DS.attr('string'),
    review_like_count:DS.attr('number'),
    review_people_like:DS.attr('string'),
    reply_reviews: DS.hasMany('HubStar.Reply'), 
    optional: DS.attr('string'),
    getUser: function() {
        return this.get('review_user_id') === localStorage.loginStatus;
    }.property('isUserSelf')
 
});


})();

(function() {

HubStar.Search= DS.Model.extend({
        region: DS.attr('string'),
        took: DS.attr('string'),
        hits: DS.attr('string'),
        uri_url: DS.attr('string'),
        creator: DS.attr('string'),
        type: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        image_url: DS.attr('string'),
        article_text: DS.attr('string'),
        article_title: DS.attr('string'),
        video_title: DS.attr('string'),
        photo_title: DS.attr('string'),
        profile_id: DS.attr('string'),
        profile_name: DS.attr('string'),
        profile_hero_url: DS.attr('string'),
        photo_title: DS.attr('string'),
        video_title: DS.attr('string'),
        description: DS.attr('string'),
        more_button: function() {
            return "more_button_" + this.get('id');
        }.property('id'),
        collape_button: function() {
            return "collape_button_" + this.get('id');
        }.property('id'),
        getProfile_id: function() {
            return "#/profiles/" + this.get('profile_id');
        }.property('profile_id'),
        getProfile: function() {
            return this.get('type') === 'profile';
        }.property('type'),
        getPhoto: function() {
            return this.get('type') === 'photo';
        }.property('type'),
        getVideo: function() {
            return this.get('type') === 'video';
        }.property('type'),
        getFile: function() {
            return this.get('type') === 'file';
        }.property('type'),
        getArticle: function() {
            return this.get('type') === 'article';
        }.property('type'),
        getIdeabook: function() {
            return this.get('type') === 'ideabook';
        }.property('type'),
        getDiscussion: function() {
            return this.get('type') === 'discussion';
        }.property('type')



    });


})();

(function() {


    DS.RESTAdapter.map('HubStar.Stat', {
         megas: {embedded: 'load'}
    });

HubStar.Stat = DS.Model.extend({
    numberofresults: DS.attr('string'),
    megas: DS.hasMany('HubStar.Mega'),
    didLoad: function() {
    }
});



})();

(function() {


    DS.RESTAdapter.map('HubStar.Subcate', {
        subcategories: {embedded: 'always'}
    });

    HubStar.Subcate = DS.Model.extend({
        category_topic: DS.attr('string'),
        subcategories: DS.hasMany('HubStar.Subcategories'),
        didLoad: function() {

        }
    });





})();

(function() {

HubStar.Subcategories = DS.Model.extend({
        search_topic: DS.attr('string'),
 
        didLoad: function() {

        }
    });




})();

(function() {

HubStar.UserConversation = DS.Model.extend({
    conversation_id: DS.attr('string'),
    is_read: false
});



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


DS.RESTAdapter.map('HubStar.UserMessage', {

    replyMessageCollection: {embedded: 'load'}
});


HubStar.UserMessage = DS.Model.extend({
    message_id: DS.attr('string'),
    replyMessageCollection: DS.hasMany('HubStar.Message')
        
});





})();

(function() {


DS.RESTAdapter.map('HubStar.User', {
    collections: {embedded: 'load'},
    followers: {embedded: 'load'},
    followings: {embedded: 'load'},
    messages: {embedded: 'load'},
    conversations: {embedded: 'load'},
    notifications: {embedded: 'load'}
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
    collections: DS.hasMany('HubStar.Collection'),
    followers: DS.hasMany('HubStar.Follower'),
    followings: DS.hasMany('HubStar.Follower'),
    messages: DS.hasMany('HubStar.UserMessage'),
    conversations: DS.hasMany('HubStar.UserConversation'),
    notifications: DS.hasMany('HubStar.Notification')
});






})();

(function() {

HubStar.Video = DS.Model.extend({
    videoImg: DS.attr('string'),
    videoTitle: DS.attr('string'),
    videoDesc: DS.attr('string'),
    videoIframeCode: DS.attr('string')
});



})();

(function() {

HubStar.ApplicationRoute = Ember.Route.extend({

        setupController: function(controller, model) {


        }
     

               
              
    });


})();

(function() {

HubStar.ArticlePhotoRoute = Ember.Route.extend({
     setupController: function(controller, model) {
        var temp;
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
       // var type= url []
        this.controllerFor("masoryCollectionItems").set("type", "user");
        var megaModel = HubStar.Mega.find(temp);
        this.controllerFor('mega').getInitData(megaModel);

    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
         this.controllerFor("article").set("searchFromRoute", true); //only use in userarticle route to get the temp id;
        this.controllerFor("mega").set("clickOrRoute", true);
        return model;
    },
    activate: function() {
        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);
    },
    events: {
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        }
    },
    deactivate: function() {


        $("body").css("overflow", "auto");
        $('#footer').attr("style", "display:block");
    },
    renderTemplate: function() {
        var controller = this.controllerFor('mega');


        this.render("photo", {
            outlet: "photos",
            into: "application",
            controller: controller
        });
    }

});

})();

(function() {

HubStar.ArticleRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(controller, model) {
            var temp;
        if (model.id === undefined) {                        //reload the page model id can not be find...
            var url =  window.location.href;
            urlArray = url.split("/");
            temp = urlArray[urlArray.length-1];
        } else {
            temp = model.id;
        }
            var d = HubStar.Mega.find(temp);
            controller.getInitData(d);
        },
        model: function(params) {
            var model = HubStar.Mega.find({"RequireType": "articles", "article_id": params.article_id});
            return model;
        },
        activate: function() {

            setTimeout(function() {
                $("body").css("overflow", "hidden");
                $('#footer').attr("style", "display:none");
            }, 100);

        },
        events: {
            transitionToProfile: function(id) {

                this.transitionTo("profile", HubStar.Profile.find(id));
            }
            
        },
                
        deactivate: function() {


            setTimeout(function() {
                $("body").css("overflow", "auto");
                $('#footer').attr("style", "display:block");
            }, 100);
        },
        renderTemplate: function() {


            this.render("article", {
                outlet: "articles",
                into: "application"
            });
        }

    });


})();

(function() {

HubStar.ArticlesRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(IndexController, model) {

        }

    });


})();

(function() {

HubStar.CollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (model.get('id') === undefined || model.get('id') === "") {
            var address = document.URL;
            var id = address.split("#")[1].split("/")[3];
        } else {
            var id = model.get('id');
        }

        this.controllerFor('user').set('switchPhoto', false);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        this.controllerFor('masonryCollectionItems').selectModelForUser(id);
        this.controllerFor('masonryCollectionItems').set('canEdit', true);
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 3000);
    },
    events: {
        transitionToPhoto: function(id) {
            
            this.controllerFor('mega').set("selectPhoto", false);
            var obj = HubStar.Mega.find(id);
            this.transitionTo("userPhoto", obj);//photo          
        },
        transitionToProfile: function(id) {
            this.controllerFor('user').set('switchPhoto', false);
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            return HubStar.Mega.find({RquireType: "firstsearch", user_id: user_id, collection_id: params.collection_id});
        },
        transitionToArticle: function(id) {
            this.controllerFor("article").set("collectionArticleId", id);
 
            this.transitionTo("userArticle", HubStar.Article.find(id));

        },
        transitionToVideo: function(video_id) {
            this.transitionTo("userVideo", video_id);
        }
    },
    redirect: function() {

    },
    deactivate: function() {

    },
    activate: function() {

    },
    renderTemplate: function() {



    }

});


})();

(function() {

HubStar.ConversationRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        $(window).scrollTop(550);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        var user = HubStar.User.find(user_id);
        var conversation_id = address.split("#")[1].split("/")[5];
        var data = null;
        if (conversation_id === "new" || conversation_id === "null")
        {
            this.transitionToRoute("newConversation");
        }
        else {

            for (var i = 0; i < user.get('conversations').get("length"); i++) {
                data = user.get('conversations').objectAt(i);
                if (data.get("conversation_id") === conversation_id) {
                    data.set("id", data.get("conversation_id"));
                    break;
                }
            }
            return data;
        }

    }
});




})();

(function() {

HubStar.ConversationsRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        $(window).scrollTop(0);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});




})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.FollowersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
 
        this.controllerFor('user').set('profileSelectionStatus', 'Followers');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', true);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', false);


        
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#ufollower').addClass('selected-user-stats');
   this.controllerFor('userFollowers').setUserFollowers(model);

    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.FollowingRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Following');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', true);
        this.controllerFor('user').set('messageTag', false);



        $('#user-stats > li').removeClass('selected-user-stats');
        $('#ufollowing').addClass('selected-user-stats');


        this.controllerFor('userFollowings').setUserFollowings(model);

    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */




})();

(function() {

HubStar.IdeabooksRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(IndexController, model) {

        },
        model: function(params) {
            return HubStar.Profile.find(params.profile_id);
        },
        activate: function() {
             $("body").css("overflow", "hidden");
             $('#footer').attr("style", "display:none");
        },
        deactivate: function() {
             $("body").css("overflow", "auto");
             $('#footer').attr("style", "display:block");
        },
        renderTemplate: function() {
            this.render('ideabooks', {
                into: "index"
            });
        }

    });


})();

(function() {

HubStar.IndexIndexRoute = Ember.Route.extend({
        setupController: function() {

            this.controllerFor('application').set('islogin', false);

            this.controllerFor('status').set('islogin', false);
            this.controllerFor('application').set('isotherpage', false);

            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            }
        },
        events: {
            transitionToProfile: function() {
                this.controllerFor('application').set("popup", true);
            },
            transitionToPhoto: function() {
                this.controllerFor('application').set("popup", true);
            },
            transitionToArticle: function() {
//        console.log("tomtomt");
                this.controllerFor('application').set("popup", true);
            }
        },
        redirect: function() {


            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
              //  this.transitionTo('indexIndex');

            } else {
                
                this.transitionTo('searchIndex');

            }

        },
        model: function() {
            return HubStar.Mega.find();
        },
        activate: function() {


            HubStar.set("isLogin", false);
        },
        deactivate: function() {

            HubStar.set("isLogin", true);
        }

    });


})();

(function() {

HubStar.IndexRoute = Ember.Route.extend({




    });


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageCenterRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('user').set('collectionTag', false); 
        this.controllerFor('user').set('postTag', false);  //it is used to solve the problem of visit conversation from notificationTop,but show the posts
        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', true);
        // The following two line is used to change the selection with dark 
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#message').addClass('selected-user-stats');
        var address = document.URL;

        var conversation_id = "";
       
        if (this.controllerFor('notificationTop').get("notificationSeeAll") === true)
        {
            model = localStorage.loginStatus;
            this.controllerFor('notificationTop').set("notificationSeeAll", false);
        }      
        if (this.controllerFor('notificationTop').get("goConversation") === true)
        {

            model = localStorage.loginStatus;
            this.controllerFor('notificationTop').set("goConversation", false);
            this.controllerFor('messageCenter').getClientId(localStorage.loginStatus);
        }
        else if (address.split("#")[1].split("/").length === 6 && address.split("#")[1].split("/")[4] === "conversations") {
            conversation_id = address.split("#")[1].split("/")[5];
            this.controllerFor('messageCenter').getClientId(localStorage.loginStatus, conversation_id);
        }
        else {
            this.controllerFor('messageCenter').getClientId(model);
        }
        $(window).scrollTop(550);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];

        return user_id;
    },
    events: {
        transitionToConversation: function(conversation_id) {
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var user = HubStar.User.find(user_id);

            var data = null;
            var isNewConversation = HubStar.get("newConversation");
            var isTalk = HubStar.get("talkConversation");
            this.controllerFor('conversation').set("isNewConversation", false);
            if (isNewConversation || isTalk)
            {
                data = this.controllerFor('conversation').get("conversationContent").objectAt(0);
                data.set("id", data.get("conversationID")); //it is use for the new conversation
            }
            else {
                for (var i = 0; i < this.controllerFor('conversation').get("conversationContent").length; i++) {
                    data = this.controllerFor('conversation').get("conversationContent").objectAt(i);

                    if (data.get("conversationID") === conversation_id) {

                        data.set("id", data.get("conversationID"));
                        break;
                    }
                }
            }
            HubStar.set("newConversation", false);
            HubStar.set("talkConversation", false);
            this.controllerFor("conversation").selectConversation(data.get("id"));
            this.transitionTo("conversation", data);
        }
    }
});




})();

(function() {


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessagesRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('messageCenter').selectMessage(model);
        if (this.controllerFor('notification').get("reply_ids") !== undefined && this.controllerFor('notification').get("reply_ids") !== null && this.controllerFor('notification').get("reply_ids") !== "")
        {
            model = this.controllerFor('notification').get("reply_ids");
        }
        if (this.controllerFor('notificationTop').get("reply_ids") !== undefined && this.controllerFor('notificationTop').get("reply_ids") !== null && this.controllerFor('notificationTop').get("reply_ids") !== "")
        {
            model = this.controllerFor('notificationTop').get("reply_ids");
        }
        $(window).scrollTop(600);
    },
    model: function(params) {
        var user_id = "";
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});




})();

(function() {

HubStar.NewConversationRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('messageCenter').set("isNewConversation", true);
        this.controllerFor('messageCenter').set("isConversationItem", false);
        this.controllerFor('messageCenter').set("isNotification", false);
        this.controllerFor('messageCenter').set("isMessageBoard", false);
        HubStar.set("newConversation", true);
        this.controllerFor('conversation').set("isNewConversation", true);
        this.controllerFor('conversation').selectConversation();
        this.controllerFor('conversation').set("isInvitePeople", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        $(window).scrollTop(550);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});




})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationsRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        var model = localStorage.loginStatus;
        this.controllerFor('messageCenter').selectNotification(model);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        $(window).scrollTop(550);

    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});




})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.PartnersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
                // this.controllerFor('ProfileController').set('is_authentic_user', true);
 if (this.controllerFor('checkingLoginStatus').popupLogin())
        {

        // this.controllerFor('profile').selectPartner(model);


        this.controllerFor('profile').set('profileSelectionStatus', 'Partners');
        this.controllerFor('profile').set('reviewTag', false);
        this.controllerFor('profile').set('partnerTag', true);
        this.controllerFor('profile').set('collectionTag', false);
        this.controllerFor('profile').set('followerProfileTag', false);
        
                $('#user-stats > li').removeClass('selected-user-stats');
        $('#partners').addClass('selected-user-stats');
        this.controllerFor('profilePartners').getClientId(model);
        this.controllerFor('profile').selectPartner(model);
                setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});


})();

(function() {

HubStar.PhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var temp;
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        this.controllerFor("masonryCollectionItems").set("type", "profile");
        //    this.controllerFor("masoryCollectionItems").set("type", "user");
        var megaModel = HubStar.Mega.find(temp);
        //   this.controllerFor('mega').set("selectPhoto", true);
        this.controllerFor('mega').getInitData(megaModel);

    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
        this.controllerFor("mega").set("clickOrRoute", true);
        return model;
    },
    activate: function() {
        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);
    },
    events: {
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        }
    },
    deactivate: function() {


        $("body").css("overflow", "auto");
        $('#footer').attr("style", "display:block");
    },
    renderTemplate: function() {
        var controller = this.controllerFor('mega');


        this.render("photo", {
            outlet: "photos",
            into: "application",
            controller: controller
        });
    }

});


})();

(function() {

HubStar.PhotosRoute = Ember.Route.extend({
        setupController: function(controller, model) {
        }
//        model: function() {
//
//            return PhotoModel.find();
//        }


    });


})();

(function() {

HubStar.ProfileArticlePhotoRoute = Ember.Route.extend({
     setupController: function(controller, model) {
        var temp;
     
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        this.controllerFor("masoryCollectionItems").set("type", "profile");
        var megaModel = HubStar.Mega.find(temp);
        this.controllerFor('mega').getInitData(megaModel);
        

    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
         this.controllerFor("article").set("searchFromRoute", true); //only use in userarticle route to get the temp id;
        this.controllerFor("mega").set("clickOrRoute", true);
        
        
        return model;
    },
    activate: function() {
        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);
    },
    events: {
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        }
    },
    deactivate: function() {


        $("body").css("overflow", "auto");
        $('#footer').attr("style", "display:block");
    },
    renderTemplate: function() {
        var controller = this.controllerFor('mega');


        this.render("photo", {
            outlet: "photos",
            into: "application",
            controller: controller
        });
    }

});

})();

(function() {

HubStar.ProfileArticleRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var temp;
     
        if (model.id === undefined) {                        //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        if (this.controllerFor("article").get("searchFromRoute") === true) //refresh in the profile article photo
        {

            var address = document.URL;
            var temp = address.split("#")[1].split("/")[6];
        }
        var d = HubStar.Mega.find(temp);
        this.controllerFor("article").getInitData(d);
    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "articles", "article_id": params.article_id});
        model.set("id", params.article_id); //when refresh the page of profile article photo and set the article id
        return model;
    },
    activate: function() {

        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);

    },
    events: {
        transitionToProfile: function(id) {

            this.transitionTo("profile", HubStar.Profile.find(id));
        }

    },
    deactivate: function() {


        setTimeout(function() {
            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        }, 100);
    },
    renderTemplate: function() {


        this.render("article", {
            outlet: "articles",
            into: "application"
        });
    }

});


})();

(function() {

HubStar.ProfileCollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var address = document.URL;
        if (model.id === undefined || model.id === "") {

            var id = address.split("#")[1].split("/")[4];
        }
        else {

            var id = model.id;
        }
        if (model.get('title') !== undefined) {
            var title = model.get('title');


        }
        this.controllerFor('mega').set("type", "profile");

        this.controllerFor('mega').set("selectType", "profile"); // selectType: profile means it is access from profile else it is from the searcgh 
        this.controllerFor('masonryCollectionItems').set("id", model.id);
        var owner_id = address.split("#")[1].split("/")[2];

        var profile = HubStar.Profile.find(owner_id);
        var profileId = "";
        for (var j = 0; j < profile.get('collections').get('length'); j++) {
            if (profile.get('collections').objectAt(j).get('id') === id)
            {
                profileId = profile.get('collections').objectAt(j).get('optional');
            }
        }

        this.controllerFor('masonryCollectionItems').selectModelForProfile(id, title, profileId);

        this.controllerFor('profile').set('switchPhoto', false);
        this.controllerFor('masonryCollectionItems').set('uploadStuff', true);
        this.controllerFor('masonryCollectionItems').set('canEditbyOwner', true);
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 3000);

    },
    model: function(params) {
        this.controllerFor('profile').set('switchPhoto', false);
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var profile = HubStar.Profile.find(owner_id);
        var id = "";
        for (var j = 0; j < profile.get('collections').get('length'); j++) {
            if (profile.get('collections').objectAt(j).get('id') === params.profileCollection_id)
            {
                id = profile.get('collections').objectAt(j).get('optional');
            }
        }
        var model =HubStar.Mega.find({RquireType: "collection", collection_id: params.profileCollection_id, owner_profile_id: id});
        model.set("id",params.profileCollection_id);
        return model;

    },
    events: {
        transitionToPhoto: function(id) {
            //      this.transitionTo("profile",HubStar.)
            this.controllerFor('mega').set("type", "profile");
            var obj = HubStar.Mega.find(id);
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];


            var collection_id = address.split("#")[1].split("/")[4];
            var profile = HubStar.Profile.find(owner_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }
          
            this.transitionTo("profileCollection", data);
            this.transitionTo("profilePhoto", obj);
        },
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {
        
            this.controllerFor("article").set("collectionArticleId", id);
            var obj = HubStar.Article.find(id);


            this.transitionTo("profileArticle", obj);

        },
        transitionToVideo: function(video_id) {
     
//            var address = document.URL;
//            var owner_id = address.split("#")[1].split("/")[2];
//
//
//            var collection_id = address.split("#")[1].split("/")[4];
//            var profile = HubStar.Profile.find(owner_id);
//            for (var i = 0; i < profile.get('collections').get("length"); i++) {
//                var data = profile.get('collections').objectAt(i);
//                if (data.id === collection_id) {
//                    break;
//                }
//            }
//            this.transitionTo("profileCollection", data);
            //           this.controllerFor('masonryCollectionItems').set('isUser', true);
            this.transitionTo("profileVideo", video_id);
        }
    },
    redirect: function() {

    },
    deactivate: function() {

    },
    activate: function() {

    },
    renderTemplate: function() {



    }

});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfileFollowersRoute = Ember.Route.extend({
    setupController: function(controller, model) {

 if (this.controllerFor('checkingLoginStatus').popupLogin())
        {

        

         this.controllerFor('profile').sendEventTracking('event', 'button', 'click', 'Followers');
         this.controllerFor('profile').set('profileSelectionStatus', 'Followers');
         this.controllerFor('profile').set('partnerTag', false);
         this.controllerFor('profile').set('collectionTag', false);
         this.controllerFor('profile').set('followerProfileTag', true);         
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#follow').addClass('selected-user-stats');
          this.controllerFor('userFollowers').getProfileId(model);
        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});



})();

(function() {

//HubStar.ProfileIndexRoute = Ember.Route.extend({
//        setupController: function(controller, model) {
//
//            this.controllerFor('profile').set('switchPhoto', true);
//        },
//        redirect: function() {
//
////            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
////
////                this.transitionTo('indexIndex');
////                this.controllerFor('application').set('popup', true);
////            } else {
////                this.transitionTo('profile');
////            }
//        }
//
//
//    });


})();

(function() {

HubStar.ProfileNewRoute = Ember.Route.extend({
        renderTemplate: function() {
            this.render('profileNew', {
                outlet: "profileNew",
                into: "application"
            });
        },
        setupController: function(controller, model) {

            setTimeout(function() {
                $('.nothingHere').attr('style', 'display:none');
            }, 10);


        },
        model: function() {
          
            return HubStar.Profile.find();
        },
        activate: function() {

        },
        deactivate: function() {
//            $("body").css("overflow", "auto");
//            $('#footer').attr("style", "display:block");
        }
    });


})();

(function() {

HubStar.ProfilePhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var temp;
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        this.controllerFor("masonryCollectionItems").set("type", "profile");
        //    this.controllerFor("masoryCollectionItems").set("type", "user");
        var megaModel = HubStar.Mega.find(temp);
        //   this.controllerFor('mega').set("selectPhoto", true);
        this.controllerFor('mega').set("selectType", "profile"); // it is from the search board if is not profile, if it profile it is from profile' data
      //  this.controllerFor('mega').set("loadingTime", true);
        var that = this;
        setTimeout(function() {
            that.controllerFor('mega').getInitData(megaModel);
        //    that.controllerFor('mega').set("loadingTime", false);

        }, 2000);

    },
    model: function(params) {

        var model = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": params.photo_id});// = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
        this.controllerFor("mega").set("clickOrRoute", true);

        return model;
    },
    activate: function() {
        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);
    },
    events: {
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        }
    },
    deactivate: function() {


        $("body").css("overflow", "auto");
        $('#footer').attr("style", "display:block");
    },
    renderTemplate: function() {
        var controller = this.controllerFor('mega');


        this.render("photo", {
            outlet: "photos",
            into: "application",
            controller: controller
        });
    }

});


})();

(function() {

HubStar.ProfileRoute = Ember.Route.extend({
    setupController: function(ProfileController, model) {

        HubStar.set('editingMode', 'profile');
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === ""))
        {
            HubStar.set("isLogin", false);
        } else {
            HubStar.set("isLogin", true);
        }
        if (ProfileController.get('goBackType') === true)
        {
            model = HubStar.Profile.find(model.id);
            ProfileController.set('goBackType', false);
        }
        ProfileController.setLocalLoginRecrod();
        /******************  partner cehcking*******************/
        ProfileController.set('contactChecking', false);
        ProfileController.set('collectionTag', true);
        ProfileController.set('partnerTag', false);
        ProfileController.set('reviewTag', false);
        /*************************            partner cehcking           ***********8*/
        this.controllerFor('mega').set("from", "profile");
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('profile').set('switchPhoto', true);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        if (model.get('profile_analytics_code') !== null && model.get('profile_analytics_code') !== '' && model.get('profile_analytics_code') !== undefined) {
            var analytics_array = model.get('profile_analytics_code').split(',');
            for (var i = 0; i < analytics_array.length; i ++) {
                this.sendGAMessage(analytics_array[i], model.get('id').split('-').join('')+i.toString());
            }
        }

        var lastPositionId = HubStar.get('lastPositionId');
        var lastPosition = HubStar.get("scrollPartenerPosition");


        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
         $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
        
        ProfileController.setProfile(model.id);

    },
    model: function(params) {

        return HubStar.Profile.find(params.profile_id);
    },
    events: {
        transitionToCollectionPhoto: function(collection_id) {
            HubStar.set("scrollCollectionPosition", $(window).scrollTop());
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var profile = HubStar.Profile.find(user_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }
            this.transitionTo("profileCollection", data);
        },
        transitionToArticle: function(article_id) {

            this.transitionTo("profileArticle", article_id);
            this.transitionTo("profileArticlePhoto");
        }
    },
    redirect: function() {


    },
    deactivate: function() {

    },
    activate: function() {
        $(window).scrollTop(0);

        $('#discovery_search_bar_wrapper').attr('style', "display:none");
        $('#masonry_container').attr('style', "display:none");
        $(function() {
            $('#masonry_container').masonry('remove', $('.noStyle1'));
        });




    },
    renderTemplate: function() {
        this.render('profile', {
            outlet: "profile",
            into: "application"
        });
    },
    sendGAMessage: function(profile_analytics_code, dom_url) {
        try {
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            ga('create', profile_analytics_code, {'name': dom_url});
            ga(dom_url + '.send', 'pageview');
            this.controller.set('isTracking', true);
        } catch (err) {
            this.controller.set('isTracking', false);

        }
    }

});


})();

(function() {

HubStar.ProfileVideoRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var tempid;
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#video').addClass('selected-user-stats');
        if (model.id === undefined) {          //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            tempid = urlArray[urlArray.length - 1];
        } else {
            tempid = model.id;
        }
        if (tempid.indexOf("test") !== -1) {
            tempid = tempid.replace("test", "");

        }
        this.controllerFor('video').getinitdata(tempid);
    },
    model: function(params) {

        return params;
    },
    activate: function() {
        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);

    },
    events: {
        transitionToProfile: function(id) {

            this.transitionTo("profile", HubStar.Profile.find(id));
        }

    },
    deactivate: function() {
        setTimeout(function() {
            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        }, 100);
    },
    renderTemplate: function() {
        this.render("video", {
            outlet: "videoes",
            into: "application"
        });
    }


});



})();

(function() {

HubStar.ProfileVideosRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('profile').selectVideo(model);
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});


})();

(function() {

HubStar.ProfilesRoute = Ember.Route.extend({

        setupController: function(controller, model) {
//            console.log('profiles~~~~~~~');
//            console.log(model);
            this.controller.set('model', null);

            controller.set('model', model);
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
            $('.nothingHere').attr('style', 'display:block');
        },
        activate: function() {

        },
        redirect: function() {
//
//            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {
//
//                this.transitionTo('indexIndex');
//                this.controllerFor('application').set('popup', true);
//            }
        },
        deactivate: function() {

        },
        model: function() {
//            console.log('model~~~~~~`');
            return HubStar.Profile.find();
        },
        renderTemplate: function() {
            this.render('profiles', {
                outlet: "profiles",
                into: "application"
            });
        }
    });


})();

(function() {

HubStar.QuickstartRoute = Ember.Route.extend({
        redirect: function() {




            if (localStorage.checkUser === "newUser") {
                  console.log("qudjkflsdfd");
              localStorage.checkUser = "";

            } else {

                this.transitionTo('searchIndex');

            }


        },
        setupController: function() {
            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();

            this.controllerFor('application').set('islogin', true);


            setTimeout(function() {
                $(window).scrollTop(0);
                $('#masonry_container').attr('style', "display:none");
                  $('#discovery_search_bar_wrapper').attr('style', "display:none");
            }, 100);

        },
        renderTemplate: function() {
            this.render('quickstart', {
                outlet: 'quickstart',
                into: 'application'
            });
        }
    });


})();

(function() {



HubStar.ReplyRoute = Ember.Route.extend({
    setupController: function(controller, model) {
            this.controllerFor('reviewReplyListSingle').set('model',model);
                   setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
    },
            model: function(params) {
        var address = document.URL;
          var profile = HubStar.Profile.find(profile_id);
        var profile_id = address.split("#")[1].split("/")[2];
       var review_id = address.split("#")[1].split("/")[4];
        return review_id;
    }
 

});

})();

(function() {



HubStar.ReviewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
         if (this.controllerFor('checkingLoginStatus').popupLogin())
        {
        this.controllerFor('profile').sendEventTracking('event', 'button', 'click', 'Reviews');
        this.controllerFor('profile').set('profileSelectionStatus', 'Reviews');

        this.controllerFor('profile').set('partnerTag', false);
        this.controllerFor('profile').set('collectionTag', false);
        this.controllerFor('profile').set('followerProfileTag', false);
        this.controllerFor('profile').set('reviewTag', true);
        this.controllerFor('reviewListSingle').set('model', model);
      //  this.controllerFor('reviewListSingle').set('review_content', model.review_content);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);

        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');
     //   $(window).scrollTop(1500);
        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var review_id = address.split("#")[1].split("/")[4];
        var profile = HubStar.Profile.find(profile_id);
        var model = this.getReview(profile, review_id);
        return model;
    },

    getReview: function(profile, review_id){
        var model = null;
        for (var i = 0; i < profile.get('reviews').get('length'); i ++) {
            if (profile.get('reviews').objectAt(i).get('review_id') === review_id){
                model = profile.get('reviews').objectAt(i);
            }
        }
        return model;
    }
});

})();

(function() {



HubStar.ReviewsRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (this.controllerFor('checkingLoginStatus').popupLogin())
        {
         this.controllerFor('profile').sendEventTracking('event', 'button', 'click', 'Reviews');
         this.controllerFor('profile').set('profileSelectionStatus', 'Reviews');
        
         this.controllerFor('profile').set('partnerTag', false);
         this.controllerFor('profile').set('collectionTag', false);
         this.controllerFor('profile').set('followerProfileTag', false);
          this.controllerFor('profile').set('reviewTag', true);
            this.controllerFor('reviewList').set('model',model);
                   setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#reviewList').addClass('selected-user-stats');

        }
    },
            model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }

});

})();

(function() {

HubStar.SearchIndexRoute = Ember.Route.extend({
    
    
            setupController: function(controller, model) {


   
 
        },
        redirect: function() {

        },
        activate: function() {

//            HubStar.set("isLogin", true);

        },
        deactivate: function() {

        },
        renderTemplate: function() {

        }

    });


})();

(function() {

HubStar.SearchRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
//        HubStar.set('isLogin', true);
        this.controllerFor('searchs').set("loginInfo", localStorage.loginStatus);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('application').set('search_string',model.id);
        this.controllerFor('application').newSearch();        
        this.controllerFor('index').setLogin();

        this.controllerFor('application').set('islogin', true);
        this.controllerFor('status').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', false);
        localStorage.checkUser = "";
 $(window).scrollTop(0);
    },
    model: function(params) {
        var address = document.URL;
        var search_id = address.split("#")[1].split("/")[2];
        if (search_id === null || search_id === undefined || search_id === '') {
            search_id = '';
        }
        return {id: search_id};
    },
    events: {
        transitionToPhoto: function(id) {

            this.controllerFor('masonryCollectionItems').set("type", "profile");
          //     this.controllerFor('mega').set("from", "profile");
            this.transitionTo("photo", HubStar.Mega.find(id));
        },
        transitionToProfile: function(id) {
            this.transitionTo("profileCollections", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {
            this.transitionTo("article", HubStar.Article.find(id));
        }
    },
    redirect: function() {

    },
    activate: function() {
        $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
        $('#masonry_container').attr('style', "display:block;position:relative");
        if (HubStar.get("setHight") === null || HubStar.get("setHight") === "null") {
            HubStar.set("setHight", 0);
        }

        $(function() {
            $('#masonry_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isInitLayout: false,
                isFitWidth: true
            });
        });
        $(window).scrollTop(HubStar.get("setHight"));
        HubStar.set("setHight", 0);

        localStorage.checkUser = "";
    },
    deactivate: function() {
        HubStar.set("setHight", $(window).scrollTop());

    },
    renderTemplate: function() {


    }
});


})();

(function() {

HubStar.SearchsRoute = Ember.Route.extend({
    setupController: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('isLogin', false);

        } else {
            HubStar.set('isLogin', true);
        }
        this.controllerFor('searchs').defaultSearch();
        this.controllerFor('index').setLogin();
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('status').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', false);

//        var testObject = {'one': 1, 'two': 2, 'three': 3};
//// Put the object into storage
//        localStorage.setItem('testObject', JSON.stringify(testObject));
//        var item = JSON.parse(localStorage.testObject);
//        for (var key in item) {
//            console.log(item[key]);
//        }
  $(window).scrollTop(0);
        localStorage.checkUser = "";
$(".navbar").css("box-shadow", "");
$(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
      $(window).scrollTop(0);
    },
    events: {
        transitionToPhoto: function(id) {
            this.controllerFor('mega').set("selectPhoto", false);
            this.controllerFor('masonryCollectionItems').set("type", "profile");
            this.transitionTo("photo", HubStar.Mega.find(id));
        },
        transitionToProfile: function(id) {
            this.transitionTo("profileCollections", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {
            this.controllerFor('article').set("accessFromSearchBoard", true);
            this.transitionTo("article", HubStar.Article.find(id));
        }
    },
    redirect: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
//            this.transitionTo('indexIndex');

        } else {
           // this.transitionTo('searchIndex');
        }

    },
    activate: function() {
        $('#discovery_search_bar_wrapper').attr('style', "display:block;margin: 0 0 100px 0;");
        $('#masonry_container').attr('style', "display:block;position:relative");
        if (HubStar.get("setHight") === null || HubStar.get("setHight") === "null") {
            HubStar.set("setHight", 0);
        }

        $(function() {
            $('#masonry_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isInitLayout: false,
                isFitWidth: true
            });
        });
        
        $(window).scrollTop(HubStar.get("setHight"));
        HubStar.set("setHight", 0);

        localStorage.checkUser = "";
    },
    deactivate: function() {
        HubStar.set("setHight", $(window).scrollTop());

    },
    renderTemplate: function() {


    }
});


})();

(function() {

HubStar.TestRoute = Ember.Route.extend({

        renderTemplate: function() {
            this.render('image', {
                into: 'application'
            });
        }
    });


})();

(function() {

HubStar.UserArticleRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var temp;
        if (model.id === undefined) {                        //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        if (this.controllerFor("article").get("searchFromRoute") === true) 
        {

            var address = document.URL;
            var temp = address.split("#")[1].split("/")[6];
        }

        var d = HubStar.Mega.find(temp);
        this.controllerFor("article").getInitData(d);
    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "articles", "article_id": params.article_id});
        model.set("id", params.article_id);
        return model;
    },
    activate: function() {

        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);

    },
    events: {
        transitionToProfile: function(id) {

            this.transitionTo("profile", HubStar.Profile.find(id));
        }

    },
    deactivate: function() {


        setTimeout(function() {
            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        }, 100);
    },
    renderTemplate: function() {


        this.render("article", {
            outlet: "articles",
            into: "application"
        });
    }

});


})();

(function() {

HubStar.UserIndexRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            this.controllerFor('user').set('switchPhoto', true);
        },
        redirect: function() {

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);
            } else {
                this.transitionTo('user');
            }
        }

    });


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserMessageRoute = Ember.Route.extend({
    setupController: function(controller, model) {
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;

    }
});


})();

(function() {

HubStar.UserPhotoRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var temp;
        var url = window.location.href;
        var urlArray = url.split("/");
        if (model.id === undefined) {                               //reload page model id can not be find
            temp = urlArray[urlArray.length - 1];
        } else {
            temp = model.id;
        }
        this.controllerFor("masoryCollectionItems").set("type", "user");

        var megaModel = HubStar.Mega.find(temp);
        var that = this;
        setTimeout(function() {
            that.controllerFor('mega').getInitData(megaModel);
        }, 1000);
    },
    model: function(params) {
        var model = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": params.photo_id});// = HubStar.Mega.find({"RequireType": "photos", "photo_id": params.photo_id});
        this.controllerFor("mega").set("clickOrRoute", true);
     

        return model;
    },
    activate: function() {
        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);
    },
    events: {
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        }
    },
    deactivate: function() {


        $("body").css("overflow", "auto");
        $('#footer').attr("style", "display:block");
    },
    renderTemplate: function() {
        var controller = this.controllerFor('mega');


        this.render("photo", {
            outlet: "photos",
            into: "application",
            controller: controller
        });
    }

});

})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserPostRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        
        this.controllerFor('user').set('profileSelectionStatus', 'Posts');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', false);
         this.controllerFor('user').set('postTag', true);  
         
         if (this.controllerFor('notificationTop').get("goReply") === true)
        {
            model = localStorage.loginStatus;
            var replyID = this.controllerFor('notificationTop').get("reply_ids");
            model = replyID;
            this.controllerFor('notificationTop').set("goReply", false);
        }
         if (this.controllerFor('notificationTop').get("goMessage") !== undefined && this.controllerFor('notificationTop').get("goMessage") !== null && this.controllerFor('notificationTop').get("goMessage") !== "")
        {
            model = localStorage.loginStatus;
        }
        if (this.controllerFor('notification').get("reply_ids") !== undefined && this.controllerFor('notification').get("reply_ids") !== null && this.controllerFor('notification').get("reply_ids") !== "")
        {

            model = this.controllerFor('notification').get("reply_ids");
            //this.controllerFor('notification').set("reply_ids", "");
        }
        if (this.controllerFor('notificationTop').get("reply_ids") !== undefined && this.controllerFor('notificationTop').get("reply_ids") !== null && this.controllerFor('notificationTop').get("reply_ids") !== "")
        {
            model = this.controllerFor('notificationTop').get("reply_ids");
            //this.controllerFor('notification').set("reply_ids", "");

        }
        this.controllerFor('userMessage').setUserMessage(model);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#post').addClass('selected-user-stats');
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


})();

(function() {

HubStar.UserRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        HubStar.set('editingMode', 'user');
        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === ""))
        {
            HubStar.set("isLogin", false);
        } else {
            HubStar.set("isLogin", true);
        }
   
        this.controllerFor('application').set('islogin', true);
        this.controllerFor('application').set('popup', false);
        this.controllerFor('application').set('isotherpage', true);
        this.controllerFor('searchs').setLoginImge();
        this.controllerFor('application').set('isotherpage', true);
        this.controller.set('switchPhoto', true);
        this.controller.set('collectionTag', true);
        //  this.controller.set('partnerTag', false);
        $('#default').toggle('selected-user-stats');
        this.controller.set('followerTag', false);
        this.controller.set('followingTag', false);
        this.controller.set('messageTag', false);
        this.controller.set('messageTag', false);
         this.controller.set('postTag', false);
        
        this.controllerFor('user').set("model", model);
        this.controllerFor('user').setUser();
        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
        $(window).scrollTop(0);
    },
    model: function(params) {
        return HubStar.User.find(params.user_id);
    },
    events: {
        transitionToCollectionPhoto: function(collection_id) {
            
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var user = HubStar.User.find(user_id);

            for (var i = 0; i < user.get('collections').get("length"); i++) {
                var data = user.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }
            this.transitionTo("collection", data);
        },
        transitionToArticle: function(article_id) {

            this.transitionTo("article", article_id);
            this.transitionTo("articlePhoto");
        }
//        transitionToVideo: function(video_id) {
//            this.transitionTo("userVideo", video_id);
//        }
    },
    redirect: function() {

        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

//            this.transitionTo('indexIndex');
            this.controllerFor('application').set('popup', true);
        }
    },
    deactivate: function() {

    },
    activate: function() {

        $(window).scrollTop(0);
        $('#discovery_search_bar_wrapper').attr('style', "display:none");
        $('#masonry_container').attr('style', "display:none");
        $(function() {
            $('#masonry_container').masonry('remove', $('.noStyle1'));
        });

    },
    renderTemplate: function() {

        this.render('user', {
            outlet: "user",
            into: "application"
        });

    }

});


})();

(function() {

HubStar.UserVideoRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var tempid;
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#video').addClass('selected-user-stats');
        if (model.id === undefined) {          //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            tempid = urlArray[urlArray.length - 1];
        } else {
            tempid = model.id;
        }
          this.controllerFor('video').getinitdata(tempid);
    },
    model: function(params) {
        return params;
    },
    activate: function() {

        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);

    },
    events: {
        transitionToProfile: function(id) {

            this.transitionTo("profile", HubStar.Profile.find(id));
        }

    },
    deactivate: function() {

        setTimeout(function() {
            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        }, 100);
    },
    renderTemplate: function() {
        this.render("video", {
            outlet: "videoes",
            into: "application"
        });
    }


});



})();

(function() {

HubStar.UsersRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            //  controller.set("indexPage",true);
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);

        },

        activate: function() {

        }


    });


})();

(function() {

HubStar.VerifyIdRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        var account = user_id.split("?")[0];
        var password = user_id.split("?")[1];
        this.controllerFor('application').verify(account,password);

    },
    model: function() {
        return 0;
    }
});


})();

(function() {

HubStar.VideoRoute = Ember.Route.extend({
    //     controller: HubStarlicationController,
    setupController: function(controller, model) {
        var tempid;
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#video').addClass('selected-user-stats');
        if (model.id === undefined) {          //reload the page model id can not be find...
            var url = window.location.href;
            urlArray = url.split("/");
            tempid = urlArray[urlArray.length - 1];
        } else {
            tempid = model.id;
        }
        if (tempid.indexOf("test") !== -1) {
            tempid = tempid.replace("test", "");

        }
        controller.getinitdata(tempid);
    },
    model: function(params) {

        return params;
    },
    activate: function() {
        setTimeout(function() {
            $("body").css("overflow", "hidden");
            $('#footer').attr("style", "display:none");
        }, 100);

    },
    events: {
        transitionToProfile: function(id) {

            this.transitionTo("profile", HubStar.Profile.find(id));
        }

    },
    deactivate: function() {
        setTimeout(function() {
            $("body").css("overflow", "auto");
            $('#footer').attr("style", "display:block");
        }, 100);
    },
    renderTemplate: function() {
        this.render("video", {
            outlet: "videoes",
            into: "application"
        });
    }


});



})();

(function() {

//HubStar.Store = DS.Store.extend({
//  // if you're looking at this, you probably know what you're doing...
//      revision: 13,
//    adapter: DS.RESTAdapter.create({
//        bulkCommit: false,
//        url: getRestAPIURL()
//
//    })
//});


HubStar.store = DS.Store.create({
    revision: 13,
    adapter: DS.RESTAdapter.create({
        bulkCommit: false,
        url: getRestAPIURL()

    })
});

})();

(function() {


HubStar.AddCollectionController = Ember.ObjectController.extend({
    collections: [],
    profileCollection: [],
    selectedDesc: "",
    selectedTitle: "Choose your Collection",
    selectedCollection: "",
    selectionPop: false,
    needs: ["mega", "article", "collection", "applicationFeedback", "comment", "video"],
    newCollectionName: null,
    objectID: "",
    selectedPhotoThumbnailUrl: "",
    parentController: "",
    commentObject: '',
    isComment: false,
    selectionProfile: false,
    profiles: [],
    isProfile: false,
    selectedProfile: "",
    userName: '',
    chosenProfile: '',
    init: function()
    {
    },
    setUser: function()
    {
        var user = HubStar.User.find(localStorage.loginStatus);
        this.set("collections", user.get("collections"));
        if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
            this.setDesc("");
            this.set("isProfile", false);
            this.setTitle("Choose your Collection");
            this.setProfile("your profile");
        }
    },
    setImageID: function(id) {
        this.set("objectID", id);
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },
    setTitle: function(title) {
        this.set("selectedTitle", title);
    },
    setProfile: function(title) {
        this.set("selectedProfile", title);
    },
    setThumbnailUrl: function(photo_image_thumbnail_url) {
        this.set("selectedPhotoThumbnailUrl", photo_image_thumbnail_url);
    },
    submit: function()
    {
        if (this.get("selectionPop") !== true) {
            if (this.get("isProfile") === false) {
                var collectionController = this.get('controllers.collection');
                var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
                var content = collection.get("collection_ids");
                this.addCollection(collection, content);
                this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
                this.addComment();
                collection.set('optional', localStorage.loginStatus);
                collection.set('type', 'user');
                collection.store.save();
                this.sendFeedBack();
                this.exit();
            }
            else
            {
                var content = this.get('selectedCollection').collection_ids;
                if (content === null || content === undefined || content === "") {
                    this.get('selectedCollection').collection_ids = this.get("objectID");
                }

                else if (content.indexOf(this.get("objectID")) !== -1)
                {
                }
                else {
                    var ids = content;
                    ids = ids + "," + this.get("objectID");
                    this.get('selectedCollection').collection_ids = ids;
                }
                var data = JSON.stringify(this.get('selectedCollection'));
                var that = this;
                requiredBackEnd('collections', 'saveCollection', data, 'POST', function(params) {
                    that.sendFeedBack();
                    that.exit();
                });
                this.set("chosenProfile", "");
                this.set("commentObject", HubStar.Mega.find(this.get("objectID")));
                this.addComment();
                
            }
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please choose a collection.", "warnning");
        }

    },
    sendFeedBack: function() {
        var message = "Saved to your " + this.get('selectedTitle') + " collection.";
        if (this.get('parentController') === 'video') {
            //message = "Saved video successfully.";
        } else if (this.get('parentController') === 'photo') {
            //message = "Saved photo successfully.";
        }
        this.get('controllers.applicationFeedback').statusObserver(null, message);
    },
    addComment: function() {

        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var commentContent = this.get('selectedDesc');
        if (commentContent) {
            var comments = this.get("commentObject").get('comments');
            var commenter_profile_pic_url = currentUser.get('photo_url_large');
            var commenter_id = currentUser.get('id');
            var name = currentUser.get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                "is_delete": false, optional: this.get("commentObject").get('type') + '/' + this.get("commentObject").get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            commentContent = '';
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
    },
    setSelectedCollection: function(id) {
        if (this.get("isProfile") === false) {
            var selectedCollection = null;
            for (var i = 0; i < this.get("collections").get("length"); i++) {
                var thisCollection = this.get("collections").objectAt(i);
                if (id === thisCollection.get("id")) {
                    selectedCollection = thisCollection;
                }
            }
            this.set('selectedCollection', selectedCollection);
        }
        else
        {
            var selectedCollection = null;
            for (var i = 0; i < this.get("profileCollection").get("length"); i++) {
                var thisCollection = this.get("profileCollection").objectAt(i);
                if (id === thisCollection.id) {
                    selectedCollection = thisCollection;
                }
            }
            this.set('selectedCollection', selectedCollection);
        }
    },
    chooseProfile: function(title, id) {
        this.set('selectedProfile', title);
        for (var i = 0; i < this.get("profiles").get("length"); i++)
        {
            if (this.get("profiles").objectAt(i).profile_id === id)
            {
                if (id === localStorage.loginStatus && this.get("profiles").objectAt(i).type === "user")
                {
                    this.set("isProfile", false);
                }
                else
                {
                    this.set("profileCollection", this.get("profiles").objectAt(i).collection);
                    this.set("chosenProfile", id);
                    this.set("isProfile", true);
                }
                //this.set("collections",this.get("profiles").objectAt(i));
            }
        }
        this.set('selectionProfile', !this.get('selectionProfile'));
    },
    addCollection: function(collection, content)
    {
        if (content === null || content === undefined || content === "") {
            collection.set("collection_ids", this.get("objectID"));
        }

        else if (content.indexOf(this.get("objectID")) !== -1)
        {
        }
        else {
            var ids = collection.get("collection_ids");
            ids = ids + ", " + this.get("objectID");
            collection.set("collection_ids", ids);
        }
    },
    exit: function() {
        if (this.get('parentController') === 'article')
        {
            this.get("controllers.article").switchCollection();
        }

        else if (this.get('parentController') === 'itemFunction')
        {
            var id = this.get("objectID");
            //console.log(id);
            $('#addCollection_' + id).attr('style', 'display: none');
        }

        else if (this.get('parentController') === 'video')
        {
            this.get("controllers.video").switchCollection();
        }
        else {
            this.get("controllers.mega").switchCollection();
        }
    },
    addNewCollection: function()
    {
        var collectionController = this.get('controllers.collection');
        if (this.get("isProfile") === false) {
            var collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', this.get("collections"));
            if (collection !== null && collection !== "") {
                collection.set('type', 'user');
                collection.set('optional', localStorage.loginStatus);
                this.get("collections").insertAt(0, collection);
                HubStar.store.save();
                this.set('selectedCollection', collection);
                this.chooseRecord(collection.get("title"), collection.get("id"));
                //$('#recordID').text(this.get('newCollectionName'));
            } else {
                selectedCollection.deleteRecord();
            }
        }
        else
        {
            var collection = collectionController.getCreateCollection(this.get('newCollectionName'), '', this.get("profileCollection"));

            if (collection !== null && collection !== "") {
                collection.set('type', 'profile');
                collection.set('optional', this.get("chosenProfile"));

                var newCollection = new Object();
                newCollection.collection_ids = collection.get("collection_ids");;
                newCollection.cover = collection.get("cover");
                newCollection.desc = collection.get("desc");
                newCollection.id = collection.get("id");
                newCollection.optional = collection.get("optional");
                newCollection.title = collection.get("title");
                newCollection.type = collection.get("type");
                newCollection.created_at = collection.get("created_at");
                newCollection.parent_type = collection.get("parent_type");
                
                HubStar.store.save();
                this.get("profileCollection").insertAt(0, newCollection);
                this.set('selectedCollection', collection);
                this.chooseRecord(collection.get("title"), collection.get("id"));
                //$('#recordID').text(this.get('newCollectionName'));
            }

        }

        this.set('newCollectionName', null);
        //this.set('selectionPop', !this.get('selectionPop'));
    },
    collectionSwitch: function() {
        this.set('selectionPop', !this.get('selectionPop'));
        this.set('selectionProfile', false);
    },
    profileSwitch: function() {
        var data = [localStorage.loginStatus];
        var dataNew = new Array();
        var that = this;
        this.set('selectionPop', false);
        requiredBackEnd('users', 'ReadCollection', data, 'POST', function(params) {
            dataNew["profile_id"] = localStorage.loginStatus;
            dataNew["profile_name"] = "your profile";
            dataNew["type"] = "user";
            params.insertAt(0, dataNew);
            that.set("profiles", params);
            that.set('selectionProfile', !that.get('selectionProfile'));
        });
    },
    chooseRecord: function(title, id) {
        this.set('selectedTitle', title);
        this.setSelectedCollection(id);
        this.selectSelectedDesc();
        //$('#recordID').text(this.get('selectedTitle'));
        HubStar.set('chooseCollection', this.get('selectedTitle'));
        this.set('selectionPop', false);
    },
    selectSelectedDesc: function()
    {
        var desc = "";
        for (var i = 0; i < this.get("collections").get("length"); i++)
        {
            var collection = this.get("collections").objectAt(i);
            if (collection.get("title") === this.get("selectedTitle"))
            {
//desc = collection.get("desc");
            }
        }
        this.set("selectedDesc", desc);
    },
    checkingValidInput: function(title) {

        if (title.indexOf(" ") !== -1) {
            title = title.split(' ').join('-');
        }
        return title;
    },
    checkInput: function(title) {
        var isInputValid = false;
        if (title !== null && title !== "")
        {
            isInputValid = this.isTitleNotExist(title);

        }
        else {
            isInputValid = false;
        }
        return isInputValid;
    },
    isTitleNotExist: function(title) {
        var isContainsTitle = true;


        for (var i = 0; i < this.get("collections").get("length"); i++)
        {


            var collection = this.get("collections").objectAt(i);
            if (collection.get("title") === title)
            {
                isContainsTitle = false;
            }
        }
        return isContainsTitle;
    }, setRelatedController: function(parentController)
    {
        this.set('parentController', parentController);
    }
});


})();

(function() {


HubStar.AddVideoController = Ember.ObjectController.extend({
    needs: ["profileVideos", "applicationFeedback", 'profile', 'megaCreate'],
    videoUrl: null,
    videoImg: null,
    videoTitle: null,
    videoDesc: null,
    videoid: null,
    profileMega: null,
    init: function() {
        this.setMega();
    },
    canel: function() {
        this.reset();
        var profileVideoController = this.get('controllers.profileVideos');
        profileVideoController.videoCreateModeSwitch();
    },
    getVideoFromYoutube: function()
    {

        this.set('videoid', this.getVideoId());
        var that = this;

        if (this.get('videoid') !== null) {
            $.ajax({
                url: "http://gdata.youtube.com/feeds/api/videos/" + this.get('videoid') + "?v=2&alt=jsonc",
                type: 'get',
                success: function(feedback) {
                    that.set('videoImg', feedback.data.thumbnail.hqDefault);
                    that.set('videoTitle', feedback.data.title);
                    that.set('videoDesc', feedback.data.description);
                }, error: function() {
                    that.set('videoid', null);
//                    console.log("some wrong with youtube id");
                }
            });
        }
    },
    reset: function() {
        this.set('videoImg', null);
        this.set('videoUrl', null);
        this.set('videoTitle', null);
        this.set('videoDesc', null);
        this.set('videoid', null);

    },
    videoCreate: function() {
        var testID = createGuid();
        var MegaCreateController = this.get('controllers.megaCreate');
        var tempMega = this.get("profileMega");
        tempMega.set("object_title", this.get('videoTitle'));
        tempMega.set("object_description", this.get('videoDesc'));
        tempMega.set("object_image_url", this.get('videoImg'));
        var video = HubStar.Video.createRecord({
            videoImg: this.get('videoImg'),
            videoTitle: this.get('videoTitle'),
            videoDesc: this.get('videoDesc'),
            videoIframeCode: this.getIframeCode(480, 360, this.getVideoId())
        });
        var mega = MegaCreateController.createNewMega(this.get("profileMega"), testID, null, 'video');
        mega.get('videoes').pushObject(video);

        var profileVideosController = this.get('controllers.profileVideos');
        profileVideosController.get("videoesContent").insertAt(0, mega);
        mega.store.save();


        profileVideosController.relayout();
        this.canel();
    },
    getVideoId: function() {
        var videoid = null;
        var videoUrl = this.get("videoUrl");
        var videoUrlObjects = videoUrl.split("&");
        videoUrl = videoUrlObjects[0];
        if (videoUrl.indexOf("http://www.youtube.com/") !== -1)
        {
            var tmpId = videoUrl.split("v=");
            videoid = tmpId[1];
        }
        else if (videoUrl.indexOf("http://youtu.be/") !== -1)
        {
            var tmpId = videoUrl.split("be/");
            videoid = tmpId[1];
        }

        return videoid;
    },
    getIframeCode: function(width, height, videoid)
    {
        var iframeCode = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoid + '" frameborder="0" allowfullscreen></iframe>';
        return iframeCode;
    },
    setMega: function() {
        var profileController = this.get('controllers.profile');
        var tempmega = profileController.get("model");
        var that = this;
        that.set("profileMega", tempmega);
        if (that.get("profileMega") === null) {
            tempmega.addObserver('isLoaded', function() {
                if (tempmega.get('isLoaded')) {
                    that.set("profileMega", tempmega);
                }
            });
        }
    }
});


})();

(function() {

/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.ApplicationController = Ember.ArrayController.extend({
    selected_topics: "",
    isAdd: false,
    contentTopic: [
        {id: "1", image: '../images/welcomepage/bedroom.jpg', topic: 'Bedrooms'},
        {id: "2", image: '../images/welcomepage/home-theatre.jpg', topic: 'Home Theatre'},
        {id: "3", image: '../images/welcomepage/interior-living.jpg', topic: 'Interior Living'},
        {id: "4", image: '../images/welcomepage/kitchens.jpg', topic: 'Kitchens'},
        {id: "5", image: '../images/welcomepage/new-homes.jpg', topic: 'New Homes'},
        {id: "6", image: '../images/welcomepage/outdoor-living.jpg', topic: 'Outdoor Living'},
        {id: "7", image: '../images/welcomepage/renovation.jpg', topic: 'Renovation'},
        {id: "8", image: '../images/welcomepage/apartment-design.jpg', topic: 'Apartment Design'},
        {id: "9", image: '../images/welcomepage/civic-design.jpg', topic: 'Civic Design'},
        {id: "10", image: '../images/welcomepage/educational-design.jpg', topic: 'Educational Design'},
        {id: "11", image: '../images/welcomepage/hospitality-design.jpg', topic: 'Hospitality Design'},
        {id: "12", image: '../images/welcomepage/office-design.jpg', topic: 'Office Design'},
        {id: "13", image: '../images/welcomepage/refurbishment.jpg', topic: 'Refurbishment'},
        {id: "14", image: '../images/welcomepage/retail-design.jpg', topic: 'Retail Design'}

    ],
    needs: ['status', 'applicationFeedback', 'user', 'megaCreate', 'notificationTop', 'article', 'mega', 'checkingLoginStatus', 'addCollection'],
    content: [],
    loginInfo: "",
    search_area: "",
    search_string: "inspirational",
    firstTimeUser: false,
    oldChildren: 0,
    test: false,
    user: null,
    from: null,
    size: null,
    photo_url: null,
    userName: "",
    password: "",
    repeat: "",
    email: "",
    loginUsername: "",
    loginPassword: "",
    resetPasswordEmail: "",
    gender: "",
    iframeURL: "",
    iframeLoginURL: "",
    loginTime: false,
    isGeoDropdown: false,
    isNavigatorDropdown: false,
    isHeaderNavigatorDropdown: false,
    adPageNo: 0,
    searchFromTopic: false, //call the applicationView is true. new search or search
    // topicSearch: false,
    googletagCmd: null,
    unReadCount: 0,
    categorys: [],
    temp: [],
    subcate: [],
    subcategories: [],
    pageCount: 0,
    applicationCategoryDropdownType: 'geoLocation',
    init: function() {
        var that = this;

        requiredBackEnd('tenantConfiguration', 'doesAdDisplay', null, 'post', function(callbck) {
            var array = $.map(callbck, function(value, index) {
                return [value];
            });
            for (var i = 0; i < array.length; i++) {
                array[i]["isNew"] = true;
            }
            HubStar.set('ads', array);
            that.set("pageCount", 0);
            that.defaultSearch();
        });

        this.set('search_string', '');
        this.set('loginUsername', localStorage.userName);
    },
    dropdownPhotoSetting: function() {
        this.set("isNotification", !this.get("isNotification"));
        this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
    },
    popupModal: function() {
        HubStar.set('checkLoginStatus', true);
    },
    email_login: function() {
        this.set('mail', !this.get('mail'));
    },
    loginStatus: function() {
    },
    grapData: function() {
        var u = HubStar.User.find(localStorage.loginStatus);
        this.set("user", u);
        this.get("controllers.notificationTop").getClientId(localStorage.loginStatus);
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set("myMessageBoard", "#/users/" + localStorage.loginStatus + "/messagecenter");

    },
    articleFromSearch: function()
    {
        this.get("controllers.article").set("accessFromSearchBoard", true);
    },
    reloadPage: function() {
        this.set("test", !this.get("test"));
    },
    scrollDownAction: function() {
        this.set('loadingTime', true);
        this.set("size", 20);

        if (this.get("searchFromTopic") === false)
        {
            this.set("pageCount", this.get("pageCount") + 1);
        }
        else
        {
            this.set("searchFromTopic", false);
        }
        this.getPageNo();
        this.set("from", this.get("from") + this.get("size"));
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": HubStar.get('geoLocation')});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.setContent(results);
                that.set('loadingTime', false);
                if (results.get("length") === 0) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "You have reached the end of your search results.", "info"); //added user flash message
                }
            }
        });

    },
    setContent: function(results)
    {
        for (var i = 0; i < results.get("length"); i++) {
            var tempmega = results.objectAt(i);
            if (tempmega.get("profile").objectAt(0) !== undefined) {
                var isFollow = false;
                for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
                {
                    if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                    {
                        isFollow = true;
                        break;
                    }
                }
                tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
            }
            this.pushObject(tempmega);
        }
        var that = this;
        setTimeout(function() {
            that.getAds();
            that.relayout();
        }, 200);
    },
    newSearch: function() {
        this.set("googletagCmd", []);
        this.set("content", []);

        this.set("oldChildren", 0);
        this.set("from", 0);
        this.set("size", 20);
        this.set('loadingTime', true);
        this.set("pageCount", 0);
        var d = new Date();
        var start = d.getTime();
        var that = this;
        var statusController = this.get('controllers.status');
        var stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size"), "location": HubStar.get('geoLocation')});
        stats.addObserver('isLoaded', function() {
            if (stats.get('isLoaded')) {
                var stat = stats.objectAt(0);
                var megasResults = stat.get("megas");
                HubStar.set('itemNumber', megasResults.get("length"));
                that.setContent(megasResults);
                ;
                that.set('loadingTime', false);
                that.set("from", that.get("size"));

                var d = new Date();
                var end = d.getTime();
                var time = that.getResponseTime(start, end);
                statusController.set("searchResultNum", stat.get('numberofresults'));
                statusController.set("time", time);
                statusController.changeDescription();
            }
            that.relayout();
        });
        HubStar.set('searchStart', true);

    },
    defaultSearch: function() {
        this.set("adPageNo", 0);
        this.set("pageCount", 0);
        this.set("loginInfo", localStorage.loginStatus);
        this.set("googletagCmd", []);
        this.set("content", []);
        this.set("adPageNo", 0);
        var results = HubStar.Mega.find({"RquireType": "defaultSearch"});
        var that = this;

        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.setContent(results);
                //that.relayout();
            }
        });
    },
    getResponseTime: function(start, end) {
        var totalTime = end - start;
        totalTime += "ms";
        return totalTime;
    },
    flipFrontClick: function() {
        $(".hover").addClass('flip');
    },
    flipFrontBack: function() {
        $(".hover").removeClass('flip');
    },
    changeImage: function(imageSrc)
    {
        this.set('photo_url', imageSrc);
    },
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    verify: function(verifyAccount, verifyPassword)
    {
        var emailVerify = [verifyAccount, verifyPassword];
        var that = this;
        requiredBackEnd('login', 'verify', emailVerify, 'POST', function(params) {
            localStorage.loginStatus = params;
            HubStar.set("isLogin", true);
            that.transitionToRoute("searchIndex");
        });


    },
    signUp: function() {

        if (this.checkSignupInfo()) {
            var signupInfo = [this.get('email')];
            requiredBackEnd('login', 'getemail', signupInfo, 'POST', function(params) {
                if (params === 1) {
                    $('#register-with-email-step-2').addClass('active-step');
                    $('#click-register').addClass('active-tab');
                    $('#register-with-email-step-2').animate({height: 'toggle'});
                    $('#register-with-email-drop-down').animate({height: 'toggle'});
                    checkSocial();
                }
                else if (params === 0) {
                    document.getElementById("email").setAttribute("class", "login-textfield error-textfield");
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#email-used-by-social').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                } // EMAIL ALREADY IN USE; The use has attempted to register with an email address that has already been used via 'register with social account'
                else if (params === 2) {
                    document.getElementById("email").setAttribute("class", "login-textfield error-textfield");
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#email-in-use').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                }// EMAIL ALREADY IN USE; The user as attempted to register with an email address that is already in use
            });
        }
    },
    selectTopic: function(id, topic) {  
        if (HubStar.get(id)) {
            $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none;");
            if (this.get('selected_topics').indexOf(topic) !== -1) {
                this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));
            }
            HubStar.set(id, false);
        } else {        
           $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; display:block;");
            if(this.get('selected_topics').length===0){
                this.set('selected_topics', topic);
            }else{              
                this.set('selected_topics', this.get('selected_topics') + "," + topic);    
            }  
             HubStar.set(id, true);                   
        }
    },
    submitSelection: function() {

        $('#register-with-email-step-4').css('display', 'block');
        $('#register-with-email-step-3').css('display', 'none');
        $('#user-login-pane').css('display', 'none');
    },
    next: function() {

        $('#register-with-email-step-3').css('display', 'block');


    },
    done: function() {
        this.set('loginTime', true);
        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age'), this.get('selected_topics')];
        var that = this;
       //  $('#finishRegister').css('display', 'none');
     //     $('#skipRegister').css('display', 'block');
        requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
            localStorage.loginStatus = params.COUCHBASE_ID;
            var emailInfo = [params.USER_NAME, params.PWD_HASH];
            requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function(params) {

            });
            setTimeout(function() {
                that.set('first_name', "");
                that.set('last_name', "");
                that.set('email', "");
                that.set('password', "");
                that.set('region', "");
                that.set('gender', "");
                that.set('age', "");
                that.set('loginTime', false);
            }, 2000);
        });

    },
    
//    skip: function(){
//       // HubStar.set("isLogin", true);
//       this.transitionToRoute("searchIndex");
//    },
    checkSignupInfo: function() {
        function checkObject(id, input, lengthMin, lengthMax, isEmailValid)
        {
            this.id = id;
            this.input = input;
            this.lengthMin = lengthMin;
            this.lengthMax = lengthMax;
            this.isEmailValid = isEmailValid;
        }
        var checkList = new Array();
        var result;
        var first_name = new checkObject("first_name", this.get('first_name'), 0, 128, null);
        checkList.push(first_name);
        var last_name = new checkObject("last_name", this.get('last_name'), 0, 128, null);
        checkList.push(last_name);
        var email = new checkObject("email", this.get('email'), 0, 45, true);
        checkList.push(email);
        var password = new checkObject("password", this.get('password'), 6, 40, null);
        checkList.push(password);
        for (var i = 0; i < checkList.length; i++)
        {
            var patternEmail = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
            document.getElementById(checkList[i].id).setAttribute("class", "login-textfield");
            if (checkList[i].input !== null && checkList[i].input !== "" && checkList[i].input !== undefined)
            {
                if (checkList[i].input.length > checkList[i].lengthMax || checkList[i].input.length < checkList[i].lengthMin)
                {
                    result = false;
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-password').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }
            }// INVALID PASSWORD; the user has entered a  password that does not meet the requirements (6-40 characters long)
            if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name' || checkList[i].id === 'email' || checkList[i].id === 'password')
            {
                if (checkList[i].input === null || checkList[i].input === "" || checkList[i].input === undefined) {
                    result = false;
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#missing-fields').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }
            }//MISSING FIELDS; the user has not filled in all the mandatory fields
            if (checkList[i].input !== null && checkList[i].isEmailValid === true)
            {
                if (patternEmail.test(checkList[i].input || checkList[i].input === "")) {
                    result = true;
                }
                else {
                    result = false;
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name-register').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }// INVALID user name when the user attempts to login.
            }
        }
        return result;
    },
    setmale: function() {
        this.set('gender', "male");
    },
    setfemale: function() {
        this.set('gender', "female");
    },
    dropdown: function(checking) {
        if (checking === "geoLocation") {
            this.set('isGeoDropdown', !this.get('isGeoDropdown'));
            $('#geo-filter').toggleClass('Geo-Filter-active');
        } else {

        }
    },
    dropdownNavigator: function() {

        this.set('isNavigatorDropdown', !this.get('isNavigatorDropdown'));
        this.set('categorys', HubStar.Cate.find({}));
        this.set('subcate', []);
        this.set('subcategories', []);

        setTimeout(function() {
            $('.Navigator-box').fadeIn("fast");
        }, 30);
    },
    showDiscoveryBar: function() {

        HubStar.set("showDiscoveryBar", true); 
        this.transitionToRoute('searchIndex');
        $("#top-about-menu").fadeIn("320");
        $("#search-bar").fadeOut("320");
        $(".Navigator-box").fadeOut("320");
        $(".navbar").css("box-shadow", "");

    },
    closeDropdownNavigator: function() {
        this.set('isNavigatorDropdown', false);
        this.set('isHeaderNavigatorDropdown', false);
    },
    dropdownHeaderNavigator: function() {

        this.set('isHeaderNavigatorDropdown', !this.get('isHeaderNavigatorDropdown'));
        console.log(this.get('isHeaderNavigatorDropdown'));

        this.set('categorys', HubStar.Cate.find({}));

        this.set('subcate', []);
        this.set('subcategories', []);

        setTimeout(function() {
            $('.Navigator-box').fadeIn("fast");
        }, 30);
    },
    topicSelection: function(data) {


        this.set('subcate', []);
        this.set('subcategories', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++) {
            var str = data.get('subcate').objectAt(i).get('category_topic');
//           str=str.slice(0,5);
//           console.log(str);
            this.get('subcate').pushObject({'category_topic': data.get('subcate').objectAt(i).get('category_topic'), 'subcategories': data.get('subcate').objectAt(i).get('subcategories')});
        }

    },
    searchTopicSelection: function(data) {

        this.set('subcategories', []);
        for (var i = 0; i < data.get('length'); i++) {
            this.get('subcategories').pushObject({'search_topic': data.objectAt(i).get('search_topic')});
        }

    },
    topicSearch: function(search_topic) {
        this.transitionToRoute('search', {id: search_topic});
        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
        this.set('search_string', search_topic);
//        this.newSearch();
        this.set('isNavigatorDropdown', false);
        this.set('isHeaderNavigatorDropdown', false);
        HubStar.set("showDiscoveryBar", false);
    },
    canelDropDown: function()
    {
        $('#geo-filter').toggleClass('Geo-Filter-active');
        this.set('isGeoDropdown', false);
    },
    login: function() {
        if (this.get('loginUsername') !== null && this.get('loginPassword') !== null && this.get('loginPassword') !== "" && this.get('loginPassword') !== "")
        {
            this.set('loginTime', true);
            document.getElementById("loginUsername").setAttribute("class", "login-textfield");
            document.getElementById("loginPassword").setAttribute("class", "login-textfield");
            var loginInfo = [this.get('loginUsername'), this.get('loginPassword'), this.validateEmail(this.get('loginUsername'))];
            var that = this;
            requiredBackEnd('login', 'login', loginInfo, 'POST', function(params) {
                if (params === 1) {
                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                    that.set('loginTime', false);
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                }// INVALID user name when the user attempts to login.
                else if (params === 0) {
                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                    that.set('loginTime', false);
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is a social network login account
                else {


                    if (that.get('loginPassword') === params[0]["PWD_HASH"] && that.get('loginPassword') !== undefined) {

                        var email_activate = params[1];


                        if (email_activate === true)
                        {
                            localStorage.loginStatus = params[0].COUCHBASE_ID;
                            localStorage.userName = that.get('loginUsername');
                            localStorage.userType = "email";
                            HubStar.set("isLogin", true);
                            that.transitionToRoute('searchIndex');


                            that.set('loginPassword', "");
                            that.set('loginTime', false);
                        }
                        else
                        {
                            that.set('loginTime', false);
                            $('.black-tool-tip').css('display', 'none');
                            $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                            alert("Register successful! Please acticate your account which sent to your register email before start you journal on myTrends web!");
                        }

                    }
                    else {
                        document.getElementById("loginPassword").setAttribute("class", "login-textfield error-textfield");
                        that.set('loginTime', false);
                        if ($('#incorrect-password').css('display') === 'none') {

                            $('.black-tool-tip').stop();
                            $('.black-tool-tip').css('display', 'none');
                            $('#incorrect-password').animate({opacity: 'toggle'});
                        }// INCORRECT PASSWORD; User is trying to login with incorrect password

                    }
                }
            });
        }

    },
    emailSend: function()
    {

        var signupInfo = [this.get('resetPasswordEmail')];
        var that = this;
        requiredBackEnd('login', 'resetemail', signupInfo, 'POST', function(params) {
            if (params === 1) {
                $('.black-tool-tip').stop();
                $('.black-tool-tip').css('display', 'none');
                $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
            }// INVALID EMAIL; The user has forgotten their password and inputted an invalid email address
            else if (params === 0) {

                $('.black-tool-tip').stop();
                $('.black-tool-tip').css('display', 'none');
                $('#invalid-account-type-reset').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
            }
            else {
                var emailInfo = [that.get('resetPasswordEmail'), params.USER_NAME, params.PWD_HASH];
                requiredBackEnd('emails', 'forgetpassword', emailInfo, 'POST', function(params) {
                    if (params === 1) {
                        $('.black-tool-tip').stop();
                        $('.black-tool-tip').css('display', 'none');
                        $('#new-password').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                        /* forgotten password email sent */
                    }

                });
            }
        });
    },
    display: function(ads)
    {
        var that = this;
        if (ads["isNew"] === true) {
            googletag.cmd.push(function() {
                for (var i = 0; i < ads.length; i++) {
                    var ad = ads[i];
                    var slot1 = googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());

                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                    googletag.display(ad.div);
                    googletag.pubads().refresh([slot1]);
                }
            });
            ads["isNew"] = false;
        }
        else
        {
            googletag.cmd.push(function() {
                for (var i = 0; i < ads.length; i++) {
                    var ad = ads[i];
                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                    googletag.display(ad.div);
                }
            });
        }


        for (var i = 0; i < ads.length; i++) {
            var ad = ads[i];
            var div_id = ad.div + "_box";
            var x = document.getElementById(div_id);
            x.style.display = "block";
            x.className += " box";
        }
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 1000);
    },
    getAds: function() {

//        DFP code
        var adSlots = HubStar.get('ads');
        var that = this;
        var pageCount = this.get("pageCount");
        var masonryContainer = document.getElementById('masonry_container');
        try
        {
            for (var i = 0; i < adSlots[pageCount].length; i++) {
                var ad = adSlots[pageCount][i];
                var position = ad.slot_position;

                var child = masonryContainer.children[that.get("oldChildren") + position * 4];
                var masonrybox = document.createElement('div');
                masonrybox.id = ad.div + '_box';
                masonrybox.border = 0;
                masonrybox.backgroundColor = 'transparent';
                masonrybox.textAlign = "center";
                masonrybox.className = "colAd noStyle1";
                masonrybox.style.display = "none";
                var adDiv = document.createElement('div');
                adDiv.id = ad.div;
                masonrybox.appendChild(adDiv);
                masonryContainer.insertBefore(masonrybox, child);
            }
            that.set("oldChildren", masonryContainer.children.length);
            that.display(adSlots[pageCount]);
        }
        catch (err) {
//            console.log("container is empty");
        }
    },
    getPageNo: function()
    {
        var pageNo = this.get('adPageNo');
        var increaseby0ne = pageNo + 1;
        this.set('adPageNo', increaseby0ne);
        return pageNo;
    },
    backToDefault: function() {
        this.defaultSearch();
        this.set('search_string', '');
        this.transitionToRoute('searchIndex');

    },
    clearSearch: function() {
        this.set('search_string', '');
        this.transitionToRoute('searchIndex');
    }
});


})();

(function() {

HubStar.ApplicationFeedbackController = Ember.Controller.extend({
    needs: ['application'],
    photo_url: '',
    is_remove: false,
    setFeedback: function(status) {

        this.set('is_remove', false);
        if (this.get('is_remove') === false) {
            this.set('status', status);
            this.set('feedback', true);
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            this.set('photo_url', currentUser.get('photo_url_large'));
            Ember.run.later(function() {

                $('.fresh-message').show().animate({
                    top: 160
                }, 400);
                $('.fresh-profile-pic').show().animate({
                    top: 145
                }, 400);
                $('.fresh-message').show().delay(3000).animate({
                    top: -5
                }, 400);
                $('.fresh-profile-pic').show().delay(3000).animate({
                    top: -30
                }, 400);


            }, 500);
        }
        this.set('is_remove', true);

        Ember.run.next(function() {

        });

    },
    removeButton: function() {

        if (this.get('is_remove') === true) {

//            $('.fresh-message').attr('style', "display:none").animate({
//       
//                }, 400);
//             $('.fresh-profile-pic').attr('style', "display:none").animate({
//                            
//                }, 400);        
//
            $('.fresh-message').hide('1000').animate({
            }, 400);
            $('.fresh-profile-pic').hide('1000').animate({
            }, 400);


            this.set('is_remove', false);

        }

    },
    statusObserver: function(record, infoChecking, status) {
        var that = this;
        var noError = true;
        // added the ability to show different flash message colours #371
        if (status === "info") {
            that.set("info", true);
            that.set("succeed", false);
            that.set("warnning", false);
            that.set("failed", false);
            that.setFeedback(infoChecking);
        }
        else if (status === "failed")
        {
            that.set("info", false);
            that.set("succeed", false);
            that.set("warnning", false);
            that.set("failed", true);
            that.setFeedback(infoChecking);
        }
        else if (status === "warnning")
        {
            that.set("info", false);
            that.set("succeed", false);
            that.set("warnning", true);
            that.set("failed", false);
            that.setFeedback(infoChecking);
        }
        else {
            if (infoChecking !== null)
            {
                that.set("info", false);
                that.set("succeed", true);
                that.set("warnning", false);
                that.set("failed", false);
                that.setFeedback(infoChecking);
            } else {
                record.addObserver("isError", function() {
                    if (record.get("isError")) {
                        that.set("info", false);
                        that.set("succeed", false);
                        that.set("warnning", false);
                        that.set("failed", true);
                        that.setFeedback("There is error");

                        noError = false;
                    }
                    else {
                    }

                    record.removeObserver("isError");
                });
                if (noError) {
                    record.addObserver("isSaving", function() {
                        if (record.get("isSaving")) {
                            that.set("info", false);
                            that.set("succeed", true);
                            that.set("warnning", false);
                            that.set("failed", false);
                            that.setFeedback("updateSucess");

                        }
                        else {

                        }

                        record.removeObserver("isSaving");
                    });

                }

            }
        }
    }

});



})();

(function() {

HubStar.ArticleController = Ember.Controller.extend({
    content: [],
    image_no: 1,
    selectedPhoto: null,
    captionTitle: "",
    readCaption: true,
    caption: '',
    makeSureDelete: false,
    willDelete: false,
    checkLoginStatus: false,
    searchFromRoute: false,
    collectionArticleId: null,
    commentContent: "",
    accessFromSearchBoard: false, //false: access the articlePhoto  true: access the article
    isCreditListExist: false,
    needs: ['application', 'addCollection', 'contact', 'applicationFeedback', 'checkingLoginStatus', 'editComment', 'masonryCollectionItems'],
    init: function() {

    },
    findSelectedItemIndex: function() {
        content = this.get('content');
        for (var index = 0; index <= content.get('length'); index++) {
            if (this.get('selectedPhoto') === content.objectAt(index)) {
                return index;
            }
        }
        return 0;
    },
    previesImage: function() {
        if (!this.get('selectedPhoto')) {
            this.set('selectedPhoto', this.get('content').get('lastObject'));
        }
        var selectedIndex = this.findSelectedItemIndex();
        selectedIndex--;
        if (selectedIndex < 0) {
            selectedIndex = this.get('content').get('length') - 1;
            this.set('image_no', this.get('content').get('length'));
        }
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        if (this.get("accessFromSearchBoard") === false)
        {
            if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profileArticlePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
            else
            {
                this.transitionTo("articlePhoto", this.get('megaResouce').get("photo").objectAt(0));
            }
        }

        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
        this.set('captionTitle', this.get('selectedPhoto').photo_title);
        this.set('caption', this.get('selectedPhoto').photo_caption);
        this.set('readCaption', false);
        this.setCaption();
    },
    nextImage: function() {
        if (!this.get('selectedPhoto')) {
            this.set('selectedPhoto', this.get('content').get('firstObject'));
        }
        var selectedIndex = this.findSelectedItemIndex();
        selectedIndex++;
        if (selectedIndex >= (this.get('content').get('length'))) {
            this.set('image_no', 1);
            selectedIndex = 0;
        }
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        if (this.get("accessFromSearchBoard") === false)
        {
            if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profileArticlePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
            else
            {
                this.transitionTo("articlePhoto", this.get('megaResouce').get("photo").objectAt(0));
            }
        }

        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
        this.set('captionTitle', this.get('selectedPhoto').photo_title);
        this.set('caption', this.get('selectedPhoto').photo_caption);
        this.set('readCaption', false);
        this.setCaption();
    },
    selectImage: function(e) { // it is click the photo
        this.set('megaResouce', HubStar.Mega.find(e));
        this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));

        this.set('captionTitle', this.get('selectedPhoto').get("photo_title"));
        this.set('caption', this.get('selectedPhoto').get("photo_caption"));

        var contents = this.get('content');
        var selectedIndex = 1;
        for (var index = 0; index <= contents.get('length') - 1; index++) {
            if (this.get('selectedPhoto').get("id") === contents.objectAt(index).id) {
                selectedIndex = index + 1;
            }
        }

        if (selectedIndex >= (this.get('content').get('length') + 1)) {
            this.set('image_no', 1);
            selectedIndex = 1;
        }

        this.set('image_no', selectedIndex);

        if (this.get("accessFromSearchBoard") === false)
        {
            if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profileArticlePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
            else
            {
                this.transitionTo("articlePhoto", HubStar.Mega.find(e).get('photo').objectAt(0)); //control the change id when click the photo
            }

        }
        else
        {
            //this.transitionTo("article", HubStar.Mega.find(e).get('photo').objectAt(0)); //control the change id when click the photo
            //                                                               // as it use the fix id to refresh the route so it will have problem when fresh (change the id)
        }
        this.selectedImage(e);
    },
    selectedImage: function(id) {
        var selectedImage_id = "#" + id;
        $('.photo_original_style').removeClass('selected_image_style');
        $(selectedImage_id).addClass('selected_image_style');
    },
    getInitData: function(megaObject) {

        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        this.set("content", []);
        this.set("selectedPhoto", '');
        this.set('image_no', 1);
        var megaResouce = HubStar.Mega.find(megaObject.id);
        this.set('articleResouce', megaResouce.get('article').objectAt(0));
        this.set('article', megaResouce);
        this.set('articleID', megaObject.id);
        this.set('megaResouce', megaResouce);
        this.addRelatedData(megaObject);
        this.getCommentsById(megaObject.id);
        this.checkCreditExist(megaResouce.get('article').objectAt(0).get('credits'));
    },
    checkCreditExist: function(credits) {
        if (credits !== null && credits !== 'undefined' && credits.get('length') > 0) {
            this.set('isCreditListExist', true);
        } else {
            this.set('isCreditListExist', false);
        }
    },
    addComment: function() {

if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
        var commentContent = this.get('commentContent');
        console.log(commentContent);
        if (commentContent) {
            var comments = this.get('article').get('comments');
//            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            var commenter_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var message_id = createMessageid() + commenter_id;
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                "is_delete": false, optional: this.get('article').get('type') + '/' + this.get('article').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
        }
    },
    removeComment: function(object)
    {
        var message = "Delete this comment?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.removeCommentItem(object);
            this.cancelDelete();
        } else {
            this.set("obj", object);
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeCommentItem: function(object)
    {
        var id = this.get('article').get("id");
        var message_id = object.get("message_id");
        var delInfo = [id, message_id];

        delInfo = JSON.stringify(delInfo);
        var that = this;
        this.get('article').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeleteArticleComment', delInfo, 'POST', function(params) {
        });
    },
    updateComment: function(object) {
        this.get("controllers.editComment").setRelatedController("article");
        var comments = this.get('article').get('comments');
        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("message_id") === object.get("message_id"))
            {
                object.set("isEdit", !object.get("isEdit"));
            }
            else
            {
                comments.objectAt(i).set("isEdit", false);
            }
        }
        var msg = object.get("content");
        HubStar.set("updateCommentmsg", msg);
    },
    addRelatedData: function(mega) {

        var collection_id = mega.get("collection_id");
        var owner_profile_id = mega.get("owner_id");
        var isProfileIDExist = this.isParamExist(owner_profile_id);
        var isCollectionIDExist = this.isParamExist(collection_id);
        var that = this;
        if (isProfileIDExist && isCollectionIDExist) {
            var data = HubStar.Mega.find({RequireType: "articleRelatedImage", "article_id": collection_id, "owner_id": owner_profile_id});
            data.addObserver('isLoaded', function() {
                if (data.get('isLoaded')) {
                    var length = data.get("content").get("length");
                    for (var i = 0; i < length; i++) {
                        var temp = data.get("content").objectAt(i);
                        if (temp.data.photo !== undefined) {
                            that.get("content").pushObject(temp.data.photo.objectAt(0));                                  //find the object which contain photos and push it into model
                        }
                    }

                    if (that.get("accessFromSearchBoard") === false)
                    {
                       

                        if (that.get("controllers.masonryCollectionItems").get("type") === "profile")
                        {
                            that.transitionTo("profileArticlePhoto", that.get('content').objectAt(0));

                        }
                        else
                        {
                            that.transitionTo("articlePhoto", that.get('content').objectAt(0));
                        }

                    }

                    that.set('selectedPhoto', that.get('content').objectAt(0));                                                  //set selectedPhoto to the first photo
                    that.set('captionTitle', that.get('selectedPhoto').photo_title);

                    that.set('caption', that.get('selectedPhoto').photo_caption);
                }
            });
        }
    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        this.set('thisComments', comments);
    },
    isParamExist: function(param)
    {
        var result = (param !== null && param !== undefined);
        return result;
    },
    closeWindow: function() {
        this.set('collectable', false);
        this.set('contact', false);
        var address = document.URL;
        var collection_id = address.split("#")[1].split("/")[6];
        var user_id = address.split("#")[1].split("/")[2];
        var type = address.split("#")[1].split("/")[1];
        
    
        if (collection_id === undefined) //search from the seach board
        {
            // this.transitionTo("indexIndex"); // go to search page, this can  work, but it is too slowlly.
            window.history.back();
        }
        else
        {
            if (type === "users")
            {
                var photoObject = HubStar.Mega.find(collection_id);

                this.transitionTo("userPhoto", photoObject); //user photo
            }
            else if (type === "profiles")
            {
                var photoObject = HubStar.Mega.find(collection_id);

                this.transitionTo("profilePhoto", photoObject); // profile photo
            }
        }

    },
    switchCollection: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var addCollectionController = this.get('controllers.addCollection');
            var selectid = this.get('articleResouce').id;
            addCollectionController.setImageID(selectid);
            var tempUrl = this.get('selectedPhoto').photo_image_thumbnail_url;
            addCollectionController.setThumbnailUrl(tempUrl);
            addCollectionController.setRelatedController('article');
            addCollectionController.setUser();
            this.set('collectable', !this.get('collectable'));
        }
    },
    editingContactForm: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var contactController = this.get('controllers.contact');

            this.get("controllers.contact").set("firstStepOfContactEmail", false);
            this.get("controllers.contact").set('secondStepOfContactEmail', false);

            var selectid = this.get('selectedPhoto').id;
            contactController.setSelectedMega(selectid);

            this.set('contact', !this.get('contact'));
        }
    },
    closeContact: function() {
        this.set('contact', false);
    },
    setCaption: function()
    {
        if (this.get("readCaption"))
        {
            $('#caption_action').animate({
                left: -320
            }, 800);

            this.set("readCaption", false);
        }
        else
        {
            $('#caption_action').animate({
                left: 0
            }, 800);
            this.set("readCaption", true);
        }
    },
    getTest: function() {

        return "test";

    },
    dropdownPhotoSetting: function() {
        $('#dropdown_id_').toggleClass('hideClass');
    },
    fbShare: function() {
        this.dropdownPhotoSetting();
        var that = this;

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var caption = '';

        if (this.get('articleResouce').get("article_body") !== null)
        {
            caption = this.get('articleResouce').get("article_body");
        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.get('selectedPhoto').photo_image_original_url,
            name: this.get('articleResouce').get("article_headline"),
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function() {
        this.dropdownPhotoSetting();
        var caption = '';
        if (this.get('articleResouce').get("article_body") !== null)
        {
            caption = this.get('articleResouce').get("article_body");
        }
        else
        {
            caption = '';
        }


        $("meta[property='og\\:title']").attr("content", this.get('articleResouce').get("article_headline"));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').photo_image_original_url);


        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function() {
        this.dropdownPhotoSetting();

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var url = 'https://twitter.com/share?text=' + this.get('articleResouce').get("article_headline") + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {

        this.dropdownPhotoSetting();

        var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('articleID');

        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('selectedPhoto').photo_image_original_url) +
                '&description=' + encodeURIComponent(this.get('articleResouce').get("article_headline"));
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});


})();

(function() {


/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.CheckingLoginStatusController = Ember.Controller.extend({
    
    init: function() {

    },
    popupLogin: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('checkLoginStatus', true);
            return false;
        }
        else {
            return true;
        }
    }

});


})();

(function() {

HubStar.CollectionController = Ember.Controller.extend({
    collections: null,

    needs: ['applicationFeedback', 'addCollection'],

    init: function() {

    },
    getCreateCollection: function(title, desc, collections)
    {
        this.set('collections', collections);
        var isExsinting = this.checkingIdisExsinting(title, "create");
        var collection = null;
        if (isExsinting) {
            var validID = this.checkingValidInput(title);
            var checkingCharater = this.specialCharactersChecking(validID);

            if (checkingCharater && validID !== null && validID !== '') {
                collection = HubStar.Collection.createRecord({});
                collection.set('id', validID.toLowerCase());
                collection.set('title', title);
                collection.set('cover', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png");
                if (desc !== null && desc !== "") {
                    collection.set('desc', desc);
                } else {
                    collection.set('desc', "Add a short description to your Collection");
                }             
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "Please try to type name with upper case and space.", "warnning");
            }           
        }
        
        return collection;

    },
    checkingValidInput: function(title) {

        if (title === null || title === "") {
        } else {
            if (title.indexOf(" ") !== -1) {
                title = title.split(' ').join('-');
            }
        }
        return title;
    },
    checkingIdisExsinting: function(id, postOrPut) {
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get('controllers.addCollection').get("isProfile") === true)
                {                  
                    if (this.get("collections").objectAt(i).id === id) {
                        isExsinting = false;
                    }
                }
                else
                {
                    if (this.get("collections").objectAt(i).get("id") === id) {
                        isExsinting = false;
                    }
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting.", "warnning");
            }
        }       
       return isExsinting;
    },
    specialCharactersChecking: function(str) {
        var re = /^[a-zA-Z0-9-][a-zA-Z0-9-]*$/;
        return re.test(str);
    },
    getUpdateCollection: function(selectedCollection) {

        var desc = selectedCollection.get('desc');


        if (selectedCollection.get('desc') !== undefined) {


            desc = selectedCollection.get("desc");
        }




        var id = this.checkingValidInput(selectedCollection.get('id'));
        var title = selectedCollection.get("title");

        selectedCollection.set("id", id);
        selectedCollection.set("title", title);
        selectedCollection.set("desc", desc);


        return selectedCollection;
    },
    getDeleteCollection: function() {

    }
}
);


})();

(function() {

HubStar.CommentController = Ember.Controller.extend({
    commentLength: null,
    thisComments: null,
    stringFiedTime_stamp: null,
    mega: null,
    count: null,
    isUserSelf: false,
    makeSureDelete: false,
    willDelete: false,
    objID: "",
    needs: ['application', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'editComment', 'checkingLoginStatus'],
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
    },
    switchCollection: function(model) {

        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            if (model.get("type") === "photo") {
                var photoObj = model.get("photo").objectAt(0);
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = photoObj.get('photo_image_thumbnail_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('comment');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
            else if (model.get("type") === "article")
            {
                var photoObj = model.get("article").objectAt(0);
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = photoObj.get('article_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('comment');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }

            else if (model.get("type") === "video")
            {
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = model.get('object_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('comment');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
        }
    },
    openComment: function(id) {
       
        if (localStorage.loginStatus) {
            this.getCommentsById(id);
            this.addComment();
        } else {
            HubStar.set('checkLoginStatus', true);
        }
    },
    addComment: function() {             
        var commentContent = this.get('commentContent');
        if (commentContent) {
            
            var comments = this.get('mega').get('comments');
           
//            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            var commenter_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var message_id = createMessageid() + commenter_id;
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false, optional: this.get('mega').get('type') + '/' + this.get('mega').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', "");
            this.seeMore(this.get('mega').get('id'));
            this.closeComment(this.get('mega').get('id'));
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('#masonry_user_container').masonry("reload");
                $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
            }, 200);
        }
    },
    closeComment: function(id) {

        this.set("commentContent", "");

        $('#comment_' + id).attr('style', 'display:block');
        $('#commentBox_' + id).attr('style', 'display:none');
        $('#masonry_container').masonry("reload");
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 200);
    },
    editingCommentData: function(obj)
    {
        this.get("controllers.editComment").setRelatedController("comment");
        var id = obj.get("message_id");
        var msg = obj.get("content");
        $('#commentItem_' + id).attr('style', 'display:none');

        obj.set("isEdit", true);

        this.seeMore(this.get('content').id);

        HubStar.set("updateCommentmsg", msg);

        setTimeout(function() {
            $('#commentEdit_' + id).attr('style', 'display:block');
            $('#commentItemIn_' + id).attr('style', 'display:none');
            $('#masonry_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    linkingUser: function(id) {

        self.location = "#/users/" + id;

    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);     
        var comments = mega.get('comments');
        this.set('mega', mega);
//        for (var i = 0; i < comments.get("length"); i++)
//        {
//            if (comments.objectAt(i).get("commenter_id") === localStorage.loginStatus)
//            {
//                comments.objectAt(i).set("isUserSelf", true);
//            }
//        }
        this.set('thisComments', comments);
    },
    closeCommentItem: function(obj) {
        obj.set("isEdit", false);
        var id = obj.get("message_id");
        setTimeout(function() {
            $('#commentEdit_' + id).attr('style', 'display:none');
            $('#commentItem_' + id).attr('style', 'display:block');
            $('#commentItemIn_' + id).attr('style', 'display:block');
            $('#masonry_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    removeComment: function(object)
    {
        var message = "Delete this comment?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.removeCommentItem(object);
            this.cancelDelete();
        } else {
            this.set("obj", object);
            this.set('willDelete', true);
        }       
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeCommentItem: function(object)
    {

        var id = this.get('content').id;
        var type = this.get('content').get('type');
        this.getCommentsById(id);
        if (type === 'photo') {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            that.get("thisComments").removeObject(object);
            requiredBackEnd('comments', 'DeletePhotoComment', delInfo, 'POST', function(params) {


                $('#masonry_user_container').masonry("reloadItems");
                $('#masonry_container').masonry("reloadItems");

            });
        }
        else if (type === "profile")
        {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            that.get("thisComments").removeObject(object);
            requiredBackEnd('comments', 'DeleteProfileComment', delInfo, 'POST', function(params) {


                $('#masonry_user_container').masonry("reloadItems");
                $('#masonry_container').masonry("reloadItems");

            });
        }
        else if (type === "article")
        {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            that.get("thisComments").removeObject(object);
            requiredBackEnd('comments', 'DeleteArticleComment', delInfo, 'POST', function(params) {


                $('#masonry_user_container').masonry("reloadItems");
                $('#masonry_container').masonry("reloadItems");

            });
        }
        else if (type === "video")
        {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            requiredBackEnd('comments', 'DeleteVideoComment', delInfo, 'POST', function(params) {
                that.get("thisComments").removeObject(object);
                $('#masonry_user_container').masonry("reloadItems");
                $('#masonry_container').masonry("reloadItems");
            });
        }

    },

    addLike: function(id)
    {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            var mega = HubStar.Mega.find(id);
            var type = mega.get("type");
            var people_like = mega.get("people_like");
            if (people_like === null || people_like === undefined) {
                people_like = "";
            }
            if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
            {
                if (people_like.indexOf(localStorage.loginStatus) !== -1)
                {
                    this.count = mega.get('likes_count');

                }
                else {
                    var likeArray = [localStorage.loginStatus, id, type];
                    likeArray = JSON.stringify(likeArray);
                    var that = this;
                    requiredBackEnd('megas', 'addlike', likeArray, 'POST', function(params) {
                        params = params + "";
                        var like = params.split(",");
                        mega.set("likes_count", like.length);
                        mega.set("people_like", params);
                        that.count = like.length;
                    });
                }
            }
        }
    },
    pushComment: function(comment)
    {
        var tempurl = getRestAPIURL();
        $.ajax({
            url: tempurl + '/megas/addcomment',
            type: 'POST',
            data: JSON.stringify(comment),
            success: function() {
            }
        });
    },
    seeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:block');
        $('#showMoreComment_' + id).attr('style', 'display:none');
        $('#commentData_' + id).attr('style', 'display:block');

        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none');
        $('#showMoreComment_' + id).attr('style', 'display:block');
        $('#commentData_' + id).attr('style', 'display:none');

        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 250);
    },
    shareDisplay: function(id) {
        $('#share_' + id).children('ul').removeClass("hideClass");
    },
    shareHide: function(id) {
        $('#share_' + id).children('ul').addClass("hideClass");
    },
    fbShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var that = this;
            var currntUrl =  'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var caption = '';

            if (this.get('selectedPhoto').get('photo_caption') !== null)
            {
                caption = this.get('selectedPhoto').get('photo_caption');
            }
            else
            {
                caption = '';
            }
            var obj = {
                method: 'feed',
                link: currntUrl,
                picture: this.get('selectedPhoto').get('photo_image_thumbnail_url'),
                name: this.get('selectedPhoto').get('photo_title'),
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }
        if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var that = this;
            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var caption = '';
            if (this.get('selectedVideo').data.video_desc !== null)
            {
                caption = this.get('selectedVideo').data.video_desc;
            }
            else
            {
                caption = '';
            }
            var obj = {
                method: 'feed',
                link: currntUrl,
                picture: this.get('selectedVideo').data.video_img,
                name: this.get('selectedVideo').data.video_title,
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessfully.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }
        if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var that = this;
            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var caption = '';
            if (this.get('selectedArticle').get('article_body') !== null)
            {
                caption = this.get('selectedArticle').get('article_body');
            }
            else
            {
                caption = '';
            }
            var obj = {
                method: 'feed',
                link: currntUrl,
                picture: this.get('selectedArticle').get('article_image_url'),
                name: this.get('selectedArticle').get('article_headline'),
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessfully.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }

    },
    //share to social google plus
    gpShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var caption = '';
            if (this.get('selectedPhoto').get('photo_caption') !== null)
            {
                caption = this.get('selectedPhoto').get('photo_caption');
            }
            else
            {
                caption = '';
            }


            $("meta[property='og\\:title']").attr("content", this.get('selectedPhoto').get('photo_title'));
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_thumbnail_url'));


            var currntUrl = 'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
        else if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var caption = '';
            if (this.get('selectedArticle').get('article_body') !== null)
            {
                caption = this.get('selectedArticle').get('article_body');
            }
            else
            {
                caption = '';
            }


            $("meta[property='og\\:title']").attr("content", this.get('selectedArticle').get('article_headline'));
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedArticle').get('article_image_url'));


            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var caption = '';
            if (this.get('selectedVideo').data.video_desc !== null)
            {
                caption = this.get('selectedVideo').data.video_desc;
            }
            else
            {
                caption = '';
            }


            $("meta[property='og\\:title']").attr("content", this.get('selectedVideo').data.video_title);
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedVideo').data.video_img);


            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
    },
    //share to social twitter
    tShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var url = 'https://twitter.com/share?text=' + this.get('selectedPhoto').get('photo_title') + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
        else if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'https://twitter.com/share?text=' + this.get('selectedArticle').get('article_headline') + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'https://twitter.com/share?text=' + this.get('selectedVideo').data.video_title + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
    },
    pShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url')) +
                    '&description=' + encodeURIComponent(this.get('selectedPhoto').get('photo_title'));
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;

        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('selectedVideo').data.video_img) +
                    '&description=' + encodeURIComponent(this.get('selectedVideo').data.video_title);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
        else if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('selectedArticle').get('article_image_url')) +
                    '&description=' + encodeURIComponent(this.get('selectedArticle').get('article_headline'));
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
    }
});


})();

(function() {


HubStar.ContactController = Ember.Controller.extend({
    dropdownCategory: "Category",
    dropdownTimeframe: "Timeframe",
    dropdownBudget: "Budget",
    dropdownExperience: "Experience",
    selectedMega: null,
    recieveProfile: null,
    displayName: null,
    displayEmail: null,
    currentUser: null,
    isDisplayNameEditable: false,
    isDisplayEmailEditable: false,
    editNameStatus: "edit",
    editEmailStatus: "edit",
    emailBody: null,
    emailSubject: null,
    emailDestination: null,
    emaiCCDestination: null,
    rememberMessage: true,
    owner_profile_pic: null,
    emaiBCCDestination: null,
    projectCategory: null,
    projectTimeframe: null,
    categorys: [],
    showCate: false,
    temp: [],
    subcate: [],
    projectBudget: null,
    projectExperience: null,
    email_title: "",
    needs: ["mega", "profile", 'article', 'applicationFeedback', 'video'],
    init: function() {

        this.set('categorys', []);

        this.set('categorys', HubStar.Cate.find());
        this.set('projectCategorySelection', 'Please Select One ...');
        this.set('timeframeSelection', 'Please Select One ...');
        this.set('projectBudgetSelection', 'Please Select One ...');
        this.set('projectExperienceSelection', 'Please Select One ...');
    },
    selectionCheckBox: function() {
        if (this.get('temp').get('subcate') !== undefined) {
            this.set('subcate', []);
            for (var i = 0; i < this.get('temp').get('subcate').get('length'); i++) {
                this.get('subcate').pushObject({'list_id': "checkbox" + i, 'category_topic': this.get('temp').get('subcate').objectAt(i).get('category_topic'), "isSelection": this.get("checkbox" + i)});
            }
        }
    },
    topicSelection: function(data) {
        this.set('showCate', true);
        this.set('temp', []);
        this.set('temp', data);
        this.set('subcate', []);
        for (var i = 0; i < data.get('subcate').get('length'); i++) {
            this.set("checkbox" + i, false);
            this.get('subcate').pushObject({'list_id': "checkbox" + i, 'category_topic': data.get('subcate').objectAt(i).get('category_topic'), "isSelection": this.get("checkbox" + i)});
        }

    },
    checkedAction: function(checkedboxselection) {
        $("#" + checkedboxselection).prop('checked', !$("#" + checkedboxselection).prop('checked'));
        if ($("#" + checkedboxselection).prop('checked') === false) {
            this.set(checkedboxselection, false);
        } else {
            this.set(checkedboxselection, true);
        }
    },
    setSelectedMega: function(id)
    {
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));

        if (this.get("currentUser").get("first_name") !== null && this.get("currentUser").get("last_name")) {
            this.set("displayName", this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));
        }
        else {
            this.set("displayName", this.get("currentUser").get("display_name"));
        }

        this.set("displayEmail", this.get("currentUser").get("email"));
        var idProfile;
        var tempMega = HubStar.Mega.find(id);
        this.set("selectedMega", tempMega);

        if (this.get("selectedMega").get("type") === 'profile')
        {
            this.set("owner_profile_pic", this.get("selectedMega").get("profile").objectAt(0).get('profile_pic_url'));
        }
        else {
            this.set("owner_profile_pic", this.get("selectedMega").get("owner_profile_pic"));
        }
        this.set("recieveProfile", this.get("selectedMega").get("id"));
        this.set("emailDestination", this.get("selectedMega").get("owner_contact_email"));
        this.set("emaiCCDestination", this.get("selectedMega").get("owner_contact_cc_emails"));
        var that = this;
        tempMega.addObserver('isLoaded', function() {

            if (tempMega.get('isLoaded')) {
                
                that.set("selectedMega", tempMega);
                that.set("emailDestination", that.get("selectedMega").get("owner_contact_email"));
                that.set("emaiCCDestination", that.get("selectedMega").get("owner_contact_cc_emails"));
                idProfile = that.get("selectedMega").get("owner_id");

                if (that.get("selectedMega").get("type") === 'profile')
                {
                    that.set("owner_profile_pic", that.get("selectedMega").get("profile").objectAt(0).get('profile_pic_url'));
                }
                else {
                    that.set("owner_profile_pic", that.get("selectedMega").get("owner_profile_pic"));
                }
                var tempProfile = HubStar.Profile.find(idProfile);
                var those = that;
                tempProfile.addObserver('isLoaded', function() {
                    if (tempProfile.get('isLoaded')) {
                        those.get('selectedMega').set('owner_title', tempProfile.get('profile_name'));
                        those.set("emailDestination", tempProfile.get("owner_contact_email"));
                        those.set("emaiCCDestination", tempProfile.get("owner_contact_cc_emails"));
                    }
                });
            }
        });

    },
    closeContact: function() {
        var megaController = this.get("controllers.mega");
        var profileController = this.get("controllers.profile");
        var articleController = this.get("controllers.article");
        var videoController = this.get("controllers.video");

        this.set('projectCategoryDropdown', false);
        this.set('projectTimeframeDropdown', false);
        this.set('projectBudgetDropdown', false);
        this.set('projectExperienceDropdown', false);
        this.set('showCate', false);

        videoController.closeContact();
        megaController.closeContact();
        profileController.closeContact();
        articleController.closeContact();
    },
    setEditable: function(attr) {
        var swtich = "isDisplay" + attr + "Editable";
        var status = "edit" + attr + "Status";
        if (this.get(swtich))
        {
            this.set(status, "edit");
        }
        else {
            this.set(status, "confirm");
        }
        this.set(swtich, !this.get(swtich));
    },
    emailSend: function()
    {

        var projectSubCategoryItem = "";
        for (var i = 0; i < this.get('subcate').get('length'); i++) {
            if (this.get("checkbox" + i) === true) {
                projectSubCategoryItem += $('.checkbox' + i).text() + ",";
            }
        }
        projectSubCategoryItem = projectSubCategoryItem.substring(0, projectSubCategoryItem.length - 1);
        var tempEmail = HubStar.Email.createRecord({
            "displayName": this.get("displayName"),
            "displayEmail": this.get("displayEmail"),
            'recieveProfile': this.get('recieveProfile'),
            "emailBody": this.get("emailBody"),
            "emailSubject": this.get("emailSubject"),
            "emailDestination": this.get("emailDestination"),
            "emaiCCDestination": this.get("emaiCCDestination"),
            "emaiBCCDestination": this.get("emaiBCCDestination"),
            "projectCategory": this.get('projectCategorySelection').trim(),
            "projectTimeframe": this.get('timeframeSelection').trim(),
            "projectBudget": this.get('projectBudgetSelection').trim(),
            "projectExperience": this.get('projectExperienceSelection').trim(),
            "projectSubCategoryItem": projectSubCategoryItem
        });
        tempEmail.store.commit();
        this.get('controllers.applicationFeedback').statusObserver(null, "Email has been sent.");
        if (!this.get('rememberMessage')) {
            this.set("emailBody", "");
            this.set("emailSubject", "");

        }

        this.set('projectCategorySelection', 'Please Select One ...');
        this.set('timeframeSelection', 'Please Select One ...');
        this.set('projectBudgetSelection', 'Please Select One ...');
        this.set('projectExperienceSelection', 'Please Select One ...');
        this.set('showCate', false);
        this.closeContact();

    },
    dropdown: function(checking) {
        if (checking === "Category") {

            this.set('projectExperienceDropdown', false);
            this.set('projectTimeframeDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectCategoryDropdown', !this.get('projectCategoryDropdown'));

        } else if (checking === "Timeframe") {

            this.set('projectExperienceDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectCategoryDropdown', false);
            this.set('projectTimeframeDropdown', !this.get('projectTimeframeDropdown'));

        } else if (checking === "Budget") {

            this.set('projectExperienceDropdown', false);
            this.set('projectCategoryDropdown', false);
            this.set('projectTimeframeDropdown', false);
            this.set('projectBudgetDropdown', !this.get('projectBudgetDropdown'));

        } else if (checking === "Experience") {

            this.set('projectTimeframeDropdown', false);
            this.set('projectCategoryDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectExperienceDropdown', !this.get('projectExperienceDropdown'));

        } else {
        }
    },
    canelDropDown: function()
    {
        this.set('projectCategoryDropdown', false);
        this.set('projectTimeframeDropdown', false);
        this.set('projectBudgetDropdown', false);
        this.set('projectExperienceDropdown', false);
    },
    nextSendingEmailProcess: function() {

        this.set('secondStepOfContactEmail', true);
        this.set('firstStepOfContactEmail', true);
        this.selectionCheckBox();

    },
    proviousSendingEmailProcess: function() {
        this.set('secondStepOfContactEmail', false);
        this.set('firstStepOfContactEmail', false);
    }
});


})();

(function() {

HubStar.ConversationController = Ember.Controller.extend({
    conversationContent: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversationItem'],
    isUploadPhoto: false,
    makeSureDelete:false,
    willDelete:false,
    isNewConversation: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    selectConversation: function(id) {

        var idOld = this.get("selectId");
        this.get("controllers.messageCenter").selectedNone();
        $('#conversation_' + idOld).removeClass('selected-conversation');
        $('#conversation_' + id).addClass('selected-conversation');
        this.set("selectId", id);
        if (id !== null && id !== undefined) {
            setTimeout(function() {
                var s = '#conversation_' + id;
                $(document).ready(function() {
                    setTimeout(function() {
                        $("#conversation_content").mCustomScrollbar("scrollTo", s);
                        setTimeout(function() {
                            $('#conversation_' + idOld).removeClass('selected-conversation');
                            $('#conversation_' + id).addClass('selected-conversation');
                        }, 10);
                    }, 10);
                });
            }, 50);
            if (this.get("isNewConversation") === false)
            {
                this.get('controllers.messageCenter').selectConversationItem(id);
                this.get('controllers.conversationItem').getClientId(id);
            }
        }
    },
    removeConversationItem: function(s)
    {
        var message = "Delete this conversation?";
        this.set("message", message);

        this.set('makeSureDelete', true);
        if (this.get('willDelete') === true) {
            this.deleteConversationItem(s);
            this.cancelDelete();
        } else {
            this.set("s", s);
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    deleteConversationItem: function(id)
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var owner_id = this.get("currentUser").get('id');

        var tempComment = [owner_id, id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        requiredBackEnd('conversations', 'DeleteConversation', tempComment, 'POST', function(params) {
            that.get("controllers.messageCenter").selectNewConversation();
            for (var i = 0; i < that.get("conversationContent").length; i++)
            {
                if (that.get("conversationContent").objectAt(i).get("conversationID") === id)
                {
                    that.get("conversationContent").removeObject(that.get("conversationContent").objectAt(i));
                    break;
                }
            }
        });
    },
    getClientId: function(id, conversation_id) {
        this.set("routerFlag", false);
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];
        this.set('loadingTime', true);
        tempComment = JSON.stringify(tempComment);
        var that = this;
        this.set("conversationContent", []);
        requiredBackEnd('conversations', 'ReadConversation', tempComment, 'POST', function(params) {
            that.set("routerFlag", true);
            if (params !== undefined) {
                that.set("conversationContent", []);
                for (var i = 0; i < params.length; i++)
                {
                    //First reply message and it is the last one of message and it contail the reply message collection
                    dataNew["conversationID"] = params[i]["conversationID"];
                    dataNew["participation_ids"] = params[i]["participation_ids"];

                    dataNew["names"] = params[i]["names"];
                    dataNew["conversationPhoto"] = new Array();
                    dataNew["conversationPhoto"] = params[i]["conversationPhoto"];
                    if (dataNew["conversationPhoto"].length === 1)
                    {
                        dataNew["one"] = true;
                        dataNew["two"] = false;
                        dataNew["three"] = false;
                        dataNew["four"] = false;
                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                    }
                    else if (dataNew["conversationPhoto"].length === 2)
                    {
                        dataNew["one"] = false;
                        dataNew["two"] = true;
                        dataNew["three"] = false;
                        dataNew["four"] = false;
                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                        dataNew["twoPic"] = params[i]["conversationPhoto"][1]["photo_url"];
                    }
                    else if (dataNew["conversationPhoto"].length === 3)
                    {
                        dataNew["one"] = false;
                        dataNew["two"] = false;
                        dataNew["three"] = true;
                        dataNew["four"] = false;
                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                        dataNew["twoPic"] = params[i]["conversationPhoto"][1]["photo_url"];
                        dataNew["threePic"] = params[i]["conversationPhoto"][2]["photo_url"];
                    }
                    else
                    {
                        dataNew["one"] = false;
                        dataNew["two"] = false;
                        dataNew["three"] = false;
                        dataNew["four"] = true;

                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                        dataNew["twoPic"] = params[i]["conversationPhoto"][1]["photo_url"];
                        dataNew["threePic"] = params[i]["conversationPhoto"][2]["photo_url"];
                        dataNew["fourPic"] = params[i]["conversationPhoto"][3]["photo_url"];
                    }
                    dataNew["ConversationCollection"] = new Array();
                    dataNew["msg"] = params[i]["ConversationCollection"][0]["msg"];
                    dataNew["time_stamp"] = params[i]["ConversationCollection"][0]["time_stamp"];

                    for (var j = 0; j < params[i]["ConversationCollection"].length; j++)
                    {

                        var conversationItem = new Array();
                        conversationItem["item_id"] = params[i]["ConversationCollection"][j]["item_id"];
                        conversationItem["sender_id"] = params[i]["ConversationCollection"][j]["sender_id"];
                        conversationItem["time_stamp"] = params[i]["ConversationCollection"][j]["time_stamp"];
                        conversationItem["msg"] = params[i]["ConversationCollection"][j]["msg"];
                        conversationItem["name"] = params[i]["ConversationCollection"][j]["name"];

                        conversationItem["sender_photo_url_large"] = params[i]["ConversationCollection"][j]["sender_photo_url_large"];
                        if (params[i]["ConversationCollection"][j]["url"] === null)
                        {
                            conversationItem["isUrl"] = false;
                        }
                        else
                        {
                            conversationItem["isUrl"] = true;
                        }
                        conversationItem["url"] = params[i]["ConversationCollection"][j]["url"];

                        dataNew["ConversationCollection"].pushObject(conversationItem);
                    }
                    that.get("conversationContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");

            }, 200);
            that.set('loadingTime', false);
            if (conversation_id !== "" && conversation_id !== null && conversation_id !== undefined)
            {
                that.selectConversation(conversation_id);
            }
        });
    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    }
}
);


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ConversationItemController = Ember.Controller.extend({
    conversationItemContent: null,
    conversationItem: null,
    commenter_photo_url: null,
    contentFollowerPhoto: null,
    contentFollowerPhotoOld: null,
    isAdded: false,
    isInvitePeople: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversation', 'invitePeople', 'newConversation'],
    isUploadPhoto: false,
    isNewPeople: false,
    isPosting: true,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
    },
    getClientIdAdd: function(id) {
        var conversationContent = this.get('controllers.conversation').get("conversationContent");
        this.set("id", id);
        for (var i = 0; i < conversationContent.length; i++)
        {
            if (conversationContent[i]["conversationID"] === id)
            {
                this.set("conversationItem", conversationContent[i]);
                break;
            }
        }

        if (this.get("conversationItem").get("conversationPhoto").length === 0)
        {
            this.set("isAdded", false);
        }
        else
        {
            this.set("isAdded", true);
        }
        this.set("contentFollowerPhotoOld", this.get("conversationItem").get("conversationPhoto"));
        this.set("conversationItemContent", this.get("conversationItem").get("ConversationCollection"));
    },
    getClientId: function(id) {

        var conversationContent = this.get('controllers.conversation').get("conversationContent");
        this.set("id", id);
        for (var i = 0; i < conversationContent.length; i++)
        {
            if (conversationContent[i]["conversationID"] === id)
            {
                this.set("conversationItem", conversationContent[i]);
                break;
            }
        }
        if (this.get("conversationItem").get("conversationPhoto").length === 0)
        {
            this.set("isAdded", false);
        }
        else
        {
            this.set("isAdded", true);
        }

        this.set("contentFollowerPhotoOld", this.get("conversationItem").get("conversationPhoto"));
        this.set("conversationItemContent", this.get("conversationItem").get("ConversationCollection"));
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            $("#content_conversationItem_" + id).mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 1000
            });
        }, 200);
    },
    addComment: function() {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var conversationtContent = this.get('messageContent');
        this.set("isPosting", false);
        var commenter_id = this.get("currentUser").get('id');
        var conversationId = this.get("id");
        var date = new Date();
        var newStyleImage = "";
        var imageStyleName = "";
        if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
        {
            newStyleImage = this.get("newStyleImageSource");
        }
        else
        {
            newStyleImage = null;
        }
        if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
        {
            imageStyleName = this.get('newStyleImageName');

        }
        else
        {
            imageStyleName = "";
        }
        var imageName = "";
        var imageType = "";
        if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
        {
            var imageName = imageStyleName.split('.');
            var imageType = imageName[imageName.length - 1];
        }
        var conversationItemId = createMessageid();
        var participation_ids = '';
        if (this.get("contentFollowerPhoto") !== null) {
            for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
            {
                if (this.get("contentFollowerPhoto").objectAt(i).get("isAdd") === true)
                {
                    if (participation_ids === "")
                    {
                        participation_ids = participation_ids + this.get("contentFollowerPhoto").objectAt(i).get("id");
                    }
                    else
                    {
                        participation_ids = participation_ids + ',' + this.get("contentFollowerPhoto").objectAt(i).get("id");
                    }
                }
            }
        }
        var tempComment = [commenter_id, date.toString(), conversationtContent, conversationItemId, newStyleImage, imageType, imageStyleName, conversationId, participation_ids];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        //var dataNew = new Array();

        requiredBackEnd('conversations', 'AddConversationItem', tempComment, 'POST', function(params) {
            that.set("isPosting", true);
            var conversationContent = that.get('controllers.conversation').get("conversationContent");
            for (var i = 0; i < conversationContent.length; i++)
            {
                if (conversationContent[i]["conversationID"] === conversationId)
                {


                    var conversationItems = new Array();

                    conversationItems = params;

                    if (params["url"] !== null)
                    {
                        conversationItems["isUrl"] = true;
                    }
                    else
                    {
                        conversationItems["isUrl"] = false;
                    }

                    that.get('controllers.conversation').get("conversationContent").objectAt(i).get("ConversationCollection").insertAt(0, conversationItems);
                    if (that.get("contentFollowerPhoto") !== null) {
                        for (var j = 0; j < that.get("contentFollowerPhoto").length; j++)
                        {
                            if (that.get("contentFollowerPhoto").objectAt(j).get("isAdd") === true)
                            {
                                that.get('controllers.conversation').get("conversationContent").objectAt(i).get("conversationPhoto").pushObject(that.get("contentFollowerPhoto").objectAt(j));
                            }
                        }
                    }
                    that.getClientIdAdd(conversationId);
                    break;
                }
            }
            that.set("contentFollowerPhoto", null);
            that.set("isUploadPhoto", false);
            that.set('messageContent', "");
            that.set('newStyleImageSource', null);
            that.set('newStyleImageName', "");
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
        });

    },
    invitePeople: function(id)
    {
        this.get("controllers.invitePeople").set("owner", "conversationItem");
        this.set("isInvitePeople", true);
        this.get("controllers.invitePeople").getClientId(localStorage.loginStatus, id);
    },
    addToList: function(id) {
        var count = 0;
        for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
        {
            if (this.get("contentFollowerPhoto").objectAt(i).get("id") === id)
            {
                this.get("contentFollowerPhoto").objectAt(i).set("isAdd", !this.get("contentFollowerPhoto").objectAt(i).get("isAdd"));
            }
            if (this.get("contentFollowerPhoto").objectAt(i).get("isAdd") === true)
            {
                count++;
            }
        }
        if (count !== 0)
        {
            this.set("isNewPeople", true);
        }
        else
        {
            this.set("isNewPeople", false);
        }
    },
    seeMore: function(id) {
        $('#closeComment').attr('style', 'display:inline-block');
        $('#showMoreComment').attr('style', 'display:none');
        $('#messageData').attr('style', 'display: block; padding: 5px 20px;');
        $('#masonry_user_container').masonry("reload");
    },
    closeMore: function(id) {
        $('#closeComment').attr('style', 'display:none');
        $('#showMoreComment').attr('style', 'display:inline-block');
        $('#messageData').attr('style', 'display: none');
        $('#masonry_user_container').masonry("reload");
    },
    profileStyleImageDrop: function(e, name)
    {

        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    }
}
);


})();

(function() {


HubStar.DisplayViewMixin = Ember.Mixin.create({
    tt: null,
    displayMixinTest: function(tt) {
        this.set('tt', tt);
//        console.log(this.get('tt'));
    }
});


})();

(function() {


HubStar.EditCommentController = Ember.Controller.extend({
    id: "",
    needs: ['comment', "mega","article",'video'],
    
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
        this.set("commentContent", HubStar.get("updateCommentmsg"));
    },
    setRelatedController: function(parentController)
    {      
        HubStar.set('parentController', parentController);    
    },
    closeCommentItem: function(obj) {     
        if (HubStar.get("parentController") === 'mega')
        {        
            this.get("controllers.mega").updateComment(obj);
        }
        else if(HubStar.get("parentController") === 'comment'){
            this.get("controllers.comment").closeCommentItem(obj);
        }
        else if(HubStar.get("parentController") === 'article'){
            this.get("controllers.article").updateComment(obj);
        }
         else if(HubStar.get("parentController") === 'video'){
            this.get("controllers.video").updateComment(obj);
        }
    },
    updateComment: function(object) {
        var id = object.get("optional").split('/')[1];
        var mega = HubStar.Mega.find(id);
        var type = mega.get('type');


        if (type === 'photo') {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", this.get("commentContent"));
            that.closeCommentItem(object);
            requiredBackEnd('comments', 'UpdatePhotoComment', delInfo, 'POST', function(params) {

            });
        }
        else if (type === "profile")
        {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", that.get("commentContent"));
            that.closeCommentItem(object);
            requiredBackEnd('comments', 'UpdateProfileComment', delInfo, 'POST', function(params) {

            });
        }
        else if (type === "article")
        {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", that.get("commentContent"));
            that.closeCommentItem(object);
            requiredBackEnd('comments', 'UpdateArticleComment', delInfo, 'POST', function(params) {

            });
        }
        else if (type === "video")
        {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", that.get("commentContent"));
            that.closeCommentItem(object);
            requiredBackEnd('comments', 'UpdateVideoComment', delInfo, 'POST', function(params) {

            });
        }
    }
});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.EditMessageController = Ember.Controller.extend({
    commenter_photo_url: null,
    messageContent: null,
    isUploadPhoto: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'message', 'userMessage'],
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        if (this.get("currentOwner").get("id") === localStorage.loginStatus)
        {
            this.set("isUserself", true);
        }
        this.set('messageContent', HubStar.get('message'));
    },
    close: function(id) {
        this.set('messageContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
            {
                this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", false);
                break;
            }
        }
        this.set("isUploadPhoto", false);
    },
    removePic: function(id) {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");

        this.set("isUploadPhoto", false);
    },
    removeOriginalPic: function(id) {
         for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
            {
                this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("url", null);
                 this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("isUrl", false);
                break;
            }
        }
    },
    updateMessage: function(id) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var owner_id = this.get("currentOwner").get("id");
        var replyID = null;
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
            {
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("url") === null)
                {
                    replyID = createMessageid();
                }
                var date = new Date();
                var newStyleImage = "";
                var imageStyleName = "";

                if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
                {
                    newStyleImage = this.get("newStyleImageSource");
                }
                else
                {
                    newStyleImage = null;
                }
                if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
                {
                    imageStyleName = this.get('newStyleImageName');
                }
                else
                {
                    imageStyleName = "";
                }
                var imageName = "";
                var imageType = "";

                if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
                {
                    var imageName = imageStyleName.split('.');
                    var imageType = imageName[imageName.length - 1];
                }
                var messageContent = this.get("messageContent");
               var url = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("url");
                var tempComment = [owner_id, date.toString(), messageContent, newStyleImage, imageType, imageStyleName, id, replyID,url];

                tempComment = JSON.stringify(tempComment);
                var that = this;

                requiredBackEnd('messages', 'UpdateMessage', tempComment, 'POST', function(params) {


                    for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                    {
                        if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
                        {
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("msg", params["msg"]);
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("url", params["url"]);
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("time_stamp", params["time_stamp"]);
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", false);
                            if (params["url"] !== null)
                            {
                                that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("isUrl", true);
                            }
                            else
                            {
                                that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("isUrl", false);
                            }

                        }
                    }
                    that.set('messageContent', "");
                    that.set('newStyleImageSource', null);
                    that.set('newStyleImageName', "");
                    that.set("isUploadPhoto", false);
                    setTimeout(function() {
                        $('#masonry_user_container').masonry("reloadItems");
                    }, 200);



                });
            }
        }

    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    }
}
);


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.EditReplyController = Ember.Controller.extend({
    commenter_photo_url: null,
    replyContent: null,
    isUploadPhoto: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'message', 'userMessage'],
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        if (this.get("currentOwner").get("id") === localStorage.loginStatus)
        {
            this.set("isUserself", true);
        }
        this.set('replyContent', HubStar.get('reply'));
    },
    close: function(id) {

        this.set('replyContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");


        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                {
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", false);
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", true);
                    break;
                }
        }
        this.set("isUploadPhoto", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    removePic: function(id) {

        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    removeOriginPic: function(id) {

    for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                {
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("url",null);
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("isUrl",false);
                    break;
                }
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    updateReply: function(id) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var owner_id = this.get("currentOwner").get("id");
        var replyID = null;
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++) {
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                {
                    if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("url") === null)
                    {
                        replyID = createMessageid();
                    }
                    var date = new Date();
                    var newStyleImage = "";
                    var imageStyleName = "";

                    if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
                    {
                        newStyleImage = this.get("newStyleImageSource");
                    }
                    else
                    {
                        newStyleImage = null;
                    }
                    if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
                    {
                        imageStyleName = this.get('newStyleImageName');
                    }
                    else
                    {
                        imageStyleName = "";
                    }
                    var imageName = "";
                    var imageType = "";

                    if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
                    {
                        var imageName = imageStyleName.split('.');
                        var imageType = imageName[imageName.length - 1];
                    }
                    var replyContent = this.get("replyContent");
                    var url =  this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("url");
                    var tempComment = [owner_id, date.toString(), replyContent, newStyleImage, imageType, imageStyleName, id, replyID,url];

                    tempComment = JSON.stringify(tempComment);
                    var that = this;
                    requiredBackEnd('messages', 'UpdateReply', tempComment, 'POST', function(params) {


                        for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                        {
                            for (var j = 0; j < that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++) {
                                if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                                {
                                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("msg", params["msg"]);
                                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("url", params["url"]);
                                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("time_stamp", params["time_stamp"]);
                                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", false);
                                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", true);
                                    if (params["url"] !== null)
                                    {
                                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("isUrl", true);
                                    }
                                    else
                                    {
                                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("isUrl", false);
                                    }

                                }
                            }
                        }
                        that.get("controllers.message").set("isEdit", true);
                        that.set('replyContent', "");
                        that.set('newStyleImageSource', null);
                        that.set('newStyleImageName', "");
                        that.set("isUploadPhoto", true);
                        setTimeout(function() {
                            $('#masonry_user_container').masonry("reload");
                        }, 200);
                    });
                }
            }
        }
    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 100);
    }
}
);


})();

(function() {


            HubStar.EditingController = Ember.ObjectController.extend({
                newProfile: function(model) {
                    var profile_ID = HubStar.Profile.id;
                    var profile_NAME =  HubStar.Profile.profile_name;


                    var newProfile =  HubStar.Profile.createRecord({
                        id: profile_ID,
                        profile_name: profile_NAME,
                        type: "profile"
                    });

                    //newProfile.get('transaction').commit();
                    HubStar.store.commit();
                    this.transitionTo('profile', newProfile);

                }
//                saveProfile: function() {
//                    HubStar.store.commit();
//                }

            });


})();

(function() {

 
     HubStar.HtmlEditorController = Ember.Controller.extend({
   
    
   
    
    });


})();

(function() {


    HubStar.IndexController = Ember.ArrayController.extend({
        needs: ['application', 'status'],
        loginInfo: "",
        content: [],
        islogin: false,
        search_string: "",
        search_area: "",
        searchResultNum: "",
        time: "",
        newSearch: function() {
            var d = new Date();
            var start = d.getTime();
            var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string")});
            this.set("content", results);
            var stats = Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});
            var that = this;
            stats.addObserver('isLoaded', function() {
                if (stats.get('isLoaded')) {
                    var d = new Date();
                    var end = d.getTime();
                    that.set("searchResultNum", Stat.find('hit').get("hits"));
                    that.getResponseTime(start, end);
                }
            });
        },
        setLogin: function() {
            if (localStorage.loginStatus !== null && localStorage.loginStatus !== "") {
                this.set("islogin", true);
            }
        },
        defaultSearch: function() {
            this.set("loginInfo", localStorage.loginStatus);
            var ac = this.get("controllers.application");
            var st = this.get("controllers.status");
            ac.grapData();
            st.grapData();

            var results = HubStar.Mega.find({});           

            this.set("content", results);
        },
        getResponseTime: function(start, end)
        {
            var totalTime = end - start;
            totalTime += "ms";
            this.set("time", totalTime);
        }
    });


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.InvitePeopleController = Ember.Controller.extend({
    contentFollowerPhoto: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'newConversation', 'conversationItem'],
    isUploadPhoto: false,
    isInvitePeople: false,
    owner: "newConversation",
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    getClientId: function(id, conversationID) {
        this.set('loadingTime', true);
        this.set('clientID', id);
        var dataNew = new Array();
        var conversationContent = this.get('controllers.conversation').get("conversationContent");
        for (var i = 0; i < conversationContent.length; i++)
        {
            if (conversationContent[i]["conversationID"] === conversationID)
            {
                this.set("conversationItem", conversationContent[i]);
                break;
            }
        }
        var that = this;
        requiredBackEnd('followers', 'ReadPic', id, 'POST', function(params) {
            that.set("contentFollowerPhoto", []);

            if (params === undefined)
            {
            }
            else
            {

                if (conversationID !== undefined) {
                    var participation_id = new Array();
                    participation_id = that.get("conversationItem").get("participation_ids").split(',');

                }
                for (var i = 0; i < params.length; i++)
                {

                    if (conversationID === undefined) {
                        dataNew["isAdd"] = false;
                        dataNew["id"] = params[i]["record_id"];
                        dataNew["name"] = params[i]["name"];
                        
                        dataNew["photo_url"] = params[i]["photo_url"];
                        that.get("contentFollowerPhoto").pushObject(dataNew);
                    }
                    else {

                        var flag = false;
                        for (var j = 0; j < participation_id.length; j++)
                        {
                            if (participation_id[j] === params[i]["record_id"])
                            {
                                flag = true;

                                break;
                            }
                        }
                        if (flag !== true)
                        {
                            dataNew["isAdd"] = false;
                            dataNew["id"] = params[i]["record_id"];
                            dataNew["name"] = params[i]["name"];
                            dataNew["photo_url"] = params[i]["photo_url"];
                            that.get("contentFollowerPhoto").pushObject(dataNew);
                        }
                    }
                    dataNew = new Array();
                }
            }
            that.set('loadingTime', false);
        });
    },
    addToList: function(id) {
        for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
        {
            if (this.get("contentFollowerPhoto").objectAt(i).get("id") === id)
            {
                this.get("contentFollowerPhoto").objectAt(i).set("isAdd", !this.get("contentFollowerPhoto").objectAt(i).get("isAdd"));
            }
        }

    },
    reviewPost: function() {
        if (this.get("owner") === "newConversation") {
            this.get("controllers.newConversation").set("isAdded", true);
            this.get("controllers.newConversation").set("contentFollowerPhoto", this.get("contentFollowerPhoto"));
            //console.log(this.get("contentFollowerPhoto"));
          //  this.get("controllers.conversationItem").set("contentFollowerPhotoOld", this.get("contentFollowerPhoto"));
            this.get("controllers.newConversation").set("isInvitePeople", false);

        }
        else if (this.get("owner") === "conversationItem")
        {
            this.get("controllers.conversationItem").set("isAdded", true);
            this.get("controllers.conversationItem").set("contentFollowerPhoto", this.get("contentFollowerPhoto"));
            this.get("controllers.conversationItem").set("isNewPeople", true);
            this.get("controllers.conversationItem").set("isInvitePeople", false);
        }
        this.set("contentFollowerPhoto", null);
    },
    reviewCancel: function() {
        if (this.get("owner") === "newConversation") {
            this.get("controllers.newConversation").set("isInvitePeople", false);
        }
        else if (this.get("owner") === "conversationItem")
        {
            this.get("controllers.conversationItem").set("isInvitePeople", false);
        }

        this.set("contentFollowerPhoto", null);
    }
}
);


})();

(function() {

//HubStar.ItemFollowController = Ember.Controller.extend({
//    model: null,
//    test:"testqqqqqqq",
//    init: function()
//    {
//        console.log(this.get('model'));
//    }
//
//}
//);


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ItemFunctionController = Ember.Controller.extend({
    currentUser: null,
    needs: ['checkingLoginStatus','addCollection','applicationFeedback'],
    init: function()
    {
       if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
    },
    switchCollection: function(model) {

        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            if (model.get("type") === "photo") {
                var photoObj = model.get("photo").objectAt(0);
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = photoObj.get('photo_image_thumbnail_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
            else if (model.get("type") === "article")
            {
                var photoObj = model.get("article").objectAt(0);
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = photoObj.get('article_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }

            else if (model.get("type") === "video")
            {
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = model.get('object_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
        }
    },
    addLike: function(id)
    {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            var mega = HubStar.Mega.find(id);
            var type = mega.get("type");
            var people_like = mega.get("people_like");
            if (people_like === null || people_like === undefined) {
                people_like = "";
            }
            if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
            {
                if (people_like.indexOf(localStorage.loginStatus) !== -1)
                {
                    this.count = mega.get('likes_count');

                }
                else {                  
                    var likeArray = [localStorage.loginStatus, id, type];
                    likeArray = JSON.stringify(likeArray);
                    var that = this;
                    requiredBackEnd('megas', 'addlike', likeArray, 'POST', function(params) {                       
                        params = params + "";
                        var like = params.split(",");
                        mega.set("likes_count", like.length);
                        mega.set("people_like", params);
                        that.count = like.length;
                    });
                }
            }
        }
    },
    shareDisplay: function(id) {
        $('#share_' + id).children('ul').removeClass("hideClass");
    },
    shareHide: function(id) {
        $('#share_' + id).children('ul').addClass("hideClass");
    },
    fbShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var that = this;
            var currntUrl = 'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var caption = '';

            if (this.get('selectedPhoto').get('photo_caption') !== null)
            {
                caption = this.get('selectedPhoto').get('photo_caption');
            }
            else
            {
                caption = '';
            }
            var obj = {
                method: 'feed',
                link: currntUrl,
                picture: this.get('selectedPhoto').get('photo_image_thumbnail_url'),
                name: this.get('selectedPhoto').get('photo_title'),
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }
        if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var that = this;
            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var caption = '';
            if (this.get('selectedVideo').data.video_desc !== null)
            {
                caption = this.get('selectedVideo').data.video_desc;
            }
            else
            {
                caption = '';
            }
            var obj = {
                method: 'feed',
                link: currntUrl,
                picture: this.get('selectedVideo').data.video_img,
                name: this.get('selectedVideo').data.video_title,
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }
        if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var that = this;
            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var caption = '';

            if (this.get('selectedArticle').get('article_body') !== null)
            {
                caption = this.get('selectedArticle').get('article_body');
            }
            else
            {
                caption = '';
            }
            var obj = {
                method: 'feed',
                link: currntUrl,
                picture: this.get('selectedArticle').get('article_image_url'),
                name: this.get('selectedArticle').get('article_headline'),
                caption: 'Trends Ideas',
                description: caption
            };

            function callback(response) {
                if (response && response.post_id) {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                } else {
                    that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
                }
            }

            FB.ui(obj, callback);

            return false;
        }

    },
    //share to social google plus
    gpShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var caption = '';
            if (this.get('selectedPhoto').get('photo_caption') !== null)
            {
                caption = this.get('selectedPhoto').get('photo_caption');
            }
            else
            {
                caption = '';
            }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//            console.log(meta[i]);
//        }
            $("meta[property='og\\:title']").attr("content", this.get('selectedPhoto').get('photo_title'));
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_thumbnail_url'));


            var currntUrl = 'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
        else if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var caption = '';
            if (this.get('selectedArticle').get('article_body') !== null)
            {
                caption = this.get('selectedArticle').get('article_body');
            }
            else
            {
                caption = '';
            }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//            console.log(meta[i]);
//        }
            $("meta[property='og\\:title']").attr("content", this.get('selectedArticle').get('article_headline'));
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedArticle').get('article_image_url'));


            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var caption = '';
            if (this.get('selectedVideo').data.video_desc !== null)
            {
                caption = this.get('selectedVideo').data.video_desc;
            }
            else
            {
                caption = '';
            }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//            console.log(meta[i]);
//        }
            $("meta[property='og\\:title']").attr("content", this.get('selectedVideo').data.video_title);
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedVideo').data.video_img);


            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
    },
    //share to social twitter
    tShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var url = 'https://twitter.com/share?text=' + this.get('selectedPhoto').get('photo_title') + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
        else if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'https://twitter.com/share?text=' + this.get('selectedArticle').get('article_headline') + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'https://twitter.com/share?text=' + this.get('selectedVideo').data.video_title + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
    },
    pShare: function(model) {
        this.shareHide(model.id);
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/photos/' + this.get('selectedPhoto').get('id');
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url')) +
                    '&description=' + encodeURIComponent(this.get('selectedPhoto').get('photo_title'));
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;

        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var currntUrl = 'http://'+document.domain+'/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('selectedVideo').data.video_img) +
                    '&description=' + encodeURIComponent(this.get('selectedVideo').data.video_title);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
        else if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var currntUrl = 'http://'+document.domain+'/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(this.get('selectedArticle').get('article_image_url')) +
                    '&description=' + encodeURIComponent(this.get('selectedArticle').get('article_headline'));
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
    }
}
);


})();

(function() {



HubStar.ItemProfilesController = Ember.Controller.extend({
    profiles: null,
    partnerRemove: "",
    profile_partner_ids: null,
    collections: [],
    itemProfileCollectionStatistics: "",
    itemProfilePartnerStatistics: "",
    isPartner: false,
    profileUrl: "",
    is_authentic_user: false,
    is_profile_editing_mode: false,
    follow_status: false,
    needs: ['profile', 'permission', 'profilePartners', 'userFollowings','checkingLoginStatus'],
    init: function() {
        var address = document.URL;

        if (address.indexOf('profile') !== -1)
        {
            isPartner = true;
            this.checkEditingMode();
        }
        this.set("profiles", HubStar.Mega.find([]));
        var temp = address.indexOf("profiles");
        temp = address.substr(0, temp + 8);
        this.set("profileUrl", temp);
    },
    followThisUser: function(profile)
    {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            if (profile.get("isFollowCurrentUser") === false)
            {
                this.get("controllers.userFollowings").followProfile(profile.get("id"));
                profile.set('isFollowCurrentUser', true);
            }
            else
            {
                this.get("controllers.userFollowings").unFollowProfile(profile.get("id"));
                profile.set('isFollowCurrentUser', false);
            }
    }         
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);

        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            }
        });
        //console.log(is_authentic_user);
        return is_authentic_user;
    },
    dropdownPhotoSetting: function(id) {
        $('#dropdown_id_' + id).toggleClass('hideClass');
    },
    checkEditingMode: function()
    {
        this.set('is_profile_editing_mode', false);
        if (HubStar.get('editingMode') === 'profile') {
            this.set('is_profile_editing_mode', true);
            var proController = this.get('controllers.profile');
            this.set('pageModel', proController.get('model'));
            this.set("is_authentic_user", this.checkAuthenticUser());
        }
        else {
            this.set('is_profile_editing_mode', false);
        }

    },
    removeCollectedItem: function(idDel) {

        this.get('controllers.profilePartners').deleteSelectedPartner(idDel);
        //console.log();
    },
    toProfilePage: function(model) {

        HubStar.set("scrollPartenerPosition", $(window).scrollTop());
        this.transitionToRoute('profile', model);
        $(window).scrollTop(0);
    },
    setPartnerRemove: function() {
        this.set('partnerRemove', false);
    },
    collectionStatistic: function() {
        if (this.get("collections").get("length") !== 0) {
            this.set('itemProfileCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('itemProfileCollectionStatistics', 0);
        }
    },
            
          
            
    partnerStatistic: function() {
        //  this.set("profile_partner_ids", profile.get("profile_partner_ids"));
        if (this.get('profile_partner_ids') !== null) {
            var ids = this.get('profile_partner_ids').split(",");
            this.set('itemProfilePartnerStatistics', ids.get('length'));
        }
        else
        {
            this.set('itemProfilePartnerStatistics', 0);
        }
    }
});


})();

(function() {

HubStar.KeywordController = Ember.Controller.extend({
//    needs: ["profile"],
    
//    dragTargetId: "",
    
//    dragIntoFront: function() {
//        var profileController = this.get('controllers.profile'); 
//        if (this.get('dragTargetIndex') < 0) {
//            
//        } else if (profileController.get('show_keyword_array').get('length')>9) {
//            
//        } else {
//            profileController.get('show_keyword_array').push(profileController.get('show_keyword_array').objectAt(this.get('dragTargetIndex')));
//        }
//    },
//    
//    changeOrder: function() {
//        
//    }
});
HubStar.KeywordController.cancel = function(event) {
    event.preventDefault();
    return false;
};
HubStar.KeywordController.Droppable = Ember.Mixin.create(HubStar.KeywordController, {
    dragEnter: HubStar.KeywordController.cancel,
    dragOver: HubStar.KeywordController.cancel,
    drop: function(event) {
//        var viewId = event.originalEvent.dataTransfer.getData('Text');
//        Ember.View.views[viewId].destroy();
        this.get('controller').dragIntoFront();
        event.preventDefault();
        return false;
    }
});

HubStar.KeywordController.Dragable = Ember.Mixin.create(HubStar.KeywordController,{
    attributeBindings: 'draggable',
    draggable: 'true',
    dragStart: function(event) {
//        var dataTransfer = event.originalEvent.dataTransfer;
        this.get('controller').set('dragTargetIndex', this.get('_parentView').get('contentIndex'));
//        this.set('dragTargetId', this.get('elementId'));
//        dataTransfer.setData('Text', this.get('elementId'));
    }
});

})();

(function() {

HubStar.LoginModalController = Ember.Controller.extend({
     selected_topics: "",
    isAdd: false,
    contentTopic: [
        {id: "1", image: '../images/welcomepage/bedroom.jpg', topic: 'Bedrooms'},
        {id: "2", image: '../images/welcomepage/home-theatre.jpg', topic: 'Home Theatre'},
        {id: "3", image: '../images/welcomepage/interior-living.jpg', topic: 'Interior Living'},
        {id: "4", image: '../images/welcomepage/kitchens.jpg', topic: 'Kitchens'},
        {id: "5", image: '../images/welcomepage/new-homes.jpg', topic: 'New Homes'},
        {id: "6", image: '../images/welcomepage/outdoor-living.jpg', topic: 'Outdoor Living'},
        {id: "7", image: '../images/welcomepage/renovation.jpg', topic: 'Renovation'},
        {id: "8", image: '../images/welcomepage/apartment-design.jpg', topic: 'Apartment Design'},
        {id: "9", image: '../images/welcomepage/civic-design.jpg', topic: 'Civic Design'},
        {id: "10", image: '../images/welcomepage/educational-design.jpg', topic: 'Educational Design'},
        {id: "11", image: '../images/welcomepage/hospitality-design.jpg', topic: 'Hospitality Design'},
        {id: "12", image: '../images/welcomepage/office-design.jpg', topic: 'Office Design'},
        {id: "13", image: '../images/welcomepage/refurbishment.jpg', topic: 'Refurbishment'},
        {id: "14", image: '../images/welcomepage/retail-design.jpg', topic: 'Retail Design'}

    ],
    needs: ['application'],
    init: function() {
this.set('loginUsername', localStorage.userName);
    },
    closePopupLogin: function() {
        HubStar.set('checkLoginStatus', false);
    },
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    login: function() {
        if (this.get('loginUsername') !== null && this.get('loginPassword') !== null && this.get('loginPassword') !== "" && this.get('loginPassword') !== "")
        {
            document.getElementById("loginUsername").setAttribute("class", "login-textfield");
            document.getElementById("loginPassword").setAttribute("class", "login-textfield");

            var loginInfo = [this.get('loginUsername'), this.get('loginPassword'), this.validateEmail(this.get('loginUsername'))];
            var that = this;
            requiredBackEnd('login', 'login', loginInfo, 'POST', function(params) {
                if (params === 1) {
                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
                

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                }// INVALID user name when the user attempts to login.


                else if (params === 0) {

                    document.getElementById("loginUsername").setAttribute("class", "login-textfield error-textfield");
              

                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


                } // INVALID ACCOUNT TYPE; User is trying to login with a user name and password when their account type is a social network login account
                else {

                    if (that.get('loginPassword') === params[0]["PWD_HASH"] && that.get('loginPassword') !== undefined) {
                     
                             var email_activate = params[1];


                        if (email_activate === true)
                        {
                        localStorage.loginStatus =  params[0].COUCHBASE_ID;

                        location.reload();
                        HubStar.set("isLogin", true);
                        HubStar.set('checkLoginStatus', false);
                        that.set('loginUsername', "");
                        that.set('loginPassword', "");
        }
                        else
                        {
                            that.set('loginTime', false);
                            $('.black-tool-tip').css('display', 'none');
                            $('#invalid-account-type').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                              alert("Registration successful! To activate your myTrends account, please click the activation link in the email we just sent you.");
                        }
                    }
                    else {
                        document.getElementById("loginPassword").setAttribute("class", "login-textfield error-textfield");

                        
                        if ($('#incorrect-password').css('display') === 'none') {

                            $('.black-tool-tip').stop();
                            $('.black-tool-tip').css('display', 'none');
                            $('#incorrect-password').animate({opacity: 'toggle'});
                        }// INCORRECT PASSWORD; User is trying to login with incorrect password

                    }
                }
            });
        }
    },
    signUp: function() {

        if (this.checkSignupInfo()) {
            var signupInfo = [this.get('email')];
            requiredBackEnd('login', 'getemail', signupInfo, 'POST', function(params) {
                if (params === 1) {
                    $('#register-with-email-step-2').addClass('active-step');
                    $('#click-register').addClass('active-tab');
                    $('#register-with-email-step-2').animate({height: 'toggle'});
                    $('#register-with-email-drop-down').animate({height: 'toggle'});
                    checkSocial();
                }
                else if (params === 0) {

                    document.getElementById("email").setAttribute("class", "login-textfield error-textfield");

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#email-used-by-social').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


                } // EMAIL ALREADY IN USE; The use has attempted to register with an email address that has already been used via 'register with social account'

                else if (params === 2) {

                    document.getElementById("email").setAttribute("class", "login-textfield error-textfield");


                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#email-in-use').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                }// EMAIL ALREADY IN USE; The user as attempted to register with an email address that is already in use
            });
        }
    },
    selectTopic: function(id, topic) {     
        if (HubStar.get(id)) {
            $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none;");
            if (this.get('selected_topics').indexOf(topic) !== -1) {
                this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));
            }
            HubStar.set(id, false);
        } else {     
           $('#minus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; display:block;");
            if(this.get('selected_topics').length===0){
                this.set('selected_topics', topic);
            }else{              
                this.set('selected_topics', this.get('selected_topics') + "," + topic);    
            }  
             HubStar.set(id, true);                  
        }
    },
    submitSelection: function() {

        $('#register-with-email-step-4').css('display', 'block');
        $('#register-with-email-step-3').css('display', 'none');
        $('#user-login-pane').css('display', 'none');
    },
    next: function() {

        $('#register-with-email-step-3').css('display', 'block');
        
        
    },
    done: function() {
        this.set('loginTime', true);
        var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email'), this.get('region'), this.get('gender'), this.get('age'), this.get('selected_topics')];
        var that = this;
   //      $('#finishRegister').css('display', 'none');
   //       $('#skipRegister').css('display', 'block');   
        requiredBackEnd('login', 'create', createInfo, 'POST', function(params) {
            localStorage.loginStatus = params.COUCHBASE_ID;
            var emailInfo = [params.USER_NAME, params.PWD_HASH];
            requiredBackEnd('emails', 'confirmationemail', emailInfo, 'POST', function(params) {

            });
            setTimeout(function() {
                that.set('first_name', "");
                that.set('last_name', "");
                that.set('email', "");
                that.set('password', "");
                that.set('region', "");
                that.set('gender', "");
                that.set('age', "");
                that.set('loginTime', false);

            }, 2000);
        });
        
    },
//     skip: function(){
//      //  HubStar.set("isLogin", true);
//       this.transitionToRoute("searchIndex");//need to change to current state page
//    },
    
    checkSignupInfo: function() {
        function checkObject(id, input, lengthMin, lengthMax, isEmailValid)
        {
            this.id = id;
            this.input = input;
            this.lengthMin = lengthMin;
            this.lengthMax = lengthMax;
            this.isEmailValid = isEmailValid;
        }
        var checkList = new Array();
        var result;
        var first_name = new checkObject("first_name", this.get('first_name'), 0, 128, null);
        checkList.push(first_name);
        var last_name = new checkObject("last_name", this.get('last_name'), 0, 128, null);
        checkList.push(last_name);
        var email = new checkObject("email", this.get('email'), 0, 45, true);
        checkList.push(email);
        var password = new checkObject("password", this.get('password'), 6, 40, null);
        checkList.push(password);

        for (var i = 0; i < checkList.length; i++)
        {
            var patternEmail = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
            document.getElementById(checkList[i].id).setAttribute("class", "login-textfield");
            if (checkList[i].input !== null && checkList[i].input !== "" && checkList[i].input !== undefined)
            {
                if (checkList[i].input.length > checkList[i].lengthMax || checkList[i].input.length < checkList[i].lengthMin)
                {
                    result = false;

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-password').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;

                }
            }// INVALID PASSWORD; the user has entered a  password that does not meet the requirements (6-40 characters long)


            if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name' || checkList[i].id === 'email' || checkList[i].id === 'password')
            {
                if (checkList[i].input === null || checkList[i].input === "" || checkList[i].input === undefined) {
                    result = false;

                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#missing-fields').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;


                }
            }//MISSING FIELDS; the user has not filled in all the mandatory fields


            if (checkList[i].input !== null && checkList[i].isEmailValid === true)
            {
                if (patternEmail.test(checkList[i].input || checkList[i].input === "")) {
                    result = true;
                }
                else {
                    result = false;
                    $('.black-tool-tip').stop();
                    $('.black-tool-tip').css('display', 'none');
                    $('#invalid-user-name-register').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});

                    document.getElementById(checkList[i].id).setAttribute("class", "login-textfield error-textfield");
                    break;
                }// INVALID user name when the user attempts to login.
            }
        }
        return result;
    },
    setmale: function() {
        this.set('gender', "male");
    },
    setfemale: function() {
        this.set('gender', "female");
    },
    dropdown: function(checking) {
        this.set('isGeoDropdown', !this.get('isGeoDropdown'));
        $('#geo-filter').toggleClass('Geo-Filter-active');
    },
    
    emailSend: function()
    {

        var signupInfo = [this.get('resetPasswordEmail')];
        var that = this;
        requiredBackEnd('login', 'resetemail', signupInfo, 'POST', function(params) {
            if (params === 1) {


                $('.black-tool-tip').stop();
                $('.black-tool-tip').css('display', 'none');
                $('#invalid-user-name').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});


            }// INVALID EMAIL; The user has forgotten their password and inputted an invalid email address
            else if (params === 0) {

                $('.black-tool-tip').stop();
                $('.black-tool-tip').css('display', 'none');
                $('#invalid-account-type-reset').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
            }
            else {
                var emailInfo = [that.get('resetPasswordEmail'), params.USER_NAME, params.PWD_HASH];
                requiredBackEnd('emails', 'forgetpassword', emailInfo, 'POST', function(params) {
                    if (params === 1) {

                        $('.black-tool-tip').stop();
                        $('.black-tool-tip').css('display', 'none');
                        $('#new-password').animate({opacity: 'toggle'}).delay(8000).animate({opacity: 'toggle'});
                        /* forgotten password email sent */
                    }

                });
            }
        });
    }


});


})();

(function() {


HubStar.MasonryCollectionItemsController = Ember.ArrayController.extend({
    content: [],
    uploadImageContent: [],
    title: null,
    collection_id: null,
    is_authentic_user: false,
    is_profile_editing_mode: false,
    uploadOrsubmit: false,
    is_user_editing_mode: false,
    isUser: false,
    isVideoPhoto: false,
    collectionID: "",
    itemID: "",
    profileId: "",
    type: "",
    needs: ['photoCreate', 'profile', 'user', 'permission', 'photoCreateInfoSetting', 'applicationFeedback'],
    user_id: null,
    init: function() {
    },
    selectModelForUser: function(collection_id) {
        this.set('content', []);
        this.set('type', "user");
        this.set('collection_id', collection_id);
        this.set('');
        this.set("isUser", true);

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set("id", user_id);
        this.set('user_id', user_id);
        this.set('collections', this.get('controllers.user').get('collections'));
        for (var i = 0; i < this.get("collections").get("length"); i++)
        {
            if (this.get("collections").objectAt(i).get("id") === collection_id)
            {
                this.set('title', this.get("collections").objectAt(i).get('title'));
            }
        }
        var results = HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < this.get("content").length; i++) {
                    var tempObject = results.objectAt(i);
                    that.get("content").pushObject(tempObject);
                }
            }
        });
        this.checkEditingMode();
    },
    selectModelForProfile: function(collection_id, title,profileId) {
        this.set('collection_id', collection_id);
        var address = document.URL;
        
        var owner_id = profileId;
        this.set("profileId", profileId);    
        this.resetContent();
        this.set('type', "profile");
        this.set("isUser", true); //if click from search board, isUser is false
          
        if (title === undefined)
        {
            var arrayUrl;

            var results = HubStar.Collection.find({RquireType: "personalCollection", profile_id: owner_id, collection_id: collection_id});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    var titleFill = results.objectAt(0).get("title");
                    that.set('title', titleFill);
                }
            });
        }
        else {
             this.set("id", owner_id);
            this.set('title', title);
        }
        this.checkEditingMode();
    }
    ,
    goBack: function() {
        var lastposition = HubStar.get("scrollCollectionPosition");
        //window.history.back();

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[1];
        if (user_id === "profiles")
        {

            // this.
            this.get('controllers.profile').goToProfileRoute(address.split("#")[1].split("/")[2]);

        }
        else if (user_id === "users")
        {
            this.get('controllers.user').goToUserRoute();
        }

        var lastposition = HubStar.get("scrollCollectionPosition");

        setTimeout(function() {

            $(window).scrollTop(lastposition);

        }, 200);
    }
    ,
    newUpload: function() {

        $('#ownerUpload').attr('style', 'display:block');
        $('#tagetUplaod').attr('style', 'display:none');
        $('#addNew').toggleClass('col2');
        $('#addNew').toggleClass('col4');
        var photoCreate = this.get('controllers.photoCreate');
        photoCreate.init();
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 200);
    },
    back: function() {
        this.resetContent();
        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.set("fileSize", 0);
        $('#ownerUpload').attr('style', 'display:none');
        $('#tagetUplaod').attr('style', 'display:block');
        this.set('uploadOrsubmit', false);
        $('#addNew').toggleClass('col2');
        $('#addNew').toggleClass('col4');
        this.reLayout();

        HubStar.set('isNewUpload', true);
        $('#dragAndDroppArea').attr('style', "display:none");
    },
    removeCollectedItem: function(collectionID, itemID, type)
    {
        var message = "Remove this item from your collection?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        this.dropdownPhotoSetting(itemID);
        if (this.get('willDelete')) {
            if (type === "user") {
                var currentUser = HubStar.User.find(localStorage.loginStatus);
                var currentCollection = null;
                var collectedColletionids = null;


                for (var i = 0; i < currentUser.get('collections').get('length'); i++) {
                    if (currentUser.get('collections').objectAt(i).get('id') === this.get('collectionID'))
                    {
                        currentCollection = currentUser.get('collections').objectAt(i);
                        collectedColletionids = currentCollection.get('collection_ids');
                        if (collectedColletionids === null) {
                            collectedColletionids = "";
                        }
                        var tempcollectedColletionids = collectedColletionids.replace(this.get('itemID') + ",", "");
                        tempcollectedColletionids = tempcollectedColletionids.replace(this.get('itemID'), "");
                        currentCollection.set('collection_ids', tempcollectedColletionids);
                        HubStar.store.save();
                        break;
                    }
                }
            }
            else
            {
                var profile = HubStar.Profile.find(this.get("profileId"));
                for (var i = 0; i < this.get('content').length; i++) {
                    if (this.get('content').objectAt(i).get('id') === this.get('itemID')) {
                        var tempItem = this.get('content').objectAt(i);
                        if (this.get('type') === 'profile') {
                            var item = HubStar.Mega.find(this.get('itemID'));

                            if (this.get("profileId") !== item.get("owner_id") || item.get("collection_id") !== this.get('collectionID'))
                            {

                                for (var j = 0; j < profile.get('collections').get('length'); j++) {
                                    if (profile.get('collections').objectAt(j).get('id') === this.get('collectionID'))
                                    {
                                        currentCollection = profile.get('collections').objectAt(j);
                                        collectedColletionids = currentCollection.get('collection_ids');
                                        if (collectedColletionids === null) {
                                            collectedColletionids = "";
                                        }

                                        var ids = collectedColletionids.split(",");
                                        var delResult = "";
                                        for (var i = 0; i < ids.length; i++)
                                        {
                                            if (this.get('itemID') !== ids[i])
                                            {
                                                delResult = delResult + ids[i] + ",";
                                            }
                                        }
                                        delResult = delResult.substr(0, delResult.length - 1);

                                        currentCollection.set('collection_ids', delResult);
                                        HubStar.store.save();
                                        break;
                                    }
                                }
                            }
                            else {
                                tempItem.deleteRecord();
                            }
                        }
                        this.get('content').removeObject(tempItem);
                        HubStar.store.save();
                        break;
                    }
                }
            }
            this.reLayout();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            this.set('collectionID', collectionID);
            this.set('itemID', itemID);
            this.set('type', type);
        }
    },
    reLayout: function() {
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 1000);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
        HubStar.set('data', null);
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);

        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            }
        });
        return is_authentic_user;
    },
    changeCollectionCover: function(id, collection_id, HubStarModel, article) {

        this.dropdownPhotoSetting(id);
        var Mega = HubStar.Mega.find(id);
        //var coverImge = Mega.get('photo').objectAt(0).get('photo_image_original_url');
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var userOrprofile = HubStarModel.find(owner_id).get('collections');
        if (article === "article")
        {
            var coverImge = Mega.get('article').objectAt(0).get('article_image_url');
        }
        else {
            var coverImge = Mega.get('photo').objectAt(0).get('photo_image_original_url');
        }

        for (var i = 0; i < userOrprofile.get('content').length; i++) {

            if (userOrprofile.objectAt(i).id === collection_id) {

                var currentCollection = userOrprofile.objectAt(i);
                currentCollection.set('cover', coverImge);
                currentCollection.set('optional', owner_id);
                HubStar.store.save();
                this.get('controllers.applicationFeedback').statusObserver(null, "Updated successfully.");
                break;
            }
        }
    },
    changeCollectionArticleCover: function(id, collection_id, HubStarModel) {
        this.dropdownPhotoSetting(id);
        var Mega = HubStar.Mega.find(id);
        var coverImge = Mega.get('article').objectAt(0).get('article_image_url');
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var userOrprofile = HubStarModel.find(owner_id).get('collections');
        // var that = this;

        for (var i = 0; i < userOrprofile.get('content').length; i++) {

            if (userOrprofile.objectAt(i).id === collection_id) {

                var currentCollection = userOrprofile.objectAt(i);
                currentCollection.set('cover', coverImge);
                currentCollection.set('optional', owner_id);
                HubStar.store.save();
                this.get('controllers.applicationFeedback').statusObserver(null, "Updated successfully.");
                break;
            }
        }
    },
//    transitionToArticle: function(id) {
//
//        this.transitionTo("article", HubStar.Article.find(id));
//    },
    dropdownPhotoSetting: function(id) {

        $('#dropdown_id_' + id).toggleClass('hideClass');

    },
    resetContent: function()
    {
        
        this.set('content', []);
        this.set('uploadImageContent', []);
        var address = document.URL;

        var owner_id = this.get("profileId");
        var title = this.get('collection_id');
       
        var results = HubStar.Mega.find({RquireType: "collection", "collection_id": title, "owner_profile_id": owner_id});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < this.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    if (tempmega.get('profile').get('length') === 0 && tempmega.get('user').get('length') === 0 && (that.get('collection_id') === tempmega.get('collection_id')))
                    {
                        that.get("content").pushObject(tempmega);
                    }
                }
            }
        });
        var pics = HubStar.Mega.find({RquireType: "profileCollection", user_id: owner_id, collection_id: title});
        var that = this;
        pics.addObserver('isLoaded', function() {
            if (pics.get('isLoaded')) {
                for (var i = 0; i < this.get("content").length; i++) {
                    var tempObject = pics.objectAt(i);
                    that.get("content").pushObject(tempObject);
                }
            }
        });
    },
    checkEditingMode: function()
    {
        this.set('is_profile_editing_mode', false);
        this.set('is_user_editing_mode', false);
        if (HubStar.get('editingMode') === 'profile') {
            this.set('is_profile_editing_mode', true);
            var proController = this.get('controllers.profile');
            this.set('pageModel', proController.get('model'));
            this.set("is_authentic_user", this.checkAuthenticUser());
        }
        else if (HubStar.get('editingMode') === 'user') {
            this.set('is_user_editing_mode', true);
            var userController = this.get('controllers.user');
            this.set('is_authentic_user', userController.get('is_authentic_user'));
        }
        else {
            this.set('is_profile_editing_mode', false);
            this.set('is_user_editing_mode', false);
        }
        this.reLayout();

    }, photoUpload: function(e) {


        HubStar.store.save();

    }

});


})();

(function() {

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MegaController = Ember.ArrayController.extend({
    content: [],
    clickOrRoute: false,
    megaResouce: null,
    temp: null,
    image_no: 1,
    from: null,
    selectedPhoto: null,
    isSelected: false,
    needs: ['application', 'collection', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'checkingLoginStatus', 'masonryCollectionItems', 'editComment'],
    currentUser: null,
    currentUserProfile: null,
    photo_album_id: null,
    photo_thumb_id: null,
    is_authentic_user: false,
    selectPhoto: false,
    parentControler: null,
    accessFromProfile: false,
    is_article_video: true,
    sharePhotoUrl: '',
    type: null,
    selectType: null,
    loadingTime: false,
    sharePhotoName: '',
    makeSureDelete: false,
    willDelete: false,
    init: function()
    {
   
    },
    findSelectedItemIndex: function() {
        content = this.get('content');
        for (var index = 0; index <= content.get('length'); index++) {
            if (this.get('selectedPhoto') === content.objectAt(index)) {
                return index;
            }
        }
        return 0;
    },
    setBack: function()
    {

        var address = document.URL;
        var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
        var id = address.split("#")[1].split("/")[2];
        var collection_id = address.split("#")[1].split("/")[4];
        var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
        var user_photo_id = address.split("#")[1].split("/")[8];
        if (type === "users")
        {
            var user = HubStar.User.find(id);
            if (user_photo_id !== undefined || colectionType === "article" || colectionType === "photo") //type:article means it 
            {
                for (var i = 0; i < user.get('collections').get("length"); i++) {
                    var data = user.get('collections').objectAt(i);
                    if (data.id === collection_id) {
                        break;
                    }
                }

                this.transitionTo("collection", data); //user
            }
            else
            {
                window.history.back();
            }
        }
        else if (type === "photos")
        {

            this.closeWindow();
        }
        else
        {

            window.history.back();
        }
    },
    previesImage: function() {
        if (!this.get('selectedPhoto')) {
            this.set('selectedPhoto', this.get('content').get('lastObject'));

        }

        var selectedIndex = this.findSelectedItemIndex();
        selectedIndex--;
        if (selectedIndex < 0) {
            selectedIndex = this.get('content').get('length') - 1;
            this.set('image_no', this.get('content').get('length'));
        }
        this.set("selectPhoto", true);
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        if (this.get("controllers.masonryCollectionItems").get("type") === "user")
        {
            this.transitionTo("userPhoto", this.get("megaResouce"));
        }
        else if (this.get("selectType") === "profile")
        {
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];


            var collection_id = address.split("#")[1].split("/")[4];
            var profile = HubStar.Profile.find(owner_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }

            this.transitionTo("profileCollection", data);
            this.transitionTo("profilePhoto", this.get("megaResouce"));
        }
        else
        {
            this.transitionTo("photo", this.get("megaResouce"));
        }
        this.selectedImage(this.get('selectedPhoto').id);

    },
    nextImage: function() {
        if (!this.get('selectedPhoto')) {
            this.set('selectedPhoto', this.get('content').get('firstObject'));
        }
        var selectedIndex = this.findSelectedItemIndex();
        selectedIndex++;
        if (selectedIndex >= (this.get('content').get('length'))) {
            this.set('image_no', 1);
            selectedIndex = 0;
        }
        this.set("selectPhoto", true);
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        if (this.get("controllers.masonryCollectionItems").get("type") === "user")
        {
            this.transitionTo("userPhoto", this.get("megaResouce"));
        }
        else if (this.get("selectType") === "profile")
        {
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];


            var collection_id = address.split("#")[1].split("/")[4];
            var profile = HubStar.Profile.find(owner_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }
            this.transitionTo("profileCollection", data);
            this.transitionTo("profilePhoto", this.get("megaResouce"));
        }
        else
        {
            this.transitionTo("photo", this.get("megaResouce"));
        }
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);

        this.selectedImage(this.get('selectedPhoto').id);


    },
    getInitData: function(megaObject) {

        if (megaObject.get("isLoaded")) {
            this.set("is_article_video", true);

            if (megaObject.get("type") === 'article')
            {

                var photoUrl = megaObject.get("article").objectAt(0).get("article_image_url");
                var photoObj = megaObject.set('photo_image_original_url', photoUrl);
                photoObj.set("photo_title", megaObject.get("article").objectAt(0).get("article_headline"));
                photoObj.set("photo_caption", megaObject.get("article").objectAt(0).get("article_body"));
                this.set("is_article_video", false);
                photoObj.set("photo_image_thumbnail_url", photoUrl);
            }
            else if (megaObject.get("type") === 'video')
            {

                var photoUrl = megaObject.get("videoes").objectAt(0).get("videoImg");
                var photoObj = megaObject.set('photo_image_original_url', photoUrl);

                photoObj.set("photo_title", megaObject.get("videoes").objectAt(0).get("videoTitle"));
                photoObj.set("photo_caption", megaObject.get("videoes").objectAt(0).get("videoDesc"));
                this.set("is_article_video", false);
                photoObj.set("photo_image_thumbnail_url", photoUrl);
            }
            else
            {

                var photoObj = megaObject.get('photo').objectAt(0);
                this.set("currentUser", HubStar.User.find(localStorage.loginStatus));


            }
            if (this.get("selectPhoto") === false)   //selectPhoto is user to control left or right operation
            {

                this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
                this.set("content", []);
//                this.set('image_no', 1);
                this.set("selectedPhoto", photoObj);
                this.get("content").pushObject(photoObj);
                var megaResouce = HubStar.Mega.find(megaObject.id);
                this.set('megaResouce', megaResouce);
                this.set("photo_album_id", "album_" + megaObject.id);
                this.set("photo_thumb_id", "thumb_" + megaObject.id);
                if (megaObject.get("type") === 'article' || megaObject.get("type") === 'video')
                {
                    if (this.get("controllers.masonryCollectionItems").get("type") === "user")
                    {

                        this.addRelatedCollectionItemData(megaObject);
                    }
                    else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
                    {

                        this.addProfileRelatedData(megaObject);
                    }

                }
                else
                {
                    if (this.get("controllers.masonryCollectionItems").get("type") === "user") //it is for user's collection
                    {

                        this.addRelatedCollectionItemData(megaObject);
                    }
                    else if (this.get("selectType") === "profile")
                    {

                        this.addProfileRelatedData(megaObject);
                    }
                    else
                    {

                        this.addRelatedData(megaObject);  //it is for profile's collection
                    }
                    this.checkAuthenticUser();
                    this.getCommentsById(megaObject.id);
                }
            }
        }

    },
    addRelatedData: function(mega)
    {
        var collection_id = mega.get("collection_id");
        var owner_profile_id = mega.get("owner_id");

        var isProfileIDExist = this.isParamExist(owner_profile_id);
        var isCollectionIDExist = this.isParamExist(collection_id);
        var that = this;
        if (isProfileIDExist && isCollectionIDExist) {
            var data = HubStar.Mega.find({RequireType: "collection", "collection_id": collection_id, "owner_profile_id": owner_profile_id});
            data.addObserver('isLoaded', function() {
                if (data.get('isLoaded')) {
                    for (var i = 0; i < this.get("content").length; i++) {
                        var id = this.get("content").objectAt(i).id;

                        if (HubStar.Mega.find(id).get('photo').get('length') === 1 && mega.get('id') !== id)
                        {
                            if (HubStar.Mega.find(id).get('collection_id') === collection_id) {
                                // that.setPhotoStatus(HubStar.Mega.find(id).get("comments"));
                                that.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
                            }
                        }
                    }
                }
            });
        }
    },
    addProfileRelatedData: function(mega)
    {
        var a = document.URL;
        var collection_id = a.split("#")[1].split("/")[4];


        if (this.get("clickOrRoute") === false) //it  accesses the collection photo by click
        {
            var photoContent = "";
            photoContent = this.get("controllers.masonryCollectionItems").get("content");

            var isCollectionIDExist = this.isParamExist(collection_id);

            if ((isCollectionIDExist || mega.get("type") === "video")) {

                for (var i = 0; i < photoContent.length; i++) {

                    if (photoContent.objectAt(i).get("type") === "photo")
                    {
                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {

                            this.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "article")
                    {

                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("article").objectAt(0).get("article_image_url");
                            photoContent.objectAt(i).set("photo_title", photoContent.objectAt(i).get("article").objectAt(0).get("article_headline"));
                            photoContent.objectAt(i).set("photo_caption", photoContent.objectAt(i).get("article").objectAt(0).get("article_body"));
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);

                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "video")
                    {


                        var id = photoContent.objectAt(i).get("id");
                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoImg");
                            var object_title = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoTitle");
                            var photo_caption = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoDesc");
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);
                            photoContent.objectAt(i).set("photo_title", object_title);
                            photoContent.objectAt(i).set("photo_caption", photo_caption);
                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                }
            }
        }
        else if (this.get("clickOrRoute") === true) // it  assesses the collection photo from route
        {
            var photoContent = new Array();
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];
            var profile = HubStar.Profile.find(owner_id);
            var id = "";
            for (var j = 0; j < profile.get('collections').get('length'); j++) {
                if (profile.get('collections').objectAt(j).get('id') === collection_id)
                {
                    id = profile.get('collections').objectAt(j).get('optional');
                }
            }


            var results = HubStar.Mega.find({RquireType: "collection", "collection_id": collection_id, "owner_profile_id": id});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    for (var i = 0; i < this.get("length"); i++) {
                        var tempmega = results.objectAt(i);
                        if (tempmega.get('profile').get('length') === 0 && tempmega.get('user').get('length') === 0 && (collection_id === tempmega.get('collection_id')))
                        {
                            if (that.get("content").objectAt(0).get("id") !== tempmega.get("id")) {
                                that.get("content").pushObject(tempmega.get('photo').objectAt(0));
                            }
                        }
                    }





                }
            });
            var pics = HubStar.Mega.find({RquireType: "profileCollection", user_id: id, collection_id: collection_id});
            var that = this;
            pics.addObserver('isLoaded', function() {
                if (pics.get('isLoaded')) {

                    for (var i = 0; i < pics.get("length"); i++) {

                        if (pics.objectAt(i).get("type") === "photo")
                        {
                            if (that.get("content").objectAt(0).get("id") !== pics.objectAt(i).get("id")) {
                                var idd = pics.objectAt(i).get("id");

                                that.get("content").pushObject(pics.objectAt(i).get('photo').objectAt(0));
                            }

                        }
                        else if (pics.objectAt(i).get("type") === "article")
                        {
                            if (that.get("content").objectAt(0).get("id") !== pics.objectAt(i).get("id")) {
                                var idd = pics.objectAt(i).get("id");

                                var photoUrl = pics.objectAt(i).get("article").objectAt(0).get("article_image_url");
                                var article = pics.objectAt(i);
                                article.set("photo_image_original_url", photoUrl);
                                article.set("photo_image_thumbnail_url", photoUrl);
                                that.get("content").pushObject(article);
                            }

                        }
                        else if (pics.objectAt(i).get("type") === "video")
                        {

                            if (that.get("content").objectAt(0).get("id") !== pics.objectAt(i).get("id")) {
                                var idd = pics.objectAt(i).get("id");
                                var photoUrl = pics.objectAt(i).get("videoes").objectAt(0).get("videoImg");





                                var article = pics.objectAt(i);
                                article.set("photo_image_original_url", photoUrl);
                                article.set("photo_image_thumbnail_url", photoUrl);
                                that.get("content").pushObject(article);
                            }
                        }
                    }

                }
            });



        }
        this.set("clickOrRoute", false);
    },
    addRelatedCollectionItemData: function(mega)
    {
        var collection_id = mega.get("collection_id");
        var owner_profile_id = mega.get("owner_id");

        if (this.get("clickOrRoute") === false) //it  accesses the collection photo by click
        {
            var photoContent = "";
            photoContent = this.get("controllers.masonryCollectionItems").get("content");

            var isProfileIDExist = this.isParamExist(owner_profile_id);
            var isCollectionIDExist = this.isParamExist(collection_id);

            if (isProfileIDExist && (isCollectionIDExist || mega.get("type") === "video")) {

                for (var i = 0; i < photoContent.length; i++) {

                    if (photoContent.objectAt(i).get("type") === "photo")
                    {
                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {

                            this.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "article")
                    {

                        var id = photoContent.objectAt(i).get("id");

                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("article").objectAt(0).get("article_image_url");
                            photoContent.objectAt(i).set("photo_title", photoContent.objectAt(i).get("article").objectAt(0).get("article_headline"));
                            photoContent.objectAt(i).set("photo_caption", photoContent.objectAt(i).get("article").objectAt(0).get("article_body"));
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);

                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                    else if (photoContent.objectAt(i).get("type") === "video")
                    {


                        var id = photoContent.objectAt(i).get("id");
                        if (this.get("content").objectAt(0).get('id') !== id)
                        {
                            var photoUrl = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoImg");
                            var object_title = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoTitle");
                            var photo_caption = photoContent.objectAt(i).get("videoes").objectAt(0).get("videoDesc");
                            photoContent.objectAt(i).set("photo_image_original_url", photoUrl);
                            photoContent.objectAt(i).set("photo_image_thumbnail_url", photoUrl);
                            photoContent.objectAt(i).set("photo_title", object_title);
                            photoContent.objectAt(i).set("photo_caption", photo_caption);
                            this.get("content").pushObject(photoContent.objectAt(i));
                        }
                    }
                }
            }
        }
        else if (this.get("clickOrRoute") === true) // it  assesses the collection photo from route
        {
            var photoContent = new Array();
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var results = HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {

                    for (var i = 0; i < this.get("content").length; i++) {
                        var tempObject = this.get("content").objectAt(i);
                        photoContent.pushObject(tempObject);
                    }
                    for (var i = 0; i < photoContent.length; i++) {
                        if (photoContent.objectAt(i).record.get("type") === "photo")
                        {
                            var id = photoContent.objectAt(i).record.get("id");

                            if (that.get("content").objectAt(0).get('id') !== id)
                            {
                                that.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));

                            }
                        }
                        else if (photoContent.objectAt(i).record.get("type") === "article")
                        {

                            var id = photoContent.objectAt(i).record.get("id");
                            if (that.get("content").objectAt(0).get('id') !== id)
                            {
                                var photoUrl = photoContent.objectAt(i).record.get("article").objectAt(0).get("article_image_url");
                                var article = HubStar.Mega.find(id);
                                if (that.get("content").objectAt(0).get('id') !== id)
                                {
                                    article.set("photo_image_original_url", photoUrl);
                                    article.set("photo_image_thumbnail_url", photoUrl);
                                    that.get("content").pushObject(article);
                                }
                            }
                        }
                        else if (photoContent.objectAt(i).record.get("type") === "video")
                        {
                            var id = photoContent.objectAt(i).record.get("id");
                            if (that.get("content").objectAt(0).get('id') !== id)
                            {
                                var photoUrl = photoContent.objectAt(i).record.get("videoes").objectAt(0).get("videoImg");

                                var article = HubStar.Mega.find(id);
                                article.set("photo_image_original_url", photoUrl);
                                article.set("photo_image_thumbnail_url", photoUrl);
                                that.get("content").pushObject(article);
                            }
                        }
                    }

                }
            });

        }
        this.set("clickOrRoute", false);
    },
    selectImage: function(e) {

        this.set('megaResouce', HubStar.Mega.find(e));


        if (this.get('megaResouce').get("type") === "photo")
        {
            this.set('selectedPhoto', this.get('megaResouce').get('photo').objectAt(0));
            if (this.get("controllers.masonryCollectionItems").get("type") === "user")
            {
                this.transitionTo("userPhoto", this.get("megaResouce").get('photo').objectAt(0));
            }
            else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {
                var address = document.URL;
                var owner_id = address.split("#")[1].split("/")[2];


                var collection_id = address.split("#")[1].split("/")[4];
                var profile = HubStar.Profile.find(owner_id);
                for (var i = 0; i < profile.get('collections').get("length"); i++) {
                    var data = profile.get('collections').objectAt(i);
                    if (data.id === collection_id) {
                        break;
                    }
                }

                this.transitionTo("profileCollection", data);

                this.transitionTo("profilePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
            else
            {
                this.transitionTo("photo", this.get("megaResouce"));
            }
        }
        else if (this.get('megaResouce').get("type") === "article") //different types of photo in mega
        {
            this.set('selectedPhoto', this.get('megaResouce'));
            if (this.get("controllers.masonryCollectionItems").get("type") === "user")
            {
                this.transitionTo("userPhoto", this.get("megaResouce"));
            }
            else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profilePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
        }
        else if (this.get('megaResouce').get("type") === "video")
        {
            this.set('selectedPhoto', this.get('megaResouce'));
            if (this.get("controllers.masonryCollectionItems").get("type") === "user")
            {
                this.transitionTo("userPhoto", this.get("megaResouce"));
            }
            else if (this.get("controllers.masonryCollectionItems").get("type") === "profile")
            {

                this.transitionTo("profilePhoto", this.get("megaResouce").get('photo').objectAt(0));

            }
        }
        this.set("selectedPhoto", this.get('selectedPhoto'));

        var contents = this.get('content');
        var selectedIndex = 1;
        for (var index = 0; index <= contents.get('length') - 1; index++) {
            if (this.get('selectedPhoto').get("id") === contents.objectAt(index).id) {
                selectedIndex = index + 1;
            }
        }

        if (selectedIndex >= (this.get('content').get('length') + 1)) {
            this.set('image_no', 1);
            selectedIndex = 1;
        }
        this.set('image_no', selectedIndex);
        this.selectedImage(e);
    },
    selectedImage: function(id) {
        var selectedImage_id = "#" + id;
        $('.photo_original_style').removeClass('selected_image_style');
        $(selectedImage_id).addClass('selected_image_style');
    },
    isParamExist: function(param)
    {
        var result = (param !== null && param !== undefined);
        return result;
    },
    dropdownPhotoSetting: function() {
        this.set('sharePhotoUrl', this.get('selectedPhoto').get('photo_image_thumbnail_url'));
        this.set('sharePhotoName', this.get('selectedPhoto').get('photo_title'));
        $('#dropdown_id_').toggleClass('hideClass');
    },
    switchCollection: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var addCollectionController = this.get('controllers.addCollection');
            var selectid = this.get('selectedPhoto').id;
            addCollectionController.setImageID(selectid);
            var tempUrl = this.get('selectedPhoto').get('photo_image_thumbnail_url');
            addCollectionController.setThumbnailUrl(tempUrl);
            addCollectionController.setUser();
            addCollectionController.setRelatedController('photo');
            this.set('collectable', !this.get('collectable'));
        }
    },
    keydown: function(e) {
        var currKey = 0, e = e || event;


        currKey = e.keyCode || e.which || e.charCode;    //支持IE、FF
        if (currKey === 27) {
            window.history.back();

        }
    },
    closeWindow: function() {
     this.set('image_no', 1);
        this.set('collectable', false);
        this.set('contact', false);
        var address = document.URL;
        if (this.get('controllers.masonryCollectionItems').get("type") === "profile")
        {
            if (this.get("from") !== "profile") //from : profile means  close from the profile collection's photo
            {
                this.transitionTo("indexIndex"); //search page
            }
            else
            {
                //   var collection_id = address.split("#")[1].split("/")[4];


                var address = document.URL;
                var collection_id = address.split("#")[1].split("/")[4];
                var owner_id = address.split("#")[1].split("/")[2];
                var profile = HubStar.Profile.find(owner_id);
                var data = null;
                for (var i = 0; i < profile.get('collections').get("length"); i++) {
                    data = profile.get('collections').objectAt(i);
                    if (data.id === collection_id) {
                        break;
                    }
                }

                this.set("selectPhoto", false);
                this.transitionTo("profile", profile); // transition to profile
                this.transitionTo("profileCollection", data);
            }
        }
        else
        {
            var collection_id = address.split("#")[1].split("/")[4];
            var id = address.split("#")[1].split("/")[2]; //user id
            var user = HubStar.User.find(id);
            var data = null;

            for (var i = 0; i < user.get('collections').get("length"); i++) {
                data = user.get('collections').objectAt(i);
                if (data.id === collection_id) {

                    break;
                }
            }
            this.set("selectPhoto", false);
            this.transitionTo("collection", data); //user
        }

    },
    editingContactForm: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var contactController = this.get('controllers.contact');
            var selectid = this.get('selectedPhoto').id;
            this.get("controllers.contact").set('secondStepOfContactEmail', false);
            this.get("controllers.contact").set('firstStepOfContactEmail', false);
            contactController.setSelectedMega(selectid);
            contactController.selectionCheckBox();

            this.set('contact', !this.get('contact'));
        }

    }
    ,
    closeContact: function() {
        this.set('contact', false);
    },
    EditDelete: function(id, time_stamp) {
    },
    EditDeleteLeave: function(id, time_stamp) {

    },
    addComment: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var commentContent = this.get('commentContent');
            if (commentContent) {
                var comments = this.get('megaResouce').get('comments');
//            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
                var commenter_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
                var commenter_id = this.get("currentUser").get('id');
                var name = this.get("currentUser").get('display_name');
                var date = new Date();
                var message_id = createMessageid() + commenter_id;
                var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                    "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                    "is_delete": false, optional: this.get('megaResouce').get('type') + '/' + this.get('megaResouce').get('id')});
                comments.insertAt(0, tempComment);
                comments.store.save();
                this.set('commentContent', '');
                $('#addcommetBut').attr('style', 'display:block');
                $('#commentBox').attr('style', 'display:none');
            }
        }
    },
    removeComment: function(object)
    {
        var message = "Delete this comment?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.removeCommentItem(object);
            this.cancelDelete();
        } else {
            this.set("obj", object);
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeCommentItem: function(object)
    {
        var id = this.get('megaResouce').get("id");
        var message_id = object.get("message_id");
        var delInfo = [id, message_id];

        delInfo = JSON.stringify(delInfo);
        var that = this;
        this.get('megaResouce').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeletePhotoComment', delInfo, 'POST', function(params) {
        });
    },
    updateComment: function(object) {
        this.get("controllers.editComment").setRelatedController("mega");
        var comments = this.get('megaResouce').get('comments');
        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("message_id") === object.get("message_id"))
            {
                object.set("isEdit", !object.get("isEdit"));
            }
            else
            {
                comments.objectAt(i).set("isEdit", false);
            }
        }
        var msg = object.get("content");
        HubStar.set("updateCommentmsg", msg);
    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("commenter_id") === localStorage.loginStatus)
            {
                comments.objectAt(i).set("isUserSelf", true);
            }
        }
        this.set('thisComments', comments);
    },
    dateTImeStamp: function(date) {
        if (date === "" || date === null || date === undefined) {
            return "";
        } else {
            var matches = date.match('^[0-9]+$');
            if (matches !== null) {
                return moment.unix(date).valueOf();
            } else {
                return moment(date).valueOf();
            }
        }
    },
    editingPhotoMegaData: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    yes: function(photoObject) {
        var photo_title = this.get('selectedPhoto.photo_title');
        var photo_caption = this.get('selectedPhoto.photo_caption');
        var link_text = this.get('selectedPhoto.link_text');
        var link_url = this.get('selectedPhoto.link_url');
        photoObject.set('photo_title', photo_title);
        photoObject.set('photo_caption', photo_caption);
        photoObject.set('link_text', link_text);
        photoObject.set('link_url', link_url);
        photoObject.store.save();
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    no: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user);
            }
        });
    },
    // share to social facebook
    fbShare: function() {
        this.dropdownPhotoSetting();
        var that = this;
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        var caption = '';

        if (this.get('selectedPhoto').get('photo_caption') !== null)
        {
            caption = this.get('selectedPhoto').get('photo_caption');
        }
        else
        {
            caption = '';
        }
        var descript = this.get('selectedPhoto').get('photo_title');
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }



        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.get('selectedPhoto').get('photo_image_thumbnail_url'),
            name: descript,
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function() {
        this.dropdownPhotoSetting();
        var caption = '';
        if (this.get('selectedPhoto').get('photo_caption') !== null)
        {
            caption = this.get('selectedPhoto').get('photo_caption');
        }
        else
        {
            caption = '';
        }
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        var descript = this.get('selectedPhoto').get('photo_title');
        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }
        $("meta[property='og\\:title']").attr("content", descript);
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_thumbnail_url'));

        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);



        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function() {
        this.dropdownPhotoSetting();
        var descript = this.get('selectedPhoto').get('photo_title');
        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }
        var url = 'https://twitter.com/share?text=' + descript + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {
        this.dropdownPhotoSetting();

        var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');

        var descript = this.get('selectedPhoto').get('photo_title');

        if (this.get('selectedPhoto').get("type") === "article")
        {
            descript = this.get('selectedPhoto').get('article').objectAt(0).get("article_headline");
            currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedPhoto').get('id');
        }
        else if (this.get('selectedPhoto').get("type") === "video")
        {
            descript = this.get('selectedPhoto').get('videoes').objectAt(0).get("videoTitle");
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedPhoto').get('id');
        }

        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url')) +
                '&description=' + encodeURIComponent(descript);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MegaCreateController = Ember.ArrayController.extend({
    createNewMega: function(ProfileMega, testID, collectionId, type)
    {
        
        var mega = HubStar.Mega.createRecord({
            "id": testID,
            "accessed": ProfileMega.get("accessed"),
            "boost": ProfileMega.get("boost"),
            "owner_type": "profiles",
            "is_active": false,
            "region": ProfileMega.get("profile_regoin"),
            "topic": null,
            "type": type,
            "category": ProfileMega.get("category"),
            "creator": localStorage.loginStatus,
            "country": ProfileMega.get("country"),
            "collection_id": collectionId,
            "deleted": null,
            "domains": getDomain(),
            "editors": "",
            "geography": ProfileMega.get("country"),
            "is_indexed": false,
            "object_image_url": ProfileMega.get("object_image_url"),
            "object_title": ProfileMega.get("object_title"),
            "object_description": ProfileMega.get("object_description"),
            "owner_profile_id": ProfileMega.get('id'),
            "owner_profile_pic": ProfileMega.get("profile_pic_url"),
            "owner_title": ProfileMega.get("profile_name"),
            "owner_url": ProfileMega.get("owner_url"),
            "owners": ProfileMega.get("owners"),
            "owner_id": ProfileMega.id,
            "owner_contact_email": ProfileMega.get("owner_contact_email"),
            "owner_contact_cc_emails": ProfileMega.get("owner_contact_cc_emails"),
            "owner_contact_bcc_emails": ProfileMega.get("owner_contact_bcc_emails"),
            "keywords": ProfileMega.get("profile_keywords"),
            "status_id": null,
            "uri_url": ProfileMega.get("uri_url"),
            "view_count": null
        });
        return mega;
    }
});

})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageCenterController = Ember.Controller.extend({
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'userMessage', 'conversation', 'newConversation', 'notification'],
    isMessageBoard: true,
    isNotification: false,
    isNewConversation: false,
    isConversationItem: false,
    isUserself: false,

    unReadCount: 0,

    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },

    getClientId: function(id, conversation_id) {


        if (id === localStorage.loginStatus)
        {
            this.set("isUserself", true);           
            this.get('controllers.conversation').getClientId(id, conversation_id);
        }
        else
        {
            this.set("isUserself", false);
        }
        this.selectNotification(id, true);
        this.set("id", id);

    },
//    selectMessage: function(id, b) {
//
//
//        this.set("isMessageBoard", true);
//        this.set("isNotification", false);
//        this.set("isNewConversation", false);
//        this.set("isConversationItem", false);
//        this.get("controllers.conversation").selectConversation();
//
//        $('#notificationselected').removeClass('selected-conversation');
//        $('#messageBoardselected').addClass('selected-conversation');
//        this.get('controllers.userMessage').getClientId(id);
//        if (b !== true) {
//            this.transitionToRoute("messages");
//        }
//        setTimeout(function() {
//            $('#masonry_user_container').masonry("reload");
//        }, 200);
//    },
    selectedNone: function() {
        //$('#messageBoardselected').removeClass('selected-conversation');
        $('#notificationselected').removeClass('selected-conversation');
    },
    selectNotification: function(id,b) {
        this.set("isNewConversation", false);
        this.set("isConversationItem", false);
        this.set("isNotification", true);
        this.set("isMessageBoard", false);
        this.get("controllers.conversation").selectConversation();

        //$('#messageBoardselected').removeClass('selected-conversation');
        $('#notificationselected').addClass('selected-conversation');
        this.get("controllers.notification").getClientId(id);
        if (b !== true) {
            this.transitionToRoute("notifications");
        }
        

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    selectNewConversation: function() {
        this.transitionToRoute("newConversation");
    },
    selectConversationItem: function() {

        this.set("isNewConversation", false);
        this.set("isConversationItem", true);
        this.set("isNotification", false);
        this.set("isMessageBoard", false);

        this.transitionToRoute("conversation");
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }
}
);


})();

(function() {


HubStar.MessageController = Ember.Controller.extend({
    commenter_photo_url: null,
    messagecms: '',
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'userMessage'],
    isUserself: false,
    isUploadPhoto: false,
    isReply: true,
    makeSureDelete:false,
    isMessage:false,
    willDelete:false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("isReply", true);
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        if (this.get("currentOwner").get("id") === localStorage.loginStatus)
        {
            this.set("isUserself", true);
        }
        this.set("isEdit", true);
    },
    setEditReply: function() {


        this.set("isEdit", true);
    },
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    editingCommentData: function(id, msg) {
        var enableEditCount = 0;
        var messageId = null;

        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {

            var enableEdit = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("enableToEdit");
            if (enableEdit === true)
            {
                enableEditCount = 1;
                messageId = this.get('controllers.userMessage').get("contentMsg").objectAt(i);
                break;
            }


        }
        if (enableEditCount === 1)
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
                {
                    messageId.set("enableToEdit", false);
                    var s = '#message_' + id;
                    var thatthat = this;
                    setTimeout(function() {
                        var old = thatthat.get("controllers.userMessage").get("oldPost");

                        $(old).removeClass("post-focus");

                        $(s).addClass("post-focus");
                        thatthat.get("controllers.userMessage").set("oldPost", s);
                    }, 200);
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", true);

                    break;
                }
            }
        }
        else
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
                {
                    var s = '#message_' + id;
                    var thatthat = this;
                    setTimeout(function() {
                        var old = thatthat.get("controllers.userMessage").get("oldPost");

                        $(old).removeClass("post-focus");

                        $(s).addClass("post-focus");
                        thatthat.get("controllers.userMessage").set("oldPost", s);
                    }, 200);
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", true);
                    break;
                }
            }
        }
        HubStar.set('message', msg);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    editingReplyData: function(id, msg) {
        var enableEditReply = 0;
        var reply_id = null;
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
            {
                var enableToReply = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("enableToEdit");
                if (enableToReply === true)
                {
                    reply_id = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j);
                    enableEditReply = 1;
                    break;
                }
            }
        }
        if (enableEditReply === 1)
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                    {
                        var s = '#message_' + this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id");
                        var thatthat = this;
                        setTimeout(function() {
                            var old = thatthat.get("controllers.userMessage").get("oldPost");
                            $(old).removeClass("post-focus");

                            $(s).addClass("post-focus");
                            thatthat.get("controllers.userMessage").set("oldPost", s);
                        }, 200);
                        reply_id.set("enableToEdit", false);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", true);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", false);
                        break;
                    }
            }
        }
        else
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                    {
                        var s = '#message_' + this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id");
                        var thatthat = this;
                        setTimeout(function() {
                            var old = thatthat.get("controllers.userMessage").get("oldPost");
                            $(old).removeClass("post-focus");

                            $(s).addClass("post-focus");
                            thatthat.get("controllers.userMessage").set("oldPost", s);
                        }, 200);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", true);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", false);
                        break;
                    }
            }
        }


        HubStar.set('reply', msg);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
//    removePic: function(id) {
//        this.set('newStyleImageSource', null);
//        this.set('newStyleImageName', "");
//
//        this.set("isUploadPhoto", false);
//    },
    removeReplyItem: function(s)
    {
        var message = "Delete this reply?";
        this.set("message", message);

        this.set('makeSureDelete', true); 
         this.set('isMessage', true);
        if (this.get('willDelete') === true) {
            this.removeReply(s);
            this.cancelDelete();
        } else {
            this.set("s", s);
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeReply: function(reply_id)
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));

        var commenter_id = this.get("currentUser").get('id');// it is the login in user , it will use to check the right of delete
        var owner_id = this.get("currentOwner").get("id");// it the owner of the page, it will be used to identify  delete  which user's message item

        var tempComment = [commenter_id, owner_id, reply_id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        requiredBackEnd('messages', 'RemoveReply', tempComment, 'POST', function() {


            if (commenter_id === owner_id)
            {
                for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                {
                    for (var j = 0; j < that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    {
                        if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === reply_id)
                        {
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").removeObject(that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j));

                            var replyLength = that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyCount");
                            ;
                            if (replyLength >= 1)
                            {
                                replyLength = replyLength - 1;
                            }
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);
                            break;
                        }
                    }

                }
            }
            else
            {

                for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                {
                    for (var j = 0; j < that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    {
                        if ((that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === reply_id) && (
                                that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("user_id") === commenter_id)) {
                            var replyLength = that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyCount");
                            if (replyLength >= 1)
                            {
                                replyLength = replyLength - 1;
                            }
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);

                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").removeObject(that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j));
                            break;
                        }
                    }

                }
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
        });
        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
        }, 200);
    },
    addReply: function(message_id) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var replyContent = this.get('replyContent'); //replyContent is just the user input txt, it is not a whole reply object
        this.set("isReply", false);
        var commenter_id = this.get("currentUser").get('id');
        var date = new Date();
        var owner_id = this.get("currentOwner").get("id");
        var newStyleImage = "";
        var imageStyleName = "";
        if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
        {
            newStyleImage = this.get("newStyleImageSource");
        }
        else
        {
            newStyleImage = null;
        }
        if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
        {
            imageStyleName = this.get('newStyleImageName');

        }
        else
        {
            imageStyleName = "";
        }
        var imageName = "";
        var imageType = "";
        if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
        {
            var imageName = imageStyleName.split('.');
            var imageType = imageName[imageName.length - 1];
        }
        var messageID = createMessageid();
        var tempComment = [commenter_id, date.toString(), replyContent, owner_id, newStyleImage, imageType, imageStyleName, messageID, message_id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        var dataNew = new Array();
        requiredBackEnd('messages', 'CreateReply', tempComment, 'POST', function(params) {
//params just one message
            that.set("isReply", true);
            for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === params["message_id"])
                {
                    that.seeMore(params["message_id"]);
                    dataNew["reply_id"] = params["replyMessageCollection"][0]["reply_id"];
                    dataNew["user_id"] = params["replyMessageCollection"][0]["user_id"];
                    dataNew["time_stamp"] = params["replyMessageCollection"][0]["time_stamp"];
                    dataNew["msg"] = params["replyMessageCollection"][0]["msg"];
                    dataNew["user_name"] = params["replyMessageCollection"][0]["user_name"];
                    dataNew["photo_url_large"] = params["replyMessageCollection"][0]["photo_url_large"];
                    dataNew["url"] = params["replyMessageCollection"][0]["url"];
                    dataNew["enableToEdit"] = false;


                    var replyLength = that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyCount") + 1;
                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);

                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);
                    if (params["replyMessageCollection"][0]["user_id"] === localStorage.loginStatus)
                    {
                        dataNew["isUserself"] = true;
                    }
                    if (params["replyMessageCollection"][0]["url"] !== null)
                    {
                        dataNew["isUrl"] = true;
                    }
                    else
                    {
                        dataNew["isUrl"] = false;
                    }

                    var thatthat = that;
                    var s = '#message_' + params["message_id"];
                    setTimeout(function() {
                        var old = thatthat.get("controllers.userMessage").get("oldPost");
                        $(old).removeClass("post-focus");

                        $(s).addClass("post-focus");
                        thatthat.get("controllers.userMessage").set("oldPost", s);
                    }, 200);

                    if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection") !== undefined)
                    {
                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").insertAt(0, dataNew);
                    }
                    else
                    {
                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyMessageCollection", dataNew);
                    }
                    dataNew["replyMessageCollection"] = new Array();

                }
                that.set("isUploadPhoto", false);
            }
            dataNew = new Array();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
            that.set('replyContent', "");
            that.set('newStyleImageSource', null);
            that.set('newStyleImageName', "");
        });


        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");

        }, 200);
    },
    close: function() {
        this.set('replyContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    seeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:inline-block;cursor: pointer');
        $('#showMoreComment_' + id).attr('style', 'display:none;cursor: pointer');
        $('#messageData_' + id).attr('style', 'display: block');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 50);

    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none;cursor: pointer');
        $('#showMoreComment_' + id).attr('style', 'display:inline-block;cursor: pointer');
        $('#messageData_' + id).attr('style', 'display: none');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 50);
    }
}
);


})();

(function() {

HubStar.NewConversationController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    isUploadPhoto: false,
    isInvitePeople: false,
    isAdded: false,
    contentFollowerPhoto: null,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
    },
    addComment: function() {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commentContent = this.get('messageContent');
        if (commentContent) {
            var commenter_id = this.get("currentUser").get('id');
            var date = new Date();
            var owner_id = this.get("currentOwner").get("id");
            var newStyleImage = "";
            var imageStyleName = "";
            if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
            {
                newStyleImage = this.get("newStyleImageSource");
            }
            else
            {
                newStyleImage = null;
            }
            if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
            {
                imageStyleName = this.get('newStyleImageName');

            }
            else
            {
                imageStyleName = "";
            }
            var imageName = "";
            var imageType = "";
            if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
            {
                var imageName = imageStyleName.split('.');
                var imageType = imageName[imageName.length - 1];
            }
            var conversationID = createMessageid();
            var conversationItemID = createMessageid();

            var participation_ids = '';
            if (this.get("contentFollowerPhoto") !== null) {

                for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
                {
                    if (this.get("contentFollowerPhoto").objectAt(i).get("isAdd") === true)
                    {
                        if (participation_ids === "")
                        {
                            participation_ids = participation_ids + this.get("contentFollowerPhoto").objectAt(i).get("id");
                        }
                        else
                        {
                            participation_ids = participation_ids + ',' + this.get("contentFollowerPhoto").objectAt(i).get("id");
                        }
                    }
                }

            }        

            var tempComment = [commenter_id, date.toString(), commentContent, newStyleImage, imageType, imageStyleName, conversationID, conversationItemID, participation_ids];

            tempComment = JSON.stringify(tempComment);
            var that = this;

            var dataNew = new Array();

            requiredBackEnd('conversations', 'CreateConversation', tempComment, 'POST', function(params) {
                dataNew["conversationID"] = params["conversationID"];
                dataNew["participation_ids"] = params["participation_ids"];

                dataNew["names"] = params["names"];

                dataNew["ConversationCollection"] = new Array();
                dataNew["msg"] = params["ConversationCollection"][0]["msg"];
                dataNew["time_stamp"] = params["ConversationCollection"][0]["time_stamp"];
                dataNew["conversationPhoto"] = new Array();
                dataNew["conversationPhoto"] = params["conversationPhoto"];
                if (dataNew["conversationPhoto"].length === 1)
                {
                    dataNew["one"] = true;
                    dataNew["two"] = false;
                    dataNew["three"] = false;
                    dataNew["four"] = false;
                    dataNew["onePic"] = params["conversationPhoto"][0]["photo_url"];
                }
                else if (dataNew["conversationPhoto"].length === 2)
                {
                    dataNew["one"] = false;
                    dataNew["two"] = true;
                    dataNew["three"] = false;
                    dataNew["four"] = false;
                    dataNew["onePic"] = params["conversationPhoto"][0]["photo_url"];
                    dataNew["twoPic"] = params["conversationPhoto"][1]["photo_url"];
                }
                else if (dataNew["conversationPhoto"].length === 3)
                {
                    dataNew["one"] = false;
                    dataNew["two"] = false;
                    dataNew["three"] = true;
                    dataNew["four"] = false;
                    dataNew["onePic"] = params["conversationPhoto"][0]["photo_url"];
                    dataNew["twoPic"] = params["conversationPhoto"][1]["photo_url"];
                    dataNew["threePic"] = params["conversationPhoto"][2]["photo_url"];               
                }
                else
                {
                    dataNew["one"] = false;
                    dataNew["two"] = false;
                    dataNew["three"] = false;
                    dataNew["four"] = true;
                    dataNew["onePic"] = params["conversationPhoto"][0]["photo_url"];
                    dataNew["twoPic"] = params["conversationPhoto"][1]["photo_url"];
                    dataNew["threePic"] = params["conversationPhoto"][2]["photo_url"];
                    dataNew["fourPic"] = params["conversationPhoto"][3]["photo_url"];
                }
                for (var j = 0; j < params["ConversationCollection"].length; j++)
                {

                    var conversationItem = new Array();
                    conversationItem["item_id"] = params["ConversationCollection"][j]["item_id"];
                    conversationItem["sender_id"] = params["ConversationCollection"][j]["sender_id"];
                    conversationItem["time_stamp"] = params["ConversationCollection"][j]["time_stamp"];
                    conversationItem["msg"] = params["ConversationCollection"][j]["msg"];
                    conversationItem["name"] = params["ConversationCollection"][j]["name"];

                    conversationItem["sender_photo_url_large"] = params["ConversationCollection"][j]["sender_photo_url_large"];
                    if (params["ConversationCollection"][j]["url"] === null)
                    {
                        conversationItem["isUrl"] = false;
                    }
                    else
                    {
                        conversationItem["isUrl"] = true;
                    }
                    conversationItem["url"] = params["ConversationCollection"][j]["url"];

                    dataNew["ConversationCollection"].pushObject(conversationItem);
                }

                that.get('controllers.conversation').get("conversationContent").insertAt(0, dataNew);
                dataNew = new Array();

                that.set("isUploadPhoto", false);
                that.set("isAdded",false);
                that.set('messageContent', "");
                that.set("contentFollowerPhoto",null);
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
                setTimeout(function() {
                $('#masonry_container').masonry("reloadItems");
            }, 200);
            });
           
        }
    },
    invitePeople: function()
    {
        this.get("controllers.invitePeople").set("owner", "newConversation");
        this.set("isInvitePeople", true);
        this.get("controllers.invitePeople").getClientId(localStorage.loginStatus);
    },
    addToList: function(id) {
        for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
        {
            if (this.get("contentFollowerPhoto").objectAt(i).get("id") === id)
            {
                this.get("contentFollowerPhoto").objectAt(i).set("isAdd", !this.get("contentFollowerPhoto").objectAt(i).get("isAdd"));
            }
        }
    },
    profileStyleImageDrop: function(e, name)
    {

        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }
}
);


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationController = Ember.Controller.extend({
    notificationContent: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversationItem', 'notificationTop', 'conversation','application'],
    isUploadPhoto: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    typeDisplay: function(type, name) {
        var displayString = '';
        if (type === "follow")
        {
            displayString = " is now following you";
        }
        else if (type === "unFollow")
        {
            displayString = " is no longer following you";
        }
        else if (type === "conversation")
        {
            displayString = " sent you a message";
        }
        else if (type === "addMessage")
        {
            displayString = " sent you a message";
        }
        else if (type === "addReply")
        {
            displayString = " sent you a message";
        }
        return displayString;
    },
    getClientId: function(id) {
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];
        this.set('loadingTime', true);
        tempComment = JSON.stringify(tempComment);
        var that = this;
        this.set("notificationContent", []);
        requiredBackEnd('notifications', 'ReadNotification', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.typeDisplay(dataNew["type"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    markRead: function(id) {
        var dataNew = new Array();
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'MarkRead', tempComment, 'POST', function() {
            for (var i = 0; i < that.get("notificationContent").length; i++)
            {
                if (that.get("notificationContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationContent").objectAt(i).set("isRead", true);
                }
            }
            that.unReadCount();
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    deleteNotification: function(id) {
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'DeleteNotification', tempComment, 'POST', function() {

            for (var i = 0; i < that.get("notificationContent").length; i++)
            {
                if (that.get("notificationContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationContent").removeObject(that.get("notificationContent").objectAt(i));
                }
            }
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));

            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    markAllRead: function() {
        this.set('clientID', localStorage.loginStatus);
        var data = this.get('clientID');
        var ids = "";
        for (var j = 0; j < this.get("notificationContent").get("length"); j++)
        {
            if (j === 0)
            {
                ids = this.get("notificationContent").objectAt(j)["notification_id"];
            }
            else {
                ids = ids + "," + this.get("notificationContent").objectAt(j)["notification_id"];
            }
        }
        var tempComment = [data, ids];
        this.set('loadingTime', true);
        tempComment = JSON.stringify(tempComment);
        var that = this;
        var dataNew = new Array();
        requiredBackEnd('notifications', 'MarkAllRead', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.typeDisplay(dataNew["type"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.unReadCount();
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    go: function(notification_id) {
        for (var i = 0; i < this.get("notificationContent").get("length"); i++)
        {
            if (this.get("notificationContent").objectAt(i)["notification_id"] === notification_id)
            {
                //console.log(this.get("notificationContent").objectAt(i));
                this.goto(this.get("notificationContent").objectAt(i));
                this.markRead(this.get("notificationContent").objectAt(i)["notification_id"]);
                break;
            }
        }
    },
    unReadCount: function()
    {
        var count = 0;
        for (var i = 0; i < this.get("notificationContent").get("length"); i++)
        {
            if (this.get("notificationContent").objectAt(i)["isRead"] === false)
            {
                count++;
            }
        }
        this.get("controllers.application").set("unReadCount", count);
        this.get("controllers.messageCenter").set("unReadCount", count);
    },
    goto: function(obj) {
        if (obj.get("type") === "follow" || obj.get("type") === "unFollow")
        {

            this.gotoUser(obj.get("user_id"));
        }
        else if (obj.get("type") === "conversation")
        {
            this.gotoConversation(obj.get("user_id"), obj.get("action_id"));
        }
        else if (obj.get("type") === "addMessage")
        {
            this.gotoMessage(obj.get("action_id"));
        }
        else if (obj.get("type") === "addReply")
        {
            this.gotoReply(obj.get("action_id"));
        }

    },
    gotoUser: function(id) {
        var user = HubStar.User.find(id);
        this.transitionToRoute('user', user);
    },
    gotoConversation: function(id, conversationID) {

        var user = HubStar.User.find(id);
        var that = this;
        if (user.get('isLoaded')) {
            var data = null;

            for (var i = 0; i < user.get('conversations').get("length"); i++) {
                data = user.get('conversations').objectAt(i);
                if (data.get("conversation_id") === conversationID) {

                    data.set("id", data.get("conversation_id"));
                    break;
                }

            }
            // this.get("controllers.conversation").selectConversation(conversationID);
            this.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
            this.transitionToRoute('conversation', data);
        }
        user.addObserver('isLoaded', function() {
            if (user.get('isLoaded')) {
                var data = null;

                for (var i = 0; i < user.get('conversations').get("length"); i++) {
                    data = user.get('conversations').objectAt(i);
                    if (data.get("conversation_id") === conversationID) {

                        data.set("id", data.get("conversation_id"));
                        break;
                    }

                }
                that.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
                //that.get("controllers.conversation").selectConversation(conversationID);
                that.transitionToRoute('conversation', data);
            }
        });
        $(window).scrollTop(550);
    },
    gotoNotification: function(id, notificationID)
    {
        var user = HubStar.User.find(id);

        var data = null;
        for (var i = 0; i < user.get('conversations').get("length"); i++) {
            data = user.get('conversations').objectAt(i);
            if (data.get("conversation_id") === "conversationID") {
                data.set("id", data.get("conversation_id"));
                break;
            }
        }
    },
    gotoMessage: function(id)
    {     
        this.set("goMessage", '#message_' + id);
        this.transitionToRoute('userPost');
        $(window).scrollTop(550);
    },
    gotoReply: function(id)
    {
        var reply = id.split(",");
        var user = HubStar.User.find(reply[2]);
        this.set("reply_ids", reply[2]);
        this.set("reply", reply[1]);
        if (localStorage.loginStatus !== reply[2]) {
            var that = this;
            if (user.get('isLoaded')) {
                this.set("goMessage", '#message_' + reply[1]);
                this.transitionToRoute('userPost');
            }
            user.addObserver('isLoaded', function() {
                if (user.get('isLoaded')) {
                    that.set("goMessage", '#message_' + reply[1]);
                    that.transitionToRoute('userPost');
                }
            });
        }
        else
        {
            this.set("goMessage", '#message_' + reply[1]);
            this.transitionToRoute('userPost');
        }
        $(window).scrollTop(550);
    }
}
);


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationTopController = Ember.Controller.extend({
    notificationTopContent: null,
    commenter_photo_url: null,
    makeSureDelete: false,
    willDelete:false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversationItem', 'application', 'notification', 'userMessage', 'application'],
    isUploadPhoto: false,
    init: function()
    {
    },
    getClientId: function(id) {
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        this.set("notificationTopContent", []);
        requiredBackEnd('notifications', 'ReadNotification', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationTopContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.get("controllers.notification").typeDisplay(dataNew["type"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationTopContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
        });
    },
    removeNotificationItem: function(s)
    {
        var message = "Delete this notification?";
        this.set("message", message);
        
        this.set('makeSureDelete', true);
        if (this.get('willDelete')===true) {
            this.deleteNotification(s);
            this.cancelDelete();
        } else {
            this.set("s",s);
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    deleteNotification: function(id) {
     
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'DeleteNotification', tempComment, 'POST', function() {

            for (var i = 0; i < that.get("notificationTopContent").length; i++)
            {
                if (that.get("notificationTopContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationTopContent").removeObject(that.get("notificationTopContent").objectAt(i));
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    seeAll: function()
    {
        var user = HubStar.User.find(localStorage.loginStatus);
        this.transitionToRoute('user', user);
        this.set("notificationSeeAll", true);
        this.transitionToRoute('messageCenter');
        this.transitionToRoute("notifications");
        this.reviewCancel();
    },
    markAllRead: function() {
        //mark all read tom       
        this.set('clientID', localStorage.loginStatus);
        var data = this.get('clientID');
        var ids = "";
        for (var j = 0; j < this.get("notificationTopContent").get("length"); j++)
        {
            if (j === 0)
            {
                ids = this.get("notificationTopContent").objectAt(j)["notification_id"];
            }
            else {
                ids = ids + "," + this.get("notificationTopContent").objectAt(j)["notification_id"];
            }
        }
        var tempComment = [data, ids];

        tempComment = JSON.stringify(tempComment);
        var that = this;
        var dataNew = new Array();
        requiredBackEnd('notifications', 'MarkAllRead', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationTopContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.get("controllers.notification").typeDisplay(dataNew["type"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationTopContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
        });
    },
    markRead: function(id) {
        var dataNew = new Array();
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'MarkRead', tempComment, 'POST', function() {
            for (var i = 0; i < that.get("notificationTopContent").length; i++)
            {
                if (that.get("notificationTopContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationTopContent").objectAt(i).set("isRead", true);
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    unReadCount: function()
    {
        var count = 0;
        for (var i = 0; i < this.get("notificationTopContent").get("length"); i++)
        {
            if (this.get("notificationTopContent").objectAt(i)["isRead"] === false)
            {
                count++;
            }
        }
        this.get("controllers.application").set("unReadCount", count);
        this.get("controllers.messageCenter").set("unReadCount", count);
    },
    go: function(notification_id) {
        for (var i = 0; i < this.get("notificationTopContent").get("length"); i++)
        {
            if (this.get("notificationTopContent").objectAt(i)["notification_id"] === notification_id)
            {
                this.goto(this.get("notificationTopContent").objectAt(i));
                this.markRead(this.get("notificationTopContent").objectAt(i)["notification_id"]);
                break;
            }
        }
    },
    goto: function(obj) {
        if (obj.get("type") === "follow" || obj.get("type") === "unFollow")
        {

            this.gotoUser(obj.get("user_id"));
        }
        else if (obj.get("type") === "conversation")
        {
            this.gotoConversation(obj.get("user_id"), obj.get("action_id"));
        }
        else if (obj.get("type") === "addMessage")
        {
            this.gotoMessage(obj.get("action_id"));
        }
        else if (obj.get("type") === "addReply")
        {
            this.gotoReply(obj.get("action_id"));
        }

    },
    gotoUser: function(id) {
        var user = HubStar.User.find(id);
        this.reviewCancel();
        this.transitionToRoute('user', user);
    },
    gotoConversation: function(id, conversationID) {
        var user = HubStar.User.find(localStorage.loginStatus);
        var that = this;
        this.set("goConversation", true);
        if (user.get('isLoaded')) {
            var data = null;

            for (var i = 0; i < user.get('conversations').get("length"); i++) {
                data = user.get('conversations').objectAt(i);
                if (data.get("conversation_id") === conversationID) {

                    data.set("id", data.get("conversation_id"));
                    break;
                }
            }
            this.transitionToRoute('user', user);
            
            this.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
            this.transitionToRoute('conversation', data);
            //   $(window).scrollTop(2000);
        }
        user.addObserver('isLoaded', function() {
            if (user.get('isLoaded')) {
                var data = null;

                for (var i = 0; i < user.get('conversations').get("length"); i++) {
                    data = user.get('conversations').objectAt(i);
                    if (data.get("conversation_id") === conversationID) {

                        data.set("id", data.get("conversation_id"));
                        break;
                    }

                }
                that.transitionToRoute('user', user);
                that.transitionToRoute('messageCenter');
                that.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
                that.transitionToRoute('conversation', data);
            }
            $(window).scrollTop(550);
        });
        this.reviewCancel();
    },
    gotoMessage: function(id)
    {
        this.set("goMessage", '#message_' + id);

        var address = document.URL;
        if (address.split("#")[1].split("/").length >= 4) {
            var page = address.split("#")[1].split("/")[3];
            if (page === "post")
            {
                this.get("controllers.userMessage").goToMessageTop(this.get("goMessage"));
            }
        }
        this.reviewCancel();
        var user = HubStar.User.find(localStorage.loginStatus);
        this.transitionToRoute('user', user);
        //this.transitionToRoute('messageCenter');
        this.transitionToRoute('userPost');
        $(window).scrollTop(550);
    },
    gotoReply: function(id)
    {
        var reply = id.split(",");
        var user = HubStar.User.find(reply[2]);
        this.set("reply_ids", reply[2]);
        this.set("reply", reply[1]);
        this.reviewCancel();
        this.set("goReply", false);
        if (localStorage.loginStatus !== reply[2]) {
            var that = this;

            if (user.get('isLoaded')) {
                this.set("goMessage", '#message_' + reply[1]);
                this.transitionToRoute('userPost');

            }
            user.addObserver('isLoaded', function() {
                if (user.get('isLoaded')) {
                    that.set("goMessage", '#message_' + reply[1]);
                    var userID = HubStar.User.find(reply[2]);
                    that.transitionToRoute('user', userID);
                    that.transitionToRoute('userPost');
                }
            });
        }
        else
        { //login user is the person who left the reply           
            this.set("goMessage", '#message_' + reply[1]);
            var userID = HubStar.User.find(reply[2]);
            this.transitionToRoute('user', userID);
            //this.transitionToRoute('messageCenter');
            this.transitionToRoute('userPost');
        }
        var address = document.URL;
        if (address.split("#")[1].split("/").length >= 4) {
            var page = address.split("#")[1].split("/")[3];
            if (page === "post")
            {
                this.get("controllers.userMessage").goToMessageTop(this.get("goMessage"));
            }
        }
        $(window).scrollTop(550);
    },
    reviewCancel: function() {
        this.get("controllers.application").set("isNotification", false);
    }
}
);


})();

(function() {


HubStar.PermissionController = Ember.Controller.extend({
    test: function() {

    },
    checkAuthenticUser: function(owner_email, editors_emails, current_user_email) {

        var authenticUsers = owner_email + "," + editors_emails;
        var is_authentic_user = false;
        if (authenticUsers !== null && authenticUsers !== undefined && current_user_email !== null && current_user_email !== undefined) {
            is_authentic_user = this.setIsAuthenticUser(authenticUsers, current_user_email);
        }

        return is_authentic_user;
    },
    setIsAuthenticUser: function(authenticUsers, email)
    {
        var is_authentic_user = false;
        if (authenticUsers.indexOf(email) !== -1) {
            is_authentic_user = true;
        }
        else if (email.indexOf('@trendsideas.com') !== -1) {
            is_authentic_user = true;

        }
        else {
            is_authentic_user = false;
        }

        return  is_authentic_user;
    },
    setIsAdmin: function(email)
    {
        var IsAdmin = false;
        if (email.indexOf('@trendsideas.com') !== -1) {
            IsAdmin = true;
        }
        return  IsAdmin;
    }
}
);


})();

(function() {


    HubStar.PhotoController = Ember.ObjectController.extend({
     //   needs: ['mega'],
        //   content: Ember.computed.alias('controllers.application.currentUser'),

        previesImage: function() {

        },
        nextImage: function() {

        },
        getTempArr: function() {
            return this.tempArr;
        },
//        getFirstPhoto: function(id) {
//            //   controllers.mega.test();
//
//            //      var relatedPhoto=
//            //       tempArr.push(photo);
//        },
        getFirstPhoto: function(id) {


          //  this.get("controllers.mega").test(id);
        },
        setFirestPhoto: function()
        {
            this.set('model', tempArr[currentPhotoNumber]);
        }



    });


})();

(function() {


HubStar.PhotoCreateController = Ember.ArrayController.extend({
    content: [],
    newMegas: [],
    mode: null,
    filesNumber: null,
    profileMega: null,
    uploadOrsubmit: false,
    fileSize: null,
    collection_id: "",
    needs: ['profile', 'masonryCollectionItems', 'photoCreateInfoSetting', 'megaCreate'],
    init: function() {
        this.setMega();
    },
    fileChecking: function(filesLength) {
        HubStar.set("totalFiles", 0);
        this.set("filesNumber", filesLength);

    },
    commitFiles: function(evt) {
        $('#dragAndDroppArea').attr('style', "display:block");
        var input = evt.target;
        var files = input.files;
        var that = this;
        this.fileChecking(files.length);
        this.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                var fileSize = file.size;
                var reader = new FileReader();
                reader.onload = function(e) {
                    that.addPhotoObject(e, name, type, fileSize);
                }, reader.readAsDataURL(files[i]);
            })(files[i]);
            evt.preventDefault();
        }
    },
    back: function()
    {
        HubStar.set('isNewUpload', true);
        $('#dragAndDroppArea').attr('style', "display:none");
        var masonryCollectionItems = this.get('controllers.masonryCollectionItems');

        masonryCollectionItems.back();
    },
    photoUpload: function()
    {

        HubStar.set('isNewUpload', false);
        var masonryCollectionItems = this.get('controllers.masonryCollectionItems');
        this.set("fileSize", 0);
        masonryCollectionItems.photoUpload();
    },
    setMega: function() {
        var profileController = this.get('controllers.profile');
        var tempmega = profileController.get("model");
        var that = this;
        that.set("profileMega", tempmega);
        if (that.get("profileMega") === null) {
            tempmega.addObserver('isLoaded', function() {
                if (tempmega.get('isLoaded')) {
                    that.set("profileMega", tempmega);
                    
                    
                        }
                    });
                }
    },
    setFileSize: function(size)
    {
        var fileSize = this.get("fileSize");
        var addPhoto = true;

        if ((fileSize === null) || (fileSize === "undefined") || (fileSize === "NaN"))
        {
            this.set("fileSize", size);
        }
        else
        {
            if (fileSize + size > 25000000)
            {
                addPhoto = false;
            }
            else
            {
                this.set("fileSize", size + fileSize);
            }
        }
        fileSize = this.get("fileSize");

        //   console.log(fileSize+"sdfdsf");

        if ((fileSize <= 25000000) && (addPhoto === true))
        {
            return true;
        }
        else
        {
            return false;
        }
    },
    addPhotoObject: function(e, name, type, size) {
        if (this.setFileSize(size))
        {
            var photoName = name.replace(/[)\(]/gi, '');
            photoName = photoName.replace(/\s/g, '_');
            var testID = createGuid();
            var target = getTarget(e, "pural");
            var src = target.result;
            var MegaCreateController = this.get('controllers.megaCreate');
            var mega = MegaCreateController.createNewMega(this.get("profileMega"), testID, this.get('controllers.masonryCollectionItems').get('collection_id'), 'photo');
            var keywords = this.get("profileMega").get("profile_keywords");
            var file = HubStar.Photo.createRecord({
                "id": testID,
                "photo_title": photoName.toLowerCase(),
                "photo_source_id": photoName.toLowerCase().replace('.', "_"),
                "photo_image_original_url": src,
                "photo_file_name": photoName.toLowerCase(),
                "photo_type": type,
                "photo_keywords": keywords});
            mega.get("photo").pushObject(file);
            var that = this;
            mega.addObserver('isSaving', function() {
                if (mega.get('isSaving')) {
                    $('.' + file.get('photo_source_id')).attr("style", "display:block");
                }
                else {
                    HubStar.set("totalFiles", HubStar.get("totalFiles") + 1);
                    $('.' + file.get('photo_source_id')).attr("style", "display:none");
                    if (HubStar.get("totalFiles") === that.get("filesNumber")) {
                        var masonryCollectionItems = that.get('controllers.masonryCollectionItems');
                        var photoCreateInfoSettingController = that.get('controllers.photoCreateInfoSetting');
                        HubStar.set('UploadImageInfoData', masonryCollectionItems.get("uploadImageContent"));
                        photoCreateInfoSettingController.setData();
                        photoCreateInfoSettingController.set('isEditingMode', true);
                        masonryCollectionItems.set('uploadOrsubmit', !masonryCollectionItems.get('uploadOrsubmit'));
                        this.set("fileSize", 0);

                    }
                }
            });
            var masonryCollectionItemsController = this.get('controllers.masonryCollectionItems');
            masonryCollectionItemsController.get("uploadImageContent").addObject(file);
        }
        else
        {
            addPhoto = true;
            alert("The limit size of uploading is 25MB");
        }
    },
    checkingCleanBeforeUpload: function() {

        if (HubStar.get('isNewUpload')) {
            this.set('content', []);
            HubStar.set('isNewUpload', false);
        }
    }


});
HubStar.PhotoCreateController.cancel = function(event) {
    event.preventDefault();
    return false;
};

HubStar.PhotoCreateController.Droppable = Ember.Mixin.create(HubStar.PhotoCreateController, {
    dragEnter: HubStar.PhotoCreateController.cancel,
    dragOver: HubStar.PhotoCreateController.cancel
});


})();

(function() {


    HubStar.PhotoCreateInfoSettingController = Ember.Controller.extend({
        needs: ['masonryCollectionItems', 'photoCreate'],
        uploadedImage: "",
        //  content: [],
        photoInfo: [],
        isEditingMode: false,
        init: function(){
            
        },
        setData: function() {          
            var content = HubStar.get('UploadImageInfoData');
            if (this.get("photoInfo") !== undefined)
            {
                this.set('photoInfo', []);

                var objectLength = content.get('length');
                for (var i = 0; i < objectLength; i++) {
                    var raw_id = content.objectAt(i).get('id');
                    raw_id = raw_id.replace("test", "");
                    this.get('photoInfo').pushObject({
                        id: raw_id,
                        url: content.objectAt(i).get('photo_image_original_url'),
                        title: content.objectAt(i).get('photo_title'),
                        caption: content.objectAt(i).get('photo_caption')
                    });
                }
            }
            this.get('controllers.masonryCollectionItems').reLayout();
            this.set('isEditingMode', false);
        },
        submitPhotoInfo: function() {
        
            var objectLength = this.get("photoInfo").get('length');
            for (var i = 0; i < objectLength; i++) {
                var data = this.get('photoInfo').objectAt(i);
                var photoInfo = HubStar.Photo.find(data.id);
                this.photoSave(photoInfo, data);
            }

            var that = this;
            setTimeout(function() {
                that.finishUploadingAndInfo();
            }, objectLength*500);

        },
        photoSave: function(photoInfo, data)

        {
            photoInfo.addObserver('isLoaded', function() {
                if (photoInfo.get('isLoaded')) {
                    photoInfo.set('photo_title', data.title);
                    photoInfo.set('photo_caption', data.caption);
                    photoInfo.store.save();
                }
            });
        },
        backToDragAndDrop: function() {
            this.finishUploadingAndInfo();                     
            var masonryCollectionItems = this.get('controllers.masonryCollectionItems');
            masonryCollectionItems.newUpload();


        },
        finishUploadingAndInfo: function() {
            var photoCreate = this.get('controllers.photoCreate');    
            photoCreate.back();
        }
    });


})();

(function() {


            HubStar.PhotoDisplayAreaController = Ember.Controller.extend({
                content: []
            });


})();

(function() {


HubStar.PlatformBarController = Ember.ArrayController.extend({
    categorys: [],
    centent: [],
    user: null,
    photo_url: '',
    userLocation: "",
    myUserProfile: null,
    needs: ["application", "user", "applicationFeedback"],
    init: function()
    {
        this.setTopicModel(HubStar.Cate.find({}));
        this.set('userLocation', geoip_city());
    },
    topicSearch: function(search_topic) {
        this.transitionToRoute('searchIndex');
        this.get("controllers.application").set('search_string', search_topic);
        this.get("controllers.application").set("pageCount", 0);        
        this.get("controllers.application").set("searchFromTopic",true);
        this.get("controllers.application").newSearch();

    },
    setTopicModel: function(model) {
        this.set("user", HubStar.User.find(localStorage.loginStatus));
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set('categorys', null);
        this.set('categorys', model);
    },
    changeImage: function(imageSrc)
    {
        this.set('photo_url', imageSrc);
    },
    changeLocation: function(location) {
        HubStar.set('geoLocation', location);
        this.get('controllers.applicationFeedback').statusObserver(null, "You are now searching within " + location + " only.");
    }
});


})();

(function() {

var profile_record;
var about_record;
var first_name_record;
var last_name_record;
var category_record;
var address_record;
var suburb_record;
var phone_record;
var website_record;
var website_url_record;
var workingtime;
var seletedID = "";
var collection_title_record;
var collection_desc_record;


HubStar.ProfileController = Ember.ObjectController.extend({
    model: null,
    aboutMe: "aboutMe",
    isAboutUs: false,
    about_me: "",
    rateTime: false,
    google_map: "",
    address: "",
    suburb: "",
    boost: '',
    currentUserID: "",
    collections: [],
    Id: "",
    type:"profiles",
    reviews: [],
    contentFollowerPhoto: [],
    contactChecking: false,
    collectionTag: true,
    contact: "contact",
    country: "",
    contact_email: "",
    secondary_email: "",
    domains: "",
    direct_enquiry_provide_email: "",
    editing: false,
    editingAbout: false,
    editingContact: false,
    editingTime: false,
    editors: "",
    followerProfileTag: false,
    follow_status: false,
    followers: '',
    first_name: "",
    galleryInsert: false,
    hours: [],
    is_authentic_user: false,
    keywords: "",
    keywords_array: [],
    keyword_num: 0,
    keyword_left: 0,
    add_keywords: "",
    show_keyword_id: "",
    show_keyword_array: [],
    dragTargetIndex: -1,
    last_name: "",
    needs: ["profilePartners", "itemProfiles", "userFollowers", 'permission', 'contact', 'photoCreate', 'application', 'applicationFeedback', 'userFollowings', 'collection', 'htmlEditor', 'review', 'keywords', 'profileVideos', 'checkingLoginStatus'],
    name: "",
    facebook: "",
    twitter: "",
    googleplus: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    profileName: "profileName",
    profile_cover_text: "",
    profile_analytics_code: "",
    profile_bg_url: "",
    profile_creator: '',
    profile_hero_url: "",
    profile_pic_url: "",
    profile_contact_number: "",
    profile_google_map: "",
    profile_name: "",
    partnerTag: false,
    reviewTag: false,
    videoTag: false,
    partnerPage: true,
    profile_average_review: '',
    profileSelectionStatus: "Collections",
    profileCollectionStatistics: "",
    profileReviewStatistics: "",
    profilePartnerStatistics: "",
    profileFollowerStatistics: "",
    region: "",
    selectedCollection: "",
    switchPhoto: false,
    newDesc: '',
    newTitle: '',
    selectedDesc: "",
    selectedTitle: "",
    timeSetting: "timeSetting",
    temp: [],
    website: "",
    website_url: "",
    UploadImageMode: "",
    uploadChecking: false,
    updateOrCreate: true,
    isPhotoUploadMode: false,
    isPhotoEditingMode: false,
    isCrop: false,
    isUpload: false,
    loadingTime: false,
    isFinished: false,
    isProfilePicture: false,
    isProfileHero: false,
    isProfileBackground: false,
    isKeywordObjecttExist: false,
    CurrentImageSize: "",
    RequiredImageSize: "",
    isAdmin: false,
    newStyleImageSource: '',
    newStyleImageName: '',
    currentWidth: '',
    currentHeight: '',
    isPackgetDropdown: false,
    projectCategoryDropdownType: 'package',
    projectCategoryDropdownContent: '',
    isActiveDropdown: false,
    projectActiveDropdownType: 'active',
    projectActiveDropdownContent: '',
    isDeleteDropdown: false,
    projectDeleteDropdownType: 'delete',
    projectDeleteDropdownContent: '',
    message: null,
    select_one: null,
    select_two: null,
    makeSelection: false,
    makeSureDelete: false,
    popUpMap: false,
    willDelete: false,
    profile_partner_ids: null,
    partnerSearchString: '',
    isTracking: false,
    goBackType: false,
    cropsize: null,
    fromAddress: '',
    isInreview: false,
    profile_average_review_length: '',
    toAddress: '',
    isAboutUsObjectExist: false,
    about_us:[],
    embeded_url: '',
    init: function() {

        this.set('is_authentic_user', false);
    },
    goToProfileRoute: function(id)
    {
        //this.transitionToRoute('user');
        this.set("goBackType", true);
        var model = {id: id};
        this.transitionToRoute('profile', model);
    },
    getCurrentProfile: function(id) {
        this.set('currentUserID', id);
        var profile = HubStar.Profile.find(id);
        return profile;
    },
    setProfile: function(id) {
        var profile = this.getCurrentProfile(id);
        this.set("model", profile);
        this.set("Id", this.get('model').get('id'));
        this.set("about_me", profile.get('profile_about_us'));
        this.set("domains", profile.get('profile_domains'));
        this.set("boost", profile.get('profile_boost'));
        this.set('profile_bg_url', profile.get('profile_bg_url'));
        this.set('profile_hero_url', profile.get('profile_hero_url'));
        this.set('profile_pic_url', profile.get('profile_pic_url'));
        this.set('editors', profile.get('profile_editors'));
        this.set('keywords', profile.get('profile_keywords'));
        this.set('region', profile.get('profile_regoin'));
        this.set('country', profile.get('profile_country'));
        this.set('facebook', profile.get('profile_facebook_link'));
        this.set('twitter', profile.get('profile_twitter_link'));
        this.set('googleplus', profile.get('profile_googleplus_link'));
        this.set('pinterest', profile.get('profile_pinterest_link'));
        this.set('linkedin', profile.get('profile_linkedin_link'));
        this.set('youtube', profile.get('profile_youtube_link'));
        this.set('name', profile.get('profile_name'));
        this.set('profile_creator', profile.get('profile_creater'));
        this.set('direct_enquiry_provide_email', profile.get('owner_contact_bcc_emails'));
        this.set('secondary_email', profile.get('owner_contact_cc_emails'));
        this.set('contact_email', profile.get('owner_contact_email'));
        this.set('website', profile.get('profile_website'));
        this.set('website_url', profile.get('profile_website_url'));
        this.set('profile_cover_text', profile.get('profile_cover_text'));
        this.set('profile_analytics_code', profile.get('profile_analytics_code'));
        this.set('profile_contact_number', profile.get('profile_contact_number'));
        this.set('projectCategoryDropdownContent', profile.get('profile_package_name'));
        this.set('first_name', profile.get('profile_contact_first_name'));
        this.set('address', profile.get('profile_physical_address'));
        this.set('partnerSearchString', '');
        if (profile.get('profile_google_map') === null || profile.get('profile_google_map') === 'undefined' || profile.get('profile_google_map') === "") {
            this.createGooglemap();
        }
        else {
            this.set('profile_google_map', profile.get('profile_google_map'));
        }
        this.set('toAddress', profile.get('profile_physical_address') + ", " + profile.get('profile_suburb') + ", " + profile.get('profile_regoin') + ", " + profile.get('profile_country'));

        this.set('suburb', profile.get('profile_suburb'));
        this.set('last_name', profile.get('profile_contact_last_name'));
        this.set("profile_name", profile.get("profile_name"));
        this.set("projectActiveDropdownContent", profile.get("profile_isActive"));
        this.set("projectDeleteDropdownContent", profile.get("profile_isDeleted"));
        this.updateWorkingHourData(profile.get('profile_hours'));
        this.set("collections", profile.get("collections"));

        this.set("reviews", profile.get("reviews"));


        this.set('profile_average_review_length', profile.get("profile_average_review_length"));
        // document.getElementById("starsize").style.width="156px";
        if (profile.get("profile_average_review_length") !== "" && profile.get("profile_average_review_length") !== null && profile.get("profile_average_review_length") !== undefined) {
            $('#starsize').attr("style", "width:" + profile.get("profile_average_review_length") + "px");
            this.set("profile_average_review", profile.get("profile_average_review"));
        }
        else if(profile.get('reviews').get("length")===0){
            console.log("hehe");
             $('#starsize').attr("style", "width:100px");
            this.set("profile_average_review", "5");
        }
        else {
            $('#starsize').attr("style", "width:100px");
            this.set("profile_average_review", "5");
        }

        var collections = profile.get("collections");
        if (this.get('controllers.profilePartners').get("partnerNew") !== undefined && this.get('controllers.profilePartners').get("partnerNew") !== null && this.get('controllers.profilePartners').get("partnerNew") !== "")
        {
            this.get('controllers.profilePartners').set("partnerNew", "");
        }
        this.isFollowed();
        this.checkAuthenticUser();


        this.labelBarRefresh();
        this.flipFrontBack();

        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.setMega();
        this.initStastics(profile);
        this.followerPhoto(id);

//        if (profile.get("keywords") !==null && profile.get("keywords") !== "undefined" && profile.get("keywords").get('length') > 0) {
        this.checkKeywordObjectExist();
        this.set("keywords_array", profile.get('keywords'));
        this.set("show_keyword_id", profile.get('show_keyword_id'));

        if (profile.get("show_keyword_id") !== null && profile.get("show_keyword_id") !== "undefined" && profile.get("show_keyword_id") !== '') {
            this.setShowKeywordsArray(profile.get('show_keyword_id'), profile.get('keywords'));
        } else {
            this.set('show_keyword_id', '');
            this.set('show_keyword_array', []);
        }
//        } else {            
//            this.setKeywordsArray(this.get('model').get('profile_keywords'));
//        }
        if (profile.get("profile_keywords_num") !== null && profile.get("profile_keywords_num") !== "undefined" && profile.get("profile_keywords_num") !== "") {

            this.set("keyword_num", profile.get("profile_keywords_num"));
        } else {
            this.setKeywordsNum(this.get('model').get('profile_package_name'));
        }
        this.set('keyword_left', parseInt(this.get("keyword_num")) - profile.get('keywords').get('length'));        
        this.setAboutUsObject();
    },
    setAboutUsObject: function() {
        if (this.get('model').get('about_us') !== null && this.get('model').get('about_us') !== 'undefined' && this.get('model').get('about_us').get('length') > 0 ) {
            this.set("about_us", this.get('model').get("about_us"));
            this.getVideoURL();
            this.set("isAboutUsObjectExist", true);
        } else {
            this.set('about_us', []);
            this.set("isAboutUsObjectExist", false);
        }
//        var about_us = HubStar.AboutUs.createRecord({"about_id": profile.get('id'), "about_desc": 'just description', "about_template_id": '1', 
//                                                                                            "about_video": [], "about_image": [], 'about_book': []});
//        var about_video = HubStar.AboutVideo.createRecord({"video_id": '1', "video_title": 'video title', "video_desc": 'video description', 
//                                                                                            "video_url": '', "optional": profile.get('id')});
//        about_us.get('about_video').pushObject(about_video);
//        for (var i = 0; i < 2; i ++) {
//            var about_image = HubStar.AboutImage.createRecord({"image_id": i.toString(), "image_title": 'image title', "image_desc": 'image description', 
//                                                                                            "image_url": '',"image_link": '', "optional": profile.get('id')});
//        about_us.get('about_image').pushObject(about_image);
//        }
//        for (var i = 0; i < 3; i ++) {
//            var about_book = HubStar.AboutBook.createRecord({"book_id": i.toString(), "book_title": 'book title', "book_image_url": '', 
//                                                                                            "book_read_url": '',"book_buy_url": '', "optional": profile.get('id')});
//        about_us.get('about_book').pushObject(about_book);
//        }
//        this.set('about_us', about_us);
    },
    checkKeywordObjectExist: function() {
        if (this.get('model').get('keywords') !== null && this.get('model').get('keywords') !== 'undefined' && this.get('model').get('keywords').get('length') > 0) {
            this.set('isKeywordObjecttExist', true);
        } else {
            this.set('isKeywordObjecttExist', false);
        }
    },
    setShowKeywordsArray: function(show_keywords_id, keywords) {
        var newArray = [];
        for (var i = 0; i < keywords.get('length'); i++) {
            if (show_keywords_id.indexOf(keywords.objectAt(i).get('keyword_id')) !== -1) {
                newArray.push(keywords.objectAt(i));
            }
        }
        this.set('show_keyword_array', newArray);
    },
//    setKeywordsArray: function(keywords) {
//        if (keywords !== undefined && keywords !== null && keywords !== '') {
//            this.set('keywords_array', []);
//            var keywords_array = keywords.split(",");
//            for (var i = 0; i < keywords_array.get('length'); i++) {
//                var keyword = HubStar.Keyword.createRecord({"keyword_id": i, "keyword_name": keywords_array[i], "create_date": new Date().getTime(), 
//                                                                                            "expire_date": null, "value": null, 'profile_id': this.get('model').get('id'), 'collection_id': null, "is_delete": false});
//                this.get('keywords_array').insertAt(i,keyword);
//            }
//        }
//    },
    setKeywordsNum: function(profile_package_name) {
        if (profile_package_name === 'Platinum') {
            this.set('keyword_num', 200);
        } else if (profile_package_name === 'Gold') {
            this.set('keyword_num', 100);
        } else if (profile_package_name === 'Silver') {
            this.set('keyword_num', 50);
        } else if (profile_package_name === 'Bronze') {
            this.set('keyword_num', 25);
        }



    },
    createGooglemap: function() {

        var geocoder = new google.maps.Geocoder();
        var addressmap = this.get('model').get("profile_physical_address") + ", " + this.get('model').get("profile_suburb") + ", " + this.get('model').get("profile_regoin") + ", " + this.get('model').get('profile_country');
        var that = this;

        geocoder.geocode({'address': addressmap}, function(results) {
            var imageMap = "http://maps.googleapis.com/maps/api/staticmap?center=" + results[0].geometry.location.lat() + "," + results[0].geometry.location.lng() + "&markers=" + results[0].geometry.location.lat() + "," + results[0].geometry.location.lng() + "&zoom=15&size=300x250&maptype=roadmap&sensor=false";
            that.set('profile_google_map', imageMap);

            requiredBackEnd('profiles', 'googleMap', [that.get('profile_google_map'), that.get('model').get('id')], 'POST', function(params) {
            });
        });
    },
    popUpGoogleMap: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.set('popUpMap', true);
        }
    },
    followerPhoto: function(id)
    {
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'ReadPhoto', id, 'POST', function(params) {
            that.set("contentFollowerPhoto", []);

            if (params === undefined)
            {
            }
            else
            {
                for (var i = 0; i < params.length; i++)
                {
                    dataNew["id"] = params[i]["record_id"];
                    dataNew["name"] = params[i]["name"];
                    dataNew["photo_url"] = params[i]["photo_url"];

                    that.get("contentFollowerPhoto").pushObject(dataNew);

                    dataNew = new Array();
                }
            }
        });

    },
    labelBarRefresh: function() {
        this.set("profileSelectionStatus", "Collections");
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');
        });
    },
    initStastics: function(profile) {
        this.set("profile_partner_ids", profile.get("profile_partner_ids"));

        if (this.get("profile_partner_ids") !== null) {
            if (this.get("profile_partner_ids").length !== 0) {
                var ids = this.get("profile_partner_ids").split(",");
                this.paternsStatistics(ids.get('length'));
            }
            else
            {
                this.set('profilePartnerStatistics', 0);
            }
        }
        else {
            this.set('profilePartnerStatistics', 0);
        }
        this.set("followers", profile.get("followers"));

        if (this.get("followers") !== null)
        {
            this.followersStatistics(this.get('followers').get("length"));
        }
        else {
            this.followersStatistics(0);
        }
        this.statstics();
    },
    submit: function() {
        var collectionController = this.get('controllers.collection');
        var collection = collectionController.getCreateCollection(this.get('newTitle'), this.get('newDesc'), this.get("collections"));
        if (this.get('newDesc').length < 256) {
            if (collection !== null && collection !== "") {
                collection.set('type', 'profile');
                collection.set('optional', this.get('model').get('id'));
                this.get("collections").insertAt(0, collection);

                HubStar.store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
                this.statstics();
                this.set("newTitle", "");
                this.set("newDesc", "");
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
            }
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your description should be less than 256 characters.", "warnning");
        }
    },
    checkingIdisExsinting: function(desc, id, postOrPut) {
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {
                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting");
            }
        }
        return isExsinting;
    },
    setLocalLoginRecrod: function() {
        HubStar.set('afterSearch', true);
        localStorage.user_id = this.get('model.id');     //??why model.id is user_id??
    },
    toggleEditing: function(data, checkingInfo) {
        if (checkingInfo === "profileName") {
            profile_record = data;
            this.set('editing', !this.get('editing'));
        } else if (checkingInfo === "aboutMe") {
            about_record = data;
            this.selectAboutVersion();
        } else if (checkingInfo === "contact") {
            first_name_record = this.get('first_name');
            last_name_record = this.get('last_name');

            //contact_record = this.get('model.contact_user');
            category_record = this.get('model.profile_category');
            address_record = this.get('address');
            suburb_record = this.get('suburb');
            phone_record = this.get('profile_contact_number');
            website_record = this.get('website');
            website_url_record = this.get('website_url');

            this.set('editingContact', !this.get('editingContact'));
        }
        else if (checkingInfo === "timeSetting") {
            this.set('editingTime', !this.get('editingTime'));
        }
    },
    selectAboutVersion: function() {
        if (this.get('isAboutUsObjectExist')) {
            this.selectNewAbout();
        } else {
            var message = "Do you wish to modify the about us by using template? If you choose 'Template', you will lose the previous data.";
            this.set("message", message);
            this.set('select_one', 'HTML5 editor');
            this.set('select_two', 'Template');
            this.set('makeSelection', true);
        }
    },
    selectOldAbout: function() {
//        console.log('old');
        this.set('makeSelection', false);
        this.set('isAboutUsObjectExist', false);
        this.set('editingAbout', !this.get('editingAbout'));
    },
    selectNewAbout: function() {
        if (!this.get('isAboutUsObjectExist')) {
            var about_us = HubStar.AboutUs.createRecord({"about_id": this.get('model').get('id'), "about_desc": '', "about_template_id": '1', 
                                                                                                "about_video": [], "about_image": [], 'about_book': []});
            var about_video = HubStar.AboutVideo.createRecord({"video_id": '1', "video_title": '', "video_desc": '', 
                                                                                                "video_url": '', "optional": this.get('model').get('id')});
            about_us.get('about_video').pushObject(about_video);
            for (var i = 0; i < 2; i ++) {
                var about_image = HubStar.AboutImage.createRecord({"image_id": i.toString(), "image_title": '', "image_desc": '', 
                                                                                                "image_url": '',"image_link": '', "optional": this.get('model').get('id')});
            about_us.get('about_image').pushObject(about_image);
            }
            for (var i = 0; i < 3; i ++) {
                if (i === 0) {
                    var about_book = HubStar.AboutBook.createRecord({"book_id": i.toString(), "book_title": '',"book_description": 'Renovation Trends (29/11)', 
                                                "book_image_url": 'http://shop.trendsideas.co.nz/DesktopModules/NB_Store/makethumbnail.ashx?Image=499&w=300&tabid=101&h=0', 
                                                "book_read_url": 'http://ebooks.trendsideas.com/Book885',"book_buy_url": 'http://shop.trendsideas.co.nz/HomeSeries/tabid/101/ProdID/455/Renovation_Ideas_Trends_Vol_2911.aspx', "optional": this.get('model').get('id')});
                } else if (i === 1) {
                    var about_book = HubStar.AboutBook.createRecord({"book_id": i.toString(), "book_title": '',"book_description": 'New Home Trends (29/10)', 
                                                "book_image_url": 'http://shop.trendsideas.co.nz/DesktopModules/NB_Store/makethumbnail.ashx?Image=483&w=300&tabid=101&h=0', 
                                                "book_read_url": 'http://ebooks.trendsideas.com/Book873',"book_buy_url": 'http://shop.trendsideas.co.nz/HomeSeries/tabid/101/ProdID/447/New_Home_Trends_Vol_2910.aspx', "optional": this.get('model').get('id')});
                } else {
                    var about_book = HubStar.AboutBook.createRecord({"book_id": i.toString(), "book_title": '',"book_description": 'Limited Edition!', 
                                                "book_image_url": 'http://library.trendsideas.com/Portals/0/productimages/418_06894.jpg', 
                                                "book_read_url": '',"book_buy_url": 'http://shop.trendsideas.co.nz/homeseries.aspx?prodid=418', "optional": this.get('model').get('id')});
                }
            about_us.get('about_book').pushObject(about_book);
            }
            this.get('about_us').pushObject(about_us);
        }
//        console.log('new');
        this.set('makeSelection', false);
        this.set('isAboutUsObjectExist', true);       
        this.set('editingAbout', !this.get('editingAbout'));
    },        
    yesAbout: function(checkingInfo) {
        if (checkingInfo === "aboutMe") {

            this.set('editingAbout', !this.get('editingAbout'));
        }
//        for (var i = 0; i < this.get('about_us').objectAt(0).get('about_video').get('length'); i ++) {
//            var video_url = this.get('about_us').objectAt(0).get('about_video').objectAt(i).get('video_url').split('?');
//            if (video_url.lenth >1) {
//                this.get('about_us').objectAt(0).get('about_video').objectAt(i).set('video_url', '//www.youtube.com/embed/'+video_url[1].split('=')[1]);
//            }
//        }
        this.get('about_us').objectAt(0).save();
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "contact") {

            if (this.get("website_url").match(/[http]/g) === -1 || this.get("website_url").match(/[http]/g) === null)
            {
                this.set("website_url", "http://" + this.get("website_url"));
            }


            this.set('editingContact', !this.get('editingContact'));
        }
        else if (checkingInfo === "timeSetting") {
            var updateHour = this.get('hours');
            var data = "";
            for (var i = 0; i < updateHour.length; i++) {
                data = data + updateHour.objectAt(i).day + "=" + updateHour.objectAt(i).time + ",";
            }
            this.set('model.profile_hours', data.substring(0, data.length - 1));
            this.set('editingTime', !this.get('editingTime'));
        }
        this.saveUpdate();
    },
    no: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('profile_name', profile_record);
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "aboutMe") {
            this.set('about_me', about_record);
            this.set('editingAbout', !this.get('editingAbout'));
        }
        else if (checkingInfo === "contact") {
            this.set('first_name', first_name_record);
            this.set('last_name', last_name_record);
            this.set('model.profile_category', category_record);
            this.set('address', address_record);
            this.set('suburb', suburb_record);
            this.set('profile_contact_number', phone_record);
            this.set('website', website_record);
            this.set('website_url', website_url_record);
            this.set('editingContact', !this.get('editingContact'));

        }
        else if (checkingInfo === "timeSetting") {
            this.updateWorkingHourData(this.get('model.profile_hours'));
            this.set('editingTime', !this.get('editingTime'));
        }
    },
    updateWorkingHourData: function(times) {
        this.set('hours', []);
        if (times !== null && times !== "" && typeof times !== "undefined") {
            var time = times.split(",");
            for (var i = 0; i < time.length; i++) {
                var dayAndTime = time[i].split("=");
                this.get('hours').pushObject({day: dayAndTime[0], time: dayAndTime[1]});
            }
        }
    },
    setSelectedCollection: function(id) {
        for (var i = 0; i < this.get("collections").get("length"); i++) {
            var thisCollection = this.get("collections").objectAt(i);
            if (id === thisCollection.get("id")) {
                this.set("selectedCollection", thisCollection);
            }
        }
    },
    statstics: function()
    {
        if (this.get("collections").get("length") !== 0) {
            this.set('profileCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('profileCollectionStatistics', 0);
        }

        if (this.get("reviews").get("length") !== 0) {
            this.set('profileReviewStatistics', this.get("reviews").get("length"));
        }
        else
        {
            this.set('profileReviewStatistics', 0);
        }
    },
    paternsStatistics: function(length) {
        this.set('profilePartnerStatistics', length);
    },
    followersStatistics: function(length) {
        this.set('profileFollowerStatistics', length);
    },
    deleteSelectedCollection: function()
    {

        var message = "'Delete this collection?";

        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            var tempCollection = this.get("selectedCollection");
            var delInfo = [tempCollection.id, this.get('model').get('id'), 'profile'];
            delInfo = JSON.stringify(delInfo);
            requiredBackEnd('collections', 'delete', delInfo, 'POST', function(params) {
            });
            this.get("collections").removeObject(this.get("selectedCollection"));
            this.statstics();
            $('#masonry_user_container').masonry("reload");
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
        }
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    updateCollectionInfo: function() {
        if (this.get('newDesc').length < 256) {
            this.get('selectedCollection').set('title', this.get('newTitle'));
            this.get('selectedCollection').set('desc', this.get('newDesc'));
            var collectionController = this.get('controllers.collection');
            var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
            collection.set('optional', this.get('model').get('id'));
            collection.set('type', 'profile');
            this.set('selectedCollection', collection);
            this.get("selectedCollection").store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
            this.set('newTitle', '');
            this.set('newDesc', '');
        }
        else
        {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your description should be less than 256 characters.", "warnning");
        }
    },
    toggleUpload: function() {
        $('.corpbanner_mask').toggleClass('hideClass');
        this.set('uploadChecking', !this.get('uploadChecking'));
    },
    editingContactForm: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Contact us');
            var contactController = this.get('controllers.contact');

            this.get("controllers.contact").set('secondStepOfContactEmail', false);
            this.get("controllers.contact").set('firstStepOfContactEmail', false);

            contactController.setSelectedMega(this.get('currentUserID'));
            this.set('contactChecking', !this.get('contactChecking'));
        }
    },
    closeContact: function() {
        this.set('contactChecking', false);
    },
    uploadImage: function() {
        var user = this.getCurrentProfile(this.get('currentUserID'));
        if ($('.background').val() !== "") {
            user.set("profile_bg_url", $('.background').val());
        }
        if ($('.hero').val() !== "") {
            user.set("profile_hero_url", $('.hero').val());
        }
        if ($('.picture').val() !== "") {
            user.set("profile_pic_url", $('.picture').val());
        }
        this.saveUpdate();
        this.toggleUpload();
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
        if (current_user_email !== null && current_user_email !== undefined && current_user_email !== "") {
            var isAdmin = permissionController.setIsAdmin(current_user_email);
            this.set('isAdmin', isAdmin);
            that.set("is_authentic_user", is_authentic_user);
        } else {
            currentUser.addObserver('isLoaded', function() {
                var current_user_email = currentUser.get('email');
                if (currentUser.get('isLoaded')) {
                    var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
                    that.set("is_authentic_user", is_authentic_user);
                    var isAdmin = permissionController.setIsAdmin(current_user_email);
                    that.set('isAdmin', isAdmin);
                    isAdmin = permissionController.setIsAdmin(current_user_email);
                }
            });
        }
    },
    isFollowed: function()
    {
        if (this.checkFollowStatus())
        {
            this.set('follow_status', true);
        }
        else {
            this.set('follow_status', false);
        }
    },
    followThisProfile: function() {

        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            var profile_id = this.get('model').get('id');
            if (this.checkFollowStatus() === false) {
                this.get("controllers.userFollowings").followProfile(profile_id);
                this.sendEventTracking('event', 'button', 'click', 'Follow');
                this.set('follow_status', true);
            } else {
                this.get("controllers.userFollowings").unFollowProfile(profile_id);
                this.sendEventTracking('event', 'button', 'click', 'unFollow');
                this.set('follow_status', false);
            }
        }

    },
    socialLink: function(link) {
//        var profile = HubStar.Profile.find(this.get('currentUserID'));
        if (link === 'facebook') {
            window.open(this.get("facebook"));
        }
        else if (link === 'twitter') {
            window.open(this.get("twitter"));
        }
        else if (link === 'googleplus') {
            window.open(this.get("googleplus"));
        }
        else if (link === 'pinterest') {
            window.open(this.get("pinterest"));
        }
        else if (link === 'youtube') {
            window.open(this.get("youtube"));
        }
        else if (link === 'linkedin') {
            window.open(this.get("linkedin"));
        }

    },
    checkFollowStatus: function()
    {
        var isFollow = false;
        var followers = this.get("model").get("followers");
        for (var i = 0; i < followers.get('length'); i++) {
            var follower_id = followers.objectAt(i).get("follower_id");
            if (follower_id === localStorage.loginStatus)
            {
                isFollow = true;
                break;
            }
        }
        return isFollow;
    },
    selectCollection: function() {

        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');


        this.sendEventTracking('event', 'button', 'click', 'Collections');
        this.set('partnerPage', 'Collections');
        this.set('profileSelectionStatus', 'Collections');
        this.set("Id", this.get('collections').objectAt(0).get('optional'));
        this.set('partnerTag', false);
        this.set('followerProfileTag', false);
        this.set('collectionTag', true);
        this.set('reviewTag', false);
        this.set('videoTag', false);
        this.transitionToRoute('profileCollections');

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);

    },
    selectVideo: function(model) {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Video');
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#video').addClass('selected-user-stats');
            this.set('profileSelectionStatus', 'Videos');
            this.get('controllers.profileVideos').getClientId(model);
            this.set('videoTag', true);
            this.set('partnerTag', false);
            this.set('collectionTag', false);
            this.set('reviewTag', false);
            this.set('followerProfileTag', false);
            this.transitionToRoute('profileVideos');
        }

    },
    selectPartner: function(model) {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Partners');
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#network').addClass('selected-user-stats');
//            HubStar.set("lastPositionId", model.id);
            this.set('profileSelectionStatus', 'Network');
            this.set('partnerTag', true);
            this.set('collectionTag', false);
            this.set('followerProfileTag', false);
            this.set('reviewTag', false);
            this.get('controllers.itemProfiles').setPartnerRemove();
            this.set('videoTag', false);
            this.transitionToRoute('partners');

            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);

        }
    },
    selectFollower: function(model) {

        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Followers');
            this.set('profileSelectionStatus', 'Followers');
            this.set('partnerTag', false);
            this.set('collectionTag', false);
            this.set('followerProfileTag', true);
            this.set('reviewTag', false);
            this.set('videoTag', false);
            this.transitionToRoute('profileFollowers');
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
        }
    },
    selectReview: function(model) {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.sendEventTracking('event', 'button', 'click', 'Reviews');
            this.set('profileSelectionStatus', 'Reviews');
            this.set('partnerTag', false);
            this.set('collectionTag', false);
            this.set('followerProfileTag', false);
            this.set('reviewTag', true);
            this.set('videoTag', false);
            this.transitionToRoute('reviews');
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
        }
    },
    saveUpdateAboutUs: function() {
        var update_About_record = HubStar.Profile.find(this.get('model.id'));
        update_About_record.set("profile_about_us", editor.getValue());
        this.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_About_record);
        HubStar.store.save();
    },
    saveUpdate: function() {
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));

        update_profile_record.set('profile_editors', this.get('editors'));
        update_profile_record.set('profile_keywords', this.get('keywords'));
        update_profile_record.set('profile_keywords_num', parseInt(this.get('keyword_num')));
        update_profile_record.set('profile_regoin', this.get('region'));
        update_profile_record.set('profile_country', this.get('country'));
        update_profile_record.set('profile_boost', this.get('boost'));
        update_profile_record.set('profile_domains', this.get('domains'));
        update_profile_record.set('profile_hero_url', this.get('profile_hero_url'));
        update_profile_record.set('profile_pic_url', this.get('profile_pic_url'));
        update_profile_record.set('profile_bg_url', this.get('profile_bg_url'));
        update_profile_record.set('show_keyword_id', this.get('show_keyword_id'));
        this.saveLink('profile_facebook_link', 'facebook');
        this.saveLink('profile_twitter_link', 'twitter');
        this.saveLink('profile_googleplus_link', 'googleplus');
        this.saveLink('profile_pinterest_link', 'pinterest');
        this.saveLink('profile_linkedin_link', 'linkedin');
        this.saveLink('profile_youtube_link', 'youtube');

        if (this.get('controllers.profilePartners').get("partnerNew") !== undefined && this.get('controllers.profilePartners').get("partnerNew") !== null && this.get('controllers.profilePartners').get("partnerNew") !== "")
        {
            if (update_profile_record.get('profile_partner_ids').length !== this.get('controllers.profilePartners').get("partnerNew").length) {
                update_profile_record.set('profile_partner_ids', this.get('controllers.profilePartners').get("partnerNew"));
                this.get('controllers.profilePartners').set("partnerNew", "");
            }
        }


        update_profile_record.set('profile_package_name', this.get('projectCategoryDropdownContent'));
        update_profile_record.set('owner_contact_bcc_emails', this.get('direct_enquiry_provide_email'));
        update_profile_record.set('owner_contact_cc_emails', this.get('secondary_email'));
        update_profile_record.set('owner_contact_email', this.get('contact_email'));
        update_profile_record.set('profile_website', this.get('website'));
        update_profile_record.set('profile_website_url', this.get('website_url'));
        update_profile_record.set('profile_cover_text', this.get('profile_cover_text'));
        update_profile_record.set('profile_analytics_code', this.get('profile_analytics_code'));
        update_profile_record.set('profile_contact_number', this.get('profile_contact_number'));
        update_profile_record.set('profile_contact_first_name', this.get('first_name'));
        update_profile_record.set('profile_physical_address', this.get('address'));
        update_profile_record.set('profile_suburb', this.get('suburb'));
        update_profile_record.set('profile_contact_last_name', this.get('last_name'));
        update_profile_record.set("profile_name", this.get('profile_name'));
        update_profile_record.set("profile_isActive", this.get("projectActiveDropdownContent"));
        update_profile_record.set("profile_isDeleted", this.get("projectDeleteDropdownContent"));
        this.createGooglemap();
        this.set('toAddress', update_profile_record.get('profile_physical_address') + ", " + update_profile_record.get('profile_suburb') + ", " + update_profile_record.get('profile_regoin') + ", " + update_profile_record.get('profile_country'));
        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_profile_record);
        if (update_profile_record.get('stateManager') !== null && update_profile_record.get('stateManager') !== undefined) {
            update_profile_record.get('stateManager').transitionTo('loaded.saved');
        }
        this.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");

        HubStar.store.save();
    },
//    saveShowKeywords: function() {
//        var show_keyword_id = '';
//        for (var i = 0; i < this.get('show_keyword_array').get('length'); i++) {
//            show_keyword_id = show_keyword_id+','+ this.get('keywords_array').objectAt(i).get('keyword_id');
//        }
//        this.set('show_keyword_id',show_keyword_id);
//        this.saveUpdate();
//    },
    addKeywords: function() {
        var keywords_JSON = [];
        var add_keywords_array = this.get('add_keywords').split(',');
        if (this.get('keywords_array').get('length') + add_keywords_array.get('length') <= this.get('keyword_num')) {
            for (var i = 0; i < add_keywords_array.get('length'); i++) {
                var keyword = this.addKeyword(add_keywords_array[i]);
                keywords_JSON.push(JSON.stringify(keyword));
            }
            requiredBackEnd('keywords', 'addKeywords', keywords_JSON, 'POST', function(params) {
            });
            this.set('add_keywords', "");
            this.set('keyword_left', this.get('keyword_left') - add_keywords_array.get('length'));
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "You can not add keywords more than " + this.get('keyword_num'), 'failed');
        }
    },
    addKeyword: function(keyword_name) {
        var keyword_id = new Date().getTime() + Math.random().toString().substring(2, 7);
        var keyword = HubStar.Keyword.createRecord({"keyword_id": keyword_id, "keyword_name": keyword_name, "create_date": new Date().getTime(),
            "expire_date": null, "value": null, 'profile_id': this.get('model').get('id'), 'collection_id': null, "is_delete": false});
        this.get('keywords_array').pushObject(keyword);
        return keyword;
    },
    deleteKeywords: function(keyword_id, type) {
        if (type === "all") {
            for (var i = 0; i < this.get('keywords_array').get('length'); i++) {
                if (this.get('keywords_array').objectAt(i).get('keyword_id') === keyword_id) {
                    requiredBackEnd('keywords', 'delete', JSON.stringify(this.get('keywords_array').objectAt(i)), 'POST', function(params) {
                    });
                    this.get('keywords_array').removeObject(this.get('keywords_array').objectAt(i));
                    this.set('keyword_left', this.get('keyword_left') + 1);
                }
            }
            if (this.get('show_keyword_id').indexOf(keyword_id) > -1) {
                this.set('show_keyword_id', this.get('show_keyword_id').replace(',' + keyword_id, ''));
                for (var i = 0; i < this.get('show_keyword_array').get('length'); i++) {
                    if (this.get('show_keyword_array').objectAt(i).get('keyword_id') === keyword_id) {
                        this.get('show_keyword_array').removeObject(this.get('show_keyword_array').objectAt(i));
                        this.set('show_keyword_id', this.get('show_keyword_id').replace(',' + keyword_id, ''));
                    }
                }
            }
        } else {
            for (var i = 0; i < this.get('show_keyword_array').get('length'); i++) {
                if (this.get('show_keyword_array').objectAt(i).get('keyword_id') === keyword_id) {
                    this.get('show_keyword_array').removeObject(this.get('show_keyword_array').objectAt(i));
                    this.set('show_keyword_id', this.get('show_keyword_id').replace(',' + keyword_id, ''));
                }
            }
        }
    },
    flipFrontClick: function() {
        $(".hover").addClass('flip');
        this.selectionForDashborad();


    },
    selectionForDashborad: function() {
        $('.front').attr("style", "text-align: inherit; width: auto;  box-shadow: none; border: none; position: relative;height:" + $('.back').height() + "px");
    },
    changeSize: function() {
        var that = this;
        setTimeout(function() {
            that.selectionForDashborad();
        }, 1);
    },
    flipFrontBack: function() {
        $(".hover").removeClass('flip');
        $('.front').attr("style", "text-align: inherit; width: auto; height: auto; box-shadow: none; border: none; position: relative;");
    }, setUploadImageMode: function(mode)
    {
        this.set('isPhotoUploadMode', true);
        this.set('isPhotoEditingMode', false);
        this.set('isFinished', false);
        this.set('UploadImageMode', mode);
        var data = {"RequireIamgeType": mode};
        var that = this;
        requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {

            var requiredSize = "Your required image size is " + params.width + "x" + params.height;
            that.set('RequiredImageSize', requiredSize);
        });
    }, profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
        var that = this;
        getImageWidth(src, function(width, height) {
            that.set('newStyleImageSource', src);
            that.set('newStyleImageName', name);
            that.set('currentWidth', width);
            that.set('currentHeight', height);
            if (that.get('newStyleImageSource') !== null && that.get('newStyleImageSource') !== "")
            {
                var size = "Your image size is " + width + "x" + height;
                that.set('CurrentImageSize', size);
                that.set('isCrop', true);
                that.set('isUpload', true);

            }
        });
    },
    saveLink: function(link_url, link) {

        var http = "http://";
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        if (this.get(link) === null || this.get(link) === "" || this.get(link) === undefined)
        {
            this.get(link) === "";
            update_profile_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        }
        else if (this.get(link).slice(0, 5) === 'https' || this.get(link).slice(0, 5) === 'http:') {
            update_profile_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        } else if (link !== "") {
            update_profile_record.set(link_url, http.concat(this.get(link)));
            this.set(link, http.concat(this.get(link)));
        }
        return update_profile_record;
    },
    cropButton: function()
    {
        this.set('cropsize', $('#panel').text());
        this.set('isPhotoUploadMode', false);
        this.set('isPhotoEditingMode', true);
        this.set('isFinished', false);
        this.set('isUpload', false);

        if (this.get('UploadImageMode') === "Profile Picture")
        {
            this.set('isProfilePicture', true);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', false);
        } else if (this.get('UploadImageMode') === "Profile Hero")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', true);
            this.set('isProfileBackground', false);
        } else if (this.get('UploadImageMode') === "Background")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', true);

        }
        var that = this;
        Ember.run.later(function() {
            crop(that.get('newStyleImageSource'));

        }, 0);


    },
    photoUpload: function() {
        if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
        {

            var src = this.get('newStyleImageSource');
            var that = this;
            that.set('loadingTime', true);

            getImageWidth(src, function(width, height) {
                that.set('currentWidth', width);
                that.set('currentHeight', height);
                var data = {"RequireIamgeType": that.get('UploadImageMode')};
                requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {
                    if ((width >= params.width) && (height >= params.height))
                    {

                        if (that.get('isUpload') === true) {
                            //    that.set('isCrop', false);
                            that.setTempImage();
                        }
                        else if (that.get('isCrop') === true)
                        {
                            //       that.set('isUpload', false);
                            that.setCropImage();
                        }


                        var data1 = {"newStyleImageSource": that.get('newStyleImageSource'),
                            'newStyleImageName': that.get('newStyleImageName'),
                            'mode': that.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                            'id': that.get('model.id')};
                        that.set('loadingTime', true);
                        requiredBackEnd('profiles', 'updateStyleImage', data1, 'POST', function(params) {
                            //     $('#uploadStyleImg').attr("style", "display:none");
                            that.set('isPhotoEditingMode', false);
                            that.set('isPhotoUploadMode', false);
                            that.set('isFinished', true);
                            that.set("isCrop", false);
                            HubStar.store.save();
                            that.get('controllers.applicationFeedback').statusObserver(null, "Profile updated.");
                            that.set('loadingTime', false);
                        });

                    }


                    else if (width < params.width || height < params.height) {
                        that.set('loadingTime', false);
                        that.get('controllers.applicationFeedback').statusObserver(null, "Please upload image size larger than  " + params.width + "x" + params.height);
                        that.set('newStyleImageSource', "");
                        that.set('newStyleImageName', "");
                        that.set('CurrentImageSize', "");
                        that.set('isCrop', false);
                        that.set('isUpload', false);


                    }

                });


            });

        }

    },
    setCropImage: function() {
        var cropData = getResults();
        this.set('newStyleImageSource', cropData);
        this.setTempImage();
    },
    setTempImage: function() {
        var model = this.get('model');
        if (this.get('UploadImageMode') === "Profile Picture")
        {
            this.set('isProfilePicture', true);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', false);
            this.set('profile_pic_url', this.get('newStyleImageSource'));
            model.set('profile_pic_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Profile Hero")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', true);
            this.set('isProfileBackground', false);
            this.set('profile_hero_url', this.get('newStyleImageSource'));
            model.set('profile_hero_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Background")
        {
            this.set('isProfilePicture', false);
            this.set('isProfileHero', false);
            this.set('isProfileBackground', true);
            this.set('profile_bg_url', this.get('newStyleImageSource'));
            model.set('profile_bg_url', this.get('newStyleImageSource'));
        }


    },
    resetNewStyleImageSource: function()
    {
        this.set('newStyleImageSource', "");
        this.set('newStyleImageName', "");
        this.set('CurrentImageSize', "");
        this.set('isCrop', false);
        this.set('isUpload', false);

        this.changeSize();
    }, dropdown: function(checking) {
        if (checking === "package") {
            this.set('isActiveDropdown', false);
            this.set('isDeleteDropdown', false);
            this.set('isPackgetDropdown', !this.get('isPackgetDropdown'));

        } else if (checking === "active") {
            this.set('isDeleteDropdown', false);
            this.set('isPackgetDropdown', false);
            this.set('isActiveDropdown', !this.get('isActiveDropdown'));
        }
        else if (checking === "delete") {
            this.set('isPackgetDropdown', false);
            this.set('isActiveDropdown', false);
            this.set('isDeleteDropdown', !this.get('isDeleteDropdown'));
        }
    }, getTest: function() {

        return "test";

    },
    rateEditing: function(id) {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            if (this.get('model').get('reviews').get('length') === 0) {
                this.set("rateTime", true);
            }
            else if (this.get('model').get('reviews').get('length') > 0) {
                if (this.get('model').get('reviews').objectAt(0).get("review_user_id").indexOf(localStorage.loginStatus) !== -1)
                {
                    this.set("rateTime", false);
                    this.get('controllers.applicationFeedback').statusObserver(null, "You have already reviewed this profile, thank you!.", "warnning");
                } else {
                    this.set("rateTime", true);
                }
            }
        }
    },
    setCollectionAttr: function() {
        this.set("newTitle", this.get('selectedCollection').get('title'));
        this.set("newDesc", this.get('selectedCollection').get('desc'));
        collection_title_record = this.get('selectedCollection').get('title');
        collection_desc_record = this.get('selectedCollection').get('desc');
    },
    getCollectionAttr: function() {
        this.get('selectedCollection').set('title', collection_title_record);
        this.get('selectedCollection').set('desc', collection_desc_record);
        this.set("newTitle", collection_title_record);
        this.set("newDesc", collection_desc_record);
    },
    gotoSize: function()
    {
        if (this.get('website_url') !== null && this.get('website_url') !== "") {
            window.open(this.get('website_url'));
        }
    },
    sendEventTracking: function(hitType, category, action, label) {
        if (this.isTracking) {
            var analytics_array = this.get('model').get('profile_analytics_code').split(',');
            for (var i = 0; i < analytics_array.length; i ++) {
                ga(this.get('model').get('id').split('-').join('')+i.toString() + '.send', {
                    'hitType': hitType,
                    'eventCategory': category,
                    'eventAction': action,
                    'eventLabel': label
                });
            }
        }
    },
    dropdownPhotoSetting: function() {
        //  this.set('sharePhotoUrl', this.get('selectedPhoto').get('photo_image_thumbnail_url'));
        //  this.set('sharePhotoName', this.get('selectedPhoto').get('photo_title'));

        $("#dropdown_id_").toggleClass('hideClass');
        $("#dropdown_id_").click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });
    },
    // share to social facebook
    fbShare: function() {
        var that = this;
        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get('currentUserID');
        var caption = '';
        if (this.get('profile_cover_text') !== null)
        {
            caption = this.get('profile_cover_text');

        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.get('profile_pic_url'),
            name: this.get('profile_name'),
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function() {
        var caption = '';
        if (this.get('profile_cover_text') !== null)
        {
            caption = this.get('profile_cover_text');

        }
        else
        {
            caption = '';
        }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//        }
        $("meta[property='og\\:title']").attr("content", this.get('profile_name'));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.get('profile_pic_url'));


        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get('currentUserID');
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function() {
        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get('currentUserID');
        var url = 'https://twitter.com/share?text=' + this.get('profile_name') + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {

        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get('currentUserID');
        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.get('profile_pic_url')) +
                '&description=' + encodeURIComponent(this.get('profile_name'));
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    keywordSearch: function(keyword) {
        this.transitionToRoute('searchIndex');
        this.get("controllers.application").set('search_string', keyword);
        this.get("controllers.application").newSearch();
    },
    dragIntoFront: function() {
        if (this.get('dragTargetIndex') < 0) {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please drag keywords from the keywords list below.", "warnning");
        } else if (this.get('show_keyword_array').get('length') > 9) {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your can maximum show 10 keywords on the profile.", "warnning");
        } else {
            if (this.get('show_keyword_id').indexOf(this.get('keywords_array').objectAt(this.get('dragTargetIndex')).get('keyword_id')) === -1) {
                this.get('show_keyword_array').pushObject(this.get('keywords_array').objectAt(this.get('dragTargetIndex')));
                this.set('show_keyword_id', this.get('show_keyword_id') + ',' + this.get('keywords_array').objectAt(this.get('dragTargetIndex')).get('keyword_id'));
            } else {
                this.get('controllers.applicationFeedback').statusObserver(null, "This keyword has already been in the show list.", "warnning");
            }
        }
    },
    partnerSearch: function()
    {
        if (this.get('partnerSearchString') !== null && this.get('partnerSearchString') !== '') {
            var profilePartnersController = this.get("controllers.profilePartners");
            profilePartnersController.searchPartner(this.get('partnerSearchString'));
        }
    },
    partnerSearchReset: function(model)
    {
        var profilePartnersController = this.get("controllers.profilePartners");
        this.set('partnerSearchString', '');
        profilePartnersController.getClientId(model);
    },
    getVideoURL: function() {
        var video_url = this.get('about_us').objectAt(0).get('about_video').objectAt(0).get('video_url').split('?');
        if (video_url.get('length') >1) {            
            var VideoURL = '//www.youtube.com/embed/'+video_url[1].split('=')[1];
            this.set('embeded_url', VideoURL);
        } else {
            this.set('embeded_url', '');
        }
    }
}
);



})();

(function() {

HubStar.ProfileFollowersController = Ember.Controller.extend({
        content: [],
        followers: "",
        getClientId: function(model) {
            this.set('clientID', model.id);
            this.set('followers', model.get('followers'));
            this.set('content', this.get('followers'));
        }

    });


})();

(function() {


var passSubmit = true;
var multiEmail1 = true;
var multiEmail2 = true;
HubStar.ProfileNewController = Ember.ObjectController.extend({
    profile_name: "",
    categorySelection: "category",
    packgeSelection: "package",
    profile_url: "",
    first_name: "",
    last_name: "",
    address: "",
    suburb: "",
    categoryDropdown: false,
    packgetDropdown: false,
    contact_number: "",
    website: "",
    website_url: "",
    client_name: "",
    owner: "",
    direct_enquiry_emails: "",
    region: "",
    creater: "",
    editors: "",
    country: "",
    boost: "",
    package: "",
    profile_contact_number: "",
    secondary_email: "",
    direct_enquiry_provide_email: "",
    profile_bg_url: "",
    profile_hero_url: "",
    profile_pic_url: "",
    keywords: "",
    validateEmail: function(email)
    {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    multiEmailChecking: function(cleanEmail, divInfo, multiEmail) {


        if (cleanEmail.indexOf(',') === -1) {
            if (this.validateEmail(cleanEmail)) {

                multiEmail = true;
                $(divInfo).attr('style', 'display:none');
            } else {
                multiEmail = false;
                $(divInfo).attr('style', 'display:block');
            }

        } else {
            multiEmail = true;
            var emails = cleanEmail.split(',');
            for (var i = 0; i < emails.length; i++) {

                if (!this.validateEmail(emails.objectAt(i))) {
                    multiEmail = false;
                    $(divInfo).attr('style', 'display:block');
                }
            }
            if (multiEmail) {

                $(divInfo).attr('style', 'display:none');
            }

        }
        return multiEmail;
    },
    numberChecking: function(divInfo, number) {
        var matches = number.match('^[0-9]+$');
        if (matches !== null) {
            $(divInfo).attr('style', 'display:none');
            return true;
        }
        $(divInfo).attr('style', 'display:block');
        return false;
    },
    specialCharactersChecking: function(str) {

        var re = /^[a-zA-Z-]*$/;
        return re.test(str);
    },
    spaceChecking: function(str) {

        if (str.indexOf(" ") !== -1) {
            str = str.split(' ').join('-');
        }
        return str;
    },
    fillInChecking: function() {

        multiEmail2 = this.multiEmailChecking($('.mustFill6').val(), '#emailFormat6', multiEmail2);
        var boost = this.numberChecking('#number1', $('.mustFill7').val());

        if ($('.mustFill1').val() !== "" && $('.mustFill2').val() !== "" && $('.country').val() !== "" && $('.region').val() !== "" && $('.mustFill3').val() !== "" && multiEmail1
                && $('.mustFill5').val() !== "" && $('.mustFill4').val() !== "" && $('.mustFill6').val() !== "" && boost && $('.mustFill7').val() !== "" && multiEmail2 && this.validateEmail($('.mustFill5').val())
                && this.validateEmail($('.mustFill3').val())) {
            passSubmit = true;
        } else {
            passSubmit = false;
        }

        if (this.specialCharactersChecking(this.spaceChecking($('.mustFill2').val()))) {

            $('#invalide').attr('style', 'display:none');
        } else {

            $('#invalide').attr('style', 'display:block');
            passSubmit = false;
        }
        if (this.validateEmail($('.mustFill3').val())) {

            $('#emailFormat3').attr('style', 'display:none');
        } else {

            $('#emailFormat3').attr('style', 'display:block');
        }

        if (this.validateEmail($('.mustFill5').val())) {

            $('#emailFormat5').attr('style', 'display:none');
        } else {

            $('#emailFormat5').attr('style', 'display:block');
        }
        if ($('.region').val() === "") {

            $('#region').attr('style', 'display:block');
        } else {
            $('#region').attr('style', 'display:none');
        }

        if ($('.country').val() === "") {

            $('#country').attr('style', 'display:block');
        } else {
            $('#country').attr('style', 'display:none');
        }

        if ($('.mustFill1').val() === "") {

            $('#mustFill1').attr('style', 'display:block');
        } else {
            $('#mustFill1').attr('style', 'display:none');
        }
        if ($('.mustFill2').val() === "") {

            $('#mustFill2').attr('style', 'display:block');
        } else {
            $('#mustFill2').attr('style', 'display:none');
        }
        if ($('.mustFill3').val() === "") {
            $('#emailFormat3').attr('style', 'display:none');
            $('#mustFill3').attr('style', 'display:block');
        } else {
            $('#mustFill3').attr('style', 'display:none');
        }
        if ($('.mustFill4').val() === "") {

            $('#mustFill4').attr('style', 'display:block');
        } else {
            $('#mustFill4').attr('style', 'display:none');
        }
        if ($('.mustFill5').val() === "") {

            $('#emailFormat5').attr('style', 'display:none');
            $('#mustFill5').attr('style', 'display:block');
        } else {
            $('#mustFill5').attr('style', 'display:none');
        }

        if ($('.mustFill6').val() === "") {

            $('#mustFill6').attr('style', 'display:block');
        } else {
            $('#mustFill6').attr('style', 'display:none');
        }

        if ($('.mustFill7').val() === "") {

            $('#mustFill7').attr('style', 'display:block');
        } else {
            $('#mustFill7').attr('style', 'display:none');
        }

        if ($('.background').val() === "") {

            this.set('profile_bg_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg");
        }
        if ($('.hero').val() === "") {

            this.set('profile_hero_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg");
        }
        if ($('.picture').val() === "") {

            this.set('profile_pic_url', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg");
        }
    },
    save: function() {

        this.fillInChecking();
        if (passSubmit) {
            var newMegaNewModel = HubStar.store.createRecord(HubStar.Meganew, {//15
                "id": this.spaceChecking(this.get("profile_url").toLowerCase()),
                "type": "profile",
                accessed: null,
                boost: this.get("boost"),
                is_active: "true",
                is_indexed: "true",
                category: $('#categorySelection').text(),
                created: "",
                creator: this.get("creater"),
                country: this.get("country"),
                region: this.get("region"),
                domains: getDomain(),
                editors: this.get("editors"),
                keywords: this.get("keywords"),
                owner_type: "profiles", // profiles or user can upload files, this could help to link back to their profile.
                owner_profile_pic: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg",
                owner_title: this.get("profile_name"), //profile name
                owner_id: this.get("profile_url"), //profile id
                owner_contact_email: this.get("direct_enquiry_emails"),
                owner_contact_cc_emails: this.get("secondary_email"),
                owner_contact_bcc_emails: this.get("direct_enquiry_provide_email"),
                updated: ""
            });

            var newProfile = HubStar.store.createRecord(HubStar.Profile, {
                id: this.spaceChecking(this.get("profile_url").toLowerCase()),
                profile_name: this.get("profile_name"),
                profile_contact_last_name: this.get("last_name"),
                profile_contact_first_name: this.get("first_name"),
                profile_about_us: "<br>Welcome!<br>",
                profile_package_name: $('#packgeSelection').text(),
                profile_bg_url: this.get("profile_bg_url"),
                profile_hero_url: this.get("profile_hero_url"),
                profile_pic_url: this.get("profile_pic_url"),
                owner: this.get("owner"),
                profile_creater: this.get("creater"),
                profile_editors: this.get("editors"),
                profile_contact_number: this.get("profile_contact_number"),
                owner_contact_email: this.get("direct_enquiry_emails"),
                owner_contact_cc_emails: this.get("secondary_email"),
                owner_contact_bcc_emails: this.get("direct_enquiry_provide_email"),
                profile_category: $('#categorySelection').text(),
                profile_physical_address: this.get("address"),
                profile_suburb: this.get("suburb"),
                profile_keywords: this.get("keywords"),
                profile_regoin: this.get("region"),
                profile_country: this.get("country"),
                profile_hours: "Monday=9:00am-5:00pm,Tuesday=9:00am-5:00pm,Wednesday=9:00am-5:00pm,Thursday=9:00am-5:00pm,Friday=9:00am-5:00pm,Saturday=closed,Sunday=closed,Holidays=closed",
                phone_number: this.get("contact_number"),
                profile_partner_ids: null,
                collections: [],
                profile_website_url: this.get("website_url"),
                profile_website: this.get("website")
            });

            newMegaNewModel.get("profile").addObject(newProfile);
            var that = this;


            newMegaNewModel.store.save();



            newMegaNewModel.addObserver('isDirty', function() {
                if (!newMegaNewModel.get('isDirty')) {

                    that.transitionToRoute('profile', newProfile);
                } else {
                }
            });
        }

    },
    dropdown: function(checking) {

        if (checking === "category") {
            this.set('packgetDropdown', false);
            this.set('categoryDropdown', !this.get('categoryDropdown'));
        } else if (checking === "package") {
            this.set('categoryDropdown', false);
            this.set('packgetDropdown', !this.get('packgetDropdown'));
        }
    }
});


})();

(function() {

HubStar.ProfilePartnersController = Ember.Controller.extend({
    content: [],
    clientID: "",
    partnerID: "",
    model: "",
    delID: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    partnerNew: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'profile'],
    addingPartnerObserver: function() {
        var addProfilePic = this.get('currentAddPartnerPic').split("/profiles/")[1];
        this.set('selectedPartnerPic', HubStar.Profile.find(addProfilePic).get('profile_pic_url'));
    }.observes('currentAddPartnerPic'),
    getClientId: function(model) {
        this.set("partnerNew", "");
        this.set('content', []);
        this.set("model", model);
        this.set('clientID', model.id);
        this.set('loadingTime', false);
        this.set('partnerID', model.get('profile_partner_ids'));
        if (this.get('partnerID') !== null && this.get('partnerID') !== 'undefined' && this.get('partnerID') !== "") {
            this.set('loadingTime', true);
            var data = HubStar.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
            var that = this;
            data.addObserver('isLoaded', function() {
                that.checkAuthenticUser();
                if (data.get('isLoaded')) {
                    that.setContent(data);
                    that.get('controllers.profile').paternsStatistics(this.get('content').get("length"));
                    var lastPositionId = HubStar.get('lastPositionId');
                    var lastPosition = HubStar.get("scrollPartenerPosition");
                    if (model.id === lastPositionId) {
                        $(window).scrollTop(lastPosition);
                    }
                    that.set('loadingTime', false);
                    setTimeout(function() {
                        $('#masonry_user_container').masonry("reload");
                    }, 200);
                }
            });
        }
        var lastPositionId = HubStar.get('lastPositionId');
        var lastPosition = HubStar.get("scrollPartenerPosition");
        if (model.id === lastPositionId)
        {

            $(window).scrollTop(lastPosition);

        }
        this.checkAuthenticUser();
    }
    ,
    deleteSelectedPartner: function(idDel) {
        if (idDel !== undefined)
        {
            this.set("delID", idDel);
        }
        else
        {
            idDel = this.get("delID");
        }
        var message = "Remove this partner?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            var ids = this.get("partnerID").split(",");
            var delResult = "";
            for (var i = 0; i < ids.length; i++)
            {
                if (idDel !== ids[i])
                {
                    delResult = delResult + ids[i] + ",";
                }
            }
            delResult = delResult.substr(0, delResult.length - 1);
            this.set('partnerID', delResult);
            var profileOwner = HubStar.Profile.find(this.get('clientID'));
            profileOwner.set('profile_partner_ids', this.get('partnerID'));
            this.removePartnerObject(idDel);
            HubStar.store.commit();
            this.get('controllers.profile').paternsStatistics(this.get('content').get("length"));
            $('#masonry_user_container').masonry("reload");
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            //HubStar.set('data', model);
        }
    },
    removePartnerObject: function(partner_id)
    {
        var data = this.get('content');
        for (var i = 0; i < data.get("length"); i++) {
            var tempmega = data.objectAt(i);
            if (tempmega.get('id') === partner_id) {
                data.removeObject(tempmega);
                break;
            }
        }
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    submit: function() {
        var client_input = this.get("currentAddPartnerPic");
        if (client_input.indexOf("/profiles/") !== -1) {
            var client_id = client_input.split("/profiles/")[1];
            var temp = this.get('partnerID');
            if (temp === null || temp === "") {
                this.set('partnerID', client_id);
                this.pushUptoBackend(client_id);
            } else {
                if (temp.indexOf(client_id) !== -1) {

                    this.get('controllers.applicationFeedback').statusObserver(null, "This partner is already in your list", "warnning");
                }
                else if (this.get("clientID") === client_id) {
                    this.get('controllers.applicationFeedback').statusObserver(null, "Please do not add yourself", "warnning");
                }
                else {
                    this.set('partnerID', client_id + "," + temp);
                    this.pushUptoBackend(client_id);
                }
            }

            this.get('controllers.profile').paternsStatistics(this.get('content').get("length"));

        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please input valid url", "warnning");
        }
    },
    pushUptoBackend: function(client_id)
    {
        var profileOwner = HubStar.Profile.find(this.get('clientID'));
        profileOwner.set('profile_partner_ids', this.get('partnerID'));
        // HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, profileOwner);
        HubStar.store.commit();
        var newPartner = HubStar.Mega.find(client_id);
        this.get("content").pushObject(newPartner);
        $('#masonry_user_container').masonry("reload");

        $('#masonry_user_container').imagesLoaded(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true
            });
        });

    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("model").get("owner"), that.get("model").get("profile_editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user);
            }
        });
    },
    searchPartner: function(searchKeyWord) {
        this.set('content', []);
        var data = HubStar.Mega.find({RequireType: "partnerSearch", profile_partner_ids: this.get('partnerID'), "keyword": searchKeyWord});
        var that = this;
        this.set('loadingTime', true);
        data.addObserver('isLoaded', function() {
            that.checkAuthenticUser();
            if (data.get('isLoaded')) {
                that.setContent(data);
                that.set('loadingTime', false);
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
            }
        });
    },
    setContent: function(data)
    {
        var that = this;
        for (var i = 0; i < data.get("length"); i++) {
            var tempmega = data.objectAt(i);
            if (i !== data.get("length") - 1) {
                that.set("partnerNew", that.get('partnerNew') + tempmega.get("profile").objectAt(0).get("id") + ",");
            }
            else
            {
                that.set("partnerNew", that.get('partnerNew') + tempmega.get("profile").objectAt(0).get("id"));
            }
            var isFollow = false;
            for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
            {
                if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                {
                    isFollow = true;
                    break;
                }
            }
            tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
            that.get("content").pushObject(tempmega);
        }
    }

}
);


})();

(function() {

HubStar.ProfileVideosController = Ember.Controller.extend({
    is_authentic_user: true,
    is_video_create_mode: false,
    getVideo: true,
    videoesContent: [],
    isRenderDeleteItemTemplate: false,
    needs: ['profile', 'permission', 'applicationFeedback'],
    getClientId: function(model) {

        var results = HubStar.Mega.find({"RquireType": "video", 'ownerid': model.get("id")});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                that.set('videoesContent', []);
                for (var i = 0; i < results.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    that.get("videoesContent").pushObject(tempmega);
                }
                that.relayout();
            }
        });
        this.checkEditingMode();
    },
    videoCreateModeSwitch: function()
    {
        this.set('is_video_create_mode', !this.get('is_video_create_mode'));
    },
    dropdownPhotoSetting: function(id)
    {
        this.set('delete_id', id);
        $('#dropdown_id_' + id).toggleClass('hideClass');
    },
    checkEditingMode: function()
    {
        this.set('is_profile_editing_mode', false);
        this.set('is_user_editing_mode', false);
        if (HubStar.get('editingMode') === 'profile') {
            this.set('is_profile_editing_mode', true);
            var proController = this.get('controllers.profile');
            this.set('pageModel', proController.get('model'));
            this.set("is_authentic_user", this.checkAuthenticUser());
        }
        else if (HubStar.get('editingMode') === 'user') {
            this.set('is_user_editing_mode', true);
            var userController = this.get('controllers.user');
            this.set('is_authentic_user', userController.get('is_authentic_user'));
        }
        else {
            this.set('is_profile_editing_mode', false);
            this.set('is_user_editing_mode', false);
        }
        this.relayout();
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 1000);
    },
    checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);

        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                is_authentic_user = permissionController.checkAuthenticUser(that.get("pageModel").get("owner"), that.get("pageModel").get("profile_editors"), current_user_email);
            }
        });
        return is_authentic_user;
    },
    removeCollectedItem: function()
    {
        this.set('message', "Remove this video?");
        this.set('makeSureDelete', !this.get('makeSureDelete'));

    },
    deleteConfirm: function()
    {

        this.deleteSelectedCollection();
        this.cancelDelete();
    },
    deleteSelectedCollection: function()
    {
        for (var i = 0; i < this.get('videoesContent').get('length'); i++) {
            var tempmega = this.get('videoesContent').objectAt(i);
            if (tempmega.get('id') === this.get('delete_id'))
            {
                tempmega.deleteRecord();
                tempmega.store.save();
                this.get('videoesContent').removeObject(tempmega);
                break;
            }
        }


    },
    cancelDelete: function() {
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set('message', "");
        HubStar.set('data', null);
        $('#dropdown_id_' + this.get('delete_id')).toggleClass('hideClass');
        this.set('delete_id', null);
        this.relayout();
    }
});


})();

(function() {

HubStar.ProfilesController = Ember.ArrayController.extend({
model: [],
        init: function() {


        }
});


})();

(function() {


HubStar.ReviewController = Ember.Controller.extend({
    rateTime: false,
    reviews: "",
    review_user_photo_url: "",
    currentUser: "",
    review_user_name: "",
    review_content: "",
    review_time_stamp: "",
    review_star_rating_value: null,
    review_length: "",
    profile: "",
    replyReviewCollection: [],
    reviewList: false,
    reviewDate: "",
    review_id: null,
    profileName: "",
    needs: ['profile', 'applicationFeedback', 'user', 'reviewList'],
    init: function()
    {

        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            this.set('review_user_photo_url', currentUser.get('photo_url_large'));
            this.set('review_user_name', currentUser.get('display_name'));
        }
        this.set("profile", this.get("controllers.profile").get('currentUserID'));
        this.set("profileReview", this.get("controllers.profile").get('reviews'));
        this.set("profileName", this.get("controllers.profile").get('profile_name'));
    },
    reviewCancel: function() {
        this.get("controllers.profile").set("rateTime", false);

    },
    reviewPost: function() {
        if (this.get("controllers.profile").get('reviews') !== 0) {

            var reviewContent = this.get('review_content');
        }
        if (reviewContent) {

            var reviewUserPhoto = this.get("currentUser").get('photo_url_large');
            var reviewUserID = this.get("currentUser").get('id');
            var reviewStarValue = $('#post-star-rating').text();
            var reviewStarValueLength = reviewStarValue * 20;
            var reviewUserName = this.get("currentUser").get('display_name');
            var replyReviewCollection = this.get("replyReviewCollection");
            var reviewDate = new Date();
            var reviewId = localStorage.loginStatus + createReviewid();
            var optional = this.get("controllers.profile").get("currentUserID");
            var tempReview = HubStar.Review.createRecord({"review_user_photo_url": reviewUserPhoto,
                "review_user_id": reviewUserID, "review_user_name": reviewUserName, "review_content": reviewContent, "review_time_stamp": reviewDate.toString(), "optional": optional, "review_id": reviewId, "review_star_rating_value": reviewStarValue, "review_length": reviewStarValueLength, "replyReviewCollection": replyReviewCollection, "review_like_count": 0, "review_people_like": ""});
            this.get("controllers.profile").get('model').get('reviews').insertAt(0, tempReview);
            HubStar.store.save();
            this.get("controllers.profile").set("profileReviewStatistics", this.get("controllers.profile").get('profileReviewStatistics') + 1);
            this.get("controllers.profile").set("rateTime", false);
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#reviewList').addClass('selected-user-stats');
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
            $(window).scrollTop(1500);
            this.get("controllers.profile").set('partnerTag', false);
            this.get("controllers.profile").set('collectionTag', false);
            this.get("controllers.profile").set('followerProfileTag', false);
            this.get("controllers.profile").set('reviewTag', true);
           this.transitionToRoute('reviews');
            this.set('reviewContent', "");

            

        }
        else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please add some review!.", "warnning");
        }

    }

});


})();

(function() {


HubStar.ReviewListController = Ember.Controller.extend({
     currentUser:"",
    user_name:"",
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user'],
    init: function()
    {
        
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
          
        }
        

        
    }
          
});


})();

(function() {


HubStar.ReviewListSingleController = Ember.Controller.extend({
    currentUser: "",
    review_id: null,
    profileReview: "",
    userPhoto: "",
    replyReviewContent: "",
    review_content: "",
    currentOwner: "",
    review_is_edit: false,
    isUserself: false,
    isSelf: false,
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewList', 'review'],
    init: function()
    {
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }

    },
    addLike: function()
    {

        var review = this.get('model');
        var review_people_like = review.get("review_people_like");
        if (review_people_like === null || review_people_like === 'undefined') {
            review_people_like = "";
        }
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
        {
            if (review_people_like.indexOf(localStorage.loginStatus) !== -1)
            {
            }
            else {
                review.set('review_people_like', review_people_like + ',' + localStorage.loginStatus);
                review.set('review_like_count', review.get('review_like_count') + 1);
                requiredBackEnd('reviews', 'Update', review, 'POST', function(params) {

                });
            }
        }
    },
    editReview: function() {

        this.set("review_is_edit", !this.get('review_is_edit'));
        this.set("review_content", this.get("model").get('review_content'));
        this.transitionToRoute('review', {id: this.get("model").get("review_id")});
    },
    saveReview: function() {
        var reviewDate = new Date();
        this.get("model").set('review_content', this.get('review_content'));
        this.get("model").set('review_time_stamp', reviewDate.toString());
        requiredBackEnd('reviews', 'Update', this.get("model"), 'POST', function(params) {
        });
        this.set("review_is_edit", !this.get('review_is_edit'));
    },
    cancelReview: function() {
        this.set("review_is_edit", !this.get('review_is_edit'));
    },
    removeReview: function() {
        this.set('message', "Are you going to delete this Review?");
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set("delete_id", this.get('model').get("review_id"));
    },
    deleteConfirm: function()
    {
        this.deleteSelectedReview();
        this.cancelDelete();
        this.get("controllers.profile").set("profileReviewStatistics", this.get("controllers.profile").get('profileReviewStatistics') - 1);
    },
    deleteSelectedReview: function()
    {
        for (var i = 0; i < this.get("controllers.profile").get('reviews').get('length'); i++) {
            var review = this.get("controllers.profile").get('reviews').objectAt(i);
            if (review.get('review_id') === this.get('delete_id'))
            {
                review.deleteRecord();
                this.get("controllers.profile").get('reviews').removeObject(review);
                requiredBackEnd('reviews', 'Delete', review, 'POST', function(params) {

                });
                break;
            }
        }

        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 500);


    },
    cancelDelete: function() {
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set('message', "");
        HubStar.set('data', null);
        this.set('delete_id', null);

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 500);
    },
    addReviewReply: function(reviewID) {

        var replyContent = this.get("replyReviewContent");

        if (replyContent) {
            var replyUserID = this.get("currentUser").get('id');
            if (replyUserID === this.get('model').get("review_user_id")) {
                this.set("isSelf", true);
            } else
            {
                this.set("isSelf", false);
            }

            var replyDate = new Date();
            var replyReviewID = createReviewid();
            var tempReply = HubStar.Reply.createRecord({'review_reply_id': replyReviewID, "review_user_id": replyUserID, "review_time_stamp": replyDate.toString(),
                'review_msg': replyContent, 'review_url': null, 'review_user_name': this.get("currentUser").get('display_name'), 'review_photo_url_large': this.get("currentUser").get('photo_url_large'),
                'review_enableToEdit': false, 'optional': this.get('model').get('optional') + '/' + this.get('model').get('review_id'), "review_userself": this.get("isSelf")});
            this.get('model').get('reply_reviews').insertAt(0, tempReply);
            HubStar.store.save();

            $('#reply_' + reviewID).attr('style', 'display: block;max-height:0;');
            $('#view-comments_' + reviewID).attr('style', 'display:none; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px');
            $('#view-comments_' + reviewID).animate({display: 'none'}, 500);
            $('#up-comments_' + reviewID).attr('style', 'background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
            $('#up-comments_' + reviewID).animate({display: 'none'}, 500);
            $('#reply_' + reviewID).animate({maxHeight: '200px'}, 10);
            
            for (var i = 0; i < this.get("controllers.profile").get('reviews').get('length'); i++) {
                if (this.get("controllers.profile").get('reviews').objectAt(i).get('review_id') !== reviewID) {
                    this.upComments(this.get("controllers.profile").get('reviews').objectAt(i).get("review_id"));
                }
            }

            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 10);

        }
        this.set("replyReviewContent", "");

    },
    upComments: function(event) {
        $('#reply_' + event).attr('style', 'display: none; max-height:0;');
        $('#up-comments_' + event).attr('style', 'display: none;background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#up-comments_' + event).animate({display: 'none'}, 500);
        $('#view-comments_' + event).attr('style', ' display:block; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#view-comments_' + event).animate({display: 'block'}, 500);
        $('#reply_' + event).animate({maxHeight: '0px'}, 10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    },
    close: function() {
        this.set("replyReviewContent", "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
    },
    dropdownPhotoSetting: function(event) {
        var id = "#dropdown_id_" + event;
        $(id).toggleClass('hideClass');
        $(id).click(function() {
            $(this).removeClass('hideClass');
        }).mouseleave(function() {
            $(this).addClass('hideClass');
        });
    },
    fbShare: function(event) {
        var that = this;
        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get("controllers.profile").get('currentUserID') + '/reviews/' + event.get("review_id");
        var caption = '';
        if (event.get('review_content') !== null)
        {
            caption = event.get('review_content');

        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: event.get('review_user_photo_url'),
            name: event.get('review_user_name'),
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function(event) {
        var caption = '';
        if (event.get('review_content') !== null)
        {
            caption = event.get('review_content');

        }
        else
        {
            caption = '';
        }
        $("meta[property='og\\:title']").attr("content", event.get('review_user_name'));
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", event.get('review_user_photo_url'));


        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get("controllers.profile").get('currentUserID') + '/reviews/' + event.get("review_id");
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function(event) {
        var currntUrl = 'http://'+document.domain+'/#/profiles/' + this.get("controllers.profile").get('currentUserID') + '/reviews/' + event.get("review_id");
        var url = 'https://twitter.com/share?text=' + event.get('review_user_name') + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});


})();

(function() {


HubStar.ReviewReplyListSingleController = Ember.Controller.extend({
    currentUser: "",
    review_msg: "",
    review_enableToEdit: false,
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewListSingle', 'review'],
    init: function()
    {
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
    },
    editReviewReply: function() {
        
        if(this.get("controllers.reviewListSingle").get("model").id !==null && this.get("controllers.reviewListSingle").get("model").id !== undefined ){
            var id = "#ReplyData_" + this.get("controllers.reviewListSingle").get("model").id;
        }
       $(id).attr("style", "display:none");
        this.set("review_enableToEdit", !this.get('review_enableToEdit'));
        this.set("review_msg", this.get("model").get('review_msg'));
        this.transitionToRoute('reply', {id: this.get("model").get("review_reply_id")});
    },
    saveReviewReply: function() {
        var reviewDate = new Date();
        this.get("model").set('review_msg', this.get('review_msg'));
        this.get("model").set('review_time_stamp', reviewDate.toString());
        requiredBackEnd('replys', 'Update', this.get("model"), 'POST', function(params) {
        });
        this.set("review_enableToEdit", !this.get('review_enableToEdit'));
       if(this.get("controllers.reviewListSingle").get("model").id !==null && this.get("controllers.reviewListSingle").get("model").id !== undefined)  {
            var id = "#ReplyData_" + this.get("controllers.reviewListSingle").get("model").id;
        }
       $(id).attr("style", "display:block");
    },
    cancelReviewReply: function() {
        this.set("review_enableToEdit", !this.get('review_enableToEdit'));
    },
    removeReviewReply: function() {
        this.set('message', "Are you going to delete this Reply?");
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set("delete_id", this.get('model').get("review_reply_id"));
    },
    deleteConfirm: function()
    {
        this.deleteSelectedreply();
        this.cancelDelete();
    },
    deleteSelectedreply: function()
    {
        for (var i = 0; i < this.get("controllers.profile").get('reviews').get('length'); i++) {
            
             for (var j = 0; j < this.get("controllers.profile").get('reviews').objectAt(i).get("reply_reviews").get('length'); j++) {
            var reviewreply= this.get("controllers.profile").get('reviews').objectAt(i).get("reply_reviews").objectAt(j);
            if (reviewreply.get('review_reply_id') === this.get('delete_id'))
            {
                reviewreply.deleteRecord();
                this.get("controllers.profile").get('reviews').objectAt(i).get("reply_reviews").removeObject(reviewreply);
                requiredBackEnd('replys', 'Delete', reviewreply, 'POST', function(params) {

                });
                break;
            }
             }
        }

        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 500);


    },
    cancelDelete: function() {
        this.set('makeSureDelete', !this.get('makeSureDelete'));
        this.set('message', "");
        HubStar.set('data', null);
        this.set('delete_id', null);

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 500);
    }

});


})();

(function() {

HubStar. SearchController = Ember.ObjectController.extend({

    });


})();

(function() {

HubStar.SearchsController = Ember.ArrayController.extend({
    needs: ['application', 'status', 'platformBar','user'],
    loginInfo: "",
    content: [],
    search_string: "",
    search_area: "",
    searchResultNum: "",
    time: "",
    newSearch: function() {
        HubStar.set("uploadMode", null);
        var d = new Date();
//            var start = d.getTime();
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string")});
        this.set("content", results);

//            var stats = Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});
//            var that = this;


    },
        
    defaultSearch: function() {    
        this.set("loginInfo", localStorage.loginStatus);
        this.setLoginImge();
        var results = HubStar.Mega.find({"RquireType": "defaultSearch"});
        this.set("content", results);
          
    },
    getResponseTime: function(start, end) {
        var totalTime = end - start;
        totalTime += "ms";
        this.set("time", totalTime);
    },
    //get user model data after login
    /***/     setLoginImge: function() {                                           /***/
        /***/            var ac = this.get("controllers.application");          /***/
        /***/           var st = this.get("controllers.status");                   /***/
        /***/          ac.grapData();                                                       /***/
        /***/          st.grapData();                                                        /***/
        /***/      }                                                                                /***/
    //get user model data after login


});



})();

(function() {

HubStar.SingleFileUploaderController = Ember.Controller.extend({
            });
            HubStar.SingleFileUploaderController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            HubStar.SingleFileUploaderController.Droppable = Ember.Mixin.create(HubStar.SingleFileUploaderController, {
                dragEnter: HubStar.SingleFileUploaderController.cancel,
                dragOver: HubStar.SingleFileUploaderController.cancel

            });



})();

(function() {

HubStar.StatusController = Ember.Controller.extend({
        searchResultNum: "",
        time: "",
        user: null,
        myUserProfile: null,
        response: 'Start searching for ideas now.',
        getSearchResultNum: function(hits) {

            this.set("searchResultNum", "Item: " + hits);
        },
        getSearchResultTime: function(time) {

            this.set("time", "Time: " + time);
        },
        grapData: function() {
            this.set("user", HubStar.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
           
        },
        changeDescription: function()
        {

         this.set('response',  "You've got "+this.get('searchResultNum')+" results in "+this.get('time')+".");

        },
                
       changeImage: function(imageSrc)
        {
            this.set('photo_url', imageSrc);
        }

    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.TalkController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    isUploadPhoto: false,
    isInvitePeople: false,
    isAdded: false,
    contentFollowerPhoto: null,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("owner_photo_url", this.get("currentOwner").get("photo_url_large"));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
            this.set("displayName", this.get("currentOwner").get("display_name"));
        }
    },
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
    },
    cancelTalk: function()
    {
        this.set('messageContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.get("controllers.user").set("isTalk", false);
    },
    addComment: function() {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commentContent = this.get('messageContent');
        if (commentContent) {
            var commenter_id = this.get("currentUser").get('id');
            var date = new Date();
            var owner_id = this.get("currentOwner").get("id");
            var newStyleImage = "";
            var imageStyleName = "";
            if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
            {
                newStyleImage = this.get("newStyleImageSource");
            }
            else
            {
                newStyleImage = null;
            }
            if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
            {
                imageStyleName = this.get('newStyleImageName');

            }
            else
            {
                imageStyleName = "";
            }
            var imageName = "";
            var imageType = "";
            if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
            {
                var imageName = imageStyleName.split('.');
                var imageType = imageName[imageName.length - 1];
            }
            var conversationID = createMessageid();
            var conversationItemID = createMessageid();

            var participation_ids = this.get("currentOwner").get("id");


            var tempComment = [commenter_id, date.toString(), commentContent, newStyleImage, imageType, imageStyleName, conversationID, conversationItemID, participation_ids];

            tempComment = JSON.stringify(tempComment);
            var that = this;
            requiredBackEnd('conversations', 'CreateConversation', tempComment, 'POST', function(params) {

                that.get('controllers.applicationFeedback').statusObserver(null, "Your Message Has Been Sent Successfully.");
                HubStar.set("talkConversation",true);

                that.reviewCancel();
                that.set('messageContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");

            });

        }
    },
    reviewCancel: function() {
        this.get("controllers.user").set("isTalk", false);
    },
    profileStyleImageDrop: function(e, name)
    {

        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }
}
);


})();

(function() {

HubStar.TestController = Ember.Controller.extend({
    test: function()
    {
        return 'aaaaaaaaaaaaa';
    }
    
}
);


})();

(function() {

HubStar.TestTwoController = Ember.Controller.extend({
    testtwo: function()
    {
        return 'testtwo';
    }
    
}
);


})();

(function() {


var interest_record;
var collection_title_record;
var collection_desc_record;
var about_record;
HubStar.UserController = Ember.Controller.extend({
    user: null,
    identifier: "",
    uploadMode: null,
    newCollectionName: null,
    collections: [],
    temp: [],
    followerTag: false,
    followingTag: false,
    messageTag: false,
    postTag: false,
    newDesc: '',
    Id: "",
    type: "users",
    newTitle: '',
    selectedDesc: "",
    selectedTitle: "",
    display_name: "",
    gender: "",
    age: "",
    userTage: true,
    currentUserID: "",
    needs: ['photoCreate', 'applicationFeedback', 'userFollowers', 'userFollowings', 'application', 'platformBar', 'collection', 'htmlEditor', 'userMessage', 'messageCenter', 'talk'],
    facebook: "",
    twitter: "",
    follow_status: false,
    following_status: false,
    googleplus: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    location: "",
    email: "",
    password: "",
    oldpassword: "",
    newpassword: "",
    repeatnew: "",
    makeSureDelete: false,
    updateOrCreate: true,
    collectionTag: true,
    selectedCollection: "",
    profileSelectionStatus: "",
    selected_topics: [],
    interests: "",
    userCollectionStatistics: "",
    userFollowingStatistics: "",
    userFollowerStatistics: "",
    editingInterest: false,
    interest: "interest",
    is_authentic_user: false,
    aboutMe: "aboutMe",
    about_me: "",
    first_name: "",
    last_name: "",
    subcateMethod: [{list_id: 0, isSelection: false, category_topic: "email"}],
    subcate: [{list_id: 0, isSelection: false, category_topic: "message"}, {list_id: 1, isSelection: false, category_topic: "follow"}, {list_id: 2, isSelection: false, category_topic: "conversation"}],
    is_Photoclick: false,
    is_click: false,
    photo_url_large: "",
    photo_url: "",
    cover_url: "",
    isCrop: false,
    isPhotoUploadMode: false,
    newStyleImageSource: '',
    newStyleImageName: '',
    currentWidth: '',
    currentHeight: '',
    CurrentImageSize: "",
    RequiredImageSize: "",
    UploadImageMode: "",
    isUserSelf: false,
    interestsActive: false,
    isUpload: false,
    loadingTime: false,
    isTalk: false,
    init: function()
    {

    },
    checkedAction: function(checkedboxselection) {
        $("#" + checkedboxselection).prop('checked', !$("#" + checkedboxselection).prop('checked'));
        this.get("subcate").objectAt(checkedboxselection)["isSelection"] = !this.get("subcate").objectAt(checkedboxselection)["isSelection"];
    },
    checkedMethodAction: function(checkedboxselection) {
        $("#" + checkedboxselection).prop('checked', !$("#" + checkedboxselection).prop('checked'));
        this.get("subcateMethod").objectAt(checkedboxselection)["isSelection"] = !this.get("subcateMethod").objectAt(checkedboxselection)["isSelection"];
    },
    saveNotification: function()
    {
        var notification = "";
        for (var i = 0; i < this.get("subcateMethod").length; i++)
        {
            if (this.get("subcateMethod").objectAt(i)["isSelection"] === true) {
                if (notification === "")
                {
                    notification = this.get("subcateMethod").objectAt(i)["category_topic"];
                }
                else
                {
                    notification = notification + "," + this.get("subcateMethod").objectAt(i)["category_topic"];
                }
            }
        }
        for (var i = 0; i < this.get("subcate").length; i++)
        {
            if (this.get("subcate").objectAt(i)["isSelection"] === true) {
                if (notification === "")
                {
                    notification = this.get("subcate").objectAt(i)["category_topic"];
                }
                else
                {
                    notification = notification + "," + this.get("subcate").objectAt(i)["category_topic"];
                }
            }
        }
        var notification_string = [localStorage.loginStatus, notification];
        var tempComment = JSON.stringify(notification_string);
        var that = this;
        requiredBackEnd('users', 'SaveNotification', tempComment, 'POST', function(params) {
            var update_user_record = that.get('model');
            update_user_record.set("notification_setting", notification);
            that.userDashboardBackButton();
        });
    },
    talkToPeople: function() {
        this.set("isTalk", true);
        this.get("controllers.talk").set("owner_photo_url", this.get("photo_url_large"));
        this.get("controllers.talk").set("displayName", this.get("display_name"));
    },
    isUserSelfOrNot: function(currentUserID) {
        this.set("isUserSelf", false);
        if (currentUserID === localStorage.loginStatus) {
            this.set("isUserSelf", true);
        }
    },
    getCurrentUser: function()
    {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];

        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        return user;
    },
    notificationSetting: function() {
        if (this.get("notification_setting") !== null && this.get("notification_setting") !== "")
        {
            var items = this.get("notification_setting").split(",");
            for (var i = 0; i < items.length; i++)
            {
                if (items[i] === "email")
                {
                    this.get("subcateMethod").objectAt(0)["isSelection"] = true;
                }
                else if (items[i] === "message")
                {
                    this.get("subcate").objectAt(0)["isSelection"] = true;
                }
                else if (items[i] === "follow")
                {
                    this.get("subcate").objectAt(1)["isSelection"] = true;
                }
                else if (items[i] === "conversation")
                {
                    this.get("subcate").objectAt(2)["isSelection"] = true;
                }
            }
        }
        else if (this.get("notification_setting") === null)
        {

            this.get("subcateMethod").objectAt(0)["isSelection"] = true;

            this.get("subcate").objectAt(0)["isSelection"] = true;

            this.get("subcate").objectAt(1)["isSelection"] = true;

            this.get("subcate").objectAt(2)["isSelection"] = true;


        }
    },
    setUser: function()
    {
        var user = this.get('model');
        this.setIntersetsArr(user);
        this.set("user", user);
        this.set("Id", this.get('model').get('id'));
        //console.log(this.get("user"));
        this.set("collections", user.get("collections"));
        this.set("description", user.get("description"));
        this.set("display_name", user.get("display_name"));
        this.set('currentUserID', this.get('model').get('id'));
        this.set("first_name", user.get("first_name"));
        this.set("last_name", user.get("last_name"));
        this.set("identifier", user.get("identifier"));
        this.set("about_me", user.get("about_me"));
        this.set("facebook", user.get("facebook_link"));
        this.set("twitter", user.get("twitter_link"));
        this.set("googleplus", user.get("googleplus_link"));
        this.set("pinterest", user.get("pinterest_link"));
        this.set("linkedin", user.get("linkedin_link"));
        this.set("youtube", user.get("youtube_link"));
        this.set("location", user.get("region"));
        this.set("email", user.get("email"));
        this.set("oldpassword", "");
        this.set("newpassword", "");
        this.set("repeatnew", "");
        this.set("notification_setting", user.get("notification_setting"));
        this.notificationSetting();
        this.set("password", user.get("password"));
        if (user.get('cover_url') === null || user.get('cover_url') === "" || user.get('cover_url') === undefined) {
            this.set('cover_url', 'http://develop.devbox.s3.amazonaws.com/profile_cover/default/defaultcover6.jpg');
        }
        else
        {//this.set('cover_url', HubStar.get('photoDomain')+'/users/'+user.get('id')+'/user_cover/user_cover');
            this.set("cover_url", user.get("cover_url"));
        }
        this.set("photo_url", user.get("photo_url"));
        this.set("photo_url_large", user.get("photo_url_large"));
        this.get('controllers.applicationFeedback').set('photo_url', this.get('photo_url_large'));
        this.isUserSelfOrNot(this.get("currentUserID"));
        this.isFollowed();
        if (this.get("collections").objectAt(0) !== null && typeof this.get("collections").objectAt(0) !== 'undefined') {
            this.setDesc(this.get("collections").objectAt(0).get("desc"));
            this.setTitle(this.get("collections").objectAt(0).get("title"));
        }

        var collections = user.get("collections");
        if (this.get('editingInterest') === true) {
            this.set('editingInterest', false);
            this.set('interestsActive', false);
            $('#show_interest').animate({top: 298, height: 150}, 400, function() {
                $('.interesttags-container').css('height', '100px');
            });
            $('#interest_btn').addClass('icon-double-angle-up');
            $('#interest_btn').removeClass('icon-double-angle-down');
            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
                $('#interest_btn').css('display', 'block');
                $('.interesttags-container').css('height', '100px');
            }, 120);
        }
        this.initStastics(user);
        this.checkAuthenticUser();

        this.userPhotoEditBackButton();
        this.userDashboardBackButton();
        ;

        this.set('profileSelectionStatus', 'Collections');
        this.set('followingTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
        this.set('messageTag', false);
        this.set('postTag', false);

        this.labelBarRefresh();

    },
    labelBarRefresh: function() {
        this.set("profileSelectionStatus", "Collections");
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');
        });
    },
    goToUserRoute: function()
    {
        this.transitionToRoute('user');
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
    },
    initStastics: function(user) {
        if (user.get("followers") !== null) {
            this.set('userFollowerStatistics', user.get("followers").get("length"));
        }
        else {
            this.set('userFollowerStatistics', 0);
        }
        if (user.get("followings") !== null) {
            this.set('userFollowingStatistics', user.get("followings").get("length"));
        }
        else {
            this.set('userFollowingStatistics', 0);
        }
        this.statstics();
    },
    statstics: function()
    {
        if (this.get("collections").get("length") !== 0) {
            this.set('userCollectionStatistics', this.get("collections").get("length"));
        }
        else
        {
            this.set('userCollectionStatistics', 0);
        }
    },
    userDashboardButton: function(mode) {

        if (this.get('is_click') === false) {
            this.set('is_click', true);
            $('#user-board_right_front').hide();
            $('#user-board_right_back').show();
            $('#change_profile').hide();
            this.setUploadImageMode(mode);
        }

    },
    userDashboardBackButton: function() {
        if (this.get('is_click') === true) {
            this.set('is_click', false);
            this.setUser();
            $('#user-board_right_front').show();
            $('#user-board_right_back').hide();
            $('#change_profile').show();
            this.set('newStyleImageSource', "");
            this.set('newStyleImageName', "");
            this.set('CurrentImageSize', "");
            this.set('isCrop', false);
            this.set('isUpload', false);


        }
    },
    userPhotoEditButton: function(mode) {

        if (this.get('is_Photoclick') === false) {
            this.set('is_Photoclick', true);
            $('#flip-front').hide();
            $('#user-photo_left').hide();
            $('#user-photo_left-back').show();
            this.setUploadImageMode(mode);
        }

    },
    userPhotoEditBackButton: function() {
        if (this.get('is_Photoclick') === true) {
            this.set('is_Photoclick', false);
            $('#flip-front').show();
            $('#user-photo_left').show();
            $('#user-photo_left-back').hide();
            this.set('newStyleImageSource', "");
            this.set('newStyleImageName', "");
            this.set('CurrentImageSize', "");
            this.set('isUpload', false);

            this.set('isCrop', false);
        }
    },
    getHeroImage: function(id, col) {
        var photo = HubStar.Mega.find(id);
        photo.addObserver('isLoaded', function() {
            if (photo.get('isLoaded')) {
                if (col.get("cover") === null || col.get("cover") === "" || col.get("cover") === undefined || col.get("cover") === 'null'
                        || col.get("cover") === 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png') {
                    col.set("cover", photo.get('photo').objectAt(0).get("photo_image_hero_url"));
                    col.store.save();
                }
            }
        });
    },
    exit: function()
    {
    },
    getCurrentPage: function()
    {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        this.set('model', user);
        return user;
    },
    checkingIdisExsinting: function(id, postOrPut) {
        var isExsinting = true;
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {
                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                this.get('controllers.applicationFeedback').statusObserver(null, "This Collection is already exsiting.");
            }
        }
        return isExsinting;
    },
    toggleEditing: function(data, checkingInfo) {
        if (checkingInfo === "interest") {
            interest_record = data;
            this.set('editingInterest', !this.get('editingInterest'));
        }
        else if (checkingInfo === "aboutMe") {
            about_record = data;
            this.set('editingAbout', !this.get('editingAbout'));
        }
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "interest") {
            this.set('editingInterest', !this.get('editingInterest'));
        } else if (checkingInfo === "aboutMe") {
            this.set('editingAbout', !this.get('editingAbout'));
        }

        this.saveUpdateInterest();
    },
    no: function(checkingInfo) {
        if (checkingInfo === "interest") {
            this.set('interests', interest_record);
            this.set('editingInterest', !this.get('editingInterest'));
        }
        else if (checkingInfo === "aboutMe") {
            this.set('about_me', about_record);
            this.set('editingAbout', !this.get('editingAbout'));
        }

    },
    submit: function()
    {
        var collectionController = this.get('controllers.collection');
        var collection = collectionController.getCreateCollection(this.get('newTitle'), this.get('newDesc'), this.get("collections"));
        if (this.get('newDesc').length < 256) {
            if (collection !== null && collection !== "") {
                collection.set('type', 'user');
                collection.set('optional', this.get('model').get('id'));
                this.get("collections").insertAt(0, collection);
                HubStar.store.save();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
                this.statstics();
                this.set("newTitle", "");
                this.set("newDesc", "");
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
            }
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your description should be less than 256 characters.", "warnning");

        }

    },
    socialLink: function(link) {
        if (link === 'facebook') {
            window.open(this.get("facebook"));
        }
        else if (link === 'twitter') {
            window.open(this.get("twitter"));
        }
        else if (link === 'googleplus') {
            window.open(this.get("googleplus"));
        }

        else if (link === 'pinterest') {
            window.open(this.get("pinterest"));
        }
        else if (link === 'youtube') {
            window.open(this.get("youtube"));
        }
        else if (link === 'linkedin') {
            window.open(this.get("linkedin"));
        }
    },
    savePassword: function() {

        var user = this.getCurrentUser();
        var isSave = true;
        var that = this;
        var getmodelInfo = [user.get('id')];
        requiredBackEnd('login', 'getmodel', getmodelInfo, 'POST', function(params) {

            if (that.get('oldpassword') === params.PWD_HASH && that.get('newpassword') === that.get('repeatnew') && that.get('newpassword').length >= 6 && that.get('newpassword').length <= 40) {

                isSave = false;
                var thatthat = that;
                var updateInfo = [user.get('id'), that.get('oldpassword'), that.get('newpassword'), that.get('repeatnew'), isSave];
                requiredBackEnd('login', 'update', updateInfo, 'POST', function(params) {
                    var thatthatthat = thatthat;
                    setTimeout(function() {
                        thatthatthat.set('oldpassword', "");
                        thatthatthat.set('newpassword', "");
                        thatthatthat.set('repeatnew', "");
                    }, 1000);
                    thatthat.get('controllers.applicationFeedback').statusObserver(null, "Password updated.");
                });
            }
            else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Please check you have entered the correct information.", "warnning");
            }
        });
    },
    saveUpdate: function() {
        var update_user_record = this.get('model');
        if (this.isInputValid())
        {
            update_user_record.set('collections', this.get('collections'));
            update_user_record.set('description', this.get('description'));
            update_user_record.set('display_name', this.get('display_name'));
            update_user_record.set('first_name', this.get('first_name'));
            update_user_record.set('last_name', this.get('last_name'));
            update_user_record.set('about_me', this.get('about_me'));
            update_user_record.set('region', this.get('location'));
            update_user_record.set('email', this.get('email'));
            update_user_record.set('password', this.get('password'));
            update_user_record.set('about_me', this.get('about_me'));
            this.get('controllers.applicationFeedback').statusObserver(null, "General Settings updated.");
            HubStar.store.save();
        }
        else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please check if you have already filled the mandatory field.", "warnning");
        }
    },
    isInputValid: function() {

        function checkObject(id, input, length, isEmailValid)
        {
            this.id = id;
            this.input = input;
            this.length = length;
            this.isEmailValid = isEmailValid;
        }
        var checkList = new Array();
        var result = true;
        var displayName = new checkObject("displayName", this.get('display_name'), 128, null);
        checkList.push(displayName);
//        var email = new checkObject("email", this.get('email'), 128, true);
//        checkList.push(email);

        var first_name = new checkObject("first_name", this.get('first_name'), 128, null);
        checkList.push(first_name);
        var last_name = new checkObject("last_name", this.get('last_name'), 128, null);
        checkList.push(last_name);
        var about_me = new checkObject("about_me", this.get('about_me'), 4096, null);
        checkList.push(about_me);
        var location = new checkObject("location", this.get('location'), 128, null);
        checkList.push(location);
        for (var i = 0; i < checkList.length; i++)
        {

            if (checkList[i].id === 'email') {
                document.getElementById(checkList[i].id).setAttribute("class", "disabled-btn");
            }
            else {
                document.getElementById(checkList[i].id).setAttribute("class", "");
            }
            if (checkList[i].input !== null && checkList[i].input.length > checkList[i].length)
            {
                result = false;
                document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                break;
            }

            if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name')
            {
                if (checkList[i].input === null || checkList[i].input === "") {
                    result = false;
                    document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                    break;
                }
            }
        }

        return result;
    },
    saveSociallinkUpdate: function() {

        if (this.isSociallinkInputValid())
        {
            this.saveLink('facebook_link', 'facebook');
            this.saveLink('twitter_link', 'twitter');
            this.saveLink('googleplus_link', 'googleplus');
            this.saveLink('pinterest_link', 'pinterest');
            this.saveLink('linkedin_link', 'linkedin');
            this.saveLink('youtube_link', 'youtube');
            this.get('controllers.applicationFeedback').statusObserver(null, "Social Links updated.");
            HubStar.store.save();
        }
        else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Please check you have entered the correct URL.", "warnning");
        }
    },
    isSociallinkInputValid: function() {

        function checkObject(id, input, length, isUrlValid, shouldInclude)
        {
            this.id = id;
            this.input = input;
            this.length = length;
            this.isUrlValid = isUrlValid;
            this.shouldInclude = shouldInclude;
        }
        var result;
        var checkList = new Array();
        var facebook = new checkObject("facebook", this.get('facebook'), 128, true, "facebook");
        checkList.push(facebook);
        var twitter = new checkObject("twitter", this.get('twitter'), 128, true, "twitter");
        checkList.push(twitter);
        var googleplus = new checkObject("googleplus", this.get('googleplus'), 128, true, "plus.google");
        checkList.push(googleplus);
        var pinterest = new checkObject("pinterest", this.get('pinterest'), 128, true, "pinterest");
        checkList.push(pinterest);
        var linkedin = new checkObject("linkedin", this.get('linkedin'), 128, true, "linkedin");
        checkList.push(linkedin);
        var youtube = new checkObject("youtube", this.get('youtube'), 128, true, "youtube");
        checkList.push(youtube);
        for (var i = 0; i < checkList.length; i++)
        {
            document.getElementById(checkList[i].id).setAttribute("class", "");
            if (checkList[i].input !== null && checkList[i].input.length > checkList[i].length)
            {
                result = false;
                document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                break;
            }
            if (checkList[i].input !== null && checkList[i].isUrlValid === true)
            {
                if (checkList[i].input.indexOf(checkList[i].shouldInclude) !== -1 || checkList[i].input === "") {
                    result = true;
                }
                else {
                    result = false;
                    document.getElementById(checkList[i].id).setAttribute("class", "error-textfield");
                    break;
                }
            }
        }
        return result;
    },
    saveLink: function(link_url, link) {
        var http = "http://";
        var update_user_record = this.get('model');
        if (this.get(link) === null || this.get(link) === "")
        {
            this.get(link) === "";
            update_user_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        }
        else if (this.get(link).slice(0, 5) === 'https' || this.get(link).slice(0, 5) === 'http:') {
            update_user_record.set(link_url, this.get(link));
            this.set(link, this.get(link));
        } else if (this.get(link) !== "") {
            update_user_record.set(link_url, http.concat(this.get(link)));
            this.set(link, http.concat(this.get(link)));
        }
        return update_user_record;
    },
    saveUpdateInterest: function() {

        var checkString = this.get('interests').trim();
        if ((checkString.substring(checkString.length - 1, checkString.length) !== ',') && (!/,,/.test(checkString))) {
            var update_interest_record = HubStar.User.find(this.get('user.id'));
            interests = this.get('interests');
            var tempInterest = '';
            this.set('selected_topics', []);
            if (interests !== null && interests !== "" && interests !== undefined) {
                var interests = interests.split(",");
                for (var i = 0; i < interests.length; i++) {
                    this.get('selected_topics').pushObject({interests: interests[i].trim()});
                    tempInterest = tempInterest + ',' + interests[i].trim();
                }
            }
            this.set('interests', tempInterest.substring(1, tempInterest.length));
            update_interest_record.set('selected_topics', this.get('interests'));
            update_interest_record.set('about_me', this.get('about_me'));
            HubStar.store.save();
        } else {
            this.get('controllers.applicationFeedback').statusObserver(null, "Invalid input");
        }

    },
    specialCharactersChecking: function(str) {
        var re = /^[a-zA-Z-][a-zA-Z0-9-]*$/;
        return re.test(str);
    },
    checkingValidInput: function(title) {
        if (title === null || title === "") {
        } else {
            if (title.indexOf(" ") !== -1) {
                title = title.split(' ').join('-');
            }
        }
        return title;
    },
    setDesc: function(desc) {
        this.set("selectedDesc", desc);
    },
    setTitle: function(title) {
        this.set("selectedTitle", title);
    },
    checkInput: function(title) {
        var isInputValid = false;
        if (title !== null && title !== "")
        {
            isInputValid = this.isTitleNotExist(title);
        }
        else {
            isInputValid = false;
        }
        return isInputValid;
    },
    isTitleNotExist: function(title) {
        var isContainsTitle = true;
        for (var i = 0; i < this.get("collections").get("length"); i++)
        {
            var collection = this.get("collections").objectAt(i);
            if (collection.get("title") === title)
            {
                isContainsTitle = false;
            }
        }
        return isContainsTitle;
    },
    deleteSelectedCollection: function()
    {
        var message = "Do you wish to remove your'" + this.get("selectedCollection").get('title') + "' collection from your User Profile?'";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            var tempCollection = this.get("selectedCollection");
            var delInfo = [tempCollection.id, this.get('model').get('id'), 'user'];
            delInfo = JSON.stringify(delInfo);
            requiredBackEnd('collections', 'delete', delInfo, 'POST', function(params) {
            });
            this.get("collections").removeObject(this.get("selectedCollection"));
            var user = this.getCurrentPage();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
        }
        this.statstics();
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    deleteTopic: function(topic) {
        var user = HubStar.User.find(localStorage.loginStatus);
        user.set('selected_topics', user.get('selected_topics') + ',');
        $('#' + topic).attr('style', 'display:none');
        user.set('selected_topics', user.get('selected_topics').replace(topic + ",", ""));
        user.set('selected_topics', user.get('selected_topics').substring(0, user.get('selected_topics').length - 1));
        user.store.commit();
        this.setIntersetsArr(user);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    updateCollectionInfo: function()
    {
        if (this.get('newDesc').length < 256) {
            this.get('selectedCollection').set('title', this.get('newTitle'));
            this.get('selectedCollection').set('desc', this.get('newDesc'));
            var collectionController = this.get('controllers.collection');
            var collection = collectionController.getUpdateCollection(this.get('selectedCollection'));
            collection.set('optional', this.get('model').get('id'));
            collection.set('type', 'user');
            this.set('selectedCollection', collection);
            this.get("selectedCollection").store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");

            this.set('newTitle', '');
            this.set('newDesc', '');
        }
        else
        {
            this.get('controllers.applicationFeedback').statusObserver(null, "Your description should be less than 256 characters.", "warnning");
        }
    },
    setSelectedCollection: function(id) {
        for (var i = 0; i < this.get("collections").get("length"); i++) {
            var thisCollection = this.get("collections").objectAt(i);
            this.get('temp').pushObject(thisCollection.get("id"));
            if (id === thisCollection.get("id")) {
                this.set("selectedCollection", thisCollection);
            }
        }
    },
    newCollection: function()
    {
        var collection = HubStar.Collection.createRecord({"id": null, "title": null, "desc": null, "collection_ids": null, "createdAt": new Date(),
            'cover': 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png', "optional": this.get('model').get('id'), 'type': 'user'
        });
        this.set("selectedCollection", collection);
    },
    checkAuthenticUser: function() {
        {
            if (localStorage.loginStatus === this.get('user').id) {
                this.set('is_authentic_user', true);
            }
            else {
                this.set('is_authentic_user', false);
            }
        }
    },
    selectCollection: function() {
        this.set('profileSelectionStatus', 'Collections');
        this.set('followingTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);

        this.set('postTag', false);

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        this.set("Id", this.get('collections').objectAt(0).get('optional'));


        this.set('messageTag', false);
        this.transitionToRoute('userCollections');

    },
    selectFollowing: function(model) {

        this.set('profileSelectionStatus', 'Following');

        this.set('followingTag', true);
        this.set('collectionTag', false);
        this.set('followerTag', false);

        this.set('postTag', false);

        this.set('messageTag', false);

        this.transitionToRoute('following', model);

        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    selectFollower: function(model) {

        this.set('profileSelectionStatus', 'Followers');

        //     this.get('controllers.userFollowers').getClientId(model);

        this.set('followingTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', true);

        this.set('postTag', false);

        this.set('messageTag', false);
        this.transitionToRoute('followers');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    selectMessage: function(model) {
        this.set('profileSelectionStatus', 'Messages');
        this.set('followingTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', false);
        this.set('messageTag', true);
        this.set('postTag', false);

        this.transitionToRoute('messageCenter');

        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);

    },
    selectPost: function(model) {
        this.set('profileSelectionStatus', 'Posts');
        this.set('followingTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', false);
        this.set('messageTag', false);
        this.set('postTag', true);

        this.transitionToRoute('userPost');

        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);

    },
    flickButtonClick: function()
    {
        this.set("isEditingMode", !this.get("isEditingMode"));
    },
    setCollectionAttr: function() {
        this.set("newTitle", this.get('selectedCollection').get('title'));
        this.set("newDesc", this.get('selectedCollection').get('desc'));
        collection_title_record = this.get('selectedCollection').get('title');
        collection_desc_record = this.get('selectedCollection').get('desc');
    },
    getCollectionAttr: function() {
        this.get('selectedCollection').set('title', collection_title_record);
        this.get('selectedCollection').set('desc', collection_desc_record);
        this.set("newTitle", collection_title_record);
        this.set("newDesc", collection_desc_record);
    },
    setIntersetsArr: function(user) {
        interests = user.get('selected_topics');
        this.set('interests', user.get('selected_topics'));
        this.set('selected_topics', []);
        if (interests !== null && interests !== "" && interests !== undefined) {
            var interests = interests.split(",");
            for (var i = 0; i < interests.length; i++) {
                this.get('selected_topics').pushObject({interests: interests[i]});
            }
        }
    },
    isFollowed: function()
    {


        var currentUser = HubStar.User.find(localStorage.loginStatus);
        if (currentUser.get('isLoaded')) {
            this.get("controllers.userFollowers").checkFollowStatus(currentUser, this, null);
        }
        else {
            var that = this;
            currentUser.addObserver('isLoaded', function() {
                if (currentUser.get('isLoaded')) {
                    that.get("controllers.userFollowers").checkFollowStatus(currentUser, that, null);
                }
            });
        }

    },
    followThisUser: function() {
        var user_id = this.get('model').get('id');
        if (this.get("follow_status") === false) {
            this.get("controllers.userFollowers").followUser(user_id, this, null);
        } else {
            this.get("controllers.userFollowers").unFollowUser(user_id, this, null);
        }
    },
    profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
        var that = this;
        getImageWidth(src, function(width, height) {
            that.set('newStyleImageSource', src);
            that.set('newStyleImageName', name);
            that.set('currentWidth', width);
            that.set('currentHeight', height);
            if (that.get('newStyleImageSource') !== null && that.get('newStyleImageSource') !== "")
            {
                var size = " size is " + width + "x" + height;

                that.set('CurrentImageSize', size);

                if (that.get('UploadImageMode') === "User Picture" || that.get('UploadImageMode') === "User Cover") {


                    if (width < 150 || height < 150) {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Please upload image size larger than  " + 150 + "x" + 150, "warnning");
                        that.set('newStyleImageSource', "");
                        that.set('newStyleImageName', "");
                        that.set('CurrentImageSize', "");
                        that.set('isCrop', false);
                        that.set('isUpload', false);
                    }
                    else if (width >= 150 || height >= 150) {
                        that.set('isCrop', true);
                        that.set('isUpload', true);

                    }
                }

            }
        });
    },
    cropButton: function()
    {
        this.set('isPhotoUploadMode', false);
        this.set('isPhotoEditingMode', true);
        this.set('isUpload', false);
        var that = this;
        $('#uploadStyleImg').attr("style", "display:block");
        Ember.run.later(function() {
            crop(that.get('newStyleImageSource'));
        }, 0);
        $('#uploadStyleImg').attr("style", "display:none");

    },
    savePhotoUpdate: function()
    {

        if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
        {

            var src = this.get('newStyleImageSource');
            var that = this;
            var imageName = that.get('newStyleImageName').split('.');
            var type = imageName[imageName.length - 1];


            if (that.get('isUpload') === true) {
                that.setTempImage();
            }
            else if (that.get('isCrop') === true)
            {
                that.setCropImage();
            }
            that.set('loadingTime', true);

            var data1 = {"newStyleImageSource": that.get('newStyleImageSource'),
                'newStyleImageName': that.get('newStyleImageName'),
                'mode': that.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                'id': that.get('model.id'), 'type': type};
            requiredBackEnd('users', 'updateStyleImage', data1, 'POST', function(params) {

                that.set('isPhotoUploadMode', false);
                HubStar.store.save();
                that.userPhotoEditBackButton();
                that.userDashboardBackButton();
                that.get('controllers.applicationFeedback').statusObserver(null, "Cover image updated.");

                that.set('loadingTime', false);
            });

        }
    },
    setUploadImageMode: function(mode)
    {
        this.set('isPhotoUploadMode', true);
        this.set('isPhotoEditingMode', false);
        this.set('UploadImageMode', mode);
        var data = {"RequireIamgeType": mode};
        var that = this;
        requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {

            var requiredSize = "For best results, the image should be at least " + params.width + " x " + params.height + " pixels";
            that.set('RequiredImageSize', requiredSize);
        });
    },
    setCropImage: function() {
        var cropData = getResults();
        this.set('newStyleImageSource', cropData);
        this.setTempImage();
    },
    setTempImage: function() {
        var model = this.get('model');
        if (this.get('UploadImageMode') === "User Picture")
        {
            this.set('photo_url_large', this.get('newStyleImageSource'));
            this.set('newStyleImageName', 'user_picture');
            var ac = this.get("controllers.application");
            var pb = this.get("controllers.platformBar");
            ac.changeImage(this.get('photo_url_large'));
            pb.changeImage(this.get('photo_url_large'));
            this.get('controllers.applicationFeedback').set('photo_url', this.get('photo_url_large'));
            model.set('photo_url_large', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "User Cover") {

            this.set('cover_url', this.get('newStyleImageSource'));
            this.set('cover_url_small', this.get('newStyleImageSource'));
            this.set('newStyleImageName', 'user_cover');
            model.set('cover_url', this.get('newStyleImageSource'));
        }
    }



}



);


























})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowersController = Ember.Controller.extend({
    contentUser: [],
    clientID: "",
    followerID: "",
    model: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings'],
    test: "test",
    setUserFollowers: function(followers) {

        var model = HubStar.User.find(followers);
        this.getClientId(model); // It is used to get the mesage model

    },
    goToUserFollowerRoute: function()
    {
        this.transitionToRoute('user');
        this.set('profileSelectionStatus', 'Collections');
        this.set('followingTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
        this.set('messageTag', false);

        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');

    },
    getClientId: function(model) {
        //console.log(localStorage.loginStatus);
        this.set('loadingTime', true);
        this.set("model", model);
        this.set('clientID', model.id);

        var data = [localStorage.loginStatus, this.get('clientID')];
        data = JSON.stringify(data);
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'Read', data, 'POST', function(params) {

            that.set("contentUser", []);
            for (var i = 0; i < params.length; i++)
            {
                dataNew["id"] = params[i]["record_id"];
                dataNew["name"] = params[i]["name"];
                dataNew["photo_url"] = params[i]["photo_url"];
                dataNew["photo_url_large"] = params[i]["cover_url_small"];
                dataNew["collections_size"] = params[i]["collections_size"];
                dataNew["follower_size"] = params[i]["follower_size"];
                dataNew["follow_status"] = params[i]["follow_status"];
                dataNew["following_status"] = params[i]["following_status"];
                dataNew["isUserSelf"] = false;
                if (dataNew["id"] === localStorage.loginStatus) {
                    dataNew["isUserSelf"] = true;
                }
                that.get("contentUser").pushObject(dataNew);
                dataNew = new Array();
            }
            that.set('loadingTime', false);
            that.relayout();
        });

    },
    getProfileId: function(model) {
        this.set('loadingTime', true);
        this.set("model", model);
        this.set('clientID', model.id);

        var data = [localStorage.loginStatus, this.get('clientID')];
        data = JSON.stringify(data);
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'ReadProfileFollower', data, 'POST', function(params) {

            that.set("contentUser", []);
            for (var i = 0; i < params.length; i++)
            {
                dataNew["id"] = params[i]["record_id"];
                dataNew["name"] = params[i]["name"];
                dataNew["photo_url"] = params[i]["photo_url"];
                dataNew["photo_url_large"] = params[i]["cover_url_small"];

                dataNew["collections_size"] = params[i]["collections_size"];
                dataNew["follower_size"] = params[i]["follower_size"];
                dataNew["follow_status"] = params[i]["follow_status"];
                dataNew["following_status"] = params[i]["following_status"];
                //console.log(dataNew["follow_status"]);
                dataNew["isUserSelf"] = false;
                if (dataNew["id"] === localStorage.loginStatus) {
                    dataNew["isUserSelf"] = true;
                }
                that.get("contentUser").pushObject(dataNew);
                dataNew = new Array();
            }
            //console.log(that.get("contentUser"));
            that.set('loadingTime', false);
            that.relayout();
        });

    },
    followThisUser: function(follow_object)
    {

        if (follow_object.get("follow_status") === false)
        {
            this.followUser(follow_object.get("id"), "follower", follow_object);
        }
        else
        {
            this.unFollowUser(follow_object.get("id"), "follower", follow_object);

        }
    },
    checkFollowStatus: function(currentUser, that, follow_object)
    {
        if (follow_object === null) {
            var followers = that.get("model").get("followers");
        }
        else
        {
            var followers = that.get("followers");
        }

        if (follow_object === null)
        {
            that.set("follow_status", false);
        }
        else
        {
            follow_object.set('follow_status', false);
        }

        for (var i = 0; i < followers.get('length'); i++) {
            var follower_id = followers.objectAt(i).get("follower_id");
            if (follower_id === localStorage.loginStatus)
            {
                if (follow_object === null)
                {
                    that.set("follow_status", true);
                }
                else
                {
                    follow_object.set('follow_status', true);
                }
                break;
            }
        }
        var followersCurrent = currentUser.get("followers");
        var followerIdCurrent;
        if (follow_object === null)
        {
            that.set("following_status", false);
        }
        else
        {
            follow_object.set("following_status", false);
        }
        for (var j = 0; j < followersCurrent.get("length"); j++)
        {
            followerIdCurrent = followersCurrent.objectAt(j).get("follower_id");
            if (follow_object === null)
            {
                if (followerIdCurrent === that.get("model").get("id"))
                {
                    that.set("following_status", true);
                    break;
                }
            }
            else
            {
                if (followerIdCurrent === that.get("id"))
                {
                    follow_object.set('following_status', true);
                    break;
                }
            }
        }
    },
    followUser: function(user_id, that, follow_object) {
        var date = new Date();
        var currentUser = localStorage.loginStatus;
        var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
            "follower_id": currentUser, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});
        var followArray = [user_id, tempComment];

        var thatNew = that;
        var thisThis = this;
        requiredBackEnd('followers', 'createUserFollower', followArray, 'POST', function() {
            if (thatNew !== "follower" && thatNew !== "following") {
                if (thatNew.get('followerTag') === true)
                {
                    thisThis.getClientId(thatNew.get("model"));
                }
                var tempUser = HubStar.User.find(user_id);
                if (tempUser.get("isLoaded"))
                {
                    tempUser.get("followers").insertAt(0, tempComment);
                }
                var currentUserNew = HubStar.User.find(localStorage.loginStatus);
                thisThis.checkFollowStatus(currentUserNew, thatNew, null);
                thisThis.get("controllers.user").set("userFollowerStatistics", tempUser.get("followers").get("length"));

                var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                    "follower_id": user_id, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

                //thisThis.get("controllers.user").set("userFollowingStatistics", thisThis.get("controllers.user").get("userFollowingStatistics") + 1);                
                currentUserNew.get("followings").insertAt(0, tempFollowing);

                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)

                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUserNew.get("followings").get("length"));
                    }
                }
            }
            else
            {
                var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                    "follower_id": follow_object.get("id"), "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

                //thisThis.get("controllers.user").set("userFollowingStatistics", thisThis.get("controllers.user").get("userFollowingStatistics") + 1);
                var currentUser = HubStar.User.find(localStorage.loginStatus);
                currentUser.get("followings").insertAt(0, tempFollowing);
                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                    }
                }

                var followers = HubStar.User.find(follow_object.get("id"));
                if (followers.get('isLoaded')) {

                    followers.get("followers").insertAt(0, tempComment);

                    thisThis.checkFollowStatus(currentUser, followers, follow_object);
                    if (thatNew === "follower") {
                        for (var j = 0; j < thisThis.get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("contentUser").objectAt(j).get("id"))
                            {
                                thisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                    else if (thatNew === "following")
                    {
                        for (var j = 0; j < thisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                            {
                                thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                }
                else
                {
                    var thisThisThis = thisThis;

                    var thatNewNew = thatNew;
                    followers.addObserver('isLoaded', function() {

                        if (followers.get('isLoaded')) {
                            //followers.get("followers").insertAt(0, tempComment);                         
                            thisThisThis.checkFollowStatus(currentUser, followers, follow_object);
                            if (thatNewNew === "follower") {
                                for (var j = 0; j < thisThisThis.get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("contentUser").objectAt(j).get("id"))
                                    {
                                        thisThisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                            else if (thatNewNew === "following")
                            {

                                for (var j = 0; j < thisThisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                                    {
                                        thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                        }
                    });
                }

            }
        });


    },
    unFollowUser: function(user_id, that, follow_object) {
        var currentUser = localStorage.loginStatus;
        var date = new Date();
        var followArray = [currentUser, user_id, date.toString()];

        var thatNew = that;
        var thisThis = this;
        requiredBackEnd('followers', 'deleteUserFollower', followArray, 'POST', function(params) {
            if (thatNew !== "follower" && thatNew !== "following") {

                if (thatNew.get('followerTag') === true)
                {
                    thatNew.get('controllers.userFollowers').getClientId(that.get("model"));
                }
                var tempUser = HubStar.User.find(user_id);
                if (tempUser.get("isLoaded"))
                {
                    var update_record = tempUser.get('followers');
                    for (var i = 0; i < update_record.get('length'); i++)
                    {

                        if (update_record.objectAt(i).get("follower_id") === localStorage.loginStatus)
                        {
                            update_record.removeObject(update_record.objectAt(i));
                        }
                    }
                }
                thisThis.get("controllers.user").set("userFollowerStatistics", tempUser.get('followers').get('length'));
                var currentUserNew = HubStar.User.find(localStorage.loginStatus);
                thisThis.checkFollowStatus(currentUserNew, thatNew, null);

                var update_following = currentUserNew.get('followings');
                for (var i = 0; i < update_following.get('length'); i++)
                {
                    if (update_following.objectAt(i).get("follower_id") === thatNew.get("user").get("id"))
                    {
                        update_following.removeObject(update_following.objectAt(i));
                    }
                }
                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUserNew.get("followings").get("length"));
                    }
                }
            }
            else
            {
                var currentUser = HubStar.User.find(localStorage.loginStatus);
                var followers = HubStar.User.find(follow_object.get("id"));

                var update_following = currentUser.get('followings');
                for (var i = 0; i < update_following.get('length'); i++)
                {
                    if (update_following.objectAt(i).get("follower_id") === follow_object.get("id"))
                    {
                        update_following.removeObject(update_following.objectAt(i));
                    }
                }
                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                    }

                }

                if (followers.get('isLoaded')) {
                    var update_record = followers.get('followers');
                    for (var i = 0; i < update_record.get('length'); i++)
                    {
                        if (update_record.objectAt(i).get("follower_id") === localStorage.loginStatus)
                        {
                            update_record.removeObject(update_record.objectAt(i));
                        }
                    }
                    if (thatNew === "follower") {
                        for (var j = 0; j < thisThis.get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("contentUser").objectAt(j).get("id"))
                            {

                                thisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                    else if (thatNew === "following")
                    {
                        for (var j = 0; j < thisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                            {
                                thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                    thisThis.checkFollowStatus(currentUser, followers, follow_object);
                }
                else {
                    var thisThisThis = thisThis;
                    var thatNewNew = thatNew;
                    followers.addObserver('isLoaded', function() {
                        if (followers.get('isLoaded')) {
                            var update_record = followers.get('followers');
                            for (var i = 0; i < update_record.get('length'); i++)
                            {
                                if (update_record.objectAt(i).get("follower_id") === localStorage.loginStatus)
                                {
                                    update_record.removeObject(update_record.objectAt(i));
                                }
                            }
                            if (thatNewNew === "follower") {
                                for (var j = 0; j < thisThisThis.get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("contentUser").objectAt(j).get("id"))
                                    {

                                        thisThisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                            else if (thatNewNew === "following")
                            {
                                for (var j = 0; j < thisThisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                                    {
                                        thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                            thisThisThis.checkFollowStatus(currentUser, followers, follow_object);
                        }
                    });
                }
            }
        });
    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 20);
    }

}
);


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowingsController = Ember.Controller.extend({
    contentUser: [],
    contentProfile: [],
    clientID: "",
    followerID: "",
    model: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowers', 'profile'],
    test: "test",
    followings: "",
    setUserFollowings: function(followingId) {

        var model = HubStar.User.find(followingId);
        this.getClientId(model); // It is used to get the mesage model

    },
    goToUserRoute: function()
    {
      
        this.get("controllers.user").selectCollection();
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
    },
    getClientId: function(model) {
        //console.log(localStorage.loginStatus);
        this.set('loadingTime', true);
        this.set("model", model);
        this.set('clientID', model.id);
        this.contentUser = new Array();
        this.contentProfile = new Array();
        this.set('followings', model.get("followings"));
        var data = [localStorage.loginStatus, this.get('clientID')];
        //var currentProfile;
        data = JSON.stringify(data);
        //console.log(this.get('followings'));
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'ReadFollowing', data, 'POST', function(params) {
            that.set("contentUser", []);
            that.set("contentProfile", []);
            //console.log(params.length+"sssssssss");

            for (var i = 0; i < params.length; i++)
            {
                dataNew["type"] = params[i]["type"];
                if (dataNew["type"] === "user")
                {
                    dataNew["id"] = params[i]["record_id"];
                    dataNew["name"] = params[i]["name"];
                    dataNew["photo_url"] = params[i]["photo_url"];
                    dataNew["photo_url_large"] = params[i]["cover_url_small"];
                    dataNew["collections_size"] = params[i]["collections_size"];
                    dataNew["follower_size"] = params[i]["follower_size"];
                    dataNew["follow_status"] = params[i]["follow_status"];
                    dataNew["following_status"] = params[i]["following_status"];
                    dataNew["isUserSelf"] = false;
                    if (dataNew["id"] === localStorage.loginStatus) {

                        dataNew["isUserSelf"] = true;
                    }
                    that.get("contentUser").pushObject(dataNew);
                }

                else
                {

                    dataNew["id"] = params[i]["record_id"];
                    dataNew["name"] = params[i]["name"];
                    dataNew["photo_url"] = params[i]["photo_url"];
                    dataNew["photo_url_large"] = params[i]["cover_url_small"];
                    //console.log(dataNew["photo_url_large"]);
                    dataNew["collections_size"] = params[i]["collections_size"];
                    dataNew["follower_size"] = params[i]["follower_size"];
                    dataNew["partner_size"] = params[i]["partner_size"];
                    dataNew["follow_status"] = params[i]["follow_status"];
                    dataNew["following_status"] = params[i]["following_status"];
                    dataNew["profile_about_us"] = params[i]["profile_about_us"];
                    dataNew["profile_cover_text"] = params[i]["profile_cover_text"];
                    //dataNew["current"] = HubStar.Mega.find(dataNew["id"]);
                    // console.log(dataNew["current"]);
                    //dataNew["current"] = params[i]["profile"];
                    // dataNew["current"]=currentProfile;
                    // console.log(dataNew["current"] );
                    that.get("contentProfile").pushObject(dataNew);
                    //console.log(dataNew);
                }
                dataNew = new Array();
            }
            that.set('loadingTime', false);
            that.relayout();

        });

    },
    followThisUser: function(follow_object)
    {

        if (follow_object.get("follow_status") === false)
        {
            if (follow_object.get("type") === "user") {
                this.get("controllers.userFollowers").followUser(follow_object.get("id"), "following", follow_object);
            }
            else
            {
                this.followProfile(follow_object.get("id"), "user");
                follow_object.set('follow_status', true);
            }
        }

        else
        {
            if (follow_object.get("type") === "user") {
                this.get("controllers.userFollowers").unFollowUser(follow_object.get("id"), "following", follow_object);
            }
            else
            {
                this.unFollowProfile(follow_object.get("id"), "user");
                follow_object.set('follow_status', false);
            }
        }

    },
    followProfile: function(profile_id, type) {
        //console.log(profile_id);
        //var currentUser = HubStar.User.find(localStorage.loginStatus);
        var tempUser = HubStar.Profile.find(profile_id);
        var that = this;
        if (tempUser.get('isLoaded')) {
            //console.log(tempUser.get("isLoaded"));
            var commenter_profile_pic_url = null;
            var commenter_id = localStorage.loginStatus;
            var name = null;
            var date = new Date();
            var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                "follower_id": commenter_id, "name": name, "type": "profile", "time_stamp": date.toString(), "is_delete": false});
            var followArray = [profile_id, tempComment];

            tempUser.get("followers").insertAt(0, tempComment);


            var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                "follower_id": profile_id, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

            var currentUser = HubStar.User.find(localStorage.loginStatus);

            currentUser.get("followings").insertAt(0, tempFollowing);

            //console.log(this.get("controllers.user"));

            if (type === "user")
            {
                
                if (localStorage.loginStatus === this.get("controllers.user").get('user').id)
                {
                    this.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                }
            }

            var profilethis = this;
            requiredBackEnd('followers', 'createFollower', followArray, 'POST', function() {
                profilethis.get("controllers.userFollowers").getProfileId(tempUser);
                profilethis.get("controllers.profile").followersStatistics(tempUser.get("followers").get("length"));
                profilethis.get("controllers.profile").followerPhoto(profile_id);

                for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                {
                    if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                    {
                        profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                    }
                }
            });
            that.relayout();
        }
        else
        {
            var thisThis = this;
            tempUser.addObserver('isLoaded', function() {

                if (tempUser.get('isLoaded')) {
                    //console.log(tempUser.get("isLoaded"));
                    var commenter_profile_pic_url = null;
                    var commenter_id = localStorage.loginStatus;
                    var name = null;
                    var date = new Date();
                    var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                        "follower_id": commenter_id, "name": name, "type": "profile", "time_stamp": date.toString(), "is_delete": false});
                    var followArray = [profile_id, tempComment];

                    tempUser.get("followers").insertAt(0, tempComment);


                    var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                        "follower_id": profile_id, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

                    //thisThis.get("controllers.user").set("userFollowingStatistics", thisThis.get("controllers.user").get("userFollowingStatistics") + 1);
                    var currentUser = HubStar.User.find(localStorage.loginStatus);
                    currentUser.get("followings").insertAt(0, tempFollowing);
                    if (type === "user")
                    {
                        if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                        {

                            thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                        }
                    }

                    var profilethis = thisThis;
                    requiredBackEnd('followers', 'createFollower', followArray, 'POST', function() {
                        for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                        {
                            if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                            {
                                profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                            }
                        }
                    });

                }
            });
            that.relayout();
        }


    },
    unFollowProfile: function(profile_id, type) {
        //console.log(profile_id);
        var tempUser = HubStar.Profile.find(profile_id);
        var ThisController=this;
        if (tempUser.get('isLoaded')) {

            var commenter_id = localStorage.loginStatus;
            //console.log(tempUser);
            var followArray = [profile_id, commenter_id];
            var update_record = tempUser.get('followers');
            for (var i = 0; i < update_record.get('length'); i++)
            {
                if (update_record.objectAt(i).get("follower_id") === commenter_id)
                {
                    update_record.removeObject(update_record.objectAt(i));
                }
            }

            var profilethis = this;
            requiredBackEnd('followers', 'deleteFollower', followArray, 'POST', function(params) {
                profilethis.get("controllers.profile").followersStatistics(tempUser.get("followers").get("length"));
                profilethis.get("controllers.userFollowers").getProfileId(tempUser);
                profilethis.get("controllers.profile").followerPhoto(profile_id);
                for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                {
                    if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                    {
                        profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                    }
                }
            });

            var currentUser = HubStar.User.find(localStorage.loginStatus);

            var update_following = currentUser.get('followings');
            for (var i = 0; i < update_following.get('length'); i++)
            {
                if (update_following.objectAt(i).get("follower_id") === profile_id)
                {
                    update_following.removeObject(update_following.objectAt(i));
                }
            }
            if (type === "user")
            {
                if (localStorage.loginStatus === this.get("controllers.user").get('user').id)
                {

                    this.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                }
            }
        }
        else {
            var thisThis = this;
            tempUser.addObserver('isLoaded', function() {


                //var currentUser = HubStar.User.find(localStorage.loginStatus);
                var commenter_id = localStorage.loginStatus;
                //console.log(tempUser);
                var followArray = [profile_id, commenter_id];
                var update_record = tempUser.get('followers');
                for (var i = 0; i < update_record.get('length'); i++)
                {
                    if (update_record.objectAt(i).get("follower_id") === commenter_id)
                    {
                        update_record.removeObject(update_record.objectAt(i));
                    }
                }
                var profilethis = thisThis;
                requiredBackEnd('followers', 'deleteFollower', followArray, 'POST', function(params) {
                    for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                    {
                        if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                        {
                            profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                        }
                    }
                });

                var currentUser = HubStar.User.find(localStorage.loginStatus);

                var update_following = currentUser.get('followings');
                for (var i = 0; i < update_following.get('length'); i++)
                {
                    if (update_following.objectAt(i).get("follower_id") === profile_id)
                    {
                        update_following.removeObject(update_following.objectAt(i));
                    }
                }
                if (type === "user")
                {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {

                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                    }
                }
                ThisController.relayout();
            });
        }

    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 20);
    }


}
);


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserMessageController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'notification', 'message', 'notificationTop'],
    isUploadPhoto: false,
    isEdit: true,
    isPosting: true,
    makeSureDelete:false,
    isUserMessage:false,
    willDelete:false,
    oldPost: "",
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var that = this;
        if (localStorage.loginStatus) {
            var loginUser = HubStar.User.find(localStorage.loginStatus);
            loginUser.addObserver('isLoaded', function() {

                if (loginUser.get('isLoaded')) {
                    that.set("commenter_photo_url", that.get("currentUser").get("photo_url_large"));
                }
            });
        }
//    this.set("isPosting", true);
    },
    setUserMessage: function(message) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        this.getClientId(message); // It is used to get the mesage model      
    },
    getClientId: function(id) {
        this.set("isPosting", true);
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        this.set('clientID', id);
        this.set('loadingTime', true);
        var data = this.get('clientID');
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('messages', 'Read', data, 'POST', function(params) {

            that.set("contentMsg", []);
            for (var i = 0; i < params.length; i++)
            {
//First reply message and it is the last one of message and it contail the reply message collection
                dataNew["message_id"] = params[i]["message_id"];
                var length = params[i]["replyMessageCollection"].length - 1;
                dataNew["reply_id"] = params[i]["replyMessageCollection"][length]["reply_id"];
                dataNew["user_id"] = params[i]["replyMessageCollection"][length]["user_id"];
                dataNew["time_stamp"] = params[i]["replyMessageCollection"][length]["time_stamp"];
                dataNew["msg"] = params[i]["replyMessageCollection"][length]["msg"];
                dataNew["user_name"] = params[i]["replyMessageCollection"][length]["user_name"];
                dataNew["photo_url_large"] = params[i]["replyMessageCollection"][length]["photo_url_large"];
                dataNew["url"] = params[i]["replyMessageCollection"][length]["url"];
                dataNew["enableToEdit"] = false;
                dataNew["replyEdit"] = true;
                dataNew["replyCount"] = params[i]["replyMessageCollection"].length - 1;
                if (params[i]["replyMessageCollection"][length]["user_id"] === localStorage.loginStatus)
                {
                    dataNew["isUserself"] = true; //dataNew["isUserself"] is true , which means it is the login users is the same as the user page owner
                }
                if (params[i]["replyMessageCollection"][length]["url"] !== null)
                {
                    dataNew["isUrl"] = true;
                }
                else
                {
                    dataNew["isUrl"] = false;
                }


                dataNew["replyMessageCollection"] = new Array(); // replyMessageCollection is used to store all the replyMessage except the last one which is the first Reply.
                for (var j = 0; j < params[i]["replyMessageCollection"].length - 1; j++)
                {
                    var dataReply = new Array();
                    dataReply["reply_id"] = params[i]["replyMessageCollection"][j]["reply_id"];
                    dataReply["user_id"] = params[i]["replyMessageCollection"][j]["user_id"];
                    dataReply["time_stamp"] = params[i]["replyMessageCollection"][j]["time_stamp"];
                    dataReply["msg"] = params[i]["replyMessageCollection"][j]["msg"];
                    dataReply["user_name"] = params[i]["replyMessageCollection"][j]["user_name"];
                    dataReply["photo_url_large"] = params[i]["replyMessageCollection"][j]["photo_url_large"];
                    dataReply["url"] = params[i]["replyMessageCollection"][j]["url"];
                    dataReply["enableToEdit"] = false;
                    if (params[i]["replyMessageCollection"][j]["url"] !== null)
                    {
                        dataReply["isUrl"] = true;
                    }
                    else
                    {
                        dataReply["isUrl"] = false;
                    }
                    if (params[i]["replyMessageCollection"][j]["user_id"] === localStorage.loginStatus)
                    {
                        dataReply["isUserself"] = true; // isUserself is used to judge whether the reply message is written by the current login user
                    }
                    dataNew["replyMessageCollection"][j] = dataReply;
                }
                that.get("contentMsg").pushObject(dataNew);


                dataNew = new Array();
            }
            that.set('loadingTime', false);

            if (that.get('controllers.notification').get("goMessage") !== undefined && that.get('controllers.notification').get("goMessage") !== null && that.get('controllers.notification').get("goMessage") !== "") {
                var s = that.get('controllers.notification').get("goMessage");
                that.goToMessage(s);
            }
            if (that.get('controllers.notificationTop').get("goMessage") !== undefined && that.get('controllers.notificationTop').get("goMessage") !== null && that.get('controllers.notificationTop').get("goMessage") !== "") {
                var s = that.get('controllers.notificationTop').get("goMessage");

                that.goToMessageTop(s);
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry();
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
        });
    },
    goToMessage: function(s)
    {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                var old = that.get("oldPost");
                $(old).removeClass("post-focus");
                $(s).addClass("post-focus");
                that.set("oldPost", s);
                if (that.get("controllers.notification").get("reply_ids") !== undefined && that.get("controllers.notification").get("reply_ids") !== null && that.get("controllers.notification").get("reply_ids") !== "")
                {

                    var thatthat = that;
                    setTimeout(function() {
                        thatthat.get('controllers.message').seeMore(that.get("controllers.notification").get("reply"));
                    }, 50);
                    that.get('controllers.notification').set("reply_ids", "");
                }
                that.get('controllers.notification').set("goMessage", "");
            });
        }, 50);
    },
    goToMessageTop: function(s)
    {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                var old = that.get("oldPost");
                $(old).removeClass("post-focus");
                $(s).addClass("post-focus");
                that.set("oldPost", s);
                if (that.get("controllers.notificationTop").get("reply_ids") !== undefined && that.get("controllers.notificationTop").get("reply_ids") !== null && that.get("controllers.notificationTop").get("reply_ids") !== "")
                {
                    var thatthat = that;
                    setTimeout(function() {
                        thatthat.get('controllers.message').seeMore(that.get("controllers.notificationTop").get("reply"));
                    }, 50);
                    that.get('controllers.notificationTop').set("reply_ids", "");
                }

                that.get('controllers.notificationTop').set("goMessage", "");
            }, 50);
        });
    }
    ,
    removeMessageItem: function(s)
    {
        var message = "Delete this message?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        this.set('isUserMessage',true);
        if (this.get('willDelete') === true) {
            this.removeMessage(s);
            this.cancelDelete();
        } else {
            this.set("s", s);        
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeMessage: function(Message_id)
    {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commenter_id = this.get("currentUser").get('id'); // it is the login in user , it will use to check the right of delete
        var owner_id = this.get("currentOwner").get("id"); // it the owner of the page, it will be used to identify  delete  which user's message item

        var tempComment = [commenter_id, owner_id, Message_id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('messages', 'RemoveMessage', tempComment, 'POST', function() {


            for (var i = 0; i < that.get("contentMsg").length; i++)
            {
                if (that.get("contentMsg").objectAt(i).get("message_id") === Message_id)
                {

                    that.get("contentMsg").removeObject(that.get("contentMsg").objectAt(i));
                    break;
                }

            }

            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
        });
        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 200);
    }
    ,
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    addComment: function() {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commentContent = this.get('messageContent');
        if (commentContent) {

            this.set("isPosting", false);
            var commenter_id = this.get("currentUser").get('id');
            var date = new Date();
            var owner_id = this.get("currentOwner").get("id");
            var newStyleImage = "";
            var imageStyleName = "";
            if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
            {
                newStyleImage = this.get("newStyleImageSource");
            }
            else
            {
                newStyleImage = null;
            }
            if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
            {
                imageStyleName = this.get('newStyleImageName');
            }
            else
            {
                imageStyleName = "";
            }
            var imageName = "";
            var imageType = "";
            if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
            {
                var imageName = imageStyleName.split('.');
                var imageType = imageName[imageName.length - 1];
            }
            var messageID = createMessageid();
            var replyID = createMessageid();
            var tempComment = [commenter_id, date.toString(), commentContent, owner_id, newStyleImage, imageType, imageStyleName, messageID, replyID];
            tempComment = JSON.stringify(tempComment);
            var that = this;
            var dataNew = new Array();
            requiredBackEnd('messages', 'CreateComment', tempComment, 'POST', function(params) {

                that.set("isPosting", true);
                dataNew["message_id"] = params["message_id"];
                dataNew["reply_id"] = params["replyMessageCollection"][0]["reply_id"];
                dataNew["user_id"] = params["replyMessageCollection"][0]["user_id"];
                dataNew["time_stamp"] = params["replyMessageCollection"][0]["time_stamp"];
                dataNew["msg"] = params["replyMessageCollection"][0]["msg"];
                dataNew["user_name"] = params["replyMessageCollection"][0]["user_name"];
                dataNew["photo_url_large"] = params["replyMessageCollection"][0]["photo_url_large"];
                dataNew["url"] = params["replyMessageCollection"][0]["url"];
                dataNew["enableToEdit"] = false;
                dataNew["replyEdit"] = true;
                dataNew["replyCount"] = 0;
                if (params["replyMessageCollection"][0]["user_id"] === localStorage.loginStatus)
                {
                    dataNew["isUserself"] = true;
                }
                if (params["replyMessageCollection"][0]["url"] !== null)
                {
                    dataNew["isUrl"] = true;
                }
                else
                {
                    dataNew["isUrl"] = false;
                }
                dataNew["replyMessageCollection"] = new Array();
                that.get("contentMsg").insertAt(0, dataNew);
                var thatthat = that;
                var s = '#message_' + dataNew["message_id"];
                setTimeout(function() {
                    var old = thatthat.get("oldPost");
                    $(old).removeClass("post-focus");
                   
                    $(s).addClass("post-focus");
                    thatthat.set("oldPost", s);
                }, 200);
                that.set("isUploadPhoto", false);
                dataNew = new Array();
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
                that.set('messageContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
            });

            setTimeout(function() {
                $('#masonry_container').masonry("reloadItems");
            }, 200);
        }
    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }
}
);


})();

(function() {

HubStar.UsersController = Ember.Controller.extend({

    });


})();

(function() {

HubStar.VideoController = Ember.Controller.extend({
    megaResouce: null,
    videoObject: null,
    video_iframe_code: null,
    currentUser: null,
    enableToEdit: false,
    needs: ['application', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'editComment', 'checkingLoginStatus'],
    getinitdata: function(videoObject)
    {

        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var that = this;
        var megaResouce = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": videoObject});


        this.set('megaResouce', megaResouce.objectAt(0));
        megaResouce.addObserver('isLoaded', function() {
            if (megaResouce.get('isLoaded')) {
                that.set('megaResouce', megaResouce.objectAt(0));
                //              console.log(   that.get('megaResouce'));
                var tempVideoObject = megaResouce.objectAt(0).get('videoes').get("content").objectAt(0);
                that.set('videoObject', tempVideoObject);
                that.set('video_iframe_code', tempVideoObject.data.video_iframe_code);
                that.checkAuthenticUser();
            }
        });
    }, addComment: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var commentContent = this.get('commentContent');
            if (commentContent) {
                var comments = this.get('megaResouce').get('comments');
                var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
                var commenter_id = this.get("currentUser").get('id');
                var name = this.get("currentUser").get('display_name');
                var date = new Date();
                var message_id = createMessageid() + commenter_id;
                var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                    "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                    "is_delete": false, optional: this.get('megaResouce').get('type') + '/' + this.get('megaResouce').get('id')});
                comments.insertAt(0, tempComment);
                comments.store.save();
                this.set('commentContent', '');
                $('#addcommetBut').attr('style', 'display:block');
                $('#commentBox').attr('style', 'display:none');
            }
        }
    },
    closeWindow: function() {
        this.set('collectable', false);
        this.set('contact', false);
        window.history.back();
    },
    removeComment: function(object)
    {
        var id = this.get('megaResouce').get("id");
        var message_id = object.get("message_id");
        var delInfo = [id, message_id];

        delInfo = JSON.stringify(delInfo);
        var that = this;
        this.get('megaResouce').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeleteVideoComment', delInfo, 'POST', function(params) {
        });
    },
    updateComment: function(object) {

        this.get("controllers.editComment").setRelatedController("video");
        var comments = this.get('megaResouce').get('comments');

        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("message_id") === object.get("message_id"))
            {
                object.set("isEdit", !object.get("isEdit"));
            }
            else
            {
                comments.objectAt(i).set("isEdit", false);
            }
        }
        var msg = object.get("content");
        HubStar.set("updateCommentmsg", msg);
    },
    switchCollection: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var addCollectionController = this.get('controllers.addCollection');
            var selectid = this.get('megaResouce').id;
            addCollectionController.setImageID(selectid);
            var tempUrl = this.get('megaResouce').get('object_image_url');
            addCollectionController.setThumbnailUrl(tempUrl);
            addCollectionController.setUser();
            addCollectionController.setRelatedController('video');
            this.set('collectable', !this.get('collectable'));
        }
    },
    editingContactForm: function() {


        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var contactController = this.get('controllers.contact');
            var selectid = this.get('megaResouce').id;
            contactController.setSelectedMega(selectid);
            contactController.selectionCheckBox();

            this.set('contact', !this.get('contact'));
        }
    },
    closeContact: function() {
        this.set('contact', false);
    },
    dropdownPhotoSetting: function() {
        var tempUrl = this.get('megaResouce').get('object_image_url');
        this.set('sharePhotoUrl', tempUrl);
        this.set('sharePhotoName', "test");
        $('#dropdown_id_').toggleClass('hideClass');
    },
    getImageURL: function()
    {
        var tempUrl = this.get('megaResouce').get('object_image_url');
        return tempUrl;
    },
    // share to social facebook
    fbShare: function() {
        var that = this;
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var caption = '';

        if (this.get('megaResouce').get('object_description') !== null)
        {
//            console.log(this.get('megaResouce').get('object_description'));
            caption = this.get('megaResouce').get('object_description');
        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.getImageURL(),
            name: this.get('videoObject').data.video_title,
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function() {
        var caption = '';
        if (this.get('megaResouce').get('object_description') !== null)
        {
            caption = this.get('megaResouce').get('object_description');
        }
        else
        {
            caption = '';
        }

        $("meta[property='og\\:title']").attr("content", this.get('videoObject').data.video_title);
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.getImageURL());
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function() {
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var url = 'https://twitter.com/share?text=' + this.get('videoObject').data.video_title + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function() {
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.getImageURL()) +
                '&description=' + encodeURIComponent(this.get('videoObject').data.video_title);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    editingPhotoMegaData: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));

    }, checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;

        var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user);
            }
        });
    },
    yes: function()
    {
        this.get('megaResouce').store.save();
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    no: function() {
        if (this.get('megaResouce').get("isDirty")) {
            this.get('megaResouce').rollback();
        }
        this.set('enableToEdit', !this.get('enableToEdit'));
    }
}

);


})();

(function() {

HubStar.AboutUsView1 = Ember.View.extend({
    templateName: 'aboutUsTemplate1',

});


})();

(function() {


HubStar.AddCollectionView = Ember.View.extend({
    templateName: 'addCollection',
    classNames: ["addCollection-container"],
    didInsertElement: function() {
        if (HubStar.get('chooseCollection') !== null) {

            $('#recordID').text(HubStar.get('chooseCollection'));
        }
    }
});


})();

(function() {


HubStar.AfterLoginView = Ember.View.extend({
    templateName: 'afterLogin',
    willInsertElement: function() {
    }
});



})();

(function() {



HubStar.ApplicationFeedbackView = Ember.View.extend({
    templateName: 'applicationFeedback',
    didInsertElement: function() {
        var test = this.$();




    },
    showup: function() {

    },
    closeup: function() {

    }
});



})();

(function() {

HubStar.ApplicationView = Ember.View.extend({
    templateName: 'application',
    didInsertElement: function() {
        $("#loading").attr('style', 'display:none');
        var view = this;
        $(window).bind("scroll", function() {
            view.didScroll();
        });

//         $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");

        var scroll_pos_test = 290;
        
     $(document).ready(function() {  
          
        $(window).scroll(function() {
            var y_scroll_pos = window.pageYOffset;

            var ifsearch = document.URL.split("#")[1].split("/")[1];
            if (ifsearch === "search") {

                if (HubStar.get('showDiscoveryBar') === true) {

                    if (y_scroll_pos > scroll_pos_test && $('#top-about-menu').css('display') === 'block') {
                        $(".Navigator-box").css('display', 'none');
                        $("#top-about-menu").fadeOut("320");
                        $("#search-bar").fadeIn("320");
                        $(".navbar").css("box-shadow", "0 0 10px #333");
  
                    }

                if (y_scroll_pos < scroll_pos_test && $('#top-about-menu').css('display') === 'none') {
                        $("#top-about-menu").fadeIn("320");
                        $("#search-bar").fadeOut("320");
                        $(".Navigator-box").fadeOut("320");
                        $(".navbar").css("box-shadow", "");

                    }
                }
            }
        });
  });
    },
    didScroll: function() {
        if (this.isScrolledToBottom() && HubStar.get('isMansonryPageLoad')) {
            this.get('controller').scrollDownAction();

        }
    },
    isScrolledToBottom: function() {
        var distanceToTop = $(document).height() - $(window).height(),
                top = $(document).scrollTop();
        return top === distanceToTop;
    },
    willDestroyElement: function() {
    },
    reaaarender: function() {
        this.rerender();
    }.observes('controller.test')
});



})();

(function() {

HubStar.ArticlePhotoView = Ember.View.extend({
    classNames: ["lightbox"],
    templateName: 'showAlbum',
    readContent: true,
    fullName: (function() {
        return "test";
    }).property(),
    didInsertElement: function() {


    },
    checkReading: function() {
        $('.article-objectview-right').animate({
            width: '45%'
        }, 500, function() {
            // Animation complete.
        });


        $('.article-objectview-left').animate({
            width: '55%'
        }, 500, function() {
            // Animation complete.
        });
        $('.lightbox').attr("style", "min-width:700px");
        this.set('readContent', !this.get("readContent"));
        $('#article_action').slideToggle(1000);
    },
    checkClosed: function() {

        $('.article-objectview-right').animate({
            width: '320px'
        }, 500, function() {
            // Animation complete.
        });


        $('.article-objectview-left').animate({
            width: 'auto'
        }, 500, function() {
            // Animation complete.
        });

        $('.article-objectview-left').attr("style", "bottom: 0; top: 0; left: 0; margin: 0; position: absolute; right: 320px; overflow: hidden; transition:all 0.5 ease; ");
        this.set('readContent', !this.get("readContent"));
        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
        //       this.set('nameTag', !this.get('nameTag'));

    },
    setPartnerTag: function() {
        $('#partner_action').slideToggle("slow");
        //       this.set('partnerTag', !this.get('partnerTag'));

    },
    popupAibum: function() {
       $("#collection_tab1").slideToggle("slow");
    },
    openComment: function() {


        $('#addcommetBut').attr('style', 'display:none');
        $('#commentBox').attr('style', 'display:block');
        $('.comment-insert-field').focus();
        this.get("controller").get("controllers.checkingLoginStatus").popupLogin();

    },
    closeComment: function() {

        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');


    }

//    someAction: function(e) {
//        alert('You pressed the escape button!');
//    }

});

})();

(function() {

HubStar.ArticleView = Ember.View.extend({
    classNames: ["lightbox"],
    templateName: 'article',
    readContent: false,
    fullName: (function() {
        return "test";
    }).property(),
    didInsertElement: function() {

        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    checkReading: function() {
//        $('.article-objectview-right').animate({
//            width: '55%'
//        }, 500, function() {
//            // Animation complete.
//        });
//
//
//        $('.article-objectview-left').animate({
//            width: '45%'
//        }, 500, function() {
//            // Animation complete.
//        });
//        $('.lightbox').attr("style", "min-width:700px");
        this.set('readContent', !this.get("readContent"));
//        $('#article_action').attr("style", "display:block;overflow: hidden;");
        $('#article_text_action').css('height', 'auto');
         var height = $('#article_text_action').height();
         $("#article_text_action").height('215px').animate({height:height}, "slow");
         $('#read_more_cue').attr("style", "display:none;");
//        $('#article_action').slideToggle(1000);
    },
    checkClosed: function() {

//        $('.article-objectview-right').animate({
//            width: '320px'
//        }, 500, function() {
//            // Animation complete.
//        });
//
//
//        $('.article-objectview-left').animate({
//            width: 'auto'
//        }, 500, function() {
//            // Animation complete.
//        });
//         $('#article_action').attr("style", "display:block;overflow: hidden;");
         var height = $('#article_text_action').offset().height;
         $("#article_text_action").css({height:height}).animate({"height":"210px"}, "slow");
        //$('#article_action'),animate({height:"215px"},1000);
//        $('.article-objectview-left').attr("style", "bottom: 0; top: 0; left: 0; margin: 0; position: absolute; right: 320px; overflow: hidden; transition:all 0.5 ease; ");
        this.set('readContent', !this.get("readContent"));
        $('#read_more_cue').attr("style", "display:block;");
//        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
        //       this.set('nameTag', !this.get('nameTag'));

    },
    setPartnerTag: function() {

        $('#partner_action').slideToggle("slow");
        //       this.set('partnerTag', !this.get('partnerTag'));

    },
    popupAibum: function(id) {
        HubStar.set('what', true);
        // $("#collection_tab1").slideToggle("slow");
        setTimeout(function() {
            $('.collection_tab1').attr('style', 'bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:block; position: absolute;z-index: 5; width: 100%; opacity: .9;');
            //$("#collection_tab1").attr('style', 'display: block');
        }, 200);
    },
    openComment: function() {


        $('#addcommetBut').attr('style', 'display:none');
        $('#commentBox').attr('style', 'display:block');
        $('.comment-insert-field').focus();
        this.get("controller").get("controllers.checkingLoginStatus").popupLogin();

    },
    closeComment: function() {

        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');


    },
    keyUp: function(event, view) {
        if (event.which === 27)
        { // pressed 'esc'

            //this.get("controller").transitionTo("search");

            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
            var colectionPhoto = address.split("#")[1].split("/")[6]; //it may be article id , photo id and video id
            var user_photo_id = address.split("#")[1].split("/")[8];
            if (type === "users")
            {
                var user = HubStar.User.find(id);

                if (user_photo_id !== undefined) //type:article means it 
                {

                  var data = HubStar.Mega.find(colectionPhoto);

                    this.get("controller").transitionTo("userPhoto", data); //user
                }
                else
                {

                    window.history.back();
                }
            }
            else if (type !== "articles")
            {
                this.get("controller").closeWindow();
            }
            else
            {
                window.history.back();
            }


        }
    }


});


})();

(function() {

HubStar.BeforeLoginView = Ember.View.extend({
    templateName: 'beforeLogin',
    didInsertElement: function() {


        if (HubStar.get('isLogin')) {

            $('#login_icon').attr("style", "display:block;position: relative;float: right;");
            $('#login_detail').attr("style", "display:block;");



        } else {

            $('#login_icon').attr("style", "display:block;position: relative;float: right;");
            $('#login_detail').attr("style", "display:block;");

        }
    }
});

})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.CameraView = Ember.View.extend({
          templateName: 'camera',
     
    });

})();

(function() {

HubStar.CarouselView = Ember.View.extend({
    templateName: 'carousel',
});


})();

(function() {

HubStar.CollectionsView = Ember.View.extend({
    templateName: 'collections',
    editCollectionButton: function(id, title, desc) {
        var userController = this.get('controller');
        userController.setSelectedCollection(id);
        this.get('controller').setCollectionAttr();
        var div_id = "#" + id;
        var div_class = ".C" + id + "  #uploadArea";
        $(".Targeting_Object_front").attr("style", "display:inline-block");
        $(" #uploadArea").attr('style', "display:none");
        $(" #uploadObject").attr('style', "display:block");
        $(div_id).attr("style", "display:none");
        $(div_class).attr('style', "display:inline-block");
        var createCollection = ".C" + id + "  #createCollection";
        var updateCollection = ".C" + id + "  #updateCollection";
        var updatebtn = ".C" + id + "  #updatebtn";
        var createbtn = ".C" + id + "  #createbtn";
        var deletebtn = ".C" + id + "  #deletebtn";
        var collection_name_insert = ".C" + id + "  .new-collection-name_insert";
        var collection_area = ".C" + id + "  .new-collection-area";
        $(createCollection).attr('style', "display:none");
        $(updateCollection).attr('style', "display:block;color: #333; font-size: 20px; font-weight: bold; text-align: center; margin: 5px 0 0;");
        $(updatebtn).attr('style', "display:inline-block");
        $(deletebtn).attr('style', "display:inline-block;left:15px;top:7px");
        $(createbtn).attr('style', "display:none");
        $(collection_name_insert).val(title);
        $(collection_area).val(desc);
        $('#masonry_user_container').masonry({
            itemSelector: '.box',
            columnWidth: 185,
            isFitWidth: true
        });
    }
});


})();

(function() {

HubStar.CommentView = Ember.View.extend({
    templateName: 'comment',
    didInsertElement: function() {
        $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
          var that =this;
        $(document).ready(function() { 
            
            $("#commentScrollBar_" + that.get("controller").get('model').get('id').replace("&","")).mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 350
            });
        });
    }
    
//    closeComment: function(id) {    
//        this.get('controller').set("commentContent","");
//        $('#comment_' + id).attr('style', 'display:block');
//        $('#commentBox_' + id).attr('style', 'display:none');
//        $('#masonry_container').masonry("reload");
//        setTimeout(function() {
//            $('#masonry_container').masonry("reload");
//        }, 200);
//    }                 
});


})();

(function() {

HubStar.ContactView = Ember.View.extend({
    templateName: 'contact',
    classNames: ["contact-container"],
    didInsertElement: function() {

        $.fx.speeds.speedDemon = 800;
        this.$().animate({
            bottom: "80%"
        }, "speedDemon");
        this.$().before('<div id="contactMeBlur" class="blur_black" />');
        var that = this;
        $("#contactMeBlur").click(function() {
            that.controller.closeContact();
        });


        this.$().draggable({
           handle: "p" ,
          cursor: "move",
           scroll: true,
         scrollSensitivity: 100
     });


        

    }
});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ConversationItemView = Ember.View.extend({
          templateName: 'conversationItem'
     
    });

})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.ConversationView = Ember.View.extend({

  templateName: 'conversation'
    });



})();

(function() {

HubStar.DeleteFunctionView = Ember.View.extend({
    templateName: 'deleteFunction',
    didInsertElement: function() {
        //   this.$().hide().show('fast');
    },
    deleteSelection: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            //     controller.addNewCollection();
        }
        else if (controller._debugContainerKey.indexOf("profileVideos") !== -1) {

            controller.deleteConfirm();
        }
        else if (controller._debugContainerKey.indexOf("reviewListSingle") !== -1) {
          
            controller.deleteConfirm();
        }
          else if (controller._debugContainerKey.indexOf("reviewReplyListSingle") !== -1) {
          
            controller.deleteConfirm();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {
            var obj = controller.get("obj");

            controller.removeComment(obj);

        }
        else if (controller._debugContainerKey.indexOf("article") !== -1) {
            var obj = controller.get("obj");

            controller.removeComment(obj);

        }

        else if (controller._debugContainerKey.indexOf("Message") !== -1 &&controller._debugContainerKey.indexOf("user")!==-1) { //userMessage must be before user
            var s = controller.get("s");
            controller.removeMessageItem(s);
        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) { //userMessage must be before user
            var s = controller.get("s");
            controller.removeReplyItem(s);
        }
        else if (controller._debugContainerKey.indexOf("user") !== -1) {

            controller.deleteSelectedCollection();
        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {

            controller.deleteSelectedPartner();

        }
        else if (controller._debugContainerKey.indexOf("profile") !== -1) {

            controller.deleteSelectedCollection();

        }

        else if (controller._debugContainerKey.indexOf("comment") !== -1) {

            var obj = controller.get("obj");

            controller.removeComment(obj);

        }

        else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


            controller.removeCollectedItem();

        }
        else if (controller._debugContainerKey.indexOf("notificationTop") !== -1) {

            var s = controller.get("s");
            controller.removeNotificationItem(s);

        }
        else if (controller._debugContainerKey.indexOf("conversation") !== -1) {

            var s = controller.get("s");
            controller.removeConversationItem(s);

        }
        else {
//            console.log("this is a deleete");
        }
    },
    cancelDelete: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            //     controller.addNewCollection();
        }
         else if (controller._debugContainerKey.indexOf("profileVideos") !== -1) {
          
             controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("reviewListSingle") !== -1) {
          
             controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("reviewReplyListSingle") !== -1) {
          
             controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {


            //    controller.addComment();

        }
        else if (controller._debugContainerKey.indexOf("user") !== -1&&controller._debugContainerKey.indexOf("Message") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("article") !== -1) {
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("user") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("profile") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("comment") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("notificationTop") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("conversation") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }

        else {

        }


    }


});


})();

(function() {

HubStar.DiscoveryView = Ember.View.extend({
    templateName: 'discoveryBar',
    searching: function() {
  $(".Navigator-box").css('display', 'none');
                    $("#top-about-menu").fadeOut("320");
                    $("#search-bar").fadeIn("320");
                     HubStar.set("showDiscoveryBar", false);
        var area = this.$("#search_key").val();
        var search_key = this.$("#search_business").val();
        var object;
        if (search_key !== "" || area !== "") {
            if (area !== "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area === "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area !== "" && search_key === "") {
                object = {"region": area, "search_string": search_key};
            }
        } else {
            object = {"region": "", "search_string": ""};
        }
        this.get("controller").transitionToRoute('search', {id: search_key});
//        this.get("controller").send("newSearch", area, search_key);
    }


});


})();

(function() {

HubStar.DoneEnterKeyTextFieldView = Ember.TextField.extend({

       
   keyDown: function(event) {
    if (event.keyCode === 13) { 
      this.get('controller').done();
      
    }
  }
    });


})();

(function() {

HubStar.DropDownView = Ember.View.extend({
    templateName: 'dropDown',
    value: null,
    title: null,
    valueChanged: function() {
        this.$('select').val(this.get('value'));
        this.get("controller").setDesc(this.get('value'));
        this.get("controller").setTitle(this.get('title'));
    }.observes('value'),
    didInsertElement: function() {
        var self = this;
        this.$('select').change(function() {
            var val = $('select option:selected').val();
            var label = $('select option:selected').html();
            label = label.split("</script>");
            label = label[1].split("<script");
            label = label[0];
            self.set('title', label);
            self.set('value', val);
        });
    },
    setSelectCollection: function() {

    }.observes("controller.selectedTitle")
});


})();

(function() {

HubStar.DropdownListView = Ember.View.extend({
    templateName: 'dropdownList',
    classNames: ["dropdownViewStyle"],
      didInsertElement: function() {
            var that = this;
            $('#dropItem1 > .ite').click(function() {


                that.get('controller').set('projectCategorySelection', $(this).text());
            });

            $('#dropItem2 > .ite').click(function() {

                //    $('#dropdownTimeframe').text($(this).text());
                that.get('controller').set('timeframeSelection', $(this).text());
            });
            $('#dropItem3 > .ite').click(function() {

                //        $('#dropdownBudget').text($(this).text());
                that.get('controller').set('projectBudgetSelection', $(this).text());
            });
            $('#dropItem4 > .ite').click(function() {

                that.get('controller').set('projectExperienceSelection', $(this).text());
            });
            
             $('#profilePackgetDropdown > .ite').click(function() {
                that.get('controller').set('projectCategoryDropdownContent', $(this).text());
           });
           
           $('#geoDropdown > .ite').click(function() {
                HubStar.set('geoLocation', $(this).text());
                that.get('controller').get('controllers.applicationFeedback').statusObserver(null, "You are now searching within "+HubStar.get('geoLocation')+" only.");
           });
             
           $('#packgetDropdown > .ite').click(function() {

                that.get('controller').set('packgeSelection', $(this).text());
            });
          
               $('#categoryDropdown > .ite').click(function() {
                that.get('controller').set('categorySelection', $(this).text());
            });
        
              $('#is_actvie > .ite').click(function() {
                that.get('controller').set('projectActiveDropdownContent', $(this).text());
            });
              $('#is_delete > .ite').click(function() {
                that.get('controller').set('projectDeleteDropdownContent', $(this).text());
            });
        }
});



})();

(function() {

HubStar.EditCollectionView = Ember.View.extend({
    templateName: 'editCollection',
    didInsertElement: function() {
        $(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true
            });
        });
        $('#uploadObject').click(function() {           
            $('.new-collection-name_insert').val("");
            $('.new-collection-area').val("");
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $('#uploadObject').attr("style", "display:none");
            $('#uploadingObject').attr('style', "display:inline-block");
            $('#uploadArea').attr('style', "display:block");
            $('#addNew').animate({
                height: 350,
                width: 350
            }, 400, function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isFitWidth: true
                });
            });
        });
        $('#uploadingObject').click(function() {
            $('#uploadObject').attr('style', "display:block");
            $('#uploadingObject').attr('style', "display:none");
            $('#uploadArea').attr('style', "display:none");
            $('#addNew').animate({
                height: 350,
                width: 350
            }, 400, function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isFitWidth: true
                });
            });

        });

        $('#user-stats > li').click(function() {
            $('#user-stats > li').removeClass('selected-user-stats');
            $(this).addClass('selected-user-stats');

        });
    },
    returnCollection: function(id) {
        var div_id = "#" + id;
        var div_class = ".C" + id + "  #uploadArea";
        $(div_id).attr("style", "display:block");
        $(div_class).attr('style', "display:none");
          this.get('controller').set('newTitle', '');
        this.get('controller').set('newDesc', '');
        $('#masonry_user_container').masonry({
            itemSelector: '.box',
            columnWidth: 185,
            isFitWidth: true
        });

    }
});


})();

(function() {

HubStar.EditCommentView = Ember.View.extend({
    templateName: 'editComment',
    didInsertElement: function() {
        
    }      
});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.EditMessageView = Ember.View.extend({

  templateName: 'editMessage'

    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.EditReplyView = Ember.View.extend({

  templateName: 'editReply'

    });



})();

(function() {

HubStar.EditingAboutView = Ember.View.extend({
    templateName: 'editingAbout',
    classNames: ["window-container"],
    controller: HubStar.ProfilesController,
    didInsertElement: function() {

        this.$().draggable({
            cancel: ".content",
            cursor: "move",
            containment: "body",
            scroll: true,
            scrollSensitivity: 100
        });

    }
});


})();

(function() {

HubStar.EditingView = Ember.View.extend({
      templateName: 'editing',
        classNames: ["window-container"],
        controller: HubStar.ProfilesController,
    
        didInsertElement: function() {

            this.$().draggable({
                cancel: ".content",
                cursor: "move",
                containment: "body",
                scroll: true,
                scrollSensitivity: 100
            });

        }
    });


})();

(function() {

HubStar.FooterView = Ember.View.extend({
      templateName: 'footer'
    
    });



})();

(function() {

var directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
HubStar.GoogleMapPopupView = Ember.View.extend({
    templateName: 'googleMapPopup',
    routeModeSelection: "DRIVING",
    didInsertElement: function() {
        var map;
        var that = this;
        $(document).ready(function() {

            geocoder = new google.maps.Geocoder();

            var address = that.get('controller').get('toAddress');

            geocoder.geocode({'address': address}, function(results) {
                var map_options = {
                    center: results[0].geometry.location,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                map = new google.maps.Map(document.getElementById('map_canvas_pop'), map_options);
                      var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: 'Destination'
                });
                directionsDisplay.setMap(map);
              directionsDisplay.setPanel(document.getElementById("directionsPanel"));
          

            });

            $("#routeMode").on("change", function() {
                that.calcRoute(that.get('routeModeSelection'));
            });

            $('#routeModeDropdown > .ite').click(function() {
                that.set('routeModeSelection', $(this).text());
                that.set('routeModeDropdown', false);
            });
        });

    },
    setGooglePopup: function() {
  this.get('controller').set('fromAddress', "");
        this.get('controller').set('popUpMap', false);
           $('#directionsPanel').attr({"style": "display:none; position: absolute; width: 265px; direction: ltr; height: 425px; overflow: auto; overflow-x: hidden;right: 0px; top: 0px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); border-bottom: 1px solid #ddd;"});
      directionsDisplay.setDirections({routes: []});
    },
    routeClear: function() {
        $("#map_canvas_pop").animate({width: "800px"}, 1000, 'linear');
        $('#routeClear').attr({"style": "display:none;width: 33%;height: 45px;line-height: 45px;'"});
        $('#routeGo').attr({"style": "display:block; width: 33%;height: 45px;line-height: 45px;'"});
        directionsDisplay.setDirections({routes: []});
        $('#directionsPanel').attr({"style": "display:none; "});
    },
    routeGo: function() {
        $("#map_canvas_pop").animate({width: "535px"}, 1000, 'linear');
directionsDisplay.setPanel(document.getElementById("directionsPanel"));
        $('#routeGo').attr({"style": "display:none; width: 33%;height: 45px;line-height: 45px;'"});
        $('#routeClear').attr({"style": "display:block;width: 33%;height: 45px;line-height: 45px;'"});

        setTimeout(function() {
            $('#directionsPanel').attr({"style": "display:block; position: absolute; width: 265px; direction: ltr; height: 425px; overflow: auto; overflow-x: hidden;right: 0px; top: 0px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); border-bottom: 1px solid #ddd;"});

        }, 1000);
        this.calcRoute(this.get('routeModeSelection'));
    },
    calcRoute: function(routeModeSelection) {
        var directionsService = new google.maps.DirectionsService();
        var request = {
            origin: this.get('controller').get('fromAddress'),
            destination: this.get('controller').get('toAddress'),
            provideRouteAlternatives: true,

            travelMode: google.maps.DirectionsTravelMode[routeModeSelection]
        };
        directionsService.route(request, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
        setTimeout(function() {

            $("#directionsPanel").mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 425
            });
        }, 800);
    },
    dropdownRoute: function() {
        $("#routeModeDropdown").toggleClass('hideClass');
    },
    selectRoute: function() {
        var that = this;
        $('#routeModeDropdown > .ite').click(function() {
            that.set('routeModeSelection', $(this).text());
        });
        $("#routeModeDropdown").toggleClass('hideClass');
    }
});

})();

(function() {

HubStar.HeaderView = Ember.View.extend({
     templateName: 'header',
     

    searching: function() {
  $(".Navigator-box").css('display', 'none');
                    $("#top-about-menu").fadeOut("320");
                    $("#search-bar").fadeIn("320");
                     HubStar.set("showDiscoveryBar", false);
        var area = this.$("#search_key").val();
        var search_key = this.$("#search_businesses").val();
        var object;
        if (search_key !== "" || area !== "") {
            if (area !== "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area === "" && search_key !== "") {
                object = {"region": area, "search_string": search_key};
            } else if (area !== "" && search_key === "") {
                object = {"region": area, "search_string": search_key};
            }
        } else {
            object = {"region": "", "search_string": ""};
        }
        this.get("controller").transitionToRoute('search', {id: search_key});
//        this.get("controller").send("newSearch", area, search_key);
    }
});



})();

(function() {

HubStar.HtmlEditorView = Ember.View.extend({
    templateName: 'htmlEditor',

});


})();

(function() {

HubStar.ImageInputButtonView = Ember.TextField.extend({
    type: 'file',
    classNameBindings: ['new-btn'],
    attributeBindings: ['multiple'],
    multiple: true,
    change: function(evt) {

        var controller = this.get('controller');
        var photoCreateController = controller.get('controllers.photoCreate');
        photoCreateController.commitFiles(evt);
    }
});


})();

(function() {


HubStar.InvitePeopleView = Ember.View.extend({
    templateName: 'invitePeople',
    didInsertElement: function() {
       
    }
});


})();

(function() {

HubStar.IsLoadingView = Ember.View.extend({
        templateName: 'isLoading'
    });


})();

(function() {


HubStar.ItemFunctionView = Ember.View.extend({
    templateName: 'itemFunction',
    didInsertElement: function() {
       
    }
});


})();

(function() {

HubStar.ItemProfilesView = Ember.View.extend({
      templateName: 'itemProfiles'
    });



})();

(function() {

HubStar.ItemView = Ember.View.extend({
   templateName: 'item',
        didInsertElement: function() {


            $(function() {
                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });



        },
        checkingLoginStatus: function() {

       
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("application") !== -1) {

                if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                    controller.set("popup", true);
                }
            }
        },
                
        transitionToArticle:function(){

            
            
            
        },

        moreContent: function(event) {
            var id = "#" + event.id;

            this.get("controller").articleFromSearch();
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;
            $(id).animate({
                height: "100%"

            }, 200);
            $(collape_button).attr("style", "display:block");
            $(more_button).attr("style", "display:none");

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        collapeContent: function(event) {
            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;
            $(id).animate({
                height: "20px"
            }, 200);
            $(collape_button).attr("style", "display:none");
            $(more_button).attr("style", "display:block");

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        mega: function() {
            this.rerender();
        }.observes('controller.content')
    });


})();

(function() {

HubStar.KeywordDropTargetView = Ember.View.extend(HubStar.KeywordController.Droppable, {
    
//        contentBinding: "Keywords",

//        drop: function(event) {
//            var controller = this.get('controller');
//            var dataTransfer = event.originalEvent.dataTransfer;
//            var files = dataTransfer.files;
//            var totalFileSize = 0;
//            (function(file) {
//                var name = file.name;
//               var size = file.size;
//                var reader = new FileReader();
//                reader.onload = function(e) {
//                    
//                    controller.profileStyleImageDrop(e, name,size);
//                }, reader.readAsDataURL(files[0]);
//            })(files[0]);
//            return false;
//        }
    });


})();

(function() {

HubStar.KeywordView = Ember.View.extend(HubStar.KeywordController.Dragable, {
    
//        contentBinding: "Keywords",

//        drop: function(event) {
//            var controller = this.get('controller');
//            var dataTransfer = event.originalEvent.dataTransfer;
//            var files = dataTransfer.files;
//            var totalFileSize = 0;
//            (function(file) {
//                var name = file.name;
//               var size = file.size;
//                var reader = new FileReader();
//                reader.onload = function(e) {
//                    
//                    controller.profileStyleImageDrop(e, name,size);
//                }, reader.readAsDataURL(files[0]);
//            })(files[0]);
//            return false;
//        }
    });


})();

(function() {

HubStar.LoadingSpinnerView = Ember.View.extend({
        templateName: 'loadingSpinner'
    });



})();

(function() {

HubStar.LoginEnterKeyTextFieldView = Ember.TextField.extend({
  didInsertElement: function() {
      
    this.$().focus();
  },
       
   keyDown: function(event) {
    if (event.keyCode === 13) { 
      this.get('controller').login();
      
    }
  }
    });


})();

(function() {

HubStar.LoginModalView = Ember.View.extend({
    templateName: 'loginModal',
    didInsertElement: function() {
//        $("#loginModal").on("click", function() {
//            HubStar.set('checkLoginStatus', false);
//
//        });

    }

});



})();

(function() {

HubStar.MapView = Ember.View.extend({
      templateName: 'map',
        map: null,
        didInsertElement: function() {

//            var map = null;
//
//            var myOptions = {
//                zoom: 10,
//                center: new google.maps.LatLng(-33.923036, 151.259052),
//                mapTypeControl: true,
//                mapTypeControlOptions: {
//                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
//                },
//                navigationControl: true,
//                mapTypeId: google.maps.MapTypeId.ROADMAP
//            };
//            var map = new google.maps.Map(this.$().get(0), myOptions);
//
//            var marker = new google.maps.Marker({
//                position: map.getCenter(),
//                map: map
//
//            });
//
//
//
//            this.set('map', map); //save for future updations
//            this.$().css({width: "100%", height: "100%"});
//
//

        }
    });


})();

(function() {

HubStar.MasonryCollectionItemsView = Ember.View.extend({
          templateName: 'masonryCollectionItems',
        didInsertElement: function() {

            $(function() {
                $('#masonry_photo_collection_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isFitWidth: true
                });
            });
            $('#uploadObject').click(function() {
                $('#uploadObject').attr("style", "display:none");
                $('#uploadingObject').attr('style', "display:block");
                $('#uploadArea').attr('style', "display:block");
                $('#addNew').animate({
                    height: 400,
                    width: 400
                }, 400, function() {
                    $('#masonry_photo_collection_container').masonry({
                        itemSelector: '.box',
                        columnWidth: 185,
                        isFitWidth: true
                    });
                });
            });
            $('#uploadingObject').click(function() {
                $('#uploadObject').attr('style', "display:block");
                $('#uploadingObject').attr('style', "display:none");
                $('#uploadArea').attr('style', "display:none");
                $('#addNew').animate({
                    height: 400,
                    width: 300
                }, 400, function() {
                    $('#masonry_photo_collection_container').masonry({
                        itemSelector: '.box',
                        columnWidth: 185,
                        isFitWidth: true
                    });
                });

            });

            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');

            });
        }

    });


})();

(function() {

HubStar.MasonryCollectionView = Ember.View.extend({
   templateName: 'masonryCollection',
        didInsertElement: function() {


            $(function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });



        },
        editCollectionButton: function(id, desc) {
            
            var userController = this.get('controller');
            userController.setSelectedCollection(id);
           


            var div_id = "#" + id;
            var div_class = "." + id + "  #uploadArea";
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
            

            $(div_id).attr("style", "display:none");
            $(div_class).attr('style', "display:inline-block");
            var createCollection = "." + id + "  #createCollection";
            var updateCollection = "." + id + "  #updateCollection";
            var updatebtn = "." + id + "  #updatebtn";
            var createbtn = "." + id + "  #createbtn";
            var deletebtn = "." + id + "  #deletebtn";
            var collection_name_insert = "." + id + "  .new-collection-name_insert";
            var collection_area = "." + id + "  .new-collection-area";
            $(createCollection).attr('style', "display:none");
            $(updateCollection).attr('style', "display:block;color: #333; font-size: 20px; font-weight: bold; text-align: center; margin: 5px 0 0;");
            $(updatebtn).attr('style', "display:inline-block");
            $(deletebtn).attr('style', "display:inline-block;left:15px;top:7px");
            $(createbtn).attr('style', "display:none");
            $(collection_name_insert).val(id);
            $(collection_area).val(desc);
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true
            });
            
            
            
            
            
            
            
            
        }
    });


})();

(function() {

HubStar.MasonryView = Ember.View.extend({
    templateName: 'masonry',
        didInsertElement: function() {
            $(function() {
                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
            if (HubStar.get('searchStart')) {
                HubStar.set('isMansonryPageLoad', true);
            }
        },
        willDestroyElement: function() {
            HubStar.set('isMansonryPageLoad', false);
        },
        moreContent: function(event) {

            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;
            $(id).animate({
                height: "100%"

            }, 200);
            $(collape_button).attr("style", "display:block");
            $(more_button).attr("style", "display:none");

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        collapeContent: function(event) {
            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;
            $(id).animate({
                height: "20px"
            }, 200);
            $(collape_button).attr("style", "display:none");
            $(more_button).attr("style", "display:block");

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        mega: function() {
            this.rerender();
        }.observes('controller.content')
    });


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MessageCenterView = Ember.View.extend({

  templateName: 'messageCenter'
    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.MessageView = Ember.View.extend({
    templateName: 'message',
    didInsertElement: function() {
        var that =this;
        $(document).ready(function() {      
            $("#messageScrollBar_" + that.get("controller").get('model').get('message_id')).mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 300
            });
        });
    }
});



})();

(function() {

HubStar.NavigatorView = Ember.View.extend({
    templateName: 'navigator',

    didInsertElement: function() {

//$(".Navigator-content ul").click(function() {
//         
//       $(this).css("background-color","#d2d2d2");
//       //$(this).addClass('active-item');
//        });
        
    }
    


});


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.NewConversationView = Ember.View.extend({

  templateName: 'newConversation'
    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.NotificationTopView = Ember.View.extend({

  templateName: 'notificationTop'
    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.NotificationView = Ember.View.extend({

  templateName: 'notification'
    });



})();

(function() {

HubStar.PhotoCreateInfoSettingView = Ember.View.extend({
        templateName: 'photoCreateInfoSetting',
        observerSetData: function()
        {
            var controller = this.get('controller');
                controller.setData();
        }.observes('controller.isEditingMode')
    });



})();

(function() {



HubStar.PhotoCreateView = Ember.View.extend(HubStar.PhotoCreateController.Droppable, {

    contentBinding: "photoCreate",
  
    drop: function(event) {
        var dataTransfer = event.originalEvent.dataTransfer;
        var files = dataTransfer.files;
        var controller = this.get("controller");
       var  filesize = 0;

        var photoCreateController = controller.get('controllers.photoCreate');      
        photoCreateController.fileChecking(files.length);
        photoCreateController.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                filesize = file.size;
               // console.log(filesize);
                if(filesize>=25000000)
                {
                  alert("The limit size of uploading is 25MB");
                }
                else
                {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                    photoCreateController.addPhotoObject(e, name, type, filesize);
                      
                    }, reader.readAsDataURL(files[i]);
              }
            })(files[i]);
        }
   //    console.log(filesize);
        $('#dragAndDroppArea').attr('style', "display:block");
        return false;
    }

});


})();

(function() {

HubStar.PhotoDisplayAreaView = Ember.View.extend({
    templateName: 'photoDisplayArea',
    imgReturn: function() {

    }.observes('content')
});



})();

(function() {


HubStar.PhotoView = Ember.View.extend({
    templateName: 'photo',
    classNames: ["lightbox"],
    content: [],
    TitleTag: false,
    PartnerTag: false,
    DiscussionTag: false,
    NameTag: false,
    didInsertElement: function() {
        return this.$().attr({tabindex: 1}), this.$().focus();
    },
    setTitleTag: function() {
        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");
        //     this.set('discussionTag', !this.get('discussionTag'));

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
        //       this.set('nameTag', !this.get('nameTag'));

    },
    setPartnerTag: function() {
        $('#partner_action').slideToggle("slow");
        //       this.set('partnerTag', !this.get('partnerTag'));

    },
    popupAibum: function() {
        HubStar.set('what', false);
        $("#collection_tab").slideToggle("slow");
    },
    openComment: function() {

        $('#addcommetBut').attr('style', 'display:none');
        $('#commentBox').attr('style', 'display:block');

        $('.comment-insert-field').focus();
        this.get("controller").get("controllers.checkingLoginStatus").popupLogin();
    },
    closeComment: function() {
        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');
    },
    keyUp: function(event, view) {
        if (event.which === 27)
        { // pressed 'esc'

            //this.get("controller").transitionTo("search");

            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
            var user_photo_id = address.split("#")[1].split("/")[8];
            if (type === "users")
            {
                var user = HubStar.User.find(id);

                if (user_photo_id !== undefined || colectionType === "articles" || colectionType === "photos") //type:article means it 
                {

                    var data = null;
                    for (var i = 0; i < user.get('collections').get("length"); i++) {
                        data = user.get('collections').objectAt(i);
                        if (data.id === collection_id) {
                            break;
                        }
                    }
                    this.get("controller").transitionTo("collection", data); //user
                }
                else
                {
                    window.history.back();
                }
            }
            else
            {
                this.get("controller").closeWindow();
            }

        }
    }

});

//
//$(document).keyup(function(e) {
//
//    if (e.which === 27)
//    {
//        HubStar.PhotoView.prototype.show();
//    }
////    { // pressed 'esc'
////        var address = document.URL;
////        var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
////        var id = address.split("#")[1].split("/")[2];
////        var collection_id = address.split("#")[1].split("/")[4];
////        var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
////        var user_photo_id = address.split("#")[1].split("/")[8];
////        if (type === "users")
////        {
////            var user = HubStar.User.find(id);
////            if (user_photo_id !== undefined || colectionType === "article" || colectionType === "photo") //type:article means it 
////            {
////                for (var i = 0; i < user.get('collections').get("length"); i++) {
////                    var data = user.get('collections').objectAt(i);
////                    if (data.id === collection_id) {
////                        break;
////                    }
////                }
////                console.log(this.get("controller"));
////                this.get("controller").transitionTo("collection", data); //user
////            }
////            else
////            {
////                window.history.back();
////            }
////        }
////        else if (type === "photos")
////        {
////            this.get("controller").get("controllers.mega").closeWindow();
////        }
////        else
////        {
////            window.history.back();
////        }
////
//////                if (type === "users")
//////        {
//////            if (collection_id !== undefined)
//////            {
//////                if (photo_id !== undefined)
//////                {
//////
//////                }
//////                else
//////                {
//////
//////                }
//////
//////            } else
//////            {
//////
//////            }
//////        }
////
////
////        // HubStar.PhotoView.prototype.closeComment();
////        // HubStar.PhotoView.get('controller').closeWindow();
////
////    }
////    else if ((e.which === 38) || (e.which === 37))
////    {
////        //press up  or left
////        // this.get('controller').prototype.previesImage();
////    }
////    else if ((e.which === 39) || (e.which === 40))
////    {
////        //press down  or  right 
////        //this.get('controller').prototype.nextImage();
////    }
//});

})();

(function() {

HubStar.PlatformBarView = Ember.View.extend({
          templateName: 'platformBar',
        didInsertElement: function() {




        },
        sidebarScroll: function() {
            function scrollTest(that) {
                var screenYPix = $('.firstList').parent().offset().top;
                if (Math.abs(screenYPix - $(that).offset().top) > 180) {
                    if (screenYPix - $(that).offset().top < 0) {
                        $(that).parent().stop().animate({
                            top: '-=' + (Math.abs(screenYPix - $(that).offset().top) - 180)
                        }, 135, function() {
                        });
                    } else {
                        $(that).parent().stop().animate({
                            top: '+=' + (Math.abs(screenYPix - $(that).offset().top) - 180)
                        }, 135, function() {
                        });
                    }
                }
            }
            $(function() {
                $('.firstList > li ').mousemove(function(e) {
                    var that = this;
                    scrollTest(that);

                });
                $('.firstList > li >ul>li').mousemove(function(e) {
                    var that = this;
                    scrollTest(that);

                });
                $('.firstList > li > ul >li >ul>li').mousemove(function(e) {
                    var that = this;
                    scrollTest(that);

                });

                $('#nav-ul').mouseleave(function() {

                    $('.firstList').stop();
                });

            });


            $("#navContainer > ul > li >span").hover(function() {
                $("#navContainer > ul > li").not(this).removeClass('sidebar-hover');
            });



            $("#navContainer > ul > li> ul >li >span").hover(function() {

                $(this).parent().parent().parent().addClass("sidebar-hover");

            });


            $("#navContainer > ul > li> ul >li >span").hover(function() {
                $("#navContainer > ul > li> ul >li").not(this).removeClass('sidebar-hover');
            });



            $("#navContainer > ul > li> ul >li>ul> li>span").hover(function() {

                $(this).parent().parent().parent().addClass("sidebar-hover");

            });

            $("#navContainer > ul > li> ul >li> ul >li >span").hover(function() {
                $("#navContainer > ul > li> ul >li> ul >li").not(this).removeClass('sidebar-hover');
            });



            $("#navContainer > ul > li> ul >li>ul> li > ul ").hover(function() {
                $(this).parent().addClass("sidebar-hover");

            });
        }

    });


})();

(function() {

HubStar. PreviewImageView = Ember.View.extend({
     templateName: 'previewImage',
        attributeBindings: ['name', 'width', 'height', 'src'],
        tagName: 'img',
        viewName: 'previewImageView',
        printme: function() {

        }
    });


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ProfileAboutUsEditView = Ember.View.extend({
          templateName: 'profileAboutUsEdit',
     
    });

})();

(function() {

HubStar.ProfileFollowersView = Ember.View.extend({
   templateName: 'profileFollowers'
    });



})();

(function() {

HubStar.ProfileNewView = Ember.View.extend({

   

    });


})();

(function() {

HubStar.ProfilePartnersView = Ember.View.extend({
  templateName: 'profilePartners',
        didInsertElement: function() {
            $(function() {
                $('#masonry_profile_partner_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
        }
    });


})();

(function() {

HubStar.ProfileVideosView = Ember.View.extend({
    templateName: 'profileVideos'
});


})();

(function() {

HubStar.ProfileView = Ember.View.extend({
    
    templateName: 'profile',
    
    didInsertElement: function() {      
           if(this.get('controller').get("profile_average_review_length")!=="" && this.get('controller').get("profile_average_review_length") !==null && this.get('controller').get("profile_average_review_length")!== undefined ){
            $('#starsize').attr("style", "width:" + this.get('controller').get("profile_average_review_length") + "px");
       }
       else {
           $('#starsize').attr("style", "width:100px");
       }
      
         $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
        $(".navbar").css("box-shadow", "0 0 10px #333");
                  $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
        $(document).ready(function() {
             setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);

        });

        var address = document.URL;
        var displayTap = address.split("#")[1].split("/")[3];

        if (displayTap === "partners")
        {

            $('#user-stats > li').removeClass('selected-user-stats');

            $('#partners').addClass('selected-user-stats');

            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (displayTap === "followers")
        {


            $('#user-stats > li').removeClass('selected-user-stats');

            $('#follow').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (displayTap === "reviews")

        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#reviewList').addClass('selected-user-stats');
        }
        else if (displayTap === "videos")
        {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#video').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else {


            $('#user-stats > li').removeClass('selected-user-stats');

            $('#defualt').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
    }
     
    
});


})();

(function() {

HubStar.ProfilesView = Ember.View.extend({
     templateName: 'profiles',
        classNames: ["nothingHere"]
    });


})();

(function() {

HubStar.QuickstartView = Ember.View.extend({
  templateName: 'quickstart'
 
  });


})();

(function() {

HubStar.RegisterEnterKeyTextFieldView = Ember.TextField.extend({

       
   keyDown: function(event) {
    if (event.keyCode === 13) { 
      this.get('controller').signUp();
      
    }
  }
    });


})();

(function() {

HubStar.RegisterView = Ember.View.extend({
    templateName: 'register',
   
    didInsertElement: function() {

    }
  
});





})();

(function() {

HubStar.ReviewListSingleView = Ember.View.extend({
    templateName: 'reviewListSingle',
    isDown: false,
    didInsertElement: function() {

        var that = this;
        $(document).ready(function() {
            var id = "#reply_" + that.get("controller").get('model').get('review_id');

            $(id).mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 200
            });
            var ids = "#ok_" + that.get("controller").get('model').get('review_id');

            $(ids).click(function() {
                that.get("controller").transitionToRoute('review', {id: that.get("controller").get('model').get('review_id')});
            });
        });
    },
    downContent: function(event) {
        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var review_reply = "#reviewReplyData_" + event;
        this.get("controller").transitionToRoute('review', {id: event});
        var content = "#review_content_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:inline-block;;");
        $(down_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:none;");
        $(content).animate({width: '420px', maxHeight: '600px', position: 'relative', display: 'inline-block', overflow: 'auto'}, 500);
        $(content).parent().parent().addClass('active');
        $(review_reply).show(10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 100);

    },
    upContent: function(event) {

        var id = "#" + event;
        var up_button = "#up_button_" + event;
        var down_button = "#down_button_" + event;
        var content = "#review_content_" + event;
        var review_reply = "#reviewReplyData_" + event;
        $(up_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:none;");
        $(down_button).attr("style", "position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:inline-block;");
        $(content).animate({width: '390px', maxHeight: '100px', position: 'relative', dispaly: 'none', overflow: 'hidden'}, 500);


        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    },
    showOneReview: function(event, checking) {

        if (this.get("controller").get('model').get('review_id') === event) {
            if (checking === "content") {
                this.downContent(event);
            }
            else if (checking === "viewReply") {
                this.viewComments(event);
            }
            for (var i = 0; i < this.get("controller").get("controllers.profile").get('reviews').get('length'); i++) {
                if (this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get('review_id') !== event) {
                    this.upContent(this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get("review_id"));
                    this.upComments(this.get("controller").get("controllers.profile").get('reviews').objectAt(i).get("review_id"));
                }
            }
        }


    },
    viewComments: function(event) {
        $('#reply_' + event).attr('style', 'display: block;max-height:0;');
        $('#view-comments_' + event).attr('style', ' display: none; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#view-comments_' + event).animate({display: 'none'}, 500);
        $('#up-comments_' + event).attr('style', 'display: block;background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#up-comments_' + event).animate({display: 'block'}, 10);
        this.get("controller").transitionToRoute('review', {id: event});
        $('#reply_' + event).animate({maxHeight: '200px'}, 10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    },
    upComments: function(event) {
        $('#reply_' + event).attr('style', 'display: none; max-height:0;');
        $('#up-comments_' + event).attr('style', 'display: none;background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#up-comments_' + event).animate({display: 'none'}, 500);
        $('#view-comments_' + event).attr('style', ' display:block; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;');
        $('#view-comments_' + event).animate({display: 'block'}, 10);
        $('#reply_' + event).animate({maxHeight: '0px'}, 10);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 10);
    }

});




})();

(function() {

HubStar.ReviewListView = Ember.View.extend({
    templateName: 'reviewList',
    didInsertElement: function() {


        $(document).ready(function() {
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
        });

    },

//    downContent: function(event) {
//
//        var id = "#" + event;
//        var up_button = "#up_button_" + event;
//        var down_button = "#down_button_" + event;
//        var review_reply = "#reviewReplyData_" + event;
//
//        var content = "#review_content_" + event;
//        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block;");
//        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px;");
//        $(content).animate({width: '420px', height: '120px', position: 'relative', display: 'inline-block', overflow: 'auto'}, 2000);
//        $(review_reply).show(2000);
//    },
//    upContent: function(event) {
//
//        var id = "#" + event;
//        var up_button = "#up_button_" + event;
//        var down_button = "#down_button_" + event;
//        var content = "#review_content_" + event;
//          var review_reply = "#reviewReplyData_" + event;
//        //  var like = "#review_like_" + event;
//        $(up_button).attr("style", "position: relative;  font-size: 18px; color: #888;margin: 0 10px; display:none");
//        $(down_button).attr("style", "position: relative; display: none;  font-size: 18px; color: #888;margin: 0 10px; display:inline-block");
//        $(content).animate({width: '390px', height: '20px', position: 'relative', dispaly: 'none', overflow: 'hidden'}, 2000);
//         $(review_reply).hide(2000);
//    }
});




})();

(function() {

HubStar.ReviewReplyListSingleView = Ember.View.extend({
    templateName: 'reviewReplyListSingle',
    didInsertElement: function() {

    
    },
    replyView: function(event) {

          this.get("controller").transitionToRoute('reply', {id: event});
    }
   
    

});




})();

(function() {

HubStar.ReviewView = Ember.View.extend({
    templateName: 'review',
    didInsertElement: function() {


        $(document).ready(function() {
            $('#post-star').ratings(10).bind('ratingchanged', function(event, data) {
                $('#post-star-rating').text(data.rating);
            });

        });

    }
});


})();

(function() {

HubStar.SearchAreaTextFieldView = Ember.TextField.extend({

        insertNewline: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("addCollection") !== -1)
            {
                controller.addNewCollection();
            }
            else if (controller._debugContainerKey.indexOf("application") !== -1)
            {
                controller.newSearch();
            }
            else if (controller._debugContainerKey.indexOf("mega") !== -1) {
                controller.addComment();
            }
            else if (controller._debugContainerKey.indexOf("comment") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];         
            controller.openComment(s);
        } 
            else if (controller._debugContainerKey.indexOf("contact") !== -1) {
                controller.setEditable("Email");
            }
            else {
       
            }
        }

    });


})();

(function() {

HubStar.SearchRequireTextFieldView = Ember.TextField.extend({
    insertNewline: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            controller.addNewCollection();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {
            controller.transitionToRoute('search', {id: controller.get('search_string')});
            $(".Navigator-box").css('display', 'none');
            $("#top-about-menu").fadeOut("320");
            $("#search-bar").fadeIn("320");
            HubStar.set("showDiscoveryBar", false);
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {
            controller.addComment();
        }
        else if (controller._debugContainerKey.indexOf("contact") !== -1) {
            controller.setEditable("DesplayName");
        } else if (controller._debugContainerKey.indexOf("article") !== -1) {
            controller.addComment();
        } else if (controller._debugContainerKey.indexOf("video") !== -1) {
            controller.addComment();
        }
        else if (controller._debugContainerKey.indexOf("profile") !== -1) {
            controller.partnerSearch();
        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            controller.addReply(s);
        }
        else if (controller._debugContainerKey.indexOf("editReply") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            controller.updateReply(s);
        }
        else if (controller._debugContainerKey.indexOf("reviewListSingle") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.transitionToRoute('review', {id: s});
            controller.addReviewReply(s);
            controller.editReviewReply(s);
        }
        else if (controller._debugContainerKey.indexOf("reviewReplyListSingle") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            controller.transitionToRoute('reply', {id: s});
            controller.saveReviewReply(s);
        }
        else {
//            console.log(controller);
        }
    },
    didInsertElement: function() {
        this.$().focus();
    }
});


})();

(function() {

HubStar.SearchView = Ember.View.extend({
      templateName: 'search',
        didInsertElement: function() {
            if (HubStar.get('isLogin')) {
                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");
            } else {
                $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
                $('#login_detail').attr("style", "display:block;");
            }
        }
        

    });


})();

(function() {

HubStar.SelectFunctionView = Ember.View.extend({
    templateName: 'selectFunction',
    didInsertElement: function() {
        //   this.$().hide().show('fast');
    },
    selectionOne: function() {
        var controller = this.get('controller');

        if (controller._debugContainerKey.indexOf("profile") !== -1)
        {
                 controller.selectOldAbout();
        }
        else {
//            console.log("this is a select");
        }
    },
    selectionTwo: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("profile") !== -1)
        {
                 controller.selectNewAbout();
        }
        else {

        }


    }


});


})();

(function() {

HubStar.ShowAlbumView = Ember.View.extend({
    templateName: 'showAlbum',
    didInsertElement: function() {
    },
    hide: function(id) {
        if (HubStar.get("what") === true)
        {
           setTimeout(function() {
            $('.collection_tab1').attr('style', 'bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:none; position: absolute;z-index: 5; width: 100%; opacity: .9;');
        }, 200);
        }
        {
            $("#collection_tab").slideToggle("fast");
        }
    }

});

})();

(function() {

HubStar.SingleFileUploaderView = Ember.View.extend(HubStar.SingleFileUploaderController.Droppable, {
    
        contentBinding: "SingleFileUploader",

        drop: function(event) {
            var controller = this.get('controller');
            var dataTransfer = event.originalEvent.dataTransfer;
            var files = dataTransfer.files;
            var totalFileSize = 0;
            (function(file) {
                var name = file.name;
               var size = file.size;
                var reader = new FileReader();
                reader.onload = function(e) {
                    
                    controller.profileStyleImageDrop(e, name,size);
                }, reader.readAsDataURL(files[0]);
            })(files[0]);
            return false;
        }
    });


})();

(function() {

HubStar.SingleImageInputButtonView = Ember.TextField.extend({
    type: 'file',
    classNameBindings: ['new-btn'],
multiple: true,
    change: function(evt) {
        var controller = this.get('controller');
        var input = evt.target;
        var files = input.files;
        (function(file) {
            if (file !== undefined) {
                var name = file.name;
                var reader = new FileReader();
                reader.onload = function(e) {
                    controller.profileStyleImageDrop(e, name);
                }, reader.readAsDataURL(files[0]);

            }
        })(files[0]);
        evt.preventDefault();
        input.onclick = function() {
            this.value = null;
        };

//        files=new Array();
    }

});


})();

(function() {

HubStar.StatusView = Ember.View.extend({
    templateName: 'status',
        didInsertElement: function() {
            if (HubStar.get('isLogin')) {

                $('#login_button').attr("style", "display:none");
                $('#afterLogin').attr("style", "display:block");
                $('#welcome_message').attr("style", "display:none");


            } else {

                $('#login_button').attr("style", "display:inline-block");
                $('#afterLogin').attr("style", "display:none");
                $('#welcome_message').attr("style", "display:block");
            }
        }

    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.TalkView = Ember.View.extend({

  templateName: 'talk'
    });



})();

(function() {

HubStar.TestView = Ember.View.extend({
           templateName: 'test'
    });



})();

(function() {

HubStar.UploadResourceView = Ember.View.extend({
          templateName: 'uploadResource'
    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserEditView = Ember.View.extend({
          templateName: 'userEdit',
     
    });

})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowersView = Ember.View.extend({

  templateName: 'userFollowers'
    });


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowingsView = Ember.View.extend({
  templateName: 'userFollowings'

    });


})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.UserMessageView = Ember.View.extend({

  templateName: 'userMessage'
    });



})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserPhotoEditView = Ember.View.extend({
          templateName: 'userPhotoEdit'
     
    });

})();

(function() {

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

HubStar.UserPostView = Ember.View.extend({

  templateName: 'userPost'
    });



})();

(function() {

HubStar.UserView = Ember.View.extend({
    templateName: 'user',
//       interestsActive:false,
    didInsertElement: function() {
   
        $("#top-about-menu").css('display', 'none');
        $("#search-bar").css('display', 'block');
        $(".navbar").css("box-shadow", "0 0 10px #333");
    $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
        $(function() {
            $('#masonry_user_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true
            });
        });

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[3];


        if (user_id === "following")
        {
             $('#user-stats > li').removeClass('selected-user-stats');
            $('#ufollowing').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (user_id === "followers")
        {

          $('#user-stats > li').removeClass('selected-user-stats');
            $('#ufollower').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }

        else if (user_id==="messagecenter") {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#message').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else if (user_id==="post") {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#post').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }
        else {
            $('#user-stats > li').removeClass('selected-user-stats');
            $('#defualt').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');
            });
        }


    },
    showInterestsUp: function() {
        if ($('#interest_btn').hasClass('icon-double-angle-up') && this.get('controller').get('interestsActive') === false) {

            $('#show_interest').animate({top: 55, height: 445}, 400);
            // Main slide animation (interest div)
            $('#profile-picture').delay(200).animate({top: -55}, 0);
            //Moves profile picture to top, ready for slide down. 

            var that = this;
            setTimeout(function() {
                $("#profile-picture").addClass('profile-picture-active');
                $(".follow-btn").addClass('follow-btn-active');

                that.get('controller').set('interestsActive', true);
            }, 200);

            setTimeout(function() {
                $('.interesttags-container').css('height', '335px');
                $('.interest-insert-hint').css('display', 'block');
                $('.interest-textarea').css('height', '250px');
                $('#interest_btn').css('display', 'none');
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#profile-picture').delay(200).animate({top: -2.5}, 200);
            // Slide down animation.

            $('#interest_btn').removeClass('icon-double-angle-up');
            $('#interest_btn').addClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

        }// Slide up (open) no prior set parameters/coditions



        if ($('#interest_btn').hasClass('icon-double-angle-down') && this.get('controller').get('interestsActive') === false) {
            this.get('controller').set('interestsActive', true);
            setTimeout(function() {
                $('.interesttags-container').css('height', '375px');
                $('.interest-insert-hint').css('display', 'block');
                $('.interest-textarea').css('height', '250px');
                $('#interest_btn').css('display', 'none');

            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#interest_btn').removeClass('icon-double-angle-up');
            $('#interest_btn').addClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

        }// Displays the full sized edit box, when interest's box is already at full size



        else {
            this.get('controller').set('interestsActive', false);

            $('#show_interest').animate({top: 298, height: 200}, 400, function() {
                $('.interesttags-container').css('height', '125px');
            });
            // Main slide animation (interest div)

            $('#interest_btn').addClass('icon-double-angle-up');
            $('#interest_btn').removeClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
                $('#interest_btn').css('display', 'block');
                $('.interesttags-container').css('height', '100px');
            }, 120);
            // Removes  required class styles for slide down animation

        }// Slides the edit box back down into normal interest tags
    },
    showInterests: function() {



        if ($('#interest_btn').hasClass('icon-double-angle-up')) {

            $('#show_interest').animate({top: 55, height: 445}, 400);
            // Main slide animation (interest div)
            $('#profile-picture').delay(200).animate({top: -55}, 0);
            //Moves profile picture to top, ready for slide down. 

            $('.interesttags-container').css('height', '375px');
            $('.interest-insert-hint').css('display', 'block');
            $('.interest-textarea').css('height', '250px');
            //Coin's

            setTimeout(function() {
                $("#profile-picture").addClass('profile-picture-active');

                $(".follow-btn").addClass('follow-btn-active');
            }, 200);
            // Adds required class styles prior to slide down animation.

            $('#profile-picture').delay(200).animate({top: -2.5}, 200);
            // Slide down animation.

            $('#interest_btn').removeClass('icon-double-angle-up');
            $('#interest_btn').addClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

        }// Slide up (open)
        else {
            $('#show_interest').animate({top: 298, height: 200}, 400, function() {
                $('.interesttags-container').css('height', '125px');
            });
            // Main slide animation (interest div)

            $('#interest_btn').addClass('icon-double-angle-up');
            $('#interest_btn').removeClass('icon-double-angle-down');
            // Changes the active state position of the slide up/down arrow.

            setTimeout(function() {
                $("#profile-picture").removeClass('profile-picture-active');
                $(".follow-btn").removeClass('follow-btn-active');
            }, 120);
            // Removes  required class styles for slide down animation

        }// Slide down (close)

    }


});


})();

(function() {

HubStar.UsersView = Ember.View.extend({
        templateName: 'users'
    });


})();

(function() {

HubStar.VideoView = Ember.View.extend({
    templateName: 'video',
    classNames: ["lightbox"],
    TitleTag: false,
    PartnerTag: false,
    DiscussionTag: false,
    NameTag: false,
    didInsertElement: function() {
 return this.$().attr({tabindex: 1}), this.$().focus();
    },
    setTitleTag: function() {
        $('#article_action').slideToggle(1000);
    },
    setDiscussionTag: function() {
        $('#discuss_action').slideToggle("slow");
        //     this.set('discussionTag', !this.get('discussionTag'));

    },
    setNameTag: function() {
        $('#poster_action').slideToggle("slow");
        //       this.set('nameTag', !this.get('nameTag'));

    },
    setPartnerTag: function() {
        $('#partner_action').slideToggle("slow");
        //       this.set('partnerTag', !this.get('partnerTag'));

    },
    popupAibum: function() {
        HubStar.set('what', false);
        $("#collection_tab").slideToggle("slow");
    },
    openComment: function() {

        $('#addcommetBut').attr('style', 'display:none');
        $('#commentBox').attr('style', 'display:block');

        $('.comment-insert-field').focus();
        this.get("controller").get("controllers.checkingLoginStatus").popupLogin();
    },
    closeComment: function() {

        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');


    },
             keyUp: function(event, view) {
        if (event.which === 27)
        { // pressed 'esc'

            //this.get("controller").transitionTo("search");

            var address = document.URL;
            var type = address.split("#")[1].split("/")[1]; //user ,profiles, articles , videos , photos 
            var id = address.split("#")[1].split("/")[2];
            var collection_id = address.split("#")[1].split("/")[4];
            var colectionType = address.split("#")[1].split("/")[5]; //it may be article id , photo id and video id
            var user_photo_id = address.split("#")[1].split("/")[8];
            if (type === "users")
            {


                var user = HubStar.User.find(id);

                if (user_photo_id !== undefined) //type:article means it 
                {
     
                    var data = null;
                    for (var i = 0; i < user.get('collections').get("length"); i++) {
                        data = user.get('collections').objectAt(i);
                        if (data.id === collection_id) {
                            break;
                        }
                    }
                    this.get("controller").transitionTo("collection", data); //user
                }
                else
                {
        
                    window.history.back();
                }
            }
            else
            {
                window.history.back();
            }


        }
    }


});


})();

(function() {

HubStar.WelcomeView = Ember.View.extend({
    templateName: 'welcome',
    didInsertElement: function() {
        $(function() {
            $('#masonry_welcome_container').masonry({
                itemSelector: '.box',
                columnWidth: 185,
                isFitWidth: true
            });
        });

        if (HubStar.get('isLogin')) {

            $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
            $('#login_detail').attr("style", "display:block;");



        } else {

            $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
            $('#login_detail').attr("style", "display:block;");

        }

    }
});


})();

(function() {


var Router = Ember.Router.extend( );


HubStar.Router.map(function() {
    this.resource("index", {path: '/'}, function() {
        this.resource("indexIndex", {path: '/'});
        this.resource("verifyId", {path: '/verify/:verify_id'});
        this.resource("article", {path: '/articles/:article_id'});
        this.resource("video", {path: '/videos/:video_id'});
        this.resource("photo", {path: '/photos/:photo_id'});
//        this.resource("videoes", function() {
//            this.resource("video", {path: ':video_id'});
//        });
        this.resource("files", {path: '/files/:file_id'});
        this.resource("ideabooks", {path: '/ideabooks/:ideabook_id'});
        this.resource("profile", {path: '/profiles/:profile_id'}, function() {
            this.resource("profileFollowers", {path: '/followers'});
            this.resource("profileVideos", {path: '/videos'});
            this.resource("profileCollections", {path: '/collections'}, function() {
                //this.resource("photo", {path: '/photoes/:photo_id'});
                this.resource("profileCollection", {path: ':profileCollection_id'}, function() {
                    this.resource("profilePhoto", {path: '/photos/:photo_id'});
                    this.resource("profileArticle", {path: '/article/:article_id'}, function() {
                        this.resource("profileArticlePhoto", {path: '/photos/:photo_id'});
                    });
                    
                    this.resource("profileVideo", {path: '/videos/:video_id'});
                });
            });

            this.resource("partners", {path: '/network'});
            this.resource("reviews", {path: '/reviews'}, function() {
                this.resource("review", {path: ':review_id'}, function() {
                    this.resource("replys", {path: '/replys'}, function() {
                        this.resource("reply", {path: ':review_reply_id'});
                    });
                });
            });


        });
        this.resource("profiles", function() {
            this.resource("index", {path: '/'});
            this.resource("profileNew", {path: '/new'});

        });

        this.resource("user", {path: '/users/:user_id'}, function() {
            this.resource("following", {path: '/following'});
            this.resource("followers", {path: '/followers'});
            this.resource("userCollections", {path: '/collections'}, function() {
                this.resource("collection", {path: ':collection_id'}, function() {
                    this.resource("userPhoto", {path: '/photos/:photo_id'});
                    this.resource("userArticle", {path: '/article/:article_id'}, function() {
                        this.resource("articlePhoto", {path: '/photos/:photo_id'});
                    });
                    this.resource("userVideo", {path: '/video/:video_id'});
                });
            });
            this.resource("messageCenter", {path: '/messagecenter'}, function() {
                //  this.resource("messageCenter.index", {path: '/messages'});
                this.resource("messages", {path: '/messages'});
                this.resource("notifications", {path: '/notifications'});
                this.resource("conversations", {path: '/conversations'}, function() {
                    this.resource("newConversation", {path: '/new'});
                    this.resource("conversation", {path: ':conversation_id'});

                });
            });
            this.resource("userPost", {path: '/post'});
        });
        this.resource("users", function() {
            this.resource("usersIndex", {path: '/'});
        });

        this.resource("searchs", {path: "/search"}, function() {
            this.resource("searchIndex", {path: '/'});
            this.resource('search', {path: ':search_id'});
        });
       
        this.resource("register", {
            path: "/register"
        });
    });
});


})();