HubStar.SingleImageInputButtonView = Ember.TextField.extend({
    type: 'file',
    classNameBindings: ['new-btn'],
    multiple: true,
    change: function(evt) {
        var controller = this.get('controller');
        console.log(controller);
        var input = evt.target;
        var files = input.files;
        (function(file) {
            var name = file.name;
            var reader = new FileReader();
            reader.onload = function(e) {
                controller.profileStyleImageDrop(e, name);
            }, reader.readAsDataURL(files[0]);
        })(files[0]);
        evt.preventDefault();

    }

});
