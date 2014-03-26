
HubStar.PermissionController = Ember.Controller.extend({
    test: function() {

    },
    checkAuthenticUser: function(owner_email, editors_emails, current_user_email) {

        var authenticUsers = owner_email + "," + editors_emails;
        var is_authentic_user = false;
        if (authenticUsers !== null && authenticUsers !== undefined && current_user_email !== null && current_user_email !== undefined) {
            is_authentic_user = this.setIsAuthenticUser(authenticUsers, current_user_email);           
        }

        return is_authentic_user;
    },
    checkAuthenticEdit: function(creator, administrator, editor) {
        var authorityLevel = "";
        //if (creator !== null && administrator !== null && editor !== null)
        {
            if (creator !== null &&((creator.indexOf(localStorage.loginStatus) !== -1 &&
                    (creator[creator.indexOf(localStorage.loginStatus) - 1] === "," ||
                            creator[creator.indexOf(localStorage.loginStatus) + localStorage.loginStatus.length] === ",")) ||
                    creator === localStorage.loginStatus)) {
                authorityLevel = "creator";
            }
            else if (administrator !== null&&((administrator.indexOf(localStorage.loginStatus) !== -1 &&
                    (administrator[administrator.indexOf(localStorage.loginStatus) - 1] === "," ||
                            administrator[administrator.indexOf(localStorage.loginStatus) + localStorage.loginStatus.length] === ",")) ||
                    administrator === localStorage.loginStatus)) {
                authorityLevel = "administrator";
            }
            else if (editor !== null&&((editor.indexOf(localStorage.loginStatus) !== -1 &&
                    (editor[editor.indexOf(localStorage.loginStatus) - 1] === "," ||
                            editor[editor.indexOf(localStorage.loginStatus) + localStorage.loginStatus.length] === ",")) ||
                    editor === localStorage.loginStatus)) {
                authorityLevel = "editor";
            }
        }
        return authorityLevel;
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
