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
        this.controllerFor('mega').set('from',"search");
//           console.log("222fdsfdsfdsfds222");
//            localStorage.checkUser = "newUser";
//if(  localStorage.checkUser === "newUser"){
//                 console.log("222222");
//        //     $(document).ready(function() {
//         //   window.onload = function(){
//        //    document.getElementById('startButton').onclick = function() {
//                $("#profileDashboard").attr("style", "display:none");
//                $("#profilePanel").removeClass("panel");
//     //           $("#profileFront").removeClass("front");
//                $(".brand").addClass("tour-background");
//                $(".Geo-Filter").addClass("tour-background");
//                $("#login_detail").addClass("tour-background");
//                 $("#profileName").addClass("profileName");
//                
//
//
//                introJs().setOption('doneLabel', 'Finish').start().oncomplete(function() {
////                    var address = document.URL;
////                    var urlName = address.split("#")[1].split("/")[1];
////                    var target = address.split("#")[1].split("/")[2];
////                    if (urlName === "users")
////                    {
////                        window.location.href = '/#/users/' + target;
////                        $(window).scrollTop(0);
////                        
////                    }
////                    else if (urlName === "profiles") {
////                        window.location.href = '/#/profiles/' + target;
////                        $(window).scrollTop(500);
////                    }
////                    else{
//                    window.location.href = '/#/search';
//                    $(window).scrollTop(0);
//                //    }
//              });
//         //   };
//
//       //    };
//
//      //  });
//             console.log("13333333");
//            
//        }else {
//           
//        }
  localStorage.checkUser = "";
        $(".navbar").css("box-shadow", "");
        $(".navbar").css("background", " url(../../images/landingpagebg.jpg)");
    },
    events: {
        transitionToPhoto: function(id) {
            this.controllerFor('mega').set("selectPhoto", false);
            this.transitionTo("photo", HubStar.Mega.find(id));
        },
        transitionToProfile: function(id) {
            this.transitionTo("profileCollections", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {

            this.controllerFor('article').set("accessFromSearchBoard", true);
            this.transitionTo("searchDefaultArticle", HubStar.Article.find(id)); //it will got to default search without go to the new search
        }
    },
    redirect: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            this.transitionTo('indexIndex');

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
