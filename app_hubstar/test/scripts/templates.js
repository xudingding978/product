Ember.TEMPLATES["addCollection"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n            <div class=\"add-collection_select-collection\" style=\"\">\n                ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("newCollectionName"),
    'id': (""),
    'class': ("collect_newcollection-name"),
    'placeholder': ("Create new Collection")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("   \n\n                <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNewCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn green-btn\" style=\"vertical-align:middle;top:0;\">Create</div>\n\n\n\n                <div style=\"margin:10px; font-size: 16px; font-weight: bold; overflow: auto; overflow-x:hidden; width: 93%;height: 150px;\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.collections", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"new-btn\" style=\"float: right;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collectionSwitch", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     Cancel\n            </div>\n        </div>\n\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"choose-exist-collection easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseRecord", "title", "id", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <a class=\"exist-name easing\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                    </div>\n                    ");
  return buffer;
  }

  data.buffer.push("\n<div id=\"login_lightbox\" class=\"blur_black\" onclick=\"document.getElementById('login_lightbox').style.display = 'none';\n        document.getElementById('savePhoto').style.display = 'none';\">&nbsp;</div>\n<div id =\"savePhoto\"class=\"t-style-box\" style=\"z-index: 1002; position: relative;overflow: hidden;border-radius: 3px;\">\n\n    <div style=\"margin: 0 0 20px; position: relative; background-color: #f3f3f3; height: 45px;border-bottom: 1px solid #ddd;\">\n        <div style=' color: #555; font-size: 18px; font-weight: bold; text-align: center; line-height: 45px;'>Save to Collections</div>\n        <div class=\"exit\">\n            <div class=\"closeview\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-remove\"></i>\n            </div> \n        </div>  \n    </div> \n\n    <div class=\"contactmebox-wapper\" style=\"width: 500px;height: 190px;font-size: 13px;margin: 0 20px;\">\n        <div style=\"display:inline-block; \">\n\n            <div class=\"new-btn\" style=\"display:block;\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collectionSwitch", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'text': depth0};
  hashTypes = {'text': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'text': ("controller.selectedTitle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.selectedTitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                 &nbsp;<i class=\"icon-caret-down\"></i>\n            </div>\n            <div style=\"height: 150px;\">\n                ");
  hashContexts = {'valueBinding': depth0,'rows': depth0,'cols': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'rows': "STRING",'cols': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedDesc"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("collect_descriptionbox"),
    'placeholder': ("Say something about it!")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.selectionPop", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div style=\"display:inline-block;margin-left:15px; vertical-align: top;\">\n        <div style=\"width: 174px; height: 174px; overflow: hidden;padding: 10px;background-color: rgba(0,0,0,0.03);top: -4px;position: relative;\">\n            <img style=\"height: 154px;width: 154px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.selectedPhotoThumbnailUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"\" style=\"height: 45px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n    <div  class=\"message-btn easing\" style=\"height:45px;line-height: 45px; border-right: 1px solid #ddd;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-picture'>&nbsp;</k>Cancel</div>\n    <div class=\"message-btn easing\" style='height:45px;line-height: 45px;'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Submit</div>\n</div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["addVideo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"message-btn easing\" style=\"height: 40px;line-height: 40px;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "videoCreate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ><k class='icon-ok'>&nbsp;</k>Post</div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"message-btn-x easing\" style=\"height: 40px;line-height: 40px;\"><k class='icon-ok'>&nbsp;</k>Post</div>\n        ");
  }

  data.buffer.push("<div id=\"login_lightbox\" class=\"blur_black\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "canel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp;</div>\n\n<div class=\"\" style=\"width: 510px;margin: 0 auto;border-radius: 3px;overflow: hidden;border: 1px solid #eee; background-color: #fff;z-index: 11;position: fixed;top: 15%;\">\n    <div style=\"height: 50px;width: 100%;background-color: #f3f3f3;text-align: center;line-height: 50px;color: #555;border-bottom: 1px solid #ddd;\">\n        <i class=\"icon-film\" style=\"font-size: 18px;\">&nbsp;</i>\n        <span style=\"font-size: 20px; font-weight: bold\">Add Video</span>\n    </div>\n    <div style=\"margin: 20px;min-height: 400px;\">\n        <div style=\"height: 35px; width: inherit;border-bottom: 1px solid #ddd;\">\n            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("videoUrl"),
    'placeholder': ("Please insert YOUTUBE link or share url."),
    'class': ("no-effect")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            <div class=\"message-btn easing\" style=\"right: 0;position: absolute;top: 69px;margin-right: 20px;width: 35px;height: 35px;line-height: 35px;border-left: 1px solid #ddd;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getVideoFromYoutube", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-ok\"></i>\n            </div>\n        </div>\n        <div style=\"width: 470px; min-height: 300px; margin: 15px 0; border: 2px dashed #eee;\">\n            <div class=\"radius-circle\" style=\"position: absolute;width: 70px;height: 70px;border: 2px solid #eee;line-height: 66px;text-align: center;color: #eee;font-size: 25px;margin: 120px auto;left: 0;right: 0;box-shadow: 0 0 10px #f3f3f3;\">\n                <i class=\"icon-play\" style=\"margin-left: 5px;text-shadow: 0 0 10px #f3f3f3;\"></i>\n            </div>\n            <img style=\"width: 470px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("videoImg")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n        </div>\n        <div style=\"width: 470px; background-color: #f3f3f3;padding: 10px; min-height: 50px;\">\n            <div style=\"font-size: 15px;font-weight: bold;margin-bottom: 5px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "videoTitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <div style=\"line-height: 15px; font-size: 11px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "videoTitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "videoDesc", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n        </div>\n\n    </div>\n    <div class=\"\" style=\"height: 41px;position: relative;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n        <div class=\"message-btn easing\" style=\"height: 40px;line-height: 40px;border-right: 1px solid #ddd;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "canel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "videoid", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["afterLogin"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"user-header-menu\" style=\"\">\n\n    <div class=\"profilepic-container\" data-toggle=\"dropdown\" style=\"position: static;\">\n        <a style=\"position: absolute;z-index: -1\"><img src=\"https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg\" class=\"profilepic_user \" style='width: 45px;height:45px;'/></a>           \n        <a style=\"z-index: 1\"><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.user.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic_user  easing\" style='width: 45px;height:45px'/></a>              \n    </div>\n\n    <ul id=\"user-dd-menu\" class=\"hideClass edit-object-ul\" style=\"padding: inherit; top: 65px; width: 165px; left: -57px; position: absolute;\">\n        <li class=\"ite\" ><a tabindex=\"-1\" ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("controller.myUserProfile")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <k class=\"icon-user\" style=\"\">&nbsp;&nbsp;</k>\n                <span>My Trends</span>\n            </a></li>\n        <li class=\"ite\" ><a tabindex=\"-1\" ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("controller.myMessageBoard")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
<<<<<<< HEAD
  data.buffer.push(">\n                <k class=\"icon-envelope\" style=\"\">&nbsp;&nbsp;</k>\n                <span>Messages</span>\n            </a></li>\n        <li class='ite'><a tabindex=\"-1\" href=\"http://about.trendsideas.com/\" target=\"blank\">\n                <k class=\"icon-question-sign\" style=\"\">&nbsp;&nbsp;</k>\n                <span>Help</span>\n            </a></li>\n        <li class=\"ite\"><a tabindex=\"-1\" href=\"#\" onclick=\"logout();\">\n                <k class=\"icon-off\" style=\"\">&nbsp;&nbsp;</k>\n                <span>Logout</span> \n            </a></li>\n\n    </ul>\n\n</div>\n\n\n<script>\n\n            function logout() {\n                $.ajax({\n                    type: 'POST',\n                    url: getRestAPIURL() + '/logout',\n                    contentType: 'application/json; charset=uft-8',\n                    dataType: 'json',\n                    success: function(param) {\n                    }\n                });\n\n                localStorage.clear();\n            }\n</script>\n");
=======
  data.buffer.push(">\n                <k class=\"icon-envelope\" style=\"\">&nbsp;&nbsp;</k>\n                <span>Messages</span>\n            </a></li>\n        <li class='ite'><a tabindex=\"-1\" href=\"http://about.trendsideas.com/\" target=\"blank\">\n                <k class=\"icon-question-sign\" style=\"\">&nbsp;&nbsp;</k>\n                <span>Help</span>\n            </a></li>\n\n        <li class=\"ite\"><a tabindex=\"-1\" href=\"#\" onclick=\"logout();\">\n                <k class=\"icon-off\" style=\"\">&nbsp;&nbsp;</k>\n                <span>Logout</span> \n            </a></li>\n\n    </ul>\n\n</div>\n\n\n<script>\n\n            function logout() {\n\n                $.ajax({\n                    type: 'POST',\n                    url: getRestAPIURL() + '/logout',\n                    contentType: 'application/json; charset=uft-8',\n                    dataType: 'json',\n                    success: function(para) {\n\n\n                    }\n                });\n\n//                localStorage.clear();\n                localStorage.removeItem('loginStatus');\n\n\n            }\n</script>\n");
>>>>>>> 01558c1649c48e9666789184b6bfce7acce0a408
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.HeaderView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "profiles", options) : helperMissing.call(depth0, "outlet", "profiles", options))));
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "user", options) : helperMissing.call(depth0, "outlet", "user", options))));
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controller.isotherpage", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DiscoveryView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "welcome", options) : helperMissing.call(depth0, "outlet", "welcome", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "quickstart", options) : helperMissing.call(depth0, "outlet", "quickstart", options))));
  data.buffer.push("      \n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "render", "footer", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "platformBar", options) : helperMissing.call(depth0, "render", "platformBar", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loginModal", options) : helperMissing.call(depth0, "render", "loginModal", options))));
  data.buffer.push("       \n\n");
  return buffer;
  }

  data.buffer.push("<div style=\"width: 100%;height: auto;position:relative;z-index:2;\">\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.islogin", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "profile", options) : helperMissing.call(depth0, "outlet", "profile", options))));
  data.buffer.push("\n     ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "photos", options) : helperMissing.call(depth0, "outlet", "photos", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "articles", options) : helperMissing.call(depth0, "outlet", "articles", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "videoes", options) : helperMissing.call(depth0, "outlet", "videoes", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "profileNew", options) : helperMissing.call(depth0, "outlet", "profileNew", options))));
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "HubStar.isLogin", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "applicationFeedback", options) : helperMissing.call(depth0, "render", "applicationFeedback", options))));
<<<<<<< HEAD
  data.buffer.push("\n\n\n    <div id=\"loading\" class=\"loading\" >\n        <div id=\"blurringTextG\">\n            <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n                C</div>\n            <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n                r</div>\n            <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n                t</div>\n            <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n                i</div>\n            <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n                n</div>\n            <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n                g</div>\n            <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n                y</div>\n            <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n                o</div>\n            <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n                u</div>\n            <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n                r</div>\n            <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n                i</div>\n            <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n                d</div>\n            <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n                s</div>\n            <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n                s</div>\n            <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n                p</div>\n            <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n                c</div>\n            <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n                .</div>\n            <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n                .</div>\n            <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n                .</div>\n        </div>\n    </div>\n\n\n</div>\n<div style=\"background:#fff url('../images/bgtexture.png') repeat;width:100%;height:100%;position:fixed;z-index:1;top:0;left:0;\"></div>\n\n\n<script type=\"text/javascript\">\n\n    function DropDown(el) {\n        this.dd = el;\n        this.placeholder = this.dd.children('span');\n        this.opts = this.dd.find('ul.dropdown > li');\n        this.val = '';\n        this.index = -1;\n        this.initEvents();\n    }\n    DropDown.prototype = {\n        initEvents: function() {\n            var obj = this;\n            obj.dd.on('click', function(event) {\n                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                return false;\n            });\n            obj.opts.on('click', function() {\n                var opt = $(this);\n                obj.val = opt.text();\n                obj.index = opt.index();\n                obj.placeholder.text(obj.val);\n            });\n        },\n        getValue: function() {\n            return this.val;\n        },\n        getIndex: function() {\n            return this.index;\n        }\n    };\n    $(function() {\n        var dd1 = new DropDown($('.dropdown_test_1'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n        var dd4 = new DropDown($('.dropdown_test_4'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n    });\n    \n    \n \n    \n</script>\n");
=======
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.loginTime", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n    \n    <div id=\"loading\" class=\"loading\" >\n        <div id=\"blurringTextG\">\n            <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n                C</div>\n            <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n                r</div>\n            <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n                t</div>\n            <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n                i</div>\n            <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n                n</div>\n            <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n                g</div>\n            <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n                y</div>\n            <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n                o</div>\n            <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n                u</div>\n            <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n                r</div>\n            <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n                i</div>\n            <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n                d</div>\n            <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n                s</div>\n            <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n                s</div>\n            <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n                p</div>\n            <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n                a</div>\n            <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n                c</div>\n            <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n                e</div>\n            <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n                &nbsp;\n            </div>\n            <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n                .</div>\n            <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n                .</div>\n            <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n                .</div>\n        </div>\n    </div>\n\n\n</div>\n<div id=\"adsBank\" style =\"display: none\">\n</div>\n<div style=\"background:#fff url('../images/bgtexture.png') repeat;width:100%;height:100%;position:fixed;z-index:1;top:0;left:0;\"></div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<script type=\"text/javascript\">\n\n    function DropDown(el) {\n        this.dd = el;\n        this.placeholder = this.dd.children('span');\n        this.opts = this.dd.find('ul.dropdown > li');\n        this.val = '';\n        this.index = -1;\n        this.initEvents();\n    }\n    DropDown.prototype = {\n        initEvents: function() {\n            var obj = this;\n            obj.dd.on('click', function(event) {\n                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                return false;\n            });\n            obj.opts.on('click', function() {\n                var opt = $(this);\n                obj.val = opt.text();\n                obj.index = opt.index();\n                obj.placeholder.text(obj.val);\n            });\n        },\n        getValue: function() {\n            return this.val;\n        },\n        getIndex: function() {\n            return this.index;\n        }\n    };\n    $(function() {\n        var dd1 = new DropDown($('.dropdown_test_1'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n        var dd4 = new DropDown($('.dropdown_test_4'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n    });\n</script>\n");
>>>>>>> 01558c1649c48e9666789184b6bfce7acce0a408
  return buffer;
  
});

Ember.TEMPLATES["applicationFeedback"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n<div id='appfeedback' style=''>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.info", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.succeed", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.failed", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.warnning", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n    <div  class=\"fresh-profile-pic\"style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message\">\n        <k class=\"icon-info-sign\"></k>\n        <span class=\"feed-back\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n\n    <div class=\"fresh-profile-pic\" style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message fresh_succeed\">\n        <k class=\"icon-ok-sign\"></k>\n        <span class=\"feed-back\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n    <div class=\"fresh-profile-pic\" style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message fresh_failed\">\n        <k class=\"icon-remove-sign\"></k>\n        <span class=\"feed-back\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n    <div class=\"fresh-profile-pic\" style=\"\">\n        <img src=\"../../../images/trendsideas.jpg\"/>\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n    </div>\n    <div class=\"fresh-message fresh_warnning\">\n        <k class=\"icon-exclamation-sign\"></k>\n        <span class=\"feed-back\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        <k class=\"icon-remove\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></k>\n    </div>\n\n    ");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.feedback", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["article"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n            <i class=\"icon-double-angle-left\"");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setCaption", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n            <i class=\"icon-double-angle-right\"");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setCaption", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n            <div class=\"readbtn new-btn\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkReading", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                Read\n            </div>\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n            <div class=\"closeReadbtn new-btn\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkClosed", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Close\n            </div>\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div>\n        <div>\n            <div class=\"object-collapes-title\" >\n                <div class=\"collapes-title_inner\">\n                    Credit List\n                </div>\n            </div> \n\n        </div>\n\n\n\n\n        <div class=\"collapes-container\"  id=\"article_action\" style=\"display:block;\">\n            <div class=\"collapes-container_inner\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "articleResouce.credits", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n\n    ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div class=\"article-text\">\n                    <a style=\"font-weight: bold\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "credits_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":</a>\n                    <span style=\"font-size: 13px\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "credits_text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></div>\n\n                ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                    <div class=\"addcommnetbox-container\" id=\"commentBox\" style=\"display: none\">\n                        <div style=\"margin:0 auto; padding: 0 0 15px 38px;\">\n                            <a> \n                                <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -38px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                            </a>\n\n                            ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'id': ("AddRecord"),
    'class': ("comment-insert-field"),
    'placeholder': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("   \n                            <span class=\"\" style=\"margin-top: 7px;float: right;\">\n                                <div  class=\"new-btn\"");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n                                <div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Post</div>\n                            </span>\n\n                        </div>\n                    </div>\n\n                    ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},inverse:self.program(22, program22, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                    <div class=\"comment-item\">\n\n                        <div class=\"comment-position\">\n                            <a class=\"profilepic-comment-container\" href=\"#\">\n                                <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                            </a>\n                            <div style=\"\">\n                                <div class=\"comment-namentime\">\n                                    <div class=\"namentime_position\">\n                                        <a class=\"comment-username\" href=\"\" >\n                                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </a>\n                                        <div class=\"posttime-container\">\n                                            <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                                        </div>\n                                    </div>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "getUser", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                                </div>\n\n                                <div class=\"comment-content\">\n                                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                                    <span>\n                                        <span></span>\n                                        <a></a>\n                                    </span>\n                                </div>\n\n                            </div>\n                        </div>\n\n                    </div>\n                    ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <span class=\"edit-comment easing\">\n                                        <i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>                 \n                                        <i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                                    </span>\n                                    ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("   \n                    ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loginModal", options) : helperMissing.call(depth0, "render", "loginModal", options))));
  data.buffer.push("       \n\n");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"objectview-wrapper this-is-an-article\" >\n\n    <div class=\"objectview-left article-objectview-left\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"top-controlbar easing\" >\n            <!--            <div class=\"icon-on-black\" style=\"left: 8px;\"><i class=\"icon-thumbs-up\"></i></div>-->\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Save this photo to your own collection.\" style=\"position:relative;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-save\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                <span class=\"pretooltip\">\n                    Save\n                </span>          \n            </div>\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\"></i><span class=\"pretooltip\">Share</span> \n            </div>\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"width: 150px; margin: 0 auto; left: 70px;padding: 0\">\n                <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n<script type=\"text/javascript\">\n    (function(d) {\n        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');\n        p.type = 'text/javascript';\n        p.async = true;\n        p.src = '//assets.pinterest.com/js/pinit.js';\n        f.parentNode.insertBefore(p, f);\n    }(document));\n</script>\n<!--    <div class=\"icon-on-black\" style=\"height: 44px;position: absolute;width: 44px;\"><i class=\"icon-share-alt\"></i></div>     -->\n<div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n    <i class=\"icon-remove\"></i>\n</div>\n</div>\n\n<div class=\"mainfeature\">\n    <div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n    <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.PhotoDisplayAreaView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n\n<div class=\"caption-container\" id=\"caption_action\">\n    <div style=\"margin-bottom: 5px;\">\n        <span class=\"hover-opacity easing\" style=\"float: right; cursor:pointer;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.readCaption", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                       \n        </span>\n    </div>\n    <div class=\"caption-text\" style=\"width: 300px;font-size: 13px;line-height: 16px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "caption", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>\n</div>\n\n\n<!--THIS IS THE ALBUM BOX-->\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ShowAlbumView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<!--THIS IS THE ALBUM BOX-->\n\n<div class=\"bottom-controlbar easing\" >\n    <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n    <div class=\"icon-on-black\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display:inline-block; vertical-align: top; position:relative; left:44px;\">\n        <i class=\"icon-arrow-left\"></i>\n    </div>\n    <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px; display:inline-block; vertical-align: top; position:relative;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupAibum", "controller.selectedPhoto.id", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i class=\"icon-th\"></i>\n    </div>\n    <div class=\"icon-on-black\" style=\"left: 44px;position: relative;vertical-align: top;display: inline-block;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i class=\"icon-arrow-right\"></i>\n    </div>\n    <div class=\"text-on-black\" style=\"left: 88px; top:0;position: relative;display: inline-block;vertical-align: top;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.image_no", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>\n</div>\n\n\n</div>\n\n\n\n<div class=\"objectview-right  article-objectview-right\" >\n\n    <!-- USER SECTION -->\n    <div style=\"cursor: pointer;\">\n        <div class=\"object-poster easing\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div class=\"profilepic-container\" >                   \n                <a href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.megaResouce.owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.megaResouce.creator_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic\"/></a>                              \n            </div>\n            <div class=\"poster_user\">\n                <a class=\"poster-name\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.megaResouce.owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "controller.megaResouce.created", options) : helperMissing.call(depth0, "date", "controller.megaResouce.created", options))));
  data.buffer.push("</span>\n            </div>\n\n            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                <a class=\"contactmeicon easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.contact", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n    </div>\n\n    <!-- OBJECT DESCRIBTION SECTION -->\n    <div>\n        <div class=\"object-collapes-title\" >\n            <div class=\"collapes-title_inner\">\n                Article\n            </div>\n\n\n\n\n\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "view.readContent", {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n\n\n    </div>\n\n\n\n    <div class=\"collapes-container\"  id=\"article_action\" style=\"display:block;\">\n        <div class=\"collapes-container_inner\">\n            <div class=\"article-title\" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.articleResouce.article_headline", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <div class=\"article-text\">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "controller.articleResouce.article_body", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n        </div>\n    </div>\n\n    <!-- OBJECT CREDIT LIST SECTION -->\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isCreditListExist", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n\n    <!-- OBJECT DISCUSSION SECTION -->\n    <div>\n        <div>\n            <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                <div class=\"collapes-title_inner\">\n                    Discussion\n                </div>\n                <div class=\"dropdownicon\">\n                    <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n                </div>      \n            </div>\n\n\n\n            <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n                <div class=\"collapes-container_inner\">\n\n                    <div class=\"show-comment\">\n                        <div class=\"show-comment_container\">\n                            <span class=\"show-comment_inner\">\n                                <span class=\"comment-amount\" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.article.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                                <span class=\"comment-amount\" > comments   </span> \n                            </span>\n                        </div>\n\n                        <div class=\"object-like\" style=\"\"></div>\n                        <div class=\"object-save\" style=\"\"></div>\n                    </div>\n                    <div class=\"addcommnetbox\" role=\"button\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"addcommetBut\" >\n                        add comment...\n                    </div >\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.article.comments", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n\n\n</div>\n\n\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["beforeLogin"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("          \n\n\n\n\n\n\n<ul class=\"login_guest nav\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <li><a class=\"Geo-Filter easing \" href=\"#\" style=\"font-weight: bold\">Login</a></li>\n</ul>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["camera"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("\n\n\n\n\n\n\n");
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div id=\"myCarousel\" class=\"carousel\" style='z-index: 1;'>\n    <div style=\"background: url('../../../images/shadowontop.png') repeat-x;position: absolute;top: 620px;z-index: 1000;width: 100%;height: 30px;\"></div>\n    <!-- Carousel items -->\n    <div class=\"carousel-inner\" style=\"min-width:1260px\">\n        <div class=\"active item\"><img src=\"http://s3.hubsrv.com/trendsideas.com/slide_img/kichen_a.jpg\"></div>\n        <div class=\"item\"><img src=\"http://s3.hubsrv.com/trendsideas.com/slide_img/kichen_b.jpg\"></div>\n\n    </div>\n    <!-- Carousel nav -->\n    <a id=\"slider-control\" class=\"icon-angle-left\" href=\"#myCarousel\" data-slide=\"prev\" style=\" float: left;left: 5%;\"></a>\n    <a id=\"slider-control\" class=\"icon-angle-right\" href=\"#myCarousel\" data-slide=\"next\"style=\"float: right;left: -5%;\"></a>\n\n    <div class=\"tile_img\">\n        <div id=\"dd3\" class=\"wrapper-dropdown-3\" tabindex=\"1\" style=\" width:270px; height:45px;left: 360px;\">\n            <div>\n                <div id=\"dropdown-cover\" class=\"dropdown_test_3\" style=\"float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -10.5px; padding-left: 35px;\">\n                    <div class=\"login-icon\">\n                        <i class=\"icon-facebook icon-large\">\n                        </i>\n                    </div>   \n                </div>\n                <div  id=\"dropdown-cover\" onclick=\"Facebook(650, 400);\" style=\"float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -10px;\">\n                    <div class=\"sign-in-with\" >Sign In with Facebook</div>\n                </div>\n                \n            </div>\n            <ul class=\"dropdown\" style=\"width:270px\">\n                <li  onclick=\"LinkedIn(650, 400);\" ><a style=\"color:rgb(0,172,237)\" href=\"#\"><i class=\"icon-linkedin-sign icon-large\"></i>Sign in with LinkedIn</a></li>\n                <li  onclick=\"Google(650, 400);\" ><a style=\"color:rgb(211,72,54)\" href=\"#\"><i class=\"icon-google-plus icon-large\"></i>Sign in with Google+</a></li>\n                <li  onclick=\"Yahoo(650, 400);\" ><a style=\"color:rgb(123,0,153)\" href=\"#\"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>\n                <li  onclick=\"QQ(650, 400);\" ><a style=\"color:rgb(62,59,62)\" href=\"#\"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>\n                <li  class='signup' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a style=\"color:rgb(0,153,68)\" href=\"#\"><i class=\"icon-envelope icon-large\"></i>Sign in with Email</a></li>\n            </ul>\n        </div>\n        <div class=\"title_text\" >\n            <p style=\"font-size: 42px; font-weight: bold; line-height: 50px;\">\n                YOUR ONLINE RESOURCE FOR INSPIRATIONAL PRODUCTS, SERVICES & IDEAS\n            </p>\n            \n            <p style=\"line-height: 20px; width: 900px;left: 100px;position: relative;\">\n                Hundreds of videos, thousands of articles and tens of thousands of high quality images from around the world showcasing: Architecture, Kitchen Design, Bathroom Design, Interiors, Landscape Design and Commercial Design. \n            </p>\n        </div>\n    </div>\n\n</div>\n\n<!--<div style=\"position: relative; height: 400px; width: 100%;\"></div>-->\n\n<script type=\"text/javascript\">\n\n\n                    function DropDown(el) {\n                        this.dd = el;\n                        this.placeholder = this.dd.children('span');\n                        this.opts = this.dd.find('ul.dropdown > li');\n                        this.val = '';\n                        this.index = -1;\n                        this.initEvents();\n                    }\n                    DropDown.prototype = {\n                        initEvents: function() {\n                            var obj = this;\n\n                            obj.dd.on('click', function(event) {\n                                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                                return false;\n                            });\n                            obj.opts.on('click', function() {\n                                var opt = $(this);\n                                obj.val = opt.text();\n                                obj.index = opt.index();\n                                obj.placeholder.text(obj.val);\n                            });\n                        },\n                        getValue: function() {\n                            return this.val;\n                        },\n                        getIndex: function() {\n                            return this.index;\n                        }\n                    };\n\n                    $(function() {\n\n                        var dd3 = new DropDown($('.dropdown_test_3'));\n                        $(document).click(function() {\n                            $('.wrapper-dropdown-3').removeClass('active');\n                        });\n\n                    });\n\n                    function setDomain() {\n\n                        var api_url = document.domain;\n                        var api_domain_start_pos = api_url.indexOf('.');\n                        var api_url = api_url.slice(api_domain_start_pos);\n\n                        return api_url;\n                    }\n                    function Facebook(popupWidth, popupHeight) {\n\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Facebook#_=_\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n\n\n\n                    }\n                    function Yahoo(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Yahoo\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function QQ(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=QQ\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function Sina(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Sina\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function LinkedIn(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=LinkedIn\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function Google(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Google\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight * 1.5 + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n\n\n\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["collections"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div class=\"box style-box t-style-box col2\" id=\"addNew\" style=\"z-index: 0\">\n\n    <div id=\"uploadObject\"  >\n         <div class=\"add-new-object-hoverarea easing\">\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n\n        </div>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n<script>\n\n    $(function() {\n    var $container = $('#masonry_user_container');\n    window.setTimeout(function() {\n    $container.masonry();\n    $container.masonry('reload');\n    }, 10);\n    });\n\n</script>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n<div class=\"box col2 style-box t-style-box\">\n    <div class=\"masonry-object Targeting_Object_front\"  id=");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <a class=\"album-description-hoverarea easing\" href=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToCollectionPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n               <table class=\"album-description\" cellpadding=\"0\" cellspacing=\"0\">\n                   <tr>\n                       <td valign=\"middle\"><div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "desc", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div></td>\n                   </tr>\n               </table> \n\n                <table class=\"album-description-bg\" cellpadding=\"0\" cellspacing=\"0\">\n                   <tr>\n                       <td valign=\"middle\"><div>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "desc", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div></td>\n                   </tr>\n               </table> \n        </a>\n        <div class=\"albumcover-container\"  > \n            <div class=\"\">\n                <img class=\"albumcover\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("cover")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />     \n            </div>\n\n        </div>\n        <div class=\"album-info\">\n            <div class=\"album-info_name\"><i class=\"icon-picture\" >&nbsp;</i>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <div class=\"album-info_content\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                <span><a href=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToCollectionPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> </a> photos</span>\n                <span><img src=\"../../images/list-doc.png\"/>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "created_at", options) : helperMissing.call(depth0, "date", "created_at", options))));
  data.buffer.push("</span>               \n            </div>\n        </div>\n    </div>\n    <div id=\"Targeting_Object_back\"");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("getCollectionId")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>\n<script>\n\n    $(function() {\n    var $container = $('#masonry_user_container');\n    window.setTimeout(function() {\n    $container.masonry();\n    $container.masonry('reload');\n    }, 10);\n    });\n\n</script>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                <div class=\"edit-btn edit-collection-btn easing hint--left hint--rounded\" data-hint=\"Edit collection info.\">\n                    <i class=\"icon-cog\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editCollectionButton", "id", "title", "desc", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ></i>\n\n         </div>\n                ");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "collections", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div style=\"margin-right: 20px;float: right; font-size: 13px;\">\n        <div  id=\"thumbUpBtn_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"display:inline-block;vertical-align: top;\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", "model.id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-thumbs-up-alt\">&nbsp</i>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.likes_count", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        <div data-hint=\"Add to your own collection.\" id=\"saveBtn_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  style=\"display:inline-block;vertical-align: top;\" class=\"new-btn hint--top hint--rounded\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-save\" >&nbsp</i></div>\n        <div id=\"share_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"new-btn\"  style=\"position:relative;\">\n\n            <div data-hint=\"Share this photo to other social platform.\" style=\"display:inline-block;vertical-align: top;\" class=\"hint--top hint--rounded\" ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shareDisplay", "model.id", {hash:{
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-share-alt\" >&nbsp</i></div>\n\n            <ul class=\"hideClass edit-object-ul\" style=\"width: 150px; margin: 0 auto; left: 0px;padding: 0;z-index:2; position: absolute;\">\n                <li style=\"position:fixed;top:0;left:0;height:100%;width:100%;z-index:-1;\" ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shareHide", "model.id", {hash:{
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></li>\n                <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n</div>\n\n</div>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"comment-item\" id=\"commentItem_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"display: block\">\n\n        <div class=\"comment-position\">\n            <a class=\"profilepic-comment-container\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n               <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n            </a>\n            <div style=\"\">\n                <div class=\"comment-namentime\">\n                    <div class=\"namentime_position\">\n                        <a class=\"comment-username\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                           ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </a>\n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                    </div>\n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "getUser", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n\n            <div class=\"comment-content\">\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n                <span>\n                    <span></span>\n                </span>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <span class=\"edit-comment easing\">\n                    <i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>                 \n                    <i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                </span>\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n<div class=\"comment-item\" id=\"commentItemIn_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"display: block\">\n\n    <div class=\"comment-position\">\n        <a class=\"profilepic-comment-container\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n           <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n        </a>\n        <div style=\"\">\n            <div class=\"comment-namentime\">\n                <div class=\"namentime_position\">\n                    <a class=\"comment-username\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                       ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </a>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getUser", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"comment-content\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n            <span>\n                <span></span>\n            </span>\n        </div>\n\n    </div>\n</div>\n\n</div>\n<div class=\"addcommnetbox-container comment-frame\" id=\"commentEdit_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"display: none\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("       \n</div>\n");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>                 \n                <i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n<div class=\"masonry-object_interact\" >\n    <div class=\"masonry_show-comment\">\n        <div class=\"show-comment_container\" >\n            <div class=\"show-comment_inner\"  id=\"showMoreComment_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"   ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeMore", "model.id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <span class=\"comment-amount text-anchor easing\">  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                <span class=\"comment-amount text-anchor easing\"> comments<i class=\"icon-angle-down\"></i></span>\n            </div>\n\n\n            <div class=\"show-comment_inner\" id=\"closeComment_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"   style=\"display: none\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMore", "model.id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <span class=\"comment-amount text-anchor easing\">  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                <span class=\"comment-amount text-anchor easing\"> comments  <i class=\"icon-angle-up\"></i></span>\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <div id=\"addCollection_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  style=\"display: none\">\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n        <!--<div style=\"position:fixed; background-color: red; width: 100px;height: 100px;top:100px\">asdfasdfasdfasdfasdfsd</div>-->\n    </div>       \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.getProfile", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<div class=\"masonry_addcommnetbox-container\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComment", "model.id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"comment_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n    <div class=\"addcommnetbox\">\n        Add comments \n    </div>\n</div>\n\n<div class=\"addcommnetbox-container comment-frame\" id=\"commentBox_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"display: none\">\n    <div style=\"margin:0 auto; padding: 0 0 15px 45px;\">\n        <a>\n            <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -45px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n        </a>\n\n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'id': (""),
    'class': ("comment-insert-field"),
    'placeholder': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        <span class=\"\" style=\"margin:7px 0;float: right;\">\n            <div  class=\"new-btn\"");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComment", "model.id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n            <div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Post</div>\n        </span>\n\n    </div>\n</div>\n\n<div id=\"commentData_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"comment-frame\" style=\"max-height:88px;\">\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "model.comments", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n</div>\n\n\n\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.isThumbUped),stack1 ? stack1.call(depth0, "model.people_like", "model.id", options) : helperMissing.call(depth0, "isThumbUped", "model.people_like", "model.id", options))));
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"head controlbtn-field\">\n        <div style=\"position: relative; text-align: center;\">\n            <div class=\"panelcircle radius-circle\" style=\"\">1</div>\n            <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"panelcircle radius-circle\" style=\"\">2</div>\n            <div style=\"width: 300px; height: 2px; border-radius: 20%;background-color:#ccc;position: absolute;margin: auto;left: 0;right: 0;top: 19px;z-index: 0;\"></div>\n            <div style='font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);position: relative;top: 10px;right: 87px;font-weight: bold;margin-bottom: 10px;'> Send a message.</div>\n        </div>\n    </div>\n\n    <div class=\"head\" style='padding-bottom: 0;'>\n        <div class=\"poster_user\" >\n            <div style=\"display: block; font-size: 16px; font-weight: bold; margin-bottom: 5px;\">\n                <span style=\"display: inline-block;margin-right: 5px;\">Send an Email to</span>\n                <a style=\"max-width: 240px; display: inline-block; overflow: hidden; text-overflow: ellipsis;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.selectedMega.owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n            </div>\n            <div style=\"display: block;\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.isDisplayNameEditable", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <a style=\"display: inline-block; cursor: pointer;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEditable", "Name", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "editNameStatus", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n            </div>\n            <div style=\"display: block; margin-bottom: 15px;\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.isDisplayEmailEditable", {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <a style=\"display: inline-block;cursor: pointer;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEditable", "Email", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "editEmailStatus", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n            </div>\n        </div>\n        <div style=\"float: right;position: relative; display: inline-block; vertical-align: top;margin: 5px 0;\">\n            <a href=\"#\"><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic\"/></a>              \n        </div>\n        <div>\n            <span style=\"display: inline-block; margin-right: 10px;\">Subject:</span>\n            <div style=\"display: inline-block; width: 378px; vertical-align: middle;\">\n                ");
  hashContexts = {'valueBinding': depth0};
  hashTypes = {'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.emailSubject")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <span style=\"display: inline-block;margin-right: 5px;\">From: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.displayName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                \n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("controller.displayName"),
    'class': ("lineuptextbox")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <span style=\"display: inline-block;margin-right: 5px;\">Email: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.displayEmail", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchAreaTextFieldView", {hash:{
    'valueBinding': ("controller.displayEmail"),
    'class': ("lineuptextbox")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"head controlbtn-field\">\n        <div style=\"position: relative;margin-bottom: 20px;text-align: center;\">\n            <div class=\"panelcircle radius-circle\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "proviousSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">1</div>\n            <div class=\"panelcircle radius-circle\" >2</div>\n            <div style=\"width: 300px; height: 2px; border-radius: 20%;background-color:#ccc;position: absolute;margin: auto;left: 0;right: 0;top: 19px;z-index: 0;\"></div>\n            <div style='font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);position: relative;top: 10px;left: 90px;font-weight: bold;margin-bottom: 10px;'>Help us help you.</div>\n        </div>\n    </div>\n    ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n            <table style=\"padding: 0 20px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;\">\n                <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                    <tr>\n                        <td>Project Category:</td>\n                        <td>\n                            <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownCategory", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownCategory\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectCategorySelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectCategoryDropdown", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Project Timeframe:</td>\n                        <td> \n                            <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownTimeframe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownTimeframe\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.timeframeSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectTimeframeDropdown", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Project Budget:</td>\n                        <td> \n                            <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownBudget", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownBudget\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectBudgetSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectBudgetDropdown", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Project Experience:</td>\n                        <td>\n                            <div class=\"new-btn\" style=\"display: block;\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownExperience", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownExperience\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectExperienceSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectExperienceDropdown", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                </tbody>\n            </table>    \n\n             <span style='color: #555;text-align: right;cursor: default;font-size: 15px;float: left;margin: 5px 0 0 55px;'> I need help on: (Please choose your category)</span>\n          \n            <ol  class=\"checkbox-columncontainer\" style=\"margin: 20px 0 10px 20px;max-height: 170px;overflow: auto;\">\n ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.showCate", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ol>\n\n\n\n            ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push(" \n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <li class=\"checkbox-container\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkedAction", "list_id", "", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n                    <input type=\"checkbox\" ");
  hashContexts = {'id': depth0,'checked': depth0};
  hashTypes = {'id': "STRING",'checked': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("list_id"),
    'checked': ("isSelection")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"css-checkbox\"   >\n                    <label for=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" name=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"css-label lite-blue-check ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category_topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n\n\n                </li>\n                ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n\n\n        <div style=\"display: block;padding: 5px 0px;\">\n            <div>\n                <span style=\"display: inline-block; margin-bottom: 5px;\">Message:</span>\n                <div style=\"margin-bottom: 10px; width: 100%; height: 200px;resize: none;\">\n                    ");
  hashContexts = {'valueBinding': depth0,'rows': depth0,'cols': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'rows': "STRING",'cols': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.emailBody"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("no-resize"),
    'placeholder': ("I saw your profile, I'd love to talk to you about my project, Please reply if you are interested..........")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                </div>\n            </div>\n        </div>\n\n\n        ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <span style=\"float: left;margin: 15px;position: relative;left: 15px;\">\n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "proviousSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn blue-btn\">\n                 <k class='icon-arrow-left'>&nbsp;</k>Previous</div>\n        </span>\n        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n            \n            \n        <span style=\"float: left;margin: 10px;position: relative;left: 15px;\">\n          <div>");
  hashContexts = {'checkedBinding': depth0};
  hashTypes = {'checkedBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("rememberMessage")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("Remember My Message</div>\n        </span>\n            \n            ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "emailSend", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn green-btn\">Submit </div>\n            ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            \n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn green-btn\">Next</div>\n            ");
  return buffer;
  }

  data.buffer.push("    \n\n<p id=\"dragarea\" style=\"position: relative;height: 20px; width: 100%;cursor: move\"></p>\n<div class=\"contactmebox-wapper\" style=\"width: 500px;font-size: 13px;background-color: white;z-index:11;\">\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n    <div class=\"content\" style=\"border-radius: 0; padding: 15px 30px 0px;\">\n        <div class=\"contactme-table easing\" style=\"text-align: center;\">\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n        </div>\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n\n    <div class=\"controlbtn-field\">\n        \n        \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n           ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n        \n        <span class=\"controlbtn\">\n          \n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeContact", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn\">Cancel</div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["conversation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" \n    <div id=\"conversation_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "conversationID", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"class='each-conversation easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToConversation", "conversationID", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n         <div style=\"  padding: 15px 0 10px 95px;position: relative;\">\n            <div style='position: absolute;right: 35px;top: 40px;color: #888;' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeConversationItem", "conversationID", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-trash'></i></div>\n\n\n            <div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "one", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "two", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "three", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "four", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                \n            </div>\n\n\n            <div style=\"\">\n                <div class=\"comment-namentime\">\n                    <div class=\"namentime_position\">\n                        <span class=\"comment-username\"  >\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "names", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </span>\n                        <div class=\"posttime-container\">\n                            <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"comment-content\" style=\" width: 400px; height: 35px; text-overflow: ellipsis;\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n\n    </div>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                \n                <img style=\"width: 45px;height: 45px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("onePic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                \n                <img style=\"width: 45px;height: 45px;float: left; margin-left: -22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("onePic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                <img style=\"width: 45px;height: 45px;float: left;vertical-align: top;margin-right: -22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("twoPic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                \n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("onePic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("twoPic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                <img style=\"width: 45px;height: 45px;vertical-align: top;margin-right: -22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("threePic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                \n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("onePic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("twoPic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;position: absolute;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("threePic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                <img style=\"width: 22.5px;height: 22.5px;position: absolute;top: 22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("fourPic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                \n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div id=\"conversation_content\" class=\"\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "conversationContent", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n<!--one user-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 45px;height: 45px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n</div>\n\n\n<!--two users-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 45px;height: 45px;float: left; margin-left: -22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    <img style=\"width: 45px;height: 45px;float: left;vertical-align: top;margin-right: -22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n</div>\n\n\n<!--three users-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    <img style=\"width: 45px;height: 45px;vertical-align: top;margin-right: -22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n</div>\n\n<!--four users-->\n<div class=\"radius-circle\" style=\"position: absolute; top: 20px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;position: absolute;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    <img style=\"width: 22.5px;height: 22.5px;position: absolute;top: 22.5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n</div>\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<script>\n    $(function() {\n        $(\"#conversation_content\").mCustomScrollbar({\n            scrollButtons: {\n                enable: false,\n                scrollSpeed: \"auto\"\n            },\n            advanced: {\n                updateOnBrowserResize: true,\n                updateOnContentResize: true,\n                autoScrollOnFocus: false,\n                normalizeMouseWheelDelta: false\n            },\n            autoHideScrollbar: true,\n            mouseWheel: true,\n            theme: \"dark-2\",\n            set_height: 1000\n        });\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["conversationItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("       \n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "invitePeople", options) : helperMissing.call(depth0, "render", "invitePeople", options))));
  data.buffer.push("      \n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("     \n            <div  class=\"hint--rounded hint--bottom\" data-hint=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;margin:10px 5px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />                \n            </div>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <div style=\"padding:5px 15px;background-color: #f4f6f8;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAdd", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div style=\"margin:10px 5px;margin-left: 10px;position: relative;width: 45px;display: inline-block;vertical-align: top;\"  data-hint=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToList", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >            \n                 <div class=\"invite-this-friend radius-circle easing\" style=\"opacity: .8;\"><k class=\"icon-minus\" ></k></div>\n                <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />                         \n            </div>\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div style='background-color: rgba(0,0,0,.2);max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;'>\n                    <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;;\">\n                </div>\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"message-btn easing\" style=''");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n                    ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"message-btn-x easing\" style=''><i class=\"spinner\">&nbsp;</i>Posting </div>\n                    ");
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class=\"Message-Board_comment-item\" style=''>         \n            <div class=\"comment-position\">   \n                <a class=\"profilepic-comment-container\"   href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sender_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                    <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("sender_photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            <a class=\"comment-username\"   href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "sender_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                            </div>\n                        </div>                      \n                    </div>\n                    <div class=\"comment-content\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isUrl", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n\n            <script>\n                $(function() {\n                    var $container = $('#masonry_user_container');\n                    window.setTimeout(function() {\n                        $container.masonry();\n                        $container.masonry('reloadItems');\n                    }, 10);\n                });\n            </script>\n        </div>\n\n        ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                        <div style='margin: 5px auto;max-width: 300px;max-height: 300px;float: left;'>\n                            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"border: 4px solid #fff;\"/>\n                        </div>\n                        ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isInvitePeople", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"Message-Board box\" style=\"\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\">\n            <div class=\"radius-circle\" style=\"float: left; margin: 12px; box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n                <img style=\"width: 45px;height: 45px;float: left;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n            </div>\n            &nbsp;Conversation\n        </div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Invite friends to this conversation!\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "invitePeople", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             <span style=\"position: relative\">\n                <i class=\"icon-user\" style=\"\"></i>\n                <i class=\"icon-plus\" style=\"position: absolute;font-size: 8px;top: 8px;left: 10px;color: white;background-color: #888;height: 12px;width: 12px;line-height: 11px;border: 1px solid #fff;border-radius: 50%;\"></i>\n            </span>\n        </div>\n        <div class=\"create-conversation easing\" style=\"position: absolute;right: 0px;  width: 20px;text-align: center;line-height: 70px;\">\n            <div  id=\"showMoreComment\"  style=\"line-height: 45px;display:none;\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeMore", {hash:{
    'target': ("controller"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-caret-down show-comment_inner\" ></i>   \n            </div>\n            <div id=\"closeComment\"   style=\"line-height: 45px;display: inline-block;\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMore", {hash:{
    'target': ("controller"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-caret-up show-comment_inner\" ></i>\n            </div>\n        </div>\n    </div>\n\n    <div style=\"position: relative; width: 100%; border-bottom: 1px solid #ddd;\">       \n        <div id=\"messageData\"  style=\"padding: 5px  15px;margin-left: 10px; display: inline-block;\" >\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentFollowerPhotoOld", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNewPeople", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div  style=\"width: 100%;padding: 20px 6.5%;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n        <div style=\"margin:0 auto; padding: 0 0 0 45px;\">\n            <a>\n                <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -45px; margin-top: 0;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                <div class='user-says-angle-before'></div>\n                <div class='user-says-angle-after'></div>\n            </a>\n\n            <div class=\"post-comment-container\">\n                <div   style=\"margin: 0;width: 100%; height:80px;\">\n                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize"),
    'placeholder': ("What's up!")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                          \n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                    <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPosting", {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div  id=\"content_conversationItem_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class='Message-Board_comment-container' style=\" \">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "conversationItemContent", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    </div>\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 10);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["deleteFunction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n<div class=\"blur_black\"></div>\n\n\n\n\n<div style=\"z-index: 11;background-color: white; border: 1px rgba(0,0,0,.6); border-radius: 3px;box-shadow: 0 0 20px 5px #aaa;  width: 500px;margin: 0 auto; padding: 20px 40px;position: fixed; top: 35%;left: 0;right: 0;\">\n    <i class=\"icon-exclamation-sign\" style=\"font-size: 35px;margin: auto;width: 40px;position: relative;left: 0;right: 0;display: block;text-align: center;margin-top: 5px;\"></i>\n    <div style=\" color: #333; font-size: 18px; font-weight: bold; line-height: 20px; text-align: center;margin: 10px 0;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    <div style=\"font-weight: normal; font-size: 13px;text-align: center;\"> You won't be able to undo this!</div>\n    <div style=\"width:200px; margin: 20px auto 5px;text-align: center;\">       \n        <div class=\"new-btn red-btn\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteSelection", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Yes</div>\n        <div  class=\"new-btn\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelDelete", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["discoveryBar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.NavigatorView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n<div id=\"discovery_search_bar_wrapper\" style=\"z-index: 11\">\n\n    <div style=\"position: absolute; top: 150px; width: 600px;left:0; right: 0; margin: auto; l\">\n        <img src=\"../../images/Wecometext.png\"/>\n    </div>\n\n    <div class=\"search-bar\" style=\"\">\n        <div class=\"Search-box easing\" style=\"\">\n            ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("search_string"),
    'id': ("search_businesses"),
    'class': ("no-effect hover-opacity easing"),
    'placeholder': ("Search  by keyword")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
<<<<<<< HEAD
  data.buffer.push("\n            <div class=\"Nav-btn easing\" style=\"position: absolute;right: -5px;border-radius: 0 3px 3px 0;top: 0; border-left: 1px solid #ddd;\"  ");
=======
  data.buffer.push("\n\n\n        <a  style=\"right: -35px;\" class=\"cancleIcon\"  href=\"#\" ><i class=\"icon-remove-sign\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearSearch", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i></a>\n    </div>\n    <div style=\"margin: auto; width: 200px; top: 450px; position: relative;\"></div>    \n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 100px; display: block; position: absolute;left: 0;right: 0;top: 310px; cursor:pointer;\" ");
>>>>>>> 01558c1649c48e9666789184b6bfce7acce0a408
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searching", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-search\"></i>\n            </div>\n        </div>\n        <div id =\"navigator\" class=\"Nav-btn easing\" style=\"float: right;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownNavigator", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-list\"></i></div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isNavigatorDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"popular-topics\" style=\"\">\n        <span style=\"float: left;color: white;font-family: Georgia, serif;font-style: italic;margin: 5px 15px;\">Most Popular Topics:</span>\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "New Homes", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >New Homes</div>\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Kitchens", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Kitchens</div>\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Bathrooms", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Bathrooms</div>\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Renovations", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Renovations</div>\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Outdoor Living", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Outdoor Living</div>\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "Interior", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Interior</div>\n    </div>\n\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["dropdownList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"dropItem1\"  class=\"Dropdownstyle1\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownCategory", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n     <div  class=\"ite \" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSelection", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"dropItem2\" class=\"Dropdownstyle1\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownTimeframe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">1-2 months</div>\n    <div  class=\"ite \">Next 6 months</div>\n    <div  class=\"ite \">Within 12 months</div>\n    <div  class=\"ite \">1-2 years</div>\n    <div  class=\"ite \">Within 3 years</div>\n</div>\n");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"dropItem3\" class=\"Dropdownstyle1\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownBudget", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Less than 5k</div>\n    <div  class=\"ite \">5k-10k</div>\n    <div  class=\"ite \">10k-50k</div>\n    <div  class=\"ite \">50k-100k</div>\n    <div  class=\"ite \">100k-250k</div>\n    <div  class=\"ite \">250k-500k</div>\n    <div  class=\"ite \">500k- 1M</div>\n    <div  class=\"ite \">1M+</div>\n</div>\n");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"dropItem4\" class=\"Dropdownstyle1\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownExperience", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">First Time</div>\n    <div  class=\"ite \">Helped someone do this</div>\n    <div  class=\"ite \">Have done this once before</div>\n    <div  class=\"ite \">Experienced at this type of project</div>\n</div>\n");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"packgetDropdown\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "package", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Platinum</div>\n    <div  class=\"ite \">Gold</div>\n    <div  class=\"ite \">Silver</div>\n    <div  class=\"ite \">Bronze</div>\n</div>\n");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"categoryDropdown\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "category", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n     <div  class=\"ite \">Apartment Design</div>\n    <div  class=\"ite \">Bathrooms</div>\n    <div  class=\"ite \">Civic Design</div>\n    <div  class=\"ite \">Educational Design</div>\n    <div  class=\"ite \">Home Theatre</div>\n    <div  class=\"ite \">Hospitality design</div>\n    <div  class=\"ite \">Interior living</div>\n    <div  class=\"ite \">Kitchen</div>\n    <div  class=\"ite \">New homes</div>\n    <div  class=\"ite \">Office Design</div>\n    <div  class=\"ite \">Outdoor Living</div>  \n    <div  class=\"ite \">Refurbishment</div>\n    <div  class=\"ite \">Renovation</div>\n    <div  class=\"ite \">Retail Design</div>\n\n\n</div>\n");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"profilePackgetDropdown\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectCategoryDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Platinum</div>\n    <div  class=\"ite \">Gold</div>\n    <div  class=\"ite \">Silver</div>\n    <div  class=\"ite \">Bronze</div>\n</div>\n");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"geoDropdown\" class=\"edit-object-ul Dropdownstyle2\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.applicationCategoryDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div class=\"ite easing\" style=\"\">Global</div>\n    <div class=\"ite easing\" style=\"\">Australia</div>\n    <div class=\"ite easing\" style=\"\">New Zealand</div>\n    <div class=\"ite easing\" style=\"\">United States</div>\n    <div class=\"ite easing\" style=\"\">India</div>\n    <div class=\"ite easing\" style=\"\">China</div>\n    <div class=\"ite easing\" style=\"\">Asia</div>\n</div>\n");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"is_actvie\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectActiveDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">true</div>\n    <div  class=\"ite \">false</div>\n</div>\n");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"is_delete\" class=\"Dropdownstyle1\" style=\"width: 500px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectDeleteDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">true</div>\n    <div  class=\"ite \">false</div>\n</div>\n");
  return buffer;
  }

  data.buffer.push("<div id=\"login_lightbox\" class=\"blur\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "canelDropDown", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp;</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectCategoryDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectTimeframeDropdown", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectBudgetDropdown", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectExperienceDropdown", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.packgetDropdown", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.categoryDropdown", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPackgetDropdown", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isGeoDropdown", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isActiveDropdown", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isDeleteDropdown", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["editCollection"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

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
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'style': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'style': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("controller.newTitle"),
    'id': (""),
    'class': (""),
    'style': ("height:30px;"),
    'placeholder': ("e.g. Bedroom Design")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'style': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'style': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("currentAddPartnerPic"),
    'id': (""),
    'class': (""),
    'style': ("height:30px;"),
    'placeholder': ("e.g. http://beta.trendsideas.com/#/profiles/leo")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n        <div style=\"margin: auto; vertical-align: top;width: 80%;left: 0;right: 0;position: relative;\">\n            <div style=\"height: 180px; overflow: hidden;width: 100%;line-height: 180px;text-align: center;margin-top: 5px;\">\n                <img style=\"max-height: 100%; padding: 10px; background-color: rgba(0,0,0,0.03);\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("selectedPartnerPic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n            </div>\n        </div>\n\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n\n        <div style=\"font-size: 16px;font-weight: bold;color: #555; line-height: 25px;\">Description</div>\n        <div style=\"height: 150px;\">\n            ");
  hashContexts = {'valueBinding': depth0,'rows': depth0,'cols': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'rows': "STRING",'cols': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.newDesc"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("no-resize"),
    'placeholder': ("Add a short description to your Collection")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n\n\n        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div id=\"deletebtn\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteSelectedCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn red-btn\" style=\"right:0; display: none\">\n             <i class='icon-trash'></i>\n        </div>\n                    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        <div style=\"position: relative; right: 15px;margin-top: 8px;float: right;\">\n\n            <div id=\"uploadingObject\" class='new-btn' style=\"right: 0;\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "returnCollection", "id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n            <div id=\"createbtn\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn green-btn\" style=\"right:0;\">Create </div>\n            <div id=\"updatebtn\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateCollectionInfo", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn green-btn\" style=\"right:0; display: none\">Update</div>\n\n        </div>\n        ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        <div style=\"float: right; margin: 5px 20px;\">\n            <div id=\"uploadingObject\" class='new-btn' style=\"right: 0;\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "returnCollection", "id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n            <div id=\"createbtn\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn green-btn\" style=\"right:0;\">Add</div>\n        </div>\n        ");
  return buffer;
  }

  data.buffer.push("\n\n<div id=\"uploadArea\"  style=\"height: 510px;width: 570px;  display: none\">\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div  style=\" width: 80%;  margin: auto;\" id=\"clientAddCollection\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    </div>\n    <div class=\"controlbtn-field\" style=\"margin-top: 0px;height: 60px;\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.updateOrCreate", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.addPartner", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["editComment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div style=\"margin:0 auto; padding: 0 0 15px 45px;\">\n    <a>\n        <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -45px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n    </a>    \n    ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'id': (""),
    'class': ("comment-insert-field"),
    'placeholder': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    <span class=\"\" style=\"margin:7px 0;float: right;\">\n        <div  class=\"new-btn\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeCommentItem", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n        <div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Post</div>\n    </span>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["editMessage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", "model.message_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>             \n                <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n            </div>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model.isUrl", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                <div class='remove-comment-photo easing'  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeOriginalPic", "model.message_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>             \n                <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"max-width: 100%; max-height: 80px;\"/>\n            </div>\n            ");
  return buffer;
  }

  data.buffer.push("\n<div  style=\"width: 98%;padding: 15px 10px;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n    <div style=\"margin:0 auto; padding: 0 0 0 50px;\">\n        <a>\n            <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; \" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n            <div class='user-says-angle-before' style=\"left: 49px;\"></div>\n            <div class='user-says-angle-after' style=\"left: 47px;\"></div>\n        </a>\n\n        <div class=\"\" style=\"width: 100%; border-radius: 2px;border: 1px solid #ddd;background-color: #fff;\">\n            <div   style=\"margin: 0;width: 100%; height:100px;\">\n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize no-effect"),
    'placeholder': ("What's up!")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                          \n            </div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                    <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"message-btn easing\" style=''");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateMessage", "model.message_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["editReply"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n        <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border:1px solid #ddd;'>\n            <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", "model.reply_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>   \n\n            <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n        </div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model.isUrl", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border:1px solid #ddd;'>\n            <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeOriginPic", "model.reply_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>   \n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"max-width: 100%; max-height: 80px;\"/>\n        </div>\n\n        ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"reply-comment-frame\"  style=\"padding: 15px;border-bottom: 1px solid #ddd;\">\n    <div style=\"margin:0 auto; padding: 0 45px 0 0;\">\n        <a  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n            <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -45px 0 0; margin-top: 0;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n            <div class='user-reply-angle-before' style=\"right: 47px;\"></div>\n            <div class='user-reply-angle-after' style=\"right: 45px;\"></div>\n        </a>\n\n        <div class=\"reply-comment-container\" style=\"width: 100%;height: 32px;\">\n            <div id =\"editReply_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.reply_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"margin: 0;width: 210px; height: 30px;float: left;\">\n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("replyContent"),
    'class': ("no-resize"),
    'placeholder': ("What's up!")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                          \n            </div>\n            <div style=\"float: right;height: 34px;position: relative;\">\n                <div  class=\"message-btn easing\" style=\"width:30px; border-right: 1px solid #ddd; border-left: 1px solid #ddd;\"><k class='icon-picture'></k>\n                    <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"message-btn easing\" style='width: 30px;'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateReply", "model.reply_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     <k class='icon-ok'></k>\n                </div>\n            </div>\n        </div>\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n</div>\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["edting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"head\"></div>\n<div class=\"content\">\n    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("profile_name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \n\n    <div class=\"buttons\" style=\"display: inline-block; vertical-align: text-top;\">\n\n        <div  type=\"button\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeTitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n        <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exitEditing", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["edtingAbout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"head\"></div>\n<div class=\"content\" id=\"about\">\n\n    ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'class': ("fake")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("about"),
    'class': ("textarea")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto;right: 0;left: 85%;\">\n\n        <div  type=\"button\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeAbout", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" > <i class=\"icon-ok icon-white\"></i></div>\n\n        <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exitAboutEditing", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n    </div>\n\n</div>\n\n<script>\n    $('.fake').wysihtml5();\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"footer\">\n    <div class=\"footer_contentbox\">\n\n        <div style=\"text-align: center; padding: 55px 0; margin: 0 auto; font-size: 13px; width: 200px; \">\n            <img class=\"logonew\" style=\"height: auto; position: relative; top: 0; margin:0;width: 160px;\"  src =\"../../../images/landing-trends.png\"/>\n            <div style=\"padding-top: 15px;\">\n                <i class=\"socon icon-facebook-sign icon-3x\"></i>\n                <i class=\"socon icon-twitter-sign icon-3x\" style=\" padding: 0 27px;\"></i>\n                <i class=\"socon icon-rss icon-3x\"></i>\n            </div>\n        </div>\n\n    </div>\n</div><!-- footer -->\n\n<p id=\"back-top\">\n    <a href=\"#top\"><span></span>Back to Top</a>\n</p>");
  
});

Ember.TEMPLATES["googleMapPopup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        <div id=\"routeGo\" class=\"message-btn easing\" style='width: 33%;height: 45px;line-height: 45px;'");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "routeGo", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Get Direction <k class='icon-long-arrow-right'>&nbsp;</k></div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div  class=\"message-btn-x easing\" style='width: 33%;height: 45px;line-height: 45px;'>Get Direction <k class='icon-long-arrow-right'>&nbsp;</k></div>\n        ");
  }

  data.buffer.push("\n<div id=\"google_pop\" class=\"blur_black\" style=\"\"");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setGooglePopup", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n\n\n<div  id =\"google_map_pop\" class=\"aside-container radius-rounded-corner box\" style=\"position: fixed; top: 15%; z-index: 10; margin: auto; left: 0px; right: 0px; width: 800px;height: 565px;background-color: #fff;overflow: hidden;border: 0;\" >\n    <div  id=\"map_canvas_pop\"style=\"width: 800px; height: 425px; background-color: rgb(229, 227, 223); -webkit-transform: translateZ(0); position: relative; overflow: hidden;border-bottom: 1px solid #ddd; \" >\n\n\n    </div>\n    <div class=\"scrollbarGoogleMap\">\n        <div  id=\"directionsPanel\" style=\"display:none; position: absolute; width: 265px; direction: ltr; height: 425px; overflow: auto; overflow-x: hidden;right: 0px; top: 0px; border-left-width: 1px; border-left-style: solid; border-left-color: rgb(221, 221, 221); border-bottom: 1px solid #ddd;\" > \n        </div>        \n    </div>\n\n    <div style=\"margin: 15px 0 5px;\">\n        <div style=\"margin: 10px auto;border-bottom: 1px solid #ddd; width: 87%;\"> ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("fromAddress"),
    'placeholder': ("From"),
    'class': ("no-effect")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</div>\n        <div style=\"margin: 10px auto; width: 87%\"> ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("toAddress"),
    'placeholder': ("To"),
    'class': ("no-effect")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</div>\n    </div>\n\n    <div class=\"\" style=\"height: 45px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n        <div class=\"message-btn easing\" style='width: 33%;height: 45px;line-height: 45px;' value=\"Print map\" onclick=\"printmap('google_map_pop');\"><k class='icon-print'>&nbsp;</k>Print Map</div>\n\n\n\n        <div id =\"routeMode\" class=\"message-btn easing\" style=\"border: none; border-right: 1px solid #ddd;border-left: 1px solid #ddd; width: 34%;height: 45px;line-height: 45px;border-radius: 0;\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownRoute", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <span id=\"routeModeSelection\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.routeModeSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        </div>\n\n        <div id=\"routeModeDropdown\" class=\"hideClass Dropdownstyle1\" style=\" z-index: 1000; position: fixed;text-align: center;margin: 42px 264px;\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectRoute", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <li class=\"ite\" value=\"DRIVING\" >DRIVING</li>\n            <li class='ite' value=\"WALKING\">WALKING</li>\n            <li class='ite' value=\"BICYCLING\">BICYCLING</li>\n            <li class=\"ite\" value=\"TRANSIT\">TRANSIT</li>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "fromAddress", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        <div  id=\"routeClear\" class=\"message-btn easing\" style='display:none;width: 33%;height: 45px;line-height: 45px;'");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "routeClear", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-long-arrow-left'>&nbsp;</k>Clear</div>\n    </div>\n\n</div>\n\n\n\n<script>\n            function printmap(divName)\n            {\n                var printContents = document.getElementById(divName).innerHTML;\n                var originalContents = document.body.innerHTML;\n                document.body.innerHTML = printContents;\n                window.print();\n                document.body.innerHTML = originalContents;\n\n            }\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.NavigatorView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n        <div id=\"login_detail\" style=\"position: relative;float: right;cursor: pointer;text-align: right;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.AfterLoginView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"Geo-Filter easing\"  style=\"margin-right: 50px;font-size: 15px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             <i class=\"icon-bell-alt icon-large\"></i>\n            <div style=\"cursor: pointer;position: absolute;top: 20px;left: 15px;width: auto;padding: 0 5px 0 4px;height: 15px;background-color: red;line-height: 15px;border-radius: 2px;font-size: 11px;font-weight: bold;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "unReadCount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </div>\n\n\n\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n        <div id=\"login_icon\" style=\"position: absolute; right: 80px;\">\n\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.BeforeLoginView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n        </div>\n\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "notificationTop", options) : helperMissing.call(depth0, "render", "notificationTop", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  data.buffer.push("<div class=\"navbar\">\n    <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img style=\"\" src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.3-112</span>\n    </div>\n    <div style=\"margin: 0 auto; width: 87%; height: 45px;\">\n        <div class=\"brand\">\n            <a href=\"/#\">\n                <img style=\"position: relative; top: 0; margin:0;height: 25px;\" src=\"../../../images/landing-trends.png\">\n            </a>\n        </div>\n\n        <!-- show if not logged into platform-->\n        ");
=======
>>>>>>> ad787fa098bbed072b96b4b0253613e8e20961d8
>>>>>>> abf9f164eed68e5665139efba3de00296379903a
  data.buffer.push("<div class=\"navbar\">\n\n    <div id=\"search-bar\" class=\"search-bar-ontop\" style=\"display:none;\">\n        <div class=\"Search-box easing\" style=\"\">\n            ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("search_string"),
    'id': ("search_business"),
    'class': ("no-effect hover-opacity easing"),
    'placeholder': ("Search by keyword")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            <div class=\"Nav-btn easing\" style=\"position: absolute;right: -5px;border-radius: 0 3px 3px 0;top: 0; border-left: 1px solid #ddd;\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searching", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-search\"></i>\n            </div>\n        </div>\n        <div id =\"navigator\" class=\"Nav-btn easing\" style=\"float: right;\" ");
=======
  data.buffer.push("<div class=\"navbar\">\n    <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img style=\"\" src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.3-113</span>\n    </div>\n    <div style=\"margin: 0 auto; width: 87%; height: 45px;\">\n        <div class=\"brand\">\n            <a href=\"/#\">\n                <img style=\"position: relative; top: 0; margin:0;height: 25px;\" src=\"../../../images/landing-trends.png\">\n            </a>\n        </div>\n\n        <!-- show if not logged into platform-->\n        ");
>>>>>>> 3966df4d426d8a94a43ac85b7952595ab441225b
=======
  data.buffer.push("<div class=\"navbar\">\n    <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img style=\"\" src=\"../../../images/beta-version.png\"/>\n\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.3-118</span>\n    </div>\n    <div style=\"margin: 0 auto; width: 87%; height: 45px;\">\n        <div class=\"brand\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backToDefault", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <a href=\"/#\">\n                <img style=\"position: relative; top: 0; margin:0;height: 25px;\" src=\"../../../images/landing-trends.png\">\n            </a>\n        </div>\n\n        <!-- show if not logged into platform-->\n        ");
>>>>>>> 01558c1649c48e9666789184b6bfce7acce0a408
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownNavigator", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-list\"></i></div>\n        ");
<<<<<<< HEAD
=======
<<<<<<< HEAD
  data.buffer.push("<div class=\"navbar\">\n    <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img style=\"\" src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.3-113</span>\n    </div>\n    <div style=\"margin: 0 auto; width: 87%; height: 45px;\">\n        <div class=\"brand\">\n            <a href=\"/#\">\n                <img style=\"position: relative; top: 0; margin:0;height: 25px;\" src=\"../../../images/landing-trends.png\">\n            </a>\n        </div>\n\n        <!-- show if not logged into platform-->\n        ");
>>>>>>> develop-602-comments-controller-UD
=======
  data.buffer.push("<div class=\"navbar\">\n    <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img style=\"\" src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.3-112</span>\n    </div>\n    <div style=\"margin: 0 auto; width: 87%; height: 45px;\">\n        <div class=\"brand\">\n            <a href=\"/#\">\n                <img style=\"position: relative; top: 0; margin:0;height: 25px;\" src=\"../../../images/landing-trends.png\">\n            </a>\n        </div>\n\n        <!-- show if not logged into platform-->\n        ");
>>>>>>> f6041454ac441f1885facb27ee2348a4ac59f868
=======
>>>>>>> 4f7796a2be3beb46411ee064e7f7362aa901504f
>>>>>>> ad787fa098bbed072b96b4b0253613e8e20961d8
>>>>>>> abf9f164eed68e5665139efba3de00296379903a
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isNavigatorDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"navbar-inner\">\n        <div class=\"brand\">\n            <a href=\"/#\"> <img class=\"logonew\" style=\"position: relative; top: 0; margin:0;\" src=\"../../../images/landing-trends.png\"></a>\n\n            <div style=\"position: relative;display: inline-block;top: 12px;font-weight: normal;font-style: italic;color: white;font-size: 11px;\">\n                <span>Beta</span> <span id=\"lastidentifie\">0.3-93</span>\n            </div>\n        </div>\n\n\n        <div id=\"top-about-menu\" class=\"top-about-menu\" style=\"display:block;\">\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/\">About</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/business/\">Business</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/learning-centre/\">Learning Centre</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/contact-us/\">Contact us</a></span>\n        </div>\n\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "HubStar.isLogin", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n        <!-- user is logged in -->\n\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNotification", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div id=\"geo-filter\" class=\"Geo-Filter easing \" style=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "geoLocation", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             <i class=\"icon-angle-down icon-large\">&nbsp;</i>\n            <span style=\"font-weight: bold;font-size: 15px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "HubStar.geoLocation", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        </div>\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isGeoDropdown", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    </div>\n</div>\n\n\n\n\n<script type=\"text/javascript\">\n\n    $(document).ready(function() {\n        // left hiding menu bar\n\n        // hide #back-top first\n        $(\"#back-top\").hide();\n        $(window).scroll(function() {\n\n            if ($(this).scrollTop() > 150) {\n                $('#back-top').fadeIn();\n            } else {\n                $('#back-top').fadeOut();\n            }\n\n        });\n        $('#back-top a').click(function() {\n            $('body,html').animate({\n                scrollTop: 0\n            }, 800);\n            return false;\n        });\n    });\n\n\n\n\n\n\n    function setDomain() {\n\n        var api_url = document.domain;\n        var api_domain_start_pos = api_url.indexOf('.');\n        var api_url = api_url.slice(api_domain_start_pos);\n\n        return api_url;\n    }\n\n\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["htmlEditor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div id=\"wysihtml5-editor-toolbar\" style=\"background-color: #f3f3f3;border-bottom: 1px dashed #999;background-clip: padding-box;\">\n    <header>\n        <ul class=\"commands\">\n            <li data-wysihtml5-command=\"bold\" title=\"Make text bold (CTRL + B)\" class=\"command easing\"><i class=\"icon-bold editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"italic\" title=\"Make text italic (CTRL + I)\" class=\"command easing\"><i class=\"icon-italic editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"insertUnorderedList\" title=\"Insert an unordered list\" class=\"command easing\"><i class=\"icon-list-ul editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"insertOrderedList\" title=\"Insert an ordered list\" class=\"command easing\"><i class=\"icon-list-ol editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"createLink\" title=\"Insert a link\" class=\"command easing\"><i class=\"icon-link editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"insertImage\" title=\"Insert an image\" class=\"command easing\"><i class=\"icon-picture editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h1\" title=\"Insert headline 1\" class=\"command easing\"><i class=\"editor-icon\">H1</i></li>\n            <li data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h2\" title=\"Insert headline 2\" class=\"command easing\"><i class=\"editor-icon\">H2</i></li>\n            <li data-wysihtml5-command-group=\"foreColor\" class=\"fore-color\" title=\"Color the selected text\" class=\"command easing\"><i class=\"editor-icon\"> T </i>\n                <ul>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"silver\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"gray\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"maroon\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"red\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"purple\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"green\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"olive\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"navy\"></li>\n                    <li data-wysihtml5-command=\"foreColor\" data-wysihtml5-command-value=\"blue\"></li>\n                </ul>\n            </li>\n            <li data-wysihtml5-command=\"insertSpeech\" title=\"Insert speech\" class=\"command easing\"><i class=\"icon-microphone editor-icon\">&nbsp;</i></li>\n            <li data-wysihtml5-action=\"change_view\" title=\"Show HTML\" class=\"action easing\"><i class=\"icon-code editor-icon\">&nbsp;</i></li>\n        </ul>\n    </header>\n    <div data-wysihtml5-dialog=\"createLink\" class=\"easing\" style=\"display: none;z-index: 10;opacity: .9\">\n        <div style=\"display: inline-block; margin: 0 10px;font-weight: bold; color: #888;\">\n            Link:\n            <input class=\"disabled-btn\" style=\"top:0\" data-wysihtml5-dialog-field=\"href\" value=\"http://\">\n        </div>\n        <a class=\"new-btn blue-btn\" data-wysihtml5-dialog-action=\"save\" style=\"top:0\">OK</a>&nbsp;<a class=\"new-btn\" data-wysihtml5-dialog-action=\"cancel\" style=\"top:0\">Cancel</a>\n    </div>\n\n\n    <div data-wysihtml5-dialog=\"insertImage\" class=\"easing\" style=\"display: none;z-index: 10;opacity: .9\">\n        <div style=\"display: inline-block; margin: 0 10px;font-weight: bold; color: #888;\">\n            Image: \n            <input class=\"disabled-btn\" style=\"top:0\" data-wysihtml5-dialog-field=\"src\" value=\"http://\">\n        </div>\n        <a class=\"new-btn blue-btn\" data-wysihtml5-dialog-action=\"save\" style=\"top:0\">OK</a>&nbsp;<a class=\"new-btn\" data-wysihtml5-dialog-action=\"cancel\" style=\"top:0\">Cancel</a>\n    </div>\n</div>\n\n\n<section>\n\n    <div class=\"wysihtml5_text-area\" style=\"overflow: hidden;width: 99%;\">\n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("model.profile_about_us"),
    'id': ("wysihtml5-editor")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n\n</section>\n<script>\n\n    var editor = new wysihtml5.Editor(\"wysihtml5-editor\", {\n        toolbar: \"wysihtml5-editor-toolbar\",\n        stylesheets: [\"http://yui.yahooapis.com/2.9.0/build/reset/reset-min.css\", \"styles/editor.css\"],\n        parserRules: wysihtml5ParserRules\n    });\n\n    editor.on(\"load\", function() {\n        var composer = editor.composer;\n        composer.selection.selectNode(editor.composer.element.querySelector(\"br\"));\n    });\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"well\">\n    Welcome to Yeoman and Ember.js!\n</div>\n");
  
});

Ember.TEMPLATES["invitePeople"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div style=\"position: relative; width: 100%;text-align: center;height: 190px;padding-top: 70px;float: left;\">\n            <i class=\"spinner\">&nbsp;</i>\n        </div>\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"invite-friend hint--rounded hint--bottom\" data-hint=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToList", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAdd", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
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
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp;</div>\n\n<div id =\"invitepeople\" class=\"Message-Board\" style=\"z-index: 11; position: fixed; width: 545px; margin: 10px auto; border-radius:5px; overflow: hidden; background-color: rgb(255, 255, 255); top: 25%; left: 0px;display: block;right: 0;box-shadow: 0 0 5px #fff;\">\n    <div class=\"\" style=\"height: 50px; width: 100%;position: relative; border-bottom: 1px solid #ddd; background-color: #f3f3f3;padding: 0 15px;\">\n        <div style=\"color: #555; font-size: 15px; line-height: 50px; font-weight: bold; float: left;margin-left: 20px;\">Adding friends to the conversation.</div>\n        <!--            <div  class='create-conversation easing' style=\" font-size: 15px; line-height: 50px; font-weight: bold; width: 50px;height: 49px;\"><k class=\"icon-search\"></k></div>-->\n    </div>\n\n    <div style=\"position: relative; width: 100%;min-height: 100px;max-height: 520px;padding: 0 45px;\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n         \n    </div>\n <br/><br/>\n    <div class=\"\" style=\"height: 41px;position: relative;border-top: 1px solid #ddd;bottom: 0;width: 100%;display: block;clear: both;\">\n        <div  class=\"message-btn easing\" style=\"font-size: 15px; height: 40px; line-height: 40px; border-right: 1px solid #ddd;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        <div class=\"message-btn easing\" style=\"font-size: 15px; height: 40px; line-height: 40px;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewPost", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">             \n             <span style=\"position: relative\">\n                <i class=\"icon-user\" style=\"\"></i>\n                <i class=\"icon-plus\" style=\"position: absolute;font-size: 8px;top: 8px;left: 10px;color: white;background-color: #333;height: 12px;width: 12px;line-height: 11px;border: 1px solid #fff;border-radius: 50%;\"></i>\n            </span>\n             &nbsp;Invite</div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkingLoginStatus", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"masonry-object\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "itemProfiles", "", options) : helperMissing.call(depth0, "render", "itemProfiles", "", options))));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n</div>\n\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkingLoginStatus", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n    <div class=\"masonry-object\">\n        <div class=\"masonry-object_poster\">\n            <div class=\"profilepic-on-masonry\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">  <img  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/></a>\n            </div>\n            <div class=\"object_username\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\" style=\"display:none;\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n\n\n            <div class=\"object-tags-box\">\n\n                <div class=\"object-tags\" >\n                    <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n                    <div class=\"tags easing\">\n                        <!--                        <div class=\"tags-new\">New </div>-->\n                        <div class=\"object-tpye hint--left hint--rounded\" data-hint=\"Image\">\n                            <i class=\"icon-picture\" ></i>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "region", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n                    </div>\n                </div>\n                <div class=\"object-tags \" style=\"display:none;\">\n                    <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "timezone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>                   \n                    </div>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"masonry-object_mainfeature\">             \n            <div class=\"mainfeature-wrapper\">\n                <a class=\"mainfeature-container\" href=\"#/photos/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">  style=\"cursor: pointer\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isUser", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </a>            \n\n                <span class='edit-object easing' style=\"position: absolute;margin: 10px; top:0;\">\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </span>\n\n            </div>\n\n\n\n            <div class=\"masonry-object_text\">\n                <div class=\"masonry-object_text-container\">\n                    <p>    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "photo_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  </p>\n\n                </div>\n\n                <div class=\"more_detail\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                    <div class=\"more_text-container\" >\n                        <div style=\"display:block;\">\n\n                            ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "object_description", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        </div>\n                    </div>\n\n                    <span role=\"button\" class=\"masonry_more-btn easing\"  ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("more_button")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "moreContent", "", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">more &nbsp;<i class=\"icon-angle-down\"></i></span>\n                    <span role=\"button\" class=\"masonry_more-btn easing\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("collape_button")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"display: none\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collapeContent", "", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">collapse &nbsp;<i class=\"icon-angle-up\"></i></span>\n\n                </div>\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n\n\n</div>\n\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                    <img class=\"this-is-the-object\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("object_image_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                         ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                         <img class=\"this-is-the-object\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("object_image_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                         ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n\n                    <div class=\"new-btn blue-btn hint--right hint--rounded\" data-hint=\"Edit object\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n                        <k class='icon-caret-down'></k>\n                    </div>\n                    <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_user_editing_mode", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n\n                    ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.title", "id", "profile", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>\n                        <li class='ite'  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.Profile", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <k class=\"icon-ok-sign\" style=\"font-size: 16px;  margin: 0px 5px;\"></k>Set as collection cover</li>\n                        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "user", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Remove</li>\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.User", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-camera\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Set as Cover</li>\n                        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n\n<div class=\"box col2 noStyle1\">\n    <div class=\"masonry-object\">\n        <div class=\"masonry-object_poster\">\n            <div class=\"profilepic-on-masonry\">\n                <a  href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                    <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic-on-masonry\" />\n                    <img  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                </a>\n            </div>\n            <div class=\"object_username\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\"  href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\" style=\"display:none;\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n\n            <div class=\"object-tags-box\">\n\n                <div class=\"object-tags\">\n                    <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n                    <div class=\"tags easing\">\n                        <div class=\"tags-new\">New</div>\n                        <div class=\"object-tpye hint--left hint--rounded\" data-hint=\"Video\">\n                            <i class=\"icon-film\"></i>\n                        </div>                      \n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#Auckland</div>                   \n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#Kitchen</div>                   \n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n        <div class=\"masonry-object_mainfeature\">\n            <div class=\"mainfeature-wrapper\">\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "video", "", options) : helperMissing.call(depth0, "linkTo", "video", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                <a class=\"mainfeature-container\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isUser", {hash:{},inverse:self.program(16, program16, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                </a>\n                <span class='edit-object easing' style=\"position: absolute;margin: 10px; top:0;\">\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </span>\n\n            </div>              \n\n\n            <div class=\"masonry-object_text\">\n                <div style=\"\">\n                    <p style=\"font-weight: bold;margin-bottom: 5px;\">  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "video", "", options) : helperMissing.call(depth0, "linkTo", "video", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" </p>\n                    <p class=\"masonry-object_text-container\" style=\"font-size: 11px; max-height: 50px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </div>\n\n            </div>\n\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  }
function program14(depth0,data) {
  
  
  data.buffer.push(" \n                <div class=\"hover-opacity radius-circle easing\" style=\"position: absolute;width: 70px;height: 70px;border: 2px solid #fff;line-height: 66px;text-align: center;color: #fff;font-size: 25px;margin: 90px auto;left: 0;right: 0;box-shadow: 0 0 10px #f3f3f3;\">\n                    <i class=\"icon-play\" style=\"margin-left: 5px;text-shadow: 0 0 10px #f3f3f3;\"></i>\n                </div>\n                ");
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                         ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "video", "", options) : helperMissing.call(depth0, "linkTo", "video", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push(" <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("object_image_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"this-is-the-object\"/>");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"new-btn blue-btn hint--right hint--rounded\" data-hint=\"Edit object\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n                        <k class='icon-caret-down'></k>\n                    </div>\n                    <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("        \n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_user_editing_mode", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n\n                    ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <li class=\"ite\" id=\"delete_video_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>\n                        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "user", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Remove</li>\n\n                        ");
  return buffer;
  }

function program24(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program26(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\">\n    <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "files", "", options) : helperMissing.call(depth0, "linkTo", "files", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "type", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n<div class=\"box col2 masonry-ad\" style=\"\">\n    <div  id=");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >  </div>    \n    </div>\n    ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <div class=\"box col2 noStyle1\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkingLoginStatus", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <div class=\"masonry-object\">\n            <div class=\"masonry-object_poster\">  \n                <div class=\"profilepic-on-masonry\">\n                    <a href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                        <img  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                    </a>\n                </div>\n                <div class=\"object_username\">  \n                    <a class=\"poster-name\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"cursor: pointer; width: auto;\">   ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "creator", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                    <div class=\"posttime-container\" style=\"display:none;\">\n                        <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                    </div>\n                </div>\n                <div class=\"object-tags-box\">\n\n                    <div class=\"object-tags\">\n                        <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n                            <div class=\"tags easing\">\n\n                                <div class=\"object-tpye hint--left hint--rounded\" data-hint=\"Article\">\n                                    <i class=\"icon-book\"></i>\n                                </div>                      \n                            </div>\n                        </div>\n\n                        <div class=\"object-tags \" style=\"display:none;\">\n                        <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n                            <div class=\"tags easing tagsappear\">\n                                <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "region", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n                            </div>\n                        </div>\n\n                        <div class=\"object-tags \">\n                            <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n                            <div class=\"tags easing tagsappear\"  style=\"overflow: hidden;\">\n                            <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "categories", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n            <div class=\"masonry-object_mainfeature\">             \n                <div class=\"mainfeature-wrapper\">\n                    <a class=\"mainfeature-container\" href=\"#/articles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" >\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isUser", {hash:{},inverse:self.program(34, program34, data),fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("              \n                    </a>          \n                    <span class='edit-object easing' style=\"position: absolute;margin: 10px; top:0;\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(36, program36, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </span>\n            </div>\n\n\n            <div class=\"masonry-object_text\">\n                <div class=\"masonry-object_text-container\">\n                    <a style=\"font-size: 16px; font-weight: bold;cursor: pointer\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n\n                    <p style=\"text-overflow: ellipsis\"; ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "object_description", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</p>\n                </div>\n\n                <div class=\"more_detail\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display:none;width:auto\">\n                    <h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n                    ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "object_description", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "article", "", options) : helperMissing.call(depth0, "linkTo", "article", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n\n\n    </div>\n\n</div>\n");
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                        <img class=\"this-is-the-object\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("object_image_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                             ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                             <img class=\"this-is-the-object\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("object_image_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                             ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n                        <div class=\"new-btn blue-btn hint--right hint--rounded\" data-hint=\"Edit object\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                             <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n                                 <k class='icon-caret-down'></k>\n                             </div>\n                             <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">                     \n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_user_editing_mode", {hash:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n\n                    ");
  return buffer;
  }
function program37(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.collection_id", "id", "user", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Remove</li>\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.User", "article", {hash:{},contexts:[depth0,depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-camera\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Set as Cover</li>\n                        ");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                <span role=\"button\" class=\"masonry_more-btn easing\"  ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("more_button")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "moreContent", "", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">more</span>\n                ");
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\">\n    <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ideabooks", "", options) : helperMissing.call(depth0, "linkTo", "ideabooks", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program43(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\">\n    <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "discussions", "", options) : helperMissing.call(depth0, "linkTo", "discussions", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getProfile", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getPhoto", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getVideo", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getFile", {hash:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getAd", {hash:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getArticle", {hash:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getIdeabook", {hash:{},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getDiscussion", {hash:{},inverse:self.noop,fn:self.program(43, program43, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isRenderDeleteItemTemplate", {hash:{},inverse:self.noop,fn:self.program(45, program45, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["itemFollow"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col1 box style-box t-style-box\" style=\"text-align: center;\">\n    <div style=\"position:relative;\">\n        <img src=\"../../../images/defaultcover/defaultcover6.jpg\"/>\n    </div>\n\n    <div class=\"user-profilepic-container\" style=\"position:absolute; top: 50px;margin: 0 auto;width: 100px;height: 100px;border: 2px solid #f3f3f3;left: 0;right: 0;\">\n        <a href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "follower_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n           <img style=\"width: 100%; height: 100%;cursor:pointer\" src=\"http://s3.hubsrv.com/trendsideas.com/profiles/beaver-kitchens-nz/profile_pic.jpg\" />\n        </a>\n    </div>\n\n    <div style=\"position:relative; height:35px; line-height: 35px;margin: 50px auto 5px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n        </span>\n    </div>\n\n    <div  type=\"button\" class=\"new-btn green-btn\" style=\"margin: auto;width: 80px;display: block;height: 22px;line-height: 20px;\">\n        <k class=\"icon-plus\" style=\"font-size:11px\">&nbsp;</k>Follow\n    </div>\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li><k class=\"icon-eye-open\">&nbsp;</k>2</li>\n            <li class=\"location_li\"><k class=\"icon-circle-blank\">&nbsp;</k>3</li>\n        </ul>\n    </div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["itemProfiles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n<div class=\"masonry-object_profile-cover\">\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "profile_hero_cover_url", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <span class='edit-object easing' style=\"position: absolute;margin: 10px; top:0;z-index: 2;\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </span>\n\n</div>\n\n\n<div style=\"position: relative; width: 100%; height: 70px; display: block; z-index: 1\"></div>\n\n\n<div class=\"masonry-object_profilepic\" style=\"cursor:pointer;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toProfilePage", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n     <a  href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" > <img class=\"easing\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  />   </a>\n\n</div>\n\n\n<br>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isFollowCurrentUser", {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"masonry-object_name-position\" style=\"margin-bottom: 5px;\"> \n    <a  href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"comment-username\" style=\"cursor:pointer; font-size:18px;\"");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("getProfile_id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toProfilePage", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </a>\n</div>\n\n<div style=\"width:100%; text-align:center; margin-bottom: 10px;\">\n    <ul class=\"itemprofile\">\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Collections\">\n            <div><k class=\"icon-eye-open\"> &nbsp");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "collections.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </k></div>\n        </li>\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Partners\">\n            <div><k class=\"icon-group\">&nbsp ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, "profile_partner_ids", options) : helperMissing.call(depth0, "length", "profile_partner_ids", options))));
  data.buffer.push("</k></div>  \n        </li>\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Videos\">\n            <div><k class=\"icon-film\">&nbsp ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.videolength),stack1 ? stack1.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "videolength", "profile_about_us", options))));
  data.buffer.push("</k></div>  \n        </li>\n        <li class=\"location_li hint-bottom hint-rounded\" data-hint=\"Ebooks\">\n            <div><k class=\"icon-book\">&nbsp ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ebooklength),stack1 ? stack1.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "ebooklength", "profile_about_us", options))));
  data.buffer.push("</k></div>  \n        </li>\n\n    </ul>\n\n</div>\n\n<!--TAGS-->\n\n<div class=\"object-tags-box\">\n\n    <div class=\"object-tags\">\n        <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n        <div class=\"tags easing\">\n            <div class=\"tags-new\">New </div>\n            <div class=\"object-tpye hint--top hint--rounded\" data-hint=\"Client profile\">\n                <i class=\"icon-group\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"object-tags \">\n        <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n        <div class=\"tags easing tagsappear\">\n            <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_regoin", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n        </div>\n    </div>\n\n    <div class=\"object-tags \">\n        <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n        <div class=\"tags easing tagsappear\">\n            <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_category", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n        </div>\n    </div>\n\n</div>\n\n<!--END TAGS-->\n\n\n<div class=\"masonry-object_mainfeature\" style=\"\">\n\n    <div class=\"masonry-object_text\">\n\n\n        <div class=\"more_detail\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">          \n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_cover_text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n        </div>\n\n    </div>\n\n</div>\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div class=\"masonry-object_cover-wapper\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_hero_cover_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 100%\";/>\n    </div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div class=\"masonry-object_cover-wapper\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_hero_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 100%;\"/>\n    </div>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"new-btn blue-btn hint--right hint--rounded\" style=\"margin: 4px 0px;\" data-hint=\"Edit object\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             <k class=\"icon-cog\" style=\"font-size: 16px; margin: 0px 5px\"></k>\n            <k class='icon-caret-down'></k>\n        </div>\n\n        <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>       \n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n<div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 5px auto 15px;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n\n");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n<div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 5px auto 15px;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n\n");
  return buffer;
  }

  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.profile", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["landingPage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("\n\n\n\n<div style=\"width:100%;height:100%;z-index: 1000;position: fixed;\">\n    <img src=\"../../../images/landingbg.jpg\" style=\"width:100%; position:fixed;\"/>\n\n    <div style=\"width: 87%;margin: 40px auto;display: block;\">\n        <img class=\"logonew\" style=\"position: relative; height: 30px;display: inline-block;vertical-align: top;margin: 8px;\" src=\"../../../images/landing-trends.png\">\n        <div style=\"position:relative; float:right; color:white; font-size:15px;font-weight: bold;\">\n            <div style=\"margin-right:10px;display: inline-block;background-color: #777;padding: 0 20px;text-align: center;height: 45px;line-height: 45px;letter-spacing: 1px;\">SIGN UP</div>\n            <span style=\"letter-spacing: 1px; margin: 0 0 0 10px;\">LOGIN</span>\n        </div>\n    </div>\n    \n    <div style=\"position: absolute; vertical-align: middle; color: #fff; width: 40%; text-align: center;margin: auto;left: 0;right: 0;top: 50px;font-size: 14px; font-family: 'Montserrat', sans-serif; letter-spacing: 2px;opacity: .9;\">\n        <span>2,100,000 IDEAS</span>\n        <span>&nbsp | &nbsp</span>\n        <span>1,200,000 PRODUCTS</span>\n    </div>\n\n    <div style=\"position:absolute;width: 40%;text-align: center;top: 30%;margin: auto;display: block;left: 0;right: 0;\">\n        <span style=\"font-family: 'Chronicle SSm A', 'Chronicle SSm B', Georgia, serif;font-style: italic; font-size: 30px; color: #222;display: block;line-height: 1em;margin: 0 0 15px 0;opacity: .7;\">Collect, collaberate and connect</span>\n        <span style=\"font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: bolder;color: #222;display: block;line-height: 30px;letter-spacing: 5px; opacity:.7;\">YOUR</span>\n        <span style=\"font-family: 'Montserrat', sans-serif; font-size: 130px; font-weight:bold;color: #222;display: block;height: 130px;line-height: 130px;letter-spacing: 35px;padding-left: 30px;\"> IDEAS</span>\n\n\n        <div style=\"background-color: #666; border-radius:50px; width: 200px; height: 45px;display: block;line-height: 45px;color: white;font-size: 15px;font-weight: bold;letter-spacing: 2px;margin: 10px auto;\"> START TODAY</div>\n        <span style=\"font-family: 'Montserrat', sans-serif; font-size: 14px;color: #222;margin: 15px auto;opacity: .7;display: block;\">\n            <k class=\"icon-info-sign\" style=\"margin:5px;font-size: 20px;vertical-align: middle;\"></k>\n            Explore more\n        </span>\n    </div>\n\n<div style=\"width:87%; position: absolute; margin:auto;bottom: 40px;left: 0;right: 0;\">\n<div style=\"position:relative;display: inline-block;background-color: rgba(255,255,255,.2);\">\n<div style=\"border: 2px solid #333;border-radius: 50%;width: 40px;height: 40px;text-align: center;line-height: 38px;padding: 0px 13px;position: absolute;top: 30px;left: 66px;box-shadow: 0 0 25px #999;\"><k class=\"icon-play\"></k></div>\n<img src=\"http://i1.ytimg.com/vi/TXk-8NyS2fc/mqdefault.jpg\" style=\"display:inline-block;height: 100px;border: 3px solid rgba(30,30,30,.5);\"/>\n<div style=\"display:inline-block;font-size: 14px;font-family: 'Chronicle SSm A', 'Chronicle SSm B', Georgia, serif;font-style: italic; opacity: .9;width: 170px;height: 100px;vertical-align: top;padding: 30px 0;margin: 0 0 0 10px;\">Introduction of the </br>New Trendsideas Platform</div>\n</div>\n</div>\n\n</div>");
  
});

Ember.TEMPLATES["loadingSpinner"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"blur_white\"></div>\n\n\n<div class=\"loading\" >\n    <div id=\"blurringTextG\">\n        <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n            C</div>\n        <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n            t</div>\n        <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n            n</div>\n        <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n            g</div>\n        <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n            y</div>\n        <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n            o</div>\n        <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n            u</div>\n        <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n            d</div>\n        <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n            p</div>\n        <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n            c</div>\n        <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n            .</div>\n    </div>\n</div>\n\n");
  
});

Ember.TEMPLATES["loginModal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div  id=\"loginModal\" class=\"blur_black\" style=\"\" onClick=\"closePane();\"></div>\n\n\n<div id=\"profiles-main-container\" class=\"Login-box\" style=\"background-color: transparent;position: fixed; top: 30%; z-index: 10; margin: auto; left: 0px; right: 0px; width: 300px;height: 565px;border: 0;text-align: center;\">   \n\n    <div id=\"click-register-social\" class=\"register-with easing social-active\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n        <i class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Register with social account</a>\n    </div>\n\n    <div id=\"social-link\" class=\"social-links-container\" style=\"display: block;\">\n\n        <div onclick=\"Facebook(650, 400);\"class=\"social-login-iconbox\">\n            <i  class=\"icon-facebook\"></i>\n        </div>\n\n        <div onclick=\"Twitter(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-twitter\"></i>\n        </div>\n\n        <div onclick=\"Google(650, 400);\" class=\"social-login-iconbox\" style=\"\">\n            <i  class=\"icon-google-plus\"></i>\n        </div>\n\n        <div onclick=\"LinkedIn(650, 400);\" class=\"social-login-iconbox\">\n            <i  class=\"icon-linkedin\"></i>\n        </div>\n\n        <div onclick=\"Sina(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-weibo\"></i>\n        </div>\n\n    </div>\n\n\n    <!--This is the email register section-->\n    <div>\n        <div id=\"click-register\" class=\"register-with easing register-clicker\">\n            <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Register with Email</a>\n        </div>\n\n        <div   id=\"register-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n            <div style=\"padding: 0 8px;position: relative;\">\n\n                <div style=\"border-bottom: 1px solid #e3e3e3; border-top:1px solid #e3e3e3;\">\n                    <div id=\"first_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div id=\"last_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div  id=\"email\" class=\"login-textfield\" style=\"\">\n                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'placeholder': ("Your Email")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n\n                <div id=\"password\" class=\"login-textfield\"  style=\"\">\n                    ");
  hashContexts = {'type': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'type': ("password"),
    'valueBinding': ("password"),
    'placeholder': ("Password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n\n            <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signUp", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" > Register</div>\n        </div>\n\n\n        <div id=\"register-with-email-step-2\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n            <div style=\"padding: 0 8px;position: relative;\">\n\n                <div  class=\"login-textfield\" style=\"border-top:1px solid #e3e3e3;\">\n                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("region"),
    'placeholder': ("Region")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n\n                <div style=\"border-bottom: 1px solid #e3e3e3;\">\n                    <div class=\"login-select easing\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setmale", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         Male\n                </div>\n\n                <div class=\"login-select easing\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setfemale", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     Female\n            </div>\n        </div>\n\n        <div class=\"login-textfield\"  style=\"margin: 0;width: 100%;height: 45px;line-height: 45px;border-bottom: 1px solid #e3e3e3;\">\n            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("age"),
    'placeholder': ("How old are you?")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    </div>\n    <div class=\"back-btn easing\" style=\"\" >Back</div>\n    <div class=\"register-btn easing register-btn-small\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "done", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Done</div>\n\n</div>\n<div id=\"missing-fields\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>Please fill the mandatory fields.</p>\n</div>\n<div id=\"invalid-user-name-register\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>The email address  you have entered is invalid.</p>\n</div>\n<div id=\"invalid-password\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>Your password length should be between 6-40 characters long.</p>\n</div>\n<div id=\"email-in-use\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>The email address you have entered is already in use.</p>\n</div>\n<div id=\"email-used-by-social\" class=\"black-tool-tip\" style=\"display:none;\">\n    <p>The email address you have entered is already in use by a social account.</p>\n</div>\n\n</div>\n<!--End of email register section-->\n\n<div id=\"user-login-pane\"  style=\"display:none;border-radius: 5px 5px 0 0;\">\n\n    <div id=\"social-login\" class=\"register-with easing\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n        <i id=\"social-login\" class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Login with social account</a>\n    </div>\n    <div id=\"social-login-container\" class=\"social-links-container\" style=\"display: none;\">\n\n        <div onclick=\"Facebook(650, 400);\" class=\"social-login-iconbox\">\n            <i  class=\"icon-facebook\"></i>\n        </div>\n\n        <div onclick=\"Twitter(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-twitter\"></i>\n        </div>\n\n        <div onclick=\"Google(650, 400);\" class=\"social-login-iconbox\" >\n            <i  class=\"icon-google-plus\"></i>\n        </div>\n\n        <div onclick=\"LinkedIn(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-linkedin\"></i>\n        </div>\n\n        <div onclick=\"Sina(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-weibo\"></i>\n        </div>\n\n    </div>\n\n\n    <div id=\"click-login\" class=\"register-with easing active-tab\" style=\"border-bottom: 1px solid #e3e3e3;\">\n        <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Login with Email</a>\n    </div>\n\n    <div id=\"login-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;\">\n        <div style=\"padding: 0 8px;position: relative;\">\n\n\n            <div id=\"loginUsername\" class=\"login-textfield\" style=\"\">\n                ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'valueBinding': ("loginUsername"),
    'placeholder': ("Your Email")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n\n            <div id=\"loginPassword\" class=\"login-textfield\"  style=\"\">\n                ");
  hashContexts = {'type': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'type': ("password"),
    'valueBinding': ("loginPassword"),
    'placeholder': ("Password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                <div class=\"hint--right hint--rounded\" data-hint=\"forgot password?\" style=\"cursor:pointer;float: right;margin-top: -40px;height: 30px;color:#888;\">\n                    <i class=\"icon-question-sign\">&nbsp</i>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Login</div>\n    </div>\n    <div id=\"user-forgot-password-pane\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n        <div  id=\"resetPasswordEmail\"class=\"login-textfield\" style=\"padding: 0 10px\">\n            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("resetPasswordEmail"),
    'placeholder': ("Your Email")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"back-btn easing\" style=\"\" >Back</div>\n        <div id='reset-btn' class=\"register-btn easing register-btn-small\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "emailSend", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Reset password</div>\n    </div>\n\n    <div class=\"black-tool-tip\"id=\"forgot-message-container\" style=\"display:none;\">\n        <p>  We've sent you an email with instructions to reset your password.</p><br/>\n        <p>Please make sure it didn't wind up in your Junk Mail. If you aren't receiving our password reset emails, see our\n            <a class=\"white-text-hover easing\" href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\" target=\"blank\" style=\"text-decoration: underline\"><b>help documents.</b></a>\n        </p>\n    </div>\n\n\n    <div id=\"invalid-user-name\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address  you have entered is invalid.</p>\n    </div>\n    <div id=\"invalid-account-type\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to login with a social network account, please use the \"Login with social account\" link above.</p>\n    </div>\n    <div id=\"incorrect-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Incorrect password.</p>\n    </div>\n    <div id=\"invalid-account-type-reset\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to reset your password with a social network account, please use the \"Login with social account\" link above.</p>\n    </div>\n    <div id=\"new-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>  We've sent you an email with instructions to reset your password.</p><br/>\n        <p>Please make sure it didn't wind up in your Junk Mail. If you aren't receiving our password reset emails, see our\n            <a class=\"white-text-hover easing\" href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\" target=\"blank\" style=\"text-decoration: underline\"><b>help documents.</b></a>\n        </p>\n    </div>\n\n\n\n</div>\n\n<a href=\"http://about.trendsideas.com\" target=\"blank\">\n    <div class=\"learnmore-btn easing\" style=\"\">Learn more</div>\n</a>\n\n<div style=\"margin: 15px 0;cursor:pointer;color: #fff; font-size: 12px;\" onClick=\"loginPane();\" id=\"login-btn\" class=\"hover-opacity easing\">Already had an acount? Click here to Login!</div>\n\n</div>\n\n<script>\n\n\n\n\n            $('.Login-box #login-btn').text('Sign up for a new account!');\n            $('.Login-box .black-tool-tip').css('display', 'none');\n            $('.Login-box #click-register-social').css('display', 'none');\n            $('.Login-box #click-register').css('display', 'none');\n            $('.Login-box #social-link').css('display', 'none');\n            $('.Login-box #login-with-email-drop-down').css('display', 'block');\n            $('.Login-box #social-login-container').css('display', 'none');\n            $('.Login-box #click-login').addClass('active-tab');\n            $('.Login-box #social-login').removeClass('social-active');\n            $('.Login-box #user-forgot-password-pane').css('display', 'none');\n            $('.Login-box #forgot-message-container').css('display', 'none');\n            $('.Login-box #invalid-username').css('display', 'none');\n\n            $('.Login-box #register-with-email-drop-down').css('display', 'none');\n            $('.Login-box #register-with-email-step-2').css('display', 'none');\n            $('.Login-box #user-login-pane').css('display', 'block');\n\n            var loginState = true;\n            $(\".Login-box #social-login\").click(function() {\n\n                $('.Login-box #social-login').removeClass('social-active');\n                $('.Login-box #click-login').removeClass('active-tab');\n                if ($('.Login-box #social-login-container').css('display') === 'block') {\n                    $('.Login-box #social-login-container').animate({height: 'toggle'});\n                }\n                /* LOGIN TAB:  hiding social login */\n\n                if ($('.Login-box #social-login-container').css('display') === 'none') {\n                    $('.Login-box #social-login-container').animate({height: 'toggle'});\n                    $('.Login-box #social-login').addClass('social-active');\n                    if ($('.Login-box #login-with-email-drop-down').css('display') === 'block') {\n                        $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});\n                    }\n                    if ($('.Login-box #forgot-message-container').css('display') === 'block') {\n                        $('.Login-box #forgot-message-container').animate({opacity: 'toggle'});\n                    }\n                    if ($('.Login-box #invalid-username').css('display') === 'block') {\n                        $('.Login-box #invalid-username').animate({opacity: 'toggle'});\n                    }\n                    if ($('.Login-box #click-login').css('display') === 'none') {\n                        $('.Login-box #click-login').animate({opacity: 'toggle'});\n                    }\n                    if ($('.Login-box #user-forgot-password-pane').css('display') === 'block') {\n                        $('.Login-box #user-forgot-password-pane').animate({height: 'toggle'});\n                    }\n\n                    /* LOGIN TAB:  showing social login */\n\n                }\n            });\n            $(\".Login-box #click-login\").click(function() {\n                if ($('.Login-box #login-with-email-drop-down').css('display') === 'block' && $('#click-login').hasClass('active-tab')) {\n                    $('.Login-box #click-login').removeClass('active-tab');\n\n                    $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});\n\n                    if ($('.Login-box #social-login-container').css('display') === 'block') {\n                        $('.Login-box #social-login-container').animate({height: 'toggle'});\n                    }\n                }\n                /* LOGIN TAB: closing login with email */\n\n\n                if ($('.Login-box #login-with-email-drop-down').css('display') === 'none') {\n                    $('.Login-box #social-login').removeClass('social-active');\n                    $('.Login-box #click-login').addClass('active-tab');\n                    $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});\n\n                    if ($('.Login-box #social-login-container').css('display') === 'block') {\n                        $('.Login-box #social-login-container').animate({height: 'toggle'});\n                    }\n                } /* LOGIN TAB: clicking login*/\n            });\n            $('.Login-box #loginPassword > div').click(function() {\n                if ($('.Login-box #login-with-email-drop-down').css('display')) {\n                    $('.Login-box #click-login').removeClass('active-tab');\n\n                    $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});\n                    $('.Login-box #user-forgot-password-pane').animate({height: 'toggle'});\n\n                    if ($('.Login-box #social-login-container').css('display') === 'block') {\n                        $('.Login-box #social-login-container').animate({height: 'toggle'});\n\n                    }\n                    if ($('.Login-box #forgot-message-container').css('display') === 'block') {\n                        $('.Login-box #forgot-message-container').animate({opacity: 'toggle'});\n                    }\n                    if ($('.Login-box #click-login').css('display') === 'block') {\n                        $('.Login-box #click-login').animate({height: 'toggle'});\n\n                    }\n                }\n            });\n            /*  LOGIN TAB: show forget password pane */\n\n            $('.Login-box #user-forgot-password-pane .back-btn').click(function() {\n                $('.Login-box #user-forgot-password-pane').animate({height: 'toggle'});\n                $('.Login-box #login-with-email-drop-down').animate({height: 'toggle'});\n\n                if ($('.Login-box #social-login-container').css('display') === 'block') {\n                    $('.Login-box #social-login-container').animate({height: 'toggle'});\n\n                }\n\n\n            });\n            /* Back to login with email from forget password pane */\n\n\n            $('.Login-box #reset-btn').click(function() {\n\n            });\n            /* forgot password function showing thank you message */\n\n\n            $('.Login-box #user-forgot-password-pane .back-btn').click(function() {\n                if ($('.Login-box #forgot-message-container').css('display') === 'block') {\n                    $('.Login-box #forgot-message-container').animate({opacity: 'toggle'});\n                }\n            });\n            /* hiding thank you message when the user clicks the back btn */\n\n\n\n\n\n\n            $(\".Login-box #click-register-social\").click(function() {\n\n                $('.Login-box #click-register-social').removeClass('social-active');\n                $('.Login-box #click-register').removeClass('active-tab');\n                if ($('.Login-box #social-link').css('display') === 'block') {\n                    $('.Login-box #social-link').animate({height: 'toggle'});\n                    if ($('.Login-box #register-with-email-drop-down').css('display') === 'block') {\n                        $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});\n                    }\n                    if ($('.Login-box #register-with-email-step-2').css('display') === 'block') {\n                        $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});\n                    }\n                }\n                /* hiding social login */\n\n                if ($('.Login-box #social-link').css('display') === 'none') {\n                    $('.Login-box #social-link').animate({height: 'toggle'});\n                    $('.Login-box #click-register-social').addClass('social-active');\n                    if ($('.Login-box #register-with-email-drop-down').css('display') === 'block') {\n                        $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});\n                    }\n                    if ($('.Login-box #register-with-email-step-2').css('display') === 'block') {\n                        $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});\n                    }\n                }\n                /*  REGISTER TAB: showing social login section*/\n\n            });\n\n\n\n            $('.Login-box #register-with-email-step-2 .back-btn').click(function() {\n                $('.Login-box #register-with-email-step-2').removeClass('active-step');\n                $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});\n                $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});\n                checkSocial();\n            });\n            /* going back to step 1 function*/\n\n\n            $(\".Login-box .register-clicker\").click(function() {\n\n                if ($('.Login-box #register-with-email-step-2').hasClass('active-step')) {\n                    //alert('closing step2');\n\n                    $('.Login-box #social-link').animate({height: 'toggle'});\n                    $('.Login-box #register-with-email-step-2').animate({height: 'toggle'});\n                    if ($('.Login-box #click-register').hasClass('active-tab')) {\n                        $('.Login-box #click-register').removeClass('active-tab');\n                        /* closing step */\n                    }\n\n                    else {\n                        $('.Login-box #click-register').addClass('active-tab');\n                        /* opening step */\n                    }\n\n                }\n                /* closing/opening register section while on step 2 function */\n\n                if ($('.Login-box #register-with-email-drop-down').css('display') === 'block' && $('#click-register').hasClass('active-tab')) {\n                    //alert('closing step1');\n                    $('.Login-box #click-register').removeClass('active-tab');\n                    $('.Login-box #social-link').animate({height: 'toggle'});\n                    $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});\n                    $('.Login-box #click-register-social').addClass('social-active');\n                }\n                /* closing register section while on step 1 function */\n\n\n                if ($('.Login-box #register-with-email-drop-down').css('display') === 'none' && $('#register-with-email-step-2').hasClass('')) {\n                    //alert('opening step 1');\n                    $('.Login-box #click-register-social').removeClass('social-active');\n                    $('.Login-box #click-register').addClass('active-tab');\n                    $('.Login-box #register-with-email-drop-down').animate({height: 'toggle'});\n                    checkSocial();\n                }\n                /* clicking register step 1 function*/\n\n            });\n\n\n\n\n\n\n            function checkSocial() {\n                if ($('.Login-box #social-link').css('display') === 'block') {\n                    $('.Login-box #social-link').animate({height: 'toggle'});\n                }\n                else {\n                }\n            }\n            /* close social login checker function */\n\n\n            $('.Login-box .login-select').click(function() {\n                $('.Login-box .login-select').removeClass('login-selected');\n                $(this).addClass('login-selected');\n            });\n            /* select gender function */\n\n\n            function loginPane() {\n\n                if (loginState === false) {\n                    $('.Login-box #login-btn').text('Sign up for a new account!');\n                    $('.Login-box .black-tool-tip').css('display', 'none');\n                    $('.Login-box #click-register-social').css('display', 'none');\n                    $('.Login-box #click-register').css('display', 'none');\n                    $('.Login-box #social-link').css('display', 'none');\n                    $('.Login-box #login-with-email-drop-down').css('display', 'block');\n                    $('.Login-box #social-login-container').css('display', 'none');\n                    $('.Login-box #click-login').addClass('active-tab');\n                    $('.Login-box #social-login').removeClass('social-active');\n                    $('.Login-box #user-forgot-password-pane').css('display', 'none');\n                    $('.Login-box #forgot-message-container').css('display', 'none');\n                    $('.Login-box #invalid-username').css('display', 'none');\n\n                    $('.Login-box #register-with-email-drop-down').css('display', 'none');\n                    $('.Login-box #register-with-email-step-2').css('display', 'none');\n                    $('.Login-box #user-login-pane').css('display', 'block');\n                    loginState = true;\n                }\n                else {\n\n                    $('.Login-box #login-btn').text('Already had an acount? Click here to Login!');\n                    $('.Login-box .black-tool-tip').css('display', 'none');\n                    $('.Login-box #click-register-social').css('display', 'block');\n                    $('.Login-box #social-link').css('display', 'block');\n                    $('.Login-box #click-register').css('display', 'block');\n                    $('.Login-box #click-register-social').addClass('social-active');\n                    $('.Login-box #click-register').removeClass('active-tab');\n                    $('.Login-box #register-with-email-step-2').removeClass('active-step');\n                    $('.Login-box #user-login-pane').css('display', 'none');\n\n                    loginState = false;\n                }\n            }\n\n\n\n\n\n\n\n            function DropDown(el) {\n                this.dd = el;\n                this.placeholder = this.dd.children('span');\n                this.opts = this.dd.find('ul.dropdown > li');\n                this.val = '';\n                this.index = -1;\n                this.initEvents();\n            }\n            DropDown.prototype = {\n                initEvents: function() {\n                    var obj = this;\n\n                    obj.dd.on('click', function(event) {\n                        $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                        return false;\n                    });\n                    obj.opts.on('click', function() {\n                        var opt = $(this);\n                        obj.val = opt.text();\n                        obj.index = opt.index();\n                        obj.placeholder.text(obj.val);\n                    });\n                },\n                getValue: function() {\n                    return this.val;\n                },\n                getIndex: function() {\n                    return this.index;\n                }\n            };\n\n            $(function() {\n\n                var dd3 = new DropDown($('.dropdown_test_3'));\n                $(document).click(function() {\n                    $('.wrapper-dropdown-3').removeClass('active');\n                });\n\n            });\n\n            function setDomain() {\n\n                var api_url = document.domain;\n                var api_domain_start_pos = api_url.indexOf('.');\n                var api_url = api_url.slice(api_domain_start_pos);\n\n                return api_url;\n            }\n\n\n            function Facebook(popupWidth, popupHeight) {\n\n                var left = (screen.width / 2) - (popupWidth / 2);\n                var top = (screen.height / 2) - (popupHeight / 2);\n                var address = document.URL;\n                //   HubStar.set('currentState',address);\n                // console.log(HubStar.get('currentState'));\n                //   console.log(address);\n                var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Facebook#_=_\";\n                newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                if (window.focus) {\n                    newwindow.focus();\n                }\n\n\n\n            }\n            function Yahoo(popupWidth, popupHeight) {\n                var left = (screen.width / 2) - (popupWidth / 2);\n                var top = (screen.height / 2) - (popupHeight / 2);\n                var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Yahoo\";\n                newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                if (window.focus) {\n                    newwindow.focus();\n                }\n            }\n            function QQ(popupWidth, popupHeight) {\n                var left = (screen.width / 2) - (popupWidth / 2);\n                var top = (screen.height / 2) - (popupHeight / 2);\n                var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=QQ\";\n                newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                if (window.focus) {\n                    newwindow.focus();\n                }\n            }\n            function Twitter(popupWidth, popupHeight) {\n                var left = (screen.width / 2) - (popupWidth / 2);\n                var top = (screen.height / 2) - (popupHeight / 2);\n                var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Twitter\";\n                newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                if (window.focus) {\n                    newwindow.focus();\n                }\n            }\n            function Sina(popupWidth, popupHeight) {\n                var left = (screen.width / 2) - (popupWidth / 2);\n                var top = (screen.height / 2) - (popupHeight / 2);\n                var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Sina\";\n                newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                if (window.focus) {\n                    newwindow.focus();\n                }\n            }\n            function LinkedIn(popupWidth, popupHeight) {\n                var left = (screen.width / 2) - (popupWidth / 2);\n                var top = (screen.height / 2) - (popupHeight / 2);\n                var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=LinkedIn\";\n                newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                if (window.focus) {\n                    newwindow.focus();\n                }\n            }\n            function Google(popupWidth, popupHeight) {\n                var left = (screen.width / 2) - (popupWidth / 2);\n                var top = (screen.height / 2) - (popupHeight / 2);\n                var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Google\";\n                newwindow = window.open(api_url, 'name', 'height=' + popupHeight * 1.5 + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                if (window.focus) {\n                    newwindow.focus();\n                }\n            }\n            \n              function closePane() {\n                  \n HubStar.set('checkLoginStatus', false);\n                }\n\n            \n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["masonry"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ItemView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        <script>\n            $(function() {\n                var $container = $('#masonry_container');\n                window.setTimeout(function() {\n                    $container.masonry();\n                    $container.masonry('reload');\n                }, 1000);\n            });\n        </script>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"masonry_wrapper\" style=\"min-height:300px;\">\n    <div id=\"masonry_container\" class=\" centered clearfix noStyle1\">\n        <div class=\"box col2 noStyle1\">\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "status", options) : helperMissing.call(depth0, "render", "status", options))));
  data.buffer.push("\n        </div>\n\n     \n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div> <!-- #container -->\n</div><!-- #wrapper -->\n\n<div style=\"width:100%;float:left;clear:both;\">\n    <div class=\"new-btn\" style=' width: 200px;margin: 60px auto;display: block; box-shadow: 0 0 10px #fff;'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollDownAction", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-long-arrow-down\" style=\"margin-right: 8px\"></k>Show more results!\n    </div>\n</div>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["masonryCollection"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        <div style=\"height: 35px; width: 240px;border-radius: 25px;border: 1px solid #ddd;float: left;margin: 7px 5px;\">\n            <div style=\"width: 200px;float: left;height: 30px;margin: 2px 0 2px 10px;\">\n                ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'placeholder': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'placeholder': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("partnerSearchString"),
    'id': ("search_business"),
    'placeholder': ("Search for Partners"),
    'class': ("no-effect")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"hover-opacity\" style=\"line-height: 34px;   float: right; font-size: 13px;  margin: 0 15px 0 0;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "partnerSearch", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-search\"></i>\n            </div>\n        </div>\n        <div style=\"float: left;margin: 3px;\" class=\"hover-opacity\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "partnerSearchReset", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-repeat\"></i></div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <ul class=\"user-stats\" id=\"user-stats\">\n            <li id=\"defualt\" ><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Collections <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profileCollectionStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n            <li id=\"video\" ><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectVideo", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Videos <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span></a></li>\n            <li id=\"network\"\"><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPartner", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Network <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profilePartnerStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n            <li id=\"follow\"><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollower", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Followers <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profileFollowerStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>  \n            <li id=\"reviewList\"><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectReview", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Reviews <span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profileReviewStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li> \n\n        </ul>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <ul class=\"user-stats\" id=\"user-stats\">\n            <li id=\"defualt\" ><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Collections<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.userCollectionStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n            <li id =\"ufollowing\"><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollowing", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Following<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.userFollowingStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n            <li id =\"ufollower\"><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollower", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Followers<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp; • &nbsp;</span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.userFollowerStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n             ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUserSelf", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <li id =\"post\"><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPost", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Posts<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp;</span></a></li>\n            \n\n        </ul>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <li id =\"message\"><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectMessage", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Messages<span style=\"font-size: 12px;display: inline-block;vertical-align: top;\">&nbsp;</span></a></li>\n\n           ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.CollectionsView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "profileVideos", options) : helperMissing.call(depth0, "render", "profileVideos", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "profilePartners", options) : helperMissing.call(depth0, "render", "profilePartners", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "userFollowers", options) : helperMissing.call(depth0, "render", "userFollowers", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n       ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "reviewList", options) : helperMissing.call(depth0, "render", "reviewList", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "userFollowings", options) : helperMissing.call(depth0, "render", "userFollowings", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "messageCenter", options) : helperMissing.call(depth0, "render", "messageCenter", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "userMessage", options) : helperMissing.call(depth0, "render", "userMessage", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div style=\"width: 100%; margin: 100px auto; left: 0;right: 0;position: relative;display: block;\">\n\n\n    <div class=\"style-box t-style-box\" style=\"width: 87%; min-width: 796px; height: 50px; background: white;margin: -70px auto;left: 0;right: 0;position: relative;display: block;\">\n\n        <div style=\"margin: 3px 20px 3px 40px; font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);float: left;\" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profileSelectionStatus", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "partnerTag", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.partnerPage", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.userTage", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n    </div>\n\n    <div id=\"masonry_user_container\" class=\"centered clearfix masonry_push_down\" >\n        <!-- masonry from here -->\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "collectionTag", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "videoTag", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "partnerTag", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "followerProfileTag", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "reviewTag", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "followerTag", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "followingTag", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "messageTag", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "postTag", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["masonryCollectionItems"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.uploadStuff", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n\n        <div class=\"box style-box t-style-box col2\" id=\"addNew\" >\n\n            <div id=\"tagetUplaod\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newUpload", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  >\n                 <div class=\"add-new-object-hoverarea easing\">\n                    <i class=\"icon-upload\" style=\"font-size: 80px;\"></i>\n                </div>\n                <div class=\"masonry-object t-style-box\">\n                    <div class=\"add-new-object-content\">\n                        <i class=\"icon-group\"></i>\n                        <i class=\"icon-book\"></i>\n                        <i class=\"icon-picture\"></i>\n                        <i class=\"icon-film\"></i>\n                    </div>\n                </div>\n            </div>\n\n            <div id=\"ownerUpload\"  class=\"col4\" style=\"display:none\">             \n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.uploadOrsubmit", {hash:{},inverse:self.program(8, program8, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.PhotoCreateView", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n                <div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n                    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n                        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n                        <span style=\"font-weight: bold;display: block;font-size: 25px;\">\n                            Drag & Drop Your Photos Here\n                        </span>\n                        <span style=\"font-size: 17px;display: block;line-height: 25px;width: 380px;margin: auto;\">Please upload no more than 20 photos at a time, and maximum size of 20MB per photo.</span> \n                    </div>\n\n                    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n                        Choose \n                        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div> \n                    </div> \n\n                    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "uploadImageContent", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n                    <div class=\"controlbtn\" style=\"left: 34%;\">\n                        <span class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "back", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Close</span>\n                        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Upload</span> \n                    </div>\n                </div>\n\n                ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n\n\n\n                        <div style=\"position: relative;margin:3px; display: inline-block; vertical-align: top; min-width: 150px;text-align: center;\">\n                            <div> \n                                <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_image_original_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  alt=\"Logo\" style=\"max-width: 140px; max-height: 150px;\">\n                                <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("photo_source_id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display: none;\">\n                                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                                </div>\n                            </div>\n                            <div style=\"margin: 2px 0 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "photo_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                        </div>\n                        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "photoCreateInfoSetting", options) : helperMissing.call(depth0, "render", "photoCreateInfoSetting", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ItemView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 10);\n    });\n</script>\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n\n<div style=\"width: 100%; margin: 100px auto; left: 0;right: 0;position: relative;display: block;\">\n    <!-- masonry from here -->\n\n    <div class=\"style-box t-style-box\" style=\"width: 87%; min-width: 796px; height: 50px; background: white;margin: -70px auto;left: 0;right: 0;position: relative;display: block;\">\n        <div style=\"margin: 4px 20px 4px 40px; font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);float: left;\" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"hint--right hint--rounded\" data-hint=\"Go back\" style=\"margin: 4px 0; display: inline-block;\">\n            <i class=\"icon-level-up edit-btn\" style=\"color: #555; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-size: 20px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n        </div>\n\n\n    </div>\n\n    <div id=\"masonry_photo_collection_container\"  class=\"centered clearfix masonry_push_down\" >\n\n        <!--SECTION CONTROL BAR-->\n\n\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.content", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n    </div>\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 10);\n    });\n</script>\n</div>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["message"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div style=\"padding: 10px 0 10px 70px;position: relative;  background-color: #f3f3f3;  border-bottom: 1px solid #ddd;\">\n        <div style=\"float: right;color: #888;margin: 18px 20px;font-size: 13px; position: relative;z-index: 1\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model.isUserself", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n        <div class=\"radius-circle\" style=\"position: absolute; top: 15px;margin: 0 0 0 -55px;border: 1px solid #f3f3f3;width: 45px;height: 45px;overflow: hidden\">\n            <img class=\"profilepic_comment\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"width: 45px; height: 45px; \" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n        </div>\n\n        <div class=\"comment-namentime\" style=\"margin: 8px 0; z-index: 0\">\n            <div class=\"namentime_position\">\n                <a class=\"comment-username\"   href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.user_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "model.time_stamp", options) : helperMissing.call(depth0, "date", "model.time_stamp", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"comment-content\" style=\"font-size: 12px;margin: 10px 20px;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.isUrl", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.replyEdit", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n    <div id=\"messageData_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  style=\"display: none\">\n        <div id=\"messageScrollBar_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "model.replyMessageCollection", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("     \n        </div>\n    </div>\n\n\n    <div class=\"hover-opacity easing\" style=\"height: 20px; width: 100%; background-color: #f3f3f3;text-align: center;color: #555; border-top: 1px solid #ddd\">  \n        <div id=\"showMoreComment_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"display: inline-block; cursor: pointer\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeMore", "model.message_id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <span style=\"font-size: 11px;font-weight: bold\">view comment &nbsp; ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.replyCount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n            <i class=\"icon-caret-down show-comment_inner\" ></i>   \n        </div>\n        <div id=\"closeComment_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"   style=\"display: none;cursor: pointer\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMore", "model.message_id", {hash:{
    'target': ("controller"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <span style=\"font-size: 11px;font-weight: bold\">Hide comment &nbsp; ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.replyCount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n            <i class=\"icon-caret-up show-comment_inner\" ></i>\n        </div>\n    </div>\n\n\n    <script>\n        $(function() {\n            var $container = $('#masonry_user_container');\n            window.setTimeout(function() {\n                $container.masonry();\n                $container.masonry('reloadItems');\n            }, 200);\n        });\n    </script>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push(" <!--model.isUserself is used to judge whether the reply message is written by the current login user-->\n\n            <span style=\"margin: 0 10px; cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Delete Post\">\n                <i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMessageItem", "model.message_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </span>                 \n            <span style=\"cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Edit Post\">\n                <i class=\"icon-pencil\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "model.message_id", "model.msg", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </span>\n\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUserself", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push(" \n\n            <!--controller.isUserself is used to judge whether it is the page owner who have right to delete every message-->\n            <span style=\"margin: 0 10px; cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Delete Post\">\n                <i class=\"icon-trash\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMessageItem", "model.message_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>    \n            </span>\n            <!--            <span style=\"cursor: pointer\" class=\"hint--bottom hint--rounded\" data-hint=\"Edit Post\">\n                            <i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingCommentData", "model.message_id", "model.msg", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>   \n                        </span>-->\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        <div style='margin: 5px auto;max-width: 300px;max-height: 300px;'>\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"border: 4px solid #fff;\"/>\n        </div>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"reply-comment-frame\"  style=\"padding: 15px;\">\n        <div style=\"margin:0 auto; padding: 0 45px 0 0;\">\n            <a  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -45px 0 0; margin-top: 0;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                <div class='user-reply-angle-before' style=\"right: 47px;\"></div>\n                <div class='user-reply-angle-after' style=\"right: 45px;\"></div>\n            </a>\n\n            <div class=\"reply-comment-container\" style=\"width: 100%;height: 32px;\">\n                <div id =\"reply_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"style=\"margin: 0;width: 210px; height: 30px;float: left;\">\n                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("replyContent"),
    'class': ("no-resize"),
    'placeholder': ("Add a comment...")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                          \n                </div>\n                <div style=\"float: right;height: 34px;position: relative;\">\n                    <div  class=\"message-btn easing\" style=\"width:30px; border-right: 1px solid #ddd; border-left: 1px solid #ddd;\" data-hint=\"Add Photo\"><k class='icon-picture'></k>\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                        </div>\n                    </div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isReply", {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n                </div>\n            </div>\n\n            <!--please disable the following div when it's got not content-->\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"message-btn easing\" style='width: 30px;' data-hint=\"Post\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addReply", "model.message_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <k class='icon-ok' ></k>\n                    </div>\n                    ");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n\n                    <div class=\"message-btn easing\" style='width: 30px;'>\n                        <i class=\"spinner spinner-sml\"></i>\n                    </div>\n                    ");
  }

function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border:1px solid #ddd;'>\n                <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n            </div>\n            ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push(" \n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "enableToEdit", {hash:{},inverse:self.program(25, program25, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n            <div class=\"your-relpy\" style=\"padding: 10px 60px 10px 0;\">\n                <a class=\"your-relpy_profilepic\" style=\"right: 15px;\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                    <img class=\"profilepic_comment\"  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isUserself", {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            <a class=\"comment-username\"  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "user_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("    \n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"comment-content\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isUrl", {hash:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"reply-comment\" style=\"left: 40px;right: initial;\">\n                                <span class=\"hint--bottom hint--rounded\" data-hint=\"Delete\"><i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReplyItem", "reply_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i></span>\n                                <span class=\"hint--bottom hint--rounded\" data-hint=\"Edit\"><i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingReplyData", "reply_id", "msg", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i></span>\n                            </div>\n                            ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUserself", {hash:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"reply-comment\" style=\"left: 40px;right: initial;\">   \n                                <span class=\"hint--bottom hint--rounded\" data-hint=\"Delete\"><i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReplyItem", "reply_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i></span>\n                                <!--                            <span class=\"hint--bottom hint--rounded\" data-hint=\"Edit\"><i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingReplyData", "reply_id", "msg", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i></span>-->\n                            </div>\n                            ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("   <!-- if the isUrl is not null which mean it has the picture url, so it can show the image-->\n                        <div style='margin: 5px auto;max-width: 300px;max-height: 300px;float: right;'>\n                            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"border: 4px solid #fff;\"/>\n                        </div>\n                        ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "editReply", "", options) : helperMissing.call(depth0, "render", "editReply", "", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "editMessage", "model", options) : helperMissing.call(depth0, "render", "editMessage", "model", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"box col2\" style=\"background-color: #fafafa\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "model.enableToEdit", {hash:{},inverse:self.program(27, program27, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["messageCenter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("     \n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "notification", options) : helperMissing.call(depth0, "render", "notification", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "newConversation", options) : helperMissing.call(depth0, "render", "newConversation", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "conversationItem", options) : helperMissing.call(depth0, "render", "conversationItem", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n\n\n    <div class=\"Message-Board box\" style=\"\">\n        <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n            <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\" ><i class=\"icon-envelope\" >&nbsp;&nbsp;&nbsp;</i>Message Centre</div>\n            <div class='create-conversation easing hint--left hint--rounded' data-hint=\"Start\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectNewConversation", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-plus'></i></div>\n        </div>\n\n        <div class='Message-menu-messages-container' >\n\n<!--            <div id=\"notificationselected\" class='each-conversation easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectNotification", "controller.id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <div style=\"position: relative;color: #555;font-size: 20px;font-weight: bold;line-height: 50px;float: left;margin: 25px 0 0px 50px;\">\n                    <i class=\"icon-bell-alt\" style='margin-right: 20px;' >&nbsp;</i>\n                    <div style=\"position: absolute;top: 10px;left: 12px;width: auto;padding: 0 5px 0 4px;height: 15px;background-color: red;line-height: 15px;border-radius: 2px;font-size: 11px;font-weight: bold;color: white;cursor: pointer;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "unReadCount", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    Notifications</div>\n\n            </div>-->\n\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "conversation", options) : helperMissing.call(depth0, "render", "conversation", options))));
  data.buffer.push("\n\n        </div>\n    </div>\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isNotification", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isNewConversation", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isConversationItem", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry('reloadItems');\n        }, 200);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["navigator"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <ul>\n                <li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSelection", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<li class=\"icon-angle-right\"></li></li>\n            </ul>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n            <ul>\n                <li class=\"icon-angle-right\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchTopicSelection", "subcategories", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category_topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n\n            </ul>\n                    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n            <ul>\n                <li class=\"icon-angle-right\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "search_topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </li>\n\n                </ul>\n            ");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"blur_black\" style=\"background-color: initial\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownNavigator", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp;</div>\n<div class=\"Navigator-box\" style=\"\">\n    <div style=\"background-color: #f3f3f3; height: 35px; line-height: 35px;width: 100%; border-bottom: 1px solid #ddd;padding: 0 15px;border-radius: 3px 3px 0 0;\"><span style=\"font-size: 18px;font-weight: bold;color: #555;\">Navigator</span></div>\n\n    <div class=\"Navigator-content\" style=\"\">\n        <div class=\"\" style=\"width: 33%;height: 100%;float: left;padding: 8px 0;overflow: auto\">\n        \n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n                        \n\n\n        <div id =\"category_topic\" style=\"width: 33.5%;height: 100%;border-left: 1px solid #ddd; border-right: 1px solid #ddd;float: left;padding: 8px 12px;overflow: auto\">\n\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n\n        <div id=\"search_topic\" style=\"width: 33.5%;height: 100%;border-left: 1px solid #ddd; border-right: 1px solid #ddd;float: left;padding: 8px 12px;overflow: auto\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.subcategories", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n    </div>\n\n    <div class=\"Navigator_links\" style=\"\">\n        <div style=\"float: left\">\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/\">About</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/business/\">Business</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/learning-centre/\">Learning Centre</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/contact-us/\">Contact us</a></span>\n        </div>\n        <div style=\"float: right\">\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/terms-of-use-agreement/\">Terms of Use</a></span>\n            <span><a target=\"blank\" href=\"http://about.trendsideas.com/Privacy-policy/\">Privacy Policy</a></span>\n        </div>\n    </div>\n</div>\n\n\n\n<script>\n    $(function() {\n        $(\"#category_topic\").mCustomScrollbar({\n            scrollButtons: {\n                enable: false,\n                scrollSpeed: \"auto\"\n            },\n            advanced: {\n                updateOnBrowserResize: true,\n                updateOnContentResize: true,\n                autoScrollOnFocus: false,\n                normalizeMouseWheelDelta: false\n            },\n            autoHideScrollbar: true,\n            mouseWheel: true,\n            theme: \"dark-2\",\n            set_height: 388\n        });\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["newConversation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("       \n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "invitePeople", options) : helperMissing.call(depth0, "render", "invitePeople", options))));
  data.buffer.push("      \n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div style=\"position: relative; width: 100%;min-height: 100px;padding: 10px  15px;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAdd", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"invite-friend\"  style=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToList", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" data-hint=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n             <div class=\"invite-this-friend radius-circle easing\" style=\"opacity: .8;\"><k class=\"icon-minus\" ></k></div>\n            <img class=\"profilepic_comment radius-circle\"  style=\" box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />                \n        </div>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div style='background-color: rgba(0,0,0,.2);max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;'>\n                    <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;;\">\n                </div>\n                ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isInvitePeople", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"Message-Board box\" style=\"\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\">\n             <a><img class=\"profilepic_comment\"  style=\"float: left; margin: 12px; box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> </a>\n            &nbsp;Conversation\n        </div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Invite friends to this conversation!\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "invitePeople", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             <span style=\"position: relative\">\n                <i class=\"icon-user\" style=\"\"></i>\n                <i class=\"icon-plus\" style=\"position: absolute;font-size: 8px;top: 8px;left: 10px;color: white;background-color: #888;height: 12px;width: 12px;line-height: 11px;border: 1px solid #fff;border-radius: 50%;\"></i>\n            </span>\n        </div>\n    </div>\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAdded", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n    <div  style=\"width: 100%;padding: 20px 6.5%;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n        <div style=\"margin:0 auto; padding: 0 0 0 45px;\">\n            <a>\n                <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -45px; margin-top: 0;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                <div class='user-says-angle-before'></div>\n                <div class='user-says-angle-after'></div>\n            </a>\n\n            <div class=\"post-comment-container\">\n                <div   style=\"margin: 0;width: 100%; height:80px;\">\n                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize"),
    'placeholder': ("What's up!")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                          \n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                    <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n                    <div class=\"message-btn easing\" style=''");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n\n</div>\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["notification"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isRead", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class='each-conversation easing'>\n            <div style=\"  padding: 15px 0 10px 95px;position: relative;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 18px;margin: 0 0 0 -55px;\">\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            <span class=\"comment-username\" >\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: top; font-size: 13px;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"comment-content\" style=\" width: 387px; height: 35px; text-overflow: ellipsis;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;\">  \n                <i class=\"icon-ok-sign\" ></i>                 \n                <i class=\"icon-remove-sign\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteNotification", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n\n\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class='each-conversation easing unread-style'>\n            <div style=\"  padding: 15px 0 10px 95px;position: relative;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 18px;margin: 0 0 0 -55px;\">\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            <span class=\"comment-username\" >\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: top; font-size: 13px;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"comment-content\" style=\" width: 387px; height: 35px; text-overflow: ellipsis;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;\">  \n                <i class=\"icon-ok-sign\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markRead", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>                 \n                <i class=\"icon-remove-sign\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteNotification", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n        ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"Notification-Board box Message-Board\" style=\"\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"color: #555;font-size: 18px;line-height: 70px;font-weight: bold;float: left;\"><i class=\"icon-bell-alt\">&nbsp;&nbsp;&nbsp;</i>Notifications</div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Set all as read\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markAllRead", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             <i class=\"icon-th-list\"></i>\n        </div>\n        <!--<div class=\"create-conversation easing\" style=\"\"><i class=\"icon-cog\"></i></div>-->\n    </div>\n    <div  id=\"content_notification\" style=\"\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.notificationContent", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n<script>\n    $(function() {\n        $(\"#content_notification\").mCustomScrollbar({\n            scrollButtons: {\n                enable: false,\n                scrollSpeed: \"auto\"\n            },\n            advanced: {\n                updateOnBrowserResize: true,\n                updateOnContentResize: true,\n                autoScrollOnFocus: false,\n                normalizeMouseWheelDelta: false\n            },\n            autoHideScrollbar: true,\n            mouseWheel: true,\n            theme: \"dark-2\",\n            set_height: 1100\n        });\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["notificationTop"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isRead", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class='each-conversation easing' style=\"min-height: 0;\">\n            <div style=\"padding: 10px 10px 10px 70px;position: relative;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 15px;margin: 0 0 0 -50px;\" >\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"\" style=\"color: #555\">\n                            <span class=\"comment-username\" >\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: bottom; font-size: 11px;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>               \n\n                        </div>\n                    </div>\n\n                    <div class=\"comment-content\" style=\" width: 330px; height: 15px; font-size: 11px;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </span>\n                    </div>\n\n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\" style=\"font-size: 9px; line-height: 10px;\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;font-size: 10px;\">  \n                <i class=\"icon-ok-sign\"></i>                 \n                <i class=\"icon-remove-sign\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeNotificationItem", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class='each-conversation easing unread-style' style=\"min-height: 0;\">\n            <div style=\"padding: 10px 10px 10px 70px;position: relative;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <a class=\"\" style=\"position: absolute; top: 15px;margin: 0 0 0 -50px;\" >\n                    <img class=\"\"  style=\"border-radius: 50%; width: 40px; height: 40px; border: 1px solid #f3f3f3;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"\" style=\"color: #555\">\n                            <span class=\"comment-username\" >\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </span>\n                            <span style=\"display: inline-block; vertical-align: bottom; font-size: 11px;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "typeDisplay", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>               \n\n                        </div>\n                    </div>\n\n                    <div class=\"comment-content\" style=\" width: 330px; height: 15px; font-size: 11px;\">\n                        <span style=\"text-overflow: ellipsis\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </span>\n                    </div>\n\n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\" style=\"font-size: 9px; line-height: 10px;\" >");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time", options) : helperMissing.call(depth0, "date", "time", options))));
  data.buffer.push("</span>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"reply-comment easing\" style=\"right:25px;position: relative;float: right;top: -60px;font-size: 10px;\">  \n                <i class=\"icon-ok-sign  \" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markRead", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>                 \n                <i class=\"icon-remove-sign\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeNotificationItem", "notification_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </div>\n        </div>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  data.buffer.push("<div class=\"blur_black\" style=\"background-color: initial\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
<<<<<<< HEAD
  data.buffer.push(">&nbsp;</div>\n<div  class=\"Notification-Board Notification-top\" style=\"z-index: 20;height: 440px;top: 65px;right: 28px;\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 35px; border-bottom: 1px solid #ddd;padding: 0 20px;position: relative;display: block;clear: both;\">\n        <div style=\"color: #666;font-size: 13px;line-height: 38px;font-weight: bold;float: left;\"><i class=\"icon-bell-alt\">&nbsp;&nbsp;&nbsp;</i>Notification</div>\n        <div class=\"create-conversation easing\" style=\"height: 34px; width: 34px; line-height: 36px; font-size: 13px;\"");
=======
  data.buffer.push(">&nbsp;</div>\n<div  class=\"Notification-Board Notification-top\" style=\"z-index: 20;height: 440px;\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 35px; border-bottom: 1px solid #ddd;padding: 0 20px;position: relative;display: block;clear: both;\">\n        <div style=\"color: #666;font-size: 13px;line-height: 38px;font-weight: bold;float: left;\"><i class=\"icon-bell-alt\">&nbsp;&nbsp;&nbsp;</i>Notification</div>\n        <div class=\"create-conversation easing hint--left hint--rounded\" data-hint=\"Set all as read\" style=\"height: 34px; width: 34px; line-height: 36px; font-size: 13px;\"");
>>>>>>> 01558c1649c48e9666789184b6bfce7acce0a408
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markAllRead", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n             <i class=\"icon-th-list\"></i>\n        </div>\n    </div>\n\n    <div id=\"notititopbar\" style=\"position: absolute\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.notificationTopContent", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div style=\"background-color: #f3f3f3; width:100%;height: 35px; border-top: 1px solid #ddd;padding: 0 20px; text-align: center;position: absolute;top: 405px;\">\n        <div style=\"color: #666;font-size: 13px;line-height: 38px;font-weight: bold;\">   <i  style=\"cursor: pointer\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeAll", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">  See all</i>  </div>\n    </div>\n</div>\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<script>\n    $(function() {\n        $(\"#notititopbar\").mCustomScrollbar({\n            scrollButtons: {\n                enable: false,\n                scrollSpeed: \"auto\"\n            },\n            advanced: {\n                updateOnBrowserResize: true,\n                updateOnContentResize: true,\n                autoScrollOnFocus: false,\n                normalizeMouseWheelDelta: false\n            },\n            autoHideScrollbar: true,\n            mouseWheel: true,\n            theme: \"dark-2\",\n            set_height: 370\n        });\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["photo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Read this article\" style=\"position:relative;margin: 0 5px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "controller.megaResouce.id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-book\"></i><span class=\"pretooltip\">Read</span>\n            </div>       \n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Watch this Video\" style=\"position:relative;margin: 0 5px;\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToVideo", "controller.megaResouce", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-film\"></i><span class=\"pretooltip\">Watch</span>\n            </div>    \n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                <div class=\"article-title\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.selectedPhoto.photo_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"article-text\">\n                    <p>");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "controller.selectedPhoto.photo_caption", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                </div>\n                ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div class='hint--left hint--rounded' data-hint='Edit Photo Info' style=\"position: absolute;font-size: 15px;right: 10px;margin: 1px;\">\n                        <i class=\"icon-edit\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingPhotoMegaData", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                    </div>\n                    ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_title"),
    'id': (""),
    'class': ("edit_photo-titile_field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n                ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_caption"),
    'id': (""),
    'class': ("edit_photo-caption_field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n\n                <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n\n                    <div  type=\"button\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "selectedPhoto", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n                    <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n                </div>\n\n                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                <div class=\"addcommnetbox-container\" id=\"commentBox\" style=\"display: none\">\n                    <div style=\"margin:0 auto; padding: 0 0 15px 38px;\">\n                        <a> \n                            <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -38px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                        </a>\n\n                        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'id': ("AddRecord"),
    'class': ("comment-insert-field"),
    'placeholder': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("   \n                        <span class=\"\" style=\"margin-top: 7px;float: right;\">\n                            <div  class=\"new-btn\"");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n                            <div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Post</div>\n                        </span>\n\n                    </div>\n                </div>\n                ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},inverse:self.program(20, program20, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                <div class=\"comment-item\"}}>\n\n                    <div class=\"comment-position\">\n                        <a class=\"profilepic-comment-container\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                            <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                        </a>\n                        <div style=\"\">\n                            <div class=\"comment-namentime\">\n                                <div class=\"namentime_position\">\n                                    <a class=\"comment-username\"  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </a>\n                                    <div class=\"posttime-container\">\n                                        <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>                  \n                                    </div>\n                                </div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "getUser", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            </div>\n\n                            <div class=\"comment-content\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                                <!-- for +someone into the conversation-->\n                                <span>\n                                    <span></span>\n                                    <a></a>\n                                </span>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <span class=\"edit-comment easing\">\n                                    <i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>                 \n                                    <i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                                </span>\n                                ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("   \n                ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loginModal", options) : helperMissing.call(depth0, "render", "loginModal", options))));
  data.buffer.push("       \n\n");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n<div class=\"objectview-wrapper\" >\n\n    <div class=\"objectview-left\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"top-controlbar easing\" >\n            <!--            <div class=\"icon-on-black\" style=\"left: 8px;\"><i class=\"icon-thumbs-up\"></i></div>-->\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.megaResouce.getArticle", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.megaResouce.getVideo", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Save this photo to your own collection.\" style=\"position:relative;margin: 0 5px;\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-save\"></i><span class=\"pretooltip\">Save</span>\n            </div>\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\"></i><span class=\"pretooltip\">Share</span> \n            </div>\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"width: 150px; margin: 0 auto; left: 70px;padding: 0\">\n                <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n<script type=\"text/javascript\">\n    (function(d) {\n        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');\n        p.type = 'text/javascript';\n        p.async = true;\n        p.src = '//assets.pinterest.com/js/pinit.js';\n        f.parentNode.insertBefore(p, f);\n    }(document));\n</script>\n\n<div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n    <i class=\"icon-remove\"></i>\n</div>\n</div>\n\n<div class=\"mainfeature\">\n    <div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n    <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.PhotoDisplayAreaView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n<!--THIS IS THE ALBUM BOX-->\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ShowAlbumView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<!--THIS IS THE ALBUM BOX-->\n\n<div class=\"bottom-controlbar easing\" >\n    <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n    <div class=\"icon-on-black\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display:inline-block; vertical-align: top; position:relative; left:44px;\">\n        <i class=\"icon-arrow-left\"></i>\n    </div>\n    <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px; display:inline-block; vertical-align: top; position:relative;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupAibum", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i class=\"icon-th\"></i>\n    </div>\n    <div class=\"icon-on-black\" style=\"left: 44px;position: relative;vertical-align: top;display: inline-block;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i class=\"icon-arrow-right\"></i>\n    </div>\n    <div class=\"text-on-black\" style=\"left: 88px; top:0;position: relative;display: inline-block;vertical-align: top;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.image_no", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>\n</div>\n</div>\n\n<div class=\"objectview-right\">\n    <!-- USER SECTION -->\n    <div style=\"cursor: pointer;\">\n        <div class=\"object-poster easing\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div class=\"profilepic-container\">\n                <a class=\"profilepic\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.megaResouce.owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /></a>              \n            </div>\n            <div class=\"poster_user\" >\n                <a class=\"poster-name\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "controller.megaResouce.created", options) : helperMissing.call(depth0, "date", "controller.megaResouce.created", options))));
  data.buffer.push(" </span>\n            </div>        \n            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                <a class=\"contactmeicon easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.contact", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n\n    <!-- OBJECT DESCRIPTION SECTION -->\n    <div>\n        <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setTitleTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div class=\"collapes-title_inner\">\n                About\n            </div>\n            <div class=\"dropdownicon\" >\n                <i class=\"icon-angle-down\"></i>\n            </div>\n        </div>\n        <div class=\"collapes-container\"   id=\"article_action\" style=\"display:block\">\n            <div  class=\"collapes-container_inner\">\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controller.enableToEdit", {hash:{},inverse:self.program(12, program12, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n            </div>\n\n\n\n\n        </div>\n\n\n\n\n    </div>\n\n\n\n\n    <!-- OBJECT DISCUSSION SECTION -->\n\n    <div>\n        <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <div class=\"collapes-title_inner\">\n                Discussion\n            </div>\n            <div class=\"dropdownicon\">\n                <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n            </div>      \n        </div>\n\n\n\n        <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n            <div class=\"collapes-container_inner\">\n\n                <div class=\"show-comment\">\n                    <div class=\"show-comment_container\">\n                        <span class=\"show-comment_inner\">\n                            <span class=\"comment-amount\" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                            <span class=\"comment-amount\" > comments ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.type", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  </span> \n                        </span>\n                    </div>\n\n                    <div class=\"object-like\" style=\"\"></div>\n                    <div class=\"object-save\" style=\"\"></div>\n                </div>\n                <div class=\"addcommnetbox\" role=\"button\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"addcommetBut\" >\n                    add comment...\n                </div>\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.megaResouce.comments", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                <!-- test1 -->\n<div id='div-gpt-ad-1384896082386-0' style='width:336px; height:280px;'>\n<script type='text/javascript'>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1384896082386-0'); });\n</script>\n</div>\n\n            </div>\n        </div>\n\n    </div>\n\n\n\n\n\n\n\n\n</div>\n\n\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["photoCreate"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n        <p style=\"font-weight: bold;\">\n            Drag and drop. \n        </p> \n\n    </div>\n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n        Choose \n        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div> \n    </div> \n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        <span class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "back", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Close</span>\n        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Upload</span> \n    </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n\n\n\n        <div style=\"position: relative;margin:3px; display: inline-block; vertical-align: top; min-width: 150px;text-align: center;\">\n            <div> \n                <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_image_original_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  alt=\"Logo\" style=\"max-width: 140px; max-height: 150px;\">\n                <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("photo_source_id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display: none;\">\n                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                </div>\n            </div>\n            <div style=\"margin: 2px 0 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "photo_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </div>\n        ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.PhotoCreateView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["photoCreateInfoSetting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div style=\"position: relative; width: 29%;display: inline-block;height: 150px;vertical-align: top;overflow: hidden;margin: 15px;line-height: 150px;text-align: center;\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"\"/>\n    </div>\n    <div style=\"position: relative; width: 63%;display: inline-block; height: 150px; vertical-align: top; overflow: hidden; margin: 15px;  margin-left: 0;\">\n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("title"),
    'id': (""),
    'class': ("edit_photo-titile_field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("caption"),
    'id': (""),
    'class': ("edit_photo-caption_field2")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("\n\n\n\n<div class='controlbtn-field' style='position:relative;height: 85px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n    <span style=\"position: relative;display: inline-block;font-size: 40px;margin: 10px 0;vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n    <span style=\"position: relative;width: 87%;display: inline-block;margin: 10px 15px;\">\n        <span style='font-size: 20px;display: block;line-height: 25px;'>Congratulations! Your Photos have been uploaded!</span>\n        <span style='font-size: 13px;margin: auto;  display: block;line-height: 16px;'>Now, say something about the photo.</span>\n    </span>\n</div>\n\n\n\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; overflow: auto;\">\n\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "photoInfo", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <span style='position: relative; float: left;margin: 23px;' class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backToDragAndDrop", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Select more</span>\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        <span class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "finishUploadingAndInfo", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Skip</span> \n        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitPhotoInfo", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Submit</span> \n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["photoDisplayArea"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n\n\n\n<img class=\"mainfeature_object\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.selectedPhoto.photo_image_original_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["platformBar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                    <li> <span><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "topic", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></span>\n                        <ul>\n                            <li>&nbsp;</li>\n                  \n                            <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -80px;  z-index: -1;\"></div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "subcate", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </ul>\n                    </li>\n                    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                            <li> <span><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "category_topic", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category_topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></span>\n                                <ul>\n                                    <li>&nbsp;</li>\n                                    <div style=\"width: 140%; height: 150%; position: absolute;margin-left: -20px; margin-top: -70px;  z-index: -1;\"></div>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "subcategories", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </ul>\n                            </li>\n                            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <li class=\"search_topic\"> <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "topicSearch", "search_topic", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "search_topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n\n\n                                    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n                    <li><a  href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.myUserProfile", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/collections/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"plaform_bar\" >\n    <img src=\"../../../images/reflection.png\"/>\n    <div id=\"navContainer\" class=\"easing\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sidebarScroll", {hash:{
    'target': ("view"),
    'on': ("mouseEnter")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n        <ul id=\"nav-ul\" >\n            <div style=\"width:90px; height: 100%; position: absolute; z-index: -1;\"></div>\n            <li> \n                <div> <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.user.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic_user\"/></div>\n            </li>\n\n            <li style=\"margin-top: 20px;\"> <div class=\"hint--right hint--rounded\" data-hint=\"Category\"><a href=\"#\"> <i class=\"icon-eye-open\" style=\"font-size: 20px;\"></i></a></div>\n                <ul class=\"firstList\" >\n                    <li>&nbsp;</li>\n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -155px; z-index: -1;\"></div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </li>\n            <li><div class=\"hint--right hint--rounded\" data-hint=\"Search for Location\"><a href=\"#\"> <i class=\"icon-globe\" style=\"font-size: 20px;\"></i></a></div>\n                <ul class=\"nav-geo-ul\">\n                    <li>&nbsp;</li>\n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -50px;  z-index: -1;\"></div>\n\n\n                    <li><div  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "userLocation", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Your location</br>\n                            (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "userLocation", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(")\n                        </div></li>\n                    <li><div  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "Global", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Global</div></li>\n                    <li><div  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "Australia", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Australia</div></li>\n                    <li><div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "New Zealand", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >New Zealand</div></li>\n                    <li><div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "United States", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >United States</div></li>\n                    <li><div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "India", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >India</div></li>\n                    <li><div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "China", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >China</div></li>\n                    <li><div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLocation", "Asia", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Asia</div></li>\n                </ul>\n            </li>\n\n\n            <li> <div class=\"hint--right hint--rounded\" data-hint=\"Your Collection\"><a href=\"#\"> <i class=\"icon-folder-open\" style=\"font-size: 20px;\"></i></a></div>   \n                <ul>\n                    <li>&nbsp;</li>\n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -50px;  z-index: -1;\"></div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.user.collections", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </li>\n\n            <script>\n\n                $(\"#navContainer > ul > li >span\").hover(function() {\n                    $(\"#navContainer > ul > li\").not(this).removeClass('sidebar-hover');\n                });\n                $(\"#navContainer > ul > li> ul \").hover(function() {\n                    $(this).parent().addClass(\"sidebar-hover\");\n                });</script>\n\n\n            <li> <div class=\"hint--right hint--rounded\" data-hint=\"Feedback & Support\"><a href=\"http://about.trendsideas.com\"> <i class=\"icon-question-sign\" style=\"font-size: 20px;\"></i></a></div>   \n            </li>\n\n            <li> <div class=\"hint--right hint--rounded\" data-hint=\"Log out\"><a href=\"#\" onclick=\"logout();\"> <i class=\"icon-off\" style=\"font-size: 20px;\"></i></a></div>   \n            </li>\n        </ul>\n\n\n    </div>\n\n    <div class=\"showsidebar easing\"><k class=\"icon-circle-arrow-right\"></k></div>\n\n</div>\n\n\n\n\n<script>\n\n                function logout() {\n\n                    $.ajax({\n                        type: 'POST',\n                        url: getRestAPIURL() + '/logout',\n                        contentType: 'application/json; charset=uft-8',\n                        dataType: 'json',\n                        success: function(para) {\n\n\n                        }\n                    });\n\n//                        localStorage.clear();\n                    localStorage.removeItem('loginStatus');\n\n                }\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n                <div  id=\"flip-front\" class='blue-btn new-btn hint--left hint--rounded edit-dashboard-btn' style=\"display: block; margin: 10px;position: absolute;top: 0;right: 0;\" data-hint=\"Dashboard\"\n                      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontClick", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                      <i class=\"icon-cogs\"></i>\n                </div>\n\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                <div style=\"display: inline-block; width: 350px;\">\n\n                                    ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("profile_name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                </div>\n                                <div style=\"display: inline-block;vertical-align: bottom; margin-left:20px\">\n                                    <div class=\"new-btn blue-btn\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.profileName", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                                    <div class=\"new-btn\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.profileName", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove icon-white\"></i></div>\n                                </div>\n                                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                                <div style=\"display: inline-block; color: white; max-width: 750px; overflow: hidden; font-size: 28px; margin-bottom: 15px; line-height: 32px; vertical-align: middle;\">\n                                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <div class=\"edit-btn easing hint--rounded hint--bottom\" data-hint=\"Edit content\" style=\"color: white;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.profile_name", "controller.profileName", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                     <i class=\"icon-edit\"></i>\n                                </div>\n                                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin:10px auto;display: block;width: 150px;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisProfile", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n                                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin:10px auto;display: block;width: 150px;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisProfile", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n\n                                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("                                             \n                                <a class='radius-circle' href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                    <div class=\"hint--bottom hint--rounded\" data-hint=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                                    </div>\n                                </a>                                             \n                                ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("  \n                                        <li><div class=\"tags-before\"></div><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "keywordSearch", "keyword_name", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "keyword_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n                                        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"aside-container\" style=\"\">\n                                <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'><i class='icon-phone' style='margin-right: 10px;'></i>Contact Detail</div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n                                ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <div class=\"edit-btn easing hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "model.phone_number", "controller.contact", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                     <i class=\"icon-edit\" ></i>\n                                </div>\n                                ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("first_name"),
    'placeholder': ("First Name ")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("last_name"),
    'placeholder': ("Last Name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "first_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "last_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                        ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("model.profile_category")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\"><a >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.profile_category", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></th>\n                                        ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("address"),
    'placeholder': ("Street Address")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("suburb"),
    'placeholder': ("Suburb")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("region"),
    'placeholder': ("Region")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("country"),
    'placeholder': ("country")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.address", {hash:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.suburb", {hash:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.region", {hash:{},inverse:self.noop,fn:self.program(36, program36, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.country", {hash:{},inverse:self.noop,fn:self.program(38, program38, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        ");
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(",</th>\n                                        ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "suburb", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(",</th>\n                                        ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "region", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(",</th>\n                                        ");
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "country", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                        ");
  return buffer;
  }

function program40(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("profile_contact_number")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_contact_number", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                        ");
  return buffer;
  }

function program44(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("website")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                                        ");
  return buffer;
  }

function program46(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\"><a href=\"#\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gotoSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "website", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></th>\n                                        ");
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("   \n                                        <th style = \"color: #aaa; text-align: right;padding-bottom: 10px;font-size: 14px;font-weight: normal;width: 90px;\">Website URL:</th>       \n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("website_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("                        \n                                        ");
  return buffer;
  }

function program50(depth0,data) {
  
  
  data.buffer.push("\n\n                                        ");
  }

function program52(depth0,data) {
  
  
  data.buffer.push("\n\n\n                                ");
  }

function program54(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n                                    <div  type=\"button\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.contact", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n                                    <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.contact", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n                                </div>\n                                ");
  return buffer;
  }

function program56(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(57, program57, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }
function program57(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <div class=\"edit-btn easinghint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "model.profile_name", "controller.timeSetting", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                     <i class=\"icon-edit\"></i>\n                                </div>\n                                ");
  return buffer;
  }

function program59(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                                <table id=\"aside_contact\">\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},inverse:self.program(62, program62, data),fn:self.program(60, program60, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},inverse:self.program(66, program66, data),fn:self.program(64, program64, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        </tr>\n                                    </tbody>\n                                </table>\n\n\n                                ");
  return buffer;
  }
function program60(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <tbody style=\"display: inline-block; vertical-align: top;\">\n                                        <tr style=\"\">\n                                            <th>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "day", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                            ");
  return buffer;
  }

function program62(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                            ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("inserthours-day"),
    'value': ("day")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                            ");
  return buffer;
  }

function program64(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                            <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "time", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                            ");
  return buffer;
  }

function program66(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                            ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("inserthours-time"),
    'value': ("time")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                            ");
  return buffer;
  }

function program68(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n                                <div style=\"width: 75px;margin: auto;\">\n                                    <div class=\"new-btn blue-btn\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.timeSetting", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                                    <div class=\"new-btn\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.timeSetting", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove icon-white\"></i></div>\n                                </div>\n                                ");
  return buffer;
  }

function program70(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <div style=\"height: 300px;\">\n                                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.HtmlEditorView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>   \n                                    </div>\n                                    <div style=\"right: 40px;bottom: 25px;position: absolute;\">\n                                        <div class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yesAbout", "controller.aboutMe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                                        <div class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.aboutMe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                                    </div>\n                                    ");
  return buffer;
  }

function program72(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(73, program73, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </div>\n                                <div style=\"display: block; width: 100%\" >");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "model.profile_about_us", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                ");
  return buffer;
  }
function program73(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n                                    <div class=\"edit-btn hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.about_me", "controller.aboutMe", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n                                         <i class=\"icon-edit\"></i>\n                                    </div>\n\n                                    ");
  return buffer;
  }

function program75(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <li class=\"location_li\">\n                                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "facebook", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-facebook\"> </k></a>\n                                    </li>\n                                    ");
  return buffer;
  }

function program77(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <li class=\"location_li\">\n                                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "twitter", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-twitter\"> </k></a>\n                                    </li>\n                                    ");
  return buffer;
  }

function program79(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <li class=\"location_li\">\n                                        <a href=\"#\" target=\"_blank\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "googleplus", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-google-plus\"> </k></a>\n                                    </li>\n                                    ");
  return buffer;
  }

function program81(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <li class=\"location_li\">\n                                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "pinterest", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-pinterest\"> </k></a>\n                                    </li>\n                                    ");
  return buffer;
  }

function program83(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <li class=\"location_li\">\n                                        <a href=\"#\" target=\"_blank\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "linkedin", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-linkedin\"> </k></a>\n                                    </li>\n                                    ");
  return buffer;
  }

function program85(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <li class=\"location_li\">\n                                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "youtube", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-youtube-play\"> </k></a>\n                                    </li>\n                                    ");
  return buffer;
  }

function program87(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab4\" data-toggle=\"tab\">Authority Settings</a></li>                \n                ");
  return buffer;
  }

function program89(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab5\" data-toggle=\"tab\">Keywords Settings</a></li>\n                ");
  return buffer;
  }

function program91(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                ");
  return buffer;
  }

function program93(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                <div style=\"width: 700px; min-height: 100px; background-color: #f3f3f3; margin: 10px auto;padding: 5px 8px;position: relative;\">\n                    <div style=\"font-size: 13px; font-weight: bold;color: #aaa;position: absolute;bottom: 5px;text-align: center;width: 684px;\">Keywords in this area can be showed on the profile, drag from the pool below. (maximum 10 keywords)</div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.show_keyword_array", {hash:{},inverse:self.noop,fn:self.program(94, program94, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                      \n                </div>\n                ");
  return buffer;
  }
function program94(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("                    \n                    <div class='hashtags' style=\"margin: 2px 3px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "keyword_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(95, program95, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>                    \n                    ");
  return buffer;
  }
function program95(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<i class='remove-hashtages' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteKeywords", "keyword_id", "show", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">x</i>");
  return buffer;
  }

function program97(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n                        ");
  hashContexts = {'elementIdBinding': depth0};
  hashTypes = {'elementIdBinding': "STRING"};
  stack1 = helpers.view.call(depth0, "HubStar.KeywordView", {hash:{
    'elementIdBinding': ("keyword_id")
  },inverse:self.noop,fn:self.program(98, program98, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program98(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                        <div class='hashtags' style=\"margin: 2px 3px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "keyword_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(99, program99, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                        ");
  return buffer;
  }
function program99(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<i class='remove-hashtages' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteKeywords", "keyword_id", "all", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">x</i>");
  return buffer;
  }

function program101(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},inverse:self.noop,fn:self.program(102, program102, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program102(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                <div style=\"position: relative; margin: 15px auto;height: 520px; width: 87%; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\">\n                    <div style=\"top: 190px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n\n\n                        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n                        <p style=\"font-weight: bold; margin: 10px;\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.UploadImageMode", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n                        </p>\n                        <span style='font-size: 17px;display: block;line-height: 25px;'>Please select one photo for your choice.</span>   \n                        <span style='font-size: 17px;display: block;line-height: 25px;'> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.RequiredImageSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                        <span style='font-size: 17px;display: block;line-height: 25px;'> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.CurrentImageSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n\n                    </div>\n                    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 550px; position: absolute;left: 0;\">\n                        Choose \n                        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> </div>\n                    </div>\n\n                    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:block\">\n                        <div style=\"position: relative;margin:3px; display: inline-block; vertical-align: top; min-width: 150px;text-align: center;\">\n                            <div>\n                                <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 140px; max-height: 150px;\">\n                                <div id='uploadStyleImg' style=\"display: none;\">\n                                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                                </div>\n                            </div>\n                            <div style=\"margin: 2px 0 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newStyleImageName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"\" style=\"margin-top: 20px;\">\n                    <div class=\"controlbtn\" style=\"left: 300px;\">\n\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isCrop", {hash:{},inverse:self.program(105, program105, data),fn:self.program(103, program103, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUpload", {hash:{},inverse:self.program(109, program109, data),fn:self.program(107, program107, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        <a href=\"#tab1\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><span class=\"new-btn\">Close</span></a>\n\n\n                    </div>\n                </div>\n                ");
  return buffer;
  }
function program103(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Crop</span>\n                        ");
  return buffer;
  }

function program105(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" >Crop</span>\n                        ");
  }

function program107(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Upload</span>\n                        ");
  return buffer;
  }

function program109(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" >Upload</span>\n                        ");
  }

function program111(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n                ");
  return buffer;
  }

function program113(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                <div class='' style='position:relative;height: 65px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n                    <span style=\"position: relative;display: inline-block;font-size: 40px; vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n                    <span style=\"position: relative;width: 87%;display: inline-block;margin: 0 15px;\">\n                        <span style='font-size: 20px;display: block;line-height: 25px;font-weight: bold'>Crop your picture now!</span>\n                        <span style='font-size: 15px;display: block;line-height: 15px;'> Image Size: <span id=\"log\"></span> </span>  \n                    </span>\n                </div>\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isProfilePicture", {hash:{},inverse:self.noop,fn:self.program(114, program114, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isProfileHero", {hash:{},inverse:self.noop,fn:self.program(116, program116, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isProfileBackground", {hash:{},inverse:self.noop,fn:self.program(118, program118, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            <canvas id=\"panel\" class=\"crop-canvas\" style=\"height: 100%;width: auto;margin: 0 auto; \"><img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ></canvas>\n                        </div>\n\n\n\n                        <div class=\"\" style=\"margin-top: 5px;\">\n\n                            <div class=\"controlbtn\" style=\"left: 34%;\">\n                                <span class=\"new-btn green-btn \" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ><k class='icon-save'> &nbsp;Save</span>\n                                <a href=\"#tab1\" data-toggle=\"tab\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">   <span class=\"new-btn\" >Back</span> </a>\n\n                            </div>\n                        </div>\n                        ");
  return buffer;
  }
function program114(depth0,data) {
  
  
  data.buffer.push("\n                <div id=\"crop-container\" style=\"width: 820px;height: 500px;margin: 10px auto; text-align: center\">          \n                    ");
  }

function program116(depth0,data) {
  
  
  data.buffer.push("\n                    <div id=\"crop-container\" style=\"width: 830px;height: 500px;margin: 10px auto; text-align: center\">\n                        ");
  }

function program118(depth0,data) {
  
  
  data.buffer.push("\n                        <div id=\"crop-container\" style=\"width: 850px;height: 500px;margin: 10px auto; text-align: center\">\n                            ");
  }

function program120(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                        <div class='' style='line-height: 45px;position:relative;height: 50px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 5px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n                            <span style=\"position: relative;display: inline-block;font-size: 40px;vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n                            <span style=\"position: relative;width: 87%;display: inline-block;margin: 0 15px;\">\n\n                                <span style='font-size: 20px;display: block;line-height: 15px;'>Congratulations! Your Photos have been uploaded!</span>\n                            </span>\n                        </div>\n\n                        <div style=\"position: relative; margin: auto;height: 500px; width: 690px; overflow: hidden;line-height: 490px;\">\n                            <div style=\"position: relative;margin:3px;text-align: center;overflow: hidden;\">\n                                <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                            </div>\n                        </div>\n                        <div class=\"\" style=\"\">\n\n\n                            <div class=\"controlbtn\" style=\"left: 34%;\">\n\n                                <a href=\"#tab1\" data-toggle=\"tab\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">   <span class=\"new-btn\" >Finish</span> </a>\n                            </div>\n                        </div>\n                        ");
  return buffer;
  }

function program122(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program124(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "masonryCollectionItems", options) : helperMissing.call(depth0, "render", "masonryCollectionItems", options))));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program126(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program128(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loginModal", options) : helperMissing.call(depth0, "render", "loginModal", options))));
  data.buffer.push("       \n\n    ");
  return buffer;
  }

function program130(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "review", "", options) : helperMissing.call(depth0, "render", "review", "", options))));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

function program132(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "render", "footer", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program134(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.GoogleMapPopupView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n    ");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"profilegb\" style=\"background: #fff url('../images/texture.png') repeat;width: 100%;height: auto; \">\n\n    <div class=\"profile-wallpaper\" style=\"width: 100%; height: 500px; overflow: hidden; position: fixed;\">\n        <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.profile_bg_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 100%; height:auto;\">\n    </div>\n    <div style=\"width: 100%; height:170px; position: relative; display: block; opacity: 0;\">\n    </div>\n    <div style=\"position: absolute;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.contactChecking", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n</div>\n\n<div class=\"hover panel\" style='z-index: 0; float: none;position: relative; width: 87%; height: auto; margin:  auto; background: #fff; box-shadow: 0px 0px 8px #555; border-radius: 3px 3px 0 0;max-width: 1260px;min-width: 1250px;overflow: hidden;'>\n\n    <div class=\"front\" style=\"text-align: inherit; width: auto; height: auto; box-shadow: none; border: none; position: relative;\">\n\n        <div class=\"profilewrapper premium\">\n            <!--corpbanner-->\n\n            <div class=\"profilecorpbanner\"    style=\"\">\n                <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.profile_hero_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"corpbanner_mask\" style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute;bottom:0; width: 100%; height: 200px;\">\n                    <div class=\"corpbanner_content\" style=\"position: absolute;bottom:0;margin-left: 30%;width: 70%;\">\n                        <div class=\"main_title\" style=\"height: 100px;\">\n\n                            <div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editing", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n\n\n                            <!--STAR RATING-->\n                            <div style=\"position: absolute;width: 500px;\">\n                                <span class=\"stars\" style=\"float: left;margin: 5px 15px 5px 0;\" ><span id=\"starsize\" ></span></span>  \n                                <div class=\"hint--right hint--rounded\" data-hint=\"Review this profile!\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "rateEditing", "model.id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                                     <div class=\"contactmeicon easing\" style=\"float: left;  width: 35px; height: 35px;line-height: 31px;text-align: center;font-weight: bold;font-size: 13px;border: 2px solid #aaa;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_average_review", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                                    <div class=\"hover-opacity\" style=\"font-size: 13px; font-weight: bold; color: #fff; cursor: pointer;  float: left;  margin: 8px 10px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "reviews.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" • Reviews</div> \n                                </div>\n                            </div>   \n\n\n                            <!--contact me-->\n                            <div class=\"contactmebtn hint--bottom hint--rounded easing\" data-hint=\"Contact us!\">\n                                <a class=\"contactmeicon easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n                            </div>\n                            <!--contact me-->\n\n                            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Share this profile!\" >\n                                <a class=\"contactmeicon easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-share-alt easing\" style=\"font-size: 19px;\"></i></a>\n                            </div>\n\n                            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"width: 150px;  padding: 0;right: 45px;top: 70px;position: absolute;\">\n                                <!--<li style=\"position:fixed;z-index:0;height:100%;width:100%;\" onClick=\"document.getElementById('dropdown_id_'+");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(").style.display='none' \">&nbsp;<li>-->\n                                <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n                            </li>\n                            <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n                        </li>\n                        <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n                    </li>\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n                    </li>\n                </ul>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div style=\"position: relative; width: 100%;background-color: rgb(242,240,240); border-radius: 0 0 3px 3px;\">\n\n    <!--PROFILE PAGE LEFT SIDE-->\n\n    \n    <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n        <tbody>\n            <tr>\n                <!--LEFT COL BEGINS -->\n                <td class=\"left_col\" width=\"29%\" valign=\"top\">\n                    <div class=\"profileaside\">\n                        <div class=\"profileaside_content\">\n                            <div class=\"aside-profilepic\">\n                                <div style=\"min-height: 175px; overflow: visible; line-height: 175px;margin-bottom: 20px;\" data-hint=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                    <a href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"border:5px solid white;box-shadow: 0px 0px 5px #888;min-height: 0;width: 100%\">\n                                    </a> \n                                </div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.follow_status", {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            </div>\n\n\n                            <div class=\"LatestFollower\">\n\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentFollowerPhoto", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            </div>\n                            <div class=\"Followed-by easing\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFollower", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Followed by ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profileFollowerStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" people.</div>\n\n\n\n                            <!--KEYWORDS SECTION-->\n                            <div class=\"aside-container\"> \n                                <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'>\n                                    <i class='icon-bookmark' style='margin-right: 10px;'></i>Keywords\n                                </div>\n\n                                <div style='width: 100%;min-height: 100px;'>\n                                    <ul class=\"Client-Keywords-tags\">    \n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.show_keyword_array", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </ul>\n                                </div>                                            \n                            </div>\n\n\n\n\n                            <!--PROFILE CONTACT SECTION-->\n\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingContact", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                <table id=\"aside_contact\" class=\"\">\n                                    <tr>\n                                        <th>Contact:</th>\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </tr>\n                                    <tr>\n                                        <th>Category:</th>\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </tr>\n                                    <tr>\n                                        <th>Address:</th>\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </tr>\n\n                                    <tr>\n                                        <th>Phone:</th>\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(42, program42, data),fn:self.program(40, program40, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </tr>\n                                    <tr>\n                                        <th>Website:</th>\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(46, program46, data),fn:self.program(44, program44, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </tr>\n\n                                    <tr>\n\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(50, program50, data),fn:self.program(48, program48, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </tr>\n\n                                </table>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingContact", {hash:{},inverse:self.program(54, program54, data),fn:self.program(52, program52, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n                            <!--PROFILE HOURS SECTION-->\n\n                            <div class=\"aside-container\" style=\"border-top: 1px solid #fff;\">\n                                <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'><i class='icon-time' style='margin-right: 10px;'></i>Hours</div>\n\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},inverse:self.noop,fn:self.program(56, program56, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.hours", {hash:{},inverse:self.noop,fn:self.program(59, program59, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingTime", {hash:{},inverse:self.noop,fn:self.program(68, program68, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n\n                            <!--PROFILE GOOGLEMAP SECTION--> \n                            <div class=\"aside-container\" style=\"border-bottom:0 none;border-top: 1px solid #fff;\">\n                                <div id=\"google-map\"  style=\"width: 300px;height: 250px; border: 5px solid #fff;cursor: pointer\"  >\n                                    <div class=\"enlarge-map easing\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popUpGoogleMap", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-resize-full\"></k></div>\n                                    <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.profile_google_map")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 100%; height:auto;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popUpGoogleMap", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n                <!--LEFT COL ENDS -->\n\n                <!--RIGHT COL BEGINS -->\n                <td class=\"right_col\" width=\"70%\" valign=\"top\">\n                    <!--PROFILE PAGE MAIN PART-->\n\n                    <div class=\"profilemain\" style=\"display: inline-block; width: 100%;left: 0;right: 0; background-color: white;margin: auto; min-width: 553px;\">\n\n                        <div class=\"profile-main-content\" style=\"margin: 20px auto;width: 90%;\">\n\n                            <div class=\"main_aboutus\" style=\"\">\n\n                                <div class=\"editor-content\">\n                                    <div style=\"display: inline-block;\">\n                                        <p style='display: inline-block; font-size: 18px;'>\n                                            <i class='icon-group' style='margin-right: 10px;display: inline-block;'></i>About Us\n                                        </p>\n\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingAbout", {hash:{},inverse:self.program(72, program72, data),fn:self.program(70, program70, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n\n\n\n                            <div style=\"height: 40px; bottom: 0;width: 700px;position: absolute;margin-bottom: 15px;\">\n                                <ul class=\"locationandlinks\">\n\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "facebook", {hash:{},inverse:self.noop,fn:self.program(75, program75, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "twitter", {hash:{},inverse:self.noop,fn:self.program(77, program77, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "googleplus", {hash:{},inverse:self.noop,fn:self.program(79, program79, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "pinterest", {hash:{},inverse:self.noop,fn:self.program(81, program81, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "linkedin", {hash:{},inverse:self.noop,fn:self.program(83, program83, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "youtube", {hash:{},inverse:self.noop,fn:self.program(85, program85, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                </ul>\n                            </div>\n\n                        </div>\n\n                    </div>\n                </td>\n\n\n                <!--RIGHT COL ENDS -->\n            </tr>\n        </tbody>\n    </table>\n</div>\n</div>\n\n</div>\n\n\n<div class=\"back t-style-box\"  style='width: 100%;height:auto;  background-color:white; border-radius: 3px;border:none;position:absolute;top:0;left:0;;'>\n    <div style=\"position: relative; top: 0; width: 100%;height: 300px;overflow: hidden; border-radius: 3px 3px 0 0;\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.profile_hero_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>\n        <div style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute; width: 100%; height: 200px; bottom: 0;\">\n            <div style='font-size: 45px;color: white;font-weight: bold;line-height: 50px;margin: 40px  60px;bottom: 0;position: absolute;'>\n                <k class='icon-cogs'>&nbsp;</k>Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"tabbable\">\n        <div class=\"tabs-left\">\n            <ul class=\"nav nav-tabs easing\">\n                <li class=\"active\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab1\" data-toggle=\"tab\">Style up!</a></li>\n                <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab2\" data-toggle=\"tab\">General Settings</a></li>\n                <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab3\" data-toggle=\"tab\">Account Settings</a></li>\n                <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab7\" data-toggle=\"tab\">Social Link</a></li>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isAdmin", {hash:{},inverse:self.noop,fn:self.program(87, program87, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("   \n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isKeywordObjecttExist", {hash:{},inverse:self.noop,fn:self.program(89, program89, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n\n        <div class=\"tab-content easing\">\n            <div class=\"tab-pane active\" id=\"tab1\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Style up your profile!</div>\n\n                <div class='styleup_section'>\n                    <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Profile Picture", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                       <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                            <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Picture</span>\n                        </div>\n                    </a>\n                    <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                        <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                    </div>\n                </div>\n\n                <div class='styleup_section easing'>\n                    <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Profile Hero", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                       <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                            <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Hero</span>\n                        </div>\n                    </a>\n                    <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                        <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_hero_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                    </div>\n                </div>\n\n                <div class='styleup_section easing'>\n                    <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Background", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                       <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                            <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Background</span>\n                        </div>\n                    </a>\n                    <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                        <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_bg_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                    </div>\n                </div>\n\n\n\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n\n            <div class=\"tab-pane\" id=\"tab2\">\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">General Settings</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody class=\"profilesnew-table\" style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                        <tr>\n                            <td>Profile Name*: </td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_name"),
    'class': ("mustFill1"),
    'placeholder': ("Heritage Tiles NZ")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                                <div class=\"mustfull\" id=\"mustFill1\" style=\"display: none\">please fill in info... </div>\n                            </td>\n                        </tr>\n\n\n                        <tr>\n                            <td>Profile Contact:</td>\n                            <td>\n                                <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                    <div  style=\"margin: 0 5px 0;width: 48%;display: inline-block;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                    <div style=\"margin: 0;width: 48%;display: inline-block;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Physical Address:</td>\n                            <td>\n                                <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                    <div  style=\"margin: 0 5px 0;width: 48%;display: inline-block;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("address"),
    'placeholder': ("Street Address")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                    <div style=\"margin: 0;width: 48%;display: inline-block;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("suburb"),
    'placeholder': ("Suburb")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n\n                                </div>\n                            </td>\n                        </tr>\n\n\n                        <tr>\n                            <td>Contact Number:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_contact_number"),
    'placeholder': ("0987364531")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Website:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website"),
    'placeholder': ("yourdomain.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Website URL:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website_url"),
    'placeholder': ("http://www.yourdomain.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Profile Cover Text:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_cover_text"),
    'placeholder': ("Small profile description")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Gooogle Analytics Tracking ID:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_analytics_code"),
    'placeholder': ("UA-44575103-1")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn blue-btn flip-back' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n\n\n\n\n\n            <div class=\"tab-pane\" id=\"tab3\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Account Settings</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n\n                        <tr>\n                            <td>Country*:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("country"),
    'class': ("country"),
    'placeholder': ("New Zealand"),
    'value': ("New Zealand")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                                <div class=\"mustfull\" id=\"country\" style=\"display: none\">please fill in info... </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Region*:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("region"),
    'class': ("region"),
    'placeholder': ("Auckland")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                                <div class=\"mustfull\" id=\"region\" style=\"display: none\">please fill in info... </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Direct Enquiry Email*:</td>\n\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("contact_email"),
    'class': ("mustFill4"),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                                <div class=\"mustfull\" id=\"emailFormat4\" style=\"display: none\">not correct email format.....</div>\n                                <div class=\"mustfull\" id=\"mustFill4\" style=\"display: none\">please fill in info... </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Secondary  Email (cc):</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("secondary_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>DirectEnquiry Provide Email (bcc):</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("direct_enquiry_provide_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Editor*:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%; height: 100px;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("editors"),
    'class': ("mustFill6 no-resize"),
    'placeholder': ("Ironman@hubstar.com, CaptainAmerica@hubstar.com, hulk@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                                <div class=\"mustfill\" id=\"emailFormat6\" style=\"display: none\">not correct email format.....</div>\n                                <div class=\"mustfull\" id=\"mustFill6\" style=\"display: none\">please fill in info... </div>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n            <div class=\"tab-pane\" id=\"tab7\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Social Link</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>Facebook:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"facebook\" style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("facebook"),
    'placeholder': ("eg:www.facebook.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Twitter:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"twitter\" style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("twitter"),
    'placeholder': ("eg:www.twitter.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Google+:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"googleplus\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("googleplus"),
    'placeholder': ("eg:plus.google.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Pinterest:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"pinterest\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("pinterest"),
    'placeholder': ("eg:www.pinterest.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Linkedin:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"linkedin\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("linkedin"),
    'placeholder': ("eg:www.linkedin.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                        <tr>\n                            <td>Youtube:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"youtube\" style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("youtube"),
    'placeholder': ("eg:www.youtube.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n\n            <div class=\"tab-pane\" id=\"tab4\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Authority Settings</div>\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" class='profilesnew-table' style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n\n                        <tr>\n                            <td>Active*:</td>\n                            <td>\n                                <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectActiveDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                     <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectActiveDropdownContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                </div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isActiveDropdown", {hash:{},inverse:self.noop,fn:self.program(91, program91, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Deleted*:</td>\n\n                            <td>\n                                <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectDeleteDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                     <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectDeleteDropdownContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                </div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isDeleteDropdown", {hash:{},inverse:self.noop,fn:self.program(91, program91, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td> Package:</td>\n                            <td>\n                                <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectCategoryDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                     <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectCategoryDropdownContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                    <span class=\"caret\"></span>\n                                </div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isPackgetDropdown", {hash:{},inverse:self.noop,fn:self.program(91, program91, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            </td>\n                        </tr>\n                        <tr>\n                            <td> Creator:</td>\n                            <td>\n                                <div class=\"disabled-btn\" style=\"display: block; font-size: 12px;\">\n                                    <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profile_creator", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Boost:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Domains:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("domains"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                                <div class=\"mustfill\" id=\"emailFormat6\" style=\"display: none\">not correct email format.....</div>\n                                <div class=\"mustfull\" id=\"mustFill6\" style=\"display: none\">please fill in info... </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Keywords:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%; height:100px;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("keywords"),
    'class': ("no-resize"),
    'placeholder': ("* Please ensure you use a commer seperated list!!! ie: bathroom, kitchen, living room")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n            <div class=\"tab-pane\" id=\"tab5\">\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 5px;\">Keywords Settings</div>\n                <div style=\"font-size: 15px; font-weight: bold;color: #555; text-align: center;margin: 5px auto 20px;\">You have ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "keyword_left", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" keywords left out of  (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "keyword_num", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(").</div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.view.call(depth0, "HubStar.KeywordDropTargetView", {hash:{},inverse:self.noop,fn:self.program(93, program93, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                <div style=\"width: 700px; border: 1px solid #ddd;margin: 0 auto;border-radius: 3px;\">\n\n                    <div class=\"keyword-pool\" style=\"\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.keywords_array", {hash:{},inverse:self.noop,fn:self.program(97, program97, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n\n                    <div  style=\"margin: 0;width: 657px; height:50px;border-top: 1px dashed #aaa;overflow: hidden;\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("add_keywords"),
    'class': ("no-resize no-effect"),
    'placeholder': ("* Please ensure you use a commer seperated list!!! ie: bathroom, kitchen, living room")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div class=\"new-btn\" style=\"float: right;top: -50px;height: 51px;line-height: 50px;right: -1px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addKeywords", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Add</div>\n                </div>\n\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn blue-btn flip-back' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n            </div>\n\n\n            <div class=\"tab-pane\" id=\"fileuploader\">\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isPhotoUploadMode", {hash:{},inverse:self.noop,fn:self.program(101, program101, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(111, program111, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isPhotoEditingMode", {hash:{},inverse:self.noop,fn:self.program(113, program113, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.isFinished", {hash:{},inverse:self.noop,fn:self.program(120, program120, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.switchPhoto", {hash:{},inverse:self.program(124, program124, data),fn:self.program(122, program122, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(126, program126, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(128, program128, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.rateTime", {hash:{},inverse:self.noop,fn:self.program(130, program130, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "HubStar.isLogin", {hash:{},inverse:self.noop,fn:self.program(132, program132, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.popUpMap", {hash:{},inverse:self.noop,fn:self.program(134, program134, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["profileFollowers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"col1 box style-box t-style-box\" style=\"text-align: center; height: 200px;\">\n        <div class=\"usersobject-hover\">\n            <a href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "follower_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"><img style=\"width: 100%; height: 100%;cursor:pointer\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("follower_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /></a>\n        </div>\n        <div style=\"height:35px; line-height: 35px;\">\n            <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </span>\n        </div>\n    </div>\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["profileNew"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            ");
  return buffer;
  }

  data.buffer.push("<div class=\"profilegb\" style=\"background: #fff url('../images/texture.png') repeat;width: 100%;height: auto;\">\n    <div style=\"width: 100%; height: 1000px; overflow: hidden; position: fixed;\"> \n        <img src=\"../images/defaultbg/defaultbg6.jpg\" style=\"width: 100%; height:100%;\">\n    </div>\n\n    <div style=\"position: relative; height: 400px; padding: 150px 0; width: 650px; text-align: center; margin: auto;\">\n        <span style=\"color: white; text-shadow: 0px 0px 15px #000;font-size: 35px;line-height: 35px; position: relative;display: block;margin-bottom: 20px;\">\n            — <b>Welcome for joining Trendsideas!</b> —\n        </span>\n        <span style=\"color: white; text-shadow: 0px 0px 15px #000;font-size: 16px; \">Please scroll down and fill in the information in order to create a profile!</span>\n    </div>\n\n\n\n\n    <div class=\"aside-profilepic\" style=\"bottom: 120px;position: relative; margin: auto;z-index: 6;\">\n        <img src=\"../images/defaultpic/defaultpic1.jpg\" style=\"width: 200px; height:auto; display: block;margin: 10px auto; border:3px solid white;width: 200px; height:auto; display: block;margin: 20px auto; border:5px solid white;box-shadow: 0px 0px 15px #555;\"> \n    </div>\n\n    <div class=\"profilewrapper\" style=\"z-index: 5; position: relative; width: 980px;  margin: auto;background: white; box-shadow: 0px 0px 13px; border-radius: 3px; bottom: 240px;\">\n\n        <div class=\"profilecorpbanner\" style=\" height: 400px; border-radius: 3px 3px 0 0; position: relative; overflow: hidden;\">       \n            <img src=\"../images/defaultcover/defaultcover4.jpg\" style=\"width: 100%;\"/>\n            <div class=\"corpbanner_mask\" style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute;bottom:0; width: 100%; height: 200px;\"></div>\n        </div>\n\n\n\n        <div class=\"contactme-table easing\" style=\"width: 87%;margin: auto;padding-bottom: 50px;\">\n            <table style=\"padding: 0 20px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 40px 0 30px;\">\n                <tbody class=\"profilesnew-table\" style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                    <tr>\n                        <td>Profile Name*: </td>                     \n                        <td> \n                            <div style=\"display: block;\">\n                                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_name"),
    'class': ("mustFill1"),
    'placeholder': ("Heritage Tiles NZ")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n                            </div>\n                            <div class=\"mustfull\" id=\"mustFill1\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Profile URL*:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_url"),
    'class': ("mustFill2"),
    'placeholder': ("ie: heritage-tiles-nz * no spaces, no underscores, no special characters, all lower case")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </div>\n                            <div style=\"margin-bottom: 10px; color: #333;font-size: 13px;width: auto;display: inline-block;\">\n                                Note: Once the URL has been set, it cannot be changed nor undone.\n                            </div>\n                            <div class=\"mustfull\" id=\"mustFill2\" style=\"display: none\">please fill in info... </div>\n                            <div class=\"mustfull\" id=\"invalide\" style=\"display: none\">invalide characters... </div>\n                        </td> \n                    </tr>\n\n                    <tr>\n                        <td>boost*:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill7"),
    'placeholder': ("ie: number")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </div>\n                            <div class=\"mustfull\" id=\"number1\" style=\"display: none\">not a number....</div>\n                            <div class=\"mustfull\" id=\"mustFill7\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n\n\n                    <tr>\n                        <td>Profile Contact:</td>\n                        <td> \n                            <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                <div  style=\"margin: 0 5px 0;width: 48%;display: inline-block;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                                <div style=\"margin: 0;width: 48%;display: inline-block;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> Package:</td>\n                        <td> \n                            <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "package", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <span id=\"packgeSelection\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.packgeSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.packgetDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Category:</td>         \n                        <td>\n                            <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "category", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <span id=\"categorySelection\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.categorySelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.categoryDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                  \n                        \n                    </tr>\n\n\n                    <tr>\n                        <td>Physical Address:</td>\n                        <td> \n                            <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                <div  style=\"margin: 0 5px 0;width: 48%;display: inline-block;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("address"),
    'placeholder': ("Street Address")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                                <div style=\"margin: 0;width: 48%;display: inline-block;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("suburb"),
    'placeholder': ("Suburb")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>Contact Number:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_contact_number"),
    'placeholder': ("0987364531")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Website:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website"),
    'placeholder': ("yourdomain.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Website URL:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website_url"),
    'placeholder': ("http://www.yourdomain.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                </tbody>\n            </table>        \n\n            <div style=\"border-bottom: 1px dashed #aaa;height: 1px; width: 100%;\"></div>\n\n            <table style=\"padding: 0 20px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px 0;\">\n                <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                    <tr>\n                        <td>Client Name:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("client_name"),
    'placeholder': ("John Key")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Country*:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("country"),
    'class': ("country"),
    'placeholder': ("New Zealand"),
    'value': ("New Zealand")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>     \n                            <div class=\"mustfull\" id=\"country\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Region*:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("region"),
    'class': ("region"),
    'placeholder': ("Auckland")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                            <div class=\"mustfull\" id=\"region\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Owner*:</td>\n\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("owner"),
    'class': ("mustFill3"),
    'placeholder': ("John_Key@gg.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>   \n                            <div class=\"mustfull\" id=\"emailFormat3\" style=\"display: none\">not correct email format.....</div>\n                            <div class=\"mustfull\" id=\"mustFill3\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Direct Enquiry Email*:</td>\n\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("direct_enquiry_emails"),
    'class': ("mustFill4"),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>     \n                            <div class=\"mustfull\" id=\"emailFormat4\" style=\"display: none\">not correct email format.....</div>\n                            <div class=\"mustfull\" id=\"mustFill4\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Secondary  Email (cc):</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("secondary_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>DirectEnquiry Provide Email (bcc):</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("direct_enquiry_provide_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Creater*:</td>         \n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("creater"),
    'class': ("mustFill5"),
    'placeholder': ("clientname@their-domain.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                            <div class=\"mustfull\" id=\"emailFormat5\" style=\"display: none\">not correct email format.....</div>\n                            <div class=\"mustfull\" id=\"mustFill5\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Editor*:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%; height: 100px;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("editors"),
    'class': ("mustFill6 no-resize"),
    'placeholder': ("Ironman@hubstar.com, CaptainAmerica@hubstar.com, hulk@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>                   \n                            <div class=\"mustfill\" id=\"emailFormat6\" style=\"display: none\">not correct email format.....</div>\n                            <div class=\"mustfull\" id=\"mustFill6\" style=\"display: none\">please fill in info... </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Keywords:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%; height:100px;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("keywords"),
    'class': ("no-resize"),
    'placeholder': ("* Please ensure you use a commer seperated list!!! ie: bathroom, kitchen, living room")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Background:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_bg_url"),
    'class': ("background"),
    'placeholder': ("http://yourBackgroundImage")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            <img style=\"width:50px\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_bg_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Hero:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_hero_url"),
    'class': ("hero"),
    'placeholder': ("http://yourHeroImage")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            <img style=\"width:50px\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_hero_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Picture:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_pic_url"),
    'class': ("picture"),
    'placeholder': ("http://yourPictureImage")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            <img style=\"width:50px\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n\n                        </td>\n                    </tr>\n\n\n                </tbody>\n            </table>\n\n            <div  style=\"display: block; margin:15px auto; float: none; right: 0; bottom: 0;text-align: center;\">\n                <a class=\"new-btn green-btn\" href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 100px;\">Submit</a>\n            </div>\n\n        </div>\n\n\n\n\n    </div>\n\n\n\n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["profilePartners"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div class=\"box style-box t-style-box col2\" id=\"addNew\" style=\"z-index: 0\">    \n    <div id=\"uploadObject\" >\n         <div class=\"add-new-object-hoverarea easing\">\n\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box col2\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n          \n        </div>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\">\n    <div class=\"masonry-object\">            \n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "itemProfiles", "", options) : helperMissing.call(depth0, "render", "itemProfiles", "", options))));
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n</div>\n\n\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["profileVideos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div class=\"box style-box t-style-box col2\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "videoCreateModeSwitch", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"addNewVideo\" style=\"z-index: 0\">    \n     <div id=\"uploadVideoObject\" >\n        <div class=\"add-new-object-hoverarea easing\">\n\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box col2\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ItemView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "addVideo", options) : helperMissing.call(depth0, "render", "addVideo", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "videoesContent", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_video_create_mode", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["profiles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n<ul>\n    <li>\n        <h3> id | ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "profile", "", options) : helperMissing.call(depth0, "linkTo", "profile", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("   |   ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n    </li>\n</ul>\n\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("\n\n<h1> profiles</h1>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<div style=\"position: relative; width: 1000px; height:700px; margin: 30px 0; left: 100px;background-color: white;clear: both;\">\n\n\n\n\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["quickstart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<div style=\"width: 100px;\" class=\"new-btn green-btn\" >Skip</div>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n    <div style=\"position: absolute; top: 450px; left: 300px; width: 100px;\" class=\"new-btn green-btn\" >Get started!</div>\n    ");
  }

  data.buffer.push("\n<div style=\"width: 100%; height:300px; position: relative;background: #fff url('../images/defaultbg/defaultbg6.jpg') repeat;margin-bottom: -50px;\">\n    <P style=\"text-shadow: 0 0 10px #333; position: relative; font-size: 40px; font-weight: bold; top: 120px; width: 600px; color: white; left:0; right: 0; margin: 0 auto 10px; line-height: 25px; text-align: center;\">\n        All Finished! </p>\n    <P style=\"text-shadow: 0 0 10px #333; position: relative; font-size: 18px;  top: 130px; width: 600px; color: white; left:0; right: 0; margin: auto; line-height: 25px; text-align: center;\">\n        Scroll down for a quick intro to Trendsideas!\n    </P>\n\n    <div style=\"position: absolute; left: 0; right: 0; margin: auto; width: 100px; text-align: center; bottom: 45px;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "searchIndex", options) : helperMissing.call(depth0, "linkTo", "searchIndex", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n\n</div>\n\n\n\n\n<div id=\"discovery_search_bar_wrapper\" style=\"height: 500px; box-shadow: 0 0 15px #333;position: relative;margin: 0;border: none;\">\n    <div style=\"width: 100%; height: 100%; background-color: black; opacity: 0.05;\"></div>\n    <div style='position: absolute; top: 100px; margin:auto;width: 1200px;left: 0;right: 0;'>\n        <div style=\"width: 600px;border: 6px solid #fff;box-shadow: 0 0 10px #333;display: inline-block;margin-right: 80px;\">\n            <img src='../images/quickstart1.jpg'/>\n        </div>\n        <div style='display: inline-block;width: 500px;top: 25px;position: relative;'>\n            <span style='margin-bottom: 20px;display: block;font-size: 30px; vertical-align: top; color: white;font-weight: bold;line-height: 35px;text-shadow: -1px -1px 1px #aaa; text-shadow: 0px 0px 15px #555;'>\n                <i class='icon-search' style='margin-right: 25px;'></i>Search Engine\n            </span>\n            <span style=\"color: white; text-shadow: 0px 0px 15px #555; font-size: 16px; \">Search across 100,000 photos and articles. Simply enter your idea into the search area and inspirational ideas appear. Magic!</span>\n        </div>\n    </div>\n</div>\n\n<div style=\"width: 100%; height: 570px; background: #fff url('../images/defaultbg/defaultbg6.jpg') repeat; position: relative; top:30px;\">\n\n    <div style='position: absolute; top: 80px; margin:auto;width: 1200px;left: 0;right: 0;'>\n        <div style='display: inline-block;width: 500px;top: 25px;position: relative;margin: auto 80px auto 100px;'>\n            <span style='margin-bottom: 20px;display: block;font-size: 30px; vertical-align: top; color: white;font-weight: bold;line-height: 35px;text-shadow: -1px -1px 1px #aaa;'>\n                <i class='icon-eye-open' style='margin-right: 25px;'></i>Object view\n            </span>\n            <span style=\"color: white; text-shadow: 0px 0px 5px #aaa;font-size: 16px; \">Click on any photo to bring instantly to life in a full High-Definition clear image. To view related photos, use the navigation to view the entire collection to fully inspire your creativity.</span>\n        </div>\n        <div style=\"width: 400px;display: inline-block;\">\n            <img src='../images/quickstart2.png'/>\n        </div>\n    </div>\n\n</div>\n\n<div style=\"height: 500px; box-shadow: 0 0 15px #333;position: relative;margin: 0; background: #fff url('../images/texture.png') repeat; z-index: 1;\">\n    <div style='position: absolute; top: 90px; margin:auto;width: 1200px;left: 0;right: 0;'>\n        <div style=\"display: inline-block;margin-right: 80px;\">\n            <div style=\"border: 6px solid #fff;box-shadow: 0 0 5px #333;display: inline-block;\">\n                <img style=\"height: 300px;\" src=\"../images/welcomepage/bedroom.jpg\"/>\n            </div>\n            <div style=\" position: absolute; bottom: -90px; left: 140px;\">\n                <img src='../images/quickstart3.png'/>\n            </div>\n        </div>\n        <div style='display: inline-block;width: 500px;top: 25px;position: relative;left: 365px;'>\n            <span style='margin-bottom: 20px;display: block;font-size: 30px; vertical-align: top; color: #333;font-weight: bold;line-height: 35px;text-shadow: -1px -1px 1px #aaa; '>\n                <i class='icon-comments-alt' style='margin-right: 25px;'></i>Comment Feature\n            </span>\n            <span style=\"color: #333;  font-size: 16px; \">Got something you want to voice to the world? We would love to hear your voice. Comment to your hearts content!</span>\n        </div>\n    </div>\n\n\n</div>\n\n<div style=\"width: 100%; height: 570px; background: #fff url('../images/defaultbg/defaultbg6.jpg') repeat; position: relative; margin-bottom: -20px;\">\n\n\n    <div style='display: inline-block;width: 330px;top: 200px;position: absolute;left: 300px;z-index: 1;'>\n        <span style='margin-bottom: 20px;display: block;font-size: 30px; vertical-align: top; color: white;font-weight: bold;line-height: 35px;text-shadow: -1px -1px 1px #aaa;'>\n            <i class='icon-group' style='margin-right: 25px;'></i>Client Profiles\n        </span>\n        <span style=\"color: white; text-shadow: 0px 0px 5px #aaa;font-size: 16px; \">Found something amazing and want to know how to get it? Use our direct enquiry feature!</span>\n    </div>\n    <div style=\"width: 800px;display: inline-block;position: absolute;bottom: 0;border-radius: 3px 3px 0 0;overflow: hidden;box-shadow: 0 0 15px #aaa;right: 150px;\">\n        <img src='../images/quickstart4.png'/>\n    </div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "searchIndex", options) : helperMissing.call(depth0, "linkTo", "searchIndex", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n<div id=\"loading\" class=\"loading-visible\" >\n\n    <div id=\"blurringTextG\">\n        <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n            C</div>\n        <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n            t</div>\n        <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n            n</div>\n        <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n            g</div>\n        <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n            y</div>\n        <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n            o</div>\n        <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n            u</div>\n        <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n            r</div>\n        <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n            d</div>\n        <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n            s</div>\n        <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n            p</div>\n        <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n            c</div>\n        <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n            e</div>\n        <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n            &nbsp;\n        </div>\n        <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n            .</div>\n\n    </div>\n</div>\n\n");
  }

  data.buffer.push("<div class=\"Register-Page\" style=\"\">\n    <div style=\"width: 100%; height: 100%;position: absolute;min-height: 728px;min-width: 1100px;display: block;\">\n        <img src=\"../../../images/landingpagebg.jpg\" style=\"\"/>\n    </div>\n    <div style=\"width: 87%;margin: 40px auto;display: block;line-height: 45px;text-align: center;\">\n        <img class=\"logonew\" style=\"position: relative; height: 30px;margin: 8px;float: left;\" src=\"../../../images/landing-trends.png\">\n        <div style=\"position:relative; float:right;color: #fff; font-size:15px;font-weight: bold;\">\n            <span style=\"letter-spacing: 1px; margin: 0 0 0 10px;cursor:pointer;\" onClick=\"loginPane();\" id=\"login-btn\" class=\"white-text-hover easing\">LOGIN</span>\n            <span>&nbsp | &nbsp</span>\n            <a href=\"http://about.trendsideas.com\" target=\"blank\"><span class=\"white-text-hover easing\" style=\"letter-spacing: 1px; margin: 0 0 0 10px;\">HELP</span></a>\n        </div>\n\n        <div style=\"position: relative;  color: #fff; width: 500px; margin: auto;font-size: 13px; font-family: 'Montserrat', sans-serif; letter-spacing: 2px;opacity: .9;display: inline-block;\">\n            <span>83,000 IDEAS</span>\n            <span>&nbsp | &nbsp</span>\n            <span>210,000 PRODUCTS</span>\n            <span>&nbsp | &nbsp</span>\n            <span>650 SERVICES</span>\n        </div>\n\n    </div>\n\n\n    <img id=\"fadein-image\" style=\"position: relative;margin: 0 auto 40px; min-height: 150px;max-height: 256px; height: 20%;display: block; top: 5%;\" src=\"../../../images/landing-page-title(LOGO).png\">\n\n    <div id=\"profiles-main-container\" style=\"position: relative;width: 300px;text-align: center;top: 40px;margin: auto;display: block;left: 0;right: 0;\">   \n\n        <div id=\"click-register-social\" class=\"register-with easing social-active\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n            <i class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Register with social account</a>\n        </div>\n\n        <div id=\"social-link\" class=\"social-links-container\" style=\"display: block;\">\n\n            <div onclick=\"Facebook(650, 400);\"class=\"social-login-iconbox\">\n                <i  class=\"icon-facebook\"></i>\n            </div>\n\n            <div onclick=\"Twitter(650, 400);\" class=\"social-login-iconbox\">\n                <i class=\"icon-twitter\"></i>\n            </div>\n\n            <div onclick=\"Google(650, 400);\" class=\"social-login-iconbox\" style=\"\">\n                <i  class=\"icon-google-plus\"></i>\n            </div>\n\n            <div onclick=\"LinkedIn(650, 400);\" class=\"social-login-iconbox\">\n                <i  class=\"icon-linkedin\"></i>\n            </div>\n\n            <div onclick=\"Sina(650, 400);\" class=\"social-login-iconbox\">\n                <i class=\"icon-weibo\"></i>\n            </div>\n\n        </div>\n\n\n        <!--This is the email register section-->\n        <div>\n            <div id=\"click-register\" class=\"register-with easing register-clicker\">\n                <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Register with Email</a>\n            </div>\n\n            <div   id=\"register-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n                <div style=\"padding: 0 8px;position: relative;\">\n\n                    <div style=\"border-bottom: 1px solid #e3e3e3; border-top:1px solid #e3e3e3;\">\n                        <div id=\"first_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </div>\n\n                        <div id=\"last_name\" class=\"login-textfield\" style=\"width: 49%;display: inline-block;border: none\">\n                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n\n                    <div  id=\"email\" class=\"login-textfield\" style=\"\">\n                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'valueBinding': ("email"),
    'placeholder': ("Your Email")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div id=\"password\" class=\"login-textfield\"  style=\"\">\n                        ");
  hashContexts = {'type': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.RegisterEnterKeyTextFieldView", {hash:{
    'type': ("password"),
    'valueBinding': ("password"),
    'placeholder': ("Password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signUp", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" > Register</div>\n            </div>\n\n\n            <div id=\"register-with-email-step-2\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n                <div style=\"padding: 0 8px;position: relative;\">\n\n                    <div  class=\"login-textfield\" style=\"border-top:1px solid #e3e3e3;\">\n                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DoneEnterKeyTextFieldView", {hash:{
    'valueBinding': ("region"),
    'placeholder': ("Region")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div style=\"border-bottom: 1px solid #e3e3e3;\">\n                        <div class=\"login-select easing\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setmale", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                             Male\n                    </div>\n\n                    <div class=\"login-select easing\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setfemale", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         Female\n                </div>\n            </div>\n\n            <div class=\"login-textfield\"  style=\"margin: 0;width: 100%;height: 45px;line-height: 45px;border-bottom: 1px solid #e3e3e3;\">\n                ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DoneEnterKeyTextFieldView", {hash:{
    'valueBinding': ("age"),
    'placeholder': ("How old are you?")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"back-btn easing\" style=\"\" >Back</div>\n        <div class=\"register-btn easing register-btn-small\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "done", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Done</div>\n\n    </div>\n    <div id=\"missing-fields\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Please fill the mandatory fields.</p>\n    </div>\n    <div id=\"invalid-user-name-register\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address  you have entered is invalid.</p>\n    </div>\n    <div id=\"invalid-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Your password length should be between 6-40 characters long.</p>\n    </div>\n    <div id=\"email-in-use\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address you have entered is already in use.</p>\n    </div>\n    <div id=\"email-used-by-social\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address you have entered is already in use by a social account.</p>\n    </div>\n\n</div>\n<!--End of email register section-->\n\n<div id=\"user-login-pane\"  style=\"display:none;border-radius: 5px 5px 0 0;\">\n\n    <div id=\"social-login\" class=\"register-with easing\" style=\"border-radius: 5px 5px 0 0; border-bottom:1px solid #e3e3e3;\">\n        <i id=\"social-login\" class=\"icon-facebook\">&nbsp</i><a style=\"color: #888\"> Login with social account</a>\n    </div>\n    <div id=\"social-login-container\" class=\"social-links-container\" style=\"display: none;\">\n\n        <div onclick=\"Facebook(650, 400);\" class=\"social-login-iconbox\">\n            <i  class=\"icon-facebook\"></i>\n        </div>\n\n        <div onclick=\"Twitter(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-twitter\"></i>\n        </div>\n\n        <div onclick=\"Google(650, 400);\" class=\"social-login-iconbox\" >\n            <i  class=\"icon-google-plus\"></i>\n        </div>\n\n        <div onclick=\"LinkedIn(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-linkedin\"></i>\n        </div>\n\n        <div onclick=\"Sina(650, 400);\" class=\"social-login-iconbox\">\n            <i class=\"icon-weibo\"></i>\n        </div>\n\n    </div>\n\n\n    <div id=\"click-login\" class=\"register-with easing active-tab\" style=\"border-bottom: 1px solid #e3e3e3;\">\n        <i class=\"icon-envelope\">&nbsp </i><a style=\"color: #888\"> Login with Email</a>\n    </div>\n\n    <div id=\"login-with-email-drop-down\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;\">\n        <div style=\"padding: 0 8px;position: relative;\">\n\n\n            <div id=\"loginUsername\" class=\"login-textfield\" style=\"\">\n                ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'valueBinding': ("loginUsername"),
    'placeholder': ("Your Email")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n\n            <div id=\"loginPassword\" class=\"login-textfield\"  style=\"\">\n                ");
  hashContexts = {'type': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginEnterKeyTextFieldView", {hash:{
    'type': ("password"),
    'valueBinding': ("loginPassword"),
    'placeholder': ("Password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                <div class=\"hint--right hint--rounded\" data-hint=\"forgot password?\" style=\"cursor:pointer;float: right;margin-top: -40px;height: 30px;color:#888;\">\n                    <i class=\"icon-question-sign\">&nbsp</i>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"register-btn\" class=\"register-btn easing\" style=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Login</div>\n    </div>\n    <div id=\"user-forgot-password-pane\" style=\"width: 300px;margin: 0 auto ;background-color: #fff;border-radius: 0 0 5px 5px;display:none;\">\n        <div  id=\"resetPasswordEmail\"class=\"login-textfield\" style=\"padding: 0 10px\">\n            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("resetPasswordEmail"),
    'placeholder': ("Your Email")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <div class=\"back-btn easing\" style=\"\" >Back</div>\n        <div id='reset-btn' class=\"register-btn easing register-btn-small\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "emailSend", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Reset password</div>\n    </div>\n\n    <div class=\"black-tool-tip\"id=\"forgot-message-container\" style=\"display:none;\">\n        <p>  We've sent you an email with instructions to reset your password.</p><br/>\n        <p>Please make sure it didn't wind up in your Junk Mail. If you aren't receiving our password reset emails, see our\n            <a class=\"white-text-hover easing\" href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\" target=\"blank\" style=\"text-decoration: underline\"><b>help documents.</b></a>\n        </p>\n    </div>\n\n\n    <div id=\"invalid-user-name\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>The email address  you have entered is invalid.</p>\n    </div>\n    <div id=\"invalid-account-type\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to login with a social network account, please use the \"Login with social account\" link above.</p>\n    </div>\n    <div id=\"incorrect-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>Incorrect password.</p>\n    </div>\n    <div id=\"invalid-account-type-reset\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>You are attempting to reset your password with a social network account, please use the \"Login with social account\" link above.</p>\n    </div>\n    <div id=\"new-password\" class=\"black-tool-tip\" style=\"display:none;\">\n        <p>  We've sent you an email with instructions to reset your password.</p><br/>\n        <p>Please make sure it didn't wind up in your Junk Mail. If you aren't receiving our password reset emails, see our\n            <a class=\"white-text-hover easing\" href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\" target=\"blank\" style=\"text-decoration: underline\"><b>help documents.</b></a>\n        </p>\n    </div>\n</div>\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isWaiting", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<a href=\"http://about.trendsideas.com\" target=\"blank\">\n    <div class=\"learnmore-btn easing\" style=\"\">Learn more</div>\n</a>\n</div>\n\n</div>   \n<script>\n                /* NOTE:************\n                 * \n                 *   IF THIS BEHAVES ODDLY SIMPLY REMOVE/ADD \"stop()\" before all the animate functions EG\n                 *   $('#register-with-email-drop-down').stop().animate({height: 'toggle'});\n                 *   This javascript will need to be cleaned up via setting some of the elements as preset variables etc, once 100% tested.\n                 */\n\n\n\n                if (localStorage.userType === \"email\") {\n                    $('#login-btn').text('REGISTER');\n                    $('.black-tool-tip').css('display', 'none');\n                    $('#click-register-social').css('display', 'none');\n                    $('#click-register').css('display', 'none');\n                    $('#social-link').css('display', 'none');\n                    $('#login-with-email-drop-down').css('display', 'block');\n                    $('#social-login-container').css('display', 'none');\n                    $('#click-login').addClass('active-tab');\n                    $('#social-login').removeClass('social-active');\n                    $('#user-forgot-password-pane').css('display', 'none');\n                    $('#forgot-message-container').css('display', 'none');\n                    $('#invalid-username').css('display', 'none');\n\n                    $('#register-with-email-drop-down').css('display', 'none');\n                    $('#register-with-email-step-2').css('display', 'none');\n                    $('#user-login-pane').css('display', 'block');\n                    var loginState = true;\n                } else {\n                         loginState = false;\n                }\n                $(\"#social-login\").click(function() {\n\n                    $('#social-login').removeClass('social-active');\n                    $('#click-login').removeClass('active-tab');\n                    if ($('#social-login-container').css('display') === 'block') {\n                        $('#social-login-container').animate({height: 'toggle'});\n                    }\n                    /* LOGIN TAB:  hiding social login */\n\n                    if ($('#social-login-container').css('display') === 'none') {\n                        $('#social-login-container').animate({height: 'toggle'});\n                        $('#social-login').addClass('social-active');\n                        if ($('#login-with-email-drop-down').css('display') === 'block') {\n                            $('#login-with-email-drop-down').animate({height: 'toggle'});\n                        }\n                        if ($('#forgot-message-container').css('display') === 'block') {\n                            $('#forgot-message-container').animate({opacity: 'toggle'});\n                        }\n                        if ($('#invalid-username').css('display') === 'block') {\n                            $('#invalid-username').animate({opacity: 'toggle'});\n                        }\n                        if ($('#click-login').css('display') === 'none') {\n                            $('#click-login').animate({opacity: 'toggle'});\n                        }\n                        if ($('#user-forgot-password-pane').css('display') === 'block') {\n                            $('#user-forgot-password-pane').animate({height: 'toggle'});\n                        }\n\n                        /* LOGIN TAB:  showing social login */\n\n                    }\n                });\n                $(\"#click-login\").click(function() {\n                    if ($('#login-with-email-drop-down').css('display') === 'block' && $('#click-login').hasClass('active-tab')) {\n                        $('#click-login').removeClass('active-tab');\n\n                        $('#login-with-email-drop-down').animate({height: 'toggle'});\n\n                        if ($('#social-login-container').css('display') === 'block') {\n                            $('#social-login-container').animate({height: 'toggle'});\n                        }\n                    }\n                    /* LOGIN TAB: closing login with email */\n\n\n                    if ($('#login-with-email-drop-down').css('display') === 'none') {\n                        $('#social-login').removeClass('social-active');\n                        $('#click-login').addClass('active-tab');\n                        $('#login-with-email-drop-down').animate({height: 'toggle'});\n\n                        if ($('#social-login-container').css('display') === 'block') {\n                            $('#social-login-container').animate({height: 'toggle'});\n                        }\n                    } /* LOGIN TAB: clicking login*/\n                });\n                $('#loginPassword > div').click(function() {\n                    if ($('#login-with-email-drop-down').css('display')) {\n                        $('#click-login').removeClass('active-tab');\n\n                        $('#login-with-email-drop-down').animate({height: 'toggle'});\n                        $('#user-forgot-password-pane').animate({height: 'toggle'});\n\n                        if ($('#social-login-container').css('display') === 'block') {\n                            $('#social-login-container').animate({height: 'toggle'});\n\n                        }\n                        if ($('#forgot-message-container').css('display') === 'block') {\n                            $('#forgot-message-container').animate({opacity: 'toggle'});\n                        }\n                        if ($('#click-login').css('display') === 'block') {\n                            $('#click-login').animate({height: 'toggle'});\n\n                        }\n                    }\n                });\n                /*  LOGIN TAB: show forget password pane */\n\n                $('#user-forgot-password-pane .back-btn').click(function() {\n                    $('#user-forgot-password-pane').animate({height: 'toggle'});\n                    $('#login-with-email-drop-down').animate({height: 'toggle'});\n\n                    if ($('#social-login-container').css('display') === 'block') {\n                        $('#social-login-container').animate({height: 'toggle'});\n\n                    }\n\n\n                });\n                /* Back to login with email from forget password pane */\n\n\n                $('#reset-btn').click(function() {\n\n                });\n                /* forgot password function showing thank you message */\n\n\n                $('#user-forgot-password-pane .back-btn').click(function() {\n                    if ($('#forgot-message-container').css('display') === 'block') {\n                        $('#forgot-message-container').animate({opacity: 'toggle'});\n                    }\n                });\n                /* hiding thank you message when the user clicks the back btn */\n\n\n\n\n\n\n                $(\"#click-register-social\").click(function() {\n\n                    $('#click-register-social').removeClass('social-active');\n                    $('#click-register').removeClass('active-tab');\n                    if ($('#social-link').css('display') === 'block') {\n                        $('#social-link').animate({height: 'toggle'});\n                        if ($('#register-with-email-drop-down').css('display') === 'block') {\n                            $('#register-with-email-drop-down').animate({height: 'toggle'});\n                        }\n                        if ($('#register-with-email-step-2').css('display') === 'block') {\n                            $('#register-with-email-step-2').animate({height: 'toggle'});\n                        }\n                    }\n                    /* hiding social login */\n\n                    if ($('#social-link').css('display') === 'none') {\n                        $('#social-link').animate({height: 'toggle'});\n                        $('#click-register-social').addClass('social-active');\n                        if ($('#register-with-email-drop-down').css('display') === 'block') {\n                            $('#register-with-email-drop-down').animate({height: 'toggle'});\n                        }\n                        if ($('#register-with-email-step-2').css('display') === 'block') {\n                            $('#register-with-email-step-2').animate({height: 'toggle'});\n                        }\n                    }\n                    /*  REGISTER TAB: showing social login section*/\n\n                });\n\n\n\n                $('#register-with-email-step-2 .back-btn').click(function() {\n                    $('#register-with-email-step-2').removeClass('active-step');\n                    $('#register-with-email-step-2').animate({height: 'toggle'});\n                    $('#register-with-email-drop-down').animate({height: 'toggle'});\n                    checkSocial();\n                });\n                /* going back to step 1 function*/\n\n\n                $(\".register-clicker\").click(function() {\n\n                    if ($('#register-with-email-step-2').hasClass('active-step')) {\n                        //alert('closing step2');\n\n                        $('#social-link').animate({height: 'toggle'});\n                        $('#register-with-email-step-2').animate({height: 'toggle'});\n                        if ($('#click-register').hasClass('active-tab')) {\n                            $('#click-register').removeClass('active-tab');\n                            /* closing step */\n                        }\n\n                        else {\n                            $('#click-register').addClass('active-tab');\n                            /* opening step */\n                        }\n\n                    }\n                    /* closing/opening register section while on step 2 function */\n\n                    if ($('#register-with-email-drop-down').css('display') === 'block' && $('#click-register').hasClass('active-tab')) {\n                        //alert('closing step1');\n                        $('#click-register').removeClass('active-tab');\n                        $('#social-link').animate({height: 'toggle'});\n                        $('#register-with-email-drop-down').animate({height: 'toggle'});\n                        $('#click-register-social').addClass('social-active');\n                    }\n                    /* closing register section while on step 1 function */\n\n\n                    if ($('#register-with-email-drop-down').css('display') === 'none' && $('#register-with-email-step-2').hasClass('')) {\n                        //alert('opening step 1');\n                        $('#click-register-social').removeClass('social-active');\n                        $('#click-register').addClass('active-tab');\n                        $('#register-with-email-drop-down').animate({height: 'toggle'});\n                        checkSocial();\n                    }\n                    /* clicking register step 1 function*/\n\n                });\n\n\n                window.onload = changeImage();\n                function changeImage() {\n                    var image = document.getElementById('fadein-image');\n                    $('#fadein-image').fadeIn(\"slow\", function() {\n                        setTimeout(function() {\n                            $('#fadein-image').fadeOut(\"slow\", toImage2);\n                        }, 5000);\n                    });\n                    function toImage2() {\n                        image.src = \"../../../images/landing-page-title(IDEAS).png\";\n                        $('#fadein-image').fadeIn(\"slow\", function() {\n                            setTimeout(function() {\n                                $('#fadein-image').fadeOut(\"slow\", toImage3);\n                            }, 5000);\n                        });\n                    }\n                    function toImage3() {\n                        image.src = \"../../../images/landing-page-title(PRODUCTS).png\";\n                        $('#fadein-image').fadeIn(\"slow\", function() {\n                            setTimeout(function() {\n                                $('#fadein-image').fadeOut(\"slow\", toImage4);\n                            }, 5000);\n                        });\n                    }\n                    function toImage4() {\n                        image.src = \"../../../images/landing-page-title(SERVICES).png\";\n                        $('#fadein-image').fadeIn(\"slow\", function() {\n                            setTimeout(function() {\n                                $('#fadein-image').fadeOut(\"slow\", toImage1);\n                            }, 5000);\n                        });\n                    }\n                    function toImage1() {\n                        image.src = \"../../../images/landing-page-title(LOGO).png\";\n                        $('#fadein-image').fadeIn(\"slow\", function() {\n                            setTimeout(function() {\n                                $('#fadein-image').fadeOut(\"slow\", toImage2);\n                            }, 5000);\n                        });\n                    }\n                }\n                /* ideas, products, services img animation*/\n\n\n\n                function checkSocial() {\n                    if ($('#social-link').css('display') === 'block') {\n                        $('#social-link').animate({height: 'toggle'});\n                    }\n                    else {\n                    }\n                }\n                /* close social login checker function */\n\n\n                $('.login-select').click(function() {\n                    $('.login-select').removeClass('login-selected');\n                    $(this).addClass('login-selected');\n                });\n                /* select gender function */\n\n\n                function loginPane() {\n\n                    if (loginState === false) {\n                        $('#login-btn').text('REGISTER');\n                        $('.black-tool-tip').css('display', 'none');\n                        $('#click-register-social').css('display', 'none');\n                        $('#click-register').css('display', 'none');\n                        $('#social-link').css('display', 'none');\n                        $('#login-with-email-drop-down').css('display', 'block');\n                        $('#social-login-container').css('display', 'none');\n                        $('#click-login').addClass('active-tab');\n                        $('#social-login').removeClass('social-active');\n                        $('#user-forgot-password-pane').css('display', 'none');\n                        $('#forgot-message-container').css('display', 'none');\n                        $('#invalid-username').css('display', 'none');\n\n                        $('#register-with-email-drop-down').css('display', 'none');\n                        $('#register-with-email-step-2').css('display', 'none');\n                        $('#user-login-pane').css('display', 'block');\n                        loginState = true;\n                    }\n                    else {\n\n                        $('#login-btn').text('LOGIN');\n                        $('.black-tool-tip').css('display', 'none');\n                        $('#click-register-social').css('display', 'block');\n                        $('#social-link').css('display', 'block');\n                        $('#click-register').css('display', 'block');\n                        $('#click-register-social').addClass('social-active');\n                        $('#click-register').removeClass('active-tab');\n                        $('#register-with-email-step-2').removeClass('active-step');\n                        $('#user-login-pane').css('display', 'none');\n\n                        loginState = false;\n                    }\n                }\n\n\n\n\n\n\n\n\n\n\n\n\n                function DropDown(el) {\n                    this.dd = el;\n                    this.placeholder = this.dd.children('span');\n                    this.opts = this.dd.find('ul.dropdown > li');\n                    this.val = '';\n                    this.index = -1;\n                    this.initEvents();\n                }\n                DropDown.prototype = {\n                    initEvents: function() {\n                        var obj = this;\n\n                        obj.dd.on('click', function(event) {\n                            $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                            return false;\n                        });\n                        obj.opts.on('click', function() {\n                            var opt = $(this);\n                            obj.val = opt.text();\n                            obj.index = opt.index();\n                            obj.placeholder.text(obj.val);\n                        });\n                    },\n                    getValue: function() {\n                        return this.val;\n                    },\n                    getIndex: function() {\n                        return this.index;\n                    }\n                };\n\n                $(function() {\n\n                    var dd3 = new DropDown($('.dropdown_test_3'));\n                    $(document).click(function() {\n                        $('.wrapper-dropdown-3').removeClass('active');\n                    });\n\n                });\n\n                function setDomain() {\n\n                    var api_url = document.domain;\n                    var api_domain_start_pos = api_url.indexOf('.');\n                    var api_url = api_url.slice(api_domain_start_pos);\n\n                    return api_url;\n                }\n\n\n                function Facebook(popupWidth, popupHeight) {\n\n                    var left = (screen.width / 2) - (popupWidth / 2);\n                    var top = (screen.height / 2) - (popupHeight / 2);\n                    var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Facebook#_=_\";\n                    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                    if (window.focus) {\n                        newwindow.focus();\n                    }\n                    localStorage.userType = \"facebook\";\n                }\n                function Yahoo(popupWidth, popupHeight) {\n                    var left = (screen.width / 2) - (popupWidth / 2);\n                    var top = (screen.height / 2) - (popupHeight / 2);\n                    var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Yahoo\";\n                    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                    if (window.focus) {\n                        newwindow.focus();\n                    }\n                    localStorage.userType = \"yahoo\";\n                }\n                function QQ(popupWidth, popupHeight) {\n                    var left = (screen.width / 2) - (popupWidth / 2);\n                    var top = (screen.height / 2) - (popupHeight / 2);\n                    var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=QQ\";\n                    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                    if (window.focus) {\n                        newwindow.focus();\n                    }\n                    localStorage.userType = \"qq\";\n                }\n                function Twitter(popupWidth, popupHeight) {\n                    var left = (screen.width / 2) - (popupWidth / 2);\n                    var top = (screen.height / 2) - (popupHeight / 2);\n                    var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Twitter\";\n                    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                    if (window.focus) {\n                        newwindow.focus();\n                    }\n                    localStorage.userType = \"twitter\";\n                }\n                function Sina(popupWidth, popupHeight) {\n                    var left = (screen.width / 2) - (popupWidth / 2);\n                    var top = (screen.height / 2) - (popupHeight / 2);\n                    var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Sina\";\n                    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                    if (window.focus) {\n                        newwindow.focus();\n                    }\n                    localStorage.userType = \"sina\";\n                }\n                function LinkedIn(popupWidth, popupHeight) {\n                    var left = (screen.width / 2) - (popupWidth / 2);\n                    var top = (screen.height / 2) - (popupHeight / 2);\n                    var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=LinkedIn\";\n                    newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                    if (window.focus) {\n                        newwindow.focus();\n                    }\n                    localStorage.userType = \"linkedIn\";\n                }\n                function Google(popupWidth, popupHeight) {\n                    var left = (screen.width / 2) - (popupWidth / 2);\n                    var top = (screen.height / 2) - (popupHeight / 2);\n                    var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Google\";\n                    newwindow = window.open(api_url, 'name', 'height=' + popupHeight * 1.5 + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                    if (window.focus) {\n                        newwindow.focus();\n                    }\n                    localStorage.userType = \"google\";\n                }\n\n</script>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["review"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n<div class=\"blur_black\"></div>\n\n<div style=\"margin:0 auto; padding: 0 0 15px 15px;\">\n\n\n    <div class=\"Add-review\" style=\"\">\n        <div style=\"width: 100%;height: 50px; line-height: 52px;padding: 0 23px;\">\n            <a >\n                <img class=\"profilepic_comment\"  style=\"margin: 9px 15px 0 0;float: left;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("this.review_user_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n            </a>\n            <div style=\"font-size: 18px;font-weight: bold;color: #555;\"><span>Review on</span><span>     ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profileName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></div>\n        </div>\n\n        <div style=\"background-color: #f4f6f8; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; height: 50px; line-height: 50px; width: 100%\">\n\n            <span id=\"post-star\" style=\"overflow: auto; position: relative; margin: 12px 0px 12px 20px; display: inline-block;\"></span>\n            <div id=\"post-star-rating\" class=\"contactmeicon easing\" style=\"width: 35px; height: 35px;line-height: 33px;text-align: center;font-weight: bold;font-size: 13px;border: 1px solid #ddd;vertical-align: top;margin: 6px;box-shadow: initial;background-color: #fff;background-image: none;cursor: default;\"></div>\n\n        </div>\n\n        <div id =\"\" style=\"margin: 5px auto; padding: 0 15px;height: 200px;\">\n            ");
  hashContexts = {'id': depth0,'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'id': "STRING",'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'id': ("reviewPost"),
    'valueBinding': ("review_content"),
    'class': ("no-resize no-effect"),
    'placeholder': ("review time")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n\n        <div class=\"\" style=\"height: 41px;position: absolute;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n            <div  class=\"message-btn easing\"  style=\"width: 50%;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n            <div class=\"message-btn easing\" style=\"width: 50%;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewPost", "model.id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n        </div>\n\n\n    </div>\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["reviewList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" \n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "reviewListSingle", "", options) : helperMissing.call(depth0, "render", "reviewListSingle", "", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<div class=\"review-list-container\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.reviews", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 10);\n        \n    });  \n         \n</script>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["reviewListSingle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"new-btn\" style=\"float: left; font-size: 13px;margin-right: 5px;\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReview", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-trash\"></i></div>                 \n    <div class=\"new-btn\" style=\"float: left; font-size: 13px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editReview", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-pencil\"></i></div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" \n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "reviewReplyListSingle", "", options) : helperMissing.call(depth0, "render", "reviewReplyListSingle", "", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("  \n\n<div class=\"blur_black\"></div>\n\n<div class=\"\" style=\"height: 80px;width: 80px;position: fixed;border: 3px solid #f3f3f3;border-radius: 50%;overflow: hidden;box-shadow: 0 0 5px #aaa;top: 80px;left: 0px;right: 470px;z-index: 12;margin: 0 auto;display: block;\">\n    <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.review_user_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"\"/>\n</div>\n\n<div class=\"Add-review\" style=\"overflow:hidden\">\n\n    <div id=\"review_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"background-color: #f3f3f3;padding: 5px 5px 10px 70px;border-bottom: 1px solid #ddd;\">\n        <div ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n            <div class=\"namentime_position\" style=\"margin: 0;float: left;\">\n                <a class=\"comment-username\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  >\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push(" </span>\n                </div>\n            </div>\n\n            <div style=\"position: absolute; right: 0; margin: 7px;\"><span class=\"starsview\" ><span style=\"width:");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("px;\"></span></span></div>\n        </div>\n    </div>\n    <div id =\"\" style=\"margin: 20px auto 5px; padding: 0 15px;height: 200px;\">\n        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.review_content"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Please edit review here")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  \n    </div>\n\n    <div class=\"\" style=\"height: 41px;position: absolute;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n        <div  class=\"message-btn easing\"  style=\"width: 50%;border-right: 1px solid #ddd;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelReview", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        <div class=\"message-btn easing\" style=\"width: 50%;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveReview", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n    </div>\n</div>\n\n");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"review-list box\" style=\"\">\n    <div class=\"\" style=\"height: 80px;width: 80px;position: relative;border: 3px solid #f3f3f3;border-radius: 50%;overflow: hidden;box-shadow: 0 0 5px #aaa;top: -5px;float: left;z-index: 1\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.review_user_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"\"/>\n    </div>\n\n    <div  id=\"review_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"class=\"review-list-content easing\" style=\"\">\n        <div style=\"background-color: #f3f3f3;padding: 5px 5px 10px 70px;border-bottom: 1px solid #ddd;\">\n            <div ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", "content", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"comment-namentime\" style=\"display: block;position: relative;height: 35px;\">\n                <div class=\"namentime_position\" style=\"margin: 0;float: left;\">\n                    <a class=\"comment-username\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  >\n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </a>\n                    <div class=\"posttime-container\">\n                        <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push(" </span>\n                    </div>\n                </div>\n\n                <div style=\"position: absolute; right: 0; margin: 7px;\"><span class=\"starsview\" ><span style=\"width:");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("px;\"></span></span></div>\n            </div>\n        </div>\n\n        <div  style=\"background-color: #fff; padding: 10px 40px; font-size: 13px;\">\n\n            <div id=\"review_content_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upContent", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 390px; max-height:100px;line-height:20px; position: relative; display: inline-block; overflow: hidden; \">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  </div>   \n\n            <span ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", "content", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" role=\"button\" class=\"hover-opacity\" style=\"position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:inline-block;\"  id=\"down_button_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  ><k class=\"icon-caret-down\">&nbsp;</k>more</span>\n            <span ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upContent", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" role=\"button\" class=\"hover-opacity\" style=\"position: relative;  font-size: 13px; color: #555;margin: 10px 0; display:none;\"  id=\"up_button_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ><k class=\"icon-caret-up\">&nbsp;</k>collapse</span>\n\n\n            <div style=\"position: relative; display: block;margin: 15px 0 10px;height: 20px;width: 100%;\">\n                <div id=\"review_like_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  style=\"float: right; font-size: 13px;\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     <i class=\"icon-thumbs-up-alt\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp</i>\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_like_count", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                <div id=\"review_share_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  style=\"float: right; font-size: 13px;margin-right: 5px;\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", "model.review_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     <i class=\"icon-share\" >&nbsp</i></div>          \n                <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"width: 150px;  padding: 0;right: 0px;left: 220px;position:absolute;\">\n                    <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n                </li>\n                <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n            </li>\n            <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", "model", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n        </li>\n    </ul>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.getUser", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n</div>  \n\n<!--the following comment-frame is used to show the reply box for the second level reply-->\n<div id=\"reviewReplyData_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n\n    <div class=\"reply-comment-frame\"  style=\"\" id=\"ReplyData_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n        <div style=\"margin:0 auto; padding: 0 45px 15px 0;\">\n            <a  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "controller.currentUser.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                <img class=\"profilepic_comment\"  style=\"float: right; margin: 4px -10px 0 0; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                <div class='user-reply-angle-before'></div>\n                <div class='user-reply-angle-after'></div>\n            </a>\n\n            <div class=\"reply-comment-container\" style=\"width: 378px;height: 32px;\">\n                <div style=\"margin: 0;width: 345px; height: 30px;float: left;\">\n\n                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.replyReviewContent"),
    'class': ("no-resize"),
    'placeholder': ("What's up!")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                                   \n                </div>\n                <div style=\"float: right;height: 34px;position: relative;\">\n                    <div id=\"ok_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"message-btn easing\" style='width: 30px;'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addReviewReply", "model.review_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <k  class='icon-ok'></k>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div id=\"view-comments_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showOneReview", "model.review_id", "viewReply", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"hover-opacity\" style=\"display:block; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;\">\n         view comments ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.reply_reviews.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n         <i class=\"icon-caret-down\">&nbsp;</i>\n    </div>\n    <div  id=\"reply_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  style=\"display:none; max-height:200px;height:auto;\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "model.reply_reviews", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" \n\n    </div>\n\n    <div id=\"up-comments_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upComments", "model.review_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"hover-opacity\" style=\"display: none; background-color: #f3f3f3;text-align: center;font-size: 11px;font-weight: bold;border-top: 1px solid #ddd;border-radius: 0 0 3px 3px;\">\n        collapse comments ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.reply_reviews.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        <i class=\"icon-caret-up\">&nbsp;</i>\n    </div>\n\n</div>\n\n\n</div>\n</div>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.review_is_edit", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["reviewReplyListSingle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("  \n\n<div class=\"reply-comment-frame\"  style=\"padding: 10px 35px;border-bottom: 1px solid #ddd;\">\n    <div style=\"margin:0 auto; padding: 0 40px 0 0;\">\n        <a  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n            <img class=\"profilepic_comment\" style=\"float: right; margin: 4px -40px 0 0; margin-top: 0;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.review_photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n            <div class='user-reply-angle-before'></div>\n            <div class='user-reply-angle-after'></div>\n        </a>\n\n        <div class=\"reply-comment-container\" style=\"width: 378px;height: 32px;\">\n            <div style=\"margin: 0;width: 345px; height: 30px;float: left;\">\n                ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.review_msg"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Please edit reply here")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                      \n            </div>\n            <div style=\"float: right;height: 34px;position: relative;\">\n                <div class=\"message-btn easing\" style='width: 30px;'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelReviewReply", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     <div class=\"message-btn easing\" style='width: 30px;'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveReviewReply", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     <k class='icon-ok'></k>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"reply_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_reply_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"your-relpy\" style=\"padding: 10px 75px 10px 35px;\"");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "replyView", "model.review_reply_id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model.review_userself", {hash:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <a class=\"your-relpy_profilepic\" style=\"left: 6.5%; right: initial;\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n        <img class=\"profilepic_comment\"  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.review_photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    </a>\n\n    <div style=\"\">\n        <div class=\"comment-namentime\" style=\"text-align: left;\">\n            <div class=\"namentime_position\" style=\"\" >        \n                <a class=\"comment-username\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                \n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"comment-content\" style=\"text-align: left;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br>\n\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.getUser", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div style=\"float: right;bottom: 50px;position: relative;left: 15px;font-size: 12px;\">\n            <div class=\"hint--bottom hint--rounded\" style=\"left: 40px;right: initial;\" data-hint=\"Delete\" \"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReviewReply", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-trash\"></i></div>                 \n            <div class=\"hint--bottom hint--rounded\" style=\"left: 40px;right: initial;\" data-hint=\"Edit\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editReviewReply", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-pencil\"></i></div>\n        </div>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <a class=\"your-relpy_profilepic\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n        <img class=\"profilepic_comment\"  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.review_photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n    </a> \n    <div style=\"\">\n        <div class=\"comment-namentime\">\n            <div class=\"namentime_position\">        \n                <a class=\"comment-username\"  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.review_user_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_user_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                \n                </a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "model.review_time_stamp", options) : helperMissing.call(depth0, "date", "model.review_time_stamp", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"comment-content\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.review_msg", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br>\n\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.getUser", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div style=\"float: left;bottom: 50px;position: relative;left: 35px;font-size: 12px;\">\n            <div class=\"hint--bottom hint--rounded\" style=\"right: 40px;left: initial;\" data-hint=\"Delete\" \"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeReviewReply", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-trash\"></i></div>                 \n            <div class=\"hint--bottom hint--rounded\" style=\"right: 40px;left: initial;\" data-hint=\"Edit\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editReviewReply", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-pencil\"></i></div>\n        </div>\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.review_enableToEdit", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n\n\n</script>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["showAlbum"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n<div class=\"collection_tab1\" style=\"bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:none; position: absolute;z-index: 5; width: 100%; opacity: .9;\">\n    <div style=\"background-color: #333;color: #fff;font-weight: bold;padding: 13px 0 13px 40px;width: 100%;position: relative;display: -moz-inline-box;display: inline-block;\">\n        All photos\n        <div style=\"display: inline-block;\">( ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ) </div>\n    </div>\n    <div class=\"exit\">\n        <div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hide", "selectedPhoto.id", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <i class=\"icon-remove\"></i>\n        </div>\n    </div>\n    <div style=\"margin: 15px;overflow: auto;height: 225px;width: 100%;\"> \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        <img class=\"photo_original_style\" ");
  hashContexts = {'id': depth0,'src': depth0};
  hashTypes = {'id': "STRING",'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id"),
    'src': ("photo_image_thumbnail_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectImage", "id", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"collection_tab\" style=\"bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:none; position: absolute;z-index: 5; width: 100%; opacity: .9;\">\n    <div style=\"background-color: #333;color: #fff;font-weight: bold;padding: 13px 0 13px 40px;width: 100%;position: relative;display: -moz-inline-box;display: inline-block;\">\n        All photos\n        <div style=\"display: inline-block;\">( ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ) </div>\n    </div>\n    <div class=\"exit\">\n        <div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hide", "selectedPhoto.id", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <i class=\"icon-remove\"></i>\n        </div>\n    </div>\n    <div style=\"margin: 15px;overflow: auto;height: 225px;width: 100%;\"> \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "HubStar.what", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["singleFileUploader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n        <p style=\"font-weight: bold;\">\n            Drag and drop.\n        </p>\n    </div>\n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n        Choose \n        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> </div> \n    </div> \n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n   \n    </div>\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        <span class=\"new-btn\" >Close</span>\n        <span class=\"new-btn green-btn\" >Upload</span> \n    </div>\n</div>\n");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["status"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n        <div id='welcome_message' style='margin-bottom: 25px;'>\n            <h2>Welcome!!</h2>\n            <p>Please login to create your ideas space.</p>\n\n        </div>\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n  \n\n        <div id=\"afterLogin\">\n            <div class=\"profilepic-container\" style=\"margin:0 0 10px;\">\n                <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("controller.myUserProfile")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.user.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic_user\"/></a>                              \n            </div>\n            <p> Hi ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.user.display_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </p>\n            <h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.response", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n\n          \n        </div>\n        ");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"masonry-object\" style=\"background-color: #427fed; color: white;\">\n\n\n\n\n\n\n    <div style=\"padding: 20px;text-align: center;\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.islogin", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n\n\n\n\n\n\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["talk"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div style='background-color: rgba(0,0,0,.2);max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;'>\n        <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n        <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;;\">\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("\n<div  class=\"blur_black\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reviewCancel", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp;</div>\n\n<div  style=\"z-index: 11; position: fixed; width: 545px; margin: 10px auto; border-radius:5px; overflow: hidden; background-color: rgb(255, 255, 255); top: 25%; left: 0px;display: block;right: 0;box-shadow: 0 0 5px #fff;\">\n    <div style=\"background-color: #f3f3f3; width:100%;height: 70px; border-bottom: 1px solid #ddd;padding: 0 20px;\">\n        <div style=\"line-height: 70px;float: left;\">\n            <a><img class=\"profilepic_comment\"  style=\"float: left; margin: 12px; box-shadow: 0 0 3px #888;border: 1px solid #f3f3f3;width: 45px;height: 45px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.owner_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> </a>\n        </div>       \n        <div style=\"padding: 16px; float: left\">\n            <div style=\"color: #555;font-size: 18px;line-height: 20px;font-weight: bold;\">Message to: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "displayName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>\n            <div style=\"font-size: 12px;color: #555;line-height: 20px;\">This conversation will be store in your message center.</div>\n        </div>\n    </div>\n\n\n\n\n\n\n    <div style=\"width: 100%;padding: 20px 6.5%;margin: 0 auto;overflow: hidden;\">\n        <div   style=\"margin: 0;width: 100%; height:200px;\">\n            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize no-effect"),
    'placeholder': ("What's up!")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                          \n        </div>         \n    </div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n\n\n\n    <div class=\"\" style=\"height: 41px;position: relative;border-top: 1px solid #ddd;bottom: 0;width: 100%;\">\n        <div  class=\"message-btn easing\"  style=\"width: 33%;height: 40px;line-height: 40px;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelTalk", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-remove\">&nbsp;</k>Cancel</div>\n        <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd; border-left: 1px solid #ddd; width: 34%; height: 40px; line-height: 40px;\"><k class='icon-picture'>&nbsp;</k>Add Photo\n            <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"message-btn easing\" style=\"width: 33%;height: 40px;line-height: 40px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-ok'>&nbsp;</k>Post</div>\n    </div>\n\n\n\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["test"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div style=\"height: 500px; background-color: grey\"></div>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "controller", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<p>aaaaaaaaaaaaaaaaaaa</p>\n\n<br />\n\n\n\n\n<!--DIRECT EMAIL-->\n\n\n<div>\n    <div style=\"position: relative;background: #fff; width: 600px; height: auto; margin: auto; box-shadow: 0px 0px 8px #555; border-radius: 3px 3px 0 0;\">\n        <div style=\"width:600px; height:132px;overflow:hidden; margin-bottom:20px;\">\n            <img src=\"https://s3-ap-southeast-2.amazonaws.com/develop.devbox/header.jpg\"/>\n        </div>\n        <table style=\"padding: 0 80px 0 130px; width: 100%;  display: table;border-collapse: separate;border-spacing: 4px;color: #666; font-family: Arial; margin-bottom: 5px; font-size: 13px; line-height: 16px;\">\n            <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                <tr>\n                    <td>Project Category:</td>\n                    <td> \n                        <div style=\"display: block;\">\n                            Bathrooms\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Project Timeframe:</td>\n                    <td> \n                        <div style=\"display: block;\">\n                            1-2 months\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Project Budget:</td>\n                    <td> \n                        <div style=\"display: block;\">\n                            Less than 5k\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Project Experience:</td>\n                    <td>\n                        <div style=\"display: block;\">\n                            First Time \n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>I want help in:</td>\n                    <td>\n                        <div style=\"display: block;\">\n                            Appliances                           \n                        </div>\n                        <div style=\"display: block;\">\n                            Design                            \n                        </div>\n                        <div style=\"display: block;\">\n                            Products                          \n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>   \n        <div style=\"width:350px;margin: auto;padding: 20px 0;\">\n            <div style=\"color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;\">Subject:  </div>\n            <div style=\"color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;\">From:  </div>\n            <div style=\"color: #555;font-family:Arial;margin-bottom: 5px;font-size: 15px;line-height:16px;font-weight: bold;\">To:  </div>\n            <div style=\"color:#666;font-family:Arial;margin:0;font-size:11px;line-height:16px\">\n                WQNMLGB~~~~!Yeah\n            </div> \n        </div>\n\n        <div style=\"width:600px; height: 20px;overflow:hidden;\">\n            <img src=\"https://s3-ap-southeast-2.amazonaws.com/develop.devbox/contactus-botbar.png\"/>\n        </div>\n\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--USER SOCIAL LINK-->\n\n\n<div style=\"font-size: 13px;line-height: 20px;margin: 5px auto;color: #888; overflow: hidden;height: 50px; text-overflow: ellipsis;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n<ul class=\"locationandlinks\">\n    <li class=\"location_li\" style=\"background: none;padding: 0;\"><i class=\"icon-map-marker\"> </i>Auckland</li> \n    <li><a href=\"#\" target=\"_blank\">www.you.com</a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-twitter\"></i></a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-facebook\"></i></a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-google-plus\"></i></a></li>\n    <li><a href=\"#\" target=\"_blank\"><i class=\"icon-linkedin\"></i></a></li>\n</ul>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["uploadResource"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div style=\"height: 500px; background-color: grey\"></div>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "controller", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n\n<br />\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div id=\"change_profile\" class=\"changeuserprofilepic easing hint--right hint--rounded\" data-hint=\"Choose a profile picture\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userPhotoEditButton", "User Picture", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     <k class=\"icon-edit\"></k>         \n                </div>  \n\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn follow-btn\" data-toggle=\"modal\" style=\"\">Follow</div>\n\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.follow_status", {hash:{},inverse:self.program(11, program11, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <div class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "talkToPeople", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-comments\" ></k></div>\n                ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.following_status", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green follow-btn\" data-toggle=\"modal\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-exchange' >&nbsp; </i> Following</div>\n                        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green follow-btn\" data-toggle=\"modal\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n                        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.following_status", {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn follow-btn\" data-toggle=\"modal\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-ok' >&nbsp; </i> Follow</div>\n                        ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn follow-btn\" data-toggle=\"modal\" style=\"\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n                        ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "talk", options) : helperMissing.call(depth0, "render", "talk", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n                    <div class=\"edit-btn hint--rounded hint--bottom\" style=\"height: 20px;line-height: 20px;margin:0;\" data-hint=\"Edit Interest\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.interests", "controller.interest", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <i class=\"icon-plus edit-btn\" style=\"font-size:13px;margin:0;padding:9px 10px;\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterestsUp", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                    </div>\n                    ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                    <div class=\"interest-textarea\" style=\"\">\n                        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("interests"),
    'id': (""),
    'class': ("add-interests")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                    <div class=\"interest-insert-hint\" style=\"\">\n                        Do not use plural comma together or left a comma at the end of string, the right example is \"Kitchen,Bathroom,Roof,Entrance\"\n                    </div>\n                    <div style=\"text-align: center;right: 15px;position: relative;\">\n                        <div class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.interest", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i style=\"position:absolute;top:0;left:0;width:33px;height:26px;line-height:26px;text-align:center;\" class=\"icon-remove\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterestsUp", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i></div>\n                        <div class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.interest", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i style=\"position:absolute;top:0;left:0;width:33px;height:26px;line-height:26px;text-align:center;\" class=\"icon-ok icon-white\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterestsUp", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i></div>\n                    </div>\n\n\n                    ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.selected_topics", {hash:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("     \n\n                    ");
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                    <div class='hashtags' >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "interests", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n\n                    ");
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<i class='remove-hashtages' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteTopic", "interests", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">x</i>");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.UserPhotoEditView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n        ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div  id=\"flip-front\" class='blue-btn new-btn hint--left hint--rounded edit-dashboard-btn' style=\"display: block; margin: 10px;position: absolute;top: 0;right: 0;\" data-hint=\"Dashboard\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardButton", "User Cover", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">  \n\n                      <i class=\"icon-cogs\" ></i>\n                </div>\n                ");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                    <div  style=\"height: 100px;border-radius: 3px;\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("about_me"),
    'class': ("no-resize"),
    'placeholder': ("Say something interesting about yourself (Maximum 600 characters).")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n\n                    <div style=\"right: 40px;bottom: -49px;position: absolute;\">\n                        <div class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.aboutMe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                        <div class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.aboutMe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    </div>\n                    ");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <div style=\"display: block;\" >");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "about_me", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                    ");
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"edit-btn hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "controller.about_me", "controller.aboutMe", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <i class=\"icon-edit\"></i>\n                    </div>\n                    ");
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "facebook", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-facebook\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "twitter", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-twitter\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "googleplus", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-google-plus\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "pinterest", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-pinterest\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program43(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "linkedin", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-linkedin\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"location_li\">\n                        <a href=\"#\" target=\"_blank\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "socialLink", "youtube", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp <k class=\"icon-youtube-play\"> </k></a>\n                    </li>\n                    ");
  return buffer;
  }

function program47(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.UserEditView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n        ");
  return buffer;
  }

function program49(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n \n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "masonryCollectionItems", options) : helperMissing.call(depth0, "render", "masonryCollectionItems", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program53(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  data.buffer.push("<div style=\"width:100%; height:80px; display:block;\"></div>\n<div class=\"user-board\">\n    <div class=\"user-board_left style-box\">\n        <div id=\"user-photo_left\">\n            <div class=\"user-profilepic-container\" id=\"profile-picture\"> \n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.model.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 180px;height: 180px;\"/>\n            </div>\n\n            <div style=\"margin: 30px auto 20px;display: block; text-align: center;\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUserSelf", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("           \n            </div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isTalk", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <div id=\"show_interest\" >\n\n                <div class=\"show-interest easing\">\n                    <div style=\"font-weight: bold;line-height: 20px; color: #777; font-size: 17px;margin-bottom: 5px; display:inline-block;\">INTERESTS</div>\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <k id=\"interest_btn\" class=\"icon-double-angle-up unvisible\"  style=\" float: right;padding: 7px;\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInterests", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></k>\n\n                </div>\n\n                <div class=\"interesttags-container\" style=\"\">\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingInterest", {hash:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_Photoclick", {hash:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div  class=\"user-board_right style-box\" >\n\n\n        <div id=\"user-board_right_front\" >\n            <div class=\"user-cover\">\n\n                <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.cover_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div style=\"font-size: 26px;font-weight: bold; line-height: 30px;  color: white;position: absolute;top: 245px;margin:0 30px;text-shadow: 0 0 10px #777;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "display_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            </div>\n\n\n\n\n\n            <div class=\"editor-content\" style=\"height: 140px; padding: 10px 20px;display: inline-block;position: relative;width: 100%;\">\n                <div style=\"font-size:15px;line-height: 20px;margin: 5px 20px;color: #888;\">  \n\n\n                    <p style='margin-bottom: 5px;display: inline-block; font-size: 18px;padding:0'>\n                        <i class='icon-user' style='margin-right: 10px;display: inline-block;'></i>About me\n                    </p>\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingAbout", {hash:{},inverse:self.program(32, program32, data),fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n\n\n\n\n            <div style=\"margin: 10px 30px; width:600px; height: 40px; position:relative; overflow: hidden;\">\n                <ul class=\"locationandlinks\">\n                    <li>\n                        <span class=\"locationIcon\"><k class=\"icon-map-marker\"></k></span>\n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n                    </li>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "facebook", {hash:{},inverse:self.noop,fn:self.program(35, program35, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "twitter", {hash:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "googleplus", {hash:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "pinterest", {hash:{},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "linkedin", {hash:{},inverse:self.noop,fn:self.program(43, program43, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "youtube", {hash:{},inverse:self.noop,fn:self.program(45, program45, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n                </ul>\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_click", {hash:{},inverse:self.noop,fn:self.program(47, program47, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n    </div>\n\n</div>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.switchPhoto", {hash:{},inverse:self.program(51, program51, data),fn:self.program(49, program49, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(53, program53, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["userEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"tabbable\">\n        <div class=\"tabs-left\">\n            <ul class=\"nav nav-tabs easing\">\n                <li class=\"active\" ><a href=\"#tab1\" data-toggle=\"tab\">CHANGE COVER</a></li>\n                <li class=\"easing\" ><a href=\"#tab2\" data-toggle=\"tab\">GENERAL SETTINGS</a></li>\n                <li class=\"easing\" ><a href=\"#tab3\" data-toggle=\"tab\">SOCIAL LINKS</a></li>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "identifier", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <li class=\"easing\" ><a href=\"#tab5\" data-toggle=\"tab\">NOTIFICATION</a></li>\n            </ul>\n        </div>\n        <div class=\"tab-content easing\">\n\n            <div class=\"tab-pane active\" id=\"tab1\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold\">CHANGE COVER</div>\n\n                <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:block;height: 345px;width: 100%;top: 0;background-color: #fff; padding: 0;overflow: hidden;position: relative;\">\n\n                    <div class='styleup_uploadbox easing' style=\"height: 335px; width: 95%;position: absolute;\">\n                        <i class='icon-upload icon-3x' style=\"width: 40px;margin: auto;display: block;position: relative;top: 110px;\" ></i>\n                        <span style=\"display: block; position: relative;line-height: 30px;font-size: 30px;top: 115px; cursor: default;  font-weight: bold\">Drag & drop</span>\n                        <span style='font-size: 16px;display: block;line-height: 25px;top: 210px;position: relative;'> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.RequiredImageSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n\n\n                        <div style=\"position: absolute;  vertical-align: top; text-align: center;width: 100%;height: 333px;top: 0;line-height: 333px;background-color: Rgba(30,30,30,.2);\">\n                            <div>\n                                <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 170px; max-height: 170px;\">\n                                <div id='uploadStyleImg' style=\"display: none;\">\n                                    <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                                </div>\n                            </div>\n                            <div style=\"margin: 2px auto 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px; display: none\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newStyleImageName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n\n                        </div>\n\n                    </div>\n                </div>\n\n\n                <div style=\"text-align: center;height: 75px;line-height: 85px;bottom: 0;position: relative;width: 98%;\">\n                    <div class=\"new-btn blue-btn\" style=\"margin: 28px 20px; width: 83px; float: left;\">\n                        <k class='icon-upload'> &nbsp;Choose\n                            <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    </div>\n\n                    <div style=\"margin: auto;width: 250px;float: right;\">\n\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isCrop", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUpload", {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                        <span class='new-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n\n\n                </div>\n\n\n            </div>\n\n\n\n\n            <div class=\"tab-pane\" id=\"tab2\">\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">GENERAL SETTINGS</div>\n\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" class='profilesnew-table' style=\"padding-right: 147px; font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin:10px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>User Name:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"displayName\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("display_name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Name*:</td>\n                            <td>\n                                <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                    <div  id=\"first_name\" style=\"margin: 0;width: 49%;display: inline-block;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                    <div id=\"last_name\" style=\"margin: 0;width: 49%;display: inline-block;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Email:</td>\n                            <td>\n                                <div style=\"display: block;\">\n\n                                    <div  id=\"email\" class=\"disabled-btn\" style=\"margin: 0;width: 100%;top:0\">\n                                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "email", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n\n\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>About me:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"about_me\" style=\"margin: 0;width: 100%; height:100px;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("about_me"),
    'class': ("no-resize"),
    'placeholder': ("Say something interesting about yourself (Maximum 600 characters).")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td> Location:</td>\n                            <td>\n                                <div style=\"display: block;\" >\n                                    <div id=\"location\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("location")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin:10px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn flip-back' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n\n            <div class=\"tab-pane\" id=\"tab3\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">SOCIAL LINKS</div>\n\n                <table class='profilesnew-table' style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 10px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>Facebook:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"facebook\" style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("facebook"),
    'placeholder': ("eg:www.facebook.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Twitter:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"twitter\" style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("twitter"),
    'placeholder': ("eg:www.twitter.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Google+:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"googleplus\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("googleplus"),
    'placeholder': ("eg:plus.google.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Pinterest:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"pinterest\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("pinterest"),
    'placeholder': ("eg:www.pinterest.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Linkedin:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"linkedin\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("linkedin"),
    'placeholder': ("eg:www.linkedin.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n\n                        <tr>\n                            <td>Youtube:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div  id=\"youtube\" style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("youtube"),
    'placeholder': ("eg:www.youtube.com")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveSociallinkUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "identifier", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            <div class=\"tab-pane\" id=\"tab5\">\n\n\n\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">NOTIFICATION</div>\n                <div style=\"margin: 10px 40px;\"> \n                    <span style=\"font-size: 15px; font-weight: bold; color: #555;\">How You Get Notifications:</span>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.subcateMethod", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n                <hr>\n                <div style=\"margin: 10px 40px 30px\"> \n                    <span style=\"font-size: 15px; font-weight: bold; color: #555;\">What You Get Notified About:</span>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.subcate", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n\n\n                <div style=\"right: 0;margin:10px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveNotification", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</span>\n                    <span class='new-btn flip-back' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>\n\n        </div>\n\n\n    </div>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n                <li class=\"easing\" ><a href=\"#tab4\" data-toggle=\"tab\">SECURITY</a></li>\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-cut '> &nbsp;</k>Crop</span>\n                        ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" ><k class='icon-cut'> &nbsp;</k>Crop</span>\n                        ");
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <span id=\"photoUploadbtn\" class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePhotoUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-save '> &nbsp;</k>Upload</span>\n                        ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n                        <span  class=\"disabled-btn\" ><k class='icon-save '> &nbsp;</k>Upload</span>\n                        ");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            <div class=\"tab-pane\" id=\"tab4\">\n                <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">SECURITY</div>\n\n                <table class='profilesnew-table' style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                        <tr>\n                            <td>Old Password:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div id=\"password\"  style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("password"),
    'value': ("oldpassword"),
    'placeholder': ("Your old password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>New Password:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("password"),
    'value': ("newpassword"),
    'placeholder': ("Minmum 6 characters ")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>Repeat New Password:</td>\n                            <td>\n                                <div style=\"display: block;\">\n                                    <div   style=\"margin: 0;width: 100%;\">\n                                        ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'type': ("password"),
    'value': ("repeatnew"),
    'placeholder': ("Minmum 6 characters")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n\n                <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                    <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePassword", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                    <span class='new-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                </div>\n\n            </div>          \n            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"checkbox-container\" style=\"width: 100%;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkedMethodAction", "list_id", "", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                        <input type=\"checkbox\" ");
  hashContexts = {'id': depth0,'checked': depth0};
  hashTypes = {'id': "STRING",'checked': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("list_id"),
    'checked': ("isSelection")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"css-checkbox\"   >\n                        <label for=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" name=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"css-label lite-blue-check ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category_topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n                    </li>\n                    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"checkbox-container\" style=\"width: 100%;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkedAction", "list_id", "", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                        <input type=\"checkbox\" ");
  hashContexts = {'id': depth0,'checked': depth0};
  hashTypes = {'id': "STRING",'checked': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("list_id"),
    'checked': ("isSelection")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"css-checkbox\"   >\n                        <label for=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" name=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"css-label lite-blue-check ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "list_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "category_topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label>\n                    </li>\n                    ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div class='' style='position:relative;height: 65px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n        <span style=\"position: relative;display: inline-block;font-size: 40px; vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n        <span style=\"position: relative;width: 87%;display: inline-block;margin: 0 15px;\">\n            <span style='font-size: 20px;display: block;line-height: 25px;font-weight: bold'>Crop your picture now!</span>\n            <span style='font-size: 15px;display: block;line-height: 15px;'> Image Size: <span id=\"log\"></span> </span>  \n        </span>\n    </div>\n\n\n    <div id=\"crop-container\" style=\"width: 600px;height: 350px;margin: 10px auto; text-align: center\">\n        <div class=\"contr\"></div>\n        <canvas id=\"panel\" class=\"crop-canvas\" style=\"height: 100%;width: auto;margin: 0 auto; \"><img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ></canvas>\n\n    </div>\n    <div style=\"margin:20px auto;width: 150px;\">\n\n        <span class=\"new-btn green-btn \" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePhotoUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ><k class='icon-save'> &nbsp;Save</span>\n        <span class='new-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"user-board_right_back\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPhotoUploadMode", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPhotoEditingMode", {hash:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["userFollowers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n\n<div class=\"col1 box style-box t-style-box\" style=\"text-align: center;\">\n    <div style=\"position:relative;height: 100px;overflow: hidden;line-height: 0;\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>\n    </div>\n\n    <div class=\"user-profilepic-container\" style=\"position:absolute; top: 50px;margin: 0 auto;width: 100px;height: 100px;border: 2px solid #f3f3f3;left: 0;right: 0;\">\n        <a class='radius-circle' href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  >\n<!--");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToUserFollowerRoute", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("-->\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 100px; height: 100px;\" />\n        </a>\n    </div>\n\n    <div style=\"position:relative; height:35px; line-height: 35px;margin: 50px auto 5px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </span>\n    </div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isUserSelf", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li><k class=\"icon-eye-open\">&nbsp;</k>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "collections_size", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li class=\"location_li\"><k class=\"icon-circle-blank\">&nbsp;</k>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "follower_size", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n        </ul>\n    </div>\n\n</div>\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\">Follow</div>\n\n    ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "follow_status", {hash:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-exchange' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-ok' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentUser", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<!--\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\n");
  return buffer;
  
});

Ember.TEMPLATES["userFollowings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n\n\n\n<div class=\" box col1 style-box t-style-box\" style=\"text-align: center; \">\n    <div style=\"position:relative;height: 100px;overflow: hidden;line-height: 0;\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>\n    </div>\n\n    <!--TAGS-->\n\n    <div class=\"object-tags-box\">\n        <div class=\"object-tags\">\n            <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n            <div class=\"tags easing\">\n                <div class=\"object-tpye\">\n                    <i class=\"icon-group\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--END TAGS-->\n\n    <div class=\"masonry-object_profilepic\" style=\"cursor:pointer;width: 100px;position: relative;top: -50px;line-height: 100px;display: block;\" >\n\n        <a class='radius-circle' href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n            <img class=\"easing\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>   \n        </a>\n\n    </div>\n    <div style=\"position:relative;  line-height: 18px;margin: -40px auto 5px;width: 150px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </span>\n    </div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "follow_status", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li class=\"location_li\" style=\"padding: 0 5px;\"><k class=\"icon-eye-open\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "collections_size", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </k></li>\n            <li class=\"location_li\" style=\"padding: 0 5px;\"><k class=\"icon-group\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "partner_size", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</k></li>\n            <li class=\"location_li\" style=\"padding: 0 5px;\"><k class=\"icon-circle-blank\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "follower_size", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</k></li>\n        </ul>\n    </div>\n\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n\n\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n<div class=\" box col1 style-box t-style-box\" style=\"text-align: center; \">\n    <div style=\"position:relative;height: 100px;overflow: hidden;line-height: 0;\">\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>\n    </div>\n    <div class=\"user-profilepic-container\" style=\"position:absolute; top: 50px;margin: 0 auto;width: 100px;height: 100px;border: 2px solid #f3f3f3;left: 0;right: 0;\">\n\n        <a class='radius-circle' href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width: 100px; height: 100px;\"/>\n        </a>\n\n    </div>\n    <div style=\"position:relative; height:35px; line-height: 35px;margin: 50px auto 5px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </span>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isUserSelf", {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div style=\"position:relative; background-color: #f3f3f3; height: 25px; width:100%;margin-top: 10px;\">\n        <ul class=\"locationandlinks\" style=\"font-size: 12px;height: 20px;margin: 2px auto;width: 100%;line-height: 10px;\">\n            <li><k class=\"icon-eye-open\">&nbsp;</k>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "collections_size", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n            <li class=\"location_li\"><k class=\"icon-circle-blank\">&nbsp;</k>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "follower_size", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n        </ul>\n    </div>\n\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("    \n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\">Follow</div>            \n    ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "follow_status", {hash:{},inverse:self.program(15, program15, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},inverse:self.program(4, program4, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"disabled-btn disabled-green\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-exchange' >&nbsp; </i> Following</div>\n    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "following_status", {hash:{},inverse:self.program(6, program6, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin: 15px auto;width: 100px;display: block;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisUser", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-ok' >&nbsp; </i> Follow</div>\n    ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentProfile", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentUser", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["userMessage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div style='max-width: 100%;max-height: 100px;padding: 10px 12px;text-align: center;border-top: 1px solid #ddd;'>\n                    <div class='remove-comment-photo easing' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removePic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                    <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 100%; max-height: 80px;\">\n                </div>\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"message-btn easing\" style=''");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" data-hint=\"Post\"><k class='icon-ok'>&nbsp;</k>Post </div>\n                    ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"message-btn-x easing\" style='' ><i class=\"spinner\">&nbsp;</i>Posting </div>\n                    ");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    <div id=\"message_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "message_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">          \n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "message", "", options) : helperMissing.call(depth0, "render", "message", "", options))));
  data.buffer.push("\n    </div>\n\n    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<!--Add new post-->\n\n<div class=\"box col2\" style=\"background-color: #fafafa\">\n\n    <div  style=\"width: 98%;padding: 15px 10px;margin: 0 auto;overflow: hidden;border-bottom: 1px solid #ddd;\">\n        <div style=\"margin:0 auto; padding: 0 0 0 50px;\">\n            <a>\n                <img class=\"profilepic_comment\"  style=\"width: 45px; height: 45px;float: left; margin: 4px 0 0 -50px; margin-top: 0; \" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                <div class='user-says-angle-before' style=\"left: 49px;\"></div>\n                <div class='user-says-angle-after' style=\"left: 47px;\"></div>\n            </a>\n\n            <div class=\"\" style=\"width: 100%; border-radius: 2px;border: 1px solid #ddd;background-color: #fff;\">\n                <div   style=\"margin: 0;width: 100%; height:100px;\">\n                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("messageContent"),
    'class': ("no-resize no-effect"),
    'placeholder': ("Write something...")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("                                          \n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isUploadPhoto", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"\" style=\"height: 30px;position: relative;border-top: 1px solid #ddd;top: -1px;\">\n                    <div  class=\"message-btn easing\" style=\" border-right: 1px solid #ddd;\" data-hint=\"Add Photo\"><k class='icon-picture'>&nbsp;</k>Add Photo\n                        <div style=\"opacity:0;position: relative;height:30px;top:-30px;overflow: hidden;\"> \n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </div>\n                    </div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPosting", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<div  id=\"content_message\" class='Message-Board_comment-container' style=\" \">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "contentMsg", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reloadItems');\n        }, 200);\n    });\n</script>\n<!--existing post-->\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["userPhotoEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:block;height: 420px;top: 0;background-color: #fff; padding: 0;overflow: hidden\">\n\n        <div class='styleup_uploadbox easing' style=\" height: 400px;width: 93%;position: absolute;\">\n            <i class='icon-upload icon-3x' style=\"width: 40px;margin: auto;display: block;position: relative;top: 125px;\" ></i>\n            <span style=\"display: block; position: relative;line-height: 30px;font-size: 20px;top: 140px; cursor: default;  font-weight: bold;line-height: 25px;\">Drag & Drop Your Profile Picture Here</span>\n            <span style='font-size: 16px;display: block;line-height: 18px;position: relative;top: 240px;'> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.RequiredImageSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n\n\n            <div style=\"position: absolute;  vertical-align: top; text-align: center;width: 100%;height: 398px;top: 0;line-height: 345px;background-color: Rgba(30,30,30,.2);\">\n                <div>\n                    <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 170px; max-height: 170px;\">\n                    <div id='uploadStyleImg' style=\"display: none;\">\n                        <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                    </div>\n                </div>\n                <div style=\"margin: 2px auto 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px; display: none\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newStyleImageName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <div style=\"text-align: center;height: 75px;line-height: 85px;background-color: #f3f3f3;bottom: 0;position: absolute;width: 100%;\">\n        <div class=\"new-btn blue-btn\" style=\"margin: 28px 10px; width: 83px; float: left;\">\n            <k class='icon-upload'> &nbsp;Choose \n                <div style=\"opacity:0;position: absolute;top: 0px;left: 0;width: 85px;overflow: hidden;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </div>\n\n\n        <div style=\"margin: auto 10px;width: 150px;float: right;\">\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isCrop", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n            <span class='new-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userPhotoEditBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-user'> &nbsp;</k>Back</span>\n\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <span id=\"photoUploadbtn\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-cut '> &nbsp;</k>Crop</span>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n            <span  class=\"disabled-btn\" ><k class='icon-cut '> &nbsp;</k>Crop</span>\n            ");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div class='' style='position:relative;height: 85px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n        <span style=\"position: relative;display: inline-block;font-size: 40px;margin: 10px 0;vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n        <span style=\"position: relative;display: inline-block;margin: 15px 10px;font-size: 20px;line-height: 25px;width: 75%;\">Crop your picture now!</span>\n    </div>\n\n    <div id=\"crop-container\" style=\"width: 300px; height: 350px;text-align: center; margin: 10px auto\">\n        <canvas id=\"panel\" style=\"max-width: 300px; max-height: 350px;width: auto; height: auto;\"><img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ></canvas>\n    </div>\n    <div style=\"margin: auto;width: 150px;\">\n        <span class=\"new-btn green-btn \" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "savePhotoUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ><k class='icon-save'> &nbsp;</k>Save</span>\n        <span class='new-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userPhotoEditBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"user-photo_left-back\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPhotoUploadMode", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPhotoEditingMode", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n <ul>\n     <li>\n         <h3>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "user", "", options) : helperMissing.call(depth0, "linkTo", "user", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "display_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n     </li>\n </ul>\n \n \n ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("\n<h1>USERS</h1>\n\n<h1>USERS</h1>\n\n\n ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["video"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "addCollection", options) : helperMissing.call(depth0, "render", "addCollection", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                <div class=\"article-title\">     ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.object_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                </div>\n                \n                <div class=\"article-text\">     ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.object_description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n\n\n\n                ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_article_video", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div class='hint--left hint--rounded' data-hint='Edit Photo Info' style=\"position: absolute;font-size: 15px;right: 10px;margin: 1px;\">\n                        <i class=\"icon-edit\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingPhotoMegaData", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                    </div>\n                    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.megaResouce.object_title"),
    'id': (""),
    'class': ("edit_photo-titile_field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n                ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.megaResouce.object_description"),
    'id': (""),
    'class': ("edit_photo-caption_field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n\n                <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n\n                    <div  type=\"button\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n                    <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n                </div>\n\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                <div class=\"addcommnetbox-container\" id=\"commentBox\" style=\"display: none\">\n                    <div style=\"margin:0 auto; padding: 0 0 15px 38px;\">\n                        <a> \n                            <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -38px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                        </a>\n\n                        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'id': ("AddRecord"),
    'class': ("comment-insert-field"),
    'placeholder': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("   \n                        <span class=\"\" style=\"margin-top: 7px;float: right;\">\n                            <div  class=\"new-btn\"");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n                            <div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Post</div>\n                        </span>\n\n                    </div>\n                </div>\n                ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isEdit", {hash:{},inverse:self.program(17, program17, data),fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                <div class=\"comment-item\">\n\n                    <div class=\"comment-position\">\n                        <a class=\"profilepic-comment-container\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                            <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                        </a>\n                        <div style=\"\">\n                            <div class=\"comment-namentime\">\n                                <div class=\"namentime_position\">\n                                    <a class=\"comment-username\"  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </a>\n                                    <div class=\"posttime-container\">\n                                        <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>                  \n                                    </div>\n                                </div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "getUser", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            </div>\n\n                            <div class=\"comment-content\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                                <!-- for +someone into the conversation-->\n                                <span>\n                                    <span></span>\n                                    <a></a>\n                                </span>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <span class=\"edit-comment easing\">\n                                    <i class=\"icon-trash\"  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>                 \n                                    <i class=\"icon-pencil\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateComment", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                                </span>\n                                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "editComment", "", options) : helperMissing.call(depth0, "render", "editComment", "", options))));
  data.buffer.push("   \n                ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loginModal", options) : helperMissing.call(depth0, "render", "loginModal", options))));
  data.buffer.push("       \n\n");
  return buffer;
  }

  data.buffer.push("<div class=\"objectview-wrapper\" >\n\n    <div class=\"objectview-left\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"top-controlbar easing\" >\n\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Save this photo to your own collection.\" style=\"position:relative;margin: 0 5px;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                <i class=\"icon-save\"></i><span class=\"pretooltip\">Save</span>\n            </div>\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Share this photo to other social platform.\" style=\"position:relative;margin: 0 5px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdownPhotoSetting", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <i class=\"icon-share-alt\"></i><span class=\"pretooltip\">Share</span> \n            </div>\n            <ul class=\"hideClass edit-object-ul\" id=\"dropdown_id_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"width: 150px; margin: 0 auto; left: 70px;padding: 0\">\n                <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <k class=\"icon-facebook\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Facebook</span>\n            </li>\n            <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n        <k class=\"icon-twitter\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Twitter</span>\n        </li>\n        <li class='ite' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n    <k class=\"icon-pinterest\" style=\"font-size: 16px;  margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Pinterest</span>\n    </li>\n    <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gpShare", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n<k class=\"icon-google-plus\" style=\"font-size: 16px; margin: 0px 5px;position: absolute\"></k><span style=\"margin-left: 2.5em\">Google+</span>\n</li>\n</ul>\n\n<script type=\"text/javascript\">\n    (function(d) {\n        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');\n        p.type = 'text/javascript';\n        p.async = true;\n        p.src = '//assets.pinterest.com/js/pinit.js';\n        f.parentNode.insertBefore(p, f);\n    }(document));\n</script>\n\n<div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n    <i class=\"icon-remove\"></i>\n</div>\n</div>\n\n<div class=\"mainfeature\">\n\n    <!--<div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ></div>-->\n    <!--    <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ></div>-->\n    <div class=\"mainfeature_object\" style=\"z-index: 0;text-align: center;line-height: 70;\">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "controller.video_iframe_code", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n</div>\n<!--THIS IS THE ALBUM BOX-->\n\n\n\n<!--THIS IS THE ALBUM BOX-->\n\n<div class=\"bottom-controlbar easing\" >\n    <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n    <div class=\"icon-on-black\"  style=\"display:inline-block; vertical-align: top; position:relative; left:44px;\">\n        <i class=\"icon-arrow-left\"></i>\n    </div>\n    <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px; display:inline-block; vertical-align: top; position:relative;\" >\n        <i class=\"icon-th\"></i>\n    </div>\n    <div class=\"icon-on-black\" style=\"left: 44px;position: relative;vertical-align: top;display: inline-block;\" >\n        <i class=\"icon-arrow-right\"></i>\n    </div>\n    <div class=\"text-on-black\" style=\"left: 88px; top:0;position: relative;display: inline-block;vertical-align: top;\">  </div>\n</div>\n\n\n\n\n</div>\n\n\n<div class=\"objectview-right\">\n\n    <!-- USER SECTION -->\n    <div style=\"cursor: pointer;\">\n        <div class=\"object-poster easing\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div class=\"profilepic-container\">\n                <a class=\"profilepic\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.megaResouce.owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /></a>      \n\n            </div>\n            <div class=\"poster_user\" >\n\n                <a class=\"poster-name\" href=\"#/profiles/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "megaResouce.owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "controller.megaResouce.created", options) : helperMissing.call(depth0, "date", "controller.megaResouce.created", options))));
  data.buffer.push(" </span>\n\n            </div>        \n            <div class=\"contactmebtn hint--left hint--rounded easing\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                <a class=\"contactmeicon easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-envelope easing\" style=\"font-size: 18px;\"></i></a>\n            </div>\n        </div>\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.contact", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n    </div>\n\n    <!-- OBJECT DESCRIBTION SECTION -->\n    <div>\n        <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setTitleTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div class=\"collapes-title_inner\">\n                About\n            </div>\n\n\n\n            <div class=\"dropdownicon\" >\n                <i class=\"icon-angle-down\"></i>\n            </div>\n        </div>\n\n\n\n\n        <div class=\"collapes-container\"   id=\"article_action\" style=\"display:block\">\n            <div  class=\"collapes-container_inner\">\n\n\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controller.enableToEdit", {hash:{},inverse:self.program(9, program9, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <!-- OBJECT DISCUSSION SECTION -->\n\n    <div>\n        <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <div class=\"collapes-title_inner\">\n                Discussion\n            </div>\n            <div class=\"dropdownicon\">\n                <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n            </div>      \n        </div>\n\n\n\n        <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n            <div class=\"collapes-container_inner\">\n\n                <div class=\"show-comment\">\n                    <div class=\"show-comment_container\">\n                        <span class=\"show-comment_inner\">\n                            <span class=\"comment-amount\" >  </span>\n                            <span class=\"comment-amount\" > comments   </span> \n                        </span>\n                    </div>\n\n                    <div class=\"object-like\" style=\"\"></div>\n                    <div class=\"object-save\" style=\"\"></div>\n                </div>\n                <div class=\"addcommnetbox\" role=\"button\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"addcommetBut\" >\n                    add comment...\n                </div>\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.megaResouce.comments", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n            </div>\n        </div>\n\n    </div>\n\n\n\n</div>\n\n\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "HubStar.checkLoginStatus", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["welcome"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Next</div>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push(" <div class=\"box col3\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                <div class=\"masonry-object\" style=\" height: 350px; width: 300px;\">\n            <div class=\"usersobject-hoverarea easing\" style=\"height: 350px; width: 300px;\">\n                <div class=\"usersobject-hoverarea_bg\">                \n                    <i class=\"icon-ok\" style=\"font-size: 140px;  line-height: 300px;  text-align: center;display: block; color: white;\"></i>\n                </div>\n\n\n            </div>\n            <div style=\"position: relative;\">\n                <div style=\"width: 300px; height: 300px; overflow: hidden; background-color: rgb(242,240,240);\">\n                    <div style=\"font-size: 11em;line-height: 300px;font-weight: bold;text-align: center; text-shadow: 1px 1px 0px #fff, -1px -1px 0px #333;color: #555;\">?</div>\n                </div>\n            </div>\n\n            <div class=\"masonry-object_username\" style=\"height: 50px;\">\n                <div class=\"object-username\" style=\" font-size: 16px; padding: 15px 0;\">\n                    Not Sure Yet!\n                </div>\n            </div>\n        </div>\n    </div>");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n    <div class=\"box col3\">\n        <div class=\"masonry-object\" style=\" height: 350px; width: 300px;\">\n            <div class=\"usersobject-hoverarea easing\" style=\"height: 350px; width: 300px;\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTopic", "id", "topic", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                 <div class=\"usersobject-hoverarea_bg\"   >\n                    <i class=\"icon-ok\" style=\"font-size: 140px;  line-height: 300px;  text-align: center;display: block; color: white;\"></i>\n                </div>\n            </div>\n            <div style=\"position: relative;\">\n                <div style=\"width: 300px; height: 300px; overflow: hidden;\">\n                    <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"min-height:300px; width: 300px; max-width: none;\"/>\n                </div>\n            </div>\n            <div class=\"masonry-object_username\" style=\"height: 50px;\">\n                <div class=\"object-username\" style=\" font-size: 16px; padding: 15px 0;\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topic", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<div class=\"new-btn green-btn\" style=\"width: 200px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSelection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Next</div>");
  return buffer;
  }

  data.buffer.push("\n\n\n<div id=\"discovery_search_bar_wrapper\" style=\"height: 200px; margin: 0 0 100px 0;\">\n    <div style=\"width: 100%; height: 200px; background-color: black; opacity: 0.05;\"></div>\n    <P style=\"position: absolute; font-size: 25px; top: 100px;z-index: 600; width: 600px; color: white; left:0; right: 0; margin: auto; line-height: 25px; text-align: center;\">\n        What are you looking for?\n    </P>\n    <div style=\"position: absolute; left: 0; right: 0; margin: auto; width: 100px; text-align: center; bottom: 15px;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "quickstart", options) : helperMissing.call(depth0, "linkTo", "quickstart", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n</div>\n\n\n\n<div id=\"masonry_welcome_container\"  class=\"centered clearfix\" >\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "quickstart", options) : helperMissing.call(depth0, "linkTo", "quickstart", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.content", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n\n\n<div style=\"position: relative;  left: 0;right: 0; margin: 40px auto 20px; width: 100px; text-align: right; \">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "quickstart", options) : helperMissing.call(depth0, "linkTo", "quickstart", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});