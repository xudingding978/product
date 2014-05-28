
HubStar.GroupController = Ember.Controller.extend({
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    groupPage: true,
    profileSelectionStatus: "",
    groupNetworkStatistics: 0,
    groupNetwork: false,
    createTime: "",
    editGroup: false,
    groupStepTwo: true,
    groupStepThree: false,
    group_expertise: "",
    logoSource: null,
    logoName: null,
    bgSource: null,
    bgName: null,
    group_bg_url: "",
    group_hero_url: "",
    group_pic_url: "",
    name: "",
    description: "",
    logoSaving: false,
    bgSaving: false,
    init: function()
    {
    },
    setGroup: function(model)
    {
        this.set("model", model);
        this.set("groupNetworkStatistics", 0);
        var createTime = model.get("collections").objectAt(0).get("created_at");
        var date = new Date(createTime * 1000);
        this.set("createTime", date + "");
        this.selectPartner();
        this.setPic();
    },
    setPic: function() {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                $("#group_pic").css("height", that.get("model").get("height"));
                $("#group_pic").css("width", that.get("model").get("width"));
            }, 2);
        });
    },
    goToGroupDashboard: function() {
        this.set("editGroup", true);
        this.set("name", this.get("model").get("group_name"));
        this.set("description", this.get("model").get("group_description"));
        this.set("group_pic_url", this.get("model").get("group_pic_url"));
        this.set("group_bg_url", this.get("model").get("group_bg_url"));
        this.set("group_hero_url", this.get("model").get("group_hero_url"));
        this.set("group_expertise", this.get("model").get("group_expertise"));
        this.set("group_budget", this.get("model").get("group_budget"));
        this.set("group_timeframe", this.get("model").get("group_timeframe"));
        this.refreshPage();
    },
    backToFront: function() {
        this.set("group_budget", "");
        this.set("group_timeframe", "");
        this.set("group_pic_url", "");
        this.set("group_bg_url", "");
        this.set("group_hero_url", "");
        this.set("group_expertise", "");
        this.set("name", "");
        this.set("description", "");
        this.removePic("logo");
        this.removePic("bg");
        this.set("editGroup", false);
    },
    refreshPage: function() {
        if (this.get('group_expertise') === "First Time")
        {
            this.choose("1");
        }
        else if (this.get('group_expertise') === "I have some experiences")
        {
            this.choose("2");
        }
        else if (this.get('group_expertise') === "I am professional")
        {
            this.choose("3");
        }

        if (this.get('group_budget') === "Less than 5k")
        {
            this.chooseBudget("1", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "5k-10k")
        {
            this.chooseBudget("2", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "10k-50k")
        {
            this.chooseBudget("3", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "50k-100k")
        {
            this.chooseBudget("4", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "100k-250k")
        {
            this.chooseBudget("5", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "250k-500k")
        {
            this.chooseBudget("6", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "500k- 1M")
        {
            this.chooseBudget("7", this.get('group_budget'));
        }
        else if (this.get('group_budget') === "1M+")
        {
            this.chooseBudget("8", this.get('group_budget'));
        }

        if (this.get('group_timeframe') === "1-2 months")
        {
            this.chooseTime("1", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "Next 6 months")
        {
            this.chooseTime("2", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "Within 12 months")
        {
            this.chooseTime("3", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "1-2 years")
        {
            this.chooseTime("4", this.get('group_timeframe'));
        }
        else if (this.get('group_timeframe') === "Within 3 years")
        {
            this.chooseTime("5", this.get('group_timeframe'));
        }
    },
    groupStep: function(number) {
        var that = this;
        if (number === "2") {
            $(document).ready(function() {
                setTimeout(function() {
                    that.refreshPage();
                }, 1);
            });
            this.set("groupStepTwo", true);
            this.set("groupStepThree", false);

        } else if (number === "3") {

            this.set("groupStepTwo", false);
            this.set("groupStepThree", true);
        }
    },
    selectPartner1: function() {
        $(document).ready(function() {
            setTimeout(function() {
                $('.new-masonry-bar > ul > li').removeClass('new-selected');
                $('#networkGroup1').addClass('new-selected');
            }, 2);
        });
    },
    selectPartner: function()
    {
        $(document).ready(function() {
            setTimeout(function() {
                $('.new-masonry-bar > ul > li').removeClass('new-selected');
                $('#networkGroup').addClass('new-selected');
            }, 2);
        });
        this.set("groupNetwork", true);
        this.set('profileSelectionStatus', 'Network');
        this.transitionToRoute('groupNetwork');
    },
    chooseBudget: function(n, s) {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                for (var i = 1; i <= 8; i++)
                {
                    $("#budget" + i).removeClass("selected");
                }
                $("#budget" + n).addClass("selected");
                that.set("group_budget", s);
            }, 2);
        });
    },
    chooseTime: function(n, s) {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                for (var i = 1; i <= 5; i++)
                {
                    $("#time" + i).removeClass("selected");
                }
                $("#time" + n).addClass("selected");
                that.set("group_timeframe", s);
            }, 2);
        });
    },
    choose: function(number) {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                if (number === "1") {
                    $("#first_time").addClass("selected");
                    $("#some_experiences").removeClass("selected");
                    $("#professional").removeClass("selected");
                    that.set("group_expertise", "First Time");
                } else if (number === "2") {
                    $("#some_experiences").addClass("selected");
                    $("#first_time").removeClass("selected");
                    $("#professional").removeClass("selected");
                    that.set("group_expertise", "I have some experiences");
                } else if (number === "3") {
                    $("#professional").addClass("selected");
                    $("#some_experiences").removeClass("selected");
                    $("#first_time").removeClass("selected");
                    that.set("group_expertise", "I am professional");
                }
            }, 2);
        });
    },
    save: function() {
        if (this.get("name") !== this.get("model").get("group_name"))
        {
            this.get("model").set("group_name", this.get("name"));
        }
        if (this.get("description") !== this.get("model").get("group_description"))
        {
            this.get("model").set("group_description", this.get("description"));
        }
        if (this.get("group_pic_url") !== this.get("model").get("group_pic_url"))
        {
            this.get("model").set("group_pic_url", this.get("group_pic_url"));
        }
        if (this.get("group_bg_url") !== this.get("model").get("group_bg_url"))
        {
            this.get("model").set("group_bg_url", this.get("group_bg_url"));
            this.get("model").set("group_hero_url", this.get("group_hero_url"));
        }
        if (this.get("group_expertise") !== this.get("model").get("group_expertise"))
        {
            this.get("model").set("group_expertise", this.get("group_expertise"));
        }
        if (this.get("group_budget") !== this.get("model").get("group_budget"))
        {
            this.get("model").set("group_budget", this.get("group_budget"));
        }
        if (this.get("group_timeframe") !== this.get("model").get("group_timeframe"))
        {
            this.get("model").set("group_timeframe", this.get("group_timeframe"));
        }
        var that = this;
        this.get("model").save();
        this.get("model").get('isSaving');
        this.get("model").addObserver('isDirty', function() {
            if (!that.get("model").get('isDirty')) {
                that.get('controllers.applicationFeedback').statusObserver(null, "Update successfully");
                that.backToFront();
            }
        });
    },
    removePic: function(s) {
        this.set(s + 'Source', null);
        this.set(s + 'Name', null);
        if (s === "logo") {
            this.set("group_pic_url", this.get("model").get("group_pic_url"));
        }
        else if (s === "bg")
        {
            this.set("group_bg_url", this.get("model").get("group_bg_url"));
            this.set("group_hero_url", this.get("model").get("group_hero_url"));
        }
    },
    profileStyleImageDrop: function(e, name, variable) {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set(variable + 'Source', src);
        this.set(variable + 'Name', name);
        this.set(variable + 'Saving', true);
        this.savePic(variable + 'Source', variable + 'Name', variable);
    },
    savePic: function(src, name, variable) {
        if (this.get(src) !== null && this.get(name) !== null)
        {
            var imageType = "";
            var imageName = this.get(name).split('.');
            imageType = imageName[imageName.length - 1];
            var data = [this.get(src), this.get(name), imageType, variable];
            data = JSON.stringify(data);
            var that = this;
            requiredBackEnd('photos', 'savePicGroup', data, 'POST', function(params) {
                that.set(variable + 'Saving', false);
                if (params.length > 1)
                {
                    that.set("group_bg_url", params[0]);
                    that.set("group_hero_url", params[1]);
                }
                else
                {
                    that.set("group_pic_url", params[0]);
                }
            });
        }
    }
}
);
