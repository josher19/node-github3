/**
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <mike@c9.io>
 */

"use strict";

var error = require("./../../error");
var Util = require("./../../util");

var events = module.exports = {
    events: {}
};

(function() {
    /**
     *  events#get(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.get = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getFromRepo(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFromRepo = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getFromRepoIssues(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFromRepoIssues = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getFromRepoNetwork(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFromRepoNetwork = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getFromOrg(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param org (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFromOrg = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getReceived(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getReceived = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getReceivedPublic(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getReceivedPublic = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getFromUser(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFromUser = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getFromUserPublic(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFromUserPublic = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  events#getFromUserOrg(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param org (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFromUserOrg = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

}).call(events.events);
