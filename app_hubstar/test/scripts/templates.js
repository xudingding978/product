Ember.TEMPLATES["aboutUsTemplate1"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div>\n    ");
  stack1 = helpers.each.call(depth0, "about_us", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div>Descriptio: </div>\n    <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("about_desc"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> \n\n    <hr> \n\n    <div style=\"margin: 15px 0; width:560px; float: left\"> \n        <a rel=\"nofollow\" target=\"_blank\" href=\"http://www.youtube.com/trendspublishing\" style=\"cursor:pointer;\"> \n            <h4>View the Latest Video from the Trends YouTube channel</h4></a>\n        ");
  stack1 = helpers.each.call(depth0, "about_video", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <hr>\n\n        ");
  stack1 = helpers.each.call(depth0, "about_image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n\n\n    <div style=\"float: right; margin: 15px 0;width: 220px;\">\n        <a rel=\"nofollow\" target=\"_blank\" href=\"http://library.trendsideas.com/Home.aspx\" style=\"cursor:pointer;\"><h4>Our Latest Titles</h4></a>\n        <h5><font color=\"FF00FF\">On Sale Now...<h4>Buy your copy here!</h4></font></h5> \n        ");
  stack1 = helpers.each.call(depth0, "about_book", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"aboutus-attr\">Video URL: </div>\n        <div style=\"border: 1px solid #ddd;border-radius: 2px;float: left;width: 495px;margin-bottom: 10px;margin-right: 2px;\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("video_url"),
    'class': ("no-effect no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> \n        <div class=\"new-btn\" style=\"position: relative;height: 52px;float: left;top: 0;line-height: 48px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getVideoURL", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">preview</div>\n        <iframe width=\"560\" height=\"315\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.embeded_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" frameborder=\"0\" allowfullscreen=\"\"></iframe> \n        <div class=\"aboutus-thisvideo\">\n            <div class=\"aboutus-attr\">Video Title: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("video_title"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n            <div class=\"aboutus-attr\">Video Desc: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("video_desc"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n        </div>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div style=\"float: left; padding: 6px 8px;width: 275px;background-color: #f3f3f3;border-radius: 2px;margin-right: 5px;\">\n            <div class=\"aboutus-attr\">Article Image URL: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("image_url"),
    'class': ("no-resize"),
    'placeholder': ("Recommanded size: 275 x 200")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> \n            <div style=\"padding: 10px 15px; margin: 10px 0;background: #f3f3f3; \"> \n                <img alt=\"\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">  \n            </div>\n            <div class=\"aboutus-attr\">Article Title: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("image_title"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>            \n            <div class=\"aboutus-attr\">Article Desc: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("image_desc"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n            <div class=\"aboutus-attr\">Article Link: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("image_link"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n        </div>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div style=\"background-color: #f3f3f3;padding: 8px 6px;\">\n            <div class=\"aboutus-attr\">Book Desc: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("book_description"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> \n            <div class=\"aboutus-attr\">Book URL: </div>\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("book_image_url"),
    'class': ("no-resize"),
    'placeholder': ("Recommanded size: 180 x 240")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> \n            <div class=\"latestebook\"> <img alt=\"\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("book_image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">             </div> \n            <div>\n                <div class=\"aboutus-attr\">Book Read Link: </div>\n                <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("book_read_url"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n                <div class=\"aboutus-attr\">Book Buy Link: </div>\n                <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("book_buy_url"),
    'class': ("no-resize"),
    'placeholder': ("*")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n            </div>\n        </div>\n        <hr>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n\n\n\n\n\n<!--DISPLAY MODE-->\n<div>\n    ");
  stack1 = helpers.each.call(depth0, "about_us", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div>");
  stack1 = helpers._triageMustache.call(depth0, "about_desc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div> \n    <hr> \n    <div style=\"float: left;margin: 15px 0; width:560px;\"> \n        <a rel=\"nofollow\" target=\"_blank\" href=\"http://www.youtube.com/trendspublishing\" style=\"cursor:pointer;\"> \n            <h4>View the Latest Video from the Trends YouTube channel</h4></a>\n        <hr>\n        <div style=\"background-color: #f3f3f3;\">\n            ");
  stack1 = helpers.each.call(depth0, "about_video", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div style=\"margin: 0 -5px;\">\n            ");
  stack1 = helpers.each.call(depth0, "about_image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    <div style=\"float: right; margin: 15px 0;width: 220px;\">\n        <a rel=\"nofollow\" target=\"_blank\" href=\"http://library.trendsideas.com/Home.aspx\" style=\"cursor:pointer;\"><h4>Our Latest Titles</h4></a> \n        <h4 style=\"color:#FF00FF; line-height: 30px\">On Sale Now...<br/>Buy your copy here!</h4>\n        ");
  stack1 = helpers.each.call(depth0, "about_book", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n    ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <iframe width=\"560\" height=\"315\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.embeded_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" frameborder=\"0\" allowfullscreen=\"\"></iframe> \n            <div style=\"padding: 0 10px 10px 10px;margin-bottom: 15px;\">\n                <h4><a rel=\"nofollow\" target=\"_blank\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("image_link")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"cursor: pointer\"> ");
  stack1 = helpers._triageMustache.call(depth0, "video_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></h4>\n                <div style=\"height: 35px; overflow: hidden;margin-bottom: 5px;\">");
  stack1 = helpers._triageMustache.call(depth0, "video_desc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                <a rel=\"nofollow\" target=\"_blank\" style=\"color: #0088CC\" class=\"hover-opacity\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("video_url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">more</a>\n            </div>\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <a rel=\"nofollow\" target=\"_blank\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("image_link")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\" margin: 10px 5px; font-size:13px;background: #f3f3f3;width: 275px;line-height: 18px; float: left\">\n                <div style=\" height: 200px; text-align: center;overflow: hidden;\"><img style=\"width: 100%\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("></div>\n                <div style=\"padding: 8px 10px; \">\n                    <h4 style=\"color: #0088CC\"> ");
  stack1 = helpers._triageMustache.call(depth0, "image_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                    <div style=\"height: 90px; overflow: hidden;\">");
  stack1 = helpers._triageMustache.call(depth0, "image_desc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                </div>\n            </a>\n            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div style=\"font-size: 15px; font-weight: bold\"><a>");
  stack1 = helpers._triageMustache.call(depth0, "book_description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </a></div> \n        <div class=\"latestebook\"> <img alt=\"\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("book_image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("> \n            <div class=\"latestebook-control easing\">\n                <a rel=\"nofollow\" target=\"_blank\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("book_read_url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"new-btn\">Read</a> \n                <a rel=\"nofollow\" target=\"_blank\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("book_buy_url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"new-btn green-btn\">Buy</a> \n            </div>\n        </div> \n        ");
  return buffer;
  }

  data.buffer.push("\n<!--EDIT MODE-->\n");
  stack1 = helpers['if'].call(depth0, "controller.editingAbout", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["addCollection"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div id=\"login_lightbox\" class=\"blur\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "profileCanel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n            <div class=\"select-profile-save\" style=\"top: 50px;\">\n                <div class=\"\" style=\"height: auto; font-size: 13px; font-weight: bold; overflow: auto; overflow-x:hidden; \">\n                    ");
  stack1 = helpers.each.call(depth0, "controller.profiles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div class=\"choose-exist-collection easing\" style=\"width: auto;line-height: 27px; padding: 0 20px;border-bottom: 1px solid #ddd;border-top: 1px solid #fff;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseProfile", "profile_name", "profile_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                         <a class=\"exist-name easing\"> ");
  stack1 = helpers._triageMustache.call(depth0, "profile_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                    </div>\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div id=\"login_lightbox\" class=\"blur\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collectionSwitch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n            <div class=\"add-collection_select-collection\" style=\"\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("newCollectionName"),
    'id': (""),
    'class': ("collect_newcollection-name"),
    'placeholder': ("Create new Collection")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("   \n\n                <div type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewCollection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"new-btn green-btn\" style=\"vertical-align:middle;top:0;\">Create</div>\n\n\n\n                <div style=\"margin:10px; font-size: 16px; font-weight: bold; overflow: auto; overflow-x:hidden; width: 93%;height: 150px;\">\n\n                    ");
  stack1 = helpers['if'].call(depth0, "HubStar.isProfile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                </div>\n                <div class=\"new-btn\" style=\"float: right;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collectionSwitch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                     Cancel\n            </div>\n        </div>\n\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                    ");
  stack1 = helpers.each.call(depth0, "HubStar.profileCollection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div class=\"choose-exist-collection easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseRecord", "title", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                         <a class=\"exist-name easing\"> ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                    </div>\n                    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    ");
  stack1 = helpers.each.call(depth0, "controller.collections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }

  data.buffer.push("\n<div id=\"login_lightbox\" class=\"blur_black\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n<div id =\"savePhoto\"class=\"t-style-box\" style=\"z-index: 1002; position: relative;border-radius: 3px;\">\n\n    <div style=\"margin: 0 0 20px; position: relative; background-color: #f3f3f3; height: 45px;border-bottom: 1px solid #ddd;border-radius: 3px 3px 0 0;\">\n        <div style=' color: #555; font-size: 18px; font-weight: bold; text-align: center; line-height: 45px;'>Save to \n\n            <div class=\"\" style=\"display:inline-block;cursor: pointer;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "profileSwitch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                 ");
  stack1 = helpers._triageMustache.call(depth0, "controller.selectedProfile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                 &nbsp;<i class=\"icon-caret-down\"></i>\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "controller.selectionProfile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n\n        <div class=\"exit\" style=\"float: right; position: relative; top: -46px;\">\n            <div class=\"closeview\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-remove\"></i>\n            </div> \n        </div>  \n    </div> \n\n    <div class=\"contactmebox-wapper\" style=\"width: 500px;height: 190px;font-size: 13px;margin: 0 20px;\">\n        <div style=\"display:inline-block; \">\n\n            <div class=\"new-btn\" style=\"display:block;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collectionSwitch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'text': ("controller.selectedTitle")
  },hashTypes:{'text': "STRING"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n                 ");
  stack1 = helpers._triageMustache.call(depth0, "controller.selectedTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                 &nbsp;<i class=\"icon-caret-down\"></i>\n            </div>\n            <div style=\"height: 150px;\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedDesc"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("collect_descriptionbox"),
    'placeholder': ("Say something about it!")
  },hashTypes:{'valueBinding': "STRING",'rows': "STRING",'cols': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'rows': depth0,'cols': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.selectionPop", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div style=\"display:inline-block;margin-left:15px; vertical-align: top;\">\n        <div style=\"width: 174px; height: 174px; overflow: hidden;padding: 10px;background-color: rgba(0,0,0,0.03);top: -4px;position: relative;\">\n            <img style=\"height: 154px;width: 154px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.selectedPhotoThumbnailUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"\" style=\"height: 45px;position: relative;border-top: 1px solid #ddd;top: -1px;border-radius: 0 0 3px 3px;overflow: hidden;\">\n    <div  class=\"message-btn easing\" style=\"height:45px;line-height: 45px; border-right: 1px solid #ddd;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-remove'>&nbsp;</k>Cancel</div>\n    <div class=\"message-btn easing\" style='height:45px;line-height: 45px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Submit</div>\n</div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["addVideo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"message-btn easing\" style=\"height: 40px;line-height: 40px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "videoCreate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ><k class='icon-ok'>&nbsp;</k>Post</div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"message-btn-x easing\" style=\"height: 40px;line-height: 40px;\"><k class='icon-ok'>&nbsp;</k>Post</div>\n        ");
  }

  data.buffer.push("\n<div class=\"popup-container\">\n\n<div id=\"login_lightbox\" class=\"popup-bg-fadeout\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "canel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n\n<div class=\"\" style=\"width: 510px;margin: 0 auto;margin-left: -255px;border-radius: 3px;overflow: hidden;border: 1px solid #eee; background-color: #fff;z-index: 11;position: absolute;top: 15%;left: 50%;\">\n    <div style=\"height: 50px;width: 100%;background-color: #f3f3f3;text-align: center;line-height: 50px;color: #555;border-bottom: 1px solid #ddd;\">\n        <i class=\"icon-film\" style=\"font-size: 18px;\">&nbsp;</i>\n        <span style=\"font-size: 20px; font-weight: bold\">Add Video</span>\n    </div>\n    <div style=\"margin: 20px;min-height: 400px;\">\n        <div style=\"height: 35px; width: inherit;border-bottom: 1px solid #ddd;\">\n            <div style=\"width: 400px;height:35px;\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("videoUrl"),
    'placeholder': ("Please insert YOUTUBE link or share url."),
    'class': ("no-effect")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n            <div class=\"message-btn easing\" style=\"right: 0;position: absolute;top: 69px;margin-right: 20px;width: 65px;height: 35px;line-height: 35px;border-left: 1px solid #ddd;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getVideoFromYoutube", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                Preview\n            </div>\n        </div>\n        <div style=\"width: 470px; min-height: 300px; margin: 15px 0; border: 2px dashed #eee;\">\n            <div class=\"radius-circle\" style=\"position: absolute;width: 70px;height: 70px;border: 2px solid #eee;line-height: 66px;text-align: center;color: #eee;font-size: 25px;margin: 120px auto;left: 0;right: 0;box-shadow: 0 0 10px #f3f3f3;\">\n                <i class=\"icon-play\" style=\"margin-left: 5px;text-shadow: 0 0 10px #f3f3f3;\"></i>\n            </div>\n            <img style=\"width: 470px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("videoImg")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n        </div>\n        <div style=\"width: 470px; background-color: #f3f3f3;padding: 10px; min-height: 50px;\">\n            <div style=\"font-size: 15px;font-weight: bold;margin-bottom: 5px;\">");
  stack1 = helpers._triageMustache.call(depth0, "videoTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            <div style=\"line-height: 15px; font-size: 11px;\">");
  stack1 = helpers._triageMustache.call(depth0, "videoTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "videoDesc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n\n    </div>\n    <div class=\"\" style=\"height: 41px;position: relative;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n        <div class=\"message-btn easing\" style=\"height: 40px;line-height: 40px;border-right: 1px solid #ddd;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "canel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        ");
  stack1 = helpers['if'].call(depth0, "videoid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n</div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["afterLogin"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <li class=\"ite\" ><a tabindex=\"-1\"  href=\"#/profiles/new\">\n                        <k class=\"icon-briefcase\" style=\"\">&nbsp;&nbsp;</k>\n                        <span>New Profile</span>\n                    </a></li>\n                ");
  }

  data.buffer.push("<div id=\"user-header-menu\" style=\"\">\n\n    <div class=\"user-face-size\" data-toggle=\"dropdown\" style=\"position: static;\">\n        <a class=\"user-face-size\" style=\"position: absolute;z-index: -1\"><img src=\"https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg\" class=\"profilepic_user \" style='width: 45px;height:45px;'/></a>           \n        <a class=\"user-face-size\" style=\"z-index: 1\"><img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.user.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"profilepic_user  easing\" style='width: 45px;height:45px'/></a>              \n    </div>\n\n    <ul id=\"user-dd-menu\" class=\"hideClass edit-object-ul\" style=\"padding: inherit;  width: 165px; right: 56px; position: relative; top:30px;\">\n        <li class=\"ite\" ><a tabindex=\"-1\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("controller.myUserProfile")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n                <k class=\"icon-user\" style=\"\">&nbsp;&nbsp;</k>\n                <span>My Profile</span>\n            </a></li>\n        <li class=\"ite\" ><a tabindex=\"-1\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("controller.myMessageBoard")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n                <k class=\"icon-envelope\" style=\"\">&nbsp;&nbsp;</k>\n                <span>Messages</span>\n            </a></li>\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_trends_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                <li class='ite'><a tabindex=\"-1\" href=\"http://about.trendsideas.com/\" target=\"blank\">\n                        <k class=\"icon-question-sign\" style=\"\">&nbsp;&nbsp;</k>\n                        <span>Help</span>\n                    </a></li>\n                <li class=\"ite\"><a tabindex=\"-1\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  >\n                        <k class=\"icon-off\" style=\"\">&nbsp;&nbsp;</k>\n                        <span>Log out</span> \n                    </a></li>\n\n    </ul>\n\n</div>\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.HeaderView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profiles", options) : helperMissing.call(depth0, "outlet", "profiles", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user", options) : helperMissing.call(depth0, "outlet", "user", options))));
  data.buffer.push("\n     ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "welcome", options) : helperMissing.call(depth0, "outlet", "welcome", options))));
  data.buffer.push("\n    ");
  stack1 = helpers.unless.call(depth0, "controller.isotherpage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n       \n    ");
  stack1 = helpers['if'].call(depth0, "HubStar.showDiscoveryBar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    \n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DiscoveryView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    \n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "render", "footer", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loginModal", options) : helperMissing.call(depth0, "render", "loginModal", options))));
  data.buffer.push("       \n\n");
  return buffer;
  }

  data.buffer.push("<div style=\"width: 100%;height: auto;position:relative;z-index:2;\">\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.islogin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile", options) : helperMissing.call(depth0, "outlet", "profile", options))));
  data.buffer.push("\n     ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "photos", options) : helperMissing.call(depth0, "outlet", "photos", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "articles", options) : helperMissing.call(depth0, "outlet", "articles", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "videoes", options) : helperMissing.call(depth0, "outlet", "videoes", options))));
  data.buffer.push("\n    \n\n   ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profileNew", options) : helperMissing.call(depth0, "outlet", "profileNew", options))));
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "HubStar.isLogin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "applicationFeedback", options) : helperMissing.call(depth0, "render", "applicationFeedback", options))));
  data.buffer.push("\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.loginTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    \n    <div id=\"loading\" class=\"loading\" >\n        <div id=\"blurringTextG\">\n            <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n                C</div>\n            <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n                r</div>\n            <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n                t</div>\n            <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n                i</div>\n            <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n                n</div>\n            <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n                g</div>\n            <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n                y</div>\n            <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n                o</div>\n            <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n                u</div>\n            <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n                r</div>\n            <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n                i</div>\n            <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n                d</div>\n            <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n                s</div>\n            <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n                s</div>\n            <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n                p</div>\n            <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n                c</div>\n            <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n                .</div>\n            <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n                .</div>\n            <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n                .</div>\n        </div>\n    </div>\n</div>\n\n\n<!--Background-texture-->\n<div style=\"background-color: #1E1D1B;width:100%;height:100%;position:fixed;z-index:0;top:0;left:0;\"></div>\n\n");
  stack1 = helpers['if'].call(depth0, "HubStar.checkLoginStatus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<script type=\"text/javascript\">\n\n    function DropDown(el) {\n        this.dd = el;\n        this.placeholder = this.dd.children('span');\n        this.opts = this.dd.find('ul.dropdown > li');\n        this.val = '';\n        this.index = -1;\n        this.initEvents();\n    }\n    DropDown.prototype = {\n        initEvents: function() {\n            var obj = this;\n            obj.dd.on('click', function(event) {\n                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                return false;\n            });\n            obj.opts.on('click', function() {\n                var opt = $(this);\n                obj.val = opt.text();\n                obj.index = opt.index();\n                obj.placeholder.text(obj.val);\n            });\n        },\n        getValue: function() {\n            return this.val;\n        },\n        getIndex: function() {\n            return this.index;\n        }\n    };\n    $(function() {\n        var dd1 = new DropDown($('.dropdown_test_1'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n        var dd4 = new DropDown($('.dropdown_test_4'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n    });\n    \n    \n \n    \n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["applicationFeedback"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id='appfeedback' style=''>\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.info", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.succeed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.failed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.warnning", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <div  class=\"fresh-profile-pic\"style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message\">\n        <k class=\"icon-info-sign\"></k>\n        <span class=\"feed-back\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n\n    <div class=\"fresh-profile-pic\" style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message fresh_succeed\">\n        <k class=\"icon-ok-sign\"></k>\n        <span class=\"feed-back\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <div class=\"fresh-profile-pic\" style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message fresh_failed\">\n        <k class=\"icon-remove-sign\"></k>\n        <span class=\"feed-back\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <div class=\"fresh-profile-pic\" style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message fresh_warnning\">\n        <k class=\"icon-exclamation-sign\"></k>\n        <span class=\"feed-back\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.feedback", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["article"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div style=\"margin-bottom: 5px;\">\n        <span class=\"hover-opacity easing\" style=\"float: right; cursor:pointer;\">           \n            <i class=\"icon-double-angle-left\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setCaption", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i>                             \n        </span>\n    </div>\n    <div class=\"caption-text\" style=\"width: 300px;font-size: 13px;line-height: 16px;\">");
  stack1 = helpers._triageMustache.call(depth0, "caption", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div style=\"margin-bottom: 5px;\">\n        <span class=\"hover-opacity easing\" style=\"float: right; cursor:pointer;\">\n            <i class=\"icon-double-angle-right\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setCaption", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i>                      \n        </span>\n    </div>\n    <div class=\"caption-text\" style=\"width: 300px;font-size: 13px;line-height: 16px;\">");
  stack1 = helpers._triageMustache.call(depth0, "caption", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n    <div class=\"readbtn new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkReading", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n        Read more\n    </div>\n    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n    <div class=\"closeReadbtn new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkClosed", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n        Close\n    </div>\n    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div>\n    <div>\n        <div class=\"object-collapes-title\" >\n            <div class=\"collapes-title_inner\">\n                Credit List\n            </div>\n        </div> \n\n    </div>\n\n\n\n\n    <div class=\"collapes-container\"  id=\"article_action\" style=\"display:block;\">\n        <div class=\"collapes-container_inner\">\n            ");
  stack1 = helpers.each.call(depth0, "articleResouce.credits", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n\n");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"article-text\">\n                <a style=\"font-weight: bold\">");
  stack1 = helpers._triageMustache.call(depth0, "credits_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(":</a>\n                <span style=\"font-size: 13px\">");
  stack1 = helpers._triageMustache.call(depth0, "credits_text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></div>\n\n            ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"comment-item\">\n\n                <div class=\"comment-position\">\n                    <a class=\"profilepic-comment-container\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                        <img class=\"profilepic_comment\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("commenter_profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                    </a>\n                    <div style=\"\">\n                        <div class=\"comment-namentime\">\n                            <a class=\"comment-username\"  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>                  \n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n\n                        <div class=\"comment-content\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            <!-- for +someone into the conversation-->\n                            <span>\n                                <span></span>\n                                <a></a>\n                            </span>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <span class=\"edit-comment easing\">\n                                <i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>                 \n                                <i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n                            </span>\n                            ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("   \n            ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"objectview-wrapper this-is-an-article\" >\n\n    <div class=\"objectview-left article-objectview-left\">\n        ");
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"top-controlbar easing\" >\n            <!--            <div class=\"icon-on-black\" style=\"left: 8px;\"><i class=\"icon-thumbs-up\"></i></div>-->\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Save this photo to your own collection.\" style=\"position:relative;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-folder-close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i>\n                <span class=\"pretooltip\">\n                    Save\n                </span>          \n            </div>\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\"></i><span class=\"pretooltip\">Share</span> \n            </div>\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_1\" style=\"width: 150px; margin: 0 auto; left: 70px;padding: 0\">\n                <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n<script type=\"text/javascript\">\n    (function(d) {\n        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');\n        p.type = 'text/javascript';\n        p.async = true;\n        p.src = '//assets.pinterest.com/js/pinit.js';\n        f.parentNode.insertBefore(p, f);\n    }(document));\n</script>\n<!--    <div class=\"icon-on-black\" style=\"height: 44px;position: absolute;width: 44px;\"><i class=\"icon-share-alt\"></i></div>     -->\n<div class=\"closeview\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n    <i class=\"icon-remove\"></i>\n</div>\n</div>\n\n<div class=\"mainfeature\">\n    <div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></div>\n    <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></div>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.PhotoDisplayAreaView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n\n\n<div class=\"caption-container\" id=\"caption_action\">\n    ");
  stack1 = helpers['if'].call(depth0, "HubStar.readCaption", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n<!--THIS IS THE ALBUM BOX-->\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ShowAlbumView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<!--THIS IS THE ALBUM BOX-->\n\n<div class=\"bottom-controlbar easing\" >\n    <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n    <div class=\"icon-on-black\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" style=\"display:inline-block; vertical-align: top; position:relative; left:44px;\">\n        <i class=\"icon-arrow-left\"></i>\n    </div>\n    <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px; display:inline-block; vertical-align: top; position:relative;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupAibum", "controller.selectedPhoto.id", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n        <i class=\"icon-th\"></i>\n    </div>\n    <div class=\"icon-on-black\" style=\"left: 44px;position: relative;vertical-align: top;display: inline-block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n        <i class=\"icon-arrow-right\"></i>\n    </div>\n    <div class=\"text-on-black\" style=\"left: 88px; top:0;position: relative;display: inline-block;vertical-align: top;\"> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.image_no", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "content.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\n</div>\n\n\n</div>\n\n\n\n<div class=\"objectview-right  article-objectview-right\" >\n\n    <!-- USER SECTION -->\n    <div style=\"cursor: pointer;\">\n        <div class=\"object-poster easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <div class=\"profilepic-container\" >                   \n                <a href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.megaResouce.creator_profile_pic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"profilepic\"/></a>                              \n            </div>\n            <div class=\"poster_user\">\n                <a class=\"poster-name\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "controller.megaResouce.owner_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </div>\n\n            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                <a class=\"contactmeicon easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n            </div>\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "controller.contact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n    </div>\n\n    <!-- OBJECT CONTROLL SECTION -->\n    <div class=\"collapes-container\"  style=\"display:block;border-top: 1px solid #f3f3f3;\">\n        <div class=\"collapes-container_inner\" style=\"padding: 0; height: 45px;\">\n\n\n            <div  class=\"square-button hint--rounded hint--bottom\"  data-hint=\"Like this Idea!\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                  <i class=\"icon-thumbs-up\">&nbsp;<span style=\"font-size: 11px;\">");
  stack1 = helpers._triageMustache.call(depth0, "megaResouce.likes_count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>&nbsp;</i>\n            </div>\n\n\n            <div class=\"square-button hint--rounded hint--bottom\"  data-hint=\"Add to your own collection.\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-folder-close\" >&nbsp;</i>\n            </div>\n\n            <div class=\"square-button hint--rounded hint--bottom\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\" >&nbsp;</i>\n            </div>\n\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_2\" style=\"width: 170px; right: 635px; position: absolute; top: 120px;\">\n                <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n</div>\n</div>\n\n\n\n\n<!--THIS IS THE ARTICLE AND CAPTION SECTION-->\n\n\n\n<div class=\"object-collapes-title\" >\n    <div class=\"collapes-title_inner\">\n        Article\n    </div>\n\n    ");
  stack1 = helpers.unless.call(depth0, "view.readContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n\n<div class=\"collapes-container\"  id=\"article_action\" style=\"display:block;\">\n    <div class=\"collapes-container_inner\">\n        <div class=\"article-title\" >");
  stack1 = helpers._triageMustache.call(depth0, "controller.articleResouce.article_headline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"article-text\" id=\"article_text_action\" style=\"display:block; height: 210px;overflow: hidden;\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.articleResouce.article_body", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>            \n        <div id =\"read_more_cue\" class=\"article-text\" style=\"display:block;\">......</div>\n    </div>\n</div>\n\n\n\n\n\n\n<!-- OBJECT CREDIT LIST SECTION -->\n");
  stack1 = helpers['if'].call(depth0, "controller.isCreditListExist", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n<!-- OBJECT DISCUSSION SECTION -->\n<div>\n    <div class=\"object-collapes-title\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n        <div class=\"collapes-title_inner\">\n            Discussion\n        </div>\n        <span class=\"show-comment_inner\">\n            <span class=\"comment-amount\" > ");
  stack1 = helpers._triageMustache.call(depth0, "controller.article.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </span>\n        </span>\n        <div class=\"dropdownicon\">\n            <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n        </div>      \n    </div>\n\n\n\n    <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n        <div class=\"collapes-container_inner\" style=\"padding: 0;margin: 0;width: 100%;\">\n            <div  style=\"width: 98%;padding: 15px 10px;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n                <div style=\"margin:0 auto; padding: 0 0 0 50px;\">\n                    <a>\n                        <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; z-index: 1\" src=\"http://develop.devbox.s3.amazonaws.com/profile_pic/default/defaultpic1.jpg\" /> \n                        <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0;z-index: 2\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.currentUser.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                        <div class='user-says-angle-before' style=\"left: 51px;\"></div>\n                        <div class='user-says-angle-after' style=\"left: 49px;\"></div>\n                    </a>\n\n                    <div class=\"\" style=\"width: 100%; border-radius: 2px;border: 1px solid #ddd;background-color: #fff;\">\n                        <div   style=\"margin: 0;width: 100%; height:100px;\">\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("commentContent"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                        </div>\n\n                        <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n\n                            <div class=\"message-btn easing\" style='width: 100%'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post </div>\n\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n            ");
  stack1 = helpers.each.call(depth0, "controller.article.comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n</div>\n\n\n\n\n</div>\n\n\n</div>\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["beforeLogin"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("          \n\n\n\n\n\n\n<ul class=\"login_guest nav\"  style=\"top: 26px; font-size: 15px; margin: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n    <li class=\"easing \" href=\"#\" style=\"font-weight: bold\">Login</li>\n</ul>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["camera"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n\n\n\n\n");
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div id=\"myCarousel\" class=\"carousel\" style='z-index: 1;'>\n    <div style=\"background: url('../../../images/shadowontop.png') repeat-x;position: absolute;top: 620px;z-index: 1000;width: 100%;height: 30px;\"></div>\n    <!-- Carousel items -->\n    <div class=\"carousel-inner\" style=\"min-width:1260px\">\n        <div class=\"active item\"><img src=\"http://s3.hubsrv.com/trendsideas.com/slide_img/kichen_a.jpg\"></div>\n        <div class=\"item\"><img src=\"http://s3.hubsrv.com/trendsideas.com/slide_img/kichen_b.jpg\"></div>\n\n    </div>\n    <!-- Carousel nav -->\n    <a id=\"slider-control\" class=\"icon-angle-left\" href=\"#myCarousel\" data-slide=\"prev\" style=\" float: left;left: 5%;\"></a>\n    <a id=\"slider-control\" class=\"icon-angle-right\" href=\"#myCarousel\" data-slide=\"next\"style=\"float: right;left: -5%;\"></a>\n\n    <div class=\"tile_img\">\n        <div id=\"dd3\" class=\"wrapper-dropdown-3\" tabindex=\"1\" style=\" width:270px; height:45px;left: 360px;\">\n            <div>\n                <div id=\"dropdown-cover\" class=\"dropdown_test_3\" style=\"float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -10.5px; padding-left: 35px;\">\n                    <div class=\"login-icon\">\n                        <i class=\"icon-facebook icon-large\">\n                        </i>\n                    </div>   \n                </div>\n                <div  id=\"dropdown-cover\" onclick=\"Facebook(650, 400);\" style=\"float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -10px;\">\n                    <div class=\"sign-in-with\" >Sign In with Facebook</div>\n                </div>\n                \n            </div>\n            <ul class=\"dropdown\" style=\"width:270px\">\n                <li  onclick=\"LinkedIn(650, 400);\" ><a style=\"color:rgb(0,172,237)\" href=\"#\"><i class=\"icon-linkedin-sign icon-large\"></i>Sign in with LinkedIn</a></li>\n                <li  onclick=\"Google(650, 400);\" ><a style=\"color:rgb(211,72,54)\" href=\"#\"><i class=\"icon-google-plus icon-large\"></i>Sign in with Google+</a></li>\n                <li  onclick=\"Yahoo(650, 400);\" ><a style=\"color:rgb(123,0,153)\" href=\"#\"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>\n                <li  onclick=\"QQ(650, 400);\" ><a style=\"color:rgb(62,59,62)\" href=\"#\"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>\n                <li  class='signup' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><a style=\"color:rgb(0,153,68)\" href=\"#\"><i class=\"icon-envelope icon-large\"></i>Sign in with Email</a></li>\n            </ul>\n        </div>\n        <div class=\"title_text\" >\n            <p style=\"font-size: 42px; font-weight: bold; line-height: 50px;\">\n                YOUR ONLINE RESOURCE FOR INSPIRATIONAL PRODUCTS, SERVICES & IDEAS\n            </p>\n            \n            <p style=\"line-height: 20px; width: 900px;left: 100px;position: relative;\">\n                Hundreds of videos, thousands of articles and tens of thousands of high quality images from around the world showcasing: Architecture, Kitchen Design, Bathroom Design, Interiors, Landscape Design and Commercial Design. \n            </p>\n        </div>\n    </div>\n\n</div>\n\n<!--<div style=\"position: relative; height: 400px; width: 100%;\"></div>-->\n\n<script type=\"text/javascript\">\n\n\n                    function DropDown(el) {\n                        this.dd = el;\n                        this.placeholder = this.dd.children('span');\n                        this.opts = this.dd.find('ul.dropdown > li');\n                        this.val = '';\n                        this.index = -1;\n                        this.initEvents();\n                    }\n                    DropDown.prototype = {\n                        initEvents: function() {\n                            var obj = this;\n\n                            obj.dd.on('click', function(event) {\n                                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                                return false;\n                            });\n                            obj.opts.on('click', function() {\n                                var opt = $(this);\n                                obj.val = opt.text();\n                                obj.index = opt.index();\n                                obj.placeholder.text(obj.val);\n                            });\n                        },\n                        getValue: function() {\n                            return this.val;\n                        },\n                        getIndex: function() {\n                            return this.index;\n                        }\n                    };\n\n                    $(function() {\n\n                        var dd3 = new DropDown($('.dropdown_test_3'));\n                        $(document).click(function() {\n                            $('.wrapper-dropdown-3').removeClass('active');\n                        });\n\n                    });\n\n                    function setDomain() {\n\n                        var api_url = document.domain;\n                        var api_domain_start_pos = api_url.indexOf('.');\n                        var api_url = api_url.slice(api_domain_start_pos);\n\n                        return api_url;\n                    }\n                    function Facebook(popupWidth, popupHeight) {\n\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Facebook#_=_\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n\n\n\n                    }\n                    function Yahoo(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Yahoo\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function QQ(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=QQ\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function Sina(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Sina\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function LinkedIn(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=LinkedIn\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function Google(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Google\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight * 1.5 + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n\n\n\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["collections"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"box style-box t-style-box col2\" id=\"addNew\" style=\"z-index: 0\">\n\n    <div id=\"uploadObject\"  >\n         <div class=\"add-new-object-hoverarea easing\">\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n\n        </div>\n    </div>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<script>\n\n    $(function() {\n    var $container = $('#masonry_user_container');\n    window.setTimeout(function() {\n    $container.masonry();\n    $container.masonry('reload');\n    }, 10);\n    });\n\n</script>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n<div class=\"box col2 style-box t-style-box\">\n    <div class=\"masonry-object Targeting_Object_front\"  id=");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n        <a class=\"album-description-hoverarea easing\" href=\"#/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.Id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("/collections/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToCollectionPhoto", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n");
  stack1 = helpers['if'].call(depth0, "desc", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n        <div class=\"albumcover-container\"  > \n            <div class=\"\">\n                <img class=\"albumcover\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("cover")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />     \n            </div>\n\n        </div>\n        <div class=\"album-info\">\n            <div class=\"album-info_name\"><a href=\"#/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.Id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("/collections/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"><i class=\"icon-picture\" >&nbsp;</i>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></div>\n            <div class=\"album-info_content\">\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                <span><a href=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToCollectionPhoto", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> </a> photos</span>\n                <span><img src=\"../../images/list-doc.png\"/>");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created_at", options) : helperMissing.call(depth0, "date", "created_at", options))));
  data.buffer.push("</span>               \n            </div>\n        </div>\n    </div>\n    <div id=\"Targeting_Object_back\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': ("getCollectionId")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n</div>\n<script>\n\n    $(function() {\n    var $container = $('#masonry_user_container');\n    window.setTimeout(function() {\n    $container.masonry();\n    $container.masonry('reload');\n    }, 210);\n    });\n\n</script>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n               <table class=\"album-description\" cellpadding=\"0\" cellspacing=\"0\">\n                   <tr>\n                       <td valign=\"middle\"><div>");
  stack1 = helpers._triageMustache.call(depth0, "desc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></td>\n                   </tr>\n               </table> \n\n                <table class=\"album-description-bg\" cellpadding=\"0\" cellspacing=\"0\">\n                   <tr>\n                       <td valign=\"middle\"><div>");
  stack1 = helpers._triageMustache.call(depth0, "desc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></td>\n                   </tr>\n               </table> \n\n");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <div class=\"edit-btn edit-collection-btn easing hint--left hint--rounded\" data-hint=\"Edit collection info.\">\n                    <i class=\"icon-cog\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editCollectionButton", "id", "title", "desc", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],data:data})));
  data.buffer.push(" ></i>\n\n         </div>\n                ");
  return buffer;
  }

  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n");
  stack1 = helpers.each.call(depth0, "collections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"comment-item comment-frame\" id=\"commentItem_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"display: block\">\n\n                <div class=\"comment-position\" style=\"\">\n                    <a class=\"profilepic-comment-container\" style=\"\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                       <img class=\"profilepic_comment\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("commenter_profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                    </a>\n                    <div style=\"\">\n\n                        <div class=\"comment-namentime\">\n                            ");
  stack1 = helpers['if'].call(depth0, "getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            <a class=\"comment-username\"  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                               ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n                        </a>\n                        <div class=\"posttime-container\">\n                            <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                        </div>\n                    </div>\n\n\n                    <div class=\"comment-content\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <span class=\"edit-comment easing\">\n                                <i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>                 \n                                <i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n                            </span>\n                            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"comment-item\" id=\"commentItemIn_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"display: block\">\n\n            <div class=\"comment-position\">\n                <a class=\"profilepic-comment-container\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                   <img class=\"profilepic_comment\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("commenter_profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        ");
  stack1 = helpers['if'].call(depth0, "getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        <a class=\"comment-username\"  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                           ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n                    </a>\n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                    </div>\n                </div>\n\n                <div class=\"comment-content\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                </div>\n\n            </div>\n        </div>\n\n    </div>\n    <div  id=\"commentEdit_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"display: none\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("       \n    </div>\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <span class=\"edit-comment easing\">\n                            <i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>                 \n                            <i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n                        </span>\n                        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"hover-opacity easing\" style=\"height: 20px; width: 100%; background-color: #f3f3f3;text-align: center;color: #555; border-top: 1px solid #ddd;cursor: pointer\">  \n    <div id=\"showMoreComment_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"display: inline-block; cursor: pointer\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeMore", "model.id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n        <span style=\"font-size: 11px;font-weight: bold\">show all comments &nbsp; ");
  stack1 = helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <i class=\"icon-caret-down show-comment_inner\" ></i>   \n    </div>\n    <div id=\"closeComment_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"    style=\"display: none;cursor: pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMore", "model.id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n        <span style=\"font-size: 11px;font-weight: bold\">hide comments &nbsp; ");
  stack1 = helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <i class=\"icon-caret-up show-comment_inner\" ></i>\n    </div>\n</div>\n");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n<div class=\"masonry-object_interact\" >\n\n    <div class=\"reply-comment-frame\"  style=\"padding: 15px;\">\n        <div style=\"margin:0 auto; padding: 0 45px 0 0;\">\n            <a  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.currentUser.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -45px 0 0; margin-top: 0; z-index: 1\" src=\"http://develop.devbox.s3.amazonaws.com/profile_pic/default/defaultpic1.jpg\"  /> \n                <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -45px 0 0; margin-top: 0; z-index: 2\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.currentUser.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  /> \n                <div class='user-reply-angle-before' style=\"right: 47px;\"></div>\n                <div class='user-reply-angle-after' style=\"right: 45px;\"></div>\n            </a>\n            <div class=\"reply-comment-container\" style=\"width: 100%;height: 32px;\">\n                <div id =\"commentnew_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"style=\"margin: 0;width: 210px; height: 30px;float: left;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchAreaTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'class': ("no-resize"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                </div>\n                <div style=\"float: right;height: 34px;position: relative;\">\n\n                    <div class=\"message-btn easing\" style='width: 30px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComment", "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                         <k class='icon-ok'></k>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n\n    <div id=\"commentData_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"\" style=\"/*display: none;*/border-top: 1px solid #ddd;\">\n        <div id=\"commentScrollBar_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"comment-scroll-bar\" >\n            ");
  stack1 = helpers.each.call(depth0, "model.comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n</div>\n</div>\n");
  stack1 = helpers['if'].call(depth0, "model.showComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.isThumbUped || (depth0 && depth0.isThumbUped),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "model.people_like", "model.id", options) : helperMissing.call(depth0, "isThumbUped", "model.people_like", "model.id", options))));
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"head controlbtn-field\">\n        <div style=\"position: relative; text-align: center;\">\n            <div class=\"panelcircle radius-circle\" style=\"\">1</div>\n            <div class=\"panelcircle radius-circle\" style=\"background-color: #aaa\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSendingEmailProcess", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >2</div>\n            <div style=\"width: 300px; height: 2px; border-radius: 20%;background-color:#ccc;position: absolute;margin: auto;left: 0;right: 0;top: 19px;z-index: 0;\"></div>\n            <div style='font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);position: relative;top: 10px;right: 87px;font-weight: bold;margin-bottom: 10px;'> Send a message.</div>\n        </div>\n    </div>\n\n    <div class=\"head\" style='padding-bottom: 0;'>\n        <div class=\"poster_user\" >\n            <div style=\"display: block; font-size: 16px; font-weight: bold; margin-bottom: 5px;\">\n                <span style=\"display: inline-block;margin-right: 5px;\">Send an Email to</span>\n                <a style=\"max-width: 240px; display: inline-block; overflow: hidden; text-overflow: ellipsis;\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.selectedMega.owner_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </div>\n            <div style=\"display: block;\">\n                ");
  stack1 = helpers.unless.call(depth0, "controller.isDisplayNameEditable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <a style=\"display: inline-block; cursor: pointer;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEditable", "Name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "editNameStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </div>\n            <div style=\"display: block; margin-bottom: 15px;\">\n                ");
  stack1 = helpers.unless.call(depth0, "controller.isDisplayEmailEditable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <a style=\"display: inline-block;cursor: pointer;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEditable", "Email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "editEmailStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </div>\n        </div>\n        <div style=\"float: right;position: relative; display: inline-block; vertical-align: top;margin: 5px 0;\">\n            <a href=\"#\"><img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.owner_profile_pic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"profilepic\"/></a>              \n        </div>\n        <div>\n            <span style=\"display: inline-block; margin-right: 10px;\">Subject:</span>\n            <div style=\"display: inline-block; width: 378px; vertical-align: middle;\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.emailSubject")
  },hashTypes:{'valueBinding': "STRING"},hashContexts:{'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <span style=\"display: inline-block;margin-right: 5px;\">From: ");
  stack1 = helpers._triageMustache.call(depth0, "controller.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("controller.displayName"),
    'class': ("lineuptextbox")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <span style=\"display: inline-block;margin-right: 5px;\">Email: ");
  stack1 = helpers._triageMustache.call(depth0, "controller.displayEmail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchAreaTextFieldView", {hash:{
    'valueBinding': ("controller.displayEmail"),
    'class': ("lineuptextbox")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"head controlbtn-field\">\n        <div style=\"position: relative;margin-bottom: 20px;text-align: center;\">\n            <div class=\"panelcircle radius-circle\" style=\"background-color: #aaa\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "proviousSendingEmailProcess", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">1</div>\n            <div class=\"panelcircle radius-circle\" >2</div>\n            <div style=\"width: 300px; height: 2px; border-radius: 20%;background-color:#ccc;position: absolute;margin: auto;left: 0;right: 0;top: 19px;z-index: 0;\"></div>\n            <div style='font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);position: relative;top: 10px;left: 90px;font-weight: bold;margin-bottom: 10px;'>Help us help you.</div>\n        </div>\n    </div>\n    ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n            <table style=\"padding: 0 20px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;\">\n                <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                    <tr>\n                        <td>Project Category:</td>\n                        <td>\n                            <div class=\"new-btn\" style=\"display: block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownCategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownCategory\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.projectCategorySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "controller.projectCategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Project Timeframe:</td>\n                        <td> \n                            <div class=\"new-btn\" style=\"display: block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownTimeframe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownTimeframe\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.timeframeSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "controller.projectTimeframeDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Project Budget:</td>\n                        <td> \n                            <div class=\"new-btn\" style=\"display: block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownBudget", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownBudget\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.projectBudgetSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "controller.projectBudgetDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Project Experience:</td>\n                        <td>\n                            <div class=\"new-btn\" style=\"display: block;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownExperience", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownExperience\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.projectExperienceSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "controller.projectExperienceDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                </tbody>\n            </table>    \n\n            <span style='color: #555;text-align: right;cursor: default;font-size: 15px;float: left;margin: 5px 0 0 55px;'> I need help on: (Please choose your category)</span>\n\n            <ol  class=\"checkbox-columncontainer\" style=\"margin: 20px 0 10px 20px;max-height: 170px;overflow: auto;\">\n                ");
  stack1 = helpers['if'].call(depth0, "controller.showCate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ol>\n\n\n\n            ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \n                ");
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <li class=\"checkbox-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkedAction", "list_id", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n\n                    <input type=\"checkbox\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("list_id"),
    'checked': ("isSelection")
  },hashTypes:{'id': "STRING",'checked': "STRING"},hashContexts:{'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"css-checkbox\"   >\n                    <label for=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" name=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"css-label lite-blue-check ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">");
  stack1 = helpers._triageMustache.call(depth0, "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n\n\n                </li>\n                ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n\n        <div style=\"display: block;padding: 5px 0px;\">\n            <div>\n                <span style=\"display: inline-block; margin-bottom: 5px;\">Message:</span>\n                <div style=\"margin-bottom: 10px; width: 100%; height: 200px;resize: none;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.emailBody"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("no-resize"),
    'placeholder': ("I saw your profile, I'd love to talk to you about my project, Please reply if you are interested..........")
  },hashTypes:{'valueBinding': "STRING",'rows': "STRING",'cols': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'rows': depth0,'cols': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n                </div>\n            </div>\n        </div>\n\n\n        ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <span style=\"float: left;margin: 15px;position: relative;left: 15px;\">\n            <div type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "proviousSendingEmailProcess", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  class=\"new-btn blue-btn\">\n                 <k class='icon-arrow-left'>&nbsp;</k>Previous</div>\n        </span>\n        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n        <span style=\"float: left;margin: 10px;position: relative;left: 15px;\">\n            <div>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("rememberMessage")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("Remember My Message</div>\n        </span>\n\n        ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "emailSend", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  class=\"new-btn green-btn\">Submit </div>\n            ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n            <div type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSendingEmailProcess", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"new-btn green-btn\">Next</div>\n            ");
  return buffer;
  }

  data.buffer.push("    \n\n<div id=\"dragarea\" style=\"position: relative;height: 20px; width: 100%;cursor: move\"></div>\n<div class=\"contactmebox-wapper\" style=\"width: 500px;font-size: 13px;background-color: white;z-index:11;\">\n\n\n    ");
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n    <div class=\"content\" style=\"border-radius: 0; padding: 15px 30px 0px;\">\n        <div class=\"contactme-table easing\" style=\"text-align: center;\">\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n        </div>\n\n\n        ");
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n\n    <div class=\"controlbtn-field\">\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n        <span class=\"controlbtn\">\n\n            <div type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeContact", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"new-btn\">Cancel</div>\n            ");
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["conversation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" \n    <div id=\"conversation_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "conversationID", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"class='each-conversation easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToConversation", "conversationID", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n\n         <div style=\"  padding: 15px 0 10px 95px;position: relative;\">\n            <div style='position: absolute;right: 35px;top: 40px;color: #888;' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeConversationItem", "conversationID", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-trash'></i></div>\n\n\n            <div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n                ");
  stack1 = helpers['if'].call(depth0, "one", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "two", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "three", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "four", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                \n            </div>\n\n\n            <div style=\"\">\n                <div class=\"comment-namentime\">\n                    <div class=\"namentime_position\">\n                        <span class=\"comment-username\"  >\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "names", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                        <div class=\"posttime-container\">\n                            <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"comment-content\" style=\" width: 400px; height: 35px; text-overflow: ellipsis;\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n\n    </div>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                \n                <img style=\"width: 45px;height: 45px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("onePic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                \n                <img style=\"width: 45px;height: 45px;float: left; margin-left: -22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("onePic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                <img style=\"width: 45px;height: 45px;float: left;vertical-align: top;margin-right: -22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("twoPic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                \n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("onePic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("twoPic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                <img style=\"width: 45px;height: 45px;vertical-align: top;margin-right: -22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("threePic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                \n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("onePic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("twoPic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;position: absolute;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("threePic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;position: absolute;top: 22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("fourPic")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div id=\"conversation_content\" class=\"\">\n    ");
  stack1 = helpers.each.call(depth0, "conversationContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n<!--one user-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 45px;height: 45px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n</div>\n\n\n<!--two users-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 45px;height: 45px;float: left; margin-left: -22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    <img style=\"width: 45px;height: 45px;float: left;vertical-align: top;margin-right: -22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n</div>\n\n\n<!--three users-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    <img style=\"width: 45px;height: 45px;vertical-align: top;margin-right: -22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n</div>\n\n<!--four users-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;position: absolute;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;position: absolute;top: 22.5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n</div>\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["conversationItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("       \n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "invitePeople", options) : helperMissing.call(depth0, "render", "invitePeople", options))));
  data.buffer.push("      \n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("     \n            <div  class=\"hint--rounded hint--bottom\" data-hint=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;margin:10px 5px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />                \n            </div>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div style=\"padding:5px 15px;background-color: #f4f6f8;\">\n            ");
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "isAdd", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div style=\"margin:10px 5px;margin-left: 10px;position: relative;width: 45px;display: inline-block;vertical-align: top;\"  data-hint=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToList", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >            \n                 <div class=\"invite-this-friend radius-circle easing\" style=\"opacity: .8;\"><k class=\"icon-minus\" ></k></div>\n                <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />                         \n            </div>\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div style='background-color: rgba(0,0,0,.2);max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;'>\n                    <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;;\">\n                </div>\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"message-btn easing\" style=''");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Send</div>\n                    ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"message-btn-x easing\" style=''><i class=\"spinner\">&nbsp;</i>Posting </div>\n                    ");
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"Message-Board_comment-item\" style=''>         \n            <div class=\"comment-position\">   \n                <a class=\"profilepic-comment-container\"   href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sender_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    <img class=\"profilepic_comment\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("sender_photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            <a class=\"comment-username\"   href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sender_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                            </div>\n                        </div>                      \n                    </div>\n                    <div class=\"comment-content\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n                        ");
  stack1 = helpers['if'].call(depth0, "isUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n\n            <script>\n                $(function() {\n                    var $container = $('#masonry_user_container');\n                    window.setTimeout(function() {\n                        $container.masonry();\n                        $container.masonry('reloadItems');\n                    }, 10);\n                });\n            </script>\n        </div>\n\n        ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div style='margin: 5px auto;max-width: 300px;max-height: 300px;float: left;'>\n                            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"border: 4px solid #fff;\"/>\n                        </div>\n                        ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isInvitePeople", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"Message-Board box\" style=\"\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\">\n            <div class=\"radius-circle\" style=\"float: left; margin: 12px; box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n                <img style=\"width: 45px;height: 45px;float: left;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n            </div>\n            &nbsp;Conversation\n        </div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Invite friends to this conversation!\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "invitePeople", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n             <span style=\"position: relative\">\n                <i class=\"icon-user\" style=\"\"></i>\n                <i class=\"icon-plus\" style=\"position: absolute;font-size: 8px;top: 8px;left: 10px;color: white;background-color: #888;height: 12px;width: 12px;line-height: 11px;border: 1px solid #fff;border-radius: 50%;\"></i>\n            </span>\n        </div>\n        <div class=\"create-conversation easing\" style=\"position: absolute;right: 0px;  width: 20px;text-align: center;line-height: 70px;\">\n            <div  id=\"showMoreComment\"  style=\"line-height: 45px;display:none;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeMore", {hash:{
    'target': ("controller"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-caret-down show-comment_inner\" ></i>   \n            </div>\n            <div id=\"closeComment\"   style=\"line-height: 45px;display: inline-block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMore", {hash:{
    'target': ("controller"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-caret-up show-comment_inner\" ></i>\n            </div>\n        </div>\n    </div>\n\n    <div style=\"position: relative; width: 100%; border-bottom: 1px solid #ddd;\">       \n        <div id=\"messageData\"  style=\"padding: 5px  15px;margin-left: 10px; display: inline-block;\" >\n            ");
  stack1 = helpers.each.call(depth0, "contentFollowerPhotoOld", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "isNewPeople", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div  style=\"width: 100%;padding: 20px 6.5%;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n        <div style=\"margin:0 auto; padding: 0 0 0 45px;\">\n            <a>\n                <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -45px; margin-top: 0;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                <div class='user-says-angle-before'></div>\n                <div class='user-says-angle-after'></div>\n            </a>\n\n            <div class=\"post-comment-container\">\n                <div   style=\"margin: 0;width: 100%; height:80px;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                </div>\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                    <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.isPosting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div  id=\"content_conversationItem_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class='Message-Board_comment-container' style=\" \">\n        ");
  stack1 = helpers.each.call(depth0, "conversationItemContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    </div>\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 10);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["deleteFunction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n<div class=\"blur_black\"></div>\n\n\n\n\n<div style=\"z-index: 11;background-color: white; border: 1px rgba(0,0,0,.6); border-radius: 3px;box-shadow: 0 0 20px 5px #aaa;  width: 500px;margin: 0 auto; padding: 20px 40px;position: fixed; top: 35%;left: 0;right: 0;\">\n    <i class=\"icon-exclamation-sign\" style=\"font-size: 35px;margin: auto;width: 40px;position: relative;left: 0;right: 0;display: block;text-align: center;margin-top: 5px;\"></i>\n    <div style=\" color: #333; font-size: 18px; font-weight: bold; line-height: 20px; text-align: center;margin: 10px 0;\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "controller.message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div style=\"font-weight: normal; font-size: 13px;text-align: center;\"> You won't be able to undo this!</div>\n    <div style=\"width:200px; margin: 20px auto 5px;text-align: center;\">       \n        <div class=\"new-btn red-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteSelection", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Remove</div>\n        <div  class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelDelete", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Cancel</div>\n    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["discoveryBar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.NavigatorView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n<div id=\"discovery_search_bar_wrapper\" style=\"z-index: 11;margin-bottom: -55px;\">\n\n    <div style=\"position: absolute; top: 140px; width: 300px;left:0; right: 0; margin: auto;\">\n        <img src=\"../../images/Welcometext.png\"/>\n    </div>\n\n    <div class=\"search-bar\" style=\"\">\n        <div id =\"navigator\" class=\"Nav-btn easing\" style=\"float: left;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownNavigator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-list\"></i></div>\n        ");
  stack1 = helpers['if'].call(depth0, "controller.isNavigatorDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"Search-box easing\" style=\"\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("search_string"),
    'id': ("search_business"),
    'class': ("no-effect hover-opacity easing"),
    'placeholder': ("Search by keyword")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            <div class=\"Nav-btn easing\" style=\"position: relative;float: right;border-radius: 0 3px 3px 0;top: -50px; right: -5px;border-left: 1px solid #ddd;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searching", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-search\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"popular-topics\" style=\"\">\n        <span style=\"float: left;color: white;font-family: Georgia, serif;font-style: italic;margin: 5px 10px;\">Most Popular Topics:</span>\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "New Homes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >NEW HOMES</div>\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Kitchens", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >KITCHEN</div>\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Bathrooms", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >BATHROOM</div>\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Renovations", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >RENOVATIONS</div>\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Outdoor Living", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >OUTDOOR LIVING</div>\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Interior", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >INTERIOR</div>\n\n    </div>\n\n</div>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["dropdownList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id=\"dropItem1\"  class=\"Dropdownstyle1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownCategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     ");
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n     <div  class=\"ite \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSelection", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"dropItem2\" class=\"Dropdownstyle1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownTimeframe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">1-2 months</div>\n    <div  class=\"ite \">Next 6 months</div>\n    <div  class=\"ite \">Within 12 months</div>\n    <div  class=\"ite \">1-2 years</div>\n    <div  class=\"ite \">Within 3 years</div>\n</div>\n");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"dropItem3\" class=\"Dropdownstyle1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownBudget", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Less than 5k</div>\n    <div  class=\"ite \">5k-10k</div>\n    <div  class=\"ite \">10k-50k</div>\n    <div  class=\"ite \">50k-100k</div>\n    <div  class=\"ite \">100k-250k</div>\n    <div  class=\"ite \">250k-500k</div>\n    <div  class=\"ite \">500k- 1M</div>\n    <div  class=\"ite \">1M+</div>\n</div>\n");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"dropItem4\" class=\"Dropdownstyle1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownExperience", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">First Time</div>\n    <div  class=\"ite \">Helped someone do this</div>\n    <div  class=\"ite \">Have done this once before</div>\n    <div  class=\"ite \">Experienced at this type of project</div>\n</div>\n");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"countryDropdown\" class=\"Dropdownstyle1\"  style=\"width: 450px;text-align: center; left: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "country", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n</div>\n");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"regionDropdown\" class=\"Dropdownstyle1\" style=\"width: 450px;text-align: center; left: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "region", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n </div>\n");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id=\"categoryDropdown\"  class=\"Dropdownstyle1\"  style=\"width: 225px; left: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n     ");
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id=\"subcategoryDropdown\" class=\"Dropdownstyle1\" style=\"width: 225px; left: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "subcategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n\n     ");
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n     <div  class=\"ite \" >");
  stack1 = helpers._triageMustache.call(depth0, "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"numberDropdown\" class=\"Dropdownstyle1\" style=\"width: 90px;left:0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n     <div class=\"ite easing\" style=\"\">09</div>\n    <div class=\"ite easing\" style=\"\">04</div>\n    <div class=\"ite easing\" style=\"\">03</div>\n    <div class=\"ite easing\" style=\"\">075</div>\n    <div class=\"ite easing\" style=\"\">071</div>\n    <div class=\"ite easing\" style=\"\">024</div>\n</div>\n");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"profilePackgetDropdown\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectCategoryDropdownType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Platinum</div>\n    <div  class=\"ite \">Gold</div>\n    <div  class=\"ite \">Silver</div>\n    <div  class=\"ite \">Bronze</div>\n</div>\n");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"geoDropdown\" class=\"edit-object-ul Dropdownstyle2\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.applicationCategoryDropdownType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     <div class=\"ite easing\" style=\"\">Global</div>\n     <div class=\"ite easing\" style=\"\">Australia</div>\n    <div class=\"ite easing\" style=\"\">New Zealand</div>\n    <div class=\"ite easing\" style=\"\">United States</div>\n    <div class=\"ite easing\" style=\"\">India</div>\n    <div class=\"ite easing\" style=\"\">China</div>\n    <div class=\"ite easing\" style=\"\">Asia</div>\n</div>\n");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"is_actvie\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectActiveDropdownType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">true</div>\n    <div  class=\"ite \">false</div>\n</div>\n");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div id=\"is_delete\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectDeleteDropdownType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">true</div>\n    <div  class=\"ite \">false</div>\n</div>\n");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id=\"profileCategoryDropdown\"  class=\"Dropdownstyle1\"  style=\"width: 260px; left: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n     ");
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id=\"profileSubcategoryDropdown\" class=\"Dropdownstyle1\" style=\"width: 260px; left: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "subcategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n\n     ");
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  }

  data.buffer.push("<!--<div id=\"login_lightbox\" class=\"blur\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "canelDropDown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>-->\n\n");
  stack1 = helpers['if'].call(depth0, "controller.projectCategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.projectTimeframeDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.projectBudgetDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.projectExperienceDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.countryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.regionDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.categoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.subcategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.numberDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.isPackgetDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.isGeoDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.isActiveDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.isDeleteDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.profileCategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.profileSubcategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<script language=\"javascript\">\n   \n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["editCollection"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n    <div id=\"createCollection\" style=' color: #333; font-size: 20px; font-weight: bold; text-align: center; margin: 5px 0 0;'>Create a Collection</div>\n\n    <div id=\"updateCollection\" style=' color: #333; font-size: 20px; font-weight: bold; text-align: center; margin: 5px 0 0; display: none' >Update a Collection</div>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n\n    <div id=\"createCollection\" style=' color: #333; font-size: 20px; font-weight: bold; text-align: center; margin: 5px 0 0;'>Add Partner </div>\n\n    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n        <div style=\"font-size: 16px;font-weight: bold;color: #555; line-height: 25px;\">Name*</div>\n        ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <div style=\"font-size: 16px;font-weight: bold;color: #555; line-height: 25px;\">URL*</div>\n        ");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("controller.newTitle"),
    'id': (""),
    'class': (""),
    'style': ("height:30px;"),
    'placeholder': ("e.g. Bedroom Design")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'style': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'style': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("currentAddPartnerPic"),
    'id': (""),
    'class': (""),
    'style': ("height:30px;"),
    'placeholder': ("e.g. http://beta.trendsideas.com/#/profiles/leo")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'style': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'style': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n        <div style=\"margin: auto; vertical-align: top;width: 80%;left: 0;right: 0;position: relative;\">\n            <div style=\"height: 180px; overflow: hidden;width: 100%;line-height: 180px;text-align: center;margin-top: 5px;\">\n                <img style=\"max-height: 100%; padding: 10px; background-color: rgba(0,0,0,0.03);\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("selectedPartnerPic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n            </div>\n        </div>\n\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n        <div style=\"font-size: 16px;font-weight: bold;color: #555; line-height: 25px;\">Description</div>\n        <div style=\"height: 150px;\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.newDesc"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("no-resize"),
    'placeholder': ("Add a short description to your Collection")
  },hashTypes:{'valueBinding': "STRING",'rows': "STRING",'cols': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'rows': depth0,'cols': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n\n\n        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div id=\"deletebtn\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteSelectedCollection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"new-btn red-btn\" style=\"right:0; display: none\">\n             <i class='icon-trash'></i>\n        </div>\n                    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div style=\"position: relative; right: 15px;margin-top: 8px;float: right;\">\n\n            <div id=\"uploadingObject\" class='new-btn' style=\"right: 0;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "returnCollection", "id", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Cancel</div>\n            <div id=\"createbtn\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  class=\"new-btn green-btn\" style=\"right:0;\">Create </div>\n            <div id=\"updatebtn\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateCollectionInfo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"new-btn green-btn\" style=\"right:0; display: none\">Update</div>\n\n        </div>\n        ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div style=\"float: right; margin: 5px 20px;\">\n            <div id=\"uploadingObject\" class='new-btn' style=\"right: 0;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "returnCollection", "id", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Cancel</div>\n            <div id=\"createbtn\" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  class=\"new-btn green-btn\" style=\"right:0;\">Add</div>\n        </div>\n        ");
  return buffer;
  }

  data.buffer.push("\n\n<div id=\"uploadArea\"  style=\"height: 510px;width: 570px;  display: none\">\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div  style=\" width: 80%;  margin: auto;\" id=\"clientAddCollection\">\n        ");
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    </div>\n    <div class=\"controlbtn-field\" style=\"margin-top: 0px;height: 60px;\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["editComment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border:1px solid #ddd;'>\n                <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n            </div>\n            ");
  return buffer;
  }

  data.buffer.push("\n    <div class=\"reply-comment-frame\"  style=\"padding: 15px;\">\n        <div style=\"margin:0 auto; padding: 0 45px 0 0;\">\n            <a  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -45px 0 0; margin-top: 0;\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.currentUser.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                <div class='user-reply-angle-before' style=\"right: 47px;\"></div>\n                <div class='user-reply-angle-after' style=\"right: 45px;\"></div>\n            </a>\n\n            <div class=\"reply-comment-container\" style=\"width: 100%;height: 32px;\">\n                <div id =\"reply_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"style=\"margin: 0;width: 210px; height: 30px;float: left;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'class': ("no-resize"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                </div>\n                <div style=\"right: 61px;height: 34px;position: absolute;\">\n                    <div  class=\"message-btn easing\" style=\"width:30px; border-right: 1px solid #ddd; border-left: 1px solid #ddd;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeCommentItem", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><k class='icon-remove'></k>\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n\n                    <div class=\"message-btn easing\" style='width: 30px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                         <k class='icon-ok'></k>\n                    </div>\n\n                </div>\n            </div>\n\n            <!--please disable the following div when it's got not content-->\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>");
  return buffer;
  
});

Ember.TEMPLATES["editMessage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>             \n                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n            </div>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "model.isUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                <div class='remove-comment-photo easing'  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeOriginalPic", "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>             \n                <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"max-width: 100%; max-height: 80px;\"/>\n            </div>\n            ");
  return buffer;
  }

  data.buffer.push("\n<div  style=\"width: 98%;padding: 15px 10px;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n    <div style=\"margin:0 auto; padding: 0 0 0 50px;\">\n        <a>\n            <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; \" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n            <div class='user-says-angle-before' style=\"left: 49px;\"></div>\n            <div class='user-says-angle-after' style=\"left: 47px;\"></div>\n        </a>\n\n        <div class=\"\" style=\"width: 100%; border-radius: 2px;border: 1px solid #ddd;background-color: #fff;\">\n            <div   style=\"margin: 0;width: 100%; height:100px;\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                    <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"message-btn easing\" style=''");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateMessage", "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["editReply"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n        <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border:1px solid #ddd;'>\n            <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", "model.reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>   \n\n            <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n        </div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "model.isUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border:1px solid #ddd;'>\n            <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeOriginPic", "model.reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>   \n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"max-width: 100%; max-height: 80px;\"/>\n        </div>\n\n        ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"reply-comment-frame\"  style=\"padding: 15px;border-bottom: 1px solid #ddd;\">\n    <div style=\"margin:0 auto; padding: 0 45px 0 0;\">\n        <a  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n            <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -45px 0 0; margin-top: 0;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n            <div class='user-reply-angle-before' style=\"right: 47px;\"></div>\n            <div class='user-reply-angle-after' style=\"right: 45px;\"></div>\n        </a>\n\n        <div class=\"reply-comment-container\" style=\"width: 100%;height: 32px;\">\n            <div id =\"editReply_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"margin: 0;width: 210px; height: 30px;float: left;\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("replyContent"),
    'class': ("no-resize"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n            </div>\n            <div style=\"float: right;height: 34px;position: relative;\">\n                <div  class=\"message-btn easing\" style=\"width:30px; border-right: 1px solid #ddd; border-left: 1px solid #ddd;\"><k class='icon-picture'></k>\n                    <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"message-btn easing\" style='width: 30px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateReply", "model.reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                     <k class='icon-ok'></k>\n                </div>\n            </div>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n</div>\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["edting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"head\"></div>\n<div class=\"content\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("profile_name")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \n\n    <div class=\"buttons\" style=\"display: inline-block; vertical-align: text-top;\">\n\n        <div  type=\"button\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n        <div  type=\"button\" class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exitEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["edtingAbout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"head\"></div>\n<div class=\"content\" id=\"about\">\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'class': ("fake")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("about"),
    'class': ("textarea")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto;right: 0;left: 85%;\">\n\n        <div  type=\"button\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeAbout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" > <i class=\"icon-ok icon-white\"></i></div>\n\n        <div  type=\"button\" class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exitAboutEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n    </div>\n\n</div>\n\n<script>\n    $('.fake').wysihtml5();\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"footer\">\n    <div class=\"footer_contentbox\">\n\n        <div style=\"text-align: center; padding: 55px 0; margin: 0 auto; font-size: 13px; width: 200px; \">\n            <img class=\"logonew\" style=\"height: auto; position: relative; top: 0; margin:0;width: 160px;\"  src =\"../../../images/landing-trends.png\"/>\n            <div style=\"padding-top: 15px;\">\n                <i class=\"socon icon-facebook-sign icon-3x\"></i>\n                <i class=\"socon icon-twitter-sign icon-3x\" style=\" padding: 0 27px;\"></i>\n                <i class=\"socon icon-rss icon-3x\"></i>\n            </div>\n        </div>\n\n    </div>\n</div><!-- footer -->\n\n<p id=\"back-top\">\n    <a href=\"#top\"><span></span>Back to Top</a>\n</p>");
  
});

Ember.TEMPLATES["googleMapPopup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n             <span id=\"routeModeSelection\">Transportation</span>\n             ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n             <span id=\"routeModeSelection\">");
  stack1 = helpers._triageMustache.call(depth0, "view.routeModeSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n             ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div id=\"routeGo\" class=\"message-btn easing\" style='width: 33%;height: 45px;line-height: 45px;border-radius: 0 0 3px 0;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "routeGo", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Get Directions <k class='icon-long-arrow-right'>&nbsp;</k></div>\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n            <div  class=\"message-btn-x easing\" style='width: 33%;height: 45px;line-height: 45px; border-radius: 0 0 3px 0;'>Get Directions <k class='icon-long-arrow-right'>&nbsp;</k></div>\n            ");
  }

  data.buffer.push("\n\n<div class=\"popup-container\">\n\n    <div id=\"google_pop\" class=\"popup-bg-fadeout\" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setGooglePopup", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></div>\n\n\n    <div  id =\"google_map_pop\" class=\"aside-container radius-rounded-corner box\" style=\"position: absolute; top: 15%; z-index: 10; margin: auto; left: 0px; right: 0px; width: 800px;height: 565px;background-color: #fff;border: 0;\" >\n       \n        <div id=\"\" class=\"enlarge-map easing\" style=\"z-index: 10; right: -45px; opacity: .9;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setGooglePopup", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ><k class=\"icon-remove\" ></k></div>\n        <div  id=\"map_canvas_pop\" class=\"\" style=\"border-radius:3px 3px 0 0; width: 800px; height: 425px; background-color: rgb(229, 227, 223); -webkit-transform: translateZ(0); position: relative; overflow: hidden;border-bottom: 1px solid #ddd; \" >\n\n\n        </div>\n        <div class=\"scrollbarGoogleMap\">\n            <div  id=\"directionsPanel\" style=\"display:none; position: absolute; width: 265px; direction: ltr; height: 425px; overflow: auto; overflow-x: hidden;right: 0px; top: 0px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); border-bottom: 1px solid #ddd;\" > \n            </div>        \n        </div>\n\n        <div style=\"margin: 15px 0 5px;\">\n            <div style=\"width: 2%;float: left;margin-left: 20px;margin-top: 5px;font-weight: bold;text-align: right;\">From:</div><div style=\"margin: 10px auto;border-bottom: 1px solid #ddd; width: 87%;left: 20px;position: relative;\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("fromAddress"),
    'placeholder': ("Enter your start address here"),
    'class': ("no-effect")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</div>\n            <div style=\"width: 2%;float: left;margin-left: 20px;margin-top: 5px;font-weight: bold;text-align: right;\">To:</div><div style=\"margin: 10px auto;border-bottom: 1px solid #ddd; width: 87%;left: 20px;position: relative;\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("toAddress"),
    'placeholder': ("To"),
    'class': ("no-effect")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</div>\n        </div>\n\n        <div class=\"\" style=\"height: 45px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n            <div class=\"message-btn easing\" style='width: 33%;height: 45px;line-height: 45px;border-radius: 0 0 0 3px;' value=\"Print map\" onclick=\"printmap('google_map_pop');\"><k class='icon-print'>&nbsp;</k>Print Map</div>\n \n          <div id =\"routeMode\" class=\"message-btn easing\" style=\"border: none; border-right: 1px solid #ddd;border-left: 1px solid #ddd; width: 34%;height: 45px;line-height: 45px;border-radius: 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownRoute", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n             ");
  stack1 = helpers['if'].call(depth0, "view.showTransportation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            <div id=\"routeModeDropdown\" class=\"hideClass Dropdownstyle1\" style=\" z-index: 1000; position: fixed;text-align: center;margin: 42px 264px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectRoute", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <li class=\"ite\" value=\"DRIVING\" >DRIVING</li>\n                <li class='ite' value=\"WALKING\">WALKING</li>\n                <li class='ite' value=\"BICYCLING\">BICYCLING</li>\n                <li class=\"ite\" value=\"TRANSIT\">TRANSIT</li>\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "fromAddress", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div  id=\"routeClear\" class=\"message-btn easing\" style='display:none;width: 33%;height: 45px;line-height: 45px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "routeClear", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-long-arrow-left'>&nbsp;</k>Clear</div>\n        </div>\n\n    </div>\n\n</div>\n\n<script>\n    function printmap(divName)\n    {\n        var printContents = document.getElementById(divName).innerHTML;\n        var originalContents = document.body.innerHTML;\n        document.body.innerHTML = printContents;\n        window.print();\n        document.body.innerHTML = originalContents;\n\n    }\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.NavigatorView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        <div id=\"login_detail\" style=\"position: relative;float: right;cursor: pointer;text-align: right;\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.AfterLoginView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n        <div id=\"Geo-Filter\" class=\"Geo-Filter easing\"  style=\"margin-right: 50px;font-size: 15px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "notification", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n             <i class=\"icon-bell-alt icon-large\"></i>\n            ");
  stack1 = helpers['if'].call(depth0, "isUnReadCountZero", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            \n        </div>\n\n\n\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div style=\"cursor: pointer;position: absolute;top: 20px;left: 15px;width: auto;padding: 0 5px 0 4px;height: 15px;background-color: red;line-height: 15px;border-radius: 2px;font-size: 11px;font-weight: bold;\">");
  stack1 = helpers._triageMustache.call(depth0, "unReadCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n        <div id=\"login_icon\" class=\"Geo-Filter\" style=\"position: absolute; right: 80px;\">\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.BeforeLoginView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n        </div>\n\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div style=\"position: relative; float: right; top: 55px; z-index: 100;\">\n            <div style=\"position: absolute;border-color: transparent transparent #f3f3f3 transparent;border-style: solid;border-width: 10px 10px 10px 10px;z-index: 0;\"></div>\n            <div style=\"position: absolute;border-color: transparent transparent #888 transparent;border-style: solid;border-width: 10px 10px 10px 10px;z-index: -1;\"></div>\n        </div>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notificationTop", options) : helperMissing.call(depth0, "render", "notificationTop", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"navbar\">\n\n\n    <div class=\"navbar-inner\">\n        <div class=\"brand\" >\n            <a href=\"/#\" > <img class=\"logonew\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showDiscoveryBar", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" style=\"position: relative; top: 0; margin:0;\" src=\"../../../images/landing-trends.png\"></a>\n\n<!--            <div style=\"position: relative;display: inline-block;top: 12px;font-weight: normal;font-style: italic;color: white;font-size: 11px;\">\n                <span>Beta</span> <span id=\"lastidentifie\">0.3-138</span>\n            </div>-->\n\n        </div>\n\n\n        <div id=\"top-about-menu\" class=\"top-about-menu\" style=\"display:block\">\n            <span><a style=\"color: #fff\" class=\"hover-opacity\" target=\"blank\" href=\"http://about.trendsideas.com/\">About</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/business/\">Business</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/learning-centre/\">Learning Centre</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/contact-us/\">Contact us</a></span>\n\n        </div>\n\n\n        <div id=\"search-bar\" class=\"search-bar-ontop\" style=\"display:none\">\n            <div id =\"navigator\" class=\"Nav-btn easing\" style=\"float: left;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownHeaderNavigator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-list\"></i></div>\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isHeaderNavigatorDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"Search-box easing\" style=\"\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("search_string"),
    'id': ("search_businesses"),
    'class': ("no-effect hover-opacity easing"),
    'placeholder': ("Search by keyword")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                <div class=\"Nav-btn easing\" style=\"position: relative;float: right;border-radius: 0 3px 3px 0;top: -75px; right: -5px;border-left: 1px solid #ddd;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searching", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                    <i class=\"icon-search\"></i>\n                </div>\n            </div>\n        </div>\n\n\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "HubStar.isLogin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n        <!-- user is logged in -->\n\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "isNotification", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div id=\"geo-filter\" class=\"Geo-Filter easing \" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "geoLocation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n             <i class=\"icon-angle-down icon-large\">&nbsp;</i>\n            <span style=\"font-weight: bold;font-size: 15px;\">");
  stack1 = helpers._triageMustache.call(depth0, "HubStar.geoLocation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.isGeoDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    </div>\n</div>\n\n\n\n\n<script type=\"text/javascript\">\n\n    $(document).ready(function() {\n        // left hiding menu bar\n\n        // hide #back-top first\n        $(\"#back-top\").hide();\n        $(window).scroll(function() {\n\n            if ($(this).scrollTop() > 150) {\n                $('#back-top').fadeIn();\n            } else {\n                $('#back-top').fadeOut();\n            }\n\n        });\n        $('#back-top a').click(function() {\n            $('body,html').animate({\n                scrollTop: 0\n            }, 800);\n            return false;\n        });\n    });\n\n\n\n\n\n\n    function setDomain() {\n\n        var api_url = document.domain;\n        var api_domain_start_pos = api_url.indexOf('.');\n        var api_url = api_url.slice(api_domain_start_pos);\n\n        return api_url;\n    }\n\n\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["htmlEditor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div id=\"wysihtml5-editor-toolbar\" style=\"background-color: #f3f3f3;border-bottom: 1px dashed #999;background-clip: padding-box;\">\n    <header>\n        <ul class=\"commands\">\n            <li data-wysihtml5-command=\"bold\" title=\"Make text bold (CTRL + B)\" class=\"command easing\"><i class=\"icon-bold editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"italic\" title=\"Make text italic (CTRL + I)\" class=\"command easing\"><i class=\"icon-italic editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"insertUnorderedList\" title=\"Insert an unordered list\" class=\"command easing\"><i class=\"icon-list-ul editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"insertOrderedList\" title=\"Insert an ordered list\" class=\"command easing\"><i class=\"icon-list-ol editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"createLink\" title=\"Insert a link\" class=\"command easing\"><i class=\"icon-link editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"insertImage\" title=\"Insert an image\" class=\"command easing\"><i class=\"icon-picture editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h1\" title=\"Insert headline 1\" class=\"command easing\"><i class=\"editor-icon\">H1</i></li>\n            <li data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h2\" title=\"Insert headline 2\" class=\"command easing\"><i class=\"editor-icon\">H2</i></li>\n            <li data-wysihtml5-command-group=\"foreColor\" class=\"fore-color\" title=\"Color the selected text\" class=\"command easing\"><i class=\"editor-icon\"> T </i>\n                <ul>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"silver\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"gray\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"maroon\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"red\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"purple\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"green\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"olive\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"navy\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"blue\"></li>\n                </ul>\n            </li>\n            <li data-wysihtml5-command=\"insertSpeech\" title=\"Insert speech\" class=\"command easing\"><i class=\"icon-microphone editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-action=\"change_view\" title=\"Show HTML\" class=\"action easing\"><i class=\"icon-code editor-icon\">&nbsp;</i></li>\n        </ul>\n    </header>\n    <div data-wysihtml5-dialog=\"createLink\" class=\"easing\" style=\"display: none;z-index: 10;opacity: .9\">\n        <div style=\"display: inline-block; margin: 0 10px;font-weight: bold; color: #888;\">\n            Link:\n            <input class=\"disabled-btn\" style=\"top:0\" data-wysihtml5-dialog-field=\"href\" value=\"http://\">\n        </div>\n        <a class=\"new-btn blue-btn\" data-wysihtml5-dialog-action=\"save\" style=\"top:0\">OK</a>&nbsp;<a class=\"new-btn\" data-wysihtml5-dialog-action=\"cancel\" style=\"top:0\">Cancel</a>\n    </div>\n\n\n    <div data-wysihtml5-dialog=\"insertImage\" class=\"easing\" style=\"display: none;z-index: 10;opacity: .9\">\n        <div style=\"display: inline-block; margin: 0 10px;font-weight: bold; color: #888;\">\n            Image: \n            <input class=\"disabled-btn\" style=\"top:0\" data-wysihtml5-dialog-field=\"src\" value=\"http://\">\n        </div>\n        <a class=\"new-btn blue-btn\" data-wysihtml5-dialog-action=\"save\" style=\"top:0\">OK</a>&nbsp;<a class=\"new-btn\" data-wysihtml5-dialog-action=\"cancel\" style=\"top:0\">Cancel</a>\n    </div>\n</div>\n\n\n<section>\n\n    <div class=\"wysihtml5_text-area\" style=\"overflow: hidden;width: 99%;\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("model.profile_about_us"),
    'id': ("wysihtml5-editor")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n\n</section>\n<script>\n\n    var editor = new wysihtml5.Editor(\"wysihtml5-editor\", {\n        toolbar: \"wysihtml5-editor-toolbar\",\n        stylesheets: [\"http://yui.yahooapis.com/2.9.0/build/reset/reset-min.css\", \"styles/editor.css\"],\n        parserRules: wysihtml5ParserRules\n    });\n\n    editor.on(\"load\", function() {\n        var composer = editor.composer;\n        composer.selection.selectNode(editor.composer.element.querySelector(\"br\"));\n    });\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"well\">\n    Welcome to Yeoman and Ember.js!\n</div>\n");
  
});

Ember.TEMPLATES["invitePeople"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div style=\"position: relative; width: 100%;text-align: center;height: 190px;padding-top: 70px;float: left;\">\n            <i class=\"spinner\">&nbsp;</i>\n        </div>\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"invite-friend hint--rounded hint--bottom\" data-hint=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToList", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n             ");
  stack1 = helpers['if'].call(depth0, "isAdd", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n        </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n             <div class=\"invite-this-friend radius-circle easing\" style=\"opacity: .8;\" ><k class=\"icon-minus\" ></k></div>\n            ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"invite-this-friend radius-circle easing\"><k class=\"icon-plus\" ></k></div>\n            ");
  }

  data.buffer.push("\n<div id=\"invite_box\" class=\"blur_black\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n\n<div id =\"invitepeople\" class=\"Message-Board\" style=\"z-index: 11; position: fixed; width: 545px; margin: 10px auto; border-radius:5px; overflow: hidden; background-color: rgb(255, 255, 255); top: 25%; left: 0px;display: block;right: 0;box-shadow: 0 0 5px #fff;\">\n    <div class=\"\" style=\"height: 50px; width: 100%;position: relative; border-bottom: 1px solid #ddd; background-color: #f3f3f3;padding: 0 15px;\">\n        <div style=\"color: #555; font-size: 15px; line-height: 50px; font-weight: bold; float: left;margin-left: 20px;\">Adding friends to the conversation.</div>\n        <!--            <div  class='create-conversation easing' style=\" font-size: 15px; line-height: 50px; font-weight: bold; width: 50px;height: 49px;\"><k class=\"icon-search\"></k></div>-->\n    </div>\n\n    <div style=\"position: relative; width: 100%;min-height: 100px;max-height: 520px;padding: 0 45px;\">\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n         \n    </div>\n <br/><br/>\n    <div class=\"\" style=\"height: 41px;position: relative;border-top: 1px solid #ddd;bottom: 0;width: 100%;display: block;clear: both;\">\n        <div  class=\"message-btn easing\" style=\"font-size: 15px; height: 40px; line-height: 40px; border-right: 1px solid #ddd;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        <div class=\"message-btn easing\" style=\"font-size: 15px; height: 40px; line-height: 40px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewPost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">             \n             <span style=\"position: relative\">\n                <i class=\"icon-user\" style=\"\"></i>\n                <i class=\"icon-plus\" style=\"position: absolute;font-size: 8px;top: 8px;left: 10px;color: white;background-color: #333;height: 12px;width: 12px;line-height: 11px;border: 1px solid #fff;border-radius: 50%;\"></i>\n            </span>\n             &nbsp;Invite</div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkingLoginStatus", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n    <div class=\"masonry-object\">\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "itemProfiles", "", options) : helperMissing.call(depth0, "render", "itemProfiles", "", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n</div>\n\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkingLoginStatus", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "itemFunction", "", options) : helperMissing.call(depth0, "render", "itemFunction", "", options))));
  data.buffer.push("\n\n    <div class=\"object-tags-box\">\n        <div class=\"object-tags\">\n            <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n            <div class=\"tags easing\">\n                <!--                        <div class=\"tags-new\">New </div>-->\n                <div class=\"object-type hint--left hint--rounded\" data-hint=\"Image\">\n                    <i class=\"icon-picture\" ></i>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"object-tags \">\n            <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n            <div class=\"tags easing tagsappear\" >\n                <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "country", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n        </div>\n        ");
  stack1 = helpers.each.call(depth0, "keywordShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"object-tags \" style=\"display:none;\">\n            <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n            <div class=\"tags easing tagsappear\">\n                <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "timezone", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"masonry-object_mainfeature\">\n        <div class=\"mainfeature-wrapper\">\n            <a class=\"mainfeature-container\" href=\"#/photos/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"cursor: pointer\">\n\n                <img class=\"this-is-the-object\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("object_image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" />\n            </a>\n\n            <span class='edit-object easing' style=\"position: absolute;margin: 10px; top: 11px;left: 115px;\">\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </span>\n        </div>\n\n\n        <div class=\"masonry-object_poster\">  \n\n\n            <div class=\"profilepic-on-masonry\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">  <img  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("owner_profile_pic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/></a>\n            </div>\n            <div class=\"object_username\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "owner_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\" style=\"display:none;\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                </div>\n\n                <!--                <ul class=\"itemprofile\" style=\"margin: 5px 0 0;\">\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Collections\">\n                                        <div><k class=\"icon-eye-open\"> &nbsp;");
  stack1 = helpers._triageMustache.call(depth0, "collections.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Partners\">\n                                        <div><k class=\"icon-group\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.length || (depth0 && depth0.length),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_partner_ids", options) : helperMissing.call(depth0, "length", "profile_partner_ids", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Videos\">\n                                        <div><k class=\"icon-film\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.videolength || (depth0 && depth0.videolength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "videolength", "profile_about_us", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Ebooks\">\n                                        <div><k class=\"icon-book\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.ebooklength || (depth0 && depth0.ebooklength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "ebooklength", "profile_about_us", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                </ul>-->\n\n            </div>\n        </div>\n\n        <div class=\"masonry-object_text\">\n            <div class=\"masonry-object_text-container\">\n                <p>    ");
  stack1 = helpers._triageMustache.call(depth0, "photo_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  </p>\n            </div>\n\n            <div class=\"more_detail\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" >\n                <div class=\"more_text-container\" >\n                    <div style=\"display:block;\">\n                        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_description", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                </div>\n            ");
  stack1 = helpers['if'].call(depth0, "moreDisplay", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n</div>\n\n\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"object-tags \">\n            <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n            <div class=\"tags easing tagsappear\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searching", "keyword_name", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "keyword_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n        </div>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n\n                <div class=\"new-btn blue-btn hint--right hint--rounded\" data-hint=\"Edit object\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                     <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n                    <k class='icon-caret-down'></k>\n                </div>\n                <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_user_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n\n                ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "profile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>\n                    <li class='ite'  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.Profile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],data:data})));
  data.buffer.push("> <k class=\"icon-ok-sign\" style=\"font-size: 16px;  margin: 0px 5px;\"></k>Set as collection cover</li>\n                    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Remove</li>\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.User", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],data:data})));
  data.buffer.push("><k class=\"icon-camera\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Set as Cover</li>\n                    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <span role=\"button\" class=\"masonry_more-btn easing\"  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("more_button")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >more &nbsp;</span>\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\" >\n    <div class=\"object-tags-box\">\n        <div class=\"object-tags\">\n            <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n            <div class=\"tags easing\">\n                <div class=\"tags easing\">\n                    <div class=\"tags-new\">New</div>\n                    <div class=\"object-type hint--left hint--rounded\" data-hint=\"Video\">\n                        <i class=\"icon-film\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"object-tags \" style=\"display:none;\">\n            <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n            <div class=\"tags easing tagsappear\">\n                <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "region", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n        </div>\n\n        <div class=\"object-tags \">\n            <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n            <div class=\"tags easing tagsappear\"  style=\"overflow: hidden;\">\n                <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "categories", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n        </div>\n         ");
  stack1 = helpers.each.call(depth0, "keywordShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "itemFunction", "", options) : helperMissing.call(depth0, "render", "itemFunction", "", options))));
  data.buffer.push("\n    <div class=\"masonry-object_mainfeature\">\n        <div class=\"mainfeature-wrapper\">\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <span class='edit-object easing' style=\"position: absolute;margin: 10px; top: 11px;left: 115px;\">\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </span>\n\n\n\n        </div>\n\n\n\n        <div class=\"masonry-object_poster\">  \n\n\n            <div class=\"profilepic-on-masonry\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">  <img  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("owner_profile_pic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/></a>\n            </div>\n            <div class=\"object_username\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "owner_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\" style=\"display:none;\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                </div>\n\n                <!--                <ul class=\"itemprofile\" style=\"margin: 5px 0 0;\">\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Collections\">\n                                        <div><k class=\"icon-eye-open\"> &nbsp;");
  stack1 = helpers._triageMustache.call(depth0, "collections.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Partners\">\n                                        <div><k class=\"icon-group\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.length || (depth0 && depth0.length),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_partner_ids", options) : helperMissing.call(depth0, "length", "profile_partner_ids", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Videos\">\n                                        <div><k class=\"icon-film\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.videolength || (depth0 && depth0.videolength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "videolength", "profile_about_us", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Ebooks\">\n                                        <div><k class=\"icon-book\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.ebooklength || (depth0 && depth0.ebooklength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "ebooklength", "profile_about_us", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                </ul>-->\n\n            </div>\n        </div>\n\n        <div class=\"masonry-object_text\">\n            <div style=\"\">\n                <p style=\"font-weight: bold;margin-bottom: 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToVideo", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "object_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                <p class=\"masonry-object_text-container\" style=\"font-size: 11px; max-height: 50px;\">");
  stack1 = helpers._triageMustache.call(depth0, "object_description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            </div>\n        </div>\n    </div>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <a class=\"mainfeature-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                <div class=\"hover-opacity radius-circle easing\" style=\"cursor: pointer;position: absolute;width: 70px;height: 70px;border: 2px solid #fff;line-height: 66px;text-align: center;color: #fff;font-size: 25px;margin: 90px auto;left: 0;right: 0;box-shadow: 0 0 10px #f3f3f3;z-index: 10;\">\n                    <i class=\"icon-play\" style=\"margin-left: 5px;text-shadow: 0 0 10px #f3f3f3;\"></i>\n                </div>\n                <img class=\"this-is-the-object\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("object_image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  />      </a>\n            ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <a class=\"mainfeature-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToVideo", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                <div class=\"hover-opacity radius-circle easing\" style=\"cursor: pointer;position: absolute;width: 70px;height: 70px;border: 2px solid #fff;line-height: 66px;text-align: center;color: #fff;font-size: 25px;margin: 90px auto;left: 0;right: 0;box-shadow: 0 0 10px #f3f3f3;z-index: 10;\">\n                    <i class=\"icon-play\" style=\"margin-left: 5px;text-shadow: 0 0 10px #f3f3f3;\"></i>\n                </div>\n                <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("object_image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"this-is-the-object\" />\n            </a>\n            ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n\n                <div class=\"new-btn blue-btn hint--right hint--rounded\" data-hint=\"Edit object\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                     <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n                    <k class='icon-caret-down'></k>\n                </div>\n                <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_user_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n\n                ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "profile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>\n                    ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Remove</li>\n                    ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkingLoginStatus", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n\n    <div class=\"object-tags-box\">\n        <div class=\"object-tags\">\n            <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n            <div class=\"tags easing\">\n\n                <div class=\"object-type hint--left hint--rounded\" data-hint=\"Article\">\n                    <i class=\"icon-book\"></i>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"object-tags \" style=\"display:none;\">\n            <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n            <div class=\"tags easing tagsappear\">\n                <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "region", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n\n        </div>\n\n\n        <div class=\"object-tags \">\n            <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n            <div class=\"tags easing tagsappear\"  style=\"overflow: hidden;\">\n                <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "categories", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n        </div>\n         ");
  stack1 = helpers.each.call(depth0, "keywordShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "itemFunction", "", options) : helperMissing.call(depth0, "render", "itemFunction", "", options))));
  data.buffer.push("\n    <div class=\"masonry-object_mainfeature\">\n        <div class=\"mainfeature-wrapper\">\n            <a class=\"mainfeature-container\" href=\"#/articles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" >\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("              \n            </a>   \n\n            <span class='edit-object easing' style=\"position: absolute;margin: 10px; top: 11px;left: 115px;\">\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </span>\n        </div>\n\n        <div class=\"masonry-object_poster\">\n            <div class=\"profilepic-on-masonry\">\n                <img  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("owner_profile_pic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n            </div>\n            <div class=\"object_username\">\n                <a class=\"poster-name\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" style=\"cursor: pointer; width: auto;\">   ");
  stack1 = helpers._triageMustache.call(depth0, "creator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                <div class=\"posttime-container\" style=\"display:none;\">\n                    <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                </div>\n\n                <!--                <ul class=\"itemprofile\" style=\"margin: 5px 0 0;\">\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Collections\">\n                                        <div><k class=\"icon-eye-open\"> &nbsp;");
  stack1 = helpers._triageMustache.call(depth0, "collections.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Partners\">\n                                        <div><k class=\"icon-group\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.length || (depth0 && depth0.length),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_partner_ids", options) : helperMissing.call(depth0, "length", "profile_partner_ids", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Videos\">\n                                        <div><k class=\"icon-film\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.videolength || (depth0 && depth0.videolength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "videolength", "profile_about_us", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                    <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Ebooks\">\n                                        <div><k class=\"icon-book\">&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.ebooklength || (depth0 && depth0.ebooklength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "ebooklength", "profile_about_us", options))));
  data.buffer.push("</k></div>\n                                    </li>\n                                </ul>-->\n\n            </div>\n\n        </div>\n\n\n        <div class=\"masonry-object_text\">\n            <div class=\"masonry-object_text-container\">\n                <a style=\"font-size: 16px; font-weight: bold;cursor: pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "object_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                <p style=\"text-overflow: ellipsis\"; ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_description", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n            </div>\n\n            <div class=\"more_detail\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"display:none;width:auto\">\n                <h1>");
  stack1 = helpers._triageMustache.call(depth0, "object_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_description", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            </div>\n           ");
  stack1 = helpers['if'].call(depth0, "moreDisplay", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <img class=\"this-is-the-object\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("object_image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" />\n                     ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                     <img class=\"this-is-the-object\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("object_image_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" /> <!--it is the cover of the article-->\n                     ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"new-btn blue-btn hint--right hint--rounded\" data-hint=\"Edit object\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                     <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n                    <k class='icon-caret-down'></k>\n                </div>\n                <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_user_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n                ");
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "profile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>\n                    <li class='ite'  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.Profile", "article", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID","STRING"],data:data})));
  data.buffer.push("> <k class=\"icon-ok-sign\" style=\"font-size: 16px;  margin: 0px 5px;\"></k>Set as collection cover</li>\n                    ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Remove</li>\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.User", "article", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID","STRING"],data:data})));
  data.buffer.push("><k class=\"icon-camera\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Set as Cover</li>\n                    ");
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <span role=\"button\" class=\"masonry_more-btn easing\"  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("more_button")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">more</span>\n            ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "getProfile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  stack1 = helpers['if'].call(depth0, "getPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "getVideo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  stack1 = helpers['if'].call(depth0, "getArticle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["itemFollow"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col1 box style-box t-style-box\" style=\"text-align: center;\">\n    <div style=\"position:relative;\">\n        <img src=\"../../../images/defaultcover/defaultcover6.jpg\"/>\n    </div>\n\n    <div class=\"user-profilepic-container\" style=\"position:absolute; top: 50px;margin: 0 auto;width: 100px;height: 100px;border: 2px solid #f3f3f3;left: 0;right: 0;\">\n        <a href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "follower_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n           <img style=\"width: 100%; height: 100%;cursor:pointer\" src=\"http://s3.hubsrv.com/trendsideas.com/profiles/beaver-kitchens-nz/profile_pic.jpg\" />\n        </a>\n    </div>\n\n    <div style=\"position:relative; height:35px; line-height: 35px;margin: 50px auto 5px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        </span>\n    </div>\n\n    <div  type=\"button\" class=\"new-btn green-btn\" style=\"margin: auto;width: 80px;display: block;height: 22px;line-height: 20px;\">\n        <k class=\"icon-plus\" style=\"font-size:11px\">&nbsp;</k>Follow\n    </div>\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li><k class=\"icon-eye-open\">&nbsp;</k>2</li>\n            <li class=\"location_li\"><k class=\"icon-circle-blank\">&nbsp;</k>3</li>\n        </ul>\n    </div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["itemFunction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"item-function-control easing\" style=\"\">\n    <div  id=\"thumbUpBtn_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"float: left;\" class=\"object-type easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n          <i class=\"icon-thumbs-up\">&nbsp;<span style=\"font-size: 11px;\">");
  stack1 = helpers._triageMustache.call(depth0, "model.likes_count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>&nbsp;</i>\n    </div>\n    <div data-hint=\"Add to your own collection.\" id=\"saveBtn_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  style=\"float: left;\" class=\"object-type easing hint--top hint--rounded\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n         <i class=\"icon-folder-close\" >&nbsp</i>\n    </div>\n    <div id=\"share_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"object-type easing\"  style=\"\">\n\n        <div data-hint=\"Share this photo to other social platform.\" style=\"float: left;padding: 0 10px;\" class=\"hint--top hint--rounded\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shareDisplay", "model.id", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-share-alt\" >&nbsp</i></div>\n\n        <ul class=\"hideClass edit-object-ul\" style=\"width: 150px; margin: 0 auto; top: 30px;position: absolute; \">\n            <li style=\"position:fixed;top:0;left:0;height:100%;width:100%;z-index:-1;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shareHide", "model.id", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></li>\n            <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n        <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n        </li>\n        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n    <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n    </li>\n    <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n<k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n</li>\n<li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n</div>\n\n</div>\n");
  return buffer;
  }

  data.buffer.push("<div id=\"addCollection_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  style=\"display: none\">\n   \n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n\n    <!--<div style=\"position:fixed; background-color: red; width: 100px;height: 100px;top:100px\">asdfasdfasdfasdfasdfsd</div>-->\n</div>       \n");
  stack1 = helpers['if'].call(depth0, "model.getProfile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["itemProfiles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"masonry-object_profile-cover\">\n\n    ");
  stack1 = helpers['if'].call(depth0, "profile_hero_cover_url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <span class='edit-object easing' style=\"position: absolute;margin: 10px; top:0;z-index: 2;\">\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </span>\n\n</div>\n\n\n<div style=\"position: relative; width: 100%; height: 70px; display: block; z-index: 1\"></div>\n\n\n<div class=\"masonry-object_profilepic\" style=\"cursor:pointer;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toProfilePage", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n\n     <a  href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" > <img class=\"easing\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  />   </a>\n\n</div>\n\n\n<br>\n\n");
  stack1 = helpers['if'].call(depth0, "isFollowCurrentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"masonry-object_name-position\" style=\"margin-bottom: 5px;\"> \n    <a  href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"comment-username\" style=\"cursor:pointer; font-size:18px;\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("getProfile_id")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toProfilePage", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "profile_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </a>\n</div>\n\n<div style=\"width:100%; text-align:center; margin-bottom: 10px;\">\n    <ul class=\"itemprofile\">\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Collections\">\n            <div><k class=\"icon-eye-open\"> &nbsp");
  stack1 = helpers._triageMustache.call(depth0, "collections.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </k></div>\n        </li>\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Partners\">\n            <div><k class=\"icon-group\">&nbsp ");
  data.buffer.push(escapeExpression((helper = helpers.length || (depth0 && depth0.length),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_partner_ids", options) : helperMissing.call(depth0, "length", "profile_partner_ids", options))));
  data.buffer.push("</k></div>  \n        </li>\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Videos\">\n            <div><k class=\"icon-film\">&nbsp ");
  data.buffer.push(escapeExpression((helper = helpers.videolength || (depth0 && depth0.videolength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "videolength", "profile_about_us", options))));
  data.buffer.push("</k></div>  \n        </li>\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Ebooks\">\n            <div><k class=\"icon-book\">&nbsp ");
  data.buffer.push(escapeExpression((helper = helpers.ebooklength || (depth0 && depth0.ebooklength),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "ebooklength", "profile_about_us", options))));
  data.buffer.push("</k></div>  \n        </li>\n\n    </ul>\n\n</div>\n\n<!--TAGS-->\n\n<div class=\"object-tags-box\">\n\n    <div class=\"object-tags\">\n        <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n        <div class=\"tags easing\">\n<!--            <div class=\"tags-new\">New </div>-->\n            <div class=\"object-type hint--top hint--rounded\" data-hint=\"Client profile\">\n                <i class=\"icon-group\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"object-tags \">\n        <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n        <div class=\"tags easing tagsappear\">\n            <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "profile_regoin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>                   \n        </div>\n    </div>\n\n    <div class=\"object-tags \">\n        <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n        <div class=\"tags easing tagsappear\">\n            <div class=\"tags-new\">#");
  stack1 = helpers._triageMustache.call(depth0, "profile_category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>                   \n        </div>\n    </div>\n\n</div>\n\n<!--END TAGS-->\n\n\n<div class=\"masonry-object_mainfeature\" style=\"\">\n\n    <div class=\"masonry-object_text\">\n\n\n        <div class=\"more_detail\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">          \n            ");
  stack1 = helpers._triageMustache.call(depth0, "profile_cover_text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n        </div>\n\n    </div>\n\n</div>\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div class=\"masonry-object_cover-wapper\">\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("profile_hero_cover_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width: 100%\";/>\n    </div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div class=\"masonry-object_cover-wapper\">\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("profile_hero_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width: 100%;\"/>\n    </div>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"new-btn blue-btn hint--right hint--rounded\" style=\"margin: 4px 0px;\" data-hint=\"Edit object\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n             <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n            <k class='icon-caret-down'></k>\n        </div>\n\n        <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n            ");
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>       \n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n<div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 5px auto 15px;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n\n");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n<div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 5px auto 15px;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n\n");
  return buffer;
  }

  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, "model.profile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["landingPage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n\n<div style=\"width:100%;height:100%;z-index: 1000;position: fixed;\">\n    <img src=\"../../../images/landingbg.jpg\" style=\"width:100%; position:fixed;\"/>\n\n    <div style=\"width: 87%;margin: 40px auto;display: block;\">\n        <img class=\"logonew\" style=\"position: relative; height: 30px;display: inline-block;vertical-align: top;margin: 8px;\" src=\"../../../images/landing-trends.png\">\n        <div style=\"position:relative; float:right; color:white; font-size:15px;font-weight: bold;\">\n            <div style=\"margin-right:10px;display: inline-block;background-color: #777;padding: 0 20px;text-align: center;height: 45px;line-height: 45px;letter-spacing: 1px;\">SIGN UP</div>\n            <span style=\"letter-spacing: 1px; margin: 0 0 0 10px;\">LOGIN</span>\n        </div>\n    </div>\n    \n    <div style=\"position: absolute; vertical-align: middle; color: #fff; width: 40%; text-align: center;margin: auto;left: 0;right: 0;top: 50px;font-size: 14px; font-family: 'Montserrat', sans-serif; letter-spacing: 2px;opacity: .9;\">\n        <span>2,100,000 IDEAS</span>\n        <span>&nbsp | &nbsp</span>\n        <span>1,200,000 PRODUCTS</span>\n    </div>\n\n    <div style=\"position:absolute;width: 40%;text-align: center;top: 30%;margin: auto;display: block;left: 0;right: 0;\">\n        <span style=\"font-family: 'Chronicle SSm A', 'Chronicle SSm B', Georgia, serif;font-style: italic; font-size: 30px; color: #222;display: block;line-height: 1em;margin: 0 0 15px 0;opacity: .7;\">Collect, collaberate and connect</span>\n        <span style=\"font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: bolder;color: #222;display: block;line-height: 30px;letter-spacing: 5px; opacity:.7;\">YOUR</span>\n        <span style=\"font-family: 'Montserrat', sans-serif; font-size: 130px; font-weight:bold;color: #222;display: block;height: 130px;line-height: 130px;letter-spacing: 35px;padding-left: 30px;\"> IDEAS</span>\n\n\n        <div style=\"background-color: #666; border-radius:50px; width: 200px; height: 45px;display: block;line-height: 45px;color: white;font-size: 15px;font-weight: bold;letter-spacing: 2px;margin: 10px auto;\"> START TODAY</div>\n        <span style=\"font-family: 'Montserrat', sans-serif; font-size: 14px;color: #222;margin: 15px auto;opacity: .7;display: block;\">\n            <k class=\"icon-info-sign\" style=\"margin:5px;font-size: 20px;vertical-align: middle;\"></k>\n            Explore more\n        </span>\n    </div>\n\n<div style=\"width:87%; position: absolute; margin:auto;bottom: 40px;left: 0;right: 0;\">\n<div style=\"position:relative;display: inline-block;background-color: rgba(255,255,255,.2);\">\n<div style=\"border: 2px solid #333;border-radius: 50%;width: 40px;height: 40px;text-align: center;line-height: 38px;padding: 0px 13px;position: absolute;top: 30px;left: 66px;box-shadow: 0 0 25px #999;\"><k class=\"icon-play\"></k></div>\n<img src=\"http://i1.ytimg.com/vi/TXk-8NyS2fc/mqdefault.jpg\" style=\"display:inline-block;height: 100px;border: 3px solid rgba(30,30,30,.5);\"/>\n<div style=\"display:inline-block;font-size: 14px;font-family: 'Chronicle SSm A', 'Chronicle SSm B', Georgia, serif;font-style: italic; opacity: .9;width: 170px;height: 100px;vertical-align: top;padding: 30px 0;margin: 0 0 0 10px;\">Introduction of the </br>New Trendsideas Platform</div>\n</div>\n</div>\n\n</div>");
  
});

Ember.TEMPLATES["loadingSpinner"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"blur_white\"></div>\n\n\n<div class=\"loading\" >\n    <div id=\"blurringTextG\">\n        <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n            C</div>\n        <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n            t</div>\n        <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n            n</div>\n        <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n            g</div>\n        <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n            y</div>\n        <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n            o</div>\n        <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n            u</div>\n        <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n            d</div>\n        <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n            p</div>\n        <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n            c</div>\n        <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n            .</div>\n    </div>\n</div>\n\n");
  
});

Ember.TEMPLATES["loginModal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"select-interest\" style=\" height: 150px; width: auto;position: relative; float: left; margin: 10px 20px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTopic", "id", "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                 <div id=\"minus_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"invite-this-friend radius-circle easing\" style=\"z-index: 10; right: 0;display:none;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTopic", "id", "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push("><k class=\"icon-minus\" ></k></div>\n                <div id=\"plus_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"invite-this-friend radius-circle easing\" style=\"z-index: 10; right: 0;\" ><k class=\"icon-plus\" ></k></div>\n                <div class=\"\" style=\"height: 100px;width: 100px;position: relative;border-radius: 50%;overflow: hidden;top: -5px;float: left; \">\n                    <div  class=\"usersobject-hoverarea easing\" style=\"height: 100px; width: 100px;\" >\n                    </div>\n                    <div style=\"position: relative;\">\n                        <div style=\"width: 100px; height: 100px; overflow: hidden;\">\n                            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"min-height:100px; width: 100px; max-width: none;\"/>\n                        </div>\n                    </div>\n                </div>\n                <div style=\"position: relative;text-align: center;font-size: 13px;width: 100px;line-height: 15px;\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n            ");
  return buffer;
  }

  data.buffer.push("<div  id=\"loginModal\" class=\"blur_black\" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closePane", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></div>\n\n\n<div id=\"profiles-main-container\" class=\"Login-box\" style=\"background-color: transparent;position: fixed; top: 30%; z-index: 10; margin: auto; left: 0px; right: 0px; width: 300px;height: 565px;border: 0;text-align: center;\">   \n\n    <div id=\"click-register-social\" class=\"register-with easing social-active\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n        <i class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Register with social account</a>\n    </div>\n\n    <div id=\"social-link\" class=\"social-links-container\" style=\"display: block;\">\n\n  <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Facebook", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n                <i  class=\"icon-facebook\"></i>\n            </div>\n\n            <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Twitter", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-twitter\"></i>\n            </div>\n\n            <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Google", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i  class=\"icon-google-plus\"></i>\n            </div>\n\n            <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "LinkedIn", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i  class=\"icon-linkedin\"></i>\n            </div>\n\n            <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Sina", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-weibo\"></i>\n            </div>\n    </div>\n\n\n    <!--This is the email register section-->\n    <div>\n        <div id=\"click-register\" class=\"register-with easing register-clicker\">\n            <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Register with Email</a>\n        </div>\n\n        <div   id=\"register-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n            <div style=\"padding: 0 8px;position: relative;\">\n\n                <div style=\"border-bottom: 1px solid #e3e3e3; border-top:1px solid #e3e3e3;\">\n                    <div id=\"first_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div id=\"last_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div  id=\"email\" class=\"login-textfield\" style=\"\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'placeholder': ("Your Email")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n\n                <div id=\"password\" class=\"login-textfield\"  style=\"\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'type': ("password"),
    'valueBinding': ("password"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n            </div>\n\n            <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signUp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" > Register</div>\n        </div>\n\n\n        <div id=\"register-with-email-step-2\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n            <div style=\"padding: 0 8px;position: relative;\">\n\n                <div  class=\"login-textfield\" style=\"border-top:1px solid #e3e3e3;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("region"),
    'placeholder': ("Region")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n\n                <div style=\"border-bottom: 1px solid #e3e3e3;\">\n                    <div class=\"login-select easing\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setmale", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                         Male\n                </div>\n\n                <div class=\"login-select easing\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setfemale", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                     Female\n            </div>\n        </div>\n\n        <div class=\"login-textfield\"  style=\"margin: 0;width: 100%;height: 45px;line-height: 45px;border-bottom: 1px solid #e3e3e3;\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("age"),
    'placeholder': ("How old are you?")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n    </div>\n    <div class=\"back-btn easing\" style=\"\" >Back</div>\n    <div class=\"register-btn easing register-btn-small\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Next</div>\n\n\n    <div id=\"register-with-email-step-3\" style=\"z-index: 1;overflow: hidden;  background-color: white;border-radius: 5px;  width: 800px; height: 600px; margin: 0px auto; position: fixed; top: 15%; left: 0px; right: 0px; display:none;\">\n        <div   style=\"background-color: #f3f3f3;padding: 5px 5px 10px 70px;border-bottom: 1px solid #ddd;\">\n            <div  class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n                <div style=\"position: absolute;  text-align: center;line-height: 40px;margin: 0 auto;font-size: 20px;background-color: #f3f3f3; opacity: 0.5;\">\n                    Tell us what you're interested in!\n\n                </div>\n            </div>\n        </div>\n        <div id =\"\" style=\"margin: 20px 30px 5px;height: 450px;\" >\n            ");
  stack1 = helpers.each.call(depth0, "controller.contentTopic", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div class=\"\" style=\"height: 45px;position: absolute;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n            <div class=\"register-btn easing\" style=\"width: 50%;border-right: 1px solid #ddd;float: left;\"></div>\n            <div class=\"register-btn easing\" style=\"width: 50%;float: left\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Next&nbsp;<k class=\"icon-long-arrow-right\" style=\"font-size: 13px;\"></k></div>\n        </div> \n    </div>\n\n    <div id=\"register-with-email-step-4\" style=\"overflow: hidden; z-index: 11; background-color: white; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; box-shadow: rgb(187, 187, 187) 0px 0px 20px; width: 430px; height: 220px; margin: 0px auto; position: fixed; top: 45%; left: 0px; right: 0px; display: none;\">\n        <div  style=\"background-color: #f3f3f3;padding: 5px 5px 10px 70px;border-bottom: 1px solid #ddd;\">\n            <div  class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n                <div style=\"position: absolute;  text-align: center;line-height: 40px;margin: 0 auto;font-size: 20px;background-color: #f3f3f3; opacity: 0.5;\">\n                </div>\n            </div>\n        </div>\n        <div style=\"height: 140px; text-align: center; padding: 40px;\">\n             Registration successful! You'll soon receive an email with your account information and an activation link. Click on the activation link to activate your myTrends account!\n        </div>\n\n<!--        <div id=\"skipRegister\" class=\"register-btn easing\" style=\"height: 45px;line-height: 45px;width: 100%;border-top: 1px solid #ddd;bottom: 0;position: absolute; display:none\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "skip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Skip&nbsp</div>-->\n        <div id=\"finishRegister\" class=\"register-btn easing\" style=\"height: 45px;line-height: 45px;width: 100%;border-top: 1px solid #ddd;bottom: 0;position: absolute;display:block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "done", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Done&nbsp;<k class=\"icon-long-arrow-right\" style=\"font-size: 13px;\"></k></div>\n    </div>\n\n</div>\n<div id=\"missing-fields\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>Please fill in all mandatory fields.</p>\n</div>\n<div id=\"invalid-user-name-register\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>The email address  you have entered is invalid.</p>\n</div>\n<div id=\"invalid-password\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>Your password length should be between 6-40 characters long.</p>\n</div>\n<div id=\"email-in-use\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>The email address you have entered belongs to an existing account.</p>\n</div>\n<div id=\"email-used-by-social\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>The email address you have entered belongs to an existing account.</p>\n</div>\n\n</div>\n<!--End of email register section-->\n\n<div id=\"user-login-pane\"  style=\"display:none;border-radius: 5px 5px 0 0;\">\n\n    <div id=\"social-login\" class=\"register-with easing\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n        <i id=\"social-login\" class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Log in with social account</a>\n    </div>\n    <div id=\"social-login-container\" class=\"social-links-container\" style=\"display: none;\">\n <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Facebook", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i  class=\"icon-facebook\"></i>\n        </div>\n\n        <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Twitter", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i class=\"icon-twitter\"></i>\n        </div>\n\n        <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Google", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i  class=\"icon-google-plus\"></i>\n        </div>\n\n        <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "LinkedIn", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i class=\"icon-linkedin\"></i>\n        </div>\n\n        <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Sina", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i class=\"icon-weibo\"></i>\n        </div>\n\n    </div>\n\n\n    <div id=\"click-login\" class=\"register-with easing active-tab\" style=\"border-bottom: 1px solid #e3e3e3;\">\n        <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Log in with Email</a>\n    </div>\n\n    <div id=\"login-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;\">\n        <div style=\"padding: 0 8px;position: relative;\">\n\n\n            <div id=\"loginUsername\" class=\"login-textfield\" style=\"\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'valueBinding': ("loginUsername"),
    'placeholder': ("Your Email")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n\n            <div id=\"loginPassword\" class=\"login-textfield\"  style=\"\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'type': ("password"),
    'valueBinding': ("loginPassword"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                <div class=\"hint--right hint--rounded\" data-hint=\"forgot password?\" style=\"cursor:pointer;float: right;margin-top: -40px;height: 30px;color:#888;\">\n                    <i class=\"icon-question-sign\">&nbsp</i>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> Log in</div>\n    </div>\n    <div id=\"user-forgot-password-pane\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n        <div  id=\"resetPasswordEmail\"class=\"login-textfield\" style=\"padding: 0 10px\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("resetPasswordEmail"),
    'placeholder': ("Your Email")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"back-btn easing\" style=\"\" >Back</div>\n        <div id='reset-btn' class=\"register-btn easing register-btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "emailSend", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Reset password</div>\n    </div>\n\n    <div class=\"black-tool-tip\"id=\"forgot-message-container\" style=\"display:none;\">\n        <p>We've just emailed you a new password for your myTrends account - be sure to check your Spam folder in case it ends up there.</p><br/>\n        <p>If you don't receive a password reset email, please contact us at \n            <a class=\"white-text-hover easing\" href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\" target=\"blank\" style=\"text-decoration: underline\"><b>help documents.</b></a>\n        </p>\n    </div>\n\n\n    <div id=\"invalid-user-name\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address  you have entered is invalid.</p>\n    </div>\n    <div id=\"invalid-account-type\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to log in with a social account. Please use the \"Log in with social account\" option.</p>\n    </div>\n    <div id=\"incorrect-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Incorrect password.</p>\n    </div>\n     <div id=\"incorrect-varify\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You're almost there! In order to activate your myTrends accout, please click on the activation link in the 'Confirmation of registration' email we sent you!. </p>\n    </div>\n    \n    <div id=\"invalid-account-type-reset\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to reset the password of a social account. Please use the \"Log in with social account\" option.</p>\n    </div>\n    <div id=\"new-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>  We've sent you an email with instructions to reset your password.</p><br/>\n        <p>Please make sure it didn't wind up in your Junk Mail. If you aren't receiving our password reset emails, contact to support@trendsideas.com</p>\n    </div>\n\n\n\n</div>\n\n<a href=\"http://about.trendsideas.com\" target=\"blank\">\n    <div class=\"learnmore-btn easing\" style=\"\">Learn more</div>\n</a>\n\n<div style=\"margin: 15px 0;cursor:pointer;color: #fff; font-size: 12px;\"  id=\"login-btn\" class=\"hover-opacity easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loginPane", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Already had an acount? Click here to Log in!</div>\n\n</div>\n\n<script>\n\n\n    function DropDown(el) {\n        this.dd = el;\n        this.placeholder = this.dd.children('span');\n        this.opts = this.dd.find('ul.dropdown > li');\n        this.val = '';\n        this.index = -1;\n        this.initEvents();\n    }\n    DropDown.prototype = {\n        initEvents: function() {\n            var obj = this;\n\n            obj.dd.on('click', function(event) {\n                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                return false;\n            });\n            obj.opts.on('click', function() {\n                var opt = $(this);\n                obj.val = opt.text();\n                obj.index = opt.index();\n                obj.placeholder.text(obj.val);\n            });\n        },\n        getValue: function() {\n            return this.val;\n        },\n        getIndex: function() {\n            return this.index;\n        }\n    };\n\n    $(function() {\n\n        var dd3 = new DropDown($('.dropdown_test_3'));\n        $(document).click(function() {\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n\n    });\n\n    function setDomain() {\n\n        var api_url = document.domain;\n        var api_domain_start_pos = api_url.indexOf('.');\n        var api_url = api_url.slice(api_domain_start_pos);\n\n        return api_url;\n    }\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["masonry"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ItemView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        <script>\n            $(function() {\n                var $container = $('#masonry_container');\n                window.setTimeout(function() {\n                    $container.masonry();\n                    $container.masonry('reload');\n                }, 1000);\n            });\n        </script>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"masonry_wrapper\" style=\"min-height:300px;\">\n    <div id=\"masonry_container\" class=\" centered clearfix noStyle1\" style=\"top: 100px;\">\n        <div class=\"box col2 noStyle1\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "status", options) : helperMissing.call(depth0, "render", "status", options))));
  data.buffer.push("\n        </div>\n\n     \n\n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div> <!-- #container -->\n</div><!-- #wrapper -->\n\n<div style=\"width:100%;float:left;clear:both;\">\n    <div id=\"more-result-button\" class=\"new-btn\" style=' width: 200px;margin: 60px auto;display: block; box-shadow: 0 0 10px #fff;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollDownAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-long-arrow-down\" style=\"margin-right: 8px\"></k>Show more results!\n    </div>\n</div>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["masonryCollection"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div style=\"height: 35px; width: 240px;border-radius: 25px;border: 1px solid #ddd;float: left;margin: 7px 5px;\">\n            <div style=\"width: 200px;float: left;height: 30px;margin: 2px 0 2px 10px;\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("partnerSearchString"),
    'id': ("search_business"),
    'placeholder': ("Search for Partners"),
    'class': ("no-effect")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'placeholder': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"hover-opacity\" style=\"line-height: 34px;   float: right; font-size: 13px;  margin: 0 15px 0 0;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "partnerSearch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-search\"></i>\n            </div>\n        </div>\n        <div class=\"clear-all hover-opacity\" style=\"\" class=\"hover-opacity\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "partnerSearchReset", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\" style=\"color: #fff\"></i></div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <ul class=\"user-stats\" id=\"user-stats\">\n            <li id=\"defualt\" ><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCollection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> Collections <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileCollectionStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n            <li id=\"video\" ><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectVideo", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> Videos <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileVideoStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n            <li id=\"network\"\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPartner", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Network <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.profilePartnerStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n            <li id=\"follow\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollower", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Followers <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileFollowerStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>  \n            <li id=\"reviewList\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectReview", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Reviews <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileReviewStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li> \n        </ul>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <ul class=\"user-stats\" id=\"user-stats\">\n            <li id=\"defualt\" ><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCollection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> Collections<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.userCollectionStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n            <li id =\"ufollowing\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollowing", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> Following<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.userFollowingStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n            <li id =\"ufollower\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollower", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> Followers<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.userFollowerStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isUserSelf", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <li id =\"post\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPost", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> Posts<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp;</span></a></li>\n\n\n        </ul>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <li id =\"message\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectMessage", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> Messages<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp;</span></a></li>\n\n\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.CollectionsView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profileVideos", options) : helperMissing.call(depth0, "render", "profileVideos", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "profilePartners", options) : helperMissing.call(depth0, "render", "profilePartners", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "userFollowers", options) : helperMissing.call(depth0, "render", "userFollowers", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "reviewList", options) : helperMissing.call(depth0, "render", "reviewList", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "userFollowings", options) : helperMissing.call(depth0, "render", "userFollowings", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "messageCenter", options) : helperMissing.call(depth0, "render", "messageCenter", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "userMessage", options) : helperMissing.call(depth0, "render", "userMessage", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div style=\"width: 100%; margin: 100px auto; left: 0;right: 0;position: relative;display: block;\">\n\n\n    <div class=\"style-box t-style-box\" style=\"width: 87%; min-width: 796px; height: 50px; background: white;margin: -70px auto;left: 0;right: 0;position: relative;display: block;\">\n\n        <div style=\"margin: 3px 20px 3px 40px; font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);float: left;\" >");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileSelectionStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        ");
  stack1 = helpers['if'].call(depth0, "partnerTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        ");
  stack1 = helpers['if'].call(depth0, "controller.partnerPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.userTage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n    </div>\n\n    <div id=\"masonry_user_container\" class=\"centered clearfix masonry_push_down\" >\n        <!-- masonry from here -->\n        ");
  stack1 = helpers['if'].call(depth0, "collectionTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        ");
  stack1 = helpers['if'].call(depth0, "videoTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n        ");
  stack1 = helpers['if'].call(depth0, "partnerTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  stack1 = helpers['if'].call(depth0, "followerProfileTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  stack1 = helpers['if'].call(depth0, "reviewTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  stack1 = helpers['if'].call(depth0, "followerTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  stack1 = helpers['if'].call(depth0, "followingTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  stack1 = helpers['if'].call(depth0, "messageTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "postTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n    </div>\n\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["masonryCollectionItems"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "controller.uploadStuff", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n\n        <div class=\"box style-box t-style-box col2\" id=\"addNew\" >\n\n            <div id=\"tagetUplaod\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newUpload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  >\n                 <div class=\"add-new-object-hoverarea easing\">\n                    <i class=\"icon-upload\" style=\"font-size: 80px;\"></i>\n                </div>\n                <div class=\"masonry-object t-style-box\">\n                    <div class=\"add-new-object-content\">\n                        <i class=\"icon-group\"></i>\n                        <i class=\"icon-book\"></i>\n                        <i class=\"icon-picture\"></i>\n                        <i class=\"icon-film\"></i>\n                    </div>\n                </div>\n            </div>\n\n            <div id=\"ownerUpload\"  class=\"col4\" style=\"display:none\">             \n                ");
  stack1 = helpers.unless.call(depth0, "controller.uploadOrsubmit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers.view.call(depth0, "HubStar.PhotoCreateView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n                <div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n                    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n                        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n                        <span style=\"font-weight: bold;display: block;font-size: 25px;\">\n                            Drag & Drop Your Photos Here\n                        </span>\n                        <span style=\"font-size: 17px;display: block;line-height: 25px;width: 380px;margin: auto;\">Please upload no more than 20 photos at a time, and maximum size of 20MB per photo.</span> \n                    </div>\n\n                    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n                        Choose \n                        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> \n                    </div> \n\n                    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n                        ");
  stack1 = helpers.each.call(depth0, "uploadImageContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n                    <div class=\"controlbtn\" style=\"left: 34%;\">\n                        <span class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "back", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Close</span>\n                        <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Upload</span>\n                    </div>\n                </div>\n\n                ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n\n\n                        <div style=\"position: relative;margin:3px; display: inline-block; vertical-align: top; min-width: 150px;text-align: center;\">\n                            <div> \n                                ");
  stack1 = helpers.each.call(depth0, "photo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                            <div style=\"margin: 2px 0 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px;\">");
  stack1 = helpers._triageMustache.call(depth0, "photo_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        </div>\n                        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_image_original_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  alt=\"Logo\" style=\"max-width: 140px; max-height: 150px;\">\n\n                                <div ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': ("photo_source_id")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"display: none;\">\n                                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                                </div>\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "photoCreateInfoSetting", options) : helperMissing.call(depth0, "render", "photoCreateInfoSetting", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ItemView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <script>\n            $(function() {\n                var $container = $('#masonry_user_container');\n                window.setTimeout(function() {\n                    $container.masonry();\n                    $container.masonry('reloadItems');\n                }, 10);\n            });\n        </script>\n        <script>\n            $(function() {\n                var $container = $('#masonry_photo_collection_container');\n                window.setTimeout(function() {\n                    $container.masonry();\n                    $container.masonry('reloadItems');\n                }, 50);\n            });\n        </script>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n\n<div style=\"width: 100%; margin: 100px auto; left: 0;right: 0;position: relative;display: block;\">\n    <!-- masonry from here -->\n\n    <div class=\"style-box t-style-box\" style=\"width: 87%; min-width: 796px; height: 50px; background: white;margin: -70px auto;left: 0;right: 0;position: relative;display: block;\">\n        <div style=\"margin: 4px 20px 4px 40px; font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);float: left;\" >");
  stack1 = helpers._triageMustache.call(depth0, "controller.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"hint--right hint--rounded\" data-hint=\"Go back\" style=\"margin: 4px 0; display: inline-block;\">\n            <i class=\"icon-level-up edit-btn\" style=\"color: #555; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-size: 20px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i>\n        </div>\n\n\n    </div>\n\n    <div id=\"masonry_photo_collection_container\"  class=\"centered clearfix masonry_push_down\" >\n\n        <!--SECTION CONTROL BAR-->\n\n\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers.each.call(depth0, "controller.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n    </div>\n    <script>\n        $(function() {\n            var $container = $('#masonry_user_container');\n            window.setTimeout(function() {\n                $container.masonry();\n                $container.masonry('reloadItems');\n            }, 10);\n        });\n    </script>\n    <script>\n        $(function() {\n            var $container = $('#masonry_photo_collection_container');\n            window.setTimeout(function() {\n                $container.masonry();\n                $container.masonry('reloadItems');\n            }, 50);\n        });\n    </script>\n</div>\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["message"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div style=\"padding: 10px 0 10px 70px;position: relative;  background-color: #f3f3f3;  border-bottom: 1px solid #ddd;\">\n        <div style=\"float: right;color: #888;margin: 18px 20px;font-size: 13px; position: relative;z-index: 1\">\n            ");
  stack1 = helpers['if'].call(depth0, "model.isUserself", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n        <div class=\"radius-circle\" style=\"position: absolute; top: 15px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n            <img class=\"profilepic_comment\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"width: 45px; height: 45px; \" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n        </div>\n\n        <div class=\"comment-namentime\" style=\"margin: 8px 0; z-index: 0\">\n            <div class=\"namentime_position\">\n                <a class=\"comment-username\"   href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "model.user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.time_stamp", options) : helperMissing.call(depth0, "date", "model.time_stamp", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"comment-content\" style=\"font-size: 12px;margin: 10px 20px;\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "model.msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "model.isUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    ");
  stack1 = helpers['if'].call(depth0, "model.replyEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    <div id=\"messageData_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  style=\"display: none\">\n        <div id=\"messageScrollBar_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n            ");
  stack1 = helpers.each.call(depth0, "model.replyMessageCollection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("     \n        </div>\n    </div>\n\n\n    <div class=\"hover-opacity easing\" style=\"height: 20px; width: 100%; background-color: #f3f3f3;text-align: center;color: #555; border-top: 1px solid #ddd\">  \n        <div id=\"showMoreComment_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"display: inline-block; cursor: pointer\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeMore", "model.message_id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n            <span style=\"font-size: 11px;font-weight: bold\">view comment &nbsp; ");
  stack1 = helpers._triageMustache.call(depth0, "model.replyCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            <i class=\"icon-caret-down show-comment_inner\" ></i>   \n        </div>\n        <div id=\"closeComment_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"   style=\"display: none;cursor: pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMore", "model.message_id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n            <span style=\"font-size: 11px;font-weight: bold\">Hide comment &nbsp; ");
  stack1 = helpers._triageMustache.call(depth0, "model.replyCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            <i class=\"icon-caret-up show-comment_inner\" ></i>\n        </div>\n    </div>\n\n\n    <script>\n        $(function() {\n            var $container = $('#masonry_user_container');\n            window.setTimeout(function() {\n                $container.masonry();\n                $container.masonry('reloadItems');\n            }, 200);\n        });\n    </script>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push(" <!--model.isUserself is used to judge whether the reply message is written by the current login user-->\n\n            <span style=\"margin: 0 10px; cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Remove Post\">\n                <i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMessageItem", "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n            </span>                 \n            <span style=\"cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Edit Post\">\n                <i class=\"icon-pencil\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "model.message_id", "model.msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push("></i>\n            </span>\n\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isUserself", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push(" \n\n            <!--controller.isUserself is used to judge whether it is the page owner who have right to delete every message-->\n            <span style=\"margin: 0 10px; cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Remove Post\">\n                <i class=\"icon-trash\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMessageItem", "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>    \n            </span>\n            <!--            <span style=\"cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Edit Post\">\n                            <i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "model.message_id", "model.msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push("></i>   \n                        </span>-->\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div style='margin: 5px auto;max-width: 300px;max-height: 300px;'>\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"border: 4px solid #fff;\"/>\n        </div>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"reply-comment-frame\"  style=\"padding: 15px;\">\n        <div style=\"margin:0 auto; padding: 0 45px 0 0;\">\n            <a  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -45px 0 0; margin-top: 0;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                <div class='user-reply-angle-before' style=\"right: 47px;\"></div>\n                <div class='user-reply-angle-after' style=\"right: 45px;\"></div>\n            </a>\n\n            <div class=\"reply-comment-container\" style=\"width: 100%;height: 32px;\">\n                <div id =\"reply_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"style=\"margin: 0;width: 210px; height: 30px;float: left;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("replyContent"),
    'class': ("no-resize"),
    'placeholder': ("Add a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                </div>\n                <div style=\"float: right;height: 34px;position: relative;\">\n                    <div  class=\"message-btn easing hint--bottom hint--rounded\" style=\"width:30px; border-right: 1px solid #ddd; border-left: 1px solid #ddd;\" data-hint=\"Add Photo\"><k class='icon-picture'></k>\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n                        </div>\n                    </div>\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.isReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n                </div>\n            </div>\n\n            <!--please disable the following div when it's got not content-->\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"message-btn easing hint--bottom hint--rounded\" style='width: 30px;' data-hint=\"Post\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addReply", "model.message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                         <k class='icon-ok' ></k>\n                    </div>\n                    ");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n\n                    <div class=\"message-btn easing\" style='width: 30px;'>\n                        <i class=\"spinner spinner-sml\"></i>\n                    </div>\n                    ");
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border:1px solid #ddd;'>\n                <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n            </div>\n            ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \n            ");
  stack1 = helpers.unless.call(depth0, "enableToEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(25, program25, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"your-relpy\" style=\"padding: 10px 60px 10px 0;\">\n                <a class=\"your-relpy_profilepic\" style=\"right: 15px;\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    <img class=\"profilepic_comment\"  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            ");
  stack1 = helpers['if'].call(depth0, "isUserself", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            <a class=\"comment-username\"  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"comment-content\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n                        ");
  stack1 = helpers['if'].call(depth0, "isUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div class=\"reply-comment\" style=\"left: 40px;right: initial;\">\n                                <span class=\"hint--bottom hint--rounded\" data-hint=\"Delete\"><i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReplyItem", "reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i></span>\n                                <span class=\"hint--bottom hint--rounded\" data-hint=\"Edit\"><i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingReplyData", "reply_id", "msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push("></i></span>\n                            </div>\n                            ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "controller.isUserself", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div class=\"reply-comment\" style=\"left: 40px;right: initial;\">   \n                                <span class=\"hint--bottom hint--rounded\" data-hint=\"Delete\"><i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReplyItem", "reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i></span>\n                                <!--                            <span class=\"hint--bottom hint--rounded\" data-hint=\"Edit\"><i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingReplyData", "reply_id", "msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push("></i></span>-->\n                            </div>\n                            ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("   <!-- if the isUrl is not null which mean it has the picture url, so it can show the image-->\n                        <div style='margin: 5px auto;max-width: 300px;max-height: 300px;float: right;'>\n                            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"border: 4px solid #fff;\"/>\n                        </div>\n                        ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editReply", "", options) : helperMissing.call(depth0, "render", "editReply", "", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editMessage", "model", options) : helperMissing.call(depth0, "render", "editMessage", "model", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"box col2\" style=\"background-color: #fafafa\">\n    ");
  stack1 = helpers.unless.call(depth0, "model.enableToEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(27, program27, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["messageCenter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div style=\"cursor: pointer;position: absolute;top: 20px;left: 15px;width: auto;padding: 0 5px 0 4px;height: 15px;background-color: red;line-height: 15px;border-radius: 2px;font-size: 11px;font-weight: bold;color: white;\">");
  stack1 = helpers._triageMustache.call(depth0, "unReadCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("     \n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "notification", options) : helperMissing.call(depth0, "render", "notification", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "newConversation", options) : helperMissing.call(depth0, "render", "newConversation", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "conversationItem", options) : helperMissing.call(depth0, "render", "conversationItem", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n\n\n\n<div class=\"Message-Board box\" style=\"\">\n\n\n    <div class='create-conversation easing hint--left hint--rounded' data-hint=\"Notifications\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectNotification", "controller.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n         <i class=\"icon-bell-alt\"></i>\n        ");
  stack1 = helpers['if'].call(depth0, "isUnReadCountZero", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\" ><i class=\"icon-envelope\" >&nbsp;&nbsp;&nbsp;</i>Message Centre</div>\n        <div class='create-conversation easing hint--left hint--rounded' data-hint=\"Start a new conversation\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectNewConversation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class='icon-plus'></i></div>\n    </div>\n\n    <div class='Message-menu-messages-container' >\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "conversation", options) : helperMissing.call(depth0, "render", "conversation", options))));
  data.buffer.push("\n\n    </div>\n</div>\n\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "isNotification", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isNewConversation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isConversationItem", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry('reloadItems');\n        }, 200);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["navigator"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                <li id=\"id_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSelection", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> ");
  stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<i class=\"icon-search\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" ></i></li>\n\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n            <ul style=\"margin:0\">\n                <li id=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchTopicSelection", "subcategories", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> ");
  stack1 = helpers._triageMustache.call(depth0, "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i class=\"icon-search\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" ></i></li>\n\n            </ul>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n            <ul style=\"margin:0\">\n                <li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "search_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" > ");
  stack1 = helpers._triageMustache.call(depth0, "search_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </li>\n\n            </ul>\n            ");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"blur_black\" style=\"background-color: initial\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeDropdownNavigator", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n<div class=\"Navigator-box\" style=\"\">\n    <div style=\"background-color: #f3f3f3; height: 35px; line-height: 35px;width: 100%; border-bottom: 1px solid #ddd;padding: 0 15px;border-radius: 3px 3px 0 0;\"><span style=\"font-size: 18px;font-weight: bold;color: #555;\">Navigator</span></div>\n\n    <div class=\"Navigator-content\" style=\"\">\n        <div class=\"\" style=\"width: 33%;height: 100%;float: left;padding: 8px 0;overflow: auto\">\n            <ul style=\"margin:0\">\n                ");
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n\n\n\n        <div id =\"category_topic\" style=\"width: 33.5%;height: 100%;border-left: 1px solid #ddd; border-right: 1px solid #ddd;float: left;padding: 8px 0;overflow: auto\">\n\n\n            ");
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div id=\"search_topic\" style=\"width: 33.5%;height: 100%;float: left;padding: 8px 0;overflow: auto\">\n            ");
  stack1 = helpers.each.call(depth0, "controller.subcategories", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n    </div>\n\n    <div class=\"Navigator_links\" style=\"\">\n        <div style=\"float: left\">\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/\">About</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/business/\">Business</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/learning-centre/\">Learning Centre</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/contact-us/\">Contact us</a></span>\n        </div>\n        <div style=\"float: right\">\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/terms-of-use-agreement/\">Terms of Use</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/privacy-policy/\">Privacy Policy</a></span>\n        </div>\n    </div>\n</div>\n\n\n\n\n<script>\n    $(function() {\n        $(\"#category_topic\").mCustomScrollbar({\n            scrollButtons: {\n                enable: false,\n                scrollSpeed: \"auto\"\n            },\n            advanced: {\n                updateOnBrowserResize: true,\n                updateOnContentResize: true,\n                autoScrollOnFocus: false,\n                normalizeMouseWheelDelta: false\n            },\n            autoHideScrollbar: true,\n            mouseWheel: true,\n            theme: \"dark-2\",\n            set_height: 388\n        });\n    });\n\n\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["newConversation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("       \n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "invitePeople", options) : helperMissing.call(depth0, "render", "invitePeople", options))));
  data.buffer.push("      \n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div style=\"position: relative; width: 100%;min-height: 100px;padding: 10px  15px;\">\n        ");
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "isAdd", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"invite-friend\"  style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToList", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" data-hint=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n             <div class=\"invite-this-friend radius-circle easing\" style=\"opacity: .8;\"><k class=\"icon-minus\" ></k></div>\n            <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />                \n        </div>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div style='background-color: rgba(0,0,0,.2);max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;'>\n                    <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;;\">\n                </div>\n                ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isInvitePeople", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"Message-Board box\" style=\"\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\">\n             <a><img class=\"profilepic_comment\"  style=\"float: left; margin: 12px; box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> </a>\n            &nbsp;Conversation\n        </div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Invite friends to this conversation!\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "invitePeople", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n             <span style=\"position: relative\">\n                <i class=\"icon-user\" style=\"\"></i>\n                <i class=\"icon-plus\" style=\"position: absolute;font-size: 8px;top: 8px;left: 10px;color: white;background-color: #888;height: 12px;width: 12px;line-height: 11px;border: 1px solid #fff;border-radius: 50%;\"></i>\n            </span>\n        </div>\n    </div>\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "isAdded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    <div  style=\"width: 100%;padding: 20px 6.5%;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n        <div style=\"margin:0 auto; padding: 0 0 0 45px;\">\n            <a>\n                <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -45px; margin-top: 0;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                <div class='user-says-angle-before'></div>\n                <div class='user-says-angle-after'></div>\n            </a>\n\n            <div class=\"post-comment-container\">\n                <div   style=\"margin: 0;width: 100%; height:80px;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize"),
    'placeholder': ("Write something...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                </div>\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                    <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n                    <div class=\"message-btn easing\" style=''");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Send</div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n\n</div>\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["notification"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "isRead", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class='each-conversation easing'>\n            <div style=\"  padding: 15px 0 10px 95px;position: relative;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 18px;margin: 0 0 0 -55px;\">\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            <span class=\"comment-username\" >\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: top; font-size: 13px;\"> ");
  stack1 = helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"comment-content\" style=\" width: 387px; height: 35px; text-overflow: ellipsis;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;\">  \n                <i class=\"icon-ok-sign\" ></i>                 \n                <i class=\"icon-remove-sign\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteNotification", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n\n\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class='each-conversation easing unread-style'>\n            <div style=\"  padding: 15px 0 10px 95px;position: relative;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 18px;margin: 0 0 0 -55px;\">\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            <span class=\"comment-username\" >\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: top; font-size: 13px;\"> ");
  stack1 = helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"comment-content\" style=\" width: 387px; height: 35px; text-overflow: ellipsis;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;\">  \n                <i class=\"icon-ok-sign\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markRead", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>                 \n                <i class=\"icon-remove-sign\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteNotification", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n        ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"Notification-Board box Message-Board\" style=\"\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\"><i class=\"icon-bell-alt\">&nbsp;&nbsp;&nbsp;</i>Notifications</div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Set all as read\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markAllRead", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n             <i class=\"icon-th-list\"></i>\n        </div>\n        <!--<div class=\"create-conversation easing\" style=\"\"><i class=\"icon-cog\"></i></div>-->\n    </div>\n    <div  id=\"content_notification\" style=\"\">\n        ");
  stack1 = helpers.each.call(depth0, "controller.notificationContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<script>\n    \n</script>");
  return buffer;
  
});

Ember.TEMPLATES["notificationTop"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "isRead", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class='each-conversation easing' style=\"min-height: 0;\">\n            <div style=\"padding: 10px 10px 10px 70px;position: relative;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 15px;margin: 0 0 0 -50px;\" >\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"\" style=\"color: #555\">\n                            <span class=\"comment-username\" >\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: bottom; font-size: 11px;\"> ");
  stack1 = helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>               \n\n                        </div>\n                    </div>\n\n                    <div class=\"comment-content\" style=\" width: 330px; height: 15px; font-size: 11px;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                    </div>\n\n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\" style=\"font-size: 9px; line-height: 10px;\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;font-size: 10px;\">  \n                <i class=\"icon-ok-sign\"></i>                 \n                <i class=\"icon-remove-sign\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeNotificationItem", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class='each-conversation easing unread-style' style=\"min-height: 0;\">\n            <div style=\"padding: 10px 10px 10px 70px;position: relative;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 15px;margin: 0 0 0 -50px;\" >\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"\" style=\"color: #555\">\n                            <span class=\"comment-username\" >\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: bottom; font-size: 11px;\"> ");
  stack1 = helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>               \n\n                        </div>\n                    </div>\n\n                    <div class=\"comment-content\" style=\" width: 330px; height: 15px; font-size: 11px;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                    </div>\n\n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\" style=\"font-size: 9px; line-height: 10px;\" >");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;font-size: 10px;\">  \n                <i class=\"icon-ok-sign  \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markRead", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>                 \n                <i class=\"icon-remove-sign\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeNotificationItem", "notification_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  data.buffer.push("<div class=\"blur_black\" style=\"background-color: initial\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n<div  class=\"Notification-Board Notification-top\" style=\"z-index: 20;height: 440px;top: 65px;position: absolute;right: 10px;\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 35px; border-bottom: 1px solid #ddd;padding: 0 20px;position: relative;display: block;clear: both;\">\n        <div style=\"color: #666;font-size: 13px;line-height: 38px;font-weight: bold;float: left;\"><i class=\"icon-bell-alt\">&nbsp;&nbsp;&nbsp;</i>Notification</div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Set all as read\" style=\"height: 34px; width: 34px; line-height: 36px; font-size: 13px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markAllRead", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n             <i class=\"icon-th-list\"></i>\n        </div>\n    </div>\n\n    <div id=\"notititopbar\" style=\"position: absolute\">\n        ");
  stack1 = helpers.each.call(depth0, "controller.notificationTopContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div style=\"background-color: #f3f3f3; width:100%;height: 35px; border-top: 1px solid #ddd;padding: 0 20px; text-align: center;position: absolute;top: 405px;\">\n        <div style=\"color: #666;font-size: 13px;line-height: 38px;font-weight: bold;\">   <i  style=\"cursor: pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">  See all</i>  </div>\n    </div>\n</div>\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["photo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Read this article\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "controller.megaResouce.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-book\"></i><span class=\"pretooltip\">Read</span>\n            </div>       \n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Watch this Video\" style=\"position:relative;margin: 0 5px;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToVideo", "controller.megaResouce", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-film\"></i><span class=\"pretooltip\">Watch</span>\n            </div>    \n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class='square-button hint--left hint--rounded' data-hint='Edit Photo Info' style=\"float: right;\">\n                <i class=\"icon-edit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingPhotoMegaData", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i>\n            </div>\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n            <div class=\"article-title\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.selectedPhoto.photo_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n            <div class=\"article-text\">\n                <p>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.selectedPhoto.photo_caption", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" class='profilesnew-table' style=\"padding-right: 0px; font-size: 12px;  display: table;border-collapse: separate;border-spacing: 4px;margin:10px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.selectedPhoto.photo_link_url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </tbody>\n                </table>\n\n\n            </div>\n            ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <tr>\n                            <td style = \"font-size: 14px;font-weight: bold;width: 90px;\">Link: </td>\n                            <td>                      \n                                <a target=\"_blank\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("controller.selectedPhoto.photo_link_url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style = \"font-size: 14px;font-weight: normal;width: 90px; alignment-adjust: central; \">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.selectedPhoto.photo_link_text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</a>   \n                            </td>\n                        </tr>\n                        ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_title"),
    'id': (""),
    'class': ("edit_photo-titile_field")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_caption"),
    'id': (""),
    'class': ("edit_photo-caption_field")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" class='profilesnew-table' style=\"padding-right: 0px; font-size: 12px;  display: table;border-collapse: separate;border-spacing: 4px;margin:10px auto;\">\n                <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                    <tr>\n                        <td style = \"font-weight: bold; font-size: 12px;width: 60px;\">Link Text:</td>\n                        <td>\n                            <div style=\"display: block;height:40px ;\">\n                                <div  id=\"displayName\"  style=\"margin: 0;height:40px ;width: 100%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_link_text"),
    'class': ("no-resize"),
    'placeholder': ("Type Your Link Text here")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr >\n\n\n                        <th style = \"font-size: 12px;font-weight: bold;width: 60px; margin-top: 10px\">Link Url:</th>       \n                        <td>\n                            <div style=\"display: block; height:40px ; margin-top: 10px\">\n                                <div  id=\"displayName\"  style=\"margin: 0;height:40px ;width: 100%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_link_url"),
    'class': ("no-resize"),
    'placeholder': ("http://example.com")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n\n\n            <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n\n                <div  type=\"button\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "selectedPhoto", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n                <div  type=\"button\" class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n            </div>\n\n            ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                            <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                            <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n                        </div>\n                        ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"comment-item\">\n\n                <div class=\"comment-position\">\n                    <a class=\"profilepic-comment-container\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                        <img class=\"profilepic_comment\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("commenter_profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                    </a>\n                    <div style=\"\">\n                        <div class=\"comment-namentime\">\n                            <a class=\"comment-username\"  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>                  \n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n\n                        <div class=\"comment-content\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            <!-- for +someone into the conversation-->\n                            <span>\n                                <span></span>\n                                <a></a>\n                            </span>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            ");
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <span class=\"edit-comment easing\">\n                                <i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>                 \n                                <i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n                            </span>\n                            ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("   \n            ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div  id =\"ssss\" class=\"objectview-wrapper\" >\n\n    <div class=\"objectview-left\">\n        ");
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"top-controlbar easing\" >\n            <!--            <div class=\"icon-on-black\" style=\"left: 8px;\"><i class=\"icon-thumbs-up\"></i></div>-->\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.megaResouce.getArticle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "controller.megaResouce.getVideo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Save this photo to your own collection.\" style=\"position:relative;margin: 0 5px;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-folder-close\"></i><span class=\"pretooltip\">Save</span>\n            </div>\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\"></i><span class=\"pretooltip\">Share</span> \n            </div>\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_1\" style=\"width: 150px; margin: 0 auto; left: 70px;padding: 0\">\n                <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n<script type=\"text/javascript\">\n    (function(d) {\n        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');\n        p.type = 'text/javascript';\n        p.async = true;\n        p.src = '//assets.pinterest.com/js/pinit.js';\n        f.parentNode.insertBefore(p, f);\n    }(document));\n</script>\n\n<div class=\"closeview\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n    <i class=\"icon-remove\"></i>\n</div>\n</div>\n\n<div class=\"mainfeature\">\n    <div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></div>\n    <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.PhotoDisplayAreaView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<!--THIS IS THE ALBUM BOX-->\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ShowAlbumView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<!--THIS IS THE ALBUM BOX-->\n\n<div class=\"bottom-controlbar easing\" >\n    <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n    <div class=\"icon-on-black\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" style=\"display:inline-block; vertical-align: top; position:relative; left:44px;\">\n        <i class=\"icon-arrow-left\"></i>\n    </div>\n    <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px; display:inline-block; vertical-align: top; position:relative;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupAibum", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n        <i class=\"icon-th\"></i>\n    </div>\n    <div class=\"icon-on-black\" style=\"left: 44px;position: relative;vertical-align: top;display: inline-block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n        <i class=\"icon-arrow-right\"></i>\n    </div>\n    <div class=\"text-on-black\" style=\"left: 88px; top:0;position: relative;display: inline-block;vertical-align: top;\"> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.image_no", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "content.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\n</div>\n</div>\n\n<div class=\"objectview-right\">\n    <!-- USER SECTION -->\n    <div style=\"cursor: pointer;\">\n        <div class=\"object-poster easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <div class=\"profilepic-container\">\n                <a class=\"profilepic\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.megaResouce.owner_profile_pic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /></a>              \n            </div>\n            <div class=\"poster_user\" >\n                <a class=\"poster-name\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "controller.megaResouce.owner_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </div>        \n            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                <a class=\"contactmeicon easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n            </div>\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "controller.contact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <!-- OBJECT CONTROLL SECTION -->\n    <div class=\"collapes-container\"  style=\"display:block;border-top: 1px solid #f3f3f3;\">\n        <div class=\"collapes-container_inner\" style=\"padding: 0; height: 45px;\">\n\n            <div  class=\"square-button hint--rounded hint--bottom\"  data-hint=\"Like this Idea!\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                  <i class=\"icon-thumbs-up\">&nbsp;<span style=\"font-size: 11px;\">");
  stack1 = helpers._triageMustache.call(depth0, "megaResouce.likes_count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>&nbsp;</i>\n            </div>\n\n            <div class=\"square-button hint--rounded hint--bottom\"  data-hint=\"Add to your own collection.\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-folder-close\" >&nbsp;</i>\n            </div>\n\n            <div class=\"square-button hint--rounded hint--bottom for-tooltip-position\" data-hint=\"Share this photo to other social platform\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\" >&nbsp;</i>\n            </div>\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_2\" style=\"width: 170px; right: 80px; position: absolute; top: 120px;\">\n                <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n</div>\n</div>\n\n\n\n\n<!-- OBJECT DESCRIPTION SECTION -->\n<div>        \n    <div class=\"object-collapes-title\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setTitleTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n        <div class=\"collapes-title_inner\">\n            About\n        </div>\n        <div class=\"dropdownicon\" >\n            <i class=\"icon-angle-down\"></i>\n        </div>\n    </div>\n    <div class=\"collapes-container\"   id=\"article_action\" style=\"display:block\">\n        <div  class=\"collapes-container_inner\">\n\n            ");
  stack1 = helpers.unless.call(depth0, "controller.enableToEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n        </div>\n\n\n\n\n    </div>\n\n\n\n\n</div>\n\n\n\n\n<!-- OBJECT DISCUSSION SECTION -->\n\n<div>\n    <div class=\"object-collapes-title\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n        <div class=\"collapes-title_inner\">\n            Discussion\n        </div>\n        <span class=\"show-comment_inner\">\n            <span class=\"comment-amount\" > ");
  stack1 = helpers._triageMustache.call(depth0, "controller.megaResouce.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </span>\n        </span>\n        <div class=\"dropdownicon\">\n            <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n        </div>      \n    </div>\n\n\n\n    <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n        <div class=\"collapes-container_inner\" style=\"padding: 0;margin: 0;width: 100%;\">\n            <div  style=\"width: 98%;padding: 15px 10px;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n                <div style=\"margin:0 auto; padding: 0 0 0 50px;\">\n                    <a>\n                        <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; z-index: 1\" src=\"http://develop.devbox.s3.amazonaws.com/profile_pic/default/defaultpic1.jpg\" />\n                        <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; z-index:2\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.currentUser.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                        <div class='user-says-angle-before' style=\"left: 51px;\"></div>\n                        <div class='user-says-angle-after' style=\"left: 49px;\"></div>\n                    </a>\n\n                    <div class=\"\" style=\"width: 100%; border-radius: 2px;border: 1px solid #ddd;background-color: #fff;\">\n                        <div   style=\"margin: 0;width: 100%; height:100px;\">\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("commentContent"),
    'id': ("AddRecord"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                        </div>\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n\n                            <div class=\"message-btn easing\" style='width: 100%'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post </div>\n\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n            ");
  stack1 = helpers.each.call(depth0, "controller.megaResouce.comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n</div>\n\n\n</div>\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["photoCreate"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n        <p style=\"font-weight: bold;\">\n            Drag and drop. \n        </p> \n\n    </div>\n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n        Choose \n        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> \n    </div> \n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        <span class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "back", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Close</span>\n        <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Upload</span> \n    </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n\n\n\n        <div style=\"position: relative;margin:3px; display: inline-block; vertical-align: top; min-width: 150px;text-align: center;\">\n            <div> \n                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_image_original_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  alt=\"Logo\" style=\"max-width: 140px; max-height: 150px;\">\n                <div ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': ("photo_source_id")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"display: none;\">\n                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                </div>\n            </div>\n            <div style=\"margin: 2px 0 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px;\">");
  stack1 = helpers._triageMustache.call(depth0, "photo_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        </div>\n        ");
  return buffer;
  }

  stack1 = helpers.view.call(depth0, "HubStar.PhotoCreateView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["photoCreateInfoSetting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div style=\"position: relative; width: 29%;display: inline-block;height: 150px;vertical-align: top;overflow: hidden;margin: 15px;line-height: 150px;text-align: center;\">\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"\"/>\n    </div>\n    <div style=\"position: relative; width: 63%;display: inline-block; height: 150px; vertical-align: top; overflow: hidden; margin: 15px;  margin-left: 0;\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("title"),
    'id': (""),
    'class': ("edit_photo-titile_field")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("caption"),
    'id': (""),
    'class': ("edit_photo-caption_field2")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("\n\n\n\n<div class='controlbtn-field' style='position:relative;height: 85px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n    <span style=\"position: relative;display: inline-block;font-size: 40px;margin: 10px 0;vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n    <span style=\"position: relative;width: 87%;display: inline-block;margin: 10px 15px;\">\n        <span style='font-size: 20px;display: block;line-height: 25px;'>Congratulations! Your Photos have been uploaded!</span>\n        <span style='font-size: 13px;margin: auto;  display: block;line-height: 16px;'>Now, say something about the photo.</span>\n    </span>\n</div>\n\n\n\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; overflow: auto;\">\n\n\n\n    ");
  stack1 = helpers.each.call(depth0, "photoInfo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <span style='position: relative; float: left;margin: 23px;' class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backToDragAndDrop", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Select more</span>\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        <span class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "finishUploadingAndInfo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Skip</span> \n        <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitPhotoInfo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Submit</span> \n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["photoDisplayArea"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n\n\n\n<img class=\"mainfeature_object\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.selectedPhoto.photo_image_original_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["platformBar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                    <li> <span><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" > ");
  stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></span>\n                        <ul>\n                            <li>&nbsp;</li>\n                  \n                            <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -80px;  z-index: -1;\"></div>\n                            ");
  stack1 = helpers.each.call(depth0, "subcate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </ul>\n                    </li>\n                    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <li> <span><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" > ");
  stack1 = helpers._triageMustache.call(depth0, "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></span>\n                                <ul>\n                                    <li>&nbsp;</li>\n                                    <div style=\"width: 140%; height: 150%; position: absolute;margin-left: -20px; margin-top: -70px;  z-index: -1;\"></div>\n                                    ");
  stack1 = helpers.each.call(depth0, "subcategories", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </ul>\n                            </li>\n                            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    <li class=\"search_topic\"> <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "search_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >");
  stack1 = helpers._triageMustache.call(depth0, "search_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n\n\n                                    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                    <li><a  href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.myUserProfile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("/collections/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" > ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"plaform_bar\" >\n    <img src=\"../../../images/reflection.png\"/>\n    <div id=\"navContainer\" class=\"easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarScroll", {hash:{
    'target': ("view"),
    'on': ("mouseEnter")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n\n        <ul id=\"nav-ul\" >\n            <div style=\"width:90px; height: 100%; position: absolute; z-index: -1;\"></div>\n            <li> \n                <div> <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.user.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"profilepic_user\"/></div>\n            </li>\n\n            <li style=\"margin-top: 20px;\"> <div class=\"hint--right hint--rounded\" data-hint=\"Category\"><a href=\"#\"> <i class=\"icon-eye-open\" style=\"font-size: 20px;\"></i></a></div>\n                <ul class=\"firstList\" >\n                    <li>&nbsp;</li>\n                   \n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -155px; z-index: -1;\"></div>\n                    ");
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </li>\n            <li><div class=\"hint--right hint--rounded\" data-hint=\"Search for Location\"><a href=\"#\"> <i class=\"icon-globe\" style=\"font-size: 20px;\"></i></a></div>\n                <ul class=\"nav-geo-ul\">\n                    <li>&nbsp;</li>\n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -50px;  z-index: -1;\"></div>\n\n\n                    <li><div  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "userLocation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >Your location</br>\n                            (");
  stack1 = helpers._triageMustache.call(depth0, "userLocation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n                        </div></li>\n                    <li><div  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "Global", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >Global</div></li>\n                    <li><div  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "Australia", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >Australia</div></li>\n                    <li><div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "New Zealand", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >New Zealand</div></li>\n                    <li><div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "United States", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >United States</div></li>\n                    <li><div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "India", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >India</div></li>\n                    <li><div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "China", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >China</div></li>\n                    <li><div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "Asia", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >Asia</div></li>\n                </ul>\n            </li>\n\n\n            <li> <div class=\"hint--right hint--rounded\" data-hint=\"Your Collection\"><a href=\"#\"> <i class=\"icon-folder-open\" style=\"font-size: 20px;\"></i></a></div>   \n                <ul>\n                    <li>&nbsp;</li>\n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -50px;  z-index: -1;\"></div>\n                    ");
  stack1 = helpers.each.call(depth0, "controller.user.collections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </li>\n\n            <script>\n\n                $(\"#navContainer > ul > li >span\").hover(function() {\n                    $(\"#navContainer > ul > li\").not(this).removeClass('sidebar-hover');\n                });\n                $(\"#navContainer > ul > li> ul \").hover(function() {\n                    $(this).parent().addClass(\"sidebar-hover\");\n                });</script>\n\n\n            <li> <div class=\"hint--right hint--rounded\" data-hint=\"Feedback & Support\"><a href=\"http://about.trendsideas.com\"> <i class=\"icon-question-sign\" style=\"font-size: 20px;\"></i></a></div>   \n            </li>\n\n            <li> <div class=\"hint--right hint--rounded\" data-hint=\"Log out\"><a href=\"#\" onclick=\"logout();\"> <i class=\"icon-off\" style=\"font-size: 20px;\"></i></a></div>   \n            </li>\n        </ul>\n\n\n    </div>\n\n    <div class=\"showsidebar easing\"><k class=\"icon-circle-arrow-right\"></k></div>\n\n</div>\n\n\n\n<script>\n                function logout() {\n                    $.ajax({\n                        type: 'POST',\n                        url: getRestAPIURL() + '/logout',\n                        contentType: 'application/json; charset=uft-8',\n                        dataType: 'json',\n                        success: function(para) {\n                        }\n                    });\n                    localStorage.removeItem('loginStatus');\n                }\n                \n                \n\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                <div  id=\"flip-front\" class='blue-btn new-btn hint--left hint--rounded edit-dashboard-btn' style=\"display: block; margin: 10px;position: absolute;top: 0;right: 0;\" data-hint=\"Dashboard\"\n                      ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontClick", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                      <i class=\"icon-cogs\"></i>\n                </div>\n\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                <div style=\"display: inline-block; width: 350px;\">\n\n                                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("profile_name")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                </div>\n                                <div style=\"display: inline-block;vertical-align: bottom; margin-left:20px\">\n                                    <div class=\"new-btn blue-btn\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.profileName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                                    <div class=\"new-btn\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.profileName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove icon-white\"></i></div>\n                                </div>\n                                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <div style=\"display: inline-block; color: white; max-width: 750px; overflow: hidden; font-size: 28px; margin-bottom: 15px; line-height: 32px; vertical-align: middle;\">\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "profile_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </div>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                <div class=\"edit-btn easing hint--rounded hint--bottom\" data-hint=\"Edit content\" style=\"color: white;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.profile_name", "controller.profileName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                                     <i class=\"icon-edit\"></i>\n                                </div>\n                                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin:10px auto;display: block;width: 150px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisProfile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n                                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin:10px auto;display: block;width: 150px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisProfile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n\n                                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("                                             \n                                <a class='radius-circle' href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                    <div class=\"hint--bottom hint--rounded\" data-hint=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n                                    </div>\n                                </a>                                             \n                                ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("  \n                                        <li><div class=\"tags-before\"></div><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "keywordSearch", "keyword_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >");
  stack1 = helpers._triageMustache.call(depth0, "keyword_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n                                        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n                                ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                <div class=\"edit-btn easing hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "model.phone_number", "controller.contact", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                                     <i class=\"icon-edit\" ></i>\n                                </div>\n                                ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("first_name")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("last_name")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                                ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\">");
  stack1 = helpers._triageMustache.call(depth0, "first_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "last_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                                ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"new-btn\" style=\"margin: 4px 0px 0 20px;width: 100%;display: inline-block; text-align: left;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                                     <span id=\"profileCategorySelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileCategorySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                                    <span class=\"caret\"></span>\n                                                    ");
  stack1 = helpers['if'].call(depth0, "controller.profileCategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                </div>\n                                                ");
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                                    ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\"><a >");
  stack1 = helpers._triageMustache.call(depth0, "model.profile_category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></div>\n                                                ");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div  class=\"new-btn\" style=\"margin: 4px 0px 0 20px;width: 100%;display: inline-block; text-align: left;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "subcategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                                      <span id=\"profileSubcategorySelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileSubcategorySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                                    <span class=\"caret\"></span>\n                                                    ");
  stack1 = helpers['if'].call(depth0, "controller.profileSubcategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                </div>      \n                                                ");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\"><a >");
  stack1 = helpers._triageMustache.call(depth0, "model.profile_subcategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></div>\n                                                ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("address"),
    'placeholder': ("Street Address")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("suburb"),
    'placeholder': ("Suburb")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("region"),
    'placeholder': ("Region")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("country"),
    'placeholder': ("country")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                                ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.address", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.suburb", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.region", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.country", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(43, program43, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                                ");
  return buffer;
  }
function program37(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\">");
  stack1 = helpers._triageMustache.call(depth0, "address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",</div>\n                                                ");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\">");
  stack1 = helpers._triageMustache.call(depth0, "suburb", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",</div>\n                                                ");
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\">");
  stack1 = helpers._triageMustache.call(depth0, "region", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",</div>\n                                                ");
  return buffer;
  }

function program43(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\">");
  stack1 = helpers._triageMustache.call(depth0, "country", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                                ");
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("profile_contact_number")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                                ");
  return buffer;
  }

function program47(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\">");
  stack1 = helpers._triageMustache.call(depth0, "profile_contact_number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                                ");
  return buffer;
  }

function program49(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("website")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                                                ");
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <div class=\"Contact_2child\"><a href=\"#\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gotoSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "website", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></div>\n                                                ");
  return buffer;
  }

function program53(depth0,data) {
  
  
  data.buffer.push("\n\n\n                                ");
  }

function program55(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n                                    <div  type=\"button\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.contact", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n                                    <div  type=\"button\" class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.contact", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n                                </div>\n                                ");
  return buffer;
  }

function program57(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(58, program58, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }
function program58(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                <div class=\"edit-btn easinghint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "model.profile_name", "controller.timeSetting", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                                     <i class=\"icon-edit\"></i>\n                                </div>\n                                ");
  return buffer;
  }

function program60(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                                <table id=\"aside_contact\">\n                                    \n                                    <tbody>\n                                        \n                                            ");
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(63, program63, data),fn:self.program(61, program61, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                            ");
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(67, program67, data),fn:self.program(65, program65, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                       \n                                    </tbody>\n                                </table>\n\n\n                                ");
  return buffer;
  }
function program61(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                            \n                                             <th class=\"Contact_1child\">");
  stack1 = helpers._triageMustache.call(depth0, "day", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n                                           \n                                            ");
  return buffer;
  }

function program63(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                           <td> ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("inserthours-day"),
    'value': ("day")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n                                            ");
  return buffer;
  }

function program65(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                            <th class=\"Contact_2child\">");
  stack1 = helpers._triageMustache.call(depth0, "time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n                                            ");
  return buffer;
  }

function program67(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                          <td>  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("inserthours-time"),
    'value': ("time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n                                            ");
  return buffer;
  }

function program69(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                                <div style=\"width: 75px;margin: auto;\">\n                                    <div class=\"new-btn blue-btn\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.timeSetting", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                                    <div class=\"new-btn\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.timeSetting", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove icon-white\"></i></div>\n                                </div>\n                                ");
  return buffer;
  }

function program71(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><a href=\"#tab4\" data-toggle=\"tab\">Authority Settings</a></li>                \n                ");
  return buffer;
  }

function program73(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><a href=\"#tab5\" data-toggle=\"tab\">Keywords Settings</a></li>\n                ");
  return buffer;
  }

function program75(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program77(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                ");
  return buffer;
  }

function program79(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div style=\"width: 700px; min-height: 100px; background-color: #f3f3f3; margin: 10px auto;padding: 5px 8px;position: relative;\">\n                    <div style=\"font-size: 13px; font-weight: bold;color: #aaa;position: absolute;bottom: 5px;text-align: center;width: 684px;\">Keywords in this area can be showed on the profile, drag from the pool below. (maximum 10 keywords)</div>\n                    ");
  stack1 = helpers.each.call(depth0, "controller.show_keyword_array", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(80, program80, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                      \n                </div>\n                ");
  return buffer;
  }
function program80(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("                    \n                    <div class='hashtags' style=\"margin: 2px 3px;\">");
  stack1 = helpers._triageMustache.call(depth0, "keyword_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(81, program81, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>                    \n                    ");
  return buffer;
  }
function program81(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<i class='remove-hashtages' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteKeywords", "keyword_id", "show", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data})));
  data.buffer.push(">x</i>");
  return buffer;
  }

function program83(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers.view.call(depth0, "HubStar.KeywordView", {hash:{
    'elementIdBinding': ("keyword_id")
  },hashTypes:{'elementIdBinding': "STRING"},hashContexts:{'elementIdBinding': depth0},inverse:self.noop,fn:self.program(84, program84, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program84(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div class='hashtags' style=\"margin: 2px 3px;\">");
  stack1 = helpers._triageMustache.call(depth0, "keyword_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(85, program85, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        ");
  return buffer;
  }
function program85(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<i class='remove-hashtages' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteKeywords", "keyword_id", "all", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],data:data})));
  data.buffer.push(">x</i>");
  return buffer;
  }

function program87(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(88, program88, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program88(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div style=\"position: relative; margin: 15px auto;height: 520px; width: 87%; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\">\n                    <div style=\"top: 190px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n\n\n                        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n                        <p style=\"font-weight: bold; margin: 10px;\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "controller.UploadImageMode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n                        </p>\n                        <span style='font-size: 17px;display: block;line-height: 25px;'>Please select one photo for your choice.</span>   \n                        <span style='font-size: 17px;display: block;line-height: 25px;'> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.RequiredImageSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                        <span style='font-size: 17px;display: block;line-height: 25px;'> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.CurrentImageSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n\n                    </div>\n                    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 550px; position: absolute;left: 0;\">\n                        Choose \n                        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n                        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> </div>\n                    </div>\n\n                    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:block\">\n                        <div style=\"position: relative;margin:3px; display: inline-block; vertical-align: top; min-width: 150px;text-align: center;\">\n                            <div>\n                                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 140px; max-height: 150px;\">\n                                <div id='uploadStyleImg' style=\"display: none;\">\n                                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                                </div>\n                            </div>\n                            <div style=\"margin: 2px 0 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px;\">");
  stack1 = helpers._triageMustache.call(depth0, "newStyleImageName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"\" style=\"margin-top: 20px;\">\n                    <div class=\"controlbtn\" style=\"left: 300px;\">\n\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isCrop", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(91, program91, data),fn:self.program(89, program89, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isUpload", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(95, program95, data),fn:self.program(93, program93, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        <a href=\"#tab1\" data-toggle=\"tab\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><span class=\"new-btn\">Close</span></a>\n\n\n                    </div>\n                </div>\n                ");
  return buffer;
  }
function program89(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Crop</span>\n                        ");
  return buffer;
  }

function program91(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" >Crop</span>\n                        ");
  }

function program93(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Upload</span>\n                        ");
  return buffer;
  }

function program95(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" >Upload</span>\n                        ");
  }

function program97(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n                ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n                ");
  return buffer;
  }

function program99(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n                <div class='' style='position:relative;height: 65px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n                    <span style=\"position: relative;display: inline-block;font-size: 40px; vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n                    <span style=\"position: relative;width: 87%;display: inline-block;margin: 0 15px;\">\n                        <span style='font-size: 20px;display: block;line-height: 25px;font-weight: bold'>Crop your picture now!</span>\n                        <span style='font-size: 15px;display: block;line-height: 15px;'> Image Size: <span id=\"log\"></span> </span>  \n                    </span>\n                </div>\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isProfilePicture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(100, program100, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.isProfileHero", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(102, program102, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isProfileBackground", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(104, program104, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            <canvas id=\"panel\" class=\"crop-canvas\" style=\"height: 100%;width: auto;margin: 0 auto; \"><img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ></canvas>\n                        </div>\n\n\n\n                        <div class=\"\" style=\"margin-top: 5px;\">\n\n                            <div class=\"controlbtn\" style=\"left: 34%;\">\n                                <span class=\"new-btn green-btn \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ><k class='icon-save'> &nbsp;Save</span>\n                                <a href=\"#tab1\" data-toggle=\"tab\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">   <span class=\"new-btn\" >Back</span> </a>\n\n                            </div>\n                        </div>\n                        ");
  return buffer;
  }
function program100(depth0,data) {
  
  
  data.buffer.push("\n                <div id=\"crop-container\" style=\"width: 820px;height: 500px;margin: 10px auto; text-align: center\">          \n                    ");
  }

function program102(depth0,data) {
  
  
  data.buffer.push("\n                    <div id=\"crop-container\" style=\"width: 830px;height: 500px;margin: 10px auto; text-align: center\">\n                        ");
  }

function program104(depth0,data) {
  
  
  data.buffer.push("\n                        <div id=\"crop-container\" style=\"width: 850px;height: 500px;margin: 10px auto; text-align: center\">\n                            ");
  }

function program106(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n                        <div class='' style='line-height: 45px;position:relative;height: 50px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 5px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n                            <span style=\"position: relative;display: inline-block;font-size: 40px;vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n                            <span style=\"position: relative;width: 87%;display: inline-block;margin: 0 15px;\">\n\n                                <span style='font-size: 20px;display: block;line-height: 15px;'>Congratulations! Your Photos have been uploaded!</span>\n                            </span>\n                        </div>\n\n                        <div style=\"position: relative; margin: auto;height: 500px; width: 690px; overflow: hidden;line-height: 490px;\">\n                            <div style=\"position: relative;margin:3px;text-align: center;overflow: hidden;\">\n\n                                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" >\n                            </div>\n                        </div>\n                        <div class=\"\" style=\"\">\n\n\n                            <div class=\"controlbtn\" style=\"left: 34%;\">\n\n                                <a href=\"#tab1\" data-toggle=\"tab\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">   <span class=\"new-btn\" >Finish</span> </a>\n                            </div>\n                        </div>\n                        ");
  return buffer;
  }

function program108(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryCollectionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program110(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "masonryCollectionItems", options) : helperMissing.call(depth0, "render", "masonryCollectionItems", options))));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program112(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program114(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "review", "", options) : helperMissing.call(depth0, "render", "review", "", options))));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program116(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "render", "footer", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program118(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.GoogleMapPopupView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program120(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SelectFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"profile-wallpaper\" style=\"width: 100%; height: 500px; overflow: hidden; position: fixed; top: 70px;\">\n    <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.profile_bg_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width: 100%; height:auto;\">\n</div>\n<div style=\"width: 100%; height:250px; position: relative; display: block; opacity: 0;\">\n</div>\n<div style=\"position: absolute;\">\n    ");
  stack1 = helpers['if'].call(depth0, "controller.contactChecking", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n<div class=\"hover panel\" style='z-index: 0; float: none;position: relative; width: 87%; height: auto; margin:  auto; background: #fff; box-shadow: 0px 0px 8px #555; border-radius: 3px 3px 0 0;max-width: 1260px;min-width: 1250px;overflow: hidden;'>\n\n    <div class=\"front\" style=\"text-align: inherit; width: auto; height: auto; box-shadow: none; border: none; position: relative;\">\n\n        <div class=\"profilewrapper premium\">\n            <!--corpbanner-->\n\n            <div class=\"profilecorpbanner\"    style=\"\">\n                <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.profile_hero_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width:100%;\"/>\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"corpbanner_mask\" style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute;bottom:0; width: 100%; height: 200px;\">\n                    <div class=\"corpbanner_content\" style=\"position: absolute;bottom:0;margin-left: 30%;width: 70%;\">\n                        <div class=\"main_title\" style=\"height: 100px;\">\n\n                            <div>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.editing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n\n\n                            <!--STAR RATING-->\n                            <div style=\"position: absolute;width: 500px;\">\n                                <span class=\"stars\" style=\"float: left;margin: 5px 15px 5px 0;\" ><span id=\"starsize\" ></span></span>  \n                                <div class=\"hint--right hint--rounded\" data-hint=\"Review this profile!\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "rateEditing", "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n                                     <div class=\"contactmeicon easing\" style=\"float: left;  width: 35px; height: 35px;line-height: 31px;text-align: center;font-weight: bold;font-size: 13px;border: 2px solid #aaa;\">");
  stack1 = helpers._triageMustache.call(depth0, "profile_average_review", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                    <div class=\"hover-opacity\" style=\"font-size: 13px; font-weight: bold; color: #fff; cursor: pointer;  float: left;  margin: 8px 10px;\">");
  stack1 = helpers._triageMustache.call(depth0, "reviews.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" • Reviews</div> \n                                </div>\n                            </div>   \n\n\n                            <!--contact me-->\n                            <div class=\"contactmebtn hint--bottom hint--rounded easing\" data-hint=\"Contact us!\">\n                                <a class=\"contactmeicon easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n                            </div>\n                            <!--contact me-->\n\n                            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Share this profile!\" >\n                                <a class=\"contactmeicon easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-share-alt easing\" style=\"font-size: 19px;\"></i></a>\n                            </div>\n\n                            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"width: 150px;  padding: 0;right: 45px;top: 70px;position: absolute;\">\n                                <!--<li style=\"position:fixed;z-index:0;height:100%;width:100%;\" onClick=\"document.getElementById('dropdown_id_'+");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(").style.display='none' \">&nbsp;<li>-->\n                                <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n                            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n                            </li>\n                            <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n                        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n                        </li>\n                        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n                    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n                    </li>\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</div>\n</div>\n\n\n<div style=\"position: relative; width: 100%;background-color: rgb(242,240,240); border-radius: 0 0 3px 3px;\">\n\n    <!--PROFILE PAGE LEFT SIDE-->\n\n\n    <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n        <tbody>\n            <tr>\n                <!--LEFT COL BEGINS -->\n                <td class=\"left_col\" width=\"29%\" valign=\"top\">\n                    <div class=\"profileaside\">\n                        <div class=\"profileaside_content\">\n                            <div class=\"aside-profilepic\">\n                                <div style=\"min-height: 175px; overflow: visible; line-height: 175px;margin-bottom: 20px;\" data-hint=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                    <a href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.profile_pic_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"border:5px solid white;box-shadow: 0px 0px 5px #888;min-height: 0;width: 100%\">\n                                    </a> \n                                </div>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.follow_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            </div>\n\n\n                            <div class=\"LatestFollower\">\n\n                                ");
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            </div>\n                            <div class=\"Followed-by easing\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollower", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">Followed by ");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileFollowerStatistics", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" people.</div>\n\n\n\n                            <!--KEYWORDS SECTION-->\n                            <div class=\"aside-container\"> \n                                <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'>\n                                    <i class='icon-bookmark' style='margin-right: 10px;'></i>Keywords\n                                </div>\n\n                                <div style='width: 100%;min-height: 100px;'>\n                                    <ul class=\"Client-Keywords-tags\">    \n                                        ");
  stack1 = helpers.each.call(depth0, "controller.show_keyword_array", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </ul>\n                                </div>                                            \n                            </div>\n\n\n\n\n                            <!--PROFILE CONTACT SECTION-->\n\n\n\n                            <div class=\"aside-container\" style=\"\">\n                                <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'><i class='icon-phone' style='margin-right: 10px;'></i>Contact Detail</div>\n                                ");
  stack1 = helpers.unless.call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                <table id=\"aside_contact\" >\n                                    <tbody>\n                                        <tr>\n\n                                            <th>Contact:</th>\n                                            <td>\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            </td>\n                                        </tr>\n                                        <tr>\n\n                                            <th>Category:</th>\n                                            <td>\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(28, program28, data),fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <th>Subcategory:</th>\n                                            <td>\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(32, program32, data),fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            </td>\n                                        </tr>   \n                                        <tr>\n                                            <th>Address:</th>\n                                            <td>\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            </td>\n                                        </tr>\n\n                                        <tr>\n                                            <th>Phone:</th>\n                                            <td>\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(47, program47, data),fn:self.program(45, program45, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <th>Website:</th>\n                                            <td>\n                                                ");
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(51, program51, data),fn:self.program(49, program49, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                            </td>\n                                        </tr>\n\n                                    </tbody>\n                                </table>\n                                ");
  stack1 = helpers.unless.call(depth0, "controller.editingContact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(55, program55, data),fn:self.program(53, program53, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n                            <!--PROFILE HOURS SECTION-->\n\n                            <div class=\"aside-container\" style=\"border-top: 1px solid #fff;\">\n                                <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'><i class='icon-time' style='margin-right: 10px;'></i>Hours</div>\n\n                                ");
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(57, program57, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                ");
  stack1 = helpers.each.call(depth0, "controller.hours", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(60, program60, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.editingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(69, program69, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n\n                            <!--PROFILE GOOGLEMAP SECTION--> \n                            <div class=\"aside-container\" style=\"border-bottom:0 none;border-top: 1px solid #fff;\">\n                                <div id=\"google-map\"  style=\"width: 300px;height: 250px; border: 5px solid #fff;cursor: pointer\" >\n                                    <div class=\"enlarge-map easing\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popUpGoogleMap", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-resize-full\"></k></div>\n                                    <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.profile_google_map")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width: 100%; height:auto;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popUpGoogleMap", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n                <!--LEFT COL ENDS -->\n\n                <!--RIGHT COL BEGINS -->\n                <!--PROFILE PAGE MAIN PART-->\n                <td class=\"right_col\" width=\"70%\" valign=\"top\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ProfileAboutUsEditView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </td>\n\n\n                <!--RIGHT COL ENDS -->\n            </tr>\n        </tbody>\n    </table>\n</div>\n</div>\n\n</div>\n\n\n<div class=\"back t-style-box\"  style='width: 100%;height:auto;  background-color:white; border-radius: 3px;border:none;position:absolute;top:0;left:0;'>\n    <div style=\"position: relative; top: 0; width: 100%;height: 300px;overflow: hidden; border-radius: 3px 3px 0 0;\">\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.profile_hero_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width:100%;\"/>\n        <div style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute; width: 100%; height: 200px; bottom: 0;\">\n            <div style='font-size: 45px;color: white;font-weight: bold;line-height: 50px;margin: 40px  60px;bottom: 0;position: absolute;'>\n                <k class='icon-cogs'>&nbsp;</k>Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"tabbable\">\n        <div class=\"tabs-left\">\n            <ul class=\"nav nav-tabs easing\">\n                <li class=\"active\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><a href=\"#tab1\" data-toggle=\"tab\">Style up!</a></li>\n                <li class=\"easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><a href=\"#tab2\" data-toggle=\"tab\">General Settings</a></li>\n                <li class=\"easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><a href=\"#tab3\" data-toggle=\"tab\">Account Settings</a></li>\n                <li class=\"easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><a href=\"#tab7\" data-toggle=\"tab\">Social Link</a></li>\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(71, program71, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("   \n                ");
  stack1 = helpers['if'].call(depth0, "controller.isKeywordObjecttExist", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(73, program73, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n\n        <div class=\"tab-content easing\">\n            <div class=\"tab-pane active\" id=\"tab1\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Style up your profile!</div>\n\n                <div class='styleup_section'>\n                    <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Profile Picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                       <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                         <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                            <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Picture</span>\n                        </div>\n                    </a>\n                    <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                        <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                    </div>\n                </div>\n\n                <div class='styleup_section easing'>\n                    <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Profile Hero", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                       <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                         <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                            <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Hero</span>\n                        </div>\n                    </a>\n                    <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                        <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("profile_hero_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("/>\n                    </div>\n                </div>\n\n                <div class='styleup_section easing'>\n                    <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Background", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                       <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                         <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                            <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Background</span>\n                        </div>\n                    </a>\n                    <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                        <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("profile_bg_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                    </div>\n                </div>\n\n\n\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class='new-btn blue-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n\n            <div class=\"tab-pane\" id=\"tab2\">\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">General Settings</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n\n                    <tr>\n                        <td>Profile Name*: </td>\n                        <td>\n                            <div style=\"display: block;\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_name"),
    'class': ("mustFill1"),
    'placeholder': ("Heritage Tiles NZ")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                            <div class=\"mustfull\" id=\"mustFill1\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Profile Contact:</td>\n                        <td>\n                            <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                <div  style=\"margin: 0;width: 50%;display: inline-block;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                                <div style=\"margin: 0;width: 49%;display: inline-block;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n\n                            </div>\n                        </td>\n                    </tr>\n\n\n\n                    <tr>\n                        <td style=\"text-align: right;\" >Profile Category:</td> \n\n                        <td>\n                            <div  style=\"display: block; margin-bottom: 0px;\" >\n                                <div class=\"new-btn\" style=\"margin:0;width: 50%;display: inline-block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                     <span id=\"profileCategorySelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileCategorySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                    ");
  stack1 = helpers['if'].call(depth0, "controller.profileCategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(75, program75, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </div>\n                                <div  class=\"new-btn\" style=\"margin: 0;width: 49%;display: inline-block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "subcategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                      <span id=\"profileSubcategorySelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.profileSubcategorySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                    ");
  stack1 = helpers['if'].call(depth0, "controller.profileSubcategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(75, program75, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </div>                              \n                            </div>\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Physical Address:</td>\n                        <td>\n                            <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                <div  style=\"margin: 0;width: 50%;display: inline-block;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("address"),
    'placeholder': ("Street Address")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                                <div style=\"margin: 0;width: 49%;display: inline-block;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("suburb"),
    'placeholder': ("Suburb")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n\n                            </div>\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Contact Number:</td>\n                        <td>\n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_contact_number"),
    'placeholder': ("0987364531")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Website:</td>\n                        <td>\n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website"),
    'placeholder': ("yourdomain.com")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Website URL:</td>\n                        <td>\n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website_url"),
    'placeholder': ("http://www.yourdomain.com")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Profile Cover Text:</td>\n                        <td>\n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_cover_text"),
    'placeholder': ("Small profile description")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Gooogle Analytics Tracking ID:</td>\n                        <td>\n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_analytics_code"),
    'placeholder': ("UA-44575103-1")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n\n                </table>\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdateGeneral", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn blue-btn flip-back' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n\n\n\n\n\n            <div class=\"tab-pane\" id=\"tab3\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Account Settings</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n\n                        <tr>\n                            <td>Country*:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("country"),
    'class': ("country"),
    'placeholder': ("New Zealand"),
    'value': ("New Zealand")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'value': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Region*:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("region"),
    'class': ("region"),
    'placeholder': ("Auckland")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Direct Enquiry Email*:</td>\n\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("contact_email"),
    'class': ("mustFill4"),
    'placeholder': ("superman@hubstar.com")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Secondary  Email (cc):</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("secondary_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>DirectEnquiry Provide Email (bcc):</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("direct_enquiry_provide_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Editor*:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%; height: 100px;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("editors"),
    'class': ("mustFill6 no-resize"),
    'placeholder': ("Ironman@hubstar.com, CaptainAmerica@hubstar.com, hulk@hubstar.com")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn blue-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n            <div class=\"tab-pane\" id=\"tab7\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Social Link</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>Facebook:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"facebook\" style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("facebook"),
    'placeholder': ("eg:www.facebook.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Twitter:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"twitter\" style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("twitter"),
    'placeholder': ("eg:www.twitter.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Google+:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"googleplus\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("googleplus"),
    'placeholder': ("eg:plus.google.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Pinterest:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"pinterest\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("pinterest"),
    'placeholder': ("eg:www.pinterest.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Linkedin:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"linkedin\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("linkedin"),
    'placeholder': ("eg:www.linkedin.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                        <tr>\n                            <td>Youtube:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"youtube\" style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("youtube"),
    'placeholder': ("eg:www.youtube.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn blue-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n\n            <div class=\"tab-pane\" id=\"tab4\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Authority Settings</div>\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" class='profilesnew-table' style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n\n                        <tr>\n                            <td>Active*:</td>\n                            <td>\n                                <div class=\"new-btn\" style=\"display: block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectActiveDropdownType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                                     <span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.projectActiveDropdownContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                </div>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.isActiveDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(77, program77, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Deleted*:</td>\n\n                            <td>\n                                <div class=\"new-btn\" style=\"display: block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectDeleteDropdownType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                                     <span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.projectDeleteDropdownContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                </div>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.isDeleteDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(77, program77, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td> Package:</td>\n                            <td>\n                                <div class=\"new-btn\" style=\"display: block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectCategoryDropdownType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                                     <span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.projectCategoryDropdownContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                </div>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.isPackgetDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(77, program77, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </td>\n                        </tr>\n                        <tr>\n                            <td> Creator:</td>\n                            <td>\n                                <div class=\"disabled-btn\" style=\"display: block; font-size: 12px;\">\n                                    <span> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.profile_creator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Boost:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill4")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Domains:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("domains"),
    'class': ("mustFill4")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                                <div class=\"mustfill\" id=\"emailFormat6\" style=\"display: none\">not correct email format.....</div>\n                                <div class=\"mustfull\" id=\"mustFill6\" style=\"display: none\">please fill in info... </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Keywords:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%; height:100px;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("keywords"),
    'class': ("no-resize"),
    'placeholder': ("* Please ensure you use a commer seperated list!!! ie: bathroom, kitchen, living room")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn blue-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n            <div class=\"tab-pane\" id=\"tab5\">\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 5px;\">Keywords Settings</div>\n                <div style=\"font-size: 15px; font-weight: bold;color: #555; text-align: center;margin: 5px auto 20px;\">You have ");
  stack1 = helpers._triageMustache.call(depth0, "keyword_left", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" keywords left out of  (");
  stack1 = helpers._triageMustache.call(depth0, "keyword_num", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(").</div>\n                ");
  stack1 = helpers.view.call(depth0, "HubStar.KeywordDropTargetView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(79, program79, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div style=\"width: 700px; border: 1px solid #ddd;margin: 0 auto;border-radius: 3px;\">\n\n                    <div class=\"keyword-pool\" style=\"\">\n                        ");
  stack1 = helpers.each.call(depth0, "controller.keywords_array", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(83, program83, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n\n                    <div  style=\"margin: 0;width: 657px; height:50px;border-top: 1px dashed #aaa;overflow: hidden;\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("add_keywords"),
    'class': ("no-resize no-effect"),
    'placeholder': ("* Please ensure you use a commer seperated list!!! ie: bathroom, kitchen, living room")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div class=\"new-btn\" style=\"float: right;top: -50px;height: 51px;line-height: 50px;right: -1px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addKeywords", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Add</div>\n                </div>\n\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn blue-btn flip-back' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n            <div class=\"tab-pane\" id=\"fileuploader\">\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isPhotoUploadMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(87, program87, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(97, program97, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isPhotoEditingMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(99, program99, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isFinished", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(106, program106, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.switchPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(110, program110, data),fn:self.program(108, program108, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(112, program112, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.rateTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(114, program114, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  stack1 = helpers.unless.call(depth0, "HubStar.isLogin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(116, program116, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.popUpMap", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(118, program118, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.makeSelection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(120, program120, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["profileAboutUsEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                    <div style=\"right: 45px; position: absolute;top: 45px;\">\n                        <div class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yesAbout", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                        <div class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    </div>\n\n                    <div style=\"height: 300px;margin-top: 35px;\">\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isAboutUsObjectExist", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n\n\n                </div>\n                <div style=\"right: 40px;bottom: 25px;position: absolute;\">\n                    <div class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yesAbout", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                    <div class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                </div>\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.AboutUsView1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.HtmlEditorView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isAboutUsObjectExist", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                <div class=\"edit-btn hint--rounded hint--bottom\" style=\"margin: 0 0 15px 120px;\" data-hint=\"Edit content\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.about_me", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                     <i class=\"icon-edit\"></i>\n                </div>\n\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div style=\"display: block; width: 100%\" >");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.AboutUsView1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div style=\"display: block; width: 100%\" >");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.profile_about_us", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "facebook", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-facebook\"> </k></a>\n                </li>\n                ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-twitter\"> </k></a>\n                </li>\n                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "googleplus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-google-plus\"> </k></a>\n                </li>\n                ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "pinterest", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-pinterest\"> </k></a>\n                </li>\n                ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "linkedin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-linkedin\"> </k></a>\n                </li>\n                ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "youtube", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-youtube-play\"> </k></a>\n                </li>\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"profilemain\" style=\"\">\n\n    <div class=\"profile-main-content\" style=\"margin: 20px 0;width: 95%;\">\n\n        <div class=\"main_aboutus\" style=\"\">\n            <p style='display: inline-block; font-size: 18px;'>\n                <i class='icon-group' style='margin-right: 10px;display: inline-block;'></i>About Us\n            </p>\n            <div class=\"editor-content\" style=\"margin-top: -20px;\">\n                <div style=\"display: inline-block;\">\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.editingAbout", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n\n\n        <div style=\"height: 40px; bottom: 0;width: 700px;position: absolute;margin-bottom: 15px;\">\n            <ul class=\"locationandlinks\">\n\n                ");
  stack1 = helpers['if'].call(depth0, "facebook", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "googleplus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "pinterest", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "linkedin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "youtube", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            </ul>\n        </div>\n\n    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["profileFollowers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"col1 box style-box t-style-box\" style=\"text-align: center; height: 200px;\">\n        <div class=\"usersobject-hover\">\n            <a href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "follower_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"><img style=\"width: 100%; height: 100%;cursor:pointer\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("follower_profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /></a>\n        </div>\n        <div style=\"height:35px; line-height: 35px;\">\n            <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </span>\n        </div>\n    </div>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["profileNew"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div style=\"display:inline-block\" id=\"secondAdd\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addThird", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-plus\" ></k></div>\n                            <div style=\"display:inline-block\" id=\"secondDelete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteSecond", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-minus\" ></k></div>\n                            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div style=\"display:inline-block\" id=\"secondDelete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteSecond", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-minus\" ></k></div>\n                            ");
  return buffer;
  }

  data.buffer.push("\n \n<div class=\"profilegb\" style=\"width: 100%;height: auto;\">\n    <div style=\"width: 100%; height: 100%; overflow: hidden; position: fixed;\"> \n        <img src=\"../../../images/landingpagebg.jpg\" style=\"width: 100%; height:100%; \">\n    </div>\n\n    <div style=\"position: relative; height: 400px; top: 200px; width: 715px; margin: auto;\">\n\n        <img src=\"http://s3.hubsrv.com/trendsideas.com/profiles/trends-media-sales-marketing-services/profile_picture/Screen%20Shot%202013-09-05%20at%209_286x284.51\" style=\"width: 150px; height:auto;border: 3px solid white;box-shadow: 0px 0px 15px #555; float: left;\">\n\n        <div style=\"float: left;color: white; text-shadow: 0px 0px 15px #000;font-size: 40px;line-height: 50px;letter-spacing: 1px;margin: 24px 0 0 28px;\">\n            <p><b>SIGN UP NOW</b></p> \n            <p><b>TO TRENDS IDEAS SPACE</b></p>        \n        </div>\n    </div>\n\n    <div class=\"profilewrapper\" style=\"z-index: 5; position: relative; width: 980px;  margin: auto;background: white; box-shadow: 0px 0px 13px; border-radius: 3px; bottom: 10px;\">\n\n        <div class=\"profilecorpbanner\" style=\" height: 400px; border-radius: 3px 3px 0 0; position: relative; overflow: hidden;\">       \n            <img src=\"../images/defaultcover4.jpg\" style=\"width: 100%;\"/>\n            <div class=\"corpbanner_mask\" style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute;bottom:0; width: 100%; height: 200px;\"></div>\n        </div>\n\n\n        <div style=\"padding: 10px; font-weight: bold; background-color: rgb(241, 238, 238);\"> Step 1. Package</div>\n        <div class=\"contactme-table easing\" style=\"width: 87%;margin: auto;padding-bottom: 160px; \" >\n            \n            <div id=\"gold\" class=\"profilenew-package hover-opacity easing\" style=\"cursor: pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "packageSelection", "gold", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">GOLD</div>\n            <div  id=\"silver\" class=\"profilenew-package hover-opacity easing\" style=\"cursor: pointer\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "packageSelection", "silver", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">SILVER</div>\n            <div  id=\"bronze\" class=\"profilenew-package hover-opacity easing\" style=\"cursor: pointer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "packageSelection", "bronze", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">BRONZE</div>\n\n        </div>\n        <div style=\"padding: 10px; font-weight: bold; background-color: rgb(241, 238, 238);\">Step 2. Client Detail</div>\n\n        <div class=\"mustfull\" id=\"errorMessage2\" style=\"display: none\">please fill in Client Email. </div>\n        <div class=\"mustfull\" id=\"errorMessage1\" style=\"display: none\">please fill in Client Name. </div>\n    \n        <div class=\"contactme-table easing\" style=\"width: 87%;margin: auto;padding-bottom: 50px;\">\n\n            <div style=\"padding: 0 20px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 40px 0 30px;\">\n                  \n                <div class=\"profilesnew-table\" style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                    <div style=\"display:table-row\">  \n                    </div>\n\n                    <div style=\"display:table-row\">\n                        <div style=\"display:table-cell; text-align: right;\">Client Name*:</div>\n                        <div style=\"display:table-cell\"> \n                            <div style=\"display: block;\">\n                                <div   id=\"clientNameField\" class=\"\"   style=\"margin: 10px 30px 5px 10px;;width: 70%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("client_name"),
    'class': ("clientName"),
    'placeholder': ("Your Name")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n\n                    <div style=\"display:table-row\">\n                        <div style=\"display:table-cell;text-align: right;\">Client Email*:</div>\n\n                        <div style=\"display:table-cell\"> \n                            <div style=\"display: block;\">\n                                <div   id=\"clientEmailField\"  style=\"margin: 10px 30px 5px 10px;;width: 70%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("owner"),
    'class': ("clientEmail"),
    'placeholder': ("emailaddress@yourdomain.com")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>   \n                            <div class=\"mustfull\" id=\"clientEmailFormat\" style=\"display: none\">not correct email format.....</div>\n                          \n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div style=\"padding: 10px; font-weight: bold; background-color: rgb(241, 238, 238);\">Step 3. Business Profile</div>\n\n        <div class=\"mustfull\" id=\"errorMessage3\" style=\"display: none\">please fill in Profile Name. </div>\n        <div class=\"mustfull\" id=\"errorMessage5\" style=\"display: none\">please fill in Contact Email. </div>\n        <div class=\"mustfull\" id=\"errorMessage6\" style=\"display: none\">please fill in Admins Emails. </div>\n         <div class=\"mustfull\" id=\"numberFormat\" style=\"display: none\">please fill in info as number </div>\n        <div class=\"mustfull\" id=\"errorMessage4\" style=\"display: none\">please select one from the dropdown list </div>\n        <div class=\"contactme-table easing\" style=\"width: 87%;margin: auto;padding-bottom: 0px;\">\n\n            <div id=\"step3\" style=\"padding: 0 20px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 40px 0 30px 20px;\">\n           \n\n                    <div style=\"display:table-row\">  \n                    </div>\n\n                    <div style=\"display:table-row\">\n                        <div style=\"display:table-cell;text-align: right;\" >Profile Name*: </div>                     \n                        <div style=\"display:table-cell\"> \n                            <div  id=\"profileNameField\" style=\"margin: 10px 30px 5px 10px;;width: 70%;\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_name"),
    'class': ("profileName"),
    'placeholder': ("Your Business Name")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n                            </div>\n                           \n                        </div>\n                    </div>\n\n\n                    <div style=\"display:table-row\">\n                        <div style=\"display:table-cell;text-align: right;\" >Profile Category*:</div> \n\n                        <div style=\"display:table-cell\">\n                            <div  style=\"display: block; margin-bottom: 0px;\" >\n                                <div id=\"categorySelectionCheck\"class=\"new-btn\" style=\"margin: 10px 10px 0;width: 34%;display: inline-block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                     <span id=\"categorySelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.categorySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                    ");
  stack1 = helpers['if'].call(depth0, "controller.categoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </div>\n                                <div id=\"subcategorySelectionCheck\" class=\"new-btn\" style=\"margin: 10px -1px 0;width: 34%;display: inline-block;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "subcategory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                     <span id=\"subcategorySelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.subcategorySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                    ");
  stack1 = helpers['if'].call(depth0, "controller.subcategoryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </div>                              \n                            </div>\n                        </div>\n                    </div>\n          <div style=\"display:table-row\">\n                        <div style=\"display:table-cell;text-align: right;\" >Physical Address*:</div>                      \n                        <div style=\"display:table-cell\">\n                            <div id=\"countrySelectionCheck\" class=\"new-btn\"  style=\"margin: 10px 30px 5px 10px;;width: 70%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "country", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                 <span id=\"countrySelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.countrySelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.countryDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"display:table-row\">\n                        <div style=\"display:table-cell;text-align: right;\" ></div>\n                        <div style=\"display:table-cell\">\n                            <div id=\"regionSelectionCheck\" class=\"new-btn\"  style=\"margin: 10px 30px 5px 10px;;width: 70%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "region", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                                 <span id=\"regionSelection\">");
  stack1 = helpers._triageMustache.call(depth0, "controller.regionSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                                ");
  stack1 = helpers['if'].call(depth0, "controller.regionDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>                  \n                        </div>\n                    </div>\n                    <div style=\"display:table-row\">\n                        <div style=\"display:table-cell;text-align: right;\" ></div>\n                        <div style=\"display:table-cell\"> \n                            <div style=\"display: block;\">\n                                <div    style=\"margin: 10px 30px 5px 10px;;width: 70%;\">\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("suburb"),
    'placeholder': ("Suburb")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                       </div>\n                    </div>\n                    <div style=\"display:table-row\">\n                        <div style=\"display:table-cell;text-align: right;\" ></div>\n                        <div style=\"display:table-cell\"> \n                            <div    style=\"margin: 10px 30px 5px 10px;;width: 70%;\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("address"),
    'placeholder': ("Street Address")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                        </div>\n                    </div>\n              \n\n                <div style=\"display:table-row\">\n                    <div style=\"display:table-cell;text-align: right;\" >Contact Name:</div>\n                    <div style=\"display:table-cell\"> \n                        <div  style=\"display: block; margin-bottom: 0px;\" >\n\n                            <div  style=\"margin: 10px 10px 0;width: 34%;display: inline-block;\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                            <div style=\"margin: 10px -3px 0;width: 34%;display: inline-block;\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <div style=\"display:table-row\">\n                    <div style=\"display:table-cell;text-align: right;\" >Contact Number:</div>\n                    <div style=\"display:table-cell\"> \n\n                        <div  style=\"display: block; \" >\n\n                            <div id=\"numberField\"  style=\"margin: 10px 10px 5px 10px;;width: 70%; display: inline-block\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_contact_number"),
    'class': ("contactNumber"),
    'placeholder': ("Your Business Contact Number")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                           \n                        </div>\n                    </div>\n                </div>\n\n                <div style=\"display:table-row\">\n                    <div style=\"display:table-cell;text-align: right;\" >Contact Email*:</div>\n\n                    <div style=\"display:table-cell\"> \n                        <div style=\"display: block;\">\n                            <div   id=\"contactEmailField\" style=\"margin: 10px 10px 5px 10px;;width: 70%; display: inline-block\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'id': ("contactEmail"),
    'valueBinding': ("direct_enquiry_emails"),
    'class': ("contactEmail"),
    'placeholder': ("emailaddress@yourdomain.com")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                            <div style=\"display:inline-block\" id=\"firstAdd\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addSecond", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-plus\" ></k></div> \n                        </div>     \n                        <div class=\"mustfull\" id=\"contactEmailFormat\" style=\"display: none;\">not correct email format.....</div>\n                    </div>\n\n                </div>\n\n                <div  id=\"secondEmail\" style=\"display:none;\">\n                    <div style=\"display:table-cell;text-align: right;\" >Contact Second Email:</div>\n\n                    <div style=\"display:table-cell\"> \n                        <div style=\"display: block;\">\n                            <div   id=\"contactEmailField2\" style=\"margin: 10px 10px 5px 10px;;width: 70%;display:inline-block\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("direct_enquiry_emails_2"),
    'id': ("contactEmail2"),
    'class': ("contactEmail"),
    'placeholder': ("emailaddress@yourdomain.com")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "view.added", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>     \n                        <div class=\"mustfull\" id=\"contactEmailFormat2\" style=\"display: none\">not correct email format.....</div>\n                    </div>\n\n                </div>\n\n                <div id=\"thirdEmail\" style=\"display:none;\">\n                    <div style=\"display:table-cell;text-align: right;\" >Contact Third Email:</div>\n\n                    <div style=\"display:table-cell\"> \n                        <div style=\"display: block;\">\n                            <div   id=\"contactEmailField3\" style=\"margin: 10px 10px 5px 10px;;width: 70%;display:inline-block\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'id': ("contactEmail3"),
    'valueBinding': ("direct_enquiry_emails_3"),
    'class': ("contactEmail"),
    'placeholder': ("emailaddress@yourdomain.com")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                            <div style=\"display:inline-block\" id=\"thirdDelete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteThird", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-minus\" ></k></div>\n                        </div>     \n                        <div class=\"mustfull\" id=\"contactEmailFormat3\" style=\"display: none\">not correct email format.....</div>\n                    </div>\n\n\n                </div>\n\n                <div style=\"display:table-row\">\n                    <div style=\"display:table-cell;text-align: right;\" >Website Name:</div>\n                    <div style=\"display:table-cell\"> \n                        <div style=\"display: block;\">\n                            <div  style=\"margin: 10px 30px 5px 10px;;width: 70%;\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website"),
    'placeholder': ("yourdomain.com")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div style=\"display:table-row\">\n                    <div style=\"display:table-cell;text-align: right;\" >Website URL:</div>\n                    <div style=\"display:table-cell\"> \n                        <div style=\"display: block;\">\n                            <div   style=\"margin: 10px 30px 5px 10px;;width: 70%;\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website_url"),
    'placeholder': ("http://www.yourdomain.com")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div style=\"display:table-row\">\n                    <div style=\"display:table-cell;text-align: right;\" >Profile URL*:</div>\n                    <div style=\"display:table-cell\"> \n                        <div style=\"margin: 10px 30px 5px 10px;;width: 70%; text-align: center;\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.form || (depth0 && depth0.form),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.profile_name", options) : helperMissing.call(depth0, "form", "controller.profile_name", options))));
  data.buffer.push("-");
  data.buffer.push(escapeExpression((helper = helpers.form || (depth0 && depth0.form),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.regionSelection", options) : helperMissing.call(depth0, "form", "controller.regionSelection", options))));
  data.buffer.push("-");
  data.buffer.push(escapeExpression((helper = helpers.form || (depth0 && depth0.form),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "controller.countrySelection", options) : helperMissing.call(depth0, "form", "controller.countrySelection", options))));
  data.buffer.push("\n                        </div>\n\n                    </div> \n                </div>\n\n                <div style=\"display:table-row\" id=\"addTR\">\n                    <div style=\"display:table-cell;text-align: right;\" >Admins*:</div>\n                    <div style=\"display:table-cell\"> \n                        <div style=\"display: block;\">\n                            <div   id=\"adminsField_1\" style=\"margin: 10px 10px 5px 10px;;width: 70%; display: inline-block;\">\n                                <input id=\"admins_1\"  type=\"text\" class=\"admins\" placeholder=\"emailaddress@yourdomain.com\"/>                           \n                            </div>\n                            <div style=\"display: inline-block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTRmore", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-plus\" ></k></div>\n                        </div>                   \n                        <div class=\"mustfill\" id=\"adminsEmailFormat_1\" style=\"display: none\">not correct email format.....</div>\n                    </div>                 \n                </div>\n            </div>\n         </div>\n\n            <div  style=\"display: block; margin: auto;   text-align: center;padding-bottom: 30px;\">\n                <a class=\"new-btn green-btn\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" style=\"width: 100px;\">Create Profile</a>\n            </div>\n\n        </div>\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["profilePartners"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"box style-box t-style-box col2\" id=\"addNew\" style=\"z-index: 0\">    \n    <div id=\"uploadObject\" >\n         <div class=\"add-new-object-hoverarea easing\">\n\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box col2\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n          \n        </div>\n    </div>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\">\n    <div class=\"masonry-object\">            \n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "itemProfiles", "", options) : helperMissing.call(depth0, "render", "itemProfiles", "", options))));
  data.buffer.push("\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n</div>\n\n\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["profileVideos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"box style-box t-style-box col2\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "videoCreateModeSwitch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" id=\"addNewVideo\"  style=\"z-index: 0\">    \n     <div id=\"uploadVideoObject\" >\n\n        <div class=\"add-new-object-hoverarea easing\">\n\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box col2\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ItemView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addVideo", options) : helperMissing.call(depth0, "render", "addVideo", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "videoesContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.is_video_create_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["profiles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<ul>\n    <li>\n        <h3> id | ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "profile", "", options) : helperMissing.call(depth0, "linkTo", "profile", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("   |   ");
  stack1 = helpers._triageMustache.call(depth0, "profile_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    </li>\n</ul>\n\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("\n\n<h1> profiles</h1>\n\n\n");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div class=\"select-interest\" style=\" height: 150px; width: auto;position: relative; float: left; margin: 10px 20px 60px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTopic", "id", "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                     <div id=\"minus_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"invite-this-friend radius-circle easing\" style=\"z-index: 10; right: 0;display:none;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTopic", "id", "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push("><k class=\"icon-minus\" ></k></div>\n                    <div id=\"plus_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"invite-this-friend radius-circle easing\" style=\"z-index: 10; right: 0;\" ><k class=\"icon-plus\" ></k></div>\n                    <div class=\"\" style=\"height: 100px;width: 100px;position: relative;border-radius: 50%;overflow: hidden;top: -5px;float: left; \">\n                        <div  class=\"usersobject-hoverarea easing\" style=\"height: 100px; width: 100px;\" >\n                        </div>\n                        <div style=\"position: relative;\">\n                            <div style=\"width: 100px; height: 100px; overflow: hidden;\">\n                                <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"min-height:100px; width: 100px; max-width: none;\"/>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"position: relative;text-align: center;font-size: 13px;width: 100px;line-height: 15px;\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n<div id=\"loading\" class=\"loading-visible\" >\n\n    <div id=\"blurringTextG\">\n        <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n            C</div>\n        <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n            t</div>\n        <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n            n</div>\n        <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n            g</div>\n        <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n            y</div>\n        <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n            o</div>\n        <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n            u</div>\n        <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n            d</div>\n        <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n            p</div>\n        <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n            c</div>\n        <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n            .</div>\n\n    </div>\n</div>\n\n");
  }

  data.buffer.push("<div class=\"Register-Page\" style=\"\">\n    <div style=\"width: 100%; height: 100%;position: absolute;min-height: 728px;min-width: 1100px;display: block;\">\n        <img src=\"../../../images/landingpagebg.jpg\" style=\"\"/>\n    </div>\n    <div style=\"width: 87%;margin: 40px auto;display: block;line-height: 45px;text-align: center;\">\n        <img class=\"logonew\" style=\"position: relative; height: 30px;margin: 8px;float: left;\" src=\"../../../images/landing-trends.png\">\n        <div style=\"position:relative; float:right;color: #fff; font-size:15px;font-weight: bold;\">\n            <span style=\"letter-spacing: 1px; margin: 0 0 0 10px;cursor:pointer;\" id=\"login-btn\" class=\"white-text-hover easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loginPane", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">LOG IN</span>\n            <span>&nbsp | &nbsp</span>\n            <a href=\"http://about.trendsideas.com\" target=\"blank\"><span class=\"white-text-hover easing\" style=\"letter-spacing: 1px; margin: 0 0 0 10px;\">HELP</span></a>\n        </div>\n\n        <div style=\"position: relative;  color: #fff; width: 500px; margin: auto;font-size: 13px; font-family: 'Montserrat', sans-serif; letter-spacing: 2px;opacity: .9;display: inline-block;\">\n            <span>83,000 IDEAS</span>\n            <span>&nbsp | &nbsp</span>\n            <span>210,000 PRODUCTS</span>\n            <span>&nbsp | &nbsp</span>\n            <span>650 SERVICES</span>\n        </div>\n\n    </div>\n\n\n    <img id=\"fadein-image\" style=\"position: relative;margin: 0 auto 40px; min-height: 150px;max-height: 256px; height: 20%;display: block; top: 5%;\" src=\"../../../images/landing-page-title(LOGO).png\">\n\n    <div id=\"profiles-main-container\" style=\"position: relative;width: 300px;text-align: center;top: 40px;margin: auto;display: block;left: 0;right: 0;\">   \n\n        <div id=\"click-register-social\" class=\"register-with easing social-active\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n            <i class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Register with social account</a>\n        </div>\n\n        <div id=\"social-link\" class=\"social-links-container\" style=\"display: block;\">\n\n            <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Facebook", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n                <i  class=\"icon-facebook\"></i>\n            </div>\n\n            <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Twitter", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-twitter\"></i>\n            </div>\n\n            <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Google", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i  class=\"icon-google-plus\"></i>\n            </div>\n\n            <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "LinkedIn", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i  class=\"icon-linkedin\"></i>\n            </div>\n\n            <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Sina", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-weibo\"></i>\n            </div>\n\n        </div>\n\n\n        <!--This is the email register section-->\n        <div>\n            <div id=\"click-register\" class=\"register-with easing register-clicker\">\n                <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Register with Email</a>\n            </div>\n\n            <div   id=\"register-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n                <div style=\"padding: 0 8px;position: relative;\">\n\n                    <div style=\"border-bottom: 1px solid #e3e3e3; border-top:1px solid #e3e3e3;\">\n                        <div id=\"first_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        </div>\n\n                        <div id=\"last_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n\n                    <div  id=\"email\" class=\"login-textfield\" style=\"\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'valueBinding': ("email"),
    'placeholder': ("Your Email")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div id=\"password\" class=\"login-textfield\"  style=\"\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'type': ("password"),
    'valueBinding': ("password"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signUp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" > Register</div>\n            </div>\n\n\n            <div id=\"register-with-email-step-2\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n                <div style=\"padding: 0 8px;position: relative;\">\n\n                    <div  class=\"login-textfield\" style=\"border-top:1px solid #e3e3e3;\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DoneEnterKeyTextFieldView", {hash:{
    'valueBinding': ("region"),
    'placeholder': ("Region")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div style=\"border-bottom: 1px solid #e3e3e3;\">\n                        <div class=\"login-select easing\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setmale", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                             Male\n                    </div>\n\n                    <div class=\"login-select easing\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setfemale", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                         Female\n                </div>\n            </div>\n\n            <div class=\"login-textfield\"  style=\"margin: 0;width: 100%;height: 45px;line-height: 45px;border-bottom: 1px solid #e3e3e3;\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DoneEnterKeyTextFieldView", {hash:{
    'valueBinding': ("age"),
    'placeholder': ("How old are you?")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"back-btn easing\" style=\"\" >Back</div>\n        <div class=\"register-btn easing register-btn-small\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Next</div>\n\n        <div id=\"register-with-email-step-3\" style=\"z-index: 1;overflow: hidden;  background-color: white;border-radius: 5px;  width: 900px; margin: 0px auto; position: fixed; top: 17%; left: 0px; right: 0px; display:none;\">\n            <div   style=\"background-color: #f3f3f3;padding: 5px 5px 10px 35px;border-bottom: 1px solid #ddd;\">\n                <div  class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n                    <div style=\"position: absolute;  text-align: center;line-height: 40px;margin: 0 auto;font-size: 20px;background-color: #f3f3f3; opacity: 0.5;\">\n                        Tell us what you're interested in!\n\n                    </div>\n                </div>\n            </div>\n            <div id =\"\" style=\"margin: 80px 30px 5px;height: 450px;\" >\n                <div style=\"position: absolute;top: 100px;font-size: 15px;font-weight: bold;\">\n                    <div style=\"position: relative\">Residential</div>\n                    <div style=\"position: relative;top: 200px;\">Commercial</div>\n                </div>\n\n                ");
  stack1 = helpers.each.call(depth0, "controller.contentTopic", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            <div class=\"\" style=\"height: 45px;position: absolute;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n                <div class=\"register-btn easing\" style=\"width: 50%;border-right: 1px solid #ddd;float: left;\"></div>\n                <div class=\"register-btn easing\" style=\"width: 50%;float: left\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Next&nbsp;<k class=\"icon-long-arrow-right\" style=\"font-size: 13px;\"></k></div>\n            </div> \n        </div>\n\n        <div id=\"register-with-email-step-4\" style=\"overflow: hidden; z-index: 11; background-color: white; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; box-shadow: rgb(187, 187, 187) 0px 0px 20px; width: 430px; height: 220px; margin: 0px auto; position: fixed; top: 45%; left: 0px; right: 0px; display: none;\">\n            <div  style=\"background-color: #f3f3f3;padding: 10px;border-bottom: 1px solid #ddd;text-align: center;\">\n                <div  class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px; margin: 0 auto;\">\n                    <div style=\"position: relative;  line-height: 35px;font-size: 20px;background-color: #f3f3f3; opacity: 0.5;\">\n                        Activate your account\n                    </div>\n                </div>\n            </div>\n            <div style=\" text-align: center; padding: 30px;\">\n                Registration successful! You'll soon receive an email with your account information and an activation link. Click on the activation link to activate your myTrends account!\n            </div>\n\n            <!--            <div id=\"skipRegister\" class=\"register-btn easing\" style=\"height: 45px;line-height: 45px;width: 100%;border-top: 1px solid #ddd;bottom: 0;position: absolute; display:none\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "skip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Skip&nbsp</div>-->\n            <div id=\"finishRegister\" class=\"register-btn easing\" style=\"height: 45px;line-height: 45px;width: 100%;border-top: 1px solid #ddd;bottom: 0;position: absolute;display:block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "done", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Done&nbsp;<k class=\"icon-long-arrow-right\" style=\"font-size: 13px;\"></k></div>\n        </div>\n\n    </div>\n    <div id=\"missing-fields\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Please fill in all mandatory fields.</p>\n    </div>\n    <div id=\"invalid-user-name-register\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address  you have entered is invalid.</p>\n    </div>\n    <div id=\"invalid-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Your password length should be between 6-40 characters long.</p>\n    </div>\n    <div id=\"email-in-use\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address you have entered belongs to an existing account.</p>\n    </div>\n    <div id=\"email-used-by-social\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address you have entered belongs to an existing account.</p>\n    </div>\n\n</div>\n<!--End of email register section-->\n\n<div id=\"user-login-pane\"  style=\"display:none;border-radius: 5px 5px 0 0;\">\n\n    <div id=\"social-login\" class=\"register-with easing\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n        <i id=\"social-login\" class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Log in with social account</a>\n    </div>\n    <div id=\"social-login-container\" class=\"social-links-container\" style=\"display: none;\">\n\n        <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Facebook", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i  class=\"icon-facebook\"></i>\n        </div>\n\n        <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Twitter", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i class=\"icon-twitter\"></i>\n        </div>\n\n        <div class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Google", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i  class=\"icon-google-plus\"></i>\n        </div>\n\n        <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "LinkedIn", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i class=\"icon-linkedin\"></i>\n        </div>\n\n        <div  class=\"social-login-iconbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "Sina", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <i class=\"icon-weibo\"></i>\n        </div>\n\n    </div>\n\n\n    <div id=\"click-login\" class=\"register-with easing active-tab\" style=\"border-bottom: 1px solid #e3e3e3;\">\n        <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Log in with Email</a>\n    </div>\n\n    <div id=\"login-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;\">\n        <div style=\"padding: 0 8px;position: relative;\">\n\n\n            <div id=\"loginUsername\" class=\"login-textfield\" style=\"\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'elementId': ("loginusername"),
    'valueBinding': ("loginUsername"),
    'placeholder': ("Your Email")
  },hashTypes:{'elementId': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'elementId': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n\n            <div id=\"loginPassword\" class=\"login-textfield\"  style=\"\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'type': ("password"),
    'elementId': ("loginpassword"),
    'valueBinding': ("loginPassword"),
    'placeholder': ("Password")
  },hashTypes:{'type': "STRING",'elementId': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'elementId': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                <div class=\"hint--right hint--rounded\" data-hint=\"forgot password?\" style=\"cursor:pointer;float: right;margin-top: -40px;height: 30px;color:#888;\">\n                    <i class=\"icon-question-sign\">&nbsp</i>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> Log in</div>\n    </div>\n    <div id=\"user-forgot-password-pane\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n        <div  id=\"resetPasswordEmail\"class=\"login-textfield\" style=\"padding: 0 10px\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("resetPasswordEmail"),
    'placeholder': ("Your Email")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"back-btn easing\" style=\"\" >Back</div>\n        <div id='reset-btn' class=\"register-btn easing register-btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "emailSend", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Reset password</div>\n    </div>\n\n    <div class=\"black-tool-tip\"id=\"forgot-message-container\" style=\"display:none;\">\n        <p>  We've sent you an email with instructions to reset your password.</p><br/>\n        <p>Please make sure it didn't wind up in your Junk Mail. If you aren't receiving our password reset emails, see our\n            <a class=\"white-text-hover easing\" href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\" target=\"blank\" style=\"text-decoration: underline\"><b>help documents.</b></a>\n        </p>\n    </div>\n\n\n    <div id=\"invalid-user-name\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address  you have entered is invalid.</p>\n    </div>\n    <div id=\"invalid-account-type\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to log in with a social account. Please use the \"Log in with social account\" option.</p>\n    </div>\n    <div id=\"incorrect-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Incorrect password.</p>\n    </div>\n\n    <div id=\"incorrect-varify\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You're almost there! In order to activate your myTrends accout, please click on the activation link in the 'Confirmation of registration' email we sent you!. </p>\n    </div>\n    <div id=\"invalid-account-type-reset\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to reset the password of a social account. Please use the \"Log in with social account\" option.</p>\n    </div>\n    <div id=\"new-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>  We've sent you an email with instructions to reset your password.</p><br/>\n        <p>Please make sure it didn't wind up in your Junk Mail. If you aren't receiving our password reset emails, contact to support@trendsideas.com</p>\n    </div>\n</div>\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.isWaiting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<a href=\"http://about.trendsideas.com\" target=\"blank\">\n    <div class=\"learnmore-btn easing\" style=\"\">Learn more</div>\n</a>\n</div>\n\n</div>   \n<script>\n                /* NOTE:************\n                 * \n                 *   IF THIS BEHAVES ODDLY SIMPLY REMOVE/ADD \"stop()\" before all the animate functions EG\n                 *   $('#register-with-email-drop-down').stop().animate({height: 'toggle'});\n                 *   This javascript will need to be cleaned up via setting some of the elements as preset variables etc, once 100% tested.\n                 */\n\n if (localStorage.loginState === \"login\") {\n\n                if (localStorage.userType === \"email\") {\n                    $('#login-btn').text('REGISTER');\n                    $('.black-tool-tip').css('display', 'none');\n                    $('#click-register-social').css('display', 'none');\n                    $('#click-register').css('display', 'none');\n                    $('#social-link').css('display', 'none');\n                    $('#login-with-email-drop-down').css('display', 'block');\n                    $('#social-login-container').css('display', 'none');\n                    $('#click-login').addClass('active-tab');\n                    $('#social-login').removeClass('social-active');\n                    $('#user-forgot-password-pane').css('display', 'none');\n                    $('#forgot-message-container').css('display', 'none');\n                    $('#invalid-username').css('display', 'none');\n\n                    $('#register-with-email-drop-down').css('display', 'none');\n                    $('#register-with-email-step-2').css('display', 'none');\n                    $('#register-with-email-step-3').css('display', 'none');\n                    $('#user-login-pane').css('display', 'block');\n\n                } else {\n                    $('#login-btn').text('REGISTER');\n                    $('.black-tool-tip').css('display', 'none');\n                    $('#click-register-social').css('display', 'none');\n                    $('#click-register').css('display', 'none');\n                    $('#social-link').css('display', 'none');\n                    $('#login-with-email-drop-down').css('display', 'none');\n                    $('#social-login-container').css('display', 'block');\n                    $('#click-login').removeClass('active-tab');\n                    $('#social-login').addClass('social-active');\n                    $('#user-forgot-password-pane').css('display', 'none');\n                    $('#forgot-message-container').css('display', 'none');\n                    $('#invalid-username').css('display', 'none');\n\n                    $('#register-with-email-drop-down').css('display', 'none');\n                    $('#register-with-email-step-2').css('display', 'none');\n                    $('#register-with-email-step-3').css('display', 'none');\n                    $('#user-login-pane').css('display', 'block');\n\n                }\n\n            }\n            else {\n                localStorage.loginState = \"register\";\n\n                if (localStorage.userType === \"register_email\") {\n                    $('#login-btn').text('LOG IN');\n                    $('.black-tool-tip').css('display', 'none');\n                    $('#click-register-social').css('display', 'block');\n                    $('#social-link').css('display', 'none');\n                    $('#click-register').css('display', 'block');\n                    $('#click-register-social').removeClass('social-active');\n                    $('#click-register').addClass('active-tab');\n                    $('#user-login-pane').css('display', 'none');\n                    checkSocial();\n                }\n            }\n function checkSocial() {\n                if ($('#social-link').css('display') === 'block') {\n                    $('#social-link').animate({height: 'toggle'});\n                }\n                else {\n                }\n            }\n                function DropDown(el) {\n                    this.dd = el;\n                    this.placeholder = this.dd.children('span');\n                    this.opts = this.dd.find('ul.dropdown > li');\n                    this.val = '';\n                    this.index = -1;\n                    this.initEvents();\n                }\n                DropDown.prototype = {\n                    initEvents: function() {\n                        var obj = this;\n\n                        obj.dd.on('click', function(event) {\n                            $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                            return false;\n                        });\n                        obj.opts.on('click', function() {\n                            var opt = $(this);\n                            obj.val = opt.text();\n                            obj.index = opt.index();\n                            obj.placeholder.text(obj.val);\n                        });\n                    },\n                    getValue: function() {\n                        return this.val;\n                    },\n                    getIndex: function() {\n                        return this.index;\n                    }\n                };\n\n                $(function() {\n\n                    var dd3 = new DropDown($('.dropdown_test_3'));\n                    $(document).click(function() {\n                        $('.wrapper-dropdown-3').removeClass('active');\n                    });\n\n                });\n\n                function setDomain() {\n\n                    var api_url = document.domain;\n                    var api_domain_start_pos = api_url.indexOf('.');\n                    var api_url = api_url.slice(api_domain_start_pos);\n\n                    return api_url;\n                }\n\n\n               \n\n</script>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["review"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"blur_black\"></div>\n\n<div style=\"margin:0 auto; padding: 0 0 15px 15px;\">\n\n\n    <div class=\"Add-review\" style=\"\">\n        <div style=\"width: 100%;height: auto; min-height: 50px;padding: 10px 23px;\">\n            <a style=\"display: inline-block; vertical-align: middle;\">\n                <img class=\"profilepic_comment\"  style=\"width: 45px;height: 45px;margin: 0 15px 0 0;float: left;\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("this.review_user_photo_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n            </a>\n            <div style=\"font-size: 18px;font-weight: bold;color: #555; height: auto; min-height: 50px;vertical-align: middle;display: inline-block;width: 390px;\"><span>Review on ");
  stack1 = helpers._triageMustache.call(depth0, "profileName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></div>\n        </div>\n\n        <div style=\"background-color: #f4f6f8; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; height: 50px; line-height: 50px; width: 100%\">\n\n            <span id=\"post-star\" style=\"overflow: auto; position: relative; margin: 12px 0px 12px 20px; display: inline-block;\"></span>\n            <div id=\"post-star-rating\" class=\"contactmeicon easing\" style=\"width: 35px; height: 35px;line-height: 33px;text-align: center;font-weight: bold;font-size: 13px;border: 1px solid #ddd;vertical-align: top;margin: 6px;box-shadow: initial;background-color: #fff;background-image: none;cursor: default;\"></div>\n\n        </div>\n\n        <div style=\"margin: 5px auto; padding: 0 15px;height: 200px;\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("review_content"),
    'class': ("no-resize no-effect"),
    'placeholder': ("review time")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n\n        <div class=\"\" style=\"height: 41px;position: absolute;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n            <div  class=\"message-btn easing\"  style=\"width: 50%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n            <div class=\"message-btn easing\" style=\"width: 50%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewPost", "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n        </div>\n\n\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["reviewList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" \n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "reviewListSingle", "", options) : helperMissing.call(depth0, "render", "reviewListSingle", "", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<div class=\"review-list-container\">\n    ");
  stack1 = helpers.each.call(depth0, "model.reviews", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 10);\n        \n    });  \n         \n</script>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["reviewListSingle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"new-btn\" style=\"float: left; font-size: 13px;margin-right: 5px;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReview", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-trash\"></i></div>                 \n    <div class=\"new-btn\" style=\"float: left; font-size: 13px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editReview", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-pencil\"></i></div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" \n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "reviewReplyListSingle", "", options) : helperMissing.call(depth0, "render", "reviewReplyListSingle", "", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("  \n\n<div class=\"blur_black\"></div>\n\n<div class=\"\" style=\"height: 80px;width: 80px;position: fixed;border: 3px solid #f3f3f3;border-radius: 50%;overflow: hidden;box-shadow: 0 0 5px #aaa;top: 80px;left: 0px;right: 470px;z-index: 12;margin: 0 auto;display: block;\">\n    <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.review_user_photo_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"\"/>\n</div>\n\n<div class=\"Add-review\" style=\"overflow:hidden\">\n\n    <div id=\"review_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"background-color: #f3f3f3;padding: 5px 5px 10px 70px;border-bottom: 1px solid #ddd;\">\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n            <div class=\"namentime_position\" style=\"margin: 0;float: left;\">\n                <a class=\"comment-username\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  >\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push(" </span>\n                </div>\n            </div>\n\n            <div style=\"position: absolute; right: 0; margin: 7px;\"><span class=\"starsview\" ><span style=\"width:");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("px;\"></span></span></div>\n        </div>\n    </div>\n    <div id =\"editReview_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"margin: 20px auto 5px; padding: 0 15px;height: 200px;\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("controller.review_content"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Please edit review here")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("  \n    </div>\n\n    <div class=\"\" style=\"height: 41px;position: absolute;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n        <div  class=\"message-btn easing\"  style=\"width: 50%;border-right: 1px solid #ddd;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelReview", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        <div class=\"message-btn easing\" style=\"width: 50%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveReview", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n    </div>\n</div>\n\n");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"review-list box\" style=\"\">\n    <div class=\"\" style=\"height: 80px;width: 80px;position: relative;border: 3px solid #f3f3f3;border-radius: 50%;overflow: hidden;box-shadow: 0 0 5px #aaa;top: -5px;float: left;z-index: 1\">\n        <a class=\"comment-username\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  >\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.review_user_photo_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"\"/>\n         </a>\n    </div>\n    <div  id=\"review_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"class=\"review-list-content easing\" style=\"\">\n        <div style=\"background-color: #f3f3f3;padding: 5px 5px 10px 70px;border-bottom: 1px solid #ddd;border-radius: 3px 3px 0 0;\">\n            <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", "content", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],data:data})));
  data.buffer.push(" class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n                <div class=\"namentime_position\" style=\"margin: 0;float: left;\">\n                    \n                        ");
  stack1 = helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                   \n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push(" </span>\n                    </div>\n                </div>\n\n                <div style=\"position: absolute; right: 0; margin: 7px;\"><span class=\"starsview\" ><span style=\"width:");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("px;\"></span></span></div>\n            </div>\n        </div>\n\n        <div  style=\"background-color: #fff; padding: 10px 40px; font-size: 13px;\">\n\n            <div id=\"review_content_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upContent", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" style=\"width: 390px; max-height:100px;line-height:20px; position: relative; display: inline-block; overflow: hidden; \">");
  stack1 = helpers._triageMustache.call(depth0, "model.review_content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  </div>   \n\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", "content", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],data:data})));
  data.buffer.push(" role=\"button\" class=\"hover-opacity\" style=\"position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:inline-block;\"  id=\"down_button_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  ><k class=\"icon-caret-down\">&nbsp;</k>more</span>\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upContent", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" role=\"button\" class=\"hover-opacity\" style=\"position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:none;\"  id=\"up_button_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ><k class=\"icon-caret-up\">&nbsp;</k>collapse</span>\n\n\n            <div style=\"position: relative; display: block;margin: 15px 0 10px;height: 20px;width: 100%;\">\n                <div id=\"review_like_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  style=\"float: right; font-size: 13px;\" class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                     <i class=\"icon-thumbs-up-alt\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">&nbsp</i>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "model.review_like_count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                <div id=\"review_share_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  style=\"float: right; font-size: 13px;margin-right: 5px;\" class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                     <i class=\"icon-share-alt\" >&nbsp</i></div>          \n                <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"width: 150px;  padding: 0;right: 0px;left: 220px;position:absolute;top: 25px;\">\n                    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n                <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n                </li>\n                <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n            <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n            </li>\n            <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n        <k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n        </li>\n    </ul>\n    ");
  stack1 = helpers['if'].call(depth0, "model.getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n</div>  \n\n<!--the following comment-frame is used to show the reply box for the second level reply-->\n<div id=\"reviewReplyData_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n\n    <div class=\"reply-comment-frame\"  style=\"\" id=\"ReplyData_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n        <div style=\"margin:0 auto; padding: 0 45px 15px 0;\">\n            <a  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.currentUser.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment\"  style=\"float: right; margin: 4px -10px 0 0; margin-top: 0;\"");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.currentUser.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                <div class='user-reply-angle-before'></div>\n                <div class='user-reply-angle-after'></div>\n            </a>\n\n            <div class=\"reply-comment-container\" style=\"width: 378px;height: 32px;\">\n                <div id=\"addReply_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"margin: 0;width: 345px; height: 30px;float: left;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("controller.replyReviewContent"),
    'class': ("no-resize"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                                   \n                </div>\n                <div style=\"float: right;height: 34px;position: relative;\">\n                    <div id=\"ok_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"message-btn easing\" style='width: 30px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addReviewReply", "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">\n                         <k  class='icon-ok'></k>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div id=\"view-comments_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", "viewReply", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],data:data})));
  data.buffer.push(" class=\"hover-opacity\" style=\"display:block; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;\">\n         view comments ");
  stack1 = helpers._triageMustache.call(depth0, "model.reply_reviews.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n         <i class=\"icon-caret-down\">&nbsp;</i>\n    </div>\n    <div  id=\"reply_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  style=\"display:none; max-height:200px;height:auto;\">\n\n        ");
  stack1 = helpers.each.call(depth0, "model.reply_reviews", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n    </div>\n\n    <div id=\"up-comments_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upComments", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("  class=\"hover-opacity\" style=\"display: none; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;\">\n        collapse comments ");
  stack1 = helpers._triageMustache.call(depth0, "model.reply_reviews.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <i class=\"icon-caret-up\">&nbsp;</i>\n    </div>\n\n</div>\n\n\n</div>\n</div>\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.review_is_edit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["reviewReplyListSingle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("  \n\n<div class=\"reply-comment-frame\"  style=\"padding: 10px 35px;border-bottom: 1px solid #ddd;\">\n    <div style=\"margin:0 auto; padding: 0 40px 0 0;\">\n        <a  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n            <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -40px 0 0; margin-top: 0;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.review_photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n            <div class='user-reply-angle-before'></div>\n            <div class='user-reply-angle-after'></div>\n        </a>\n\n        <div class=\"reply-comment-container\" style=\"width: 378px;height: 32px;\">\n            <div id=\"editReply_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"margin: 0;width: 345px; height: 30px;float: left;\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("controller.review_msg"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Please edit reply here")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                      \n            </div>\n            <div style=\"float: right;height: 34px;position: relative;\">\n                <div class=\"message-btn easing\" style='width: 30px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelReviewReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                     <div class=\"message-btn easing\" style='width: 30px;'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveReviewReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                     <k class='icon-ok'></k>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id=\"reply_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_reply_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"your-relpy\" style=\"padding: 10px 75px 10px 35px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "replyView", "model.review_reply_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n\n    ");
  stack1 = helpers['if'].call(depth0, "model.review_userself", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <a class=\"your-relpy_profilepic\" style=\"left: 6.5%; right: initial;\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n        <img class=\"profilepic_comment\"  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.review_photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    </a>\n\n    <div style=\"\">\n        <div class=\"comment-namentime\" style=\"text-align: left;\">\n            <div class=\"namentime_position\" style=\"\" >        \n                <a class=\"comment-username\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                \n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"comment-content\" style=\"text-align: left;\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "model.review_msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "model.getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div style=\"float: right;bottom: 50px;position: relative;left: 15px;font-size: 12px;\">\n            <div class=\"hint--bottom hint--rounded\" style=\"left: 40px;right: initial;\" data-hint=\"Delete\" \"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReviewReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-trash\"></i></div>                 \n            <div class=\"hint--bottom hint--rounded\" style=\"left: 40px;right: initial;\" data-hint=\"Edit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editReviewReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-pencil\"></i></div>\n        </div>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <a class=\"your-relpy_profilepic\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n        <img class=\"profilepic_comment\"  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("model.review_photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n    </a> \n    <div style=\"\">\n        <div class=\"comment-namentime\">\n            <div class=\"namentime_position\">        \n                <a class=\"comment-username\"  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                \n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"comment-content\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "model.review_msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\n\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "model.getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div style=\"float: left;bottom: 50px;position: relative;left: 35px;font-size: 12px;\">\n            <div class=\"hint--bottom hint--rounded\" style=\"right: 40px;left: initial;\" data-hint=\"Delete\" \"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReviewReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-trash\"></i></div>                 \n            <div class=\"hint--bottom hint--rounded\" style=\"right: 40px;left: initial;\" data-hint=\"Edit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editReviewReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-pencil\"></i></div>\n        </div>\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.review_enableToEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n\n\n</script>\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["selectFunction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n<div class=\"blur_black\"></div>\n\n<div class=\"Add-review\" style=\"height: auto;top:30%\">\n    <div class=\"hover-opacity\" style=\"float: right;width: 30px;height: 30px;line-height: 30px;text-align: center; cursor: pointer\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "noSelection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k></div>\n    <div style=\"width: 100%;height: 55px; line-height: 33px;padding: 10px 25px;background-color: #F3F3F3;border-bottom: 1px solid #ddd;\">\n        <i class=\"icon-exclamation-sign\" style=\"font-size: 35px;width: 45px;height: 45px;float: left;\"></i>\n        <div style=\"font-size: 16px;font-weight: bold;color: #555;  vertical-align: middle;display: inline-block;width: 390px;\"><span>How would you like to edit the About Us section?</span></div>\n    </div>\n\n\n    <div style=\"margin: 15px auto 20px; padding: 0 40px;height: 200px;color: #333; font-size: 15px; \">\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.message", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n\n    <div class=\"\" style=\"height: 41px;position: relative;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n        <div  class=\"message-btn easing\"  style=\"width: 50%;border-right: 1px solid #ddd;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectionOne", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-html5\">&nbsp;</k>");
  stack1 = helpers._triageMustache.call(depth0, "controller.select_one", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"message-btn easing\" style=\"width: 50%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectionTwo", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-puzzle-piece'>&nbsp;</k>");
  stack1 = helpers._triageMustache.call(depth0, "controller.select_two", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["showAlbum"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"collection_tab1\" style=\"bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:none; position: absolute;z-index: 5; width: 100%; opacity: .9;\">\n    <div style=\"background-color: #333;color: #fff;font-weight: bold;padding: 13px 0 13px 40px;width: 100%;position: relative;display: -moz-inline-box;display: inline-block;\">\n        All photos\n        <div style=\"display: inline-block;\">( ");
  stack1 = helpers._triageMustache.call(depth0, "content.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ) </div>\n    </div>\n    <div class=\"exit\">\n        <div class=\"closeview\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hide", "selectedPhoto.id", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n            <i class=\"icon-remove\"></i>\n        </div>\n    </div>\n    <div style=\"margin: 15px;overflow: auto;height: 225px;width: 100%;\"> \n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <img class=\"photo_original_style\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("id"),
    'src': ("photo_image_thumbnail_url")
  },hashTypes:{'id': "STRING",'src': "STRING"},hashContexts:{'id': depth0,'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectImage", "id", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("/>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div id=\"collection_tab\" style=\"bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:none; position: absolute;z-index: 5; width: 100%; opacity: .9;\">\n    <div style=\"background-color: #333;color: #fff;font-weight: bold;padding: 13px 0 13px 40px;width: 100%;position: relative;display: -moz-inline-box;display: inline-block;\">\n        All photos\n        <div style=\"display: inline-block;\">( ");
  stack1 = helpers._triageMustache.call(depth0, "content.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ) </div>\n    </div>\n    <div class=\"exit\">\n        <div class=\"closeview\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hide", "selectedPhoto.id", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(" >\n            <i class=\"icon-remove\"></i>\n        </div>\n    </div>\n    <div style=\"margin: 15px;overflow: auto;height: 225px;width: 100%;\"> \n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "HubStar.what", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["singleFileUploader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n        <p style=\"font-weight: bold;\">\n            Drag and drop.\n        </p>\n    </div>\n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n        Choose \n        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> </div> \n    </div> \n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n   \n    </div>\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        <span class=\"new-btn\" >Close</span>\n        <span class=\"new-btn green-btn\" >Upload</span> \n    </div>\n</div>\n");
  }

  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["status"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n        <div id='welcome_message' style='margin-bottom: 25px;'>\n            <h2>Welcome!!</h2>\n            <p>Please login to create your ideas space.</p>\n\n        </div>\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  \n\n        <div id=\"afterLogin\">\n            <div class=\"profilepic-container\" style=\"margin:0 0 10px;\">\n                <a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("controller.myUserProfile")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ><img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.user.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"profilepic_user\"/></a>                              \n            </div>\n            <p> Hi ");
  stack1 = helpers._triageMustache.call(depth0, "controller.user.display_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\n            <h4>");
  stack1 = helpers._triageMustache.call(depth0, "controller.response", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n\n          \n        </div>\n        ");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"masonry-object\" style=\"background-color: #427fed; color: white;\">\n\n\n\n\n\n\n    <div style=\"padding: 20px;text-align: center;\">\n\n        ");
  stack1 = helpers.unless.call(depth0, "HubStar.isLogin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n\n\n\n\n\n\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["talk"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div style='background-color: rgba(0,0,0,.2);max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;'>\n        <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n        <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;;\">\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("\n<div  class=\"blur_black\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</div>\n\n<div  style=\"z-index: 11; position: fixed; width: 545px; margin: 10px auto; border-radius:5px; overflow: hidden; background-color: rgb(255, 255, 255); top: 25%; left: 0px;display: block;right: 0;box-shadow: 0 0 5px #fff;\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"line-height: 70px;float: left;\">\n            <a><img class=\"profilepic_comment\"  style=\"float: left; margin: 12px; box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.owner_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> </a>\n        </div>       \n        <div style=\"padding: 16px; float: left\">\n            <div style=\"color: #555;font-size: 18px;line-height: 20px;font-weight: bold;\">Message to: ");
  stack1 = helpers._triageMustache.call(depth0, "displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\n            <div style=\"font-size: 12px;color: #555;line-height: 20px;\">This conversation will be stored in your message centre.</div>\n        </div>\n    </div>\n\n\n\n\n\n\n    <div style=\"width: 100%;padding: 20px 6.5%;margin: 0 auto;overflow: hidden;\">\n        <div   style=\"margin: 0;width: 100%; height:200px;\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Write something...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n        </div>         \n    </div>\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n\n\n\n    <div class=\"\" style=\"height: 41px;position: relative;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n        <div  class=\"message-btn easing\"  style=\"width: 33%;height: 40px;line-height: 40px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelTalk", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd; border-left: 1px solid #ddd; width: 34%; height: 40px; line-height: 40px;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n            <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"message-btn easing\" style=\"width: 33%;height: 40px;line-height: 40px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Send</div>\n    </div>\n\n\n\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["test"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div style=\"height: 500px; background-color: grey\"></div>\n");
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "controller", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<p>aaaaaaaaaaaaaaaaaaa</p>\n\n<br />\n\n\n\n\n<!--DIRECT EMAIL-->\n\n\n<div>\n    <div style=\"position: relative;background: #fff; width: 600px; height: auto; margin: auto; box-shadow: 0px 0px 8px #555; border-radius: 3px 3px 0 0;\">\n        <div style=\"width:600px; height:132px;overflow:hidden; margin-bottom:20px;\">\n            <img src=\"https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg\"/>\n        </div>\n        <table style=\"padding: 0 80px 0 130px; width: 100%;  display: table;border-collapse: separate;border-spacing: 4px;color: #666; font-family: Arial; margin-bottom: 5px; font-size: 13px; line-height: 16px;\">\n            <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                <tr>\n                    <td>Project Category:</td>\n                    <td> \n                        <div style=\"display: block;\">\n                            Bathrooms\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Project Timeframe:</td>\n                    <td> \n                        <div style=\"display: block;\">\n                            1-2 months\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Project Budget:</td>\n                    <td> \n                        <div style=\"display: block;\">\n                            Less than 5k\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Project Experience:</td>\n                    <td>\n                        <div style=\"display: block;\">\n                            First Time \n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>I want help in:</td>\n                    <td>\n                        <div style=\"display: block;\">\n                            Appliances                           \n                        </div>\n                        <div style=\"display: block;\">\n                            Design                            \n                        </div>\n                        <div style=\"display: block;\">\n                            Products                          \n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>   \n        <div style=\"width:350px;margin: auto;padding: 20px 0;\">\n            <div style=\"color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;\">Subject:  </div>\n            <div style=\"color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;\">From:  </div>\n            <div style=\"color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;\">To:  </div>\n            <div style=\"color:#666;font-family:Arial;margin:0;font-size:11px;line-height:16px\">\n                WQNMLGB~~~~!Yeah\n            </div> \n        </div>\n\n        <div style=\"width:600px; height: 20px;overflow:hidden;\">\n            <img src=\"https://s3-ap-southeast-2.amazonaws.com/develop.devbox/contactus-botbar.png\"/>\n        </div>\n\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--USER SOCIAL LINK-->\n\n\n<div style=\"font-size: 13px;line-height: 20px;margin: 5px auto;color: #888; overflow: hidden;height: 50px; text-overflow: ellipsis;\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<ul class=\"locationandlinks\">\n    <li class=\"location_li\" style=\"background: none;padding: 0;\"><i class=\"icon-map-marker\"> </i>Auckland</li> \n    <li><a href=\"#\" target=\"_blank\">www.you.com</a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-twitter\"></i></a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-facebook\"></i></a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-google-plus\"></i></a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-linkedin\"></i></a></li>\n</ul>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["uploadResource"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div style=\"height: 500px; background-color: grey\"></div>\n");
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "controller", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n\n<br />\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <div id=\"change_profile\" class=\"changeuserprofilepic easing hint--right hint--rounded\" data-hint=\"Choose a profile picture\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userPhotoEditButton", "User Picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                     <k class=\"icon-edit\"></k>         \n                </div>  \n\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div style=\"margin: 30px auto 20px;display: block; text-align: center;\">\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isUserSelf", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("           \n            </div>\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n                    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn follow-btn\" data-toggle=\"modal\" style=\"\">Follow</div>\n\n                ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.follow_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <div class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "talkToPeople", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class=\"icon-envelope\" ></k></div>\n                ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.following_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green follow-btn\" data-toggle=\"modal\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class='icon-exchange' >&nbsp; </i> Following</div>\n                        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green follow-btn\" data-toggle=\"modal\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n                        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.following_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn follow-btn\" data-toggle=\"modal\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class='icon-ok' >&nbsp; </i> Follow</div>\n                        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn follow-btn\" data-toggle=\"modal\" style=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n                        ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "talk", options) : helperMissing.call(depth0, "render", "talk", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                    <div class=\"edit-btn hint--rounded hint--bottom\" style=\"height: 20px;line-height: 20px;margin:0;\" data-hint=\"Edit Interest\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.interests", "controller.interest", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                         <i class=\"icon-plus edit-btn\" style=\"font-size:13px;margin:0;padding:9px 10px;\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterestsUp", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i>\n                    </div>\n                    ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"interest-textarea\" style=\"\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("interests"),
    'id': (""),
    'class': ("add-interests")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                    <div class=\"interest-insert-hint\" style=\"\">\n                        Do not use plural comma together or left a comma at the end of string, the right example is \"Kitchen,Bathroom,Roof,Entrance\"\n                    </div>\n                    <div style=\"text-align: center;right: 15px;position: relative;\">\n                        <div class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.interest", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i style=\"position:absolute;top:0;left:0;width:33px;height:26px;line-height:26px;text-align:center;\" class=\"icon-remove\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterestsUp", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i></div>\n                        <div class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.interest", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i style=\"position:absolute;top:0;left:0;width:33px;height:26px;line-height:26px;text-align:center;\" class=\"icon-ok icon-white\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterestsUp", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i></div>\n                    </div>\n\n\n                    ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                    ");
  stack1 = helpers.each.call(depth0, "controller.selected_topics", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("     \n\n                    ");
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                    <div class='hashtags' >");
  stack1 = helpers._triageMustache.call(depth0, "interests", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n\n                    ");
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<i class='remove-hashtages' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteTopic", "interests", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">x</i>");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.UserPhotoEditView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <div  id=\"flip-front\" class='blue-btn new-btn hint--left hint--rounded edit-dashboard-btn' style=\"display: block; margin: 10px;position: absolute;top: 0;right: 0;\" data-hint=\"Dashboard\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardButton", "User Cover", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">  \n\n                      <i class=\"icon-cogs\" ></i>\n                </div>\n                ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div  style=\"height: 100px;border-radius: 3px;\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("about_me"),
    'class': ("no-resize"),
    'placeholder': ("Say something interesting about yourself (Maximum 600 characters).")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div style=\"right: 40px;bottom: -49px;position: absolute;\">\n                        <div class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                        <div class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    </div>\n                    ");
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <div style=\"display: block;\" >");
  stack1 = helpers._triageMustache.call(depth0, "about_me", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                    ");
  return buffer;
  }
function program34(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"edit-btn hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.about_me", "controller.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                         <i class=\"icon-edit\"></i>\n                    </div>\n                    ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "facebook", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-facebook\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "twitter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-twitter\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program40(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "googleplus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-google-plus\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "pinterest", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-pinterest\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program44(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "linkedin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-linkedin\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program46(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "youtube", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-youtube-play\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.UserEditView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        ");
  return buffer;
  }

function program50(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n \n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryCollectionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program52(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "masonryCollectionItems", options) : helperMissing.call(depth0, "render", "masonryCollectionItems", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program54(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  data.buffer.push("<div style=\"width:100%; height: 110px; display:block;\"></div>\n<div class=\"user-board\">\n    <div class=\"user-board_left style-box\">\n        <div id=\"user-photo_left\">\n            <div class=\"user-profilepic-container\" id=\"profile-picture\"> \n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.model.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width: 180px;height: 180px;\"/>\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "controller.followDisplay", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "isTalk", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <div id=\"show_interest\" >\n\n                <div class=\"show-interest easing\">\n                    <div style=\"font-weight: bold;line-height: 20px; color: #777; font-size: 17px;margin-bottom: 5px; display:inline-block;\">INTERESTS</div>\n\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <k id=\"interest_btn\" class=\"icon-double-angle-up unvisible\"  style=\" float: right;padding: 7px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterests", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></k>\n\n                </div>\n\n                <div class=\"interesttags-container\" style=\"\">\n\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.editingInterest", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "controller.is_Photoclick", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div  class=\"user-board_right style-box\" >\n\n\n        <div id=\"user-board_right_front\" >\n            <div class=\"user-cover\">\n\n                <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.cover_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width:100%;\"/>\n\n                ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div style=\"font-size: 26px;font-weight: bold; line-height: 30px;  color: white;position: absolute;top: 245px;margin:0 30px;text-shadow: 0 0 10px #777;\">");
  stack1 = helpers._triageMustache.call(depth0, "display_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n\n\n\n\n\n            <div class=\"editor-content\" style=\"height: 140px; padding: 10px 20px;display: inline-block;position: relative;width: 100%;\">\n                <div style=\"font-size:15px;line-height: 20px;margin: 5px 20px;color: #888;\">  \n\n\n                    <p style='margin-bottom: 5px;display: inline-block; font-size: 18px;padding:0'>\n                        <i class='icon-user' style='margin-right: 10px;display: inline-block;'></i>About me\n                    </p>\n\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.editingAbout", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n\n\n\n\n            <div style=\"margin: 10px 30px; width:600px; height: 40px; position:relative; overflow: hidden;\">\n                <ul class=\"locationandlinks\">\n                    <li>\n                        <span class=\"locationIcon\"><k class=\"icon-map-marker\"></k></span>\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                    </li>\n                    ");
  stack1 = helpers['if'].call(depth0, "facebook", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(36, program36, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(38, program38, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "googleplus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(40, program40, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "pinterest", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(42, program42, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "linkedin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(44, program44, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "youtube", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(46, program46, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n                </ul>\n            </div>\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "controller.is_click", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(48, program48, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n    </div>\n\n</div>\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.switchPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(52, program52, data),fn:self.program(50, program50, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(54, program54, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["userEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"tabbable\">\n        <div class=\"tabs-left\">\n            <ul class=\"nav nav-tabs easing\">\n                <li class=\"active\" ><a style=\"\" href=\"#tab1\" data-toggle=\"tab\">COVER</a></li>\n                <li class=\"easing\" ><a style=\"\" href=\"#tab2\" data-toggle=\"tab\">SETTINGS</a></li>\n                <li class=\"easing\" ><a style=\"\" href=\"#tab3\" data-toggle=\"tab\">SOCIAL LINKS</a></li>\n                ");
  stack1 = helpers.unless.call(depth0, "identifier", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <li class=\"easing\" ><a style=\"\" href=\"#tab5\" data-toggle=\"tab\">NOTIFICATION</a></li>\n            </ul>\n        </div>\n        <div class=\"tab-content easing\">\n\n            <div class=\"tab-pane active\" id=\"tab1\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold\">CHANGE COVER</div>\n\n                <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:block;height: 345px;width: 100%;top: 0;background-color: #fff; padding: 0;overflow: hidden;position: relative;\">\n\n                    <div class='styleup_uploadbox easing' style=\"height: 335px; width: 95%;position: absolute;\">\n                        <i class='icon-upload icon-3x' style=\"width: 40px;margin: auto;display: block;position: relative;top: 110px;\" ></i>\n                        <span style=\"display: block; position: relative;line-height: 30px;font-size: 30px;top: 115px; cursor: default;  font-weight: bold\">Drag & drop a cover image here</span>\n                        <span style='font-size: 16px;display: block;line-height: 25px;top: 210px;position: relative;'> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.RequiredImageSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n\n\n                        <div style=\"position: absolute;  vertical-align: top; text-align: center;width: 100%;height: 333px;top: 0;line-height: 333px;background-color: Rgba(30,30,30,.2);\">\n                            <div>\n                                <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 170px; max-height: 170px;\">\n                                <div id='uploadStyleImg' style=\"display: none;\">\n                                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                                </div>\n                            </div>\n                            <div style=\"margin: 2px auto 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px; display: none\">");
  stack1 = helpers._triageMustache.call(depth0, "newStyleImageName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n                        </div>\n\n                    </div>\n                </div>\n\n\n                <div style=\"text-align: center;height: 75px;line-height: 85px;bottom: 0;position: relative;width: 98%;\">\n                    <div class=\"new-btn blue-btn\" style=\"margin: 28px 20px; width: 83px; float: left;\">\n                        <k class='icon-upload'> &nbsp;Choose\n                            <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n                    </div>\n\n                    <div style=\"margin: auto;width: 250px;float: right;\">\n\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isCrop", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isUpload", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        <span class='new-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n\n\n                </div>\n\n\n            </div>\n\n\n\n\n            <div class=\"tab-pane\" id=\"tab2\">\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">GENERAL SETTINGS</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" class='profilesnew-table' style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin:10px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>User Name:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"displayName\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("display_name")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Name*:</td>\n                            <td>\n                                <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                    <div  id=\"first_name\" style=\"margin: 0;width: 49%;display: inline-block;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                    <div id=\"last_name\" style=\"margin: 0;width: 49%;display: inline-block;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Email:</td>\n                            <td>\n                                <div style=\"display: block;\">\n\n                                    <div  id=\"email\" class=\"disabled-btn\" style=\"margin: 0;width: 100%;top:0\">\n                                        ");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </div>\n\n\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>About me:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"about_me\" style=\"margin: 0;width: 100%; height:100px;\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("about_me"),
    'class': ("no-resize"),
    'placeholder': ("Say something interesting about yourself (Maximum 600 characters).")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td> Location:</td>\n                            <td>\n                                <div style=\"display: block;\" >\n                                    <div id=\"location\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("location")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin:10px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn flip-back' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n\n            <div class=\"tab-pane\" id=\"tab3\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">SOCIAL LINKS</div>\n\n                <table class='profilesnew-table' style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 10px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>Facebook:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"facebook\" style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("facebook"),
    'placeholder': ("eg:www.facebook.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Twitter:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"twitter\" style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("twitter"),
    'placeholder': ("eg:www.twitter.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Google+:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"googleplus\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("googleplus"),
    'placeholder': ("eg:plus.google.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Pinterest:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"pinterest\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("pinterest"),
    'placeholder': ("eg:www.pinterest.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Linkedin:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"linkedin\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("linkedin"),
    'placeholder': ("eg:www.linkedin.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                        <tr>\n                            <td>Youtube:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"youtube\" style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("youtube"),
    'placeholder': ("eg:www.youtube.com")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveSociallinkUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n            ");
  stack1 = helpers.unless.call(depth0, "identifier", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"tab-pane\" id=\"tab5\">\n\n\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">NOTIFICATION</div>\n                <div style=\"margin: 10px 40px;\"> \n                    <span style=\"font-size: 15px; font-weight: bold; color: #555;\">How You Get Notifications:</span>\n                    ");
  stack1 = helpers.each.call(depth0, "controller.subcateMethod", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <hr>\n                <div style=\"margin: 10px 40px 30px\"> \n                    <span style=\"font-size: 15px; font-weight: bold; color: #555;\">What You Get Notified About:</span>\n                    ");
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n\n                <div style=\"right: 0;margin:10px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNotification", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn flip-back' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n\n        </div>\n\n\n    </div>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n                <li class=\"easing\" ><a style=\"\" href=\"#tab4\" data-toggle=\"tab\">SECURITY</a></li>\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-cut '> &nbsp;</k>Crop</span>\n                        ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" ><k class='icon-cut'> &nbsp;</k>Crop</span>\n                        ");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePhotoUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-save '> &nbsp;</k>Upload</span>\n                        ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" ><k class='icon-save '> &nbsp;</k>Upload</span>\n                        ");
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"tab-pane\" id=\"tab4\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">SECURITY</div>\n\n                <table class='profilesnew-table' style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>Current Password:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"password\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("oldpassword"),
    'placeholder': ("Your current password")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>New Password:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("newpassword"),
    'placeholder': ("Minmum 6 characters ")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Repeat New Password:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("repeatnew"),
    'placeholder': ("Minmum 6 characters")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>          \n            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <li class=\"checkbox-container\" style=\"width: 100%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkedMethodAction", "list_id", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                        <input type=\"checkbox\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("list_id"),
    'checked': ("isSelection")
  },hashTypes:{'id': "STRING",'checked': "STRING"},hashContexts:{'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"css-checkbox\"   >\n                        <label for=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" name=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"css-label lite-blue-check ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">");
  stack1 = helpers._triageMustache.call(depth0, "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n                    </li>\n                    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <li class=\"checkbox-container\" style=\"width: 100%;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkedAction", "list_id", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                        <input type=\"checkbox\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("list_id"),
    'checked': ("isSelection")
  },hashTypes:{'id': "STRING",'checked': "STRING"},hashContexts:{'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" class=\"css-checkbox\"   >\n                        <label for=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" name=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"css-label lite-blue-check ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">");
  stack1 = helpers._triageMustache.call(depth0, "category_topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n                    </li>\n                    ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div class='' style='position:relative;height: 65px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n        <span style=\"position: relative;display: inline-block;font-size: 40px; vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n        <span style=\"position: relative;width: 87%;display: inline-block;margin: 0 15px;\">\n            <span style='font-size: 20px;display: block;line-height: 25px;font-weight: bold'>Crop your picture now!</span>\n            <span style='font-size: 15px;display: block;line-height: 15px;'> Image Size: <span id=\"log\"></span> </span>  \n        </span>\n    </div>\n\n\n    <div id=\"crop-container\" style=\"width: 600px;height: 350px;margin: 10px auto; text-align: center\">\n        <div class=\"contr\"></div>\n        <canvas id=\"panel\" class=\"crop-canvas\" style=\"height: 100%;width: auto;margin: 0 auto; \"><img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ></canvas>\n\n    </div>\n    <div style=\"margin:20px auto;width: 150px;\">\n\n        <span class=\"new-btn green-btn \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePhotoUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ><k class='icon-save'> &nbsp;Save</span>\n        <span class='new-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"user-board_right_back\">\n    ");
  stack1 = helpers['if'].call(depth0, "controller.isPhotoUploadMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "controller.isPhotoEditingMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["userFollowers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n<div class=\"col1 box style-box t-style-box\" style=\"text-align: center;\">\n    <div style=\"position:relative;height: 100px;overflow: hidden;line-height: 0;\">\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width:100%;\"/>\n    </div>\n\n    <div class=\"user-profilepic-container\" style=\"position:absolute; top: 50px;margin: 0 auto;width: 100px;height: 100px;border: 2px solid #f3f3f3;left: 0;right: 0;\">\n        <a class='radius-circle' href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"  >\n<!--");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToUserFollowerRoute", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("-->\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width: 100px; height: 100px;\" />\n        </a>\n    </div>\n\n    <div style=\"position:relative; height:35px; line-height: 35px;margin: 50px auto 5px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n    </div>\n\n    ");
  stack1 = helpers['if'].call(depth0, "isUserSelf", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li><k class=\"icon-eye-open\">&nbsp;</k>");
  stack1 = helpers._triageMustache.call(depth0, "collections_size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"location_li\"><k class=\"icon-circle-blank\">&nbsp;</k>");
  stack1 = helpers._triageMustache.call(depth0, "follower_size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        </ul>\n    </div>\n\n</div>\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\">Follow</div>\n\n    ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "follow_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-exchange' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-ok' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, "contentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<!--\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\n");
  return buffer;
  
});

Ember.TEMPLATES["userFollowings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n\n\n<div class=\" box col1 style-box t-style-box\" style=\"text-align: center; \">\n    <div style=\"position:relative;height: 100px;overflow: hidden;line-height: 0;\">\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width:100%;\"/>\n    </div>\n\n    <!--TAGS-->\n\n    <div class=\"object-tags-box\">\n        <div class=\"object-tags\">\n            <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n            <div class=\"tags easing\">\n                <div class=\"object-type\">\n                    <i class=\"icon-group\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--END TAGS-->\n\n    <div class=\"masonry-object_profilepic\" style=\"cursor:pointer;width: 100px;position: relative;top: -50px;line-height: 100px;display: block;\" >\n\n        <a class='radius-circle' href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n            <img class=\"easing\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width:100%;\"/>   \n        </a>\n\n    </div>\n    <div style=\"position:relative;  line-height: 18px;margin: -40px auto 5px;width: 150px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n    </div>\n\n    ");
  stack1 = helpers['if'].call(depth0, "follow_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li class=\"location_li\" style=\"padding: 0 5px;\"><k class=\"icon-eye-open\"> ");
  stack1 = helpers._triageMustache.call(depth0, "collections_size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </k></li>\n            <li class=\"location_li\" style=\"padding: 0 5px;\"><k class=\"icon-group\"> ");
  stack1 = helpers._triageMustache.call(depth0, "partner_size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</k></li>\n            <li class=\"location_li\" style=\"padding: 0 5px;\"><k class=\"icon-circle-blank\"> ");
  stack1 = helpers._triageMustache.call(depth0, "follower_size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</k></li>\n        </ul>\n    </div>\n\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n\n\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\" box col1 style-box t-style-box\" style=\"text-align: center; \">\n    <div style=\"position:relative;height: 100px;overflow: hidden;line-height: 0;\">\n        <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url_large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width:100%;\"/>\n    </div>\n    <div class=\"user-profilepic-container\" style=\"position:absolute; top: 50px;margin: 0 auto;width: 100px;height: 100px;border: 2px solid #f3f3f3;left: 0;right: 0;\">\n\n        <a class='radius-circle' href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n\n            <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"width: 100px; height: 100px;\"/>\n        </a>\n\n    </div>\n    <div style=\"position:relative; height:35px; line-height: 35px;margin: 50px auto 5px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n    </div>\n    ");
  stack1 = helpers['if'].call(depth0, "isUserSelf", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li><k class=\"icon-eye-open\">&nbsp;</k>");
  stack1 = helpers._triageMustache.call(depth0, "collections_size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"location_li\"><k class=\"icon-circle-blank\">&nbsp;</k>");
  stack1 = helpers._triageMustache.call(depth0, "follower_size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        </ul>\n    </div>\n\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("    \n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\">Follow</div>            \n    ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "follow_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-exchange' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><i class='icon-ok' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "contentProfile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, "contentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["userMessage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                    <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n                </div>\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div class=\"message-btn easing hint--bottom hint--rounded\" style=''");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" data-hint=\"Post\"><k class='icon-ok'>&nbsp;</k>Post </div>\n                    ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"message-btn-x easing\" style='' ><i class=\"spinner\">&nbsp;</i>Posting </div>\n                    ");
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n    <div id=\"message_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">          \n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "message", "", options) : helperMissing.call(depth0, "render", "message", "", options))));
  data.buffer.push("\n    </div>\n\n    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<!--Add new post-->\n\n<div class=\"box col2\" style=\"background-color: #fafafa\">\n\n    <div  style=\"width: 98%;padding: 15px 10px;margin: 0 auto;border-bottom: 1px solid #ddd;min-height: 165px;\">\n        <div style=\"margin:0 auto; padding: 0 0 0 50px;\">\n            <a>\n                <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; \" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("commenter_photo_url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                <div class='user-says-angle-before' style=\"left: 49px;\"></div>\n                <div class='user-says-angle-after' style=\"left: 47px;\"></div>\n            </a>\n\n            <div class=\"\" style=\"width: 100%; border-radius: 2px;border: 1px solid #ddd;background-color: #fff;\">\n                <div   style=\"margin: 0;width: 100%; height:100px;\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Write something...")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                </div>\n                ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                    <div  class=\"message-btn easing hint--bottom hint--rounded\" style=\" border-right: 1px solid #ddd;\" data-hint=\"Add Photo\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n                    ");
  stack1 = helpers['if'].call(depth0, "controller.isPosting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<div  id=\"content_message\" class='Message-Board_comment-container' style=\" \">\n    ");
  stack1 = helpers.each.call(depth0, "contentMsg", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 200);\n    });\n</script>\n<!--existing post-->\n\n\n");
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["userPhotoEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:block;height: 420px;top: 0;background-color: #fff; padding: 0;overflow: hidden\">\n\n        <div class='styleup_uploadbox easing' style=\" height: 400px;width: 93%;position: absolute;\">\n            <i class='icon-upload icon-3x' style=\"width: 40px;margin: auto;display: block;position: relative;top: 125px;\" ></i>\n            <span style=\"display: block; position: relative;line-height: 30px;font-size: 20px;top: 140px; cursor: default;  font-weight: bold;line-height: 25px;\">Drag & drop a profile image here</span>\n            <span style='font-size: 16px;display: block;line-height: 18px;position: relative;top: 240px;'> ");
  stack1 = helpers._triageMustache.call(depth0, "controller.RequiredImageSize", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n\n\n            <div style=\"position: absolute;  vertical-align: top; text-align: center;width: 100%;height: 398px;top: 0;line-height: 345px;background-color: Rgba(30,30,30,.2);\">\n                <div>\n                    <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 170px; max-height: 170px;\">\n                    <div id='uploadStyleImg' style=\"display: none;\">\n                        <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                    </div>\n                </div>\n                <div style=\"margin: 2px auto 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px; display: none\">");
  stack1 = helpers._triageMustache.call(depth0, "newStyleImageName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <div style=\"text-align: center;height: 75px;line-height: 85px;background-color: #f3f3f3;bottom: 0;position: absolute;width: 100%;\">\n        <div class=\"new-btn blue-btn\" style=\"margin: 28px 10px; width: 83px; float: left;\">\n            <k class='icon-upload'> &nbsp;Choose \n                <div style=\"opacity:0;position: absolute;top: 0px;left: 0;width: 85px;overflow: hidden;\"> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n        </div>\n\n\n        <div style=\"margin: auto 10px;width: 150px;float: right;\">\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.isCrop", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n            <span class='new-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userPhotoEditBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-user'> &nbsp;</k>Back</span>\n\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <span id=\"photoUploadbtn\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-cut '> &nbsp;</k>Crop</span>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n            <span  class=\"disabled-btn\" ><k class='icon-cut '> &nbsp;</k>Crop</span>\n            ");
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div class='' style='position:relative;height: 85px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n        <span style=\"position: relative;display: inline-block;font-size: 40px;margin: 10px 0;vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n        <span style=\"position: relative;display: inline-block;margin: 15px 10px;font-size: 20px;line-height: 25px;width: 75%;\">Crop your picture now!</span>\n    </div>\n\n    <div id=\"crop-container\" style=\"width: 300px; height: 350px;text-align: center; margin: 10px auto\">\n        <canvas id=\"panel\" style=\"max-width: 300px; max-height: 350px;width: auto; height: auto;\"><img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" ></canvas>\n    </div>\n    <div style=\"margin: auto;width: 150px;\">\n        <span class=\"new-btn green-btn \" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePhotoUpdate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" ><k class='icon-save'> &nbsp;</k>Save</span>\n        <span class='new-btn flip-back'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userPhotoEditBackButton", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"user-photo_left-back\">\n    ");
  stack1 = helpers['if'].call(depth0, "controller.isPhotoUploadMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "controller.isPhotoEditingMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n <ul>\n     <li>\n         <h3>");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "", options) : helperMissing.call(depth0, "linkTo", "user", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    ");
  stack1 = helpers._triageMustache.call(depth0, "display_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n     </li>\n </ul>\n \n \n ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("\n<h1>USERS</h1>\n\n<h1>USERS</h1>\n\n\n ");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["video"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        <div class=\"article-title\">     ");
  stack1 = helpers._triageMustache.call(depth0, "controller.megaResouce.object_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n\n        <div class=\"article-text\">     ");
  stack1 = helpers._triageMustache.call(depth0, "controller.megaResouce.object_description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n\n\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "controller.is_article_video", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class='hint--left hint--rounded' data-hint='Edit Photo Info' style=\"position: absolute;font-size: 15px;right: 10px;margin: 1px;\">\n                <i class=\"icon-edit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingPhotoMegaData", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></i>\n            </div>\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.megaResouce.object_title"),
    'id': (""),
    'class': ("edit_photo-titile_field")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.megaResouce.object_description"),
    'id': (""),
    'class': ("edit_photo-caption_field")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n\n\n        <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n\n            <div  type=\"button\" class=\"new-btn blue-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n            <div  type=\"button\" class=\"new-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n        </div>\n\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                            <div class='remove-comment-photo easing' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                            <img  ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("newStyleImageSource")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n                        </div>\n                        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"comment-item\">\n\n                <div class=\"comment-position\">\n                    <a class=\"profilepic-comment-container\" href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                        <img class=\"profilepic_comment\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("commenter_profile_pic_url")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" />\n                    </a>\n                    <div style=\"\">\n                        <div class=\"comment-namentime\">\n                            <a class=\"comment-username\"  href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>                  \n                            </div>\n                            ");
  stack1 = helpers['if'].call(depth0, "getUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n\n                        <div class=\"comment-content\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            <!-- for +someone into the conversation-->\n                            <span>\n                                <span></span>\n                                <a></a>\n                            </span>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                            <span class=\"edit-comment easing\">\n                                <i class=\"icon-trash\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>                 \n                                <i class=\"icon-pencil\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("></i>\n                            </span>\n                            ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("   \n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"objectview-wrapper\" >\n\n    <div class=\"objectview-left\">\n        ");
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"top-controlbar easing\" >\n\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Save this photo to your own collection.\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n                <i class=\"icon-folder-close\"></i><span class=\"pretooltip\">Save</span>\n            </div>\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\"></i><span class=\"pretooltip\">Share</span> \n            </div>\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_1\" style=\"width: 150px; margin: 0 auto; left: 70px;padding: 0\">\n                <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n<script type=\"text/javascript\">\n    (function(d) {\n        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');\n        p.type = 'text/javascript';\n        p.async = true;\n        p.src = '//assets.pinterest.com/js/pinit.js';\n        f.parentNode.insertBefore(p, f);\n    }(document));\n</script>\n\n<div class=\"closeview\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n    <i class=\"icon-remove\"></i>\n</div>\n</div>\n\n<div class=\"mainfeature\">\n\n    <!--<div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ></div>-->\n    <!--    <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ></div>-->\n    <div class=\"mainfeature_object\" style=\"z-index: 0;text-align: center;line-height: 70;\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.video_iframe_code", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n\n</div>\n<!--THIS IS THE ALBUM BOX-->\n\n\n\n<!--THIS IS THE ALBUM BOX-->\n\n<div class=\"bottom-controlbar easing\" >\n    <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n    <div class=\"icon-on-black\"  style=\"display:inline-block; vertical-align: top; position:relative; left:44px;\">\n        <i class=\"icon-arrow-left\"></i>\n    </div>\n    <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px; display:inline-block; vertical-align: top; position:relative;\" >\n        <i class=\"icon-th\"></i>\n    </div>\n    <div class=\"icon-on-black\" style=\"left: 44px;position: relative;vertical-align: top;display: inline-block;\" >\n        <i class=\"icon-arrow-right\"></i>\n    </div>\n    <div class=\"text-on-black\" style=\"left: 88px; top:0;position: relative;display: inline-block;vertical-align: top;\">  </div>\n</div>\n\n\n\n\n</div>\n\n\n<div class=\"objectview-right\">\n\n    <!-- USER SECTION -->\n    <div style=\"cursor: pointer;\">\n        <div class=\"object-poster easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n            <div class=\"profilepic-container\">\n                <a class=\"profilepic\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("><img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.megaResouce.owner_profile_pic")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /></a>      \n\n            </div>\n            <div class=\"poster_user\" >\n\n                <a class=\"poster-name\" href=\"#/profiles/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "controller.megaResouce.owner_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </div>        \n            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                <a class=\"contactmeicon easing\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n            </div>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "controller.contact", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n    \n    \n    \n    <!-- OBJECT CONTROLL SECTION -->\n    <div class=\"collapes-container\"  style=\"display:block;border-top: 1px solid #f3f3f3;\">\n        <div class=\"collapes-container_inner\" style=\"padding: 0; height: 45px;\">\n\n\n            <div  class=\"square-button hint--rounded hint--bottom\"  data-hint=\"Like this Idea!\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                  <i class=\"icon-thumbs-up\">&nbsp;<span style=\"font-size: 11px;\">");
  stack1 = helpers._triageMustache.call(depth0, "megaResouce.likes_count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>&nbsp;</i>\n            </div>\n\n\n            <div class=\"square-button hint--rounded hint--bottom\"  data-hint=\"Add to your own collection.\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                <i class=\"icon-folder-close\" >&nbsp;</i>\n            </div>\n\n            <div class=\"square-button hint--rounded hint--bottom for-tooltip-position\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\" >&nbsp;</i>\n            </div>\n\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_2\" style=\"width: 170px; right: 80px; position: absolute; top: 120px;\">\n                <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n</div>\n</div>\n\n\n\n\n<!--THIS IS THE ARTICLE AND CAPTION SECTION-->\n\n\n\n\n\n\n<!-- OBJECT DESCRIBTION SECTION -->\n<div>\n<div class=\"object-collapes-title\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setTitleTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n    <div class=\"collapes-title_inner\">\n        About\n    </div>\n\n    <div class=\"dropdownicon\" >\n        <i class=\"icon-angle-down\"></i>\n    </div>\n</div>\n\n<div class=\"collapes-container\"   id=\"article_action\" style=\"display:block\">\n    <div  class=\"collapes-container_inner\">\n\n\n\n        ");
  stack1 = helpers.unless.call(depth0, "controller.enableToEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n</div>\n\n</div>\n\n<!-- OBJECT DISCUSSION SECTION -->\n\n<div>\n    <div class=\"object-collapes-title\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" >\n        <div class=\"collapes-title_inner\">\n            Discussion\n        </div>\n        <span class=\"show-comment_inner\">\n            <span class=\"comment-amount\" > ");
  stack1 = helpers._triageMustache.call(depth0, "controller.megaResouce.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </span>\n        </span>\n        <div class=\"dropdownicon\">\n            <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n        </div>      \n    </div>\n\n\n\n    <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n        <div class=\"collapes-container_inner\" style=\"padding: 0;margin: 0;width: 100%;\">\n            <div  style=\"width: 98%;padding: 15px 10px;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n                <div style=\"margin:0 auto; padding: 0 0 0 50px;\">\n                    <a>\n                        <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; z-index: 1\" src=\"http://develop.devbox.s3.amazonaws.com/profile_pic/default/defaultpic1.jpg\" />\n                        <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; z-index:2\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("controller.currentUser.photo_url_large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" /> \n                        <div class='user-says-angle-before' style=\"left: 51px;\"></div>\n                        <div class='user-says-angle-after' style=\"left: 49px;\"></div>\n                    </a>\n\n                    <div class=\"\" style=\"width: 100%; border-radius: 2px;border: 1px solid #ddd;background-color: #fff;\">\n                        <div   style=\"margin: 0;width: 100%; height:100px;\">\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("commentContent"),
    'id': ("AddRecord"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Write a comment...")
  },hashTypes:{'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("                                          \n                        </div>\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n\n                            <div class=\"message-btn easing\" style='width: 100%'");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post </div>\n\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n            ");
  stack1 = helpers.each.call(depth0, "controller.megaResouce.comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n</div>\n\n\n\n</div>\n\n\n</div>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["welcome"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div class=\"select-interest\" style=\" height: 150px; width: auto;position: relative; float: left; margin: 10px 20px  60px;\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTopic", "id", "topic", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push(">\n                     <div id=\"minus_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"invite-this-friend radius-circle easing\" style=\"z-index: 10; right: 0;display:none;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTopic", "id", "topic", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data})));
  data.buffer.push("><k class=\"icon-minus\" ></k></div>\n                     <div id=\"plus_");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"invite-this-friend radius-circle easing\" style=\"z-index: 10; right: 0;\" ><k class=\"icon-plus\" ></k></div>\n                    <div class=\"\" style=\"height: 100px;width: 100px;position: relative;border-radius: 50%;overflow: hidden;top: -5px;float: left; \">\n                        <div  class=\"usersobject-hoverarea easing\" style=\"height: 100px; width: 100px;\" >\n                        </div>\n                        <div style=\"position: relative;\">\n                            <div style=\"width: 100px; height: 100px; overflow: hidden;\">\n                                <img ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" style=\"min-height:100px; width: 100px; max-width: none;\"/>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"position: relative;text-align: center;font-size: 13px;width: 100px;line-height: 15px;\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("  <div class=\"register-btn easing\" style=\"width: 50%;float: left\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSelection", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Done&nbsp;<k class=\"icon-long-arrow-right\" style=\"font-size: 13px;\"></k></div>");
  return buffer;
  }

  data.buffer.push("\n\n<div style=\"width: 100%; height: 100%;position: relative;min-height: 728px;min-width: 1100px;display: block;\">\n        <img src=\"../../../images/landingpagebg.jpg\" style=\"\"/>\n         \n  </div>\n    \n\n    <div  style=\"z-index: 1;overflow: hidden;  background-color: white;border-radius: 5px;  width: 800px; height: 600px; margin: 0px auto; position: fixed; top: 15%; left: 0px; right: 0px; display:block\">\n            <div   style=\"background-color: #f3f3f3;padding: 5px 5px 10px 70px;border-bottom: 1px solid #ddd;\">\n                <div  class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n                    <div style=\"position: absolute;  text-align: center;line-height: 40px;margin: 0 auto;font-size: 20px;background-color: #f3f3f3; opacity: 0.5;\">\n                        Tell us what you're interested in!\n\n                    </div>\n                </div>\n            </div>\n              <div id =\"\" style=\"margin: 80px 30px 5px;height: 450px;\" >\n                <div style=\"position: absolute;top: 100px;font-size: 15px;font-weight: bold;\">\n                    <div style=\"position: relative\">Residential</div>\n                    <div style=\"position: relative;top: 200px;\">Commercial</div>\n                </div>\n\n                ");
  stack1 = helpers.each.call(depth0, "view.contentTopic", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            <div class=\"\" style=\"height: 45px;position: absolute;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n                <div class=\"register-btn easing\" style=\"width: 50%;border-right: 1px solid #ddd;float: left;\"></div>\n                ");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "searchIndex", options) : helperMissing.call(depth0, "linkTo", "searchIndex", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div> \n        </div>\n        \n ");
  return buffer;
  
});