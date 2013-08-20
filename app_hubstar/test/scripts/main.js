(function() {

var HubStar = window.HubStar = Ember.Application.createWithMixins({
    LOG_TRANSITIONS: false,
    LOG_BINDINGS: false,
    ready: function() {
        HubStar.set("isLogin", false);
        HubStar.set("afterSearch", false);
        HubStar.set("setHight", null);
        HubStar.set('chooseCollection', null);
        HubStar.set('isMansonryPageLoad', false);
        HubStar.set('searchStart', false);

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
            Ember.Handlebars.registerBoundHelper('date', function(date) {
                if (date === "" || date === null||date === undefined) {
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


HubStar.Article = DS.Model.extend({
    mega: DS.belongsTo('HubStar.Mega', {embedded: 'always'}),
    article_sparkJobId: DS.attr('string'),
    article_heliumMediaId: DS.attr('string'),
    article_type: DS.attr('string'),
    article_headline: DS.attr('string'),
    article_subHeadline: DS.attr('string'),
    article_body: DS.attr('string'),
    article_creditText: DS.attr('string'),
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
    optional:DS.attr('string'),
    didLoad: function() {
    }
});


})();

(function() {

HubStar.Comment= DS.Model.extend({
                commenter_profile_pic_url: DS.attr('string'),
                commenter_id: DS.attr('string'),
                name: DS.attr('string'),
                content: DS.attr('string'),
                time_stamp: DS.attr('string'),
                is_delete: DS.attr('boolean'),
                optional: DS.attr('string'),
 
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
                name: DS.attr('string'),
                time_stamp: DS.attr('string'),
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
        profile: {embedded: 'load'},
        article: {embedded: 'always'}
    });

  HubStar.Mega= DS.Model.extend(Ember.Copyable, {
        accessed: DS.attr('string'),
        boost: DS.attr('string'),
        category: DS.attr('string'),
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
        //--------------------------
        photo: DS.hasMany('HubStar.Photo'),
        user: DS.hasMany('HubStar.User'),
        profile: DS.hasMany('HubStar.Profile'),
        comments: DS.hasMany('HubStar.Comment'),
        article: DS.hasMany('HubStar.Article'),
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
        updateMegaWithUrl: function(mega,url)
        {
            var tempurl = getRestAPIURL();
            var id = mega.get('id');
            mega.set('optional', id);
            $.ajax({
                url: tempurl + '/megas/'+url,
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

HubStar.Photo = DS.Model.extend({
        // mega: DS.belongsTo('HubStar.Mega', {embedded: 'always'}),
        photo_source_id: DS.attr('string'),
        photo_title: DS.attr('string'),
        photo_image_linkto: DS.attr('string'),
        photo_technicalSpecification: DS.attr('string'),
        photo_sequence: DS.attr('string'),
        photo_isExtra: DS.attr('string'),
        photo_caption: DS.attr('string'),
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
        followers: {embedded: 'always'}
    });
   HubStar.Profile= DS.Model.extend({
       profile_category: DS.attr('string'),
        profile_hero_url: DS.attr('string'),
        profile_pic_url: DS.attr('string'),
        profile_bg_url: DS.attr('string'),
        profile_hero_cover_url: DS.attr('string'),
        profile_physical_address: DS.attr('string'),
        profile_contact_number: DS.attr('string'),
        profile_contact_user: DS.attr('string'),
        profile_about_us: DS.attr('string'),
        profile_boost: DS.attr('string'),
        profile_name: DS.attr('string'), //
        profile_contact_first_name: DS.attr('string'),
        profile_contact_last_name: DS.attr('string'),
        profile_contact_email: DS.attr('string'),
        profile_keywords: DS.attr('string'),
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
        owner: DS.attr('string'),
        owner_contact_email: DS.attr('string'),
        owner_contact_cc_emails: DS.attr('string'),
        owner_contact_bcc_emails: DS.attr('string'),
        followers: DS.hasMany('HubStar.Follower'),
        collections: DS.hasMany('HubStar.Collection')
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

HubStar.Stat = DS.Model.extend({
    hits: DS.attr('string'),
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


            DS.RESTAdapter.map('HubStar.User', {
                collections: {embedded: 'always'}
            });


           HubStar.User= DS.Model.extend({
                identifier: DS.attr('string'),
                
                active_status: false,
                
                profile_url: DS.attr('string'),
                website_url: DS.attr('string'),
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
                selected_topics: DS.attr('string'),
                collections: DS.hasMany('HubStar.Collection')

            });





})();

(function() {

HubStar.Video = DS.Model.extend({
        
        
        
        
        didLoad: function() {

        }
    });



})();

(function() {

HubStar.ApplicationRoute = Ember.Route.extend({
        setupController: function(controller, model) {


        }

    });


})();

(function() {

HubStar.ArticleRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(controller, model) {
            var d = HubStar.Mega.find(model.id);
            controller.getInitData(d);
        },
        model: function(params) {
            return HubStar.Mega.find(params.article_id);
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


            if (model.id === undefined || model.id === "") {
                var address = document.URL;
                var id = address.split("#")[1].split("/")[3];

            } else {
                var id = model.id;

            }
            this.controllerFor('user').set('switchPhoto', false);

            this.controllerFor('masonryCollectionItems').selectModelForUser(id);
            this.controllerFor('masonryCollectionItems').set('canEdit', true);
        },
        model: function(params) {

            this.controllerFor('user').set('switchPhoto', false);
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            return HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: params.collection_id});
        },
        events: {
            transitionToPhoto: function(id) {
                this.transitionTo("photo", HubStar.Mega.find(id));
            },
            transitionToProfile: function(id) {

                this.transitionTo("profile", HubStar.Profile.find(id));
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

HubStar.ComingSoonRoute = Ember.Route.extend({
        redirect: function() {





        },
        setupController: function() {

        },
        activate: function() {
            this.controllerFor('application').set('comingsoon', true);
        },
        deactivate: function() {
            this.controllerFor('application').set('comingsoon', false);

        },
        renderTemplate: function() {
            this.render('comingSoon', {
                outlet: 'comingsoon',
                into: 'application'
            });
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
                this.controllerFor('application').newSearch();
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
                this.controllerFor('application').set("popup", true);
            }
        },
        redirect: function() {


            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                this.transitionTo('indexIndex');

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

HubStar.PhotoRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            var megaModel = HubStar.Mega.find(model.id);
            this.controllerFor('mega').getInitData(megaModel);
        },
        model: function(params) {
            return HubStar.Mega.find(params.photo_id);
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

HubStar.ProfileCollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (model.id === undefined || model.id === "") {
            var address = document.URL;
            var id = address.split("#")[1].split("/")[3];
        }
        else {
            var id = model.id;
        }

        if (model.get('title') !== undefined) {
            var title = model.get('title');
        }
        this.controllerFor('masonryCollectionItems').selectModelForProfile(id, title);
        this.controllerFor('profile').set('switchPhoto', false);
        this.controllerFor('masonryCollectionItems').set('uploadStuff', true);
        this.controllerFor('masonryCollectionItems').set('canEditbyOwner', true);
    },
    model: function(params) {
        this.controllerFor('profile').set('switchPhoto', false);
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];

        return HubStar.Mega.find({RquireType: "collection", collection_id: params.profileCollection_id, owner_profile_id: owner_id});

    },
    events: {
        transitionToPhoto: function(id) {
            this.transitionTo("photo", HubStar.Mega.find(id));
        },
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
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

HubStar.ProfileIndexRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            this.controllerFor('profile').set('switchPhoto', true);
        },
        redirect: function() {

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);
            } else {
                this.transitionTo('profile');
            }
        }


    });


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

HubStar.ProfileRoute = Ember.Route.extend({
        setupController: function(ProfileController, model) {
   
            HubStar.set('editingMode', 'profile');
            ProfileController.setLocalLoginRecrod();
            /******************  partner cehcking*******************/
            ProfileController.set('contactChecking', false);
            ProfileController.set('collectionTag', true);
            ProfileController.set('partnerTag', false);
            /*************************            partner cehcking           ***********8*/

            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('profile').set('switchPhoto', true);


            ProfileController.setProfile(model.id);
        },
        events: {
            transitionToCollectionPhoto: function(collection_id) {
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
            }
        },
        redirect: function() {
            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
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
            this.render('profile', {
                outlet: "profile",
                into: "application"
            });
        }

    });


})();

(function() {

HubStar.ProfilesRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(controller, model) {

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

            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
                this.controllerFor('application').set('popup', true);
            }
        },
        deactivate: function() {

        },
        model: function() {
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

HubStar.SearchIndexRoute = Ember.Route.extend({
        redirect: function() {





        },
        activate: function() {

            HubStar.set("isLogin", true);

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

            if (($('#search_key').val() === model.region) || ($('#search_business').val() === model.result)) {
                if (model.result !== "" || model.region !== "") {
         
                    this.controllerFor('search').set('model', HubStar.Mega.find({keywords: model.result, region: model.region}));
                }
            }
        },
        model: function(params) {

            var result = params.search_id;
            var separate = result.indexOf('+');
            var getKey = result.slice(separate + 1);
            var getRegion = result.slice(0, separate);
            $('#search_key').val(getRegion);
            $('#search_business').val(getKey);
            return HubStar.Mega.find({keywords: getKey, region: getRegion});
        },
        renderTemplate: function() {

            this.render('searchs', {
                into: "index"
            });
        }
    });


})();

(function() {

HubStar.SearchsRoute = Ember.Route.extend({
        setupController: function() {

            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();

            this.controllerFor('application').set('islogin', true);
            this.controllerFor('status').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', false);
            localStorage.checkUser = "";
        },
        events: {
            transitionToPhoto: function(id) {
                this.transitionTo("photo", HubStar.Mega.find(id));
            },
            transitionToProfile: function(id) {

                this.transitionTo("profile", HubStar.Profile.find(id));
            },
            transitionToArticle: function(id) {

                this.transitionTo("article", HubStar.Article.find(id));
            }
        },
        redirect: function() {
            if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
                this.transitionTo('indexIndex');

            } else {
                this.transitionTo('searchIndex');
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
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
            setTimeout(function() {
                $(window).scrollTop(HubStar.get("setHight"));
                HubStar.set("setHight", 0);
            }, 100);

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

HubStar.UserRoute = Ember.Route.extend({
        setupController: function(controller, model) {
            console.log("user setup");
            HubStar.set('editingMode', 'user');
            this.controllerFor('application').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', true);
            this.controllerFor('searchs').setLoginImge();
            this.controllerFor('application').set('isotherpage', true);
            this.controller.set('switchPhoto', true);
//            console.log(this.controllerFor('checkAuthorityStatus').);
            this.controllerFor('user').setUser();
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
            }
        },
        redirect: function() {
    
            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                this.transitionTo('indexIndex');
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

HubStar.VideoRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(IndexController, model) {

        },
        model: function(params) {
            return HubStar.Video.find(params.video_id);
        },
        activate: function() {
             $("body").css("overflow", "hidden");
             $('#footer').attr("style", "display:none");
        },
        deactivate: function() {
             $("body").css("overflow", "auto");
             $('#footer').attr("style", "display:block");
        },
//        renderTemplate: function() {
//            this.render('video', {
//                into: "index"
//            });
//        }

    });


})();

(function() {

HubStar.VideosRoute = Ember.Route.extend({
        //     controller: HubStarlicationController,
        setupController: function(IndexController, model) {

        }
//        model: function() {
//            return HubStar.Video.find();
//        }


    });



})();

(function() {

HubStar.WelcomeRoute = Ember.Route.extend({
        redirect: function() {




            if (localStorage.checkUser === "newUser") {


             

            } else {

                this.transitionTo('searchIndex');

            }


        },
        activate: function() {
            $(window).scrollTop(0);
            $('#masonry_container').attr('style', "display:none");
               $('#discovery_search_bar_wrapper').attr('style', "display:none");
            HubStar.set("isLogin", true);
        },
        setupController: function() {
            this.controllerFor('searchs').defaultSearch();
            this.controllerFor('index').setLogin();

            this.controllerFor('application').set('islogin', true);

            this.controllerFor('status').set('islogin', true);
            this.controllerFor('application').set('popup', false);
            this.controllerFor('application').set('isotherpage', false);



            setTimeout(function() {
                $(window).scrollTop(0);
                $('#masonry_container').attr('style', "display:none");
                    $('#discovery_search_bar_wrapper').attr('style', "display:none");
            }, 100);

        },
        renderTemplate: function() {
      var controller = this.controllerFor('topicSelection');
            this.render('welcome', {
                outlet: 'welcome',
                into: 'application',
                  controller: controller
            });
        }
    });


})();

(function() {

//HubStar.Store = DS.Store.extend({
//  // if you're looking at this, you probably know what you're doing...
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
        selectedDesc: "",
        selectedTitle: "",
        selectionPop: false,
        needs: ["mega", "article"],
        newCollectionName: null,
        objectID: "",
        selectedPhotoThumbnailUrl: "",
        parentController: "",
        init: function()
        {
        },
        setUser: function()
        {

            var user = HubStar.User.find(localStorage.loginStatus);
            this.set("collections", user.get("collections"));
            if (this.get("collections").objectAt(0) !== null && this.get("collections").objectAt(0) !== undefined) {
                this.setDesc(this.get("collections").objectAt(0).get("desc"));
                this.setTitle(this.get("collections").objectAt(0).get("title"));
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
        setThumbnailUrl: function(photo_image_thumbnail_url) {
            this.set("selectedPhotoThumbnailUrl", photo_image_thumbnail_url);
        },
        submit: function()
        {
            for (var i = 0; i < this.get("collections").get("length"); i++)
            {
                var collection = this.get("collections").objectAt(i);
                if (collection.get("title") === this.get("selectedTitle"))
                {
                    collection.set("desc", this.get("selectedDesc"));
                    var content = collection.get("collection_ids");
                    this.addCollection(collection, content);
                }
            }
            var that = this;
            var user = HubStar.User.find(localStorage.loginStatus);
            user.store.save();
            user.addObserver('isSaving', function() {
                if (!user.get('isSaving')) {
                }
                else {
                }
            });
            this.exit();
        },
        addCollection: function(collection, content)
        {
            if (content === null) {
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
        if(this.get('parentController')==='article')
            {           this.get("controllers.article").switchCollection();}
            else{
            this.get("controllers.mega").switchCollection();
        }},
        addNewCollection: function()
        {

            var title = this.get("newCollectionName");
            if (title !== null) {
                title = this.checkingValidInput(title);
                var isInputValid = this.checkInput(title);
                if (isInputValid) {
                    var tempCollection = HubStar.Collection.createRecord({"id": title, "title": title, "desc": null, "collection_ids": null, "createdAt": new Date(),
                     'cover':'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png'                                
                    });
                    this.get("collections").pushObject(tempCollection);
                    this.set('selectedTitle', tempCollection.get('title'));
                    $('#recordID').text(this.get('selectedTitle'));
                    this.set('selectedDesc', "");
                }
            }
            this.set('newCollectionName', null);
            this.set('selectionPop', !this.get('selectionPop'));
        },
        collectionSwitch: function() {
            this.set('selectionPop', !this.get('selectionPop'));

        },
        chooseRecord: function(record) {
            this.set('selectedTitle', record);
            this.selectSelectedDesc();
            $('#recordID').text(this.get('selectedTitle'));
            HubStar.set('chooseCollection', this.get('selectedTitle'));
            this.set('selectionPop', !this.get('selectionPop'));
        },
        selectSelectedDesc: function()
        {
            var desc = "";
            for (var i = 0; i < this.get("collections").get("length"); i++)
            {
                var collection = this.get("collections").objectAt(i);
                if (collection.get("title") === this.get("selectedTitle"))
                {
                    desc = collection.get("desc");
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


    HubStar.ApplicationController = Ember.ArrayController.extend({
        needs: ['status'],
        content: [],
        loginInfo: "",
        search_area: "",
        search_string: "inspirational",
        firstTimeUser: false,
        test: false,
        user: null,
        from: null,
        size: null,
        iframeURL: "",
        iframeLoginURL: "",
        init: function() {

            this.newSearch();
            var address = document.URL;
            var domain = address.split("/")[2];
            this.set('iframeURL', "http://" + domain + "/user/create/");
            this.set('iframeLoginURL', "http://" + domain+ "/site/login/");
        },
        popupModal: function() {
            this.set('popup', !this.get('popup'));

        },
        email_login: function() {
            this.set('mail', !this.get('mail'));
        },
        loginStatus: function() {
        },
        grapData: function() {
            this.set("user", HubStar.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        },
        reloadPage: function() {
            this.set("test", !this.get("test"));
        },
        scrollDownAction: function() {
            if (HubStar.get("itemNumber") < this.get('size')) {
            } else {
                this.set('loadingTime', true);
            }

            this.set("size", 20);
            this.set("from", this.get("from") + this.get("size"));
            var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    for (var i = 0; i < results.get("length"); i++) {
                        var tempmega = results.objectAt(i);
                        that.pushObject(tempmega);
                    }
                    setTimeout(function() {
                        $('#masonry_container').masonry("reload");
                    }, 2200);
                    that.set('loadingTime', false);
                }
            });
        },
        newSearch: function() {
            this.set("content", []);
            this.set("from", 0);
            this.set("size", 20);
            this.set('loadingTime', true);
            var d = new Date();
            var start = d.getTime();
            var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
            var that = this;
            results.addObserver('isLoaded', function() {
                if (results.get('isLoaded')) {
                    HubStar.set('itemNumber', results.get("length"));
                    for (var i = 0; i < results.get("length"); i++) {
                        var tempmega = results.objectAt(i);
                        that.pushObject(tempmega);
                    }
                    setTimeout(function() {
                        $('#masonry_container').masonry("reload");

                    }, 2200);
                    that.set('loadingTime', false);
                }


            });
            this.set("from", this.get("size"));

            var statusController = this.get('controllers.status');
            var stats = HubStar.Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});

            stats.addObserver('isLoaded', function() {
                if (stats.get('isLoaded')) {
                    var d = new Date();
                    var end = d.getTime();
                    var hit = HubStar.Stat.find('hit');
                    var time = that.getResponseTime(start, end);
                    statusController.set("searchResultNum", hit.get("hits"));
                    statusController.set("time", time);
                    statusController.changeDescription();
                }
                setTimeout(function() {
                    $('#masonry_container').masonry("reload");
                }, 1800);
            });
            HubStar.set('searchStart', true);
        },
        defaultSearch: function() {
            this.set("loginInfo", localStorage.loginStatus);
            var results = HubStar.Mega.find({});
            this.set("content", results);
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
        }





    });


})();

(function() {


HubStar.ArticleController = Ember.Controller.extend({
    content: [],
    image_no: 1,
    selectedPhoto: null,
    needs: ['application', 'addCollection', 'contact'],
    init:function(){},
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
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
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
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
    },
    selectImage: function(e) {
        this.set('megaResouce', HubStar.Mega.find(e));
        this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));

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
        this.set('megaResouce', megaResouce);
        this.addRelatedData(megaObject);
        this.getCommentsById(megaObject.id);

    },
    addComment: function() {
        var commentContent = this.get('commentContent');
        if (commentContent) {
            var comments = this.get('megaResouce').get('comments');
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
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
                    for (var i = 0; i < data.get("content").length; i++) {
                        var temp = data.get("content").objectAt(i);
                        if (temp.data.photo !== undefined) {
                            that.get("content").pushObject(temp.data.photo[0]);
                            that.set('selectedPhoto', temp.data.photo[0]);
                        }
                        else if (temp.record._data.hasMany.photo !== undefined) {
                            that.get("content").pushObject(temp.record._data.hasMany.photo[0].data);
                            that.set('selectedPhoto', temp.record._data.hasMany.photo[0].data);
                        }
                    }
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
        window.history.back();
    },
    switchCollection: function() {

        var addCollectionController = this.get('controllers.addCollection');
        var selectid = this.get('articleResouce').id;
        addCollectionController.setImageID(selectid);
        var tempUrl = this.get('selectedPhoto').photo_image_thumbnail_url;
        addCollectionController.setThumbnailUrl(tempUrl);
        addCollectionController.setRelatedController('article');
        addCollectionController.setUser();
        this.set('collectable', !this.get('collectable'));
    },
    editingContactForm: function() {
        var contactController = this.get('controllers.contact');

        var selectid = this.get('selectedPhoto').id;
        contactController.setSelectedMega(selectid);
        this.set('contact', !this.get('contact'));
    },
    closeContact: function() {
        this.set('contact', false);
    }
, getTest: function() {

        return "test";

    }
});


})();

(function() {


HubStar.CommentController = Ember.Controller.extend({
    commentLength: null,
    thisComments: null,
    stringFiedTime_stamp: null,
    mega: null,
    init: function()
    {
        if (localStorage.loginStatus) {

            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }

    },
    addComment: function() {
        var commentContent = this.get('commentContent');
        if (commentContent) {
            var comments = this.get('mega').get('comments');
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false, optional: this.get('mega').get('type') + '/' + this.get('mega').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
            }, 200);
        }
    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        this.set('mega', mega);
        this.set('thisComments', comments);
    },
    deleteComment: function(object) {
        var message = "Do you wish to delete this comment ?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.getCommentsById(this.get('content').id);
            var comments = this.get("thisComments");
            HubStar.get('data').deleteRecord();
            comments.store.save();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            HubStar.set('data', object);
        }
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
        HubStar.set('data', null);
    },
    addLike: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var people_like = mega.get("people_like");
        if (people_like === null || people_like === undefined) {
            people_like = "";
        }
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
        {
            if (people_like.indexOf(localStorage.loginStatus) !== -1)
            {
            }
            else {
                this.addPeopleLike(mega);
            }
        }
    }, addPeopleLike: function(mega) {
        var people_like = mega.get("people_like");
        if (people_like === null || people_like === undefined || people_like === "")
        {
            people_like = localStorage.loginStatus;
            mega.set("likes_count", 1);
        } else {
            people_like = people_like + "," + localStorage.loginStatus;
            mega.set("likes_count", people_like.split(",").length);
        }
        mega.set("people_like", people_like);
        mega.updateMegaWithUrl(mega, 'addlike');
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
        emaiBCCDestination: null,
        projectCategory: null,
        projectTimeframe: null,
        categorys: [],
        temp: [],
        subcate: [],
        projectBudget: null,
        projectExperience: null,
        needs: ["mega", "profile", 'article'],
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
            this.set("displayName", this.get("currentUser").get("first_name") + " " + this.get("currentUser").get("last_name"));
            this.set("displayEmail", this.get("currentUser").get("email"));
            var tempMega = HubStar.Mega.find(id);
            this.set("selectedMega", tempMega);
            this.set("recieveProfile", this.get("selectedMega").get("id"));
            this.set("emailDestination", this.get("selectedMega").get("owner_contact_email"));
            this.set("emaiCCDestination", this.get("selectedMega").get("owner_contact_cc_emails"));
            var that = this;

            tempMega.addObserver('isLoaded', function() {
                if (tempMega.get('isLoaded')) {

                    that.set("selectedMega", tempMega);
                    that.set("emailDestination", that.get("selectedMega").get("owner_contact_email"));
                    that.set("emaiCCDestination", that.get("selectedMega").get("owner_contact_cc_emails"));
                }
            });
        },
        closeContact: function() {
            var megaController = this.get("controllers.mega");
            var profileController = this.get("controllers.profile");
            var articleController = this.get("controllers.article");

            this.set('projectCategoryDropdown', false);
            this.set('projectTimeframeDropdown', false);
            this.set('projectBudgetDropdown', false);
            this.set('projectExperienceDropdown', false);
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


    HubStar.ItemProfilesController = Ember.Controller.extend({
        profiles: null,
        partnerRemove: "",
        init: function() {
            this.set("profiles", HubStar.Mega.find());
        },
        toProfilePage: function(model) {
            this.transitionToRoute('profile', model);
        },
        setPartnerRemove: function() {
            this.set('partnerRemove', false);
        }
    });


})();

(function() {


HubStar.MasonryCollectionItemsController = Ember.ArrayController.extend({
    content: [],
    uploadImageContent: [],
    title: null,
    collection_id:null,
    is_authentic_user: false,
    is_profile_editing_mode: false,
    uploadOrsubmit: false,
    is_user_editing_mode: false,
    needs: ['photoCreate', 'profile', 'user', 'permission', 'photoCreateInfoSetting'],
    user_id: null,
    init: function() {
    },
    selectModelForUser: function(collection_id) {

        this.set('content', []);
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('user_id', user_id);
        this.set('title', collection_id);
        var results = HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: collection_id});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < this.get("content").length; i++) {
                    var id = this.get("content").objectAt(i).id;
                    if (HubStar.Mega.find(id)._data.hasMany.photo.length === 1)
                    {
                        that.get("content").pushObject(HubStar.Mega.find(id));
                    }
                }
            }
        });
        this.checkEditingMode();

    },
    selectModelForProfile: function(collection_id,title) {

        this.set('collection_id', collection_id);
        this.resetContent();
        this.set('title', title);
        this.checkEditingMode();
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
        $('#ownerUpload').attr('style', 'display:none');
        $('#tagetUplaod').attr('style', 'display:block');
        this.set('uploadOrsubmit', false);
        $('#addNew').toggleClass('col2');
        $('#addNew').toggleClass('col4');
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 200);

        HubStar.set('isNewUpload', true);
        $('#dragAndDroppArea').attr('style', "display:none");

    },
    removeCollectedItem: function(collectionID, itemID)
    {

        var message = "Do you wish to delete this photo ?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        this.dropdownPhotoSetting(itemID);
        if (this.get('willDelete')) {
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            var currentCollection = null;
            var collectedColletionids = null;
            for (var i = 0; i < currentUser.get('collections').get('length'); i++) {
                if (currentUser.get('collections').objectAt(i).get('id') === HubStar.get('collectionID'))
                {
                    currentCollection = currentUser.get('collections').objectAt(i);
                    collectedColletionids = currentCollection.get('collection_ids');
                    var tempcollectedColletionids = collectedColletionids.replace(HubStar.get('itemID') + ",", "");
                    tempcollectedColletionids = collectedColletionids.replace(HubStar.get('itemID'), "");
                    currentCollection.set('collection_ids', tempcollectedColletionids);
                    HubStar.store.save();
                    break;
                }
            }
            for (var i = 0; i < this.get('content').length; i++) {

                if (this.get('content').objectAt(i).get('id') === HubStar.get('itemID')) {

                    var tempItem = this.get('content').objectAt(i);
                    tempItem.deleteRecord();
                    this.get('content').removeObject(tempItem);
                    HubStar.store.save();
                    break;
                }
            }
            setTimeout(function() {
                $('#masonry_photo_collection_container').masonry("reload");
            }, 200);
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            HubStar.set('collectionID', collectionID);
            HubStar.set('itemID', itemID);
        }

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
        return      is_authentic_user;
    },
    changeCollectionCover: function(id, collection_id, HubStarModel) {

        this.dropdownPhotoSetting(id);
        var Mega = HubStar.Mega.find(id);
        var coverImge = Mega.get('photo').objectAt(0).get('photo_image_original_url');
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var userOrprofile = HubStarModel.find(owner_id).get('collections');
        for (var i = 0; i < userOrprofile.get('content').length; i++) {
            if (userOrprofile.objectAt(i).id === collection_id) {
                var currentCollection = userOrprofile.objectAt(i);
                currentCollection.set('cover', coverImge);
                HubStar.store.save();
                break;
            }
        }


    },
    dropdownPhotoSetting: function(id) {

        $('#dropdown_id_' + id).toggleClass('hideClass');
    },
    resetContent: function()
    {

        this.set('content', []);
        this.set('uploadImageContent', []);
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var title = this.get('collection_id');
        var results = HubStar.Mega.find({RquireType: "collection", "collection_id": title, "owner_profile_id": owner_id});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {

                for (var i = 0; i < this.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    if (tempmega.get('photo').get('length') === 1)
                    {
                        that.get("content").pushObject(tempmega);
                    }
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
    }, photoUpload: function() {

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
    megaResouce: null,
    temp: null,
    image_no: 1,
    selectedPhoto: null,
    isSelected: false,
    needs: ['application', 'addCollection', 'contact', 'permission'],
    currentUser: null,
    photo_album_id: null,
    photo_thumb_id: null,
    is_authentic_user: false,
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
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
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
        this.set('image_no', selectedIndex + 1);
        this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
        this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
        this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
        this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
        this.selectedImage(this.get('selectedPhoto').id);
    },
    getInitData: function(megaObject) {
        var photoObj = megaObject.get('photo').objectAt(0);
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        this.set("content", []);
        this.set('image_no', 1);
        this.set("selectedPhoto", photoObj);
        this.get("content").pushObject(photoObj);
        var megaResouce = HubStar.Mega.find(megaObject.id);
        this.set('megaResouce', megaResouce);
        this.set("photo_album_id", "album_" + megaObject.id);
        this.set("photo_thumb_id", "thumb_" + megaObject.id);
        this.addRelatedData(megaObject);
        this.checkAuthenticUser();
        this.getCommentsById(megaObject.id);
    },
    selectImage: function(e) {

        this.set('megaResouce', HubStar.Mega.find(e));
        this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));
        this.set("selectedPhoto", this.get('selectedPhoto'));
        this.selectedImage(e);
    },
    selectedImage: function(id) {
        var selectedImage_id = "#" + id;
        $('.photo_original_style').removeClass('selected_image_style');
        $(selectedImage_id).addClass('selected_image_style');
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
                            that.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
                        }
                    }
                }
            });
        }
    },
    isParamExist: function(param)
    {
        var result = (param !== null && param !== undefined);
        return result;
    },
    switchCollection: function() {
        var addCollectionController = this.get('controllers.addCollection');
        var selectid = this.get('selectedPhoto').id;
        addCollectionController.setImageID(selectid);
        var tempUrl = this.get('selectedPhoto').get('photo_image_thumbnail_url');
        addCollectionController.setThumbnailUrl(tempUrl);
        addCollectionController.setUser();
        this.set('collectable', !this.get('collectable'));
    },
    closeWindow: function() {
        this.set('collectable', false);
        this.set('contact', false);
        window.history.back();
    },
    editingContactForm: function() {
        var contactController = this.get('controllers.contact');
        var selectid = this.get('selectedPhoto').id;
        contactController.setSelectedMega(selectid);
        contactController.selectionCheckBox();
        this.set('contact', !this.get('contact'));
    },
    closeContact: function() {
        this.set('contact', false);
    },
    addComment: function() {
        var commentContent = this.get('commentContent');
        if (commentContent) {


            var comments = this.get('megaResouce').get('comments');
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                "is_delete": false, optional: this.get('megaResouce').get('type') + '/' + this.get('megaResouce').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();


            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
        }
    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        this.set('thisComments', comments);
    },
    editingPhotoMegaData: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));

    },
    yes: function(photoObject) {
        var photo_title = this.get('selectedPhoto.photo_title');
        var photo_caption = this.get('selectedPhoto.photo_caption');
        photoObject.set('photo_title', photo_title);
        photoObject.set('photo_caption', photo_caption);
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
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("model").get("editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("model").get("editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user);
            }
        });


    }
});


})();

(function() {


HubStar.PermissionController = Ember.Controller.extend({
    test: function() {

    },
    checkAuthenticUser: function(owner_email, editors_emails, current_user_email) {

        var authenticUsers = owner_email + "," + editors_emails;
//            var currentUser = HubStar.User.find(localStorage.loginStatus);
//            var that = this;
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
    collection_id: "",
    needs: ['profile', 'masonryCollectionItems', 'photoCreateInfoSetting'],
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
                var reader = new FileReader();
                reader.onload = function(e) {
                    that.addPhotoObject(e, name, type);
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
    createNewMega: function(ProfileMega, testID)
    {

        var photoMega = HubStar.Mega.createRecord({
            "id": testID,
            "accessed": ProfileMega.get("accessed"),
            "boost": ProfileMega.get("boost"),
            "owner_type": "profiles",
            "is_active": false,
            "region": ProfileMega.get("profile_regoin"),
            "topic": null,
            "type": "photo",
            "category": ProfileMega.get("category"),
            "creator": localStorage.loginStatus,
            "country": ProfileMega.get("country"),
            "collection_id": this.get('controllers.masonryCollectionItems').get('collection_id'),
            "deleted": null,
            "domains": getDomain(),
            "editors": "",
            "geography": ProfileMega.get("country"),
            "is_indexed": false,
            "object_image_url": ProfileMega.get("object_image_url"),
            "object_title": null,
            "object_description": null,
            "owner_profile_id": this.get("profileMega").id,
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
        return photoMega;
    }, addPhotoObject: function(e, name, type) {
        var testID = createGuid();
        var target = this.getTarget(e);
        var src = target.result;
        var mega = this.createNewMega(this.get("profileMega"), testID);
        var keywords = this.get("profileMega").get("profile_keywords");
        var file = HubStar.Photo.createRecord({
            "id": testID,
            "photo_title": name.toLowerCase(),
            "photo_source_id": name.toLowerCase().replace('.', "_"),
            "photo_image_original_url": src,
            "photo_file_name": name.toLowerCase(),
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

                }
            }
        });
        var masonryCollectionItemsController = this.get('controllers.masonryCollectionItems');
        masonryCollectionItemsController.get("uploadImageContent").addObject(file);

    },
    getTarget: function(obj) {
        var targ;
        var e = obj;
        if (e.srcElement) {

            targ = e.srcElement;
        }
        else {

            targ = e.target;
        }
//                    if (targ.nodeType === 3) // defeat Safari bug
//                        console.log('safari drop');
//                        targ = e.targe;
        return targ;
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
//            console.log(this.get('isEditingMode'));
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
            }, 2000);

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
    myUserProfile: null,
    needs: ["application"],
    init: function()
    {
        this.setTopicModel(HubStar.Cate.find({}));


    },
    topicSearch: function(search_topic) {
        this.transitionToRoute('searchIndex');
        this.get("controllers.application").set('search_string', search_topic);


        this.get("controllers.application").newSearch();

    },
    setTopicModel: function(model) {
        //       console.log(model);
        this.set("user", HubStar.User.find(localStorage.loginStatus));
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set('categorys', null);
        this.set('categorys', model);



    }
});


})();

(function() {


var profile_record;
var about_record;
var contact_record;
var category_record;
var address_record;
var phone_record;
var website_record;
var workingtime;
var isExsinting = true;
var seletedID = "";
HubStar.ProfileController = Ember.ObjectController.extend({
    model: null,
    aboutMe: "aboutMe",
    address: "",
    boost: '',
    currentUserID: "",
    collections: [],
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
    followerTag: false,
    follow_status: "+ Follow",
    first_name: "",
    galleryInsert: false,
    hours: [],
    is_authentic_user: false,
    keywords: "",
    last_name: "",
    needs: ["profilePartners", "itemProfiles", "profileFollowers", 'permission', 'contact', 'photoCreate'],
    name: "",
    profileName: "profileName",
    profile_bg_url: "",
    profile_creator: '',
    profile_hero_url: "",
    profile_pic_url: "",
    profile_contact_number: "",
    profile_name: "",
    partnerTag: false,
    partnerPage: true,
    profileSelectionStatus: "Collections",
    region: "",
    selectedCollection: "",
    switchPhoto: false,
    selectedDesc: "",
    selectedTitle: "",
    timeSetting: "timeSetting",
    temp: [],
    //  tempdesc: [],
    website: "",
    website_url: "",
    UploadImageMode: "",
    uploadChecking: false,
    updateOrCreate: true,
    isPhotoUploadMode: false,
    isPhotoEditingMode: false,
    isAdmin: false,
    newStyleImageSource: '',
    newStyleImageName: '',
    isPackgetDropdown: false,
    projectCategoryDropdownType: 'package',
    projectCategoryDropdownContent: '',
    isActiveDropdown: false,
    projectActiveDropdownType: 'active',
    projectActiveDropdownContent: '',
    isDeleteDropdown: false,
    projectDeleteDropdownType: 'delete',
    projectDeleteDropdownContent: '',
    init: function() {
        this.set('is_authentic_user', false);
    },
    getCurrentProfile: function(id) {
        this.set('currentUserID', id);
        var profile = HubStar.Profile.find(id);


        return profile;
    },
    setProfile: function(id) {
        var profile = this.getCurrentProfile(id);
        this.set("model", profile);
        this.set("domains", profile.get('profile_domains'));
        this.set("boost", profile.get('profile_boost'));
        this.set('profile_bg_url', profile.get('profile_bg_url'));
        this.set('profile_hero_url', profile.get('profile_hero_url'));
        this.set('profile_pic_url', profile.get('profile_pic_url'));
        this.set('editors', profile.get('profile_editors'));
        this.set('keywords', profile.get('profile_keywords'));
        this.set('region', profile.get('profile_regoin'));
        this.set('country', profile.get('profile_country'));
        this.set('name', profile.get('profile_name'));
        this.set('profile_creator', profile.get('profile_creater'));
        this.set('direct_enquiry_provide_email', profile.get('owner_contact_bcc_emails'));
        this.set('secondary_email', profile.get('owner_contact_cc_emails'));
        this.set('contact_email', profile.get('owner_contact_email'));
        this.set('website', profile.get('profile_website'));
        this.set('website_url', profile.get('profile_website_url'));
        this.set('profile_contact_number', profile.get('profile_contact_number'));
        this.set('projectCategoryDropdownContent', profile.get('profile_package_name'));
        this.set('first_name', profile.get('profile_contact_first_name'));
        this.set('address', profile.get('profile_physical_address'));
        this.set('last_name', profile.get('profile_contact_last_name'));
        this.set("profile_name", profile.get("profile_name"));
        this.set("projectActiveDropdownContent", profile.get("profile_isActive"));
        this.set("projectDeleteDropdownContent", profile.get("profile_isDeleted"));
        this.updateWorkingHourData(profile.get('profile_hours'));
        this.set("collections", profile.get("collections"));
        var collections = profile.get("collections");
        this.isFollowed();
        this.checkAuthenticUser();
        var photoCreateController = this.get('controllers.photoCreate');
        photoCreateController.setMega();
    },
    submit: function() {
        var desc = this.checkingValidInput(this.selectedCollection.get('desc'));
        var id = this.checkingValidInput(this.selectedCollection.get('title'));
        this.checkingIdisExsinting(desc, id, "create");
        var profile_id = this.get('model').get('id');

        if (isExsinting) {
            var validID = this.checkingValidInput(id);
            var checkingCharater = this.specialCharactersChecking(validID);
            if (checkingCharater) {
                this.selectedCollection.set('id', validID.toLowerCase());
                this.selectedCollection.set('title', this.selectedCollection.get('title'));
                this.selectedCollection.set('optional', profile_id);

                this.selectedCollection.set('cover', "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png");
                if (this.selectedCollection.get('desc') !== null && this.selectedCollection.get('desc') !== "") {
                    this.selectedCollection.set('desc', desc);
                } else {
                    this.selectedCollection.set('desc', "Add a short description to your Collection");
                }

                this.get("collections").insertAt(0, this.selectedCollection);
                HubStar.store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");
            } else {
                alert('invalide characters...');

            }


        } else {
            isExsinting = true;
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
    checkingIdisExsinting: function(desc, id, postOrPut) {
//        if (postOrPut === "update") {
//            for (var i = 0; i < this.get("temp").get('length'); i++) {
//                if (this.get("temp").objectAt(i) === id) {
//                    isExsinting = false;
//                }
//            }
//            if (!isExsinting) {
//                for (var i = 0; i < this.get("tempdesc").get('length'); i++) {
//                    if (this.get("tempdesc").objectAt(i) === desc) {
//                        isExsinting = false;
//                        break;
//                    } else {
//                        isExsinting = true;
//                    }
//                }
//            }
//            if (!isExsinting) {
//                alert('This Collection is already exsiting!!!');
//            }
//        } else 
        if (postOrPut === "create") {
            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {
                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                alert('This Collection is already exsiting!!!');
            }
        }
    },
    setLocalLoginRecrod: function() {
        HubStar.set('afterSearch', true);
        localStorage.user_id = this.get('model.id');
    },
    toggleEditing: function(data, checkingInfo) {
        if (checkingInfo === "profileName") {
            profile_record = data;
            this.set('editing', !this.get('editing'));
        } else if (checkingInfo === "aboutMe") {
            about_record = data;
            this.set('editingAbout', !this.get('editingAbout'));
        } else if (checkingInfo === "contact") {
            contact_record = this.get('model.contact_user');
            category_record = this.get('model.profile_category');
            address_record = this.get('model.profile_physical_address');
            phone_record = this.get('model.phone_number');
            website_record = this.get('model.website_url');
            this.set('editingContact', !this.get('editingContact'));
        }
        else if (checkingInfo === "timeSetting") {
            this.set('editingTime', !this.get('editingTime'));
        }
    },
    yes: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "aboutMe") {
            this.set('editingAbout', !this.get('editingAbout'));
        } else if (checkingInfo === "contact") {
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
        this.updateClient();
    },
    updateClient: function() {
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_profile_record);
        if (update_profile_record.get('stateManager') !== null && update_profile_record.get('stateManager') !== undefined) {
            update_profile_record.get('stateManager').transitionTo('loaded.saved');
        }
        HubStar.store.save();
    },
    no: function(checkingInfo) {
        if (checkingInfo === "profileName") {
            this.set('model.profile_name', profile_record);
            this.set('editing', !this.get('editing'));
        }
        else if (checkingInfo === "aboutMe") {
            this.set('model.about', about_record);
            this.set('editingAbout', !this.get('editingAbout'));
        }
        else if (checkingInfo === "contact") {
            this.set('model.contact_user', contact_record);
            this.set('model.profile_category', category_record);
            this.set('model.profile_physical_address', address_record);
            this.set('model.phone_number', phone_record);
            this.set('model.website_url', website_record);
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
            //          this.get('temp').pushObject(thisCollection.get("id"));
            //      this.get('tempdesc').pushObject(thisCollection.get("desc"));
            if (id === thisCollection.get("id")) {
                this.set("selectedCollection", thisCollection);
            }
        }


    },
    updateCollectionInfo: function() {
        var desc = this.checkingValidInput(this.selectedCollection.get('desc'));
        var id = this.checkingValidInput(this.selectedCollection.get('id'));


        var title = this.get("selectedCollection").get("title");
        this.get("selectedCollection").set("title", title);
        this.set("selectedTitle", title);
        this.get("selectedCollection").store.save();
        $(".Targeting_Object_front").attr("style", "display:inline-block");
        $(" #uploadArea").attr('style', "display:none");
        $(" #uploadObject").attr('style', "display:block");

    },
    newCollection: function()
    {
        var collection = HubStar.Collection.createRecord({"id": null, "title": null, "desc": null, "collection_ids": null, "createdAt": new Date()});
        this.set("selectedCollection", collection);
    },
    toggleUpload: function() {
        $('.corpbanner_mask').toggleClass('hideClass');
        this.set('uploadChecking', !this.get('uploadChecking'));
    },
    editingContactForm: function() {
        var contactController = this.get('controllers.contact');
        contactController.setSelectedMega(this.get('currentUserID'));
        this.set('contactChecking', !this.get('contactChecking'));
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
        this.updateClient();
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
        if (this.checkFollowStatus() === false) {
            var currentUser = HubStar.User.find(localStorage.loginStatus);
            var commenter_profile_pic_url = currentUser.get('photo_url_large');
            var commenter_id = currentUser.get('id');
            var name = currentUser.get('display_name');
            var date = new Date();
            var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                "follower_id": commenter_id, "name": name, "time_stamp": date.toString(), "is_delete": false});
            tempComment.store.save();
            this.get("model").get("followers").insertAt(0, tempComment);
            this.set('follow_status', "Following");
        }
        else {
            //dont delete this line
            //         this.unfollow();
        }
    },
    checkFollowStatus: function()
    {
        var isFollow = false;
        var followers = this.get("model").get("followers");
        for (var i = 0; i < followers.get('length'); i++) {
            var follower_id = followers.get("content").objectAt(i).data.follower_id;
            if (follower_id === localStorage.loginStatus)
            {
                isFollow = true;
                break;
            }
        }
        return isFollow;
    },
    unfollow: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var commenter_profile_pic_url = currentUser.get('photo_url_large');
        var commenter_id = currentUser.get('id');
        var name = currentUser.get('display_name');
        var date = new Date();
        var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
            "follower_id": commenter_id, "name": name, "time_stamp": date.toString(), "is_delete": false});
        //dont delete this line
        //      tempComment.store.commit();
    },
    selectCollection: function() {
        this.set('profileSelectionStatus', 'Collections');
        this.set('partnerTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
    },
    selectPartner: function(model) {

        this.set('profileSelectionStatus', 'Partners');
        this.get('controllers.profilePartners').getClientId(model);
        this.set('partnerTag', true);
        this.set('collectionTag', false);
        this.set('followerTag', false);
        this.get('controllers.itemProfiles').setPartnerRemove();
    },
    selectFollower: function(model) {
        this.set('profileSelectionStatus', 'Followers');
        this.get('controllers.profileFollowers').getClientId(model);
        this.set('partnerTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', true);
    },
    saveUpdate: function() {
        var update_profile_record = HubStar.Profile.find(this.get('model.id'));
        update_profile_record.set('profile_editors', this.get('editors'));
        update_profile_record.set('profile_keywords', this.get('keywords'));
        update_profile_record.set('profile_regoin', this.get('region'));
        update_profile_record.set('profile_country', this.get('country'));
        update_profile_record.set('profile_boost', this.get('boost'));
        update_profile_record.set('profile_domains', this.get('domains'));
        update_profile_record.set('profile_hero_url', '');
        update_profile_record.set('profile_pic_url', '');
        update_profile_record.set('profile_bg_url', '');
        update_profile_record.set('profile_name', this.get('name'));
        update_profile_record.set('profile_package_name', this.get('projectCategoryDropdownContent'));
        update_profile_record.set('owner_contact_bcc_emails', this.get('direct_enquiry_provide_email'));
        update_profile_record.set('owner_contact_cc_emails', this.get('secondary_email'));
        update_profile_record.set('owner_contact_email', this.get('contact_email'));
        update_profile_record.set('profile_website', this.get('website'));
        update_profile_record.set('profile_website_url', this.get('website_url'));
        update_profile_record.set('profile_contact_number', this.get('profile_contact_number'));
        update_profile_record.set('profile_contact_first_name', this.get('first_name'));
        update_profile_record.set('profile_physical_address', this.get('address'));
        update_profile_record.set('profile_contact_last_name', this.get('last_name'));
        update_profile_record.set("profile_name", this.get('profile_name'));
        update_profile_record.set("profile_isActive", this.get("projectActiveDropdownContent"));
        update_profile_record.set("profile_isDeleted", this.get("projectDeleteDropdownContent"));
        HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, update_profile_record);
        if (update_profile_record.get('stateManager') !== null && update_profile_record.get('stateManager') !== undefined) {
            update_profile_record.get('stateManager').transitionTo('loaded.saved');
        }

        HubStar.store.save();
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
        this.set('UploadImageMode', mode);
        var data = {"RequireIamgeType": mode};
        requiredBackEnd('tenantConfiguration', 'getRequireIamgeSize', data, 'POST', function(params) {
            //       console.log(params.height);
            //            console.log(params.width);
        });
    }, profileStyleImageDrop: function(e, name)
    {
        var target = this.getTarget(e);
        var src = target.result;
        var that = this;
        getImageWidth(src, function(width, height) {
            that.set('newStyleImageSource', src);
            that.set('newStyleImageName', name);
            $('#photoUploadbtn').removeClass();
            $("#photoUploadbtn").toggleClass("new-btn green-btn");
        });
    }, photoUpload: function() {
        if (this.get('newStyleImageSource') !== null && this.get('newStyleImageSource') !== "")
        {
            this.setTempImage();
            $('#uploadStyleImg').attr("style", "display:block");
            var data = {"newStyleImageSource": this.get('newStyleImageSource'),
                'newStyleImageName': this.get('newStyleImageName'),
                'mode': this.get('UploadImageMode').replace(" ", "_").toLowerCase(),
                'id': this.get('model.id')};
            var that = this;
            requiredBackEnd('profiles', 'updateStyleImage', data, 'POST', function(params) {
                $('#uploadStyleImg').attr("style", "display:none");
                that.set('isPhotoUploadMode', false);
                that.set('isPhotoEditingMode', true);
                HubStar.store.save();
            });
        }
    },
    setTempImage: function() {
        var model = this.get('model');
        if (this.get('UploadImageMode') === "Profile Picture")
        {
            this.set('profile_pic_url', this.get('newStyleImageSource'));
            model.set('profile_pic_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Profile Hero")
        {
            this.set('profile_hero_url', this.get('newStyleImageSource'));
            model.set('profile_hero_url', this.get('newStyleImageSource'));
        } else if (this.get('UploadImageMode') === "Background")
        {
            this.set('profile_bg_url', this.get('newStyleImageSource'));
            model.set('profile_bg_url', this.get('newStyleImageSource'));
        }
    },
    getTarget: function(obj) {
        var targ;
        var e = obj;
        if (e.target)
            targ = e.target;
        else if (e.srcElement)
            targ = e.srcElement;
        if (targ.nodeType === 3) // defeat Safari bug
            targ = targ.parentNode;
        return targ;
    },
    resetNewStyleImageSource: function()
    {
        this.set('newStyleImageSource', "");
        this.set('newStyleImageName', "");
        $('#photoUploadbtn').removeClass();
        $("#photoUploadbtn").toggleClass("disabled-btn");
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

    }


});


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
    dropdownCategory: "category",
    packgeSelection: "package",
    profile_url: "",
    first_name: "",
    last_name: "",
    address: "",
    projectCategoryDropdown: false,
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
            var newMega = HubStar.store.createRecord(HubStar.Mega, {//15
                "id": this.spaceChecking(this.get("profile_url").toLowerCase()),
                "type": "profile",
                accessed: null,
                boost: this.get("boost"),
                is_active: "true",
                is_indexed: "true",
                category: $('#dropdownCategory').text(),
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
            newMega.store.save();
            var newProfile = HubStar.store.createRecord(HubStar.Profile, {
                id: this.spaceChecking(this.get("profile_url").toLowerCase()),
                profile_name: this.get("profile_name"),
                profile_contact_last_name: this.get("last_name"),
                profile_contact_first_name: this.get("first_name"),
                profile_about_us: null,
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
                profile_category: $('#dropdownCategory').text(),
                profile_physical_address: this.get("address"),
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

            newMega.get("profile").addObject(newProfile);

            var that = this;

            setTimeout(function() {
                newProfile.store.save();
            }, 500);


            newMega.addObserver('isDirty', function() {
                if (!newMega.get('isDirty')) {

                    that.transitionToRoute('profile', newProfile);
                } else {
                }
            });
        }

    },
    dropdown: function(checking) {

        if (checking === "category") {
            this.set('packgetDropdown', false);
            this.set('projectCategoryDropdown', !this.get('projectCategoryDropdown'));
        } else if (checking === "package") {
            this.set('projectCategoryDropdown', false);
            this.set('packgetDropdown', !this.get('packgetDropdown'));
        } else {


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
        addPartner: true,
        currentAddPartnerPic: null,
        selectedPartnerPic: "",
        is_authentic_user: false,
        needs:['permission'],
//        init: function() {
//         
//        },
        addingPartnerObserver: function() {

            var addProfilePic = this.get('currentAddPartnerPic').split("/profiles/")[1];
            this.set('selectedPartnerPic', HubStar.Profile.find(addProfilePic).get('profile_pic_url'));
        }.observes('currentAddPartnerPic'),
        getClientId: function(model) {
            this.set('content', []);
            this.set("model", model);
            this.set('clientID', model.id);
            this.set('partnerID', model.get('profile_partner_ids'));
            var data = HubStar.Mega.find({RequireType: "partner", profile_partner_ids: this.get('partnerID')});
            var that = this;
            data.addObserver('isLoaded', function() {
                that.checkAuthenticUser();
                if (data.get('isLoaded')) {
                    for (var i = 0; i < data.get("length"); i++) {
                        var tempmega = data.objectAt(i);
                        that.get("content").pushObject(tempmega);
                    }
                }
            });
            this.checkAuthenticUser();
        },
        deletePartner: function(model) {
            var message = "Do you wish to remove this partner ?";
            this.set("message", message);
            this.set('makeSureDelete', true);

            if (this.get('willDelete')) {
                this.set('partnerID', (this.get('partnerID') + ",").replace(HubStar.get('data').id + ",", ""));
                this.set('partnerID', this.get('partnerID').substring(0, this.get('partnerID').length - 1));
                var profileOwner = HubStar.Profile.find(this.get('clientID'));
                profileOwner.set('profile_partner_ids', this.get('partnerID'));
                this.removePartnerObject(HubStar.get('data').id);
                HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, profileOwner);
                this.cancelDelete();
            } else {
                this.set('willDelete', true);
                HubStar.set('data', model);
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
            HubStar.set('data', null);
        },
        submit: function() {
            var client_input = $('.new-collection-name_insert').val();
            if (client_input.indexOf("/profiles/") !== -1) {
                var client_id = client_input.split("/profiles/")[1];
                var temp = this.get('partnerID');
                if (temp === null || temp === "") {
                    this.set('partnerID', client_id);
                    this.pushUptoBackend(client_id);
                } else {
                    if (temp.indexOf(client_id) !== -1) {
                        alert('this partner already in your list');
                    } else {
                        this.set('partnerID', client_id + "," + temp);
                        this.pushUptoBackend(client_id);
                    }
                }

            } else {
                alert('please input valid url!!!');
            }
        },
        pushUptoBackend: function(client_id)
        {
            var profileOwner = HubStar.Profile.find(this.get('clientID'));
            profileOwner.set('profile_partner_ids', this.get('partnerID'));
            var newPartner = HubStar.Mega.find(client_id);
            this.get("content").pushObject(newPartner);
            HubStar.store.get('adapter').updateRecord(HubStar.store, HubStar.Profile, profileOwner);
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
        }
    }
    );


})();

(function() {

HubStar.ProfilesController = Ember.ArrayController.extend({
                model: []

            });


})();

(function() {

HubStar. SearchController = Ember.ObjectController.extend({

    });


})();

(function() {

HubStar.SearchsController = Ember.ArrayController.extend({
        needs: ['application', 'status'],
        loginInfo: "",
        content: [],
        search_string: "",
        search_area: "",
        searchResultNum: "",
        time: "",
        newSearch: function() {
            HubStar.set("uploadMode", null);
            var d = new Date();
            var start = d.getTime();
            var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string")});
            this.set("content", results);
            var stats = Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});
            var that = this;

        },
        defaultSearch: function() {
            this.set("loginInfo", localStorage.loginStatus);
            this.setLoginImge();
            var results = HubStar.Mega.find({});
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

        }

    });



})();

(function() {

HubStar.TestController = Ember.Controller.extend({
        test: function()
        {console.log("test");
        }
    }
    );


})();

(function() {

HubStar.TopicSelectionController = Ember.ArrayController.extend({
        selected_topics: "",
        content: [
            {id: "1", image: '../images/welcomepage/bedroom.jpg', topic: 'Bedroom'},
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
            {id: "14", image: '../images/welcomepage/retail-design.jpg', topic: 'Retail design'}

        ],
        selectTopic: function(id, topic) {
            if (HubStar.get(id)) {
                $('#' + id).attr("style", "opacity:0;height: 350px; width: 300px;");
                if (this.get('selected_topics').indexOf(topic) !== -1) {

                    this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));

                }
      
                HubStar.set(id, false);
            } else {
                $('#' + id).attr("style", "opacity:1;height: 350px; width: 300px;");

                this.set('selected_topics', this.get('selected_topics') + topic + ",");

                HubStar.set(id, true);
            }

        },
        submitSelection: function() {

            var data = this.get('selected_topics');
            var user = HubStar.User.find(localStorage.loginStatus);

            user.set('selected_topics', data.substring(0, data.length - 1));
            user.store.commit();
        }
    }
    );







})();

(function() {


var isExsinting = true;
HubStar.UserController = Ember.Controller.extend({
    user: null,   
    uploadMode: null,
    newCollectionName: null,
    collections: [],
    temp: [],
    selectedDesc: "",
    selectedTitle: "",
    coverImg: "",
    display_name: "",
    userTage: true,
    currentUserID: "",
    needs: ['photoCreate'],
    makeSureDelete: false,
    updateOrCreate: true,
    collectionTag: true,
    selectedCollection: "",
    profileSelectionStatus: "Collections",
    selected_topics: [],
    is_authentic_user: false,
    init: function()
    {
        this.setUser();
    },
    setUser: function()
    {
        var user = this.getCurrentUser();
        topics = user.get('selected_topics');
        this.set('selected_topics', []);
        if (topics !== null && topics !== "" && topics !== undefined) {
            var topics = topics.split(",");
            for (var i = 0; i < topics.length; i++) {
                this.get('selected_topics').pushObject({topics: topics[i]});
            }
        }
        this.set("collections", user.get("collections"));
        this.set("coverImg", user.get("photo_url"));
        this.set("display_name", user.get("display_name"));
        if (this.get("collections").objectAt(0) !== null && typeof this.get("collections").objectAt(0) !== 'undefined') {
            this.setDesc(this.get("collections").objectAt(0).get("desc"));
            this.setTitle(this.get("collections").objectAt(0).get("title"));
        }
        this.set("user", user);
        var collections = user.get("collections");
        for (var i = 0; i < collections.get("length"); i++)
        {
            var col = collections.objectAt(i);
            if ((col.get("collection_ids") !== null && col.get("collection_ids") !== "")) {
                var imgId = col.get("collection_ids").split(",").objectAt(0);
                this.getHeroImage(imgId, col);
            }
        }
        this.checkAuthenticUser();
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
    getCurrentUser: function()
    {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.set('currentUserID', user_id);
        var user = HubStar.User.find(user_id);
        return user;
    },
    checkingIdisExsinting: function(id, postOrPut) {

        if (postOrPut === "update") {
            for (var i = 0; i < this.get("temp").get('length'); i++) {

                if (this.get("temp").objectAt(i) === id) {

                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                alert('This Collection is already exsiting!!!');
            }
        } else if (postOrPut === "create") {

            for (var i = 0; i < this.get("collections").get('length'); i++) {
                if (this.get("collections").objectAt(i).id === id) {

                    isExsinting = false;
                }
            }
            if (!isExsinting) {
                alert('This Collection is already exsiting!!!');
            }
        }
    },
    submit: function()
    {
        if (this.selectedCollection.get('id') !== null && this.selectedCollection.get('id') !== "" && this.selectedCollection.get('id') !== undefined) {
            var id = this.checkingValidInput(this.selectedCollection.get('id'));
            this.checkingIdisExsinting(id, "create");
            if (isExsinting) {
                this.selectedCollection.set('id', id);
                this.selectedCollection.set('title', id);
                this.get("collections").insertAt(0, this.selectedCollection);
                this.get("collections").store.commit();
                $(".Targeting_Object_front").attr("style", "display:inline-block");
                $(" #uploadArea").attr('style', "display:none");
                $(" #uploadObject").attr('style', "display:block");

            } else {
                isExsinting = true;
            }
        }
    },
    checkingValidInput: function(title) {

        if (title.indexOf(" ") !== -1) {

            title = title.split(' ').join('-');

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

        var message = "Do you wish to delete " + this.get("selectedCollection").get('id') + " ?";
        this.set("message", message);
        this.set('makeSureDelete', true);

        if (this.get('willDelete')) {
            this.get("collections").removeObject(this.get("selectedCollection"));
            var user = this.getCurrentUser();
            user.store.save();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);

        }
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

    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    updateCollectionInfo: function()
    {

        var id = this.checkingValidInput(this.selectedCollection.get('id'));
        this.checkingIdisExsinting(id, "update");
        if (isExsinting) {
            var title = this.get("selectedCollection").get("id");
            this.get("selectedCollection").set("title", title);
            this.set("selectedTitle", title);
            this.get("selectedCollection").store.save();
            $(".Targeting_Object_front").attr("style", "display:inline-block");
            $(" #uploadArea").attr('style', "display:none");
            $(" #uploadObject").attr('style', "display:block");
        } else {
            isExsinting = true;
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
            'cover': 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png'
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
        this.set('partnerTag', false);
        this.set('collectionTag', true);
        this.set('followerTag', false);
    },
    selectFollowing: function(model) {

        this.set('profileSelectionStatus', 'Following');
        this.set('partnerTag', true);
        this.set('collectionTag', false);
        this.set('followerTag', false);
        this.get('controllers.itemProfiles').setPartnerRemove();

    },
    selectFollower: function(model) {
        this.set('profileSelectionStatus', 'Followers');
        this.set('partnerTag', false);
        this.set('collectionTag', false);
        this.set('followerTag', true);
    }
}
);


})();

(function() {

HubStar.UsersController = Ember.Controller.extend({

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
    templateName: 'afterLogin'
   


    });



})();

(function() {

HubStar.UserFeedbackView = Ember.View.extend({
    templateName: 'userFeedback',
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

HubStar.ArticleView = Ember.View.extend({
        classNames: ["lightbox"],
       templateName: 'article',
        fullName: (function() {
            return "test";
        }).property(),
        didInsertElement: function() {


        },
        checkReading: function() {
            $('.objectview-right').animate({
                width: '45%'
            }, 500, function() {
                // Animation complete.
            });


            $('.objectview-left').animate({
                width: '55%'
            }, 500, function() {
                // Animation complete.
            });
            $('.lightbox').attr("style", "min-width:700px");
            this.set('readContent', !this.get("readContent"));

        },
        checkClosed: function() {

            $('.objectview-right').animate({
                width: '320px'
            }, 500, function() {
                // Animation complete.
            });


            $('.objectview-left').animate({
                width: 'auto'
            }, 500, function() {
                // Animation complete.
            });

//          $('.lightbox').attr("style" , "min-width:none");
            $('.objectview-left').attr("style", "bottom: 0; top: 0; left: 0; margin: 0; position: absolute; right: 320px; overflow: hidden; transition:all 0.5 ease; ");
//             $('.objectview-right').attr("style" , "bottom: 0; position: absolute; right: 0; top: 0; width: 320px; background-color: white; overflow-y: scroll; ");
            this.set('readContent', !this.get("readContent"));

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

            $("#collection_tab").slideToggle("slow");
        },
        openComment: function() {

            $('#addcommetBut').attr('style', 'display:none');
            $('#commentBox').attr('style', 'display:block');

            $('.comment-insert-field').focus();
        },
        closeComment: function() {

            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');


        }
    });


})();

(function() {

HubStar.BeforeLoginView = Ember.View.extend({
    templateName: 'beforeLogin',
    didInsertElement: function() {


        if (HubStar.get('isLogin')) {

            $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
            $('#login_detail').attr("style", "display:block;");



        } else {

            $('#login_icon').attr("style", "display:block;position:absolute;right:90px;");
            $('#login_detail').attr("style", "display:block;");

        }
    }
})

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
        $(collection_name_insert).val(title);
        $(collection_area).val(desc);
        $('#masonry_user_container').masonry({
            itemSelector: '.box',
            columnWidth: 0,
            isFitWidth: true
        });








    }
});


})();

(function() {

HubStar.ComingSoonView = Ember.View.extend({
    templateName: 'comingSoon',
    didInsertElement: function() {


    }

});



})();

(function() {

HubStar.CommentView = Ember.View.extend({
    templateName: 'comment',
    didInsertElement: function() {
        $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
    },
    openComment: function(id) {

        this.get('controller').getCommentsById(id);
        $('#comment_' + id).attr('style', 'display:none');
        $('#commentBox_' + id).attr('style', 'display:block');

        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('.comment-insert-field').focus();
        }, 200);
    },
    closeComment: function(id) {

        $('#comment_' + id).attr('style', 'display:block');
        $('#commentBox_' + id).attr('style', 'display:none');

        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 200);
    },
    seeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:block');
        $('#showMoreComment_' + id).attr('style', 'display:none');
        $('#commentData_' + id).attr('style', 'max-height:350px;overflow:auto');
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 200);

    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none');
        $('#showMoreComment_' + id).attr('style', 'display:block');
        $('#commentData_' + id).attr('style', 'max-height:120px');
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
        }, 200);
    }
});


})();

(function() {

HubStar.ContactView = Ember.View.extend({
    templateName: 'contact',
    classNames: ["contact-container"],
    didInsertElement: function() {

        $.fx.speeds.speedDemon = 800;
        this.$().animate({
            bottom: "45%"
        }, "speedDemon");
        this.$().before('<div id="contactMeBlur" class="blur_black" />');
        var that = this;
        $("#contactMeBlur").click(function() {
            that.controller.closeContact();
        });


//        this.$().draggable({
//            cursor: "move",
//            scroll: true,
//            scrollSensitivity: 100
//        });

    }
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
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {


            //    controller.addComment();

        } else if (controller._debugContainerKey.indexOf("user") !== -1) {


            controller.deleteSelectedCollection();

        }
        else if (controller._debugContainerKey.indexOf("comment") !== -1) {


            controller.deleteComment();

        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {


            controller.deletePartner();

        }
        else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


            controller.removeCollectedItem();

        }
        else {

        }
    },
    cancelDelete: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            //     controller.addNewCollection();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {


            //    controller.addComment();

        } else if (controller._debugContainerKey.indexOf("user") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("comment") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {


            controller.cancelDelete();

        } else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


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
        this.get("controller").send("newSearch", area, search_key);
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
           $('#packgetDropdown > .ite').click(function() {

                that.get('controller').set('dropdownCategory', $(this).text());
            });
           $('#profilePackgetDropdown > .ite').click(function() {
                that.get('controller').set('projectCategoryDropdownContent', $(this).text());
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
                columnWidth: 0,
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
                    columnWidth: 0,
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
                    columnWidth: 0,
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
        var div_class = "." + id + "  #uploadArea";
        $(div_id).attr("style", "display:block");
        $(div_class).attr('style', "display:none");




        $('#masonry_user_container').masonry({
            itemSelector: '.box',
            columnWidth: 0,
            isFitWidth: true
        });

    }
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

HubStar.HeaderView = Ember.View.extend({
     templateName: 'header'
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

HubStar.IsLoadingView = Ember.View.extend({
        templateName: 'isLoading'
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
                    columnWidth: 0,
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
        moreContent: function(event) {

            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;

            //     $(id).slideToggle(200);
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

HubStar.LoadingSpinnerView = Ember.View.extend({
        templateName: 'loadingSpinner'
    });



})();

(function() {

HubStar.LoginModalView = Ember.View.extend({
      templateName: 'loginModal',
 
        didInsertElement: function() {

            this.$().draggable({
                cursor: "move",
                scroll: true,
                scrollSensitivity: 100
            });


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
                    columnWidth: 0,
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
                        columnWidth: 0,
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
                        columnWidth: 0,
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
                    columnWidth: 0,
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
                columnWidth: 0,
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
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });

            if (HubStar.get('searchStart')) {
                HubStar.set('isMansonryPageLoad', true);
            }
        },
        willDestroyElement: function() {
            //      $(window).unbind("scroll");
            HubStar.set('isMansonryPageLoad', false);
        },
        moreContent: function(event) {

            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;

            //     $(id).slideToggle(200);
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


        var photoCreateController = controller.get('controllers.photoCreate');      
        photoCreateController.fileChecking(files.length);
        photoCreateController.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                var reader = new FileReader();
                reader.onload = function(e) {
                    photoCreateController.addPhotoObject(e, name, type);
                }, reader.readAsDataURL(files[i]);
            })(files[i]);
        }
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

            $("#collection_tab").slideToggle("slow");
        },
        openComment: function() {

            $('#addcommetBut').attr('style', 'display:none');
            $('#commentBox').attr('style', 'display:block');

            $('.comment-insert-field').focus();
        },
        closeComment: function() {

            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');


        }

    });



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
                        }, 70, function() {
                        });
                    } else {
                        $(that).parent().stop().animate({
                            top: '+=' + (Math.abs(screenYPix - $(that).offset().top) - 180)
                        }, 70, function() {
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
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
        }
    });


})();

(function() {

HubStar.ProfileView = Ember.View.extend({
       templateName: 'profile',
        didInsertElement: function() {

            $(function() {
                $('#masonry_profile_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isFitWidth: true
                });
            });
            $('#defualt').addClass('selected-user-stats');
            $('#user-stats > li').click(function() {
                $('#user-stats > li').removeClass('selected-user-stats');
                $(this).addClass('selected-user-stats');


            });










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
                controller.newSearch();
            }
            else if (controller._debugContainerKey.indexOf("mega") !== -1) {
                controller.addComment();
            }
            else if (controller._debugContainerKey.indexOf("contact") !== -1) {
                controller.setEditable("DesplayName");
            } else if (controller._debugContainerKey.indexOf("comment") !== -1) {
                controller.addComment();
            }
            else {

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

HubStar.ShowAlbumView = Ember.View.extend({
           templateName: 'showAlbum',
        didInsertElement: function() {

     

        },
        hide: function() {
        
   
            $("#collection_tab").slideToggle("slow" );
            
            

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
            (function(file) {
                var name = file.name;
                var reader = new FileReader();
                reader.onload = function(e) {

                    controller.profileStyleImageDrop(e, name);
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
            var name = file.name;
            var reader = new FileReader();
            reader.onload = function(e) {
                controller.profileStyleImageDrop(e, name);
            }, reader.readAsDataURL(files[0]);
        })(files[0]);
        evt.preventDefault();

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

HubStar.UserView = Ember.View.extend({
          templateName: 'user',
        didInsertElement: function() {

            $(function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isFitWidth: true
                });
            });




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

        didInsertElement: function() {



        },
        testing: function() {
           


        }.observes('content.id')
    });


})();

(function() {

HubStar.WelcomeView = Ember.View.extend({
    templateName: 'welcome',
    didInsertElement: function() {
        $(function() {
            $('#masonry_welcome_container').masonry({
                itemSelector: '.box',
                columnWidth: 0,
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

var Router = Ember.Router.extend(
        


);

HubStar.Router.map(function() {
    this.resource("index", {path: '/'}, function() {
        this.resource("indexIndex", {path: '/'});
        this.resource("photo", {path: '/photos/:photo_id'});
        this.resource("article", {path: '/articles/:article_id'});
        this.resource("videos", {path: '/videos/:video_id'});
        this.resource("videos", function() {
            this.resource("video", {path: ':video_id'});
        });
        this.resource("files", {path: '/files/:file_id'});
        this.resource("ideabooks", {path: '/ideabooks/:ideabook_id'});

        this.resource("profile", {path: '/profiles/:profile_id'}, function() {

            this.resource("profileCollection", {path: ':profileCollection_id'});
        });
        this.resource("profiles", function() {
            this.resource("profileNew", {path: '/new'});
        });

        this.resource("user", {path: '/users/:user_id'}, function() {
            this.resource("collection", {path: ':collection_id'});

        });
        this.resource("users", function() {
            this.resource("usersIndex", {path: '/'});

        });
        this.resource("searchs", {path: "/search"}, function( ) {
            this.resource("searchIndex", {path: '/'});
            this.resource('search', {path: ':search_id'});
        });
        
 
   

        this.resource("welcome", {
            path: "/welcome"
        });
        this.resource("quickstart", {
            path: "/quickstart"
        });
        this.resource("comingSoon", {
            path: "/comingsoon"
        });

    });



});

})();