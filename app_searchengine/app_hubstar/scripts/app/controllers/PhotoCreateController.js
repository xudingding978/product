define(["ember", 'models/PhotoModel', 'models/MegaModel', 'models/UserModel', ],
        function(Ember, PhotoModel, Obj, UserModel) {
            var arr = [];
            var test = "test";
            var DragNDropController = Ember.ArrayController.extend({
                content: arr,
                mode: null,
                model: PhotoModel,
                commitFiles: function(files) {
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var content = arr;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                var src = e.srcElement.result;
                                var obj = Obj.createRecord({"title": name.toLowerCase(), "type": "photos", "creator": localStorage.user_id});
                                var file = PhotoModel.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                                obj.get("photo").pushObject(file);
                                content.addObject(file);
                                //        App.store.commit();
                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        event.preventDefault();
                    }

                },
                addFile: function(file) {
                    var file = PhotoModel.createRecord(file);
                    this.get('content').addObject(file);
                    console.log(this.get('content').length);
                },
                setMode: function(mode)
                {
                    this.set("mode", mode);
                    console.log(this.get("mode"));
                }
            }
            );
            DragNDropController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            DragNDropController.Droppable = Ember.Mixin.create(DragNDropController, {
                array: arr,
                model: PhotoModel,
                dragEnter: DragNDropController.cancel,
                dragOver: DragNDropController.cancel,
                t: test,
                drop: function(event) {

                    var dataTransfer = event.originalEvent.dataTransfer;
                    var files = dataTransfer.files;
                    var arr = this.array;
                    var that = this;
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                var src = e.srcElement.result;
                                var obj = Obj.createRecord({"title": name.toLowerCase(), "type": "photos", "creator": "king"});
                                var file = PhotoModel.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                                //    var file = PhotoModel.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": "src", "photo_type": type});
                                // var user = UserModel.createRecord({"REC_ID": id, "TENANT_REC_ID": name.toLowerCase()});
                                //   console.log(obj.get("photos").objectAt(0));
                                //    var article = Article.createRecord({"id": id, "article_title": "article " + name.toLowerCase()});
                                //       file.set("mega", null);
                                //    var article = Article.createRecord({"article_title": "article_title", "article_text": "article_title"});
                                //   article.get("meta").pushObject(obj);
                                obj.get("photo").pushObject(file);
                                arr.addObject(file);
                                //      obj.get("users").pushObject(user);
                                //    console.log(obj.get("users").objectAt(0).get("id"));
                                //       console.log(obj);
                                //          obj.get("articles").pushObject(article);
                                //   arr.addObject(file);
                                //     console.log(id);
                                //   obj.get("photos").objectAt(0).set("photo_title", "test.jpg");
                                //       console.log(obj.get("photos").objectAt(0).get("photo_title"));
                                //       console.log(obj.get("articles").objectAt(0).get("article_title"));
                                //               App.store.commit();
//                    $.ajax({
//                        url: 'http://api.develop.devbox/images/Test',
//                        type: 'POST',
//                        data: JSON.stringify(file),
//                        success: function(data) {
//                            console.log(data);
//                        }
//                    });
                                //   console.log(path);
                                //            file.get('transaction').commit();
                                //      



                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        event.preventDefault();
                    }
                    return false;
                }
            });
            return DragNDropController;
        });
