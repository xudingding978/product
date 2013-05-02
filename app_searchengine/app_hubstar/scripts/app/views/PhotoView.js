define([
    "ember",
    "text!templates/photoTemplate.html"

], function(Ember, photoTemplate) {
  //  Ember.TEMPLATES["123"] = Ember.Handlebars.compile(photoTemplate);


    var PhotoView = Ember.View.extend({
        template: Ember.Handlebars.compile(photoTemplate),
        test1:function(){
            
            //alert("buhao !!!!!!!!!!!!!!!!");
             //this.transitionTo('posts');
        },
                        test2:function(){
            
           // alert("hi jasonnnnnnnnnnnnnnnnnnnnnnn");
             //this.transitionTo('posts');
        }

    });
    return PhotoView;
});
