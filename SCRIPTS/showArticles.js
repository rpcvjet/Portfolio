'use strict';
var articleView = {};

articleView.handleaboutMe = function () {
  $('#aboutSection').hide();
  $('.navbar').on('click', '.navi',function (){
    var aboutMeTab = $(this).attr('data-content');
    $('section').hide(); //"hides all sections and display:none"
    $('#' + aboutMeTab).show(); //and then immediately  show "find me the id  with the value of VAR"

  }); //end of .navbar function
  // $('navbar .navi:first').click();
}; //end of articleView function

articleView.handleaboutMe();
Project.fetchAll();
Data.fetchAll();
