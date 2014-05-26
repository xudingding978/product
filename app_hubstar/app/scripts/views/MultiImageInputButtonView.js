HubStar.MultiImageInputButtonView = Ember.TextField.extend({
    type: 'file',
    classNameBindings: ['new-btn'],
    attributeBindings: ['name'],
    multiple: true,
    change: function(evt) {
        var controller = this.get('targetObject');
        var input = evt.target;
        var files = input.files;
        var that = this;
        (function(file) {
            if (file !== undefined) {
                var name = file.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
                var reader = new FileReader();
                reader.onload = function(e) {
                    controller.profileStyleImageDrop(e, name, that.get("name"));
                }, reader.readAsDataURL(files[0]);
            }
        })(files[0]);
        evt.preventDefault();
        input.onclick = function() {
            this.value = null;
        };
    }
});
