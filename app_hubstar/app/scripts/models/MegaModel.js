
DS.RESTAdapter.map('HubStar.Mega', {
    photo: {embedded: 'always'},
    user: {embedded: 'always'},
    group:  {embedded: 'always'},
    comments: {embedded: 'load'},
    reviews: {embedded: 'load'},
    profile: {embedded: 'load'},
    keyword: {embedded: 'always'},
    videoes: {embedded: 'always'},
    article: {embedded: 'always'},
    pdf: {embedded: 'always'}
});

HubStar.Mega = DS.Model.extend({
    accessed: DS.attr('string'),
    boost: DS.attr('number'),
    categories: DS.attr('string'),
    creator_profile_pic: DS.attr('string'),
    created: DS.attr('string'),
    creator: DS.attr('string'),
    country: DS.attr('string'),
    collection_id: DS.attr('string'),
    classification: DS.attr('string'),
    collection_count: DS.attr('string'),
    domains: DS.attr('string'),
    editors: DS.attr('string'),
    geography: DS.attr('string'),
    likes_count: DS.attr('string'),
    is_active: DS.attr('boolean'),
    is_indexed: DS.attr('boolean'),
    is_deleted: DS.attr('boolean'),
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
    owner_contact_bcc_emails: DS.attr('string'),
    owner_contact_cc_emails: DS.attr('string'),
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
    view_count: DS.attr('number'),
    share_count: DS.attr('number'),
    save_count: DS.attr('number'),
    comment_count: DS.attr('number'),
    optional: DS.attr('string'),
    isFollow: DS.attr('boolean'),  
    profile_editor: DS.attr('string'),
    profile_administrator: DS.attr('string'),
    profile_creator: DS.attr('string'),
    //--------------------------
    photo: DS.hasMany('HubStar.Photo'),
    user: DS.hasMany('HubStar.User'),
    group: DS.hasMany('HubStar.Group'),
    profile: DS.hasMany('HubStar.Profile'),
    comments: DS.hasMany('HubStar.Comment'),
    reviews: DS.hasMany('HubStar.Review'),
    article: DS.hasMany('HubStar.Article'),
    keyword: DS.hasMany('HubStar.Keyword'),
    videoes: DS.hasMany('HubStar.Video'),
    isShowMoreComment: false,
    isLike: false,
    pdf: DS.hasMany('HubStar.Pdf'),
    profile_width:"46px",
    profile_height:"46px",
    business_profile_pic: function() {
        var url = this.get("owner_profile_pic").split("_");
        var length = url.length;
        var width = Math.ceil(url[length - 1].split(".")[0].split("x")[0]);
        var height = Math.ceil(url[length - 1].split(".")[0].split("x")[1]);
        if (width > height)
        {
            this.set("profile_width", 46+"px");
            this.set("profile_height", Math.ceil(height/width*46)+"px");
        }
        else
        {
            var heightNew = 46;
            var widthNew = Math.ceil(width/height*heightNew);
            this.set("profile_width", widthNew+"px");
            this.set("profile_height", heightNew+"px");
        }
    }.property('owner_profile_pic'),
    keywordShow: function() {
        var a = [];

        for (var i = 0; i < 3 && this.get("keyword").get("length"); i++)
        {
            var b = [];
            //console.log(this.get("keyword").get("length"));
            if (this.get("keyword").objectAt(i) !== undefined && this.get("keyword").objectAt(i) !== null) {
                b.keyword_name = this.get("keyword").objectAt(i).get("keyword_name");
                a[i] = b;
            }
        }
        return a;
    }.property('keyword'),
    showComment: function() {
        if (this.get("comments").get("length") > 5)
        {
            this.set("isShowMoreComment", true);
        }
        else
        {
            this.set("isShowMoreComment", false);
        }
    }.observes('comment_count'),
    showMoreComment: function() {
        if (this.get("comments").get("length") > 5)
        {
            this.set("isShowMoreComment", true);
        }
    }.property('comment_count'),
    photo_isLike: function() {       
        if (this.get("people_like") === null || this.get("people_like") === undefined) {
            this.set("isLike", false);
        } else {
            if (this.get("people_like").indexOf(localStorage.loginStatus) !== -1) {
                this.set("isLike", true);
            } else {
                this.set("isLike", false);
            }
        }       
    }.property("people_like"),
    photo_album_id: function() {
        return "#album_" + this.get('id');
    }.property('id'),
    moreDisplay: function() {
        if (this.get("object_description") === null || this.get("object_description") === "")
        {
            return false;
        }
        else {
            return true;
        }
    }.property('object_description'),
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
    getPdf: function() {
        return this.get('type') === 'pdf';
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
    getID: function() {
        return this.get('id').replace(/[^\w\s]/gi, '');
    }.property('id'),
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
                //    HubStar.store.save();
            }
        });
    },
    didLoad: function() {
    }
});
