HubStar.TagContentView = Ember.View.extend({
    templateName: 'tagContent',
    didInsertElement: function() {
        $(document).ready(function() {
            setTimeout(function() {
                $('#tag_activate_button').mouseenter(function() {
                    $('#tag_activate_button').animate({
                        left: "40px"
                    },
                    {
                        queue: false,
                        duration: 300,
                        complete: function() {
                            $('#tag_activate_button_text').parent().css("border-radius", "5px");
                        }
                    }
                    )
                            .mouseleave(function() {
                        $('#tag_activate_button').animate({
                            left: "105px"
                        }, {
                            queue: false,
                            duration: 300,
                            complete: function() {
                                $('#tag_activate_button_text').parent().css("border-radius", "0px");
                            }
                        });
                    });
                });

                $('#tag_edit_button').mouseenter(function() {
                    $('#tag_edit_button').animate({
                        left: "40px"
                    },
                    {
                        queue: false,
                        duration: 300,
                        complete: function() {
                            $('#tag_edit_button_text').parent().css("border-radius", "5px");
                        }
                    }
                    )
                            .mouseleave(function() {
                        $('#tag_edit_button').animate({
                            left: "105px"
                        }, {
                            queue: false,
                            duration: 300,
                            complete: function() {
                                $('#tag_edit_button_text').parent().css("border-radius", "0px");
                            }
                        });
                    });
                });

                $('#tag_delete_button').mouseenter(function() {
                    $('#tag_delete_button').animate({
                        left: "40px"
                    },
                    {
                        queue: false,
                        duration: 300,
                        complete: function() {
                            $('#tag_delete_button_text').parent().css("border-radius", "5px");
                        }
                    }
                    )
                            .mouseleave(function() {
                        $('#tag_delete_button').animate({
                            left: "105px"
                        }, {
                            queue: false,
                            duration: 300,
                            complete: function() {
                                $('#tag_delete_button_text').parent().css("border-radius", "0px");
                            }
                        });
                    });
                });
            }, 5);
        });
    },
    actions: {
        hideContent: function() {
            this.get("controller").set("showEachTagContent", false);
        }
    },
    mouseLeave: Ember.aliasMethod('hideContent')
});