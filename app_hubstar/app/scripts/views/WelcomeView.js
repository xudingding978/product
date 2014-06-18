HubStar.WelcomeView = Ember.View.extend({
    templateName: 'welcome',
    selected_topics: "",
    isAdd: false,
    contentTopicResidential: [
        {id: "1", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/apartment.png', topic: 'Apartment Design'},
        {id: "2", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/bathroom.png', topic: 'Bathrooms'},
        {id: "3", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hometheatre.png', topic: 'Home Theatre'},
        {id: "4", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/interiordesign.png', topic: 'Interior design'},
        {id: "5", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/kitchen.png', topic: 'Kitchens'},
        {id: "6", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/newhomes.png', topic: 'New Homes'},
        {id: "7", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/outdoorliving.png', topic: 'Outdoor Living'},
        {id: "8", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/renovation.png', topic: 'Renovation'}
    ],
    contentTopicCommercial: [
        {id: "9", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/apartment.png', topic: 'Apartment Design'},
        {id: "10", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/civic.png', topic: 'Civic Design'},
        {id: "11", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/education.png', topic: 'Educational Design'},
        {id: "12", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/hospitality.png', topic: 'Hospitality Desgin'},
        {id: "13", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/office.png', topic: 'Office Design'},
        {id: "14", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/refurbishment.png', topic: 'Refurbishment'},
        {id: "15", image: 'http://develop.devbox.s3.amazonaws.com/Welcome-Interest/retail.png', topic: 'Retail Design'}


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
        $(".welcome-container").css("display", "none");
        $(".blur_black").css("display", "none");


    },
    closePane: function() {
        $(".welcome-container").css("display", "none");
        $(".blur_black").css("display", "none");
    }

});
