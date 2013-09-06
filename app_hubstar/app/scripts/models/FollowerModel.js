HubStar.Follower = DS.Model.extend({
        
                follower_profile_pic_url: DS.attr('string'),
                follower_id: DS.attr('string'),
                name: DS.attr('string'),
                type: DS.attr('string'),
                time_stamp: DS.attr('string'),
                is_delete: DS.attr('boolean'),
                didLoad: function() {

                }


            });

