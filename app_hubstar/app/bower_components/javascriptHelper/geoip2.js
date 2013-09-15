var geoip2 = function() {
    "use strict";
    function Lookup(successCallback, errorCallback, options, type)
    {
        this.successCallback = successCallback, this.errorCallback = errorCallback, this.timeout = options && void 0 !== options.timeout ? 2e3 > options.timeout ? 2e3 : options.timeout : 1e4, this.w3cGeolocationDisabled = options ? options.w3cGeolocationDisabled || options.w3c_geolocation_disabled : !1, this.enableHighAccuracy = options ? options.enableHighAccuracy : !1, this.geolocation = options && options.hasOwnProperty("geolocation") ? options.geolocation : navigator.geolocation, this.type = type
    }
    var exports = {};
    Lookup.prototype.returnSuccess = function(location) {
        this.successCallback && "function" == typeof this.successCallback && this.successCallback(this.fillInObject(this.objectFromJSON(location)))
    }, Lookup.prototype.returnError = function(error) {
        this.errorCallback && "function" == typeof this.errorCallback && (error || (error = {error: "Unknown error"}), this.errorCallback(error))
    }, Lookup.prototype.objectFromJSON = function(json) {
        return window.JSON !== void 0 && "function" == typeof window.JSON.parse ? window.JSON.parse(json) : eval("(" + json + ")")
    };
    var fillIns = {country: [["continent", "Object", "names", "Object"], ["country", "Object", "names", "Object"], ["registered_country", "Object", "names", "Object"], ["represented_country", "Object", "names", "Object"], ["traits", "Object"]], city: [["city", "Object", "names", "Object"], ["continent", "Object", "names", "Object"], ["country", "Object", "names", "Object"], ["location", "Object"], ["postal", "Object"], ["registered_country", "Object", "names", "Object"], ["represented_country", "Object", "names", "Object"], ["subdivisions", "Array", 0, "Object", "names", "Object"], ["traits", "Object"]]};
    return Lookup.prototype.fillInObject = function(obj) {
        for (var fill = "country" == this.type ? fillIns.country : fillIns.city, i = 0; fill.length > i; i++)
            for (var path = fill[i], o = obj, j = 0; path.length > j; j += 2) {
                var key = path[j];
                o[key] || (o[key] = "Object" == path[j + 1] ? {} : []), o = o[key]
            }
        obj.continent.continent_code !== void 0 && (obj.continent.code = obj.continent.continent_code, delete obj.continent.continent_code);
        try {
            Object.defineProperty(obj.continent, "continent_code", {enumerable: !1, get: function() {
                    return this.code
                }, set: function(value) {
                    this.code = value
                }})
        } catch (e) {
            obj.continent.code && (obj.continent.continent_code = obj.continent.code)
        }
        if ("country" !== this.type)
            try {
                Object.defineProperty(obj, "most_specific_subdivision", {enumerable: !1, get: function() {
                        return this.subdivisions[this.subdivisions.length - 1]
                    }, set: function(value) {
                        this.subdivisions[this.subdivisions.length - 1] = value
                    }})
            } catch (e) {
                obj.most_specific_subdivision = obj.subdivisions[obj.subdivisions.length - 1]
            }
        return obj
    }, Lookup.prototype.geoipLookup = function(httpParams) {
        var param, request, that = this, uri = "//geoip.maxmind.com/geoip/v2.0/" + this.type + "/me?";
        if (!this.alreadyRan) {
            this.alreadyRan = 1, "Microsoft Internet Explorer" === navigator.appName && window.XDomainRequest && -1 == navigator.appVersion.indexOf("MSIE 1") ? (request = new XDomainRequest, httpParams.referrer = document.URL, uri = window.location.protocol + uri, request.onprogress = function() {
            }) : (request = new window.XMLHttpRequest, uri = "https:" + uri);
            for (param in httpParams)
                httpParams.hasOwnProperty(param) && httpParams[param] && (uri += param + "=" + encodeURIComponent(httpParams[param]) + "&");
            uri = uri.substring(0, uri.length - 1), request.open("GET", uri, !0), request.onload = function() {
                if (request.status === void 0 || 200 === request.status)
                    that.returnSuccess(request.responseText);
                else {
                    var error, contentType = request.hasOwnProperty("contentType") ? request.contentType : request.getResponseHeader("Content-Type");
                    if (/json/.test(contentType) && request.responseText.length)
                        try {
                            error = that.objectFromJSON(request.responseText)
                        } catch (e) {
                            error = {code: "HTTP_ERROR", error: "The server returned a " + request.status + " status with an invalid JSON body."}
                        }
                    else
                        error = request.responseText.length ? {code: "HTTP_ERROR", error: "The server returned a " + request.status + " status with the following body: " + request.responseText} : {code: "HTTP_ERROR", error: "The server returned a " + request.status + " status but either the server did not return a body" + " or this browser is a version of Internet Explorer that hides error bodies."};
                    that.returnError(error)
                }
            }, request.ontimeout = function() {
                that.returnError({code: "HTTP_TIMEOUT", error: "The request to the GeoIP2 web service timed out."})
            }, request.onerror = function() {
                that.returnError({code: "HTTP_ERROR", error: "There was an error making the request to the GeoIP2 web service."})
            }, request.send(null)
        }
    }, Lookup.prototype.getGeoIPResult = function() {
        var that = this, w3cOptions = {};
        return this.enableHighAccuracy && (w3cOptions.enableHighAccuracy = this.enableHighAccuracy), w3cOptions.timeout = this.timeout - 1e3, this.w3cGeolocationDisabled ? (that.geoipLookup({geolocation_status: "DISABLED"}), void 0) : (this.geolocation ? (setTimeout(function() {
            that.geoipLookup({geolocation_status: "API_TIMEOUT"})
        }, this.timeout), this.geolocation.getCurrentPosition(function(position) {
            for (var properties = ["latitude", "longitude", "accuracy"], coordinates = {}, i = 0; properties.length > i; i++) {
                var prop = properties[i];
                position.coords[prop] !== void 0 && (coordinates[prop] = position.coords[prop])
            }
            that.geoipLookup(coordinates)
        }, function(error) {
            var errorStrs = ["PERMISSION_DENIED", "POSITION_UNAVAILABLE", "TIMEOUT"];
            that.geoipLookup({geolocation_status: errorStrs[error.code - 1]})
        }, w3cOptions)) : that.geoipLookup({geolocation_status: "UNSUPPORTED"}), void 0)
    }, exports.country = function(successCallback, errorCallback, options) {
        var l = new Lookup(successCallback, errorCallback, options, "country");
        l.getGeoIPResult()
    }, exports.city = function(successCallback, errorCallback, options) {
        var l = new Lookup(successCallback, errorCallback, options, "city");
        l.getGeoIPResult()
    }, exports.cityISPOrg = function(successCallback, errorCallback, options) {
        var l = new Lookup(successCallback, errorCallback, options, "city_isp_org");
        l.getGeoIPResult()
    }, exports.omni = function(successCallback, errorCallback, options) {
        var l = new Lookup(successCallback, errorCallback, options, "omni");
        l.getGeoIPResult()
    }, exports
}();