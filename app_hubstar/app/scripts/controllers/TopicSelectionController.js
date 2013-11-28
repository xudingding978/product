HubStar.TopicSelectionController = Ember.ArrayController.extend({
    selected_topics: "",
    isAdd: false,
    content: [
        {id: "1", image: '../images/welcomepage/bedroom.jpg', topic: 'Bedrooms'},
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
        {id: "14", image: '../images/welcomepage/retail-design.jpg', topic: 'Retail Design'}

    ],
    selectTopic: function(id, topic) {

        if (HubStar.get(id)) {
            $('#plus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none");
            if (this.get('selected_topics').indexOf(topic) !== -1) {
                this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));
              
            }

            HubStar.set(id, false);
        } else {
            $('#plus_' + id).attr("style", "opacity: .8; z-index: 10; right: 0; margin: 10px; display:none");
            this.set('selected_topics', this.get('selected_topics') + topic + ",");
            HubStar.set(id, true);

        }

    },
    submitSelection: function() {
        var data = this.get('selected_topics');
        var user = HubStar.User.find(localStorage.loginStatus);
        user.set('selected_topics', data.substring(0, data.length - 1));
        user.store.commit();
         this.transitionToRoute('quickstart');
    }
}
);





