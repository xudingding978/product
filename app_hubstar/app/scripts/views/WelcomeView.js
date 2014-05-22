HubStar.WelcomeView = Ember.View.extend({
    templateName: 'welcome',
    selected_topics: "",
    isAdd: false,
    contentTopic: [
        {id: "1", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/newhomes.png', topic: 'New Homes'},
        {id: "2", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/renovation.png', topic: 'Renovation'},
        {id: "3", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/kitchen.png', topic: 'Kitchens'},
        {id: "4", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/bathroom.png', topic: 'Bathrooms'},
        {id: "5", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/interiordesign.png', topic: 'Interior design'},
        {id: "6", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/outdoorliving.png', topic: 'Outdoor Living'},
        {id: "7", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/office.png', topic: 'Office'},
        {id: "8", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/civic.png', topic: 'Civic'},
        {id: "9", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/education.png', topic: 'Education'},
        {id: "10", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hospitality.png', topic: 'Hospitality'},
        {id: "11", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/retail.png', topic: 'Retail'},
        {id: "12", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/apartment.png', topic: 'Apartment'}
    ],
    didInsertElement: function() {

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
            if (this.get('selected_topics').length === 0) {
                this.set('selected_topics', topic);
            } else {
                this.set('selected_topics', this.get('selected_topics') + "," + topic);
            }
            HubStar.set(id, true);
        }
    },
    submitSelection: function() {

        var data = this.get('selected_topics');
        var user = HubStar.User.find(localStorage.loginStatus);
        user.set('selected_topics', data);
        user.store.commit();
        $("#welcome").css("display", "none");
         $(".blur_black").css("display", "none");
      

    },
    closePane:function() {
        $("#welcome").css("display", "none");
        $(".blur_black").css("display", "none");
    }

});
