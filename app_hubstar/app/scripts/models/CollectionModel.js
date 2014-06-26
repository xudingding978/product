HubStar.Collection = DS.Model.extend({
    title: DS.attr('string'),
    desc: DS.attr('string'),
    collection_ids: DS.attr('string'),
    created_at: DS.attr('string'),
    cover: DS.attr('string'),
    parent_type: DS.attr('string'),
    optional: DS.attr('string'),
    type: DS.attr('string'),
    id: DS.attr('string'),
    cover_height: 0,
    cover_width: 0,
    cover_top:0,
    cover_left:0,
    didLoad: function() {
    },
    getCollectionId: function()
    {
        var id = "C" + this.get('id');
        return id;
    }.property('id'),
    getCoverSize: function()
    {
        var top=0;
        var left =0;
        if (this.get("cover").indexOf("Defaultcollection-cover.png") !== -1)
        {
            height = 340;
            width = 350;
        }
        else
        {
            var pic = this.get("cover");
            var url = pic.split("_");
            var length = url.length;
            var width = Math.ceil(url[length - 1].split(".")[0].split("x")[0]);
            var height = Math.ceil(url[length - 1].split(".")[0].split("x")[1]);

            if (height > width)
            {
                height = Math.ceil(350 / width * height);
                width = 350;
                top = 170-height/2;
            }
            else
            {
                width = Math.ceil(340 / height * width);
                height = 340;
                left = 175 - width/2;
            }
        }
        this.set("cover_width", width + "px");
        this.set("cover_height", height + "px");
        this.set("cover_top",top+"px");
        this.set("cover_left",left+"px");
    }.property('cover')
});
