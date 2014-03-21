
HubStar.PermissionController = Ember.Controller.extend({
    test: function() {

    },
    checkAuthenticUser: function(owner_email, editors_emails, current_user_email) {

        var authenticUsers = owner_email + "," + editors_emails;
        var is_authentic_user = false;
        console.log(current_user_email);
        if (authenticUsers !== null && authenticUsers !== undefined && current_user_email !== null && current_user_email !== undefined) {
            is_authentic_user = this.setIsAuthenticUser(authenticUsers, current_user_email);           
        }

        return is_authentic_user;
    },
    setIsAuthenticUser: function(authenticUsers, email)
    {
        var is_authentic_user = false;
        if (authenticUsers.indexOf(email) !== -1) {
            is_authentic_user = true;
        }
        else if (email.indexOf('@trendsideas.com') !== -1) {
            is_authentic_user = true;

        }
        else {
            is_authentic_user = false;
        }

        return  is_authentic_user;
    },
    setIsAdmin: function(email)
    {
        var IsAdmin = false;
        if (email.indexOf('@trendsideas.com') !== -1) {
            IsAdmin = true;
        }
        return  IsAdmin;
    }
}
);
