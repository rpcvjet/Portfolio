'use strict';
(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE Use your DOM skills to reveal only the articles section! */
    $('.text-area').hide();
    $('#Home').show();
  };

  module.articleController = articleController;
})(window);
