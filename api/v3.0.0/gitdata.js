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

var gitdata = module.exports = {
    gitdata: {}
};

(function() {
    /**
     *  gitdata#getBlob(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param sha (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getBlob = function(msg, block, callback) {
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
     *  gitdata#createBlob(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param content (String): Required. 
     *    - Param encoding (String): Required. 
     **/
    this.createBlob = function(msg, block, callback) {
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
     *  gitdata#getCommit(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param sha (String): Required. 
     **/
    this.getCommit = function(msg, block, callback) {
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
     *  gitdata#createCommit(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param message (String): Required. String of the commit message 
     *    - Param tree (String): Required. String of the SHA of the tree object this commit points to 
     *    - Param parents (Array): Required. Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided. 
     *    - Param author (Json): Optional. 
     *    - Param committer (Json): Optional. 
     **/
    this.createCommit = function(msg, block, callback) {
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
     *  gitdata#getReference(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param ref (String): Required. String of the name of the fully qualified reference (ie: refs/heads/master). If it doesn’t start with ‘refs’ and have at least two slashes, it will be rejected. 
     **/
    this.getReference = function(msg, block, callback) {
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
     *  gitdata#getAllReferences(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param page (Number): Optional. Page number of the results to fetch. Validation rule: ^[0-9]+$.
     *    - Param per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ^[0-9]+$.
     **/
    this.getAllReferences = function(msg, block, callback) {
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
     *  gitdata#createReference(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param refs (String): Required. String of the name of the fully qualified reference (ie: refs/heads/master). If it doesn’t start with ‘refs’ and have at least two slashes, it will be rejected. 
     *    - Param sha (String): Required. 
     **/
    this.createReference = function(msg, block, callback) {
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
     *  gitdata#updateReference(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param sha (String): Required. 
     *    - Param force (Boolean): Required. Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work. 
     **/
    this.updateReference = function(msg, block, callback) {
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
     *  gitdata#getTag(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param sha (String): Required. 
     **/
    this.getTag = function(msg, block, callback) {
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
     *  gitdata#createTag(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param tag (String): Required. String of the tag 
     *    - Param message (String): Required. String of the tag message 
     *    - Param object (String): Required. String of the SHA of the git object this is tagging 
     *    - Param type (String): Required. String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob. 
     *    - Param tagger.name (String): Required. String of the name of the author of the tag 
     *    - Param tagger.email (String): Required. String of the email of the author of the tag 
     *    - Param tagger.date (String): Required. Timestamp of when this object was tagged 
     **/
    this.createTag = function(msg, block, callback) {
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
     *  gitdata#getTree(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param sha (String): Required. 
     *    - Param recursive (Boolean): Optional. 
     **/
    this.getTree = function(msg, block, callback) {
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
     *  gitdata#createTree(msg, callback) -> null
     *
     *  Params on the `msg` object:
     *    - Param user (String): Required. 
     *    - Param repo (String): Required. 
     *    - Param tree (Json): Required. 
     **/
    this.createTree = function(msg, block, callback) {
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

}).call(gitdata.gitdata);
