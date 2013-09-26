
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
    photo_url: null,
    userName: "",
    password: "",
    repeat: "",
    email: "",
    iframeURL: "",
    iframeLoginURL: "",
    init: function() {
        this.newSearch();
        this.set('search_string', '');
        var address = document.URL;
        var domain = address.split("/")[2];

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


        this.set('loadingTime', true);

        this.set("size", 20);
        this.set("from", this.get("from") + this.get("size"));
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
        var that = this;
        results.addObserver('isLoaded', function() {
            if (results.get('isLoaded')) {
                for (var i = 0; i < results.get("length"); i++) {
                    var tempmega = results.objectAt(i);
                    //console.log(tempmega.get("profile").objectAt(0));
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
        var that = this;
        var statusController = this.get('controllers.status');
        var stats = HubStar.Stat.find({"RquireType": "firstsearch", "region": this.get("search_area"), "search_string": this.get("search_string"), "from": this.get("from"), "size": this.get("size")});
        stats.addObserver('isLoaded', function() {
            if (stats.get('isLoaded')) {
                var stat = stats.objectAt(0);
                var megasResults = stat.get("megas");
                HubStar.set('itemNumber', megasResults.get("length"));
                for (var i = 0; i < megasResults.get("length"); i++) {
                    var tempmega = megasResults.objectAt(i);
                    //console.log(tempmega.get("profile").objectAt(0));
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
                    that.pushObject(tempmega);
                }
                that.set('loadingTime', false);
                this.set("from", this.get("size"));
                var d = new Date();
                var end = d.getTime();
                var time = that.getResponseTime(start, end);
                statusController.set("searchResultNum", stat.get('numberofresults'));
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
    signUp: function() {


        if (this.checkSignupInfo()) {

            var createInfo = [this.get('first_name'), this.get('last_name'), this.get('password'), this.get('email')];
            var that=this;
            requiredBackEnd('site', 'create', createInfo, 'POST', function(params) {
                console.log(params.COUCHBASE_ID);
                localStorage.loginStatus = params.COUCHBASE_ID;
                that.transitionToRoute('search');
            });
        }
    },
            
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

            var patternEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
//            document.getElementById(checkList[i].id).style.border = '';
            if (checkList[i].input !== null && checkList[i].input !== "")
            {
                console.log(checkList[i].input);
                if (checkList[i].input.length > checkList[i].lengthMax || checkList[i].input.length < checkList[i].lengthMin)
                {
                    result = false;
//                document.getElementById(checkList[i].id).style.border = '2px solid red';
                    break;
                }
            }
            if (checkList[i].id === 'first_name' || checkList[i].id === 'last_name' || checkList[i].id === 'email' || checkList[i].id === 'password')
            {
                if (checkList[i].input === null || checkList[i].input === "") {
                    result = false;
//                    document.getElementById(checkList[i].id).style.border = '2px solid red';
                    break;
                }
            }
            if (checkList[i].input !== null && checkList[i].isEmailValid === true)
            {

                if (patternEmail.test(checkList[i].input || checkList[i].input === "")) {
                    result = true;
                }
                else {
                    result = false;
//                    document.getElementById(checkList[i].id).style.border = '2px solid red';
                    break;
                }
            }
//
//            if (checkList[i].input !== null && checkList[i].isEmailExists === true)
//            {
//              var signupInfo=[ checkList[i].input]; 
//       console.log( this.get(checkList[i].input));
//      var that=this;
//            requiredBackEnd('site','getemaill',signupInfo,'POST',function(params){
//                if(params===false){
//               
//                    result = false;
//                    document.getElementById(checkList[i].id).style.border = '2px solid red';
//                }
//                else {
//                    result = true;
////                                      break;
//                }
//            });
//            }


        }
        console.log(result);
        return result;
    },
    checkEmailExists: function() {
        var signupInfo = [this.get('email')];
        console.log(this.get('email'));
        var result;
        requiredBackEnd('site', 'getemail', signupInfo, 'POST', function(params) {
            console.log(params);
            if (params === false) {
                result = false;
//                    document.getElementById(checkList[i].id).style.border = '2px solid red';
            }
            else {
                result = true;
            }
            return result;
            console.log(result);
        });

    },
    login: function() {

        var loginInfo = [this.get('username'), this.get('password')];
        var that = this;
        requiredBackEnd('site', 'login', loginInfo, 'POST', function(params) {
            if (that.get('password') === params.PWD_HASH) {
                localStorage.loginStatus = params.COUCHBASE_ID;
                that.transitionToRoute('search');
            }

        });

    }




});
