'use strict';
(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE Use your DOM skills to reveal only the articles section! */
    $('.abouttextarea').hide();
    $('#aboutSection').show();
  };

  module.articleController = articleController;
})(window);
