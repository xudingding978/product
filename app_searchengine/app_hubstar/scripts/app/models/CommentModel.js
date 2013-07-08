
define('models/CommentModel',
        ['ember', 'emberData'],
        function() {

            var CommentModel = DS.Model.extend({
                mega: DS.belongsTo('App.Mega', {embedded: 'always'}),
                commenter_profile_pic_url: DS.attr('string'),
                commenter_id: DS.attr('string'),
                name: DS.attr('string'),
                content: DS.attr('string'),
                time_stamp: DS.attr('string'),
                is_delete: DS.attr('boolean'),
//                fomate_time_stamp: function() {
//                    return "user_comment_" +this.get('time_stamp').split(' ').join('_');
//                }.property(),
                didLoad: function() {

                }


            });

            return CommentModel;
        }
);