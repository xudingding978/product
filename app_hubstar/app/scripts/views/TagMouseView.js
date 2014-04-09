HubStar.TagMouseView = Ember.View.extend({
    templateName: 'tagMouse',
    didInsertElement: function() {
        //console.log("222233333333333322222222222222");

    },
    showTagContent1: function(evt)
    {
       
        var tag_id = evt.target.id.split("_")[1]; 
         if(tag_id!==undefined){
        var tags = this.get("controller").get("controllers.showTag").get("contentTags");
     
        for (var i = 0; i < tags.length; i++)
        {
            if (tags.objectAt(i)["tag_id"] === tag_id)
            {
             var   pic_x = tags.objectAt(i)["pic_x"]*HubStar.get("pic_current_width")+document.getElementById('tag_image_object').offsetLeft; //set the place of the tag content
               var  pic_y = tags.objectAt(i)["pic_y"]*HubStar.get("pic_current_height")+document.getElementById('tag_image_object').offsetTop;
                this.get("controller").set("tag", tags.objectAt(i));  //set the mouse over tag's detail content
                if ((tags.objectAt(i)["linkto"] === undefined) || (tags.objectAt(i)["linkto"] === "") || (tags.objectAt(i)["linkto"] === null))
                {
                    this.get("controller").set("isNullLink", true);
                }
                else
                {
                    this.get("controller").set("isNullLink", false);
                }
                break;
            }
        }
        var picx_content = pic_x;
//             console.log("#tag_image_obj. left= "+document.getElementById('tag_image_object').offsetTop+"tagmouse view  "+ "pic_x ="+pic_x+ "  pic_y =   "+pic_y);
        this.get("controller").set("showEachTagContent", true);
        this.get("controller").get("controllers.showTag").set("isUpdateTag", false);
        setTimeout(function() {

            $("#tagitshow").fadeIn();
            $("#tagitshow").css({top: pic_y+36, left: picx_content , opacity: 1});
        }, 5);
        //alert(that.get("controller").get("showEachTagContent"));
        }

    },
     showTagContent2: function(evt)
    {
        this.get("controller").set("showEachTagContent", false);

    },
   

    mouseEnter: Ember.aliasMethod('showTagContent1'),
    mouseLeave: Ember.aliasMethod('showTagContent2')

});