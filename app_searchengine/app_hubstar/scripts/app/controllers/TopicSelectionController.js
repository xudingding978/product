define(["ember", "models/UserModel"], function(Ember, UserModel) {
    var TopicSelectionController = Ember.ArrayController.extend({
        selected_topics: "",
        content: [
            {id: "1", image: '../images/welcomepage/accessories.jpg', topic: 'Accessories'},
            {id: "2", image: '../images/welcomepage/appliances.jpg', topic: 'Appliances'},
            {id: "3", image: '../images/welcomepage/benchtop.jpg', topic: 'Benchtops'},
            {id: "4", image: '../images/welcomepage/culinary.jpg', topic: 'Culinary & Dining'},
            {id: "5", image: '../images/welcomepage/Design.jpg', topic: 'Design'},
            {id: "6", image: '../images/welcomepage/windows.jpg', topic: 'Door & Windows'},
            {id: "7", image: '../images/welcomepage/flooring.jpg', topic: 'Flooring'},
            {id: "8", image: '../images/welcomepage/furniture.jpg', topic: 'Furniture'},
            {id: "9", image: '../images/welcomepage/heating.jpg', topic: 'Heating & Cooling'},
            {id: "10", image: '../images/welcomepage/light.jpg', topic: 'Lighting'},
            {id: "11", image: '../images/welcomepage/outdoor.jpg', topic: 'Outdoors'},
            {id: "12", image: '../images/welcomepage/paints.jpg', topic: 'Paints & Varnishes'},
            {id: "13", image: '../images/welcomepage/shelving.jpg', topic: 'Cabinetry & Shelving'},
            {id: "14", image: '../images/welcomepage/taps.jpg', topic: 'Taps & Fittings'}

        ],
        selectTopic: function(id, topic) {
            if (App.get(id)) {
                $('#' + id).attr("style", "opacity:0;height: 350px; width: 300px;");
                if (this.get('selected_topics').indexOf(topic) !== -1) {

                    this.set('selected_topics', this.get('selected_topics').replace(topic + ",", ""));

                }
                //       console.log(this.get('selected_topics'));
                App.set(id, false);
            } else {
                $('#' + id).attr("style", "opacity:1;height: 350px; width: 300px;");

                this.set('selected_topics', this.get('selected_topics') + topic + ",");
                //      console.log(this.get('selected_topics'));
                App.set(id, true);
            }

        },
        submitSelection: function() {

            var data = this.get('selected_topics');
            var user = UserModel.find(localStorage.loginStatus);
            user.set('selected_topics', data.substring(0, data.length - 1));
            user.store.commit();
        }
    }
    );
    return TopicSelectionController;
});







