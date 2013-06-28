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

                                obj.get("photo").pushObject(file);
                                arr.addObject(file);


                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        event.preventDefault();
                    }
                    return false;
                }
            });
            return DragNDropController;
        });
