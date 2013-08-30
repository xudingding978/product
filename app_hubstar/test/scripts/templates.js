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

  data.buffer.push("<div class=\"navbar\">\n      <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.2-1</span>\n      </div>\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <div class=\"brand\">\n                <a href=\"/#\">\n                    <img class=\"logonew\" style=\"position: relative; top: 0; margin:0;\" src=\"../../../images/landing-trends.png\">\n                </a>\n            </div>\n\n \n\n            <!-- show if not logged into platform-->\n\n\n            ");
  data.buffer.push("<div class=\"navbar\">\n      <div style=\"position: absolute;right: 0;z-index: 1;\">\n        <img src=\"../../../images/beta-version.png\"/>\n        <span style=\"position: absolute; top: 21px; left: 33px; font-size: 12px;font-weight: bold;color: #f3f3f3;\" id=\"lastidentifie\">0.2-1</span>\n      </div>\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <div class=\"brand\">\n                <a href=\"/#\">\n                    <img class=\"logonew\" style=\"position: relative; top: 0; margin:0;\" src=\"../../../images/landing-trends.png\">\n                </a>\n            </div>\n\n \n\n            <!-- show if not logged into platform-->\n\n\n            ");
});