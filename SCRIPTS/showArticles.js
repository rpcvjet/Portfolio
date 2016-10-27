'use strict';
// $(document).ready(function () {
//   $('Text').hide();
// });
var articleView = {};

articleView.handleaboutMe = function () {
  $('.navbar').on('click', '.icon-wondering2',function (){
    var aboutMeTab = $(this).attr('data-content');
    // $('.text-area').hide();  //hides everything on page
  $('data-content').filter('.about').show();


    console.log('blah');


  }); //end of .navbar function
}; //end of articleView function

articleView.handleaboutMe();
