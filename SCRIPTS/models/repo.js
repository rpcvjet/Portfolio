'use strict';
(function(module) {
  var repos = {};

  repos.allRepos = [];
// TODO: create a githubToken.js file that we can use to generate our headers
         // properly.
  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/rpcvjet/repos',
      type:'GET',
      headers: {Authorization: 'token ' + githubignore},
      success: function(data) {
        data.forEach(function(a){
          $('#repoMe').append(repos.withTheAttribute(a));
        });
      }
    });
  };
  repos.withTheAttribute = function(myAttr) {
    /* NOTE: This Model method filters the full repos collection based
        on a particular attribute. For example, you could use this
        to filter all repos that have a forks_count, stargazers_count,
        or watchers_count. */
    var repoedTemplate = Handlebars.compile($('#repo-template').html());
    return repoedTemplate(myAttr);
  };
  repos.requestRepos();
  module.repos = repos;
})(window);
