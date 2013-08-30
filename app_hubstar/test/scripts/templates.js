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
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "chooseRecord", "title", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                         <a class=\"exist-name easing\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                    </div>\n                    ");
  return buffer;
  }

  data.buffer.push("  \n\n\n<div class=\"t-style-box\">\n    <div class=\"contactmebox-wapper\" style=\"width: 700px;height: 270px;font-size: 13px;padding: 20px;\">\n        <div>\n            <div style=' color: #333; font-size: 20px; font-weight: bold; margin: 5px 0 30px; text-align: center;'>Add to Collections</div>\n            <div class=\"exit\">\n                <div class=\"closeview\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                     <i class=\"icon-remove\"></i>\n                </div> \n            </div>  \n        </div> \n\n\n        <div style=\"display: inline-block; color:#555; font-size: 16px; font-weight: bold;vertical-align: top;margin-right: 20px;\"> \n            <div style=\"margin-bottom: 10px;\">Collections</div>\n            <div>Description</div>\n        </div>\n\n        <div style=\"display:inline-block; margin: 0 15px;\">\n\n            <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collectionSwitch", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn\" style=\"display:block;\" id=\"recordID\" ");
  hashContexts = {'text': depth0};
  hashTypes = {'text': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'text': ("controller.selectedTitle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Choose your Collection \n                &nbsp;<i class=\"icon-caret-down\"></i>\n            </div>\n            <div style=\"height: 150px;\">\n                ");
  hashContexts = {'valueBinding': depth0,'rows': depth0,'cols': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'rows': "STRING",'cols': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedDesc"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("collect_descriptionbox"),
    'placeholder': ("please inout your description.........")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.selectionPop", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div style=\"display:inline-block;margin-left:15px; vertical-align: top;\">\n        <div style=\"max-width: 180px; max-height: 180px; overflow: hidden;padding: 10px;background-color: rgba(0,0,0,0.03);top: -4px;position: relative;\">\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.selectedPhotoThumbnailUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        </div>\n    </div>\n\n</div>\n<div class=\"controlbtn-field\" style=\"height: 50px;\">\n    <div style=\"display: block; float: right;top: 13px;position: relative;right: 20px;\">\n        <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "exit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn\">Cancel</div>\n        <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn green-btn\">Submit</div>\n    </div>\n</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["afterLogin"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div id=\"user-header-menu\" style=\"top: 10px\">\n    <ul class=\"loging_table moveTop nav\" style='margin: 0;'>\n        <li class=\"dropdown\">\n\n            <div class=\"profilepic-container\" data-toggle=\"dropdown\" style=\"margin:5px;position: absolute;width: 35px;height:35px;'\">\n                <a ><img src=\"https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg\" class=\"profilepic_user \" style='width: 35px;height:35px;'/></a>           \n\n                <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("controller.myUserProfile")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.user.photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic_user profilepic_effect easing\" style='width: 35px;height:35px;margin-top: -57px'/></a>              \n            </div>\n\n            <ul id=\"user-dd-menu\" class=\"dropdown-menu\">\n                <li class=\"active\">\n                    <a tabindex=\"-1\" ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("controller.myUserProfile")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">My Trends</a>\n                </li>\n\n                <li class=\"active\">\n                    <a tabindex=\"-1\" ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("controller.myUserProfile")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Feedback & Support</a>\n                </li>                \n                <li>\n                    <a tabindex=\"-1\" href=\"#\" onclick=\"logout();\">Logout </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>\n\n\n<script>\n\n                        function logout() {\n\n                            var address = document.URL;\n                            var domain = address.split(\"/\")[2];\n\n\n\n                            $.ajax({\n                                type: 'POST',\n                                url: 'http://' + domain + '/site/logout',\n                                contentType: 'application/json; charset=uft-8',\n                                dataType: 'json',\n                                success: function() {\n\n                                }\n                            });\n\n                            localStorage.clear();\n\n\n                        }\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "comingsoon", options) : helperMissing.call(depth0, "outlet", "comingsoon", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.HeaderView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "profile", options) : helperMissing.call(depth0, "outlet", "profile", options))));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "profiles", options) : helperMissing.call(depth0, "outlet", "profiles", options))));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "user", options) : helperMissing.call(depth0, "outlet", "user", options))));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controller.isotherpage", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "photos", options) : helperMissing.call(depth0, "outlet", "photos", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "articles", options) : helperMissing.call(depth0, "outlet", "articles", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "profileNew", options) : helperMissing.call(depth0, "outlet", "profileNew", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "render", "footer", options))));
  data.buffer.push("\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.islogin", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DiscoveryView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "welcome", options) : helperMissing.call(depth0, "outlet", "welcome", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "quickstart", options) : helperMissing.call(depth0, "outlet", "quickstart", options))));
  data.buffer.push("        \n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.CarouselView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "platformBar", options) : helperMissing.call(depth0, "render", "platformBar", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "loadingSpinner", options) : helperMissing.call(depth0, "render", "loadingSpinner", options))));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n<div style=\"background:#fff url('../images/bgtexture.png') repeat;width: 100%;height: auto;\">\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.comingsoon", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.islogin", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.loadingTime", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "applicationFeedback", options) : helperMissing.call(depth0, "render", "applicationFeedback", options))));
  data.buffer.push("\n\n<div id=\"loading\" class=\"loading-visible\" >\n            <img style=\"width: 300px;position: relative;margin: auto;left: 0;right: 0; \" src=\"../images/loading.gif\" />\n            <div id=\"blurringTextG\">\n                <div id=\"blurringTextG_1\" class=\"blurringTextG\">\n                    C</div>\n                <div id=\"blurringTextG_2\" class=\"blurringTextG\">\n                    r</div>\n                <div id=\"blurringTextG_3\" class=\"blurringTextG\">\n                    e</div>\n                <div id=\"blurringTextG_4\" class=\"blurringTextG\">\n                    a</div>\n                <div id=\"blurringTextG_5\" class=\"blurringTextG\">\n                    t</div>\n                <div id=\"blurringTextG_6\" class=\"blurringTextG\">\n                    i</div>\n                <div id=\"blurringTextG_7\" class=\"blurringTextG\">\n                    n</div>\n                <div id=\"blurringTextG_8\" class=\"blurringTextG\">\n                    g</div>\n                <div id=\"blurringTextG_9\" class=\"blurringTextG\">\n                    &nbsp;\n                </div>\n                <div id=\"blurringTextG_10\" class=\"blurringTextG\">\n                    y</div>\n                <div id=\"blurringTextG_11\" class=\"blurringTextG\">\n                    o</div>\n                <div id=\"blurringTextG_12\" class=\"blurringTextG\">\n                    u</div>\n                <div id=\"blurringTextG_13\" class=\"blurringTextG\">\n                    r</div>\n                <div id=\"blurringTextG_14\" class=\"blurringTextG\">\n                    &nbsp;\n                </div>\n                <div id=\"blurringTextG_15\" class=\"blurringTextG\">\n                    i</div>\n                <div id=\"blurringTextG_16\" class=\"blurringTextG\">\n                    d</div>\n                <div id=\"blurringTextG_17\" class=\"blurringTextG\">\n                    e</div>\n                <div id=\"blurringTextG_18\" class=\"blurringTextG\">\n                    a</div>\n                <div id=\"blurringTextG_19\" class=\"blurringTextG\">\n                    s</div>\n                <div id=\"blurringTextG_20\" class=\"blurringTextG\">\n                    &nbsp;\n                </div>\n                <div id=\"blurringTextG_21\" class=\"blurringTextG\">\n                    s</div>\n                <div id=\"blurringTextG_22\" class=\"blurringTextG\">\n                    p</div>\n                <div id=\"blurringTextG_23\" class=\"blurringTextG\">\n                    a</div>\n                <div id=\"blurringTextG_24\" class=\"blurringTextG\">\n                    c</div>\n                <div id=\"blurringTextG_25\" class=\"blurringTextG\">\n                    e</div>\n                <div id=\"blurringTextG_26\" class=\"blurringTextG\">\n                    &nbsp;\n                </div>\n                <div id=\"blurringTextG_27\" class=\"blurringTextG\">\n                    .</div>\n                <div id=\"blurringTextG_28\" class=\"blurringTextG\">\n                    .</div>\n                <div id=\"blurringTextG_29\" class=\"blurringTextG\">\n                    .</div>\n            </div>\n        </div>\n\n</div>\n\n\n<script type=\"text/javascript\">\n\n    function DropDown(el) {\n        this.dd = el;\n        this.placeholder = this.dd.children('span');\n        this.opts = this.dd.find('ul.dropdown > li');\n        this.val = '';\n        this.index = -1;\n        this.initEvents();\n    }\n    DropDown.prototype = {\n        initEvents: function() {\n            var obj = this;\n\n            obj.dd.on('click', function(event) {\n                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                return false;\n            });\n\n\n            obj.opts.on('click', function() {\n                var opt = $(this);\n                obj.val = opt.text();\n                obj.index = opt.index();\n                obj.placeholder.text(obj.val);\n            });\n        },\n        getValue: function() {\n            return this.val;\n        },\n        getIndex: function() {\n            return this.index;\n        }\n    };\n\n    $(function() {\n        var dd1 = new DropDown($('.dropdown_test_1'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n        var dd4 = new DropDown($('.dropdown_test_4'));\n        $(document).click(function() {\n            // all dropdowns\n            $('.wrapper-dropdown-3').removeClass('active');\n        });\n\n    });\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["applicationFeedback"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n<div id=\"appfeedback\" class=\"blur_black\"></div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.info", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.succeed", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.failed", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.warnning", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n<div class=\"fresh-message\">\n<k class=\"icon-info-sign\"></k>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n<div class=\"fresh-message fresh_succeed\">\n<k class=\"icon-ok-sign\"></k>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n<div class=\"fresh-message fresh_failed\">\n<k class=\"icon-remove-sign\"></k>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n<div class=\"fresh-message fresh_warnning\">\n<k class=\"icon-exclamation-sign\"></k>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  return buffer;
  }

  data.buffer.push("\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.feedback", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["article"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

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
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                <div class=\"readbtn new-btn\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkReading", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    Read\n                </div>\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                <div class=\"closeReadbtn new-btn\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkClosed", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    Close\n                </div>\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                        <div class=\"comment-item\">\n\n                            <div class=\"comment-position\">\n                                <a class=\"profilepic-comment-container\" href=\"#\">\n                                    <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                                </a>\n                                <div style=\"\">\n                                    <div class=\"comment-namentime\">\n                                        <div class=\"namentime_position\">\n                                            <a class=\"comment-username\" href=\"\" >\n                                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                            </a>\n                                            <div class=\"posttime-container\">\n                                                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"reply-comment\">\n                                            <!--this div for reply-->\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"comment-content\">\n                                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                                        <span>\n                                            <span></span>\n                                            <a></a>\n                                        </span>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </div>\n\n\n                        ");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"objectview-wrapper\" >\n\n    <div class=\"objectview-left\">\n        <div class=\"exit\" >\n            <div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                <i class=\"icon-remove\"></i>\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"top-controlbar\" >\n            <!--            <div class=\"icon-on-black\" style=\"left: 8px;\"><i class=\"icon-thumbs-up\"></i></div>-->\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Collect this photo to your own collection.\" style=\"left: 50px;\" >\n                <i class=\"icon-folder-close\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </div>\n            <!--    <div class=\"icon-on-black\" style=\"height: 44px;position: absolute;width: 44px;\"><i class=\"icon-share-alt\"></i></div>     -->\n        </div>\n\n        <div class=\"mainfeature\">\n            <div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n            <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.PhotoDisplayAreaView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <!--THIS IS THE ALBUM BOX-->\n\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ShowAlbumView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n        <!--THIS IS THE ALBUM BOX-->\n\n        <div class=\"bottom-controlbar\" >\n            <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n            <div class=\"icon-on-black\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-arrow-left\"></i>\n            </div>\n            <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupAibum", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-th\"></i>\n            </div>\n            <div class=\"icon-on-black\" style=\"left: 88px;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-arrow-right\"></i>\n            </div>\n            <div class=\"text-on-black\" style=\"left: 132px; top:0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.image_no", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>\n        </div>\n\n\n    </div>\n\n\n\n    <div class=\"objectview-right\" >\n\n        <!-- USER SECTION -->\n        <div style=\"cursor: pointer;\">\n            <div class=\"object-poster easing\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <div class=\"profilepic-container\" >                   \n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.megaResouce.creator_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic\"/></a>                              \n                </div>\n                <div class=\"poster_user\">\n                    <a class=\"poster-name\" href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.owner_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "controller.megaResouce.created", options) : helperMissing.call(depth0, "date", "controller.megaResouce.created", options))));
  data.buffer.push("</span>\n                </div>\n\n                <div class=\"contactmebtn hint--rounded hint--left\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                    <a class=\"contactmeicon\" href=\"#\" style=\" width: 35px; height: 35px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                       <img src=\"../images/mail_24dark.png\" style=\"vertical-align: 6px; width: 15px;\"/>\n                    </a>\n                </div>\n            </div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.contact", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n        </div>\n\n        <!-- OBJECT DESCRIBTION SECTION -->\n        <div>\n            <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setTitleTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <div class=\"collapes-title_inner\">\n                    Article\n                </div>\n\n\n\n\n\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "view.readContent", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n\n\n        </div>\n\n\n\n        <div class=\"collapes-container\"  id=\"article_action\">\n            <div class=\"collapes-container_inner\">\n                <div class=\"article-title\" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.articleResouce.article_headline", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                <div class=\"article-text\">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "controller.articleResouce.article_body", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n            </div>\n        </div>\n\n\n\n\n\n\n        <!-- OBJECT DISCUSSION SECTION -->\n        <div>\n            <div>\n                <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                    <div class=\"collapes-title_inner\">\n                        Discussion\n                    </div>\n                    <div class=\"dropdownicon\">\n                        <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n                    </div>      \n                </div>\n\n\n\n                <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n                    <div class=\"collapes-container_inner\">\n\n                        <div class=\"show-comment\">\n                            <div class=\"show-comment_container\">\n                                <span class=\"show-comment_inner\">\n                                    <span class=\"comment-amount\" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                                    <span class=\"comment-amount\" > comments   </span> \n                                </span>\n                            </div>\n\n                            <div class=\"object-like\" style=\"\"></div>\n                            <div class=\"object-save\" style=\"\"></div>\n                        </div>\n                        <div class=\"addcommnetbox\" role=\"button\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"addcommetBut\" >\n                            add comment...\n                        </div >\n                        <div class=\"addcommnetbox-container\" id=\"commentBox\" style=\"display: none\">\n                            <div style=\"margin:0 auto; padding: 0 0 15px 38px;\">\n                                <a> \n                                    <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -38px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n                                </a>\n\n                                ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'id': ("AddRecord"),
    'class': ("comment-insert-field"),
    'placeholder': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("   \n                                <span class=\"\" style=\"margin-top: 7px;float: right;\">\n                                    <div  class=\"new-btn\"");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n                                    <div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Post</div>\n                                </span>\n\n                            </div>\n                        </div>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.megaResouce.comments", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n\n\n    </div>\n\n\n</div>\n");
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
  data.buffer.push(">\n    <li><a href=\"#\">Login</a></li>\n</ul>\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div id=\"myCarousel\" class=\"carousel\" style='z-index: 1;'>\n    <div style=\"background: url('../../../images/shadowontop.png') repeat-x;position: absolute;top: 620px;z-index: 1000;width: 100%;height: 30px;\"></div>\n    <!-- Carousel items -->\n    <div class=\"carousel-inner\" style=\"min-width:1260px\">\n        <div class=\"active item\"><img src=\"http://s3.hubsrv.com/trendsideas.com/slide_img/kichen_a.jpg\"></div>\n        <div class=\"item\"><img src=\"http://s3.hubsrv.com/trendsideas.com/slide_img/kichen_b.jpg\"></div>\n\n    </div>\n    <!-- Carousel nav -->\n    <a id=\"slider-control\" class=\"icon-angle-left\" href=\"#myCarousel\" data-slide=\"prev\" style=\" float: left;left: 5%;\"></a>\n    <a id=\"slider-control\" class=\"icon-angle-right\" href=\"#myCarousel\" data-slide=\"next\"style=\"float: right;left: -5%;\"></a>\n\n    <div class=\"tile_img\">\n        <div id=\"dd3\" class=\"wrapper-dropdown-3\" tabindex=\"1\" style=\" width:270px; height:45px;left: 360px;\">\n            <div>\n                <div id=\"dropdown-cover\" class=\"dropdown_test_3\" style=\"float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -10.5px; padding-left: 35px;\">\n                    <div class=\"login-icon\">\n                        <i class=\"icon-facebook icon-large\">\n                        </i>\n                    </div>   \n                </div>\n                <div  id=\"dropdown-cover\" onclick=\"Facebook(650, 400);\" style=\"float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -10px;\">\n                    <div class=\"sign-in-with\" >Sign In with Facebook</div>\n                </div>\n            </div>\n            <ul class=\"dropdown\" style=\"width:270px\">\n                <li  onclick=\"LinkedIn(650, 400);\" ><a style=\"color:rgb(0,172,237)\" href=\"#\"><i class=\"icon-linkedin-sign icon-large\"></i>Sign in with LinkedIn</a></li>\n                <li  onclick=\"Google(650, 400);\" ><a style=\"color:rgb(211,72,54)\" href=\"#\"><i class=\"icon-google-plus icon-large\"></i>Sign in with Google+</a></li>\n                <li  onclick=\"Yahoo(650, 400);\" ><a style=\"color:rgb(123,0,153)\" href=\"#\"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>\n                <li  onclick=\"QQ(650, 400);\" ><a style=\"color:rgb(62,59,62)\" href=\"#\"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>\n                <li  class='signup' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a style=\"color:rgb(0,153,68)\" href=\"#\"><i class=\"icon-envelope icon-large\"></i>Sign in with Email</a></li>\n            </ul>\n        </div>\n        <div class=\"title_text\" >\n            <p style=\"font-size: 42px; font-weight: bold; line-height: 50px;\">\n                YOUR ONLINE RESOURCE FOR INSPIRATIONAL PRODUCTS, SERVICES & IDEAS\n            </p>\n            <p style=\"line-height: 20px; width: 900px;left: 100px;position: relative;\">\n                Hundreds of videos, thousands of articles and tens of thousands of high quality images from around the world showcasing: Architecture, Kitchen Design, Bathroom Design, Interiors, Landscape Design and Commercial Design. \n            </p>\n        </div>\n    </div>\n\n</div>\n\n<!--<div style=\"position: relative; height: 400px; width: 100%;\"></div>-->\n\n<script type=\"text/javascript\">\n\n\n                    function DropDown(el) {\n                        this.dd = el;\n                        this.placeholder = this.dd.children('span');\n                        this.opts = this.dd.find('ul.dropdown > li');\n                        this.val = '';\n                        this.index = -1;\n                        this.initEvents();\n                    }\n                    DropDown.prototype = {\n                        initEvents: function() {\n                            var obj = this;\n\n                            obj.dd.on('click', function(event) {\n                                $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                                return false;\n                            });\n                            obj.opts.on('click', function() {\n                                var opt = $(this);\n                                obj.val = opt.text();\n                                obj.index = opt.index();\n                                obj.placeholder.text(obj.val);\n                            });\n                        },\n                        getValue: function() {\n                            return this.val;\n                        },\n                        getIndex: function() {\n                            return this.index;\n                        }\n                    };\n\n                    $(function() {\n\n                        var dd3 = new DropDown($('.dropdown_test_3'));\n                        $(document).click(function() {\n                            $('.wrapper-dropdown-3').removeClass('active');\n                        });\n\n                    });\n\n                    function setDomain() {\n\n                        var api_url = document.domain;\n                        var api_domain_start_pos = api_url.indexOf('.');\n                        var api_url = api_url.slice(api_domain_start_pos);\n\n                        return api_url;\n                    }\n\n\n\n\n\n                    function Facebook(popupWidth, popupHeight) {\n\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Facebook#_=_\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n\n\n\n                    }\n                    function Yahoo(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Yahoo\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function QQ(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=QQ\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function Sina(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Sina\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function LinkedIn(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=LinkedIn\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n                    function Google(popupWidth, popupHeight) {\n                        var left = (screen.width / 2) - (popupWidth / 2);\n                        var top = (screen.height / 2) - (popupHeight / 2);\n                        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Google\";\n                        newwindow = window.open(api_url, 'name', 'height=' + popupHeight * 1.5 + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n                        if (window.focus) {\n                            newwindow.focus();\n                        }\n                    }\n\n\n\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["collections"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div class=\"box style-box t-style-box col2\" id=\"addNew\" style=\"z-index: 1\">\n\n    <div id=\"uploadObject\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n         <div class=\"add-new-object-hoverarea easing\">\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n\n        </div>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 style-box t-style-box\">\n    <div class=\"masonry-object Targeting_Object_front\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <a class=\"album-description-hoverarea easing\" href=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToCollectionPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n           <div class=\"album-description\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "desc", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <div class=\"album-description-bg\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "desc", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </a>\n        <div class=\"albumcover-container\"  > \n            <img class=\"albumcover\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("cover")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />        \n        </div>\n        <div class=\"album-info\">\n            <div class=\"album-info_name\"><i class=\"icon-picture\" >&nbsp;</i>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <div class=\"album-info_content\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <span><a href=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToCollectionPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> </a> photos</span>\n                <span><img src=\"../../images/list-doc.png\"/>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "created_at", options) : helperMissing.call(depth0, "date", "created_at", options))));
  data.buffer.push("</span>\n            </div>\n        </div>\n    </div>\n    <div id=\"Targeting_Object_back\"");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>\n\n<script>\n\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 400);\n    });\n\n</script>\n");
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
  data.buffer.push(" ></i>\n                </div>\n                ");
  return buffer;
  }

  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "collections", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["comingSoon"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("\n\n\n\n<div style=\"position: absolute;z-index: 10;box-shadow: 0px 1px 30px 5px #555;width: 100%; height: 100%; overflow: hidden;\">\n    <img style=\"width: 100%; position: absolute; min-width: 1260px;\" src=\"../images/coming-soon.jpg\"/>\n\n    <div style=\"font-size: 160px; line-height: 200px; font-weight: bold;color: white;margin: auto;display: block;left: 0;text-shadow: 1px 1px 40px #555;right: 0;text-align: CENTER;position: absolute;top: 200px;opacity: 0.2;\">\n        COMING SOON\n    </div>\n\n    <div style=\"text-align: center;position: relative;top: 100px;\">\n        <div style=\"font-size: 30px; line-height: 50px; font-weight: bold;width: 800px;color: white;margin: auto;display: block;left: 0;text-shadow: 1px 1px 40px #555;right: 0;\">\n            100, 000 MORE IDEAS AT\n        </div>\n        <img style=\"width: 415px;   left: 0; right: 0; margin: auto;margin: -40px auto -47px;display: block;\" src=\"../images/trendsbigbrand.png\">\n        <div style=\"font-size: 35px; line-height: 50px;width: 800px;color: white;margin: 0px auto;display: block;left: 0;text-shadow: 1px 1px 30px #333;right: 0;\">\n            — <b>trendsideas.com</b> —\n        </div>\n\n        <div style=\"font-size: 13px; line-height: 18px;width: 380px;color: white;margin: auto;display: block;left: 0;text-shadow: 0px 0px 5px #333;right: 0;\">\n            Hundreds of videos, thousands of articles and tens of thousands of high quality images from around the world showcasing: Architecture, Kitchen Design, Bathroom Design, Interiors, Landscape Design and Commercial Design. \n        </div>\n\n        <div style=\"text-align: center;position: relative;top: 80px;\">\n            <div class=\"tile_img\" style=\"right: 0; left: 0; position: relative;\">\n                <div id=\"dd7\" class=\"wrapper-dropdown-3\" tabindex=\"1\" style=\" width:270px; height:45px;\">\n                    <div>\n                        <div id=\"dropdown-cover\" class=\"dropdown_test_3\" style=\"float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -10.5px; padding-left: 35px;\">\n                            <div class=\"login-icon\">\n                                <i class=\"icon-facebook icon-large\">\n                                </i>\n                            </div>   \n                        </div>\n                        <div  id=\"dropdown-cover\" onclick=\"Facebook(650, 400);\" style=\"float: right; bottom: 10px; position: relative; width: 204px; height: 45px; margin-right: -10px;\">\n                            <div class=\"sign-in-with\" >Register with Facebook</div>\n                        </div>\n                    </div>\n                    <ul class=\"dropdown\" style=\"width:270px\">\n                        <li  onclick=\"LinkedIn(650, 400);\" ><a style=\"color:rgb(0,172,237)\" href=\"#\"><i class=\"icon-twitter icon-large\"></i>Sign in with LinkedIn</a></li>\n                        <li  onclick=\"Google(650, 400);\" ><a style=\"color:rgb(211,72,54)\" href=\"#\"><i class=\"icon-google-plus icon-large\"></i>Sign in with Google+</a></li>\n                        <li  onclick=\"Yahoo(650, 400);\" ><a style=\"color:rgb(123,0,153)\" href=\"#\"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>\n\n                        <li  onclick=\"QQ(650, 400);\" ><a style=\"color:rgb(62,59,62)\" href=\"#\"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div style=\"font-size: 14px; line-height: 20px;width: 280px;color: white;margin: auto;display: block;left: 0;text-shadow: 0px 0px 5px #555;right: 0;font-weight: bold;\">\n                Register now to be one of the first users of our platform!\n            </div>\n            <div style=\"font-size: 20px; line-height: 20px;width: 280px;color: white;margin: 20px auto;display: block;left: 0;text-shadow: 0px 0px 5px #555;right: 0;font-weight: bold;\">\n                <a href=\"https://www.facebook.com/TrendsIdeas\" target=\"blank\" style=\"color: white; text-decoration: none; margin: 10px;\"> <i class=\"icon-facebook\"></i></a>\n                <a href=\"https://twitter.com/Trendsideas\" target=\"blank\" style=\"color: white;text-decoration: none; margin: 10px;\"> <i class=\"icon-twitter\"></i></a>\n            </div>\n\n        </div>\n\n\n    </div>\n</div>\n");
  
});

Ember.TEMPLATES["comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class=\"comment-item\">\n\n            <div class=\"comment-position\">\n                <a class=\"profilepic-comment-container\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                </a>\n                <div style=\"\">\n                    <div class=\"comment-namentime\">\n                        <div class=\"namentime_position\">\n                            <a class=\"comment-username\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  \n                            </a>\n                            <div class=\"posttime-container\">\n                                <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>\n                            </div>\n                        </div>\n\n                        <div class=\"reply-comment\">\n         <!--  <a class = \"reply-comment-button\" herf=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkingUser", "commenter_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">replay</a>\n                    -->    </div>\n                    </div>\n\n                    <div class=\"comment-content\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n                        <span>\n                            <span></span>\n                        </span>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n\n\n        ");
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

  data.buffer.push("\n\n\n\n\n\n\n\n<div class=\"masonry-object_interact\" >\n    <div class=\"masonry_show-comment\">\n        <div class=\"show-comment_container\" >\n            <div class=\"show-comment_inner\"  id=\"showMoreComment_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"   ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "seeMore", "model.id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <span class=\"comment-amount text-anchor easing\">  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                <span class=\"comment-amount text-anchor easing\"> comments  <i class=\"icon-angle-down\"></i></span>\n            </div>\n\n\n            <div class=\"show-comment_inner\" id=\"closeComment_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"   style=\"display: none\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMore", "model.id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <span class=\"comment-amount text-anchor easing\">  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                <span class=\"comment-amount text-anchor easing\"> comments  <i class=\"icon-angle-up\"></i></span>\n            </div>\n\n        </div>\n        <div style=\"display: inline-block;float: right; font-size: 13px;\">\n            <div id=\"thumbUpBtn_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"  class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", "model.id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-thumbs-up-alt\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLike", "model.id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&nbsp</i>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.likes_count", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n       \n        </div>\n    </div>\n\n    <div class=\"masonry_addcommnetbox-container\" ");
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
  data.buffer.push("\">\n        <div class=\"addcommnetbox\">\n            Add comments \n        </div>\n    </div>\n\n    <div class=\"addcommnetbox-container comment-frame\" id=\"commentBox_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" style=\"display: none\">\n        <div style=\"margin:0 auto; padding: 0 0 15px 45px;\">\n            <a>\n                <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -45px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /> \n            </a>\n\n            ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("commentContent"),
    'id': (""),
    'class': ("comment-insert-field"),
    'placeholder': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            <span class=\"\" style=\"margin:7px 0;float: right;\">\n                <div  class=\"new-btn\"");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComment", "model.id", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</div>\n                <div class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Post</div>\n            </span>\n\n        </div>\n    </div>\n\n    <div id=\"commentData_");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" class=\"comment-frame\" style=\"max-height:70px;\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.comments", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n    </div>\n\n\n\n</div>\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.isThumbUped),stack1 ? stack1.call(depth0, "model.people_like", "model.id", options) : helperMissing.call(depth0, "isThumbUped", "model.people_like", "model.id", options))));
  return buffer;
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"head controlbtn-field\">\n        <div style=\"position: relative; text-align: center;\">\n            <div class=\"panelcircle\" style=\"position: relative; display: inline-block;  margin: 0 65px; font-weight: bold;background-color: #427fed;z-index: 1;\">1</div>\n            <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"panelcircle\" style=\"cursor:pointer; position: relative; display: inline-block;  margin: 0 65px; font-weight: bold; z-index: 1;\">2</div>\n            <div style=\"width: 300px; height: 2px; border-radius: 20%;background-color:#ccc;position: absolute;margin: auto;left: 0;right: 0;top: 19px;z-index: 0;\"></div>\n            <div style='font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);position: relative;top: 10px;right: 87px;font-weight: bold;margin-bottom: 10px;'> Send a message.</div>\n        </div>\n    </div>\n\n    <div class=\"head\" style='padding-bottom: 0;'>\n        <div class=\"poster_user\" >\n            <div style=\"display: block; font-size: 16px; font-weight: bold; margin-bottom: 5px;\">\n                <span style=\"display: inline-block;margin-right: 5px;\">Send an Email to</span>\n                <a style=\"max-width: 240px; display: inline-block; overflow: hidden; text-overflow: ellipsis;\">");
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
    'src': ("controller.selectedMega.owner_profile_pic")
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
  data.buffer.push("\n                ");
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
  data.buffer.push("\n    <div class=\"head controlbtn-field\">\n        <div style=\"position: relative;margin-bottom: 20px;text-align: center;\">\n            <div class=\"panelcircle\" style=\"position: relative; display: inline-block;  margin: 0 65px; font-weight: bold; z-index: 1;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "proviousSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">1</div>\n            <div class=\"panelcircle\" style=\"cursor:pointer; position: relative; display: inline-block;  margin: 0 65px; font-weight:bold; background-color: #427fed; z-index: 1;\">2</div>\n            <div style=\"width: 300px; height: 2px; border-radius: 20%;background-color:#ccc;position: absolute;margin: auto;left: 0;right: 0;top: 19px;z-index: 0;\"></div>\n            <div style='font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);position: relative;top: 10px;left: 90px;font-weight: bold;margin-bottom: 10px;'>Help us help you.</div>\n        </div>\n    </div>\n    ");
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
  data.buffer.push("\n                        </td>\n                    </tr>\n                </tbody>\n            </table>    \n\n             <span style='color: #555;text-align: right;cursor: default;font-size: 15px;float: left;margin: 5px 0 0 55px;'> I need help on: (Please choose your category)</span>\n            \n            <ol class=\"checkbox-columncontainer\" style=\"margin: 20px 0 10px 50px;\">\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.subcate", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            </ol>\n\n\n\n            ");
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

function program17(depth0,data) {
  
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

function program19(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <span style=\"float: left;margin: 15px;position: relative;left: 15px;\">\n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "proviousSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn blue-btn\">\n                 <k class='icon-arrow-left'>&nbsp;</k>Previous</div>\n        </span>\n        ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "emailSend", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn green-btn\">Submit</div>\n            ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSendingEmailProcess", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  class=\"new-btn green-btn\">Next</div>\n            ");
  return buffer;
  }

  data.buffer.push("    \n\n\n<div class=\"contactmebox-wapper\" style=\"width: 500px;font-size: 13px;background-color: white;margin-top: 20px;z-index:11;\">\n\n\n    ");
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
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n\n    <div class=\"controlbtn-field\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <span class=\"controlbtn\">\n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeContact", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"new-btn\">Cancel</div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.secondStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.firstStepOfContactEmail", {hash:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["deleteFunction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n<div class=\"blur_black\"></div>\n\n\n\n\n<div style=\"z-index: 11;background-color: white; border: 1px rgba(0,0,0,.6); border-radius: 3px;box-shadow: 0 0 20px 5px #aaa;  width: 430px;height: 200px;margin: 0 auto; padding: 20px;position: fixed; top: 35%;display: block;left: 0;right: 0;\">\n    <i class=\"icon-exclamation-sign\" style=\"font-size: 35px;margin: auto;width: 40px;position: relative;left: 0;right: 0;display: block;text-align: center;margin-top: 5px;\"></i>\n    <div style=\"height: 30px; color: #333; font-size: 20px; font-weight: bold; line-height: 30px; text-align: center;margin: 10px 0;overflow: hidden;text-overflow: ellipsis;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    <div style=\"font-weight: normal; font-size: 13px;text-align: center;\">You won't be able to undo this!</div>\n    <div style=\"width:200px; margin: 20px auto;text-align: center;\">\n        <div class=\"new-btn red-btn\" ");
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
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n\n\n\n<div id=\"discovery_search_bar_wrapper\" style=\"margin: 0 0 100px 0;\">\n\n    <p style=\"position: absolute; font-size: 20px; top: 190px;z-index: 600; width: 600px; color: white; left:0; right: 0; margin: auto; line-height: 25px; text-align: center;text-shadow: 0 0 15px #000;\">\n        Your online resource for homes, products, services & ideas   \n    </p>\n\n    <div id=\"discovery_search_bar\">\n\n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'name': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchAreaTextFieldView", {hash:{
    'valueBinding': ("search_area"),
    'id': ("search_key"),
    'class': ("search_input"),
    'placeholder': ("All regions in New Zealand"),
    'name': ("search_key")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SearchRequireTextFieldView", {hash:{
    'valueBinding': ("search_string"),
    'id': ("search_business"),
    'class': ("search_business"),
    'placeholder': ("Search by your keywords")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n        <a  style=\"right: -35px;\" class=\"cancleIcon\"  href=\"#\" ><i class=\"icon-remove-sign\" ></i></a>\n    </div>\n    <div style=\"margin: auto; width: 200px; top: 450px; position: relative;\"></div>    \n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 100px; display: block; position: absolute;left: 0;right: 0;top: 310px; cursor:pointer;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searching", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <i class=\"icon-search\" style=\"margin-right: 10px;\"></i> Search\n    </div>\n\n\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["dropdownList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"dropItem1\"  ");
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
  data.buffer.push("\n<div id=\"dropItem2\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownTimeframe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">1-2 months</div>\n    <div  class=\"ite \">Next 6 months</div>\n    <div  class=\"ite \">Within 12 months</div>\n    <div  class=\"ite \">1-2 years</div>\n    <div  class=\"ite \">Within 3 years</div>\n</div>\n");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"dropItem3\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownBudget", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Less than 5k</div>\n    <div  class=\"ite \">5k-10k</div>\n    <div  class=\"ite \">10k-50k</div>\n    <div  class=\"ite \">50k-100k</div>\n    <div  class=\"ite \">100k-250k</div>\n    <div  class=\"ite \">250k-500k</div>\n    <div  class=\"ite \">500k- 1M</div>\n    <div  class=\"ite \">1M+</div>\n</div>\n");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"dropItem4\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownExperience", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">First Time</div>\n    <div  class=\"ite \">Helped someone do this</div>\n    <div  class=\"ite \">Have done this once before</div>\n    <div  class=\"ite \">Experienced at this type of project</div>\n</div>\n");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"packgetDropdown\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.packgeSelection", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Platinum</div>\n    <div  class=\"ite \">Gold</div>\n    <div  class=\"ite \">Silver</div>\n    <div  class=\"ite \">Bronze</div>\n</div>\n");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"profilePackgetDropdown\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectCategoryDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">Platinum</div>\n    <div  class=\"ite \">Gold</div>\n    <div  class=\"ite \">Silver</div>\n    <div  class=\"ite \">Bronze</div>\n</div>\n");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"is_actvie\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectActiveDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">true</div>\n    <div  class=\"ite \">false</div>\n</div>\n");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div id=\"is_delete\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectDeleteDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n     <div  class=\"ite \">true</div>\n    <div  class=\"ite \">false</div>\n</div>\n");
  return buffer;
  }

  data.buffer.push("\n\n");
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
  stack1 = helpers['if'].call(depth0, "controller.isPackgetDropdown", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isActiveDropdown", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isDeleteDropdown", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
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
    'valueBinding': ("controller.selectedCollection.title"),
    'id': (""),
    'class': ("new-collection-name_insert"),
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
    'class': ("new-collection-name_insert"),
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
    'valueBinding': ("controller.selectedCollection.desc"),
    'rows': ("12"),
    'cols': ("70"),
    'class': ("new-collection-area no-resize"),
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
  data.buffer.push("\n        <div style=\"position: relative; right: 15px;margin-top: 8px;float: right;\">\n     \n            <div id=\"uploadingObject\" class='new-btn' style=\"right: 0;\"  ");
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
  


  data.buffer.push("<div id=\"footer\">\n    <div style=\"background: url('../images/footershadow.png') repeat-x;position: absolute;bottom: 0px; width: 100%;height: 300px;left: 0px;\"></div>\n    <div class=\"footer_contentbox\">\n        <div class=\"footer-text-left\">\n            <ul>\n<!--                <li><a href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\"  target=\"blank\">About Trends</a></li>\n                <li><a href=\"https://trends.wufoo.com/forms/s7p1q1/?region=1\"  target=\"blank\">In the News</a></li>\n                <li><a href=\"http://trendsideas.com/ViewPage.aspx?pageName=Terms%20of%20Use&region=1\"  target=\"blank\">Terms of Use</a></li>\n                <li><a href=\"#\">Copyright</a></li> \n                <li><a href=\"#\">Privacy Policy</a></li>\n                <li><a href=\"http://trendsideas.com/ViewPage.aspx?pageName=Jobs&region=1\"  target=\"blank\">Jobs</a></li>-->\n            </ul>\n        </div>\n        <div class=\"footer-text-left\">\n            <ul>\n<!--                <li><a href=\"#\">Buttons and Badges</a></li>\n                <li><a href=\"#\">Mobile Apps</a></li>\n                <li><a href=\"#\">FAQs</a></li>\n                <li><a href=\"http://trendsideas.com/ViewPage.aspx?pageName=Contact%20Us&region=1\" target=\"blank\">Contact Us</a></li>\n                <li><a href=\"http://trendsideas.com/ViewPage.aspx?pageName=Advertise%20with%20us&region=1\"  target=\"blank\">Advertise</a></li>-->\n            </ul>\n        </div>\n\n        <div style=\"text-align: center; padding: 20px 0; margin: 0 90px 0 100px; font-size: 13px; width: 160px; float: left;\">\n            <img class=\"logonew\" style=\"height: auto; position: relative; top: 0; margin:0;\"  src =\"../../../images/landing-trends.png\"/>\n            <div style=\"padding-top: 15px;\">\n                <i class=\"socon icon-facebook-sign icon-3x\"></i>\n                <i class=\"socon icon-twitter-sign icon-3x\" style=\" padding: 0 27px;\"></i>\n                <i class=\"socon icon-rss icon-3x\"></i>\n            </div>\n        </div>\n        <div class=\"footer-text-right\">\n            <ul>\n<!--                <li><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">Photos</a></li>\n                <li><a href=\"#\">Products</a></li>\n                <li><a href=\"#\">Find Local Pros</a></li>\n                <li><a href=\"#\">Ideabooks</a></li>\n                <li><a href=\"#\">Discussions</a></li>-->\n            </ul>\n        </div>\n        <div class=\"footer-text-right\">\n            <ul>\n<!--                <li><a href=\"#\">Your Trends</a></li>\n                <li><a href=\"#\">Your Ideabooks</a></li>\n                <li><a href=\"#\">Your Photos</a></li>\n                <li><a href=\"#\">Recommended</a></li>\n                <li><a href=\"#\">Photos</a></li>\n                <li><a href=\"#\">Edit Profile</a></li>\n                <li><a href=\"#\">Change Password</a></li>\n                <li><a href=\"#\" >Sign Out</a></li>-->\n            </ul>\n        </div>\n    </div>\n</div><!-- footer -->\n\n<p id=\"back-top\">\n    <a href=\"#top\"><span></span>Back to Top</a>\n</p>");
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n            <div id=\"login_detail\" style=\"position: absolute;right: 170px;cursor: pointer;vertical-align: top;display: inline-block;\">\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.AfterLoginView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n\n\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n            <div id=\"login_icon\" style=\"position: absolute; right: 80px;\">\n\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.BeforeLoginView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.popup", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            </div>\n\n\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.LoginModalView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n                ");
  return buffer;
  }

<<<<<<< HEAD
  data.buffer.push("<div class=\"navbar\">\n      <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.2-3</span>\n      </div>\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <div class=\"brand\">\n                <a href=\"/#\">\n                    <img class=\"logonew\" style=\"position: relative; top: 0; margin:0;\" src=\"../../../images/landing-trends.png\">\n                </a>\n            </div>\n\n \n\n            <!-- show if not logged into platform-->\n\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.islogin", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <!-- user is logged in -->\n\n            <div class=\"smallIcon\">\n                <a href=\"#\" class=\"icon_c\"><i class=\"icon-search icon-large\"></i></a>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n\n<script type=\"text/javascript\">\n\n    $(document).ready(function() {\n        $('.smallIcon').attr(\"style\", \"display:none\");\n        $('#main-nav span').removeClass('caret');\n\n\n        // left hiding menu bar\n\n        $('.main-nav ').attr(\"style\", \"opacity:0.4;width:10px;overflow:hidden\");\n        // hide #back-top first\n        $(\"#back-top\").hide();\n        $(window).scroll(function() {\n\n            if ($(this).scrollTop() > 150) {\n                $('#back-top').fadeIn();\n            } else {\n                $('#back-top').fadeOut();\n            }\n\n            if ($(this).scrollTop() > 150) {\n                $('.smallIcon').fadeIn();\n            } else {\n                $('.smallIcon').fadeOut();\n            }\n        });\n        $('#back-top a').click(function() {\n            $('body,html').animate({\n                scrollTop: 0\n            }, 800);\n            return false;\n        });\n    });\n\n\n\n\n\n\n    function setDomain() {\n\n        var api_url = document.domain;\n        var api_domain_start_pos = api_url.indexOf('.');\n        var api_url = api_url.slice(api_domain_start_pos);\n\n        return api_url;\n    }\n\n\n\n\n\n    function Facebook(popupWidth, popupHeight) {\n        var left = (screen.width / 2) - (popupWidth / 2);\n        var top = (screen.height / 2) - (popupHeight / 2);\n        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Facebook\";\n        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n        if (window.focus) {\n            newwindow.focus();\n        }\n\n\n    }\n    function Yahoo(popupWidth, popupHeight) {\n        var left = (screen.width / 2) - (popupWidth / 2);\n        var top = (screen.height / 2) - (popupHeight / 2);\n        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Yahoo\";\n        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n        if (window.focus) {\n            newwindow.focus();\n        }\n    }\n    function QQ(popupWidth, popupHeight) {\n        var left = (screen.width / 2) - (popupWidth / 2);\n        var top = (screen.height / 2) - (popupHeight / 2);\n        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=QQ\";\n        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n        if (window.focus) {\n            newwindow.focus();\n        }\n    }\n    function Sina(popupWidth, popupHeight) {\n        var left = (screen.width / 2) - (popupWidth / 2);\n        var top = (screen.height / 2) - (popupHeight / 2);\n\n        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Sina\";\n        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n        if (window.focus) {\n            newwindow.focus();\n        }\n    }\n    function LinkedIn(popupWidth, popupHeight) {\n        var left = (screen.width / 2) - (popupWidth / 2);\n        var top = (screen.height / 2) - (popupHeight / 2);\n        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=LinkedIn\";\n        newwindow = window.open(api_url, 'name', 'height=' + popupHeight + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n        if (window.focus) {\n            newwindow.focus();\n        }\n    }\n    function Google(popupWidth, popupHeight) {\n        var left = (screen.width / 2) - (popupWidth / 2);\n        var top = (screen.height / 2) - (popupHeight / 2);\n        var api_url = \"http://\" + document.domain + \"/hybridauth/default/login/?provider=Google\";\n        newwindow = window.open(api_url, 'name', 'height=' + popupHeight*1.5 + ',width=' + popupWidth + ',top=' + top + ',left=' + left + ',toolbar=no,scrollbars=no,location=no,resizable =yes');\n        if (window.focus) {\n            newwindow.focus();\n        }\n    }\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"well\">\n    Welcome to Yeoman and Ember.js!\n</div>\n");
  
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
  data.buffer.push(">\n    <div class=\"masonry-object\">\n        ");
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
  data.buffer.push(">\n\n    <div class=\"masonry-object\">\n        <div class=\"masonry-object_poster\">\n            <a class=\"profilepic-on-masonry\" style=\"cursor: pointer\">\n                <img  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n            </a>\n            <div class=\"object_username\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n\n\n            <div class=\"object-tags-box\">\n\n                <div class=\"object-tags\">\n                    <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n                    <div class=\"tags easing\">\n                        <!--                        <div class=\"tags-new\">New </div>-->\n                        <div class=\"object-tpye\">\n                            <i class=\"icon-picture\"></i>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "region", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "timezone", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>                   \n                    </div>\n                </div>\n\n            </div>\n\n\n        </div>\n        <div class=\"masonry-object_mainfeature\">             \n            <div class=\"mainfeature-wrapper\">\n                <a class=\"mainfeature-container\" style=\"cursor: pointer\">\n\n                    <img class=\"this-is-the-object\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("object_image_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToPhoto", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                </a>            \n\n                <span class='edit-object easing' style=\"position: absolute;margin: 10px; top:0;\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </span>\n\n            </div>\n\n\n\n            <div class=\"masonry-object_text\">\n                <div class=\"masonry-object_text-container\">\n                    <p>    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "photo_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n\n                </div>\n\n                <div class=\"more_detail\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                    <div class=\"more_text-container\" >\n                        <div style=\"display:block;\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
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
  data.buffer.push(">collapes &nbsp;<i class=\"icon-angle-up\"></i></span>\n\n                </div>\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n\n\n</div>\n\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n                    <div class=\"new-btn blue-btn hint--right hint--rounded\" data-hint=\"Edit object\" ");
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
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_user_editing_mode", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCollectedItem", "controller.title", "id", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-trash\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Delete</li>\n                        <li class='ite'  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.collection_id", "HubStar.Profile", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <k class=\"icon-ok-sign\" style=\"font-size: 16px;  margin: 0px 5px;\"></k>Set as collection cover</li>\n                        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <li class=\"ite\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCollectionCover", "id", "controller.title", "HubStar.User", {hash:{},contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class=\"icon-camera\" style=\"font-size: 16px; margin: 0px 5px;\"></k>Set as Cover</li>\n                        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\">\n\n    <div class=\"masonry-object\">\n        <div class=\"masonry-object_poster\">\n            <a href=\"#\" class=\"masonry-object_poster\">\n                <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic-on-masonry\" />\n\n                <img  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic-on-masonry\"/>\n            </a>   \n            <div class=\"object_username\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\" ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("getProfile_id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">yesterday 8:37</span>\n                </div>\n            </div>\n\n            <div class=\"object-tags-box\">\n\n                <div class=\"object-tags\">\n                    <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n                    <div class=\"tags easing\">\n                        <div class=\"tags-new\">New</div>\n                        <div class=\"object-tpye\">\n                            <i class=\"icon-film\"></i>\n                        </div>                      \n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#Auckland</div>                   \n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#Kitchen</div>                   \n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n        <div class=\"masonry-object_mainfeature\">\n            <div class=\"mainfeature-wrapper\">\n                <a class=\"mainfeature-container\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "video", "", options) : helperMissing.call(depth0, "linkTo", "video", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </a>\n            </div>              \n\n\n            <div class=\"masonry-object_text\">\n                <div class=\"masonry-object_text-container\">\n                    <p>  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "video", "", options) : helperMissing.call(depth0, "linkTo", "video", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" </p>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </div>\n\n                <div class=\"more_detail\" ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display:none;width:auto\">\n                    <h1>article show</h1>\n\n                </div>\n\n                <span role=\"button\" class=\"masonry_more-btn easing\"  ");
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
  data.buffer.push(">more</span>\n\n                <span role=\"button\" class=\"masonry_more-btn easing\" ");
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
  data.buffer.push(">collapes</span>\n\n\n            </div>\n\n        </div>\n\n        <div class=\"masonry-object_interact\">\n            <div class=\"masonry_show-comment\">\n                <div class=\"show-comment_container\">\n                    <span class=\"show-comment_inner\">\n                        <span class=\"comment-amount\"> 10 </span>\n                        <span class=\"comment-amount\"> comments</span>\n                    </span>\n\n                    <div class=\"dropdownicon masonry_dropdownicon\">\n                        <i class=\"icon-angle-down\"></i>\n                    </div>\n\n                </div>\n                <div style=\"display: inline-block;float: right;\">\n                    <div class=\"new-btn\" style=\"\"><i class=\"icon-thumbs-up-alt\">&nbsp</i> 32</div>\n                    <div class=\"new-btn\" style=\"\"><i class=\"icon-folder-close-alt\">&nbsp</i> 12</div>\n                </div>\n            </div>\n            <div class=\"masonry_addcommnetbox-container\">\n                <div class=\"addcommnetbox\">\n                    Add comments\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n");
  return buffer;
  }
function program10(depth0,data) {
  
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

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "video_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  }

function program14(depth0,data) {
  
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
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "files", "", options) : helperMissing.call(depth0, "linkTo", "files", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "type", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\"  ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkingLoginStatus", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n    <div class=\"masonry-object\">\n        <div class=\"masonry-object_poster\">  \n            <a style=\"cursor: pointer\">\n\n                <img  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic-on-masonry\"/>\n\n            </a>\n            <div class=\"object_username\">\n                <a class=\"poster-name\" style=\"cursor: pointer; width: auto;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "creator", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                <div class=\"posttime-container\">\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "created", options) : helperMissing.call(depth0, "date", "created", options))));
  data.buffer.push("</span>\n                </div>\n            </div>\n\n            <div class=\"object-tags-box\">\n\n                <div class=\"object-tags\">\n                    <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n                    <div class=\"tags easing\">\n\n                        <div class=\"object-tpye\">\n                            <i class=\"icon-book\"></i>\n                        </div>                      \n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "region", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n                    </div>\n                </div>\n\n                <div class=\"object-tags \">\n                    <span class=\"tags-mark\" style=\"background-color: #a0c3ff\"></span>\n                    <div class=\"tags easing tagsappear\">\n                        <div class=\"tags-new\">#");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "categories", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>                   \n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n        <div class=\"masonry-object_mainfeature\">             \n            <div class=\"mainfeature-wrapper\">\n                <a class=\"mainfeature-container\">\n                    <img class=\"this-is-the-object\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("object_image_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n\n                </a>                 \n            </div>\n\n\n            <div class=\"masonry-object_text\">\n                <div class=\"masonry-object_text-container\">\n                    <a style=\"font-size: 16px; font-weight: bold;cursor: pointer\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToArticle", "id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "object_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                    <p style=\"text-overflow: ellipsis;\">");
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
  data.buffer.push("\n\n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "article", "", options) : helperMissing.call(depth0, "linkTo", "article", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n            </div>\n        </div>\n\n\n\n    </div>\n\n</div>\n");
  return buffer;
  }
function program18(depth0,data) {
  
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

function program20(depth0,data) {
  
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
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ideabooks", "", options) : helperMissing.call(depth0, "linkTo", "ideabooks", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program22(depth0,data) {
  
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
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "discussions", "", options) : helperMissing.call(depth0, "linkTo", "discussions", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
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
  stack1 = helpers['if'].call(depth0, "getVideo", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getFile", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getArticle", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getIdeabook", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "getDiscussion", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["itemProfiles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class=\"masonry-object_profile-cover\">\n  \n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "profile_hero_cover_url", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n        <div style=\"position: relative; width: 100%; height: 70px; display: block;\"></div>\n\n\n<div class=\"masonry-object_profilepic\" style=\"cursor:pointer;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toProfilePage", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n\n     <img class=\"easing\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />   \n\n</div>\n\n\n<div  type=\"button\" class=\"new-btn green-btn object-followbtn-position\" style=\"margin: 0 auto; left: 0;right: 0;width: 80px;display: block;top: -15px;\">\n    <i class=\"icon-plus\">&nbsp;</i> Follow\n</div>\n\n<div class=\"masonry-object_name-position\" style=\"margin-bottom: 5px;\"> \n    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("getProfile_id")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toProfilePage", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"cursor:pointer\" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </a>\n</div>\n\n\n          <div style=\" margin-top:5px;overflow:hidden; width:100%; height:30px; text-align:center;\">\n            <ul class=\"itemprofile\">\n                <li class=\"location_li hint-top hint-rounded\" data-hint=\"Collections\">\n              <a>      <k class=\"icon-eye-open\"> &nbsp");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "collections.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </k></a>\n                </li>\n                <li class=\"location_li hint-top hint-rounded\" data-hint=\"Partners\">\n               <a>       &nbsp <k class=\"icon-group\">&nbsp ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, "profile_partner_ids", options) : helperMissing.call(depth0, "length", "profile_partner_ids", options))));
  data.buffer.push("</k></a>  \n                </li>\n                <li class=\"location_li hint-top hint-rounded\" data-hint=\"Videos\">\n              <a>        &nbsp <k class=\"icon-film\">&nbsp ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.videolength),stack1 ? stack1.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "videolength", "profile_about_us", options))));
  data.buffer.push("</k></a>  \n                </li>\n                <li class=\"location_li hint-top hint-rounded\" data-hint=\"Ebooks\">\n              <a>        &nbsp <k class=\"icon-book\">&nbsp ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ebooklength),stack1 ? stack1.call(depth0, "profile_about_us", options) : helperMissing.call(depth0, "ebooklength", "profile_about_us", options))));
  data.buffer.push("</k></a>  \n                </li>\n          \n            </ul>\n\n        </div>\n  \n<!--TAGS-->\n\n<div class=\"object-tags-box\">\n\n    <div class=\"object-tags\">\n        <span class=\"tags-mark\" style=\"background-color: #427fed\"></span>\n        <div class=\"tags easing\">\n            <div class=\"tags-new\">New </div>\n            <div class=\"object-tpye\">\n                <i class=\"icon-group\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"object-tags \">\n        <span class=\"tags-mark\" style=\"background-color: #76a7fa\"></span>\n        <div class=\"tags easing tagsappear\">\n            <div class=\"tags-new\">#");
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
  data.buffer.push(">\n\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_cover_text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n           \n        </div>\n\n        <span role=\"button\" class=\"masonry_more-btn easing\"  ");
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
  data.buffer.push(">more</span>\n\n        <span role=\"button\" class=\"masonry_more-btn easing\" ");
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
  data.buffer.push(">collapes</span>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n\n</div>\n\n");
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
  data.buffer.push("/>\n    </div>\n    ");
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
  data.buffer.push("/>\n    </div>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <span style=\"float: right; display: inline-block;\"><k class=\"icon-trash edit-btn easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deletePartner", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></k> </span>\n        ");
  return buffer;
  }

  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.profile", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["loadingSpinner"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"blur\"></div>\n\n\n\n\n\n<div style=\"z-index: 11; width: 160px;height: 50px;margin: 0 auto; text-align: center; position: fixed; top: 40%;display: block; left: 0;right: 0;\">\n\n    <div id=\"blurringTextG1\">\n        <div id=\"blurringTextG1_1\" class=\"blurringTextG\">\n            L</div>\n        <div id=\"blurringTextG1_2\" class=\"blurringTextG\">\n            o</div>\n        <div id=\"blurringTextG1_3\" class=\"blurringTextG\">\n            a</div>\n        <div id=\"blurringTextG1_4\" class=\"blurringTextG\">\n            d</div>\n        <div id=\"blurringTextG1_5\" class=\"blurringTextG\">\n            i</div>\n        <div id=\"blurringTextG1_6\" class=\"blurringTextG\">\n            n</div>\n        <div id=\"blurringTextG1_7\" class=\"blurringTextG\">\n            g</div>\n        <div id=\"blurringTextG1_8\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG1_9\" class=\"blurringTextG\">\n            .</div>\n        <div id=\"blurringTextG1_10\" class=\"blurringTextG\">\n            .</div>\n    </div>\n\n\n    <div id=\"followingBallsG\">\n        <div id=\"followingBallsG_1\" class=\"followingBallsG\">\n        </div>\n        <div id=\"followingBallsG_2\" class=\"followingBallsG\">\n        </div>\n        <div id=\"followingBallsG_3\" class=\"followingBallsG\">\n        </div>\n        <div id=\"followingBallsG_4\" class=\"followingBallsG\">\n        </div>\n    </div>\n\n\n\n</div>\n");
  
});

Ember.TEMPLATES["loginModal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div style=\"font-size: 12px; margin: 20px auto 0; font-weight: bold;\">Other platform you might prefer:</div>\n\n            <div style=\"margin: 10px auto 5px; width: 100%;\">\n                <a  class=\"square-button\" href='#' onclick=\"LinkedIn(650, 400);\" >\n                    <div id=\"dropdown-cover\" style=\"position: absolute; width: 45px; height: 45px; border-radius: 3px;\"></div>\n                    <div class=\"square-button-twitter\"><i class=\"icon-linkedin-sign icon-large\" style=\"float: left; margin: 11px 15px; width: auto; height:22px; line-height: 20px;\"></i></div></a>\n\n                <a  class=\"square-button\"  href='#' onclick=\"Google(650, 400);\" >\n                    <div id=\"dropdown-cover\" style=\"position: absolute; width: 45px; height: 45px; border-radius: 3px;\"></div>\n                    <div class=\"square-button-google\"><i class=\"icon-google-plus icon-large\" style=\"float: left; margin: 11px 15px; width: auto; height:22px; \"></i></div></a>\n\n                <a  class=\"square-button\"  href='#' onclick=\"Yahoo(650, 400);\">\n                    <div id=\"dropdown-cover\" style=\"position: absolute; width: 45px; height: 45px; border-radius: 3px;\"></div>\n                    <div class=\"square-button-yahoo\"><img src=\"../../../images/yahoo(white).png\" style=\"float: left; margin: 10px 0px; width: auto; height:22px;  \"></img></div></a>\n\n\n\n                <a  class=\"square-button\"  href='#' onclick=\"QQ(650, 400);\">\n                    <div id=\"dropdown-cover\" style=\"position: absolute; width: 45px; height: 45px; border-radius: 3px;\"></div>\n                    <div class=\"square-button-qq\"><img src=\"../../../images/QQ(white).png\" style=\"float: left; margin: 11px 9px; width: auto; height:22px;\"></img></div></a>\n\n                <a  class=\"square-button\" href=\"#email_login\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "email_login", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                    <div id=\"dropdown-cover\" style=\"position: absolute; width: 45px; height: 45px; border-radius: 3px;\"></div>\n                    <div class=\"square-button-email\"><i class=\"icon-envelope icon-large\" style=\"float: left; margin: 11px 13px; width: auto; height:22px; \"></i></div></a> \n\n            </div>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n\n            <iframe id=\"login_iframe\" style='height: 150px; width: 250px;margin-top: 25px; border:none;' ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.iframeLoginURL")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></iframe>\n\n\n\n            <div style=\"position: absolute;top: 488px;left: 180px;\">\n                <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "email_login", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                      Cancel\n            </div>\n        </div>\n        <div style=\"font-size: 11px;\">\n            <a href='#'>Forgot your username or password?</a>\n        </div>\n\n\n\n\n        ");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"hover panel\" style='width: 465px; text-align: center; color: rgb(51, 51, 51); border-radius: 3px;right: 65%;margin: auto;z-index: 1000;top: 10%;'>\n    <div class=\"front easing\">\n\n\n        <div class=\"head controlbtn-field\"  style=\"width: 465px;background-color: #f3f3f3;\">\n            <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"closeview\"><i class=\"icon-remove\"></i></div>\n            <img class=\"logonew\"  style=\"margin: 30px auto 0; width: 92px; display: block;\" src=\"../../../images/trendslogo(black).png\"></img>\n            <div style=\"margin: 20px auto; width: 360px;s\">\n                <p style=\"text-align:center; font-weight: bold; \">COLLECT YOUR ONLINE RESOURCE FOR KITCHENS, PRODUCTS, SERVICES & IDEAS</p>\n                <p style=\"font-size: 12px; text-align: center;\">\n                    Hundreds of videos, thousands of articles and tens of thousands of high quality images from around the world showcasing: Architecture, Kitchen Design, Bathroom Design, Interiors, Landscape Design and Commercial Design. \n                </p>\n            </div>\n            <div id=\"dd\" class=\"wrapper-dropdown-3\" tabindex=\"1\" style=\" width:270px; height:45px;\">\n\n                <div>\n                    <div id=\"dropdown-cover\" class=\"dropdown_test\"  style=\"float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -11px; padding-left: 35px; border-radius: 3px 0 0 3px;\">\n                        <div class=\"login-icon\">\n                            <i class=\"icon-facebook icon-large\">\n                            </i>\n                        </div>   \n                    </div>\n                    <div  id=\"dropdown-cover\" onclick=\"Facebook(650, 400);\" style=\"float: right; bottom: 10px; position: relative; width: 204.5px; height: 45px; margin-right: -9.5px; border-radius: 0 3px 3px 0;\">\n                        <div class=\"sign-in-with\" >Sign In with Facebook</div>\n                    </div>\n                </div>\n                <ul class=\"dropdown\"  style=\"width:270px\">\n                    <li  onclick=\"LinkedIn(650, 400);\" ><a style=\"color:rgb(0,172,237)\" href=\"#\"><i class=\"icon-linkedin-sign icon-large\"></i>Sign in with LinkedIn</a></li>\n                    <li  onclick=\"Google(650, 400);\" ><a style=\"color:rgb(211,72,54)\" href=\"#\"><i class=\"icon-google-plus icon-large\"></i>Sign in with Google+</a></li>\n                    <li  onclick=\"Yahoo(650, 400);\" ><a style=\"color:rgb(123,0,153)\" href=\"#\"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>\n                    <!--                    <li  onclick=\"Sina(650, 400);\" ><a style=\"color:rgb(245,213,0)\" href=\"#\"><img src='../../../images/sina.png' style='width: auto; height: 35px; float:left;margin: -3% -3% 0 6%;'>Sign in with Sina</a></li>-->\n                    <li  onclick=\"QQ(650, 400);\" ><a style=\"color:rgb(62,59,62)\" href=\"#\"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>\n                    <li  class='signup'><a style=\"color:rgb(0,153,68)\" href=\"#\"><i class=\"icon-envelope icon-large\"></i>Sign in with Email</a></li>\n                </ul>\n            </div>\n\n        </div>\n\n        <div class=\"panelcircle\" style=\"position: absolute; right: 0; top: 300px; margin: auto;left: 0;\"><b>OR</b></div>\n\n        <div class=\"content \" style=\"width: 465px;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "mail", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div style=\"position: relative; text-align: center; font-size: 12px; margin-bottom: 15px;\"> \n            Don't have an account? Click <a  href=\"#\" class='signup' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontClick", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">here </a> to sign up!\n        </div>\n\n\n    </div>\n\n\n</div>\n\n\n\n\n\n<div class=\"back easing\" style='width: 465px; text-align: center; color: rgb(51, 51, 51); border-radius: 3px; position: relative; bottom: 500px; height: auto;'>\n\n    <div class=\"head controlbtn-field\" style=\"width: 465px;background-color: #f3f3f3;\">\n        <div type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"closeview\"><i class=\"icon-remove\"></i></div>\n        <div style=\"font-size: 22px; font-weight: bold; margin: 20px auto 15px;\"> \n            Sign Up for your Free Account!\n        </div>\n\n        <div id=\"dd2\" class=\"wrapper-dropdown-3\" tabindex=\"1\" style=\"top: 3px; height: 45px;\">\n            <div>\n                <div id=\"dropdown-cover\" class=\"dropdown_test_2\"  style=\"float: left; bottom: 10px; position: relative; width: 64px; height: 45px; margin-left: -11px; padding-left: 35px; border-radius: 3px 0 0 3px;\">\n                    <div class=\"login-icon\">\n                        <i class=\"icon-facebook icon-large\">\n                        </i>\n                    </div>   \n                </div>\n                <div  id=\"dropdown-cover\" onclick=\"Facebook(650, 400);\" style=\"float: right; bottom: 10px; position: relative; width: 204.5px; height: 45px; margin-right: -9.5px; border-radius: 0 3px 3px 0;\">\n                    <div class=\"sign-in-with\" >Sign In with Facebook</div>\n                </div>\n            </div>\n            <ul class=\"dropdown\"  style=\"width:270px\">\n                <li  onclick=\"LinkedIn(650, 400);\" ><a style=\"color:rgb(0,172,237)\" href=\"#\"><i class=\"icon-linkedin-sign icon-large\"></i>Sign in with LinkedIn</a></li>\n                <li  onclick=\"Google(650, 400);\" ><a style=\"color:rgb(211,72,54)\" href=\"#\"><i class=\"icon-google-plus icon-large\"></i>Sign in with Google+</a></li>\n                <li  onclick=\"Yahoo(650, 400);\" ><a style=\"color:rgb(123,0,153)\" href=\"#\"><img src='../../../images/yahoo.png' style='width: auto; height: 35px; float:left;margin: -3% -5% 0 6%;'>Sign in with Yahoo</a></li>\n                <!--                <li  onclick=\"Sina(650, 400);\" ><a style=\"color:rgb(245,213,0)\" href=\"#\"><img src='../../../images/sina.png' style='width: auto; height: 35px; float:left;margin: -3% -3% 0 6%;'>Sign in with Sina</a></li>-->\n                <li  onclick=\"QQ(650, 400);\" ><a style=\"color:rgb(62,59,62)\" href=\"#\"><img src='../../../images/qq.png' style='width: auto; height: 35px; float:left;margin: -3% -2% 0 7%;'>Sign in with QQ</a></li>\n            </ul>\n        </div>\n        <div style=\"font-size: 11px; margin-bottom: 10px;\">\n            Don't worry , we'll never post without your permission.\n        </div>\n    </div>\n    <div class=\"panelcircle\" style=\"position: absolute; right: 0; top: 160px; margin: auto;left: 0; font-weight: bold\">OR</div>\n\n    <div class=\"content\" style=\"width: 465px;\">\n\n        <div style=\"font-size: 14px; font-weight: bold; margin: 15px auto 10px;\">\n            Sign Up with your Email Address:\n        </div>\n\n\n\n\n\n\n        <iframe id=\"register_iframe\" style='background: transparent;width: 350px;height: 270px;overflow: hidden; border:none;' ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.iframeURL")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></iframe>\n\n\n        <div  type=\"button\" class=\"new-btn\" id=\"goback\" style=\"position: absolute;top: 478px;left: 165px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n              Go Back\n    </div>\n\n</div>\n\n\n\n\n\n\n\n</div>\n</div>\n\n\n\n\n<script>\n\n\n\n\n\n                        function DropDown(el) {\n                            this.dd = el;\n                            this.placeholder = this.dd.children('span');\n                            this.opts = this.dd.find('ul.dropdown > li');\n                            this.val = '';\n                            this.index = -1;\n                            this.initEvents();\n                        }\n                        DropDown.prototype = {\n                            initEvents: function() {\n                                var obj = this;\n\n                                obj.dd.on('click', function(event) {\n                                    $(this).parents('div .wrapper-dropdown-3').toggleClass('active');\n                                    return false;\n                                });\n\n\n                                obj.opts.on('click', function() {\n                                    var opt = $(this);\n                                    obj.val = opt.text();\n                                    obj.index = opt.index();\n                                    obj.placeholder.text(obj.val);\n                                });\n                            },\n                            getValue: function() {\n                                return this.val;\n                            },\n                            getIndex: function() {\n                                return this.index;\n                            }\n                        };\n                        $(function() {\n\n\n                            var dd = new DropDown($('.dropdown_test'));\n\n                            $(document).click(function() {\n                                // all dropdowns\n                                $('.wrapper-dropdown-3').removeClass('active');\n                            });\n                            var dd2 = new DropDown($('.dropdown_test_2'));\n\n                            $(document).click(function() {\n                                // all dropdowns\n                                $('.wrapper-dropdown-3').removeClass('active');\n                            });\n\n                        });\n\n</script>\n\n");
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
  data.buffer.push("\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div> <!-- #container -->\n</div><!-- #wrapper -->\n\n");
  return buffer;
  
});

Ember.TEMPLATES["masonryCollection"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n            <ul class=\"user-stats\" id=\"user-stats\">\n                <li id=\"defualt\" ><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Collections • ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profileCollectionStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n                <li ><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPartner", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Partners • ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profilePartnerStatistics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n            </ul>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n            <ul class=\"user-stats\" id=\"user-stats\">\n                <li id=\"defualt\" ><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Collections</a></li>\n\n\n            </ul>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.CollectionsView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "profilePartners", options) : helperMissing.call(depth0, "render", "profilePartners", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "profileFollowers", options) : helperMissing.call(depth0, "render", "profileFollowers", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div style=\"width: 100%; margin: 100px auto; left: 0;right: 0;position: relative;display: block;\">\n\n\n        <div class=\"style-box t-style-box\" style=\"width: 87%; min-width: 796px; height: 50px; background: white;margin: -70px auto;left: 0;right: 0;position: relative;display: block;\">\n\n            <div style=\"margin: 4px 20px 4px 40px; font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);float: left;\" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profileSelectionStatus", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.partnerPage", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.userTage", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n\n\n        </div>\n\n    <div id=\"masonry_user_container\"  class=\"centered clearfix masonry_push_down\">\n\n       <!-- masonry from here -->\n\n\n\n  \n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "collectionTag", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "partnerTag", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "followerTag", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n\n\n\n\n    </div>\n\n</div>\n\n");
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
  data.buffer.push("\n\n   \n\n        <div class=\"box style-box t-style-box col2\" id=\"addNew\" >\n\n            <div id=\"tagetUplaod\" ");
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
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.PhotoCreateView", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n \n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n        <p style=\"font-weight: bold;\">\n            Drag and drop. \n        </p>\n    </div>\n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n        Choose \n        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div> \n    </div> \n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "uploadImageContent", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        <span class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "back", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Close</span>\n        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Upload</span> \n    </div>\n</div>\n");
  return buffer;
  }
function program6(depth0,data) {
  
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
  data.buffer.push("\n        <script>\n\n                    $(function() {\n                        var $container = $('#masonry_photo_collection_container');\n                        window.setTimeout(function() {\n                            $container.masonry();\n                            $container.masonry('reload');\n                        }, 400);\n                    });\n\n        </script>\n\n        ");
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

  data.buffer.push("\n\n\n\n<div style=\"width: 100%; margin: 100px auto; left: 0;right: 0;position: relative;display: block;\">\n    <!-- masonry from here -->\n\n        <div class=\"style-box t-style-box\" style=\"width: 87%; min-width: 796px; height: 50px; background: white;margin: -70px auto;left: 0;right: 0;position: relative;display: block;\">\n            <div style=\"margin: 4px 20px 4px 40px; font-size: 18px; text-shadow: 0 1px 0 rgba(255,255,255,0.8);float: left;\" >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"hint--right hint--rounded\" data-hint=\"Go back\" style=\"margin: 4px 0; display: inline-block;\">\n                <i class=\"icon-level-up edit-btn\" style=\"color: #555; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-size: 20px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </div>\n\n\n        </div>\n\n    <div id=\"masonry_photo_collection_container\"  class=\"centered clearfix masonry_push_down\" >\n\n        <!--SECTION CONTROL BAR-->\n\n\n\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_profile_editing_mode", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.content", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n    </div>\n\n</div>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["photo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

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
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "render", "contact", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    <div class=\"article-title\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.selectedPhoto.photo_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n\n                    <div class=\"article-text\">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "controller.selectedPhoto.photo_caption", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n\n\n                    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <div class='hint--left hint--rounded' data-hint='Edit Photo Info' style=\"position: absolute; right: 10px; top: 135px;\">\n                    <i class=\"icon-edit\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingPhotoMegaData", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                </div>\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                    ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_title"),
    'id': (""),
    'class': ("edit_photo-titile_field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n                    ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("controller.selectedPhoto.photo_caption"),
    'id': (""),
    'class': ("edit_photo-caption_field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n\n                    <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n\n                        <div  type=\"button\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "selectedPhoto", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n                        <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n                    </div>\n\n                    ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                    <div class=\"comment-item\">\n\n                        <div class=\"comment-position\">\n                            <a class=\"profilepic-comment-container\" href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                <img class=\"profilepic_comment\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("commenter_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                            </a>\n                            <div style=\"\">\n                                <div class=\"comment-namentime\">\n                                    <div class=\"namentime_position\">\n                                        <a class=\"comment-username\"  href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "commenter_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">\n                                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </a>\n                                        <div class=\"posttime-container\">\n                                            <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "time_stamp", options) : helperMissing.call(depth0, "date", "time_stamp", options))));
  data.buffer.push("</span>                  \n                                        </div>\n                                    </div>\n\n                                    <div class=\"reply-comment\">\n                                        <!--this div for reply-->\n                                    </div>\n\n                                </div>\n\n                                <div class=\"comment-content\">\n                                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                                    <!-- for +someone into the conversation-->\n                                    <span>\n                                        <span></span>\n                                        <a></a>\n                                    </span>\n                                </div>\n\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    ");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"objectview-wrapper\">\n\n\n\n\n\n    <div class=\"objectview-left\">\n\n        <div class=\"exit\">\n            <div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeWindow", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                <i class=\"icon-remove\"></i>\n            </div>\n        </div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.collectable", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"top-controlbar\" >\n            <!--            <div class=\"icon-on-black\" style=\"left: 8px;\"><i class=\"icon-thumbs-up\"></i></div>-->\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Collect this photo to your own collection.\" style=\"left: 50px;\" >\n                <i class=\"icon-folder-close\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchCollection", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n            </div>\n            <!--    <div class=\"icon-on-black\" style=\"height: 44px;position: absolute;width: 44px;\"><i class=\"icon-share-alt\"></i></div>     -->\n        </div>\n\n        <div class=\"mainfeature\">\n            <div class=\"previous\" style=\"width: 50%; height: 100%; float: left;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n            <div class=\"next\" style=\"width: 50%; height: 100%; float: right;\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.PhotoDisplayAreaView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <!--THIS IS THE ALBUM BOX-->\n\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.ShowAlbumView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n        <!--THIS IS THE ALBUM BOX-->\n\n        <div class=\"bottom-controlbar\" >\n            <div class=\"text-on-black\" style=\"right: 132px;\"></div>\n            <div class=\"icon-on-black\"  ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previesImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-arrow-left\"></i>\n            </div>\n            <div class=\"icon-on-black hint--rounded hint--top\" data-hint=\"Show other photos in this collection.\" style=\"left: 44px;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "popupAibum", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-th\"></i>\n            </div>\n            <div class=\"icon-on-black\" style=\"left: 88px;\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextImage", {hash:{
    'on': ("click"),
    'target': ("controller")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <i class=\"icon-arrow-right\"></i>\n            </div>\n            <div class=\"text-on-black\" style=\"left: 132px; top:0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.image_no", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </div>\n        </div>\n\n\n\n\n    </div>\n\n\n    <div class=\"objectview-right\">\n\n        <!-- USER SECTION -->\n        <div style=\"cursor: pointer;\">\n            <div class=\"object-poster easing\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <div class=\"profilepic-container\">\n                    <a class=\"profilepic\" href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.megaResouce.owner_profile_pic")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /></a>              \n                </div>\n                <div class=\"poster_user\" >\n                    <a class=\"poster-name\" href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToProfile", "megaResouce.owner_id", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.owner_title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                    <span class=\"posttime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "controller.megaResouce.created", options) : helperMissing.call(depth0, "date", "controller.megaResouce.created", options))));
  data.buffer.push(" </span>\n                </div>\n                <div class=\"contactmebtn hint--rounded hint--left\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                    <a class=\"contactmeicon\" href=\"#\" style=\" width: 35px; height: 35px;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  >\n\n                       <img src=\"../images/mail_24dark.png\" style=\"vertical-align: 6px; width: 15px;\"/>\n                    </a>\n                </div>\n            </div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "controller.contact", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n        </div>\n\n        <!-- OBJECT DESCRIBTION SECTION -->\n        <div>\n            <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setTitleTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <div class=\"collapes-title_inner\">\n                    About\n                </div>\n             \n\n                \n                <div class=\"dropdownicon\" >\n                    <i class=\"icon-angle-down\"></i>\n                </div>\n            </div>\n\n\n\n\n            <div class=\"collapes-container\"   id=\"article_action\" style=\"display:block\">\n                <div  class=\"collapes-container_inner\">\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controller.enableToEdit", {hash:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n                </div>\n\n\n\n\n            </div>\n\n\n\n\n        </div>\n\n\n\n\n        <!-- OBJECT DISCUSSION SECTION -->\n\n        <div>\n            <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                <div class=\"collapes-title_inner\">\n                    Discussion\n                </div>\n                <div class=\"dropdownicon\">\n                    <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n                </div>      \n            </div>\n\n\n\n            <div class=\"collapes-container\"  id=\"discuss_action\" style=\"display:block\">\n                <div class=\"collapes-container_inner\">\n\n                    <div class=\"show-comment\">\n                        <div class=\"show-comment_container\">\n                            <span class=\"show-comment_inner\">\n                                <span class=\"comment-amount\" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.megaResouce.comments.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n                                <span class=\"comment-amount\" > comments   </span> \n                            </span>\n                        </div>\n\n                        <div class=\"object-like\" style=\"\"></div>\n                        <div class=\"object-save\" style=\"\"></div>\n                    </div>\n                    <div class=\"addcommnetbox\" role=\"button\" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "STRING",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComment", {hash:{
    'target': ("view"),
    'on': ("click")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" id=\"addcommetBut\" >\n                        add comment...\n                    </div>\n                    <div class=\"addcommnetbox-container\" id=\"commentBox\" style=\"display: none\">\n                        <div style=\"margin:0 auto; padding: 0 0 15px 38px;\">\n                            <a> \n                                <img class=\"profilepic_comment\"  style=\"float: left; margin: 4px 0 0 -38px; margin-top: 0;\"");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.currentUser.photo_url")
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
  data.buffer.push(">Post</div>\n                            </span>\n\n                        </div>\n                    </div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controller.megaResouce.comments", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n\n\n                </div>\n            </div>\n\n        </div>\n\n\n\n\n\n\n\n\n    </div>\n\n\n</div>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["photoCreate"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n        <p style=\"font-weight: bold;\">\n            Drag and drop. \n        </p>\n    </div>\n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n        Choose \n        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
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


  data.buffer.push("\n\n\n\n\n\n    <img class=\"mainfeature_object\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.selectedPhoto.photo_image_original_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n  \n");
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
  data.buffer.push("</a></span>\n                        <ul>\n                            <li>&nbsp;</li>\n                            <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -80px;  z-index: -1;\"></div>\n                            ");
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
  data.buffer.push("/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" > ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n\n                    ");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n\n\n\n\n<div class=\"plaform_bar\" >\n    <img src=\"../../../images/reflection.png\"/>\n    <div id=\"navContainer\" class=\"easing\" ");
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
    'src': ("controller.user.photo_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic_user\"/></div>\n            </li>\n\n            <li style=\"margin-top: 20px;\"> <span><a href=\"#\"> <i class=\"icon-eye-open\" style=\"font-size: 20px;\"></i></a></span>\n                <ul class=\"firstList\" >\n                    <li>&nbsp;</li>\n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -155px; z-index: -1;\"></div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.categorys", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </li>\n            <li> <span><a href=\"#\"> <i class=\"icon-folder-open\" style=\"font-size: 20px;\"></i></a></span>   \n                <ul>\n                    <li>&nbsp;</li>\n                    <div style=\"width: 120%; height: 150%; position: absolute;margin-left: -20px; margin-top: -50px;  z-index: -1;\"></div>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.user.collections", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </li>\n\n            <script>\n\n                $(\"#navContainer > ul > li >span\").hover(function() {\n                    $(\"#navContainer > ul > li\").not(this).removeClass('sidebar-hover');\n                });\n                $(\"#navContainer > ul > li> ul \").hover(function() {\n                    $(this).parent().addClass(\"sidebar-hover\");\n                });</script>\n\n\n\n\n            <li> <div><a href=\"#\"> <i class=\"icon-question-sign\" style=\"font-size: 20px;\"></i></a></div>   \n            </li>\n            <li> <div><a href=\"#\" onclick=\"logout();\"> <i class=\"icon-off\" style=\"font-size: 20px;\"></i></a></div>   \n            </li>\n        </ul>\n\n\n    </div>\n\n    <div class=\"showsidebar easing\"><k class=\"icon-circle-arrow-right\"></k></div>\n\n</div>\n\n\n\n\n<script>\n\n                function logout() {\n\n                    var address = document.URL;\n                    var domain = address.split(\"/\")[2];\n                    $.ajax({\n                        type: 'POST',\n                        url: 'http://' + domain + '/site/logout',\n                        contentType: 'application/json; charset=uft-8',\n                        dataType: 'json',\n                        success: function() {\n\n                        }\n                    });\n                    localStorage.clear();\n                }\n\n\n\n\n</script>\n");
  return buffer;
  
});

Ember.TEMPLATES["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

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
  data.buffer.push("\n                                <div style=\"display: inline-block; width: 350px;\">\n                             \n                ");
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
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin:10px auto;display: block;width: 150px;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisProfile", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-circle-blank' >&nbsp; </i> Following</div>\n                            ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div href=\"#question_modal\" role=\"button\" class=\"new-btn green-btn\" data-toggle=\"modal\" style=\"margin:10px auto;display: block;width: 150px;\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "followThisProfile", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class='icon-plus' >&nbsp; </i> Follow</div>\n\n                            ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                            <div>\n                                <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'><i class='icon-phone' style='margin-right: 10px;'></i>Contact Detail</div>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n                            ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <div class=\"edit-btn easing hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "model.phone_number", "controller.contact", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                     <i class=\"icon-edit\" ></i>\n                                </div>\n                                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                    ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("first_name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("last_name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "first_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "last_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                    ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                    ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("model.profile_category")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <th class=\"Contact_2child\"><a >");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.profile_category", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></th>\n                                    ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                    ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("address")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                    ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                    ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("profile_contact_number")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "profile_contact_number", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                    ");
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                    ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("insert-contactdetails"),
    'value': ("website")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <th class=\"Contact_2child\"><a href=\"http://");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "model.profile_website", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" target=\"blank\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "website", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></th>\n                                    ");
  return buffer;
  }

function program37(depth0,data) {
  
  
  data.buffer.push("\n\n                            ");
  }

function program39(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"buttons\" style=\"position: relative;display: block;margin: 10px auto 0;text-align: center;\">\n\n                                <div  type=\"button\" class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.contact", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-ok icon-white\"></i></div>\n\n                                <div  type=\"button\" class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.contact", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> <i class=\"icon-remove\"></i></div>\n\n                            </div>\n                            ");
  return buffer;
  }

function program41(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(42, program42, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program42(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"edit-btn easing hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "model.profile_name", "controller.timeSetting", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <i class=\"icon-edit\"></i>\n                            </div>\n                            ");
  return buffer;
  }

function program44(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n\n                            <table id=\"aside_contact\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},inverse:self.program(47, program47, data),fn:self.program(45, program45, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},inverse:self.program(51, program51, data),fn:self.program(49, program49, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </tr>\n                                </tbody>\n                            </table>\n\n\n                            ");
  return buffer;
  }
function program45(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <tbody style=\"display: inline-block; vertical-align: top;\">\n                                    <tr style=\"\">\n                                        <th>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "day", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                        ");
  return buffer;
  }

function program47(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("inserthours-day"),
    'value': ("day")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  return buffer;
  }

function program49(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                        <th class=\"Contact_2child\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "time", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                                        ");
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                        ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'class': ("inserthours-time"),
    'value': ("time")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                                        ");
  return buffer;
  }

function program53(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n                            <div style=\"width: 75px;margin: auto;\">\n                                <div class=\"new-btn blue-btn\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.timeSetting", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                                <div class=\"new-btn\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.timeSetting", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove icon-white\"></i></div>\n                            </div>\n                            ");
  return buffer;
  }

function program55(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                                    <div style=\"height: 300px;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'id': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'id': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("model.profile_about_us"),
    'id': (""),
    'class': ("")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                    <div style=\"float: right;\">\n                                        <div class=\"new-btn blue-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yes", "controller.aboutMe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-ok icon-white\"></i></div>\n                                        <div class=\"new-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "no", "controller.aboutMe", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-remove\"></i></div>\n                                    </div>\n                                    ");
  return buffer;
  }

function program57(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(58, program58, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </div>\n                                <div style=\"display: block;\">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "model.profile_about_us", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                                ");
  return buffer;
  }
function program58(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <div class=\"edit-btn hint--rounded hint--bottom\" data-hint=\"Edit content\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEditing", "model.about", "controller.aboutMe", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                         <i class=\"icon-edit\"></i>\n                                    </div>\n                                    ");
  return buffer;
  }

function program60(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab4\" data-toggle=\"tab\">Authority Settings</a></li>\n                    ");
  return buffer;
  }

function program62(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program64(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "HubStar.SingleFileUploaderView", {hash:{},inverse:self.noop,fn:self.program(65, program65, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program65(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <div style=\"position: relative; margin: 15px auto;height: 520px; width: 87%; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\">\n                        <div style=\"top: 190px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n\n\n                            <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n                            <p style=\"font-weight: bold; margin: 10px;\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.UploadImageMode", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n                            </p>\n                            <span style='font-size: 20px;display: block;line-height: 25px;'>Please select one photo for your choice.</span>   \n                            <span style='font-size: 20px;display: block;line-height: 25px;'> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.RequiredImageSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                            <span style='font-size: 20px;display: block;line-height: 25px;'> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.CurrentImageSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                            \n                        </div>\n                        <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 550px; position: absolute;left: 0;\">\n                            Choose \n                            <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.SingleImageInputButtonView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                            <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> </div>\n                        </div>\n\n                        <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:block\">\n                            <div style=\"position: relative;margin:3px; display: inline-block; vertical-align: top; min-width: 150px;text-align: center;\">\n                                <div>\n                                    <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  style=\"max-width: 140px; max-height: 150px;\">\n                                    <div id='uploadStyleImg' style=\"display: none;\">\n                                        <img style=\"width: 25px; height: 25px;position: absolute;top: 40%;left: 62px;\" src=\"../../../images/uploadphotos_spinner.gif\"/>\n                                    </div>\n                                </div>\n                                <div style=\"margin: 2px 0 5px; font-size: 13px; text-overflow:ellipsis; text-align: center; width: 150px;overflow: hidden;word-wrap: break-word;line-height: 15px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "newStyleImageName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <div class=\"\" style=\"margin-top: 20px;\">\n                        <div class=\"controlbtn\" style=\"left: 300px;\">\n                            <a href=\"#tab1\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><span class=\"new-btn\">Close</span></a>\n\n                            <span id=\"photoUploadbtn\" class=\"disabled-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "photoUpload", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Upload</span>\n                        </div>\n                    </div>\n                    ");
  return buffer;
  }

function program67(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                    <div class='' style='position:relative;height: 85px; width: 100%;background-color: #fafafa;text-align: left;color: #555;padding: 10px 25px;text-shadow: 0 1px 0 rgba(255,255,255,0.8);'>\n                        <span style=\"position: relative;display: inline-block;font-size: 40px;margin: 10px 0;vertical-align: top;\"><k class='icon-ok-circle'></k></span>\n                        <span style=\"position: relative;width: 87%;display: inline-block;margin: 10px 15px;\">\n                            <span style='font-size: 20px;display: block;line-height: 25px;'>Congratulations! Your Photos have been uploaded!</span>\n                            <span style='font-size: 13px;margin: auto;  display: block;line-height: 16px;'></span>\n                        </span>\n                    </div>\n                    <div style=\"position: relative; margin: auto;height: 520px; width: 690px; overflow: hidden;line-height: 510px;\">\n                        <div style=\"position: relative;margin:3px;text-align: center;overflow: hidden;\">\n                            <img  ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("newStyleImageSource")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                        </div>\n                    </div>\n                    <div class=\"\" style=\"margin-top: 20px;\">\n                        <div class=\"controlbtn\" style=\"left: 34%;\">\n                            <a href=\"#tab1\" data-toggle=\"tab\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetNewStyleImageSource", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">   <span class=\"new-btn\" >Finish</span> </a>\n                        </div>\n                    </div>\n                    ");
  return buffer;
  }

function program69(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

function program71(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "masonryCollectionItems", options) : helperMissing.call(depth0, "render", "masonryCollectionItems", options))));
  data.buffer.push("\n\n\n");
  return buffer;
  }

function program73(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  data.buffer.push("<div class=\"profilegb\" style=\"background: #fff url('../images/texture.png') repeat;width: 100%;height: auto; margin-top: 45px;\">\n    <div class=\"profile-wallpaper\" style=\"width: 100%; height: 500px; overflow: hidden; position: fixed;\">\n        <img  ");
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
  data.buffer.push("\n    </div>\n\n</div>\n\n<div class=\"hover panel\" style='z-index: 0; float: none;position: relative; width: 87%; height: auto; margin:  auto; background: #fff; box-shadow: 0px 0px 8px #555; border-radius: 3px 3px 0 0;max-width: 1260px;min-width: 1250px;'>\n\n    <div class=\"front\" style=\"text-align: inherit; width: auto; height: auto; box-shadow: none; border: none; position: relative;\">\n\n        <div class=\"profilewrapper\" style=\"\">\n            <!--corpbanner-->\n\n            <div class=\"profilecorpbanner\"    style=\"overflow:hidden;width: 100%; max-height: 650px; border-radius: 3px 3px 0 0; position: relative;min-height: 400px;\">\n                <img ");
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
  data.buffer.push("\n                <div class=\"corpbanner_mask\" style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute;bottom:0; width: 100%; height: 200px;\">\n                    <div class=\"corpbanner_content\" style=\"position: absolute;bottom:0;margin-left: 30%;width: 70%;\">\n                        <div class=\"main_title\" style=\"height: 100px;\">\n                            <div>\n\n\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editing", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n\n                            <!--contact me-->\n                            <div class=\"contactmebtn hint--left hint--rounded\" data-hint=\"Contact us!\">\n                                <a class=\"contactmeicon\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editingContactForm", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"../images/mail_24dark.png\"/></a>\n                            </div>\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div style=\"position: relative; width: 100%;background-color: rgb(242,240,240); border-radius: 0 0 3px 3px;\">\n\n                <!--PROFILE PAGE LEFT SIDE-->\n\n                <div class=\"profileaside\" style=\"background-color: rgb(242,240,240); width: 29.5%; min-width: 230px;height: auto; border-radius:3px 0 0 0; display: inline-block;vertical-align: top;\">\n                    <div class=\"profileaside_content\" style=\"margin:auto; margin-top: -200px; position: relative; width:87%;\">\n\n                        <div class=\"aside-profilepic\" style=\"padding: 20px 5px; border-bottom: 1px solid #ccc;\">\n                            <div style=\"width: 200px; min-height: 200px; display: block;margin: 20px auto; line-height: 200px;\">\n                                <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"border:5px solid white;box-shadow: 0px 0px 5px #888;\">\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.follow_status", {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                        <!--PROFILE CONTACT SECTION-->\n\n                        <div class=\"aside-container\" style=\"padding: 20px 0; border-bottom: 1px solid #ccc; border-top: 1px solid #fff; font-size: 14px;margin: auto;width: 95%;\">\n\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingContact", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            <table id=\"aside_contact\">\n                                <tr>\n                                    <th>Contact:</th>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </tr>\n                                <tr>\n                                    <th>Category:</th>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </tr>\n                                <tr>\n                                    <th>Address:</th>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </tr>\n                                <tr>\n                                    <th>Phone:</th>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </tr>\n                                <tr>\n                                    <th>Website:</th>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingContact", {hash:{},inverse:self.program(35, program35, data),fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </tr>\n\n                            </table>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingContact", {hash:{},inverse:self.program(39, program39, data),fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        </div>\n                        <!--PROFILE HOURS SECTION-->\n\n                        <div class=\"aside-container\" style=\"padding: 20px 0; border-top: 1px solid #fff; font-size: 14px;margin: auto;width: 95%;\">\n                            <div style='margin-bottom: 15px;display: inline-block;font-size: 18px; vertical-align: top;'><i class='icon-time' style='margin-right: 10px;'></i>Hours</div>\n\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controller.editingTime", {hash:{},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.hours", {hash:{},inverse:self.noop,fn:self.program(44, program44, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingTime", {hash:{},inverse:self.noop,fn:self.program(53, program53, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </div>\n                </div>\n\n                <!--PROFILE PAGE MAIN PART-->\n\n                <div class=\"profilemain\" style=\"display: inline-block; width: 70%;left: 0;right: 0; background-color: white;margin: auto; min-width: 553px;\">\n\n                    <div class=\"profile-main-content\" style=\"margin: 20px auto;width: 90%;\">\n\n                        <div class=\"main_aboutus\" style=\"\">\n                            <div>\n                                <div style=\"display: inline-block;\">\n                                    <p style='margin-bottom: 20px;display: inline-block; font-size: 18px;'>\n                                        <i class='icon-group' style='margin-right: 10px;display: inline-block;'></i>About Us\n                                    </p>\n\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.editingAbout", {hash:{},inverse:self.program(57, program57, data),fn:self.program(55, program55, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                        </div>\n\n\n\n\n\n\n\n\n\n\n                    </div>\n\n\n\n\n                </div>\n            </div>\n        </div>\n        <!-- wrapper   end-->\n\n    </div>\n\n    <div class=\"back t-style-box\"  style='width: 100%;height:auto;  background-color:white; border-radius: 3px;border:none;'>\n        <div style=\"position: relative; top: 0; width: 100%;height: 300px;overflow: hidden; border-radius: 3px 3px 0 0;\">\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.profile_hero_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"width:100%;\"/>\n            <div style=\"background: url('../images/bannershadow.png') repeat-x; position: absolute; width: 100%; height: 200px; bottom: 0;\">\n                <div style='font-size: 45px;color: white;font-weight: bold;line-height: 50px;margin: 40px  60px;bottom: 0;position: absolute;'>\n                    <k class='icon-cogs'>&nbsp;</k>Dashboard</div>\n            </div>\n        </div>\n\n\n\n\n\n\n        <div class=\"tabbable\">\n            <div class=\"tabs-left\">\n                <ul class=\"nav nav-tabs easing\">\n                    <li class=\"active\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab1\" data-toggle=\"tab\">Style up!</a></li>\n                    <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab2\" data-toggle=\"tab\">General Settings</a></li>\n                    <li class=\"easing\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><a href=\"#tab3\" data-toggle=\"tab\">Account Settings</a></li>\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isAdmin", {hash:{},inverse:self.noop,fn:self.program(60, program60, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <li class=\"easing\" style=\"display: none;\" ><a href=\"#tab5\" data-toggle=\"tab\">Profile Hero</a></li>\n                    <li class=\"easing\" style=\"display: none;\" ><a href=\"#tab6\" data-toggle=\"tab\">Profile Picture</a></li>\n                </ul>\n            </div>\n\n            <div class=\"tab-content easing\">\n                <div class=\"tab-pane active\" id=\"tab1\">\n                    <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Style up your profile!</div>\n\n                    <div class='styleup_section'>\n                        <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Profile Picture", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                           <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                                <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Picture</span>\n                            </div>\n                        </a>\n                        <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                            <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                        </div>\n                    </div>\n\n                    <div class='styleup_section easing'>\n                        <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Profile Hero", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                           <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                                <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Hero</span>\n                            </div>\n                        </a>\n                        <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                            <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_hero_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                        </div>\n                    </div>\n\n                    <div class='styleup_section easing'>\n                        <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Background", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                           <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                                <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Background</span>\n                            </div>\n                        </a>\n                        <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                            <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_bg_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                        </div>\n                    </div>\n\n\n\n\n                    <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                        <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n\n                </div>\n\n                <div class=\"tab-pane\" id=\"tab2\">\n\n                    <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">General Settings</div>\n\n                    <table style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                        <tbody class=\"profilesnew-table\" style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                            <tr>\n                                <td>Profile Name*: </td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_name"),
    'class': ("mustFill1"),
    'placeholder': ("Heritage Tiles NZ")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </div>\n                                    <div class=\"mustfull\" id=\"mustFill1\" style=\"display: none\">please fill in info... </div>\n                                </td>\n                            </tr>\n\n\n                            <tr>\n                                <td>Profile Contact:</td>\n                                <td>\n                                    <div  style=\"display: block; margin-bottom: 5px;\" >\n\n                                        <div  style=\"margin: 0 5px 0;width: 48%;display: inline-block;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("first_name"),
    'placeholder': ("First Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                        <div style=\"margin: 0;width: 48%;display: inline-block;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("last_name"),
    'placeholder': ("Last Name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Physical Address:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;height:100px;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("address"),
    'class': ("no-resize"),
    'placeholder': ("Address")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Contact Number:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_contact_number"),
    'placeholder': ("0987364531")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Website:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website"),
    'placeholder': ("yourdomain.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Website URL:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("website_url"),
    'placeholder': ("http://www.yourdomain.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                             <tr>\n                                <td>Profile Cover Text:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("profile_cover_text"),
    'placeholder': ("Small profile description")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                    <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</span>\n                        <span class='new-btn blue-btn flip-back' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n                </div>\n\n\n\n\n\n\n\n                <div class=\"tab-pane\" id=\"tab3\">\n                    <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Account Settings</div>\n\n                    <table style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                        <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n\n                            <tr>\n                                <td>Country*:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("country"),
    'class': ("country"),
    'placeholder': ("New Zealand"),
    'value': ("New Zealand")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                    <div class=\"mustfull\" id=\"country\" style=\"display: none\">please fill in info... </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Region*:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("region"),
    'class': ("region"),
    'placeholder': ("Auckland")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                    <div class=\"mustfull\" id=\"region\" style=\"display: none\">please fill in info... </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Direct Enquiry Email*:</td>\n\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("contact_email"),
    'class': ("mustFill4"),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                    <div class=\"mustfull\" id=\"emailFormat4\" style=\"display: none\">not correct email format.....</div>\n                                    <div class=\"mustfull\" id=\"mustFill4\" style=\"display: none\">please fill in info... </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Secondary  Email (cc):</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("secondary_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>DirectEnquiry Provide Email (bcc):</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("direct_enquiry_provide_email"),
    'class': (""),
    'placeholder': ("superman@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Editor*:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%; height: 100px;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("editors"),
    'class': ("mustFill6 no-resize"),
    'placeholder': ("Ironman@hubstar.com, CaptainAmerica@hubstar.com, hulk@hubstar.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                    <div class=\"mustfill\" id=\"emailFormat6\" style=\"display: none\">not correct email format.....</div>\n                                    <div class=\"mustfull\" id=\"mustFill6\" style=\"display: none\">please fill in info... </div>\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                    <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                        <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n                </div>\n\n                <div class=\"tab-pane\" id=\"tab4\">\n                    <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">Authority Settings</div>\n                    <table class='profilesnew-table' style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                        <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n\n                            <tr>\n                                <td>Active*:</td>\n                                <td>\n                                    <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectActiveDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                         <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectActiveDropdownContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                        <span class=\"caret\"></span>\n                                    </div>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isActiveDropdown", {hash:{},inverse:self.noop,fn:self.program(62, program62, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Deleted*:</td>\n\n                                <td>\n                                    <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectDeleteDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                         <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectDeleteDropdownContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                        <span class=\"caret\"></span>\n                                    </div>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isDeleteDropdown", {hash:{},inverse:self.noop,fn:self.program(62, program62, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td> Package:</td>\n                                <td>\n                                    <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectCategoryDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                         <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectCategoryDropdownContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                        <span class=\"caret\"></span>\n                                    </div>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPackgetDropdown", {hash:{},inverse:self.noop,fn:self.program(62, program62, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                            </tr>\n                            <tr>\n                                <td> Creator:</td>\n                                <td>\n                                    <div class=\"disabled-btn\" style=\"display: block; font-size: 12px;\">\n                                        <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.profile_creator", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Boost:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Domains:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("domains"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                    <div class=\"mustfill\" id=\"emailFormat6\" style=\"display: none\">not correct email format.....</div>\n                                    <div class=\"mustfull\" id=\"mustFill6\" style=\"display: none\">please fill in info... </div>\n                                </td>\n                            </tr>\n                             <tr>\n                                <td>Keywords:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%; height:100px;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("keywords"),
    'class': ("no-resize"),
    'placeholder': ("* Please ensure you use a commer seperated list!!! ie: bathroom, kitchen, living room")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n                    <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                        <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flipFrontBack", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n                </div>\n\n\n\n                <div class=\"tab-pane\" id=\"fileuploader\">\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPhotoUploadMode", {hash:{},inverse:self.noop,fn:self.program(64, program64, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPhotoEditingMode", {hash:{},inverse:self.noop,fn:self.program(67, program67, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n\n</div>\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.switchPhoto", {hash:{},inverse:self.program(71, program71, data),fn:self.program(69, program69, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(73, program73, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["profileFollowers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n\n\n<div class=\"col1 box style-box t-style-box\" style=\"text-align: center; height: 200px;\">\n    <div class=\"usersobject-hover\">\n        <a href=\"#/users/");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "follower_id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\"><img style=\"width: 100%; height: 100%;cursor:pointer\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("follower_profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" /></a>\n\n    </div>\n    <div style=\"height:35px; line-height: 35px;\">\n        <span style=\"font-size: 13px;line-height: 15px; text-shadow: 0 1px 0 rgba(255,255,255,0.8); font-weight: bold;\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </span>\n    </div>\n</div>\n\n\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 100);\n    });\n</script>\n");
  return buffer;
  }

  data.buffer.push("\n\n\n\n\n\n");
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
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.packgeSelection", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                  <span id=\"packgeSelection\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.dropdownCategory", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.packgetDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Category:</td>\n                        <td> \n                            <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.dropdownCategory", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                 <span id=\"dropdownCategory\">Bathrooms</span>\n                                <span class=\"caret\"></span>\n                            </div>\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.projectCategoryDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n\n\n                    <tr>\n                        <td>Physical Address:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;height:100px;\">\n                                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("address"),
    'class': ("no-resize"),
    'placeholder': ("Address")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td>Contact Number:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
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
  data.buffer.push("\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n\n\n                </tbody>\n            </table>        \n\n            <div style=\"border-bottom: 1px dashed #aaa;height: 1px; width: 100%;\"></div>\n\n            <table style=\"padding: 0 20px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px 0;\">\n                <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                    <tr>\n                        <td>Client Name:</td>\n                        <td> \n                            <div style=\"display: block;\">\n                                <div   style=\"margin: 0;width: 100%;\">\n                                    ");
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
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<div class=\"box style-box t-style-box\" id=\"addNew\" style=\"z-index: 1\">\n\n    <div id=\"uploadObject\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newCollection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n         <div class=\"add-new-object-hoverarea easing\">\n\n            <i class=\"icon-plus-sign\"></i>\n        </div>\n        <div class=\"masonry-object t-style-box col2\">\n            <div class=\"add-new-object-content\">\n                <i class=\"icon-group\"></i>\n                <i class=\"icon-book\"></i>\n                <i class=\"icon-picture\"></i>\n                <i class=\"icon-film\"></i>\n            </div>\n\n        </div>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.EditCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n<div class=\"box col2 noStyle1\">\n    <div class=\"masonry-object\">\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "itemProfiles", "", options) : helperMissing.call(depth0, "render", "itemProfiles", "", options))));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\n    </div>\n</div>\n\n<script>\n    $(function() {\n        var $container = $('#masonry_user_container');\n        window.setTimeout(function() {\n            $container.masonry();\n            $container.masonry('reload');\n        }, 10);\n    });\n</script>\n");
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

  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_authentic_user", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n\n\n\n\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
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

  data.buffer.push("\n<h1> profiles</h1>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n");
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

Ember.TEMPLATES["showAlbum"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
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

  data.buffer.push("\n\n\n\n\n\n<div id=\"collection_tab\" style=\"bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:none; position: absolute;z-index: 5; width: 100%; opacity: .9;\">\n    <div style=\"background-color: #333;color: #fff;font-weight: bold;padding: 13px 0 13px 40px;width: 100%;position: relative;display: -moz-inline-box;display: inline-block;\">\n        All photos\n        <div style=\"display: inline-block;\">( ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ) </div>\n    </div>\n    <div class=\"exit\">\n        <div class=\"closeview\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hide", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n            <i class=\"icon-remove\"></i>\n        </div>\n    </div>\n    <div style=\"margin: 15px;overflow: auto;height: 225px;width: 100%;\"> \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["singleFileUploader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n<div style=\"position: relative; margin: 15px auto;height: 520px; width: 690px; background-color: rgba(242,240,240,0.5);border: 3px dashed #aaa;\"> \n    <div style=\"top: 200px;position: relative;margin: auto;width: 80%;font-size: 26px; text-shadow: 1px 1px 0px #fff, -0.5px -0.5px 0px #555;color: #aaa;text-align: center;font-size: 35px;\">\n        <i class=\"icon-upload\" style=\"font-size: 45px;\"></i>\n        <p style=\"font-weight: bold;\">\n            Drag and drop.\n        </p>\n    </div>\n\n    <div class=\"new-btn blue-btn\" style=\"margin: auto; width: 200px; top: 557px; position: absolute;left: 0;right: 67%;\">\n        Choose \n        <div style=\"opacity:0;position: absolute;top: 0px;left: 0;\"> </div> \n    </div> \n\n    <div id=\"dragAndDroppArea\" class=\"dragndropbox\" style=\"display:none\">\n\n   \n    </div>\n</div>\n<div class=\"controlbtn-field\" style=\"margin-top: 20px;\">\n    <div class=\"controlbtn\" style=\"left: 34%;\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        <span class=\"new-btn\" >Close</span>\n        <span class=\"new-btn green-btn\" >Upload</span> \n    </div>\n</div>\n");
  return buffer;
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
    'src': ("controller.user.photo_url")
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
  data.buffer.push("\n\n<p>aaaaaaaaaaaaaaaaaaa</p>\n\n<br />\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                <div class='hashtags' ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'id': ("topics")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topics", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<i class='remove-hashtages' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteTopic", "topics", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">x</i></div>\n\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.UserEditView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.MasonryCollectionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "masonryCollectionItems", options) : helperMissing.call(depth0, "render", "masonryCollectionItems", options))));
  data.buffer.push("\n\n\n\n");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DeleteFunctionView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n");
  return buffer;
  }

  data.buffer.push("<div style=\"width:100%; height:80px; display:block;\"></div>\n<div class=\"user-board\">\n    <div class=\"user-board_left style-box\">\n       <div class=\"user-profilepic-container\"> \n          <div class=\"changeuserprofilepic easing hint--right hint--rounded\" data-hint=\"Choose a profile picture\">\n            <k class=\"icon-edit\"></k>\n          </div>    \n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("controller.user.photo_url_large")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n       </div>\n        <div  type=\"button\" class=\"new-btn green-btn\" style=\"margin: 30px auto 20px;width: 130px;display: block;\">\n            Follow\n        </div>\n\n        <div style=\"padding: 10px 20px;  width: 115%; height: 150px; overflow: auto;background: #F3F3F3;\">\n            <div style=\"font-weight: bold;line-height: 20px; color: #777; font-size: 17px;margin-bottom: 5px; display:inline-block;\">INTEREST </div>\n            <k class=\"icon-plus edit-btn\" style=\"font-size:13px;\"></k>\n            <div style=\"padding: 0 8px; line-height: 25px;\">\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.selected_topics", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n\n\n    </div>\n\n\n\n    <div  class=\"user-board_right style-box\" >\n\n\n   <div id=\"user-board_right_front\">\n        <div class=\"user-cover\">\n             <div  id=\"flip-front\" class='blue-btn new-btn hint--left hint--rounded edit-dashboard-btn' style=\"display: block; margin: 10px;position: absolute;top: 0;right: 0;\" data-hint=\"Dashboard\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> > \n\n                 <i class=\"icon-cogs\" ></i>\n            </div>\n\n            <div style=\"font-size: 26px;font-weight: bold; line-height: 30px; overflow: hidden; display: inline-block;color: white;position: relative;top: 90px;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.user.display_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </div>\n\n        <div style=\"height: 240px; padding: 10px 20px;display: inline-block;position: relative;width: 100%;\">\n            <div style=\"font-size:15px;line-height: 20px;margin: 5px 20px;color: #888; overflow: hidden;height: 200px; text-overflow: ellipsis;\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.user.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </div>\n\n        <div style=\"margin: 0 40px; width:90%; height: 40px; position:relative;\">\n            <ul class=\"locationandlinks\" style=\"margin-left: -10px;\">\n                <li>\n                    <span class=\"locationIcon\"><k class=\"icon-map-marker\"></k></span>\n                    Auckland\n                </li>\n\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\">&nbsp <k class=\"icon-facebook\"> </k></a>\n                </li>\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\">&nbsp <k class=\"icon-twitter\"> </k></a>\n                </li>\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\">&nbsp <k class=\"icon-google-plus\"> </k></a>\n                </li>\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\">&nbsp <k class=\"icon-pinterest\"> </k></a>\n                </li>\n                <li class=\"location_li\">\n                    <a href=\"#\" target=\"_blank\">&nbsp <k class=\"icon-youtube-play\"> </k></a>\n                </li>\n\n            </ul>\n        </div>\n</div>\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.is_click", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n\n</div>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.switchPhoto", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.makeSureDelete", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["userEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "HubStar.DropdownListView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    ");
  return buffer;
  }

  data.buffer.push("\n<div id=\"user-board_right_back\">\n       <div class=\"tabbable\">\n            <div class=\"tabs-left\">\n                <ul class=\"nav nav-tabs easing\">\n                    <li class=\"active\" ><a href=\"#tab1\" data-toggle=\"tab\">CHANGE COVER</a></li>\n                    <li class=\"easing\" ><a href=\"#tab2\" data-toggle=\"tab\">SETTING</a></li>\n                    <li class=\"easing\" ><a href=\"#tab3\" data-toggle=\"tab\">SECURITY</a></li>\n                </ul>\n            </div>\n         <div class=\"tab-content easing\">\n                <div class=\"tab-pane active\" id=\"tab1\">\n                     <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: 10px auto 30px;\">CHANGE COVER</div>\n\n                    <div class='styleup_section'>\n                        <a href=\"#fileuploader\" data-toggle=\"tab\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setUploadImageMode", "Profile Picture", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                           <div class='styleup_uploadbox easing hint--right hint--rounded' data-hint='Upload' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                <i class='icon-upload icon-3x' style=\"width: 30px;margin: auto;display: block;position: relative;top: 40px;\"></i>\n                                <span style=\"font-size: 13px;font-weight:bold;bottom: 20px;position: relative;\">Profile Picture</span>\n                            </div>\n                        </a>\n                        <div style='height: 150px;margin: 10px 15px;display: inline-block; width: auto;line-height: 150px;vertical-align: top;'>\n                            <img style=\"max-height: 100%; width: auto;max-width: 300px;\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n                        </div>\n                    </div>\n\n                     <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                        <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>  \n                </div>\n\n                <div class=\"tab-pane\" id=\"tab2\">\n\n                    <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">SETTING</div>\n\n                    <table class='profilesnew-table' style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin:auto;\">\n                        <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                            <tr>\n                                <td>User Name:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                             <tr>\n                                <td>About me:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%; height:100px;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("keywords"),
    'class': ("no-resize"),
    'placeholder': ("* Please ensure you use a commer seperated list!!! ie: bathroom, kitchen, living room")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td> Location:</td>\n                                <td>\n                                    <div class=\"new-btn\" style=\"display: block;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dropdown", "controller.projectCategoryDropdownType", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                         <span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.projectCategoryDropdownContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                                        <span class=\"caret\"></span>\n                                    </div>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.isPackgetDropdown", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                            </tr>\n                           \n                            <tr>\n                                <td>Facebook:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>Twitter:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("domains"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n\n                        </tbody>\n                    </table>\n\n                    <div style=\"right: 0;margin:10px auto 0;width: 150px;\">\n                        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</span>\n                        <span class='new-btn blue-btn flip-back' ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n\n                </div>\n\n\n                <div class=\"tab-pane\" id=\"tab3\">\n                    <div style=\"font-size: 25px; color: #555; text-align: center;font-weight: bold;margin: auto;\">SECURITY</div>\n\n                    <table class='profilesnew-table' style=\"padding-right: 147px; width: 100%;font-size: 14px;  display: table;border-collapse: separate;border-spacing: 4px;margin: 30px auto;\">\n                        <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n\n                            <tr>\n                                <td>Email:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                           \n                            <tr>\n                                <td>Passwords:</td>\n                                <td>\n                                    <div style=\"display: block;\">\n                                        <div   style=\"margin: 0;width: 100%;\">\n                                            ");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("boost"),
    'class': ("mustFill4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n\n                        </tbody>\n                    </table>\n\n                    <div style=\"right: 0;margin: 30px auto 0;width: 150px;\">\n                        <span class=\"new-btn green-btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUpdate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Save</span>\n                        <span class='new-btn blue-btn flip-back'");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "userDashboardBackButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><k class='icon-group'> &nbsp;</k>Back</span>\n                    </div>\n\n                </div>\n        </div>\n\n\n         </div>\n       </div>\n</div>");
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
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n            <div class=\"collapes-container\">\n                <table style=\"padding: 15px; width: 100%;font-size: 13px;  display: table;border-collapse: separate;border-spacing: 4px;\">\n                    <tbody style=\"display: table-row-group; vertical-align: middle; border-color: inherit;\">\n                        <tr>\n                            <td>Contact:</td>\n                            <td>--</td>\n                        </tr>\n                        <tr>\n                            <td>Category:</td>\n                            <td>--</td>\n                        </tr>\n                        <tr>\n                            <td>Address:</td>\n                            <td>--</td>\n                        </tr>\n                        <tr>\n                            <td>Phone:</td>\n                            <td>--</td>\n                        </tr>\n                        <tr>\n                            <td>Website:</td>\n                            <td>--</td>\n                        </tr>\n                    </tbody>\n                </table>                \n            </div>\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n\n\n\n            <div class=\"collapes-container\">\n                <div  class=\"collapes-container_inner\">\n                    <div class=\"article-title\">Title</div>\n                    <div class=\"article-text\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                </div>\n            </div>\n\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n\n\n            <div class=\"collapes-container\" style=\"height: 150px;overflow-y: auto;\">\n                <div class=\"collapes-container_inner\">\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic1.jpg\" /></a>\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic2.jpg\" /></a>\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic3.jpg\" /></a>\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic4.jpg\" /></a>\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic5.jpg\" /></a>\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic6.jpg\" /></a>\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic7.jpg\" /></a>\n                    <a class=\"sml-partner\" href=\"#\" ><img src=\"../images/profilepic8.jpg\" /></a>          \n                </div>\n            </div>\n            ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n\n\n                <div class=\"collapes-container\" >\n                    <div class=\"collapes-container_inner\">\n\n                        <div class=\"show-comment\">\n                            <div class=\"show-comment_container\">\n                                <span class=\"show-comment_inner\">\n                                    <span class=\"comment-amount\" > 10 </span>\n                                    <span class=\"comment-amount\" > comments</span>\n                                </span>\n                            </div>\n\n                            <div class=\"object-like\" style=\"\"></div>\n                            <div class=\"object-save\" style=\"\"></div>\n                        </div>\n\n                        <div class=\"addcommnetbox-container\">\n                            <div class=\"addcommnetbox\">\n                                Add comments\n                            </div>\n                        </div>\n\n\n                        <div class=\"comment-item\">\n\n                            <div class=\"comment-position\">\n                                <a class=\"profilepic-comment-container\" href=\"#\">\n                                    <img class=\"profilepic_comment\" src=\"../images/profilepic1.jpg\" />\n                                </a>\n                                <div style=\"\">\n                                    <div class=\"comment-namentime\">\n                                        <div class=\"namentime_position\">\n                                            <a class=\"comment-username\" href=\"\" >\n                                                Carmilita Zotomayor-Riveral \n                                            </a>\n                                            <div class=\"posttime-container\">\n                                                <span class=\"posttime\">yesterday 10:14 pm</span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"reply-comment\">\n                                            <!--this div for reply-->\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"comment-content\">\n                                        Thanks. I love vintage photos. More than half a century later, Manhattan has transformed and evolved into what it is today. \n\n                                        <!-- for +someone into the conversation-->\n                                        <span>\n                                            <span></span>\n                                            <a></a>\n                                        </span>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </div>\n\n\n                        <div class=\"comment-item\">\n\n                            <div class=\"comment-position\">\n                                <a class=\"profilepic-comment-container\" href=\"#\">\n                                    <img class=\"profilepic_comment\" src=\"../images/profilepic3.jpg\" />\n                                </a>\n                                <div style=\"\">\n                                    <div class=\"comment-namentime\">\n                                        <div class=\"namentime_position\">\n                                            <a class=\"comment-username\" href=\"\" >\n                                                John Patrick Anthony Cummins\n                                            </a>\n                                            <div class=\"posttime-container\">\n                                                <span class=\"posttime\">yesterday 10:14 pm</span>\n                                                <span class=\"like-amount\">+1</span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"reply-comment\">\n                                            <!--this div for reply-->\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"comment-content\">\n                                        My pleasure! I thought a New Yorker would like it, the island has changed lot in 50 yrs. \n\n                                        <!-- for +someone into the conversation-->\n                                        <span>\n                                            <span></span>\n                                            <a></a>\n                                        </span>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </div>\n\n\n\n\n                    </div>\n                </div>\n                ");
  }

  data.buffer.push("\n\n\n<div class=\"objectview-wrapper\">\n\n    <div class=\"objectview-left\">\n\n        <div class=\"exit\">\n            <div class=\"closeview\" onclick=\"window.history.back();\" >\n                <i class=\"icon-remove\"></i>\n            </div>\n        </div>\n\n\n        <div class=\"top-controlbar\" >\n            <div class=\"icon-on-black\" style=\"left: 8px;\"><i class=\"icon-question-sign\"></i></div>\n            <div class=\"icon-on-black hint--rounded hint--bottom\" data-hint=\"Collect this photo to your own collection.\" style=\"left: 50px;\">\n                <i class=\"icon-folder-close\"></i>\n            </div>\n            <!--    <div class=\"icon-on-black\" style=\"height: 44px;position: absolute;width: 44px;\"><i class=\"icon-share-alt\"></i></div>     -->\n        </div>\n\n\n        <div class=\"mainfeature\">\n            <iframe class=\"mainfeature_object\" width=\"640\" height=\"390\" src=\"http://www.youtube.com/embed/xcLagrZP24w\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n\n\n        <div class=\"bottom-controlbar\" >\n            <div class=\"text-on-black\" style=\"right: 132px;\"> object Name</div>\n            <div class=\"icon-on-black\" >\n                <i class=\"icon-arrow-left\"></i>\n            </div>\n            <div class=\"icon-on-black\" style=\"left: 44px;\">\n                <i class=\"icon-th\"></i>\n            </div>\n            <div class=\"icon-on-black\" style=\"left: 88px;\">\n                <i class=\"icon-arrow-right\"></i>\n            </div>\n            <div class=\"text-on-black\" style=\"left: 132px;\"> 18/30 </div>\n        </div>\n\n    </div>\n\n\n\n\n    <div class=\"objectview-right\">\n\n        <!-- USER SECTION -->\n        <div style=\"cursor: pointer;\">\n            <div class=\"object-poster easing\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNameTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <div class=\"profilepic-container\">\n                    <a href=\"#\"><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("profile_pic_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"profilepic\"/></a>              \n                </div>\n                <div class=\"poster_user\" >\n                    <a class=\"poster-name\" href=\"#\">NAME</a>\n                    <span class=\"posttime\">yesterday 8:37</span>\n                </div>\n\n                <div class=\"contactmebtn hint--rounded hint--left\" data-hint=\"Contact us!\" style=\"position: absolute; right: 15px; top: 23px; bottom: auto;\">\n                    <a class=\"contactmeicon\" href=\"#\" style=\" width: 35px; height: 35px;\">\n                        <img src=\"../images/mail_24dark.png\" style=\"vertical-align: 6px; width: 15px;\"/>\n                    </a>\n                </div>\n            </div>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.nameTag", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n\n        <!-- OBJECT DESCRIBTION SECTION -->\n        <div   >\n            <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setTitleTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <div class=\"collapes-title_inner\">\n                    About\n                </div>\n                <div class=\"dropdownicon\" >\n                    <i class=\"icon-angle-down\"></i>\n                </div>\n            </div>\n\n\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "view.titleTag", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n        </div>\n\n        <!-- OBJECT PARTNER SECTION -->\n        <div>\n            <div>\n                <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setPartnerTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <div class=\"collapes-title_inner\">\n                        Partner\n                    </div>\n                    <div class=\"dropdownicon\" >\n                        <i class=\"icon-angle-down\"></i>\n                    </div>      \n                </div>\n            </div>\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.partnerTag", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n\n\n        <!-- OBJECT DISCUSSION SECTION -->\n        <div>\n            <div>\n                <div class=\"object-collapes-title\" ");
  hashContexts = {'on': depth0,'target': depth0};
  hashTypes = {'on': "STRING",'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDiscussionTag", {hash:{
    'on': ("click"),
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n                    <div class=\"collapes-title_inner\">\n                        Discussion\n                    </div>\n                    <div class=\"dropdownicon\">\n                        <i class=\"icon-angle-down\" style=\"height: 16px; width: 16px;\"></i>\n                    </div>      \n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.discussionTag", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n\n\n\n\n\n\n\n    </div>\n\n\n</div>\n");
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
  
  data.buffer.push("<div class=\"navbar\">\n      <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.2-1</span>\n      </div>\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <div class=\"brand\">\n                <a href=\"/#\">\n                    <img class=\"logonew\" style=\"position: relative; top: 0; margin:0;\" src=\"../../../images/landing-trends.png\">\n                </a>\n            </div>\n\n \n\n            <!-- show if not logged into platform-->\n\n\n            ");

});