define(["ember", 'models/PhotoModel', 'models/ObjectModel', 'models/ArticleModel', 'guid_creater'],
        function(Ember, PhotoModel, Obj, Article) {
            var arr = [];
            var test = "test";
            var DragNDropController = Ember.ArrayController.extend({
                needs: ['profile'],
                content: arr,
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
                                console.log("ocalStorage.user_id: " + localStorage.user_id);
                                var obj = Obj.createRecord({"id": createGuid(), "title": name.toLowerCase(), "type": "photos", "creator": localStorage.user_id});
                                var file = PhotoModel.createRecord({"photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                                obj.get("photos").pushObject(file);
                                content.addObject(file);
                                App.store.commit();
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
                test: function() {
                    console.log("image test");
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
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                var src = e.srcElement.result;
                                var id = createGuid();
                                var obj = Obj.createRecord({"id": id, "title": name.toLowerCase(), "type": "photos", "creator": localStorage.user_id});
                                var file = PhotoModel.createRecord({"id": id, "photo_title": name.toLowerCase(), "photo_image_url": src, "photo_type": type});
                                file.set("mega", null);
                                //    var article = Article.createRecord({"article_title": "article_title", "article_text": "article_title"});
                                //   article.get("meta").pushObject(obj);
                                file.get("mega").pushObject(obj);
                                arr.addObject(file);
                                
                                //   obj.get("photos").objectAt(0).set("photo_title", "test.jpg");
                                //     console.log(obj.get("photos").objectAt(0).get("photo_title"));
                             App.store.commit();
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
