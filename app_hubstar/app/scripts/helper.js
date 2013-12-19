

Handlebars.registerHelper('submitButton', function(text) {
    return new Handlebars.SafeString('<button  id="login" type="submit" class="btn btn-primary">' + text + '</button>');
});

Handlebars.registerHelper('plainButton', function(text) {
    return new Handlebars.SafeString('<button   type="submit" class="btn btn-primary">' + text + '</button>');
});

Handlebars.registerHelper('mailto', function(field) {
    var address = this.get(field);
    if (address) {
        return new Handlebars.SafeString('<a href="mailto: ' + address + '" />' + address + '</a>');
    }
});


Handlebars.registerHelper('checkInputFilesSize', function(object) {

    return new Handlebars.SafeString(
            "<p>" + object.length + "</p>"
            );

});

//Handlebars.registerHelper('subtraction', function(minuend, subtrahend) {
//    minuend = Ember.getPath(this, minuend);
//    subtrahend = Ember.getPath(this, subtrahend);
//    return parseInt(minuend) - parseInt(subtrahend);
//});



Ember.Handlebars.registerBoundHelper('length', function(size) {

    if (size === "" || size === null || size === undefined) {
        return 0;
    }
    else {
        var partnerlength = size.split(',');
        return partnerlength.length;
    }


});



Ember.Handlebars.registerBoundHelper('videolength', function(number) {

    if (number === "" || number === null || number === undefined) {
        return 0;
    }
    else if (number.match(/www.youtube.com/g) !== -1 && number.match(/www.youtube.com/g) !== null) {
        return number.match(/www.youtube.com/g).length - 1;
    }

    else
        return 0;


});



Ember.Handlebars.registerBoundHelper('ebooklength', function(number) {

    if (number === "" || number === null || number === undefined) {
        return 0;
    }
    else if (number.match(/library.trendsideas.com/g) !== -1 && number.match(/library.trendsideas.com/g) !== null) {
        return number.match(/library.trendsideas.com/g).length;
    }

    else
        return 0;



});


Ember.Handlebars.registerBoundHelper('date', function(date) {
    if (date === "" || date === null || date === undefined) {
        return "";
    } else {
        var matches = date.match('^[0-9]+$');
        if (matches !== null) {
            return moment.unix(date).fromNow();
        } else {
            return moment(date).fromNow();
        }
    }
});

Ember.Handlebars.registerBoundHelper('dateTImeStamp', function(date) {
    if (date === "" || date === null || date === undefined) {
        return "";
    } else {
        var matches = date.match('^[0-9]+$');
        if (matches !== null) {
            return moment.unix(date).valueOf();
        } else {
            return moment(date).valueOf();
        }
    }
});

Ember.Handlebars.registerBoundHelper('isThumbUped', function(userids, megaId) {
    if (userids === null || userids === undefined)
    {
        userids = "";
    }

    setTimeout(function() {
        if (userids.indexOf(localStorage.loginStatus) !== -1)
        {

            var div_id = "#thumbUpBtn_" + megaId;
            $(div_id).removeClass("new-btn");

        }
    }, 20);
});




Ember.Handlebars.registerBoundHelper('test', function(test) {
});


Ember.Handlebars.registerBoundHelper('form', function(data) {
    var datanew = data.replace(" ", "-");
         var datanewest = datanew.toLowerCase();
         return datanewest;  
});

  