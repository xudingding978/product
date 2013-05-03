define(["ember"], function(Ember) {
    var ApplicationController = Ember.Controller.extend({
        loginStatus: false,
        logout: function() {
            this.set('loginStatus', false);

        },
        login: function() {
            this.set('loginStatus', true);
        },
        getLoginStatus: function() {
            return this.loginStatus;
        },
        handleFileSelect: function(evt) {
            evt.stopPropagation();
            evt.preventDefault();

            var files = evt.dataTransfer.files; // FileList object.

            // files is a FileList of File objects. List some properties.
            var output = [];
            for (var i = 0, f; f = files[i]; i++) {
                output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                        f.size, ' bytes, last modified: ',
                        f.lastModifiedDate.toLocaleDateString(), '</li>');
                console.log("i: " + i);
            }
            document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
        },
        handleDragOver: function(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        }
    }

    );
    return ApplicationController;
});
