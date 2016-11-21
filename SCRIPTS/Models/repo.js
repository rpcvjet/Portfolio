'use strict';
(function (module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.get call
    $.when(
      $.get('/github/users/rpcvjet/repositories'),
      $.get('/github/users/rpcvjet/followers')
    ).done(callback);
  };
  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
