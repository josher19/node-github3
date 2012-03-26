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

var pullRequests = module.exports = {
    pullRequests: {}
};

(function() {
    /**
     *  pullRequests#getAll(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param state (String): Optional. Validation rule: ^(open|closed)$.
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
     *  pullRequests#get(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
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
     *  pullRequests#create(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param title (String): Required. 
     *    - Param body (String): Optional. 
     *    - Param base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *    - Param head (String): Required. Required string - The branch (or git ref) where your changes are implemented. 
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
     *  pullRequests#createFromIssue(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param issue (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *    - Param head (String): Required. Required string - The branch (or git ref) where your changes are implemented. 
     **/
    this.createFromIssue = function(msg, block, callback) {
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
     *  pullRequests#update(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param state (String): Optional. Validation rule: ^(open|closed)$.
     *    - Param title (String): Required. 
     *    - Param body (String): Optional. 
     **/
    this.update = function(msg, block, callback) {
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
     *  pullRequests#getCommits(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getCommits = function(msg, block, callback) {
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
     *  pullRequests#getFiles(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getFiles = function(msg, block, callback) {
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
     *  pullRequests#getMerged(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getMerged = function(msg, block, callback) {
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
     *  pullRequests#merge(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param commit_message (String): Optional. Optional string - The message that will be used for the merge commit 
     **/
    this.merge = function(msg, block, callback) {
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
     *  pullRequests#getComments(msg, callback) -> null
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
     *  pullRequests#getComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
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
     *  pullRequests#createComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param body (String): Required. 
     *    - Param commit_id (String): Required. Required string - Sha of the commit to comment on. 
     *    - Param path (String): Required. Required string - Relative path of the file to comment on. 
     *    - Param position (Number): Required. Required number - Column index in the diff to comment on. 
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
     *  pullRequests#createCommentReply(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param body (String): Required. 
     *    - Param in_reply_to (Number): Required. 
     **/
    this.createCommentReply = function(msg, block, callback) {
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
     *  pullRequests#updateComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
     *    - Param body (String): Required. 
     **/
    this.updateComment = function(msg, block, callback) {
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
     *  pullRequests#deleteComment(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param number (Number): Required. Validation rule: ^[0-9]+$.
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

}).call(pullRequests.pullRequests);
