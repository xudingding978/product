
define('models/CommentModel',
        ['ember', 'emberData'],
        function() {

            var CommentModel = DS.Model.extend({
                commenter_profile_pic_url: DS.attr('string'),
                commenter_id: DS.attr('string'),
                name: DS.attr('string'),
                content: DS.attr('string'),
                time_stamp: DS.attr('string'),
                is_delete: DS.attr('string'),
                didLoad: function() {

                }


            });

            return CommentModel;
        }
);