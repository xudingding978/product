
DS.RESTAdapter.map('HubStar.Cate', {
    subcate: {embedded: 'always'}
});

HubStar.Cate = DS.Model.extend({
    // id: DS.attr('string'),
    topic: DS.attr('string'),
    subcate: DS.hasMany('HubStar.Subcate'),
    type: DS.attr('string'),
    classification: localStorage.resOrcom,
    display: DS.attr('boolean'),
    image: DS.attr('string'),
    chooseNumber : 0,
    isResidential: function() {
        var id = this.get('type');
        if (id.indexOf("residential") !== -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }.property("type"),
    isCommercial: function() {
        var id = this.get('type');
        if (id.indexOf("commercial") !== -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }.property("type"),
            type1: function() {
        var id = this.get('type');
        if (this.get("classification") === undefined) {
            this.set("classification", "All");
        }
        if (this.get("classification") === "All")
        {
            this.set("display", true);
        }
        else
        {
            if (id.indexOf(this.get("classification")) !== -1)
            {
                this.set("display", true);
            }
            else
            {
                this.set("display", false);
            }
        }
        return "";
    }.property("type"),
    types: function() {
        var id = this.get('type');
        if (this.get("classification") === "All")
        {
            this.set("display", true);
        }
        else
        {
            if (id.indexOf(this.get("classification")) !== -1)
            {
                this.set("display", true);
            }
            else
            {
                this.set("display", false);
            }
        }
    }.observes("classification"),
    ids: function() {
        var id = createNavigatorId();
        return id;
    }.property('topic'),
    didLoad: function() {
    }
});

