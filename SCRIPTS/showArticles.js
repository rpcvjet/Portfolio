'use strict';
var articleView = {};

articleView.handleaboutMe = function () {
  $('#AboutMe').hide();
  $('.navbar').on('click', '.navi',function (){
    var aboutMeTab = $(this).attr('data-content');
    $('article').hide();
    $('#' + aboutMeTab).show();

    var homeTab = $(this).attr('data-content');
    $('article').hide();
    $('#' + homeTab).show();
    // console.log(aboutMeTab);
  }); //end of .navbar function
}; //end of articleView function

articleView.handleaboutMe();
