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

var issues = module.exports = {
    issues: {}
};

(function() {
    /**
     *  issues#getAll(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param filter (String): Optional. Validation rule: ^(assigned|created|mentioned||subscribed)$.
     *    - Param state (String): Optional. Validation rule: ^(open|closed)$.
     *    - Param labels (String): Optional. String list of comma separated Label names. Example: bug,ui,@high 
     *    - Param sort (String): Optional. Validation rule: ^(created|updated|comments)$.
     *    - Param direction (String): Optional. Validation rule: ^(asc|desc)$.
     *    - Param since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getAll = function(msg, block, callback) {
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
     *  issues#repoIssues(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param milestone (String): Required. Validation rule: ^([0-9]+|none|\*)$.
     *    - Param state (String): Optional. Validation rule: ^(open|closed)$.
     *    - Param assignee (String): Required. String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User. 
     *    - Param mentioned (String): Optional. String User login. 
     *    - Param labels (String): Optional. String list of comma separated Label names. Example: bug,ui,@high 
     *    - Param sort (String): Optional. Validation rule: ^(created|updated|comments)$.
     *    - Param direction (String): Optional. Validation rule: ^(asc|desc)$.
     *    - Param since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.repoIssues = function(msg, block, callback) {
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
     *  issues#getRepoIssue(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     **/
    this.getRepoIssue = function(msg, block, callback) {
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
     *  issues#create(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param title (String): Required. 
     *    - Param body (String): Optional. 
     *    - Param assignee (String): Optional. Optional string - Login for the user that this issue should be assigned to. 
     *    - Param milestone (Number): Optional. Optional number - Milestone to associate this issue with. Validation rule: ^[0-9]+$.
     *    - Param labels (Json): Required. Optional array of strings - Labels to associate with this issue. 
     **/
    this.create = function(msg, block, callback) {
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
     *  issues#edit(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param title (String): Required. 
     *    - Param body (String): Optional. 
     *    - Param assignee (String): Optional. Optional string - Login for the user that this issue should be assigned to. 
     *    - Param milestone (Number): Optional. Optional number - Milestone to associate this issue with. Validation rule: ^[0-9]+$.
     *    - Param labels (Json): Required. Optional array of strings - Labels to associate with this issue. 
     **/
    this.edit = function(msg, block, callback) {
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
     *  issues#getComments(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getComments = function(msg, block, callback) {
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
     *  issues#getComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param id (Number): Required. Validation rule: ^[0-9]+$.
     **/
    this.getComment = function(msg, block, callback) {
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
     *  issues#createComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param body (String): Required. 
     **/
    this.createComment = function(msg, block, callback) {
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
     *  issues#editComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param id (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param body (String): Required. 
     **/
    this.editComment = function(msg, block, callback) {
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
     *  issues#deleteComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param id (Number): Required. Validation rule: ^[0-9]+$.
     **/
    this.deleteComment = function(msg, block, callback) {
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
     *  issues#getEvents(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getEvents = function(msg, block, callback) {
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
     *  issues#getRepoEvents(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getRepoEvents = function(msg, block, callback) {
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
     *  issues#getEvent(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param id (Number): Required. Validation rule: ^[0-9]+$.
     **/
    this.getEvent = function(msg, block, callback) {
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
     *  issues#getLabels(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     **/
    this.getLabels = function(msg, block, callback) {
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
     *  issues#getLabel(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param name (String): Required. 
     **/
    this.getLabel = function(msg, block, callback) {
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
     *  issues#createLabel(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param name (String): Required. 
     *    - Param color (String): Required. Required string - 6 character hex code, without a leading #. 
     **/
    this.createLabel = function(msg, block, callback) {
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
     *  issues#updateLabel(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param name (String): Required. 
     *    - Param color (String): Required. Required string - 6 character hex code, without a leading #. 
     **/
    this.updateLabel = function(msg, block, callback) {
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
     *  issues#getAllMilestones(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param state (String): Optional. Validation rule: ^(open|closed)$.
     *    - Param sort (String): Optional. due_date, completeness, default: due_date Validation rule: ^(due_date|completeness)$.
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getAllMilestones = function(msg, block, callback) {
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
     *  issues#getMilestone(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     **/
    this.getMilestone = function(msg, block, callback) {
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
     *  issues#createMilestone(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param title (String): Required. 
     *    - Param state (String): Optional. Validation rule: ^(open|closed)$.
     *    - Param description (String): Optional. 
     *    - Param due_on (Date): Optional. Optional string - ISO 8601 time. 
     **/
    this.createMilestone = function(msg, block, callback) {
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
     *  issues#updateMilestone(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param title (String): Required. 
     *    - Param state (String): Optional. Validation rule: ^(open|closed)$.
     *    - Param description (String): Optional. 
     *    - Param due_on (Date): Optional. Optional string - ISO 8601 time. 
     **/
    this.updateMilestone = function(msg, block, callback) {
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
     *  issues#deleteMilestone(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     **/
    this.deleteMilestone = function(msg, block, callback) {
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

}).call(issues.issues);
