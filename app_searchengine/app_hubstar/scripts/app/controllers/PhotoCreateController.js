define(["ember"],
        function(Ember, PhotoModel, Obj, UserModel) {
            var arr = [];
            var PhotoCreateController = Ember.ArrayController.extend({
                content: arr,
                mode: null,
                needs: ['profile'],
                commitFiles: function(files) {
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var content = arr;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                var src = e.srcElement.result;
                                var obj = App.Mega.createRecord({"title": name.toLowerCase(), "type": "photos", "creator": localStorage.user_id});
                                var file = App.Photo.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                                obj.get("photo").pushObject(file);
                                content.addObject(file);
                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        event.preventDefault();
                    }
                },
                setMode: function(mode)
                {
                    this.set("mode", mode);

                }, submit: function()
                {
                    var profileController = this.get('controllers.profile');
                    console.log(profileController.get("model"));
                    //   console.log(this.get("content").get("length"));
                    //  App.store.commit();
                }, back: function()
                {
                    arr = [];
                    this.set("content", arr);
                }, setMegaParameters: function(mega)
                {
//                    mega.set("accessed",null);
//                    mega.set("is_actived",false);
//                    mega.set("is_indexed",false);
//                    mega.set("keywords");
//                    mega.set("photo_caption");
//                    mega.set("object_image_url");
//                    mega.set("object_title");
//                    mega.set("owner_type");
//                    mega.set("owner_profile_pic");
//                    mega.set("owner_title");
//                    mega.set("owner_id");
//                    mega.set("owner_profile_id");

                }
            }
            );
            PhotoCreateController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            PhotoCreateController.Droppable = Ember.Mixin.create(PhotoCreateController, {
                array: arr,
                model: PhotoModel,
                dragEnter: PhotoCreateController.cancel,
                dragOver: PhotoCreateController.cancel,
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
                                var obj = App.Mega.createRecord({"title": name.toLowerCase(), "type": "photos", "creator": localStorage.user_id});
                                var file = App.Photo.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                                obj.get("photo").pushObject(file);
                                arr.addObject(file);
                                //    var article = Article.createRecord({"id": id, "article_title": "article " + name.toLowerCase()});
                                //       file.set("mega", null);
                                //    var article = Article.createRecord({"article_title": "article_title", "article_text": "article_title"});
                                //   article.get("meta").pushObject(obj);

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
            return PhotoCreateController;
        });
