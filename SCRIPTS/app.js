'use strict';

var myProjects = [];

function Project (info){
  this.title = info.title;
  this.body = info.body;
  this.url = info.url;
};
Project.prototype.toHtml = function () {
  var source = $('#article-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

Project.loadAll = function (d) {
  myProjects.push (new Project(d));
};

Project.fetchAll = function (){
  if (localStorage.textForPortfolio){
    var fromLocalStorage = localStorage.getItem('textForPortfolio');
    var parsedData = JSON.parse(fromLocalStorage);
    Project.loadAll(parsedData);
    articleView.handleaboutMe();
  }
  else {
    $.getJSON('textForPortfolio', function(text){
      localStorage.setItem('textForPortfolio', JSON.stringify(text));
      Project.loadAll(text);
      articleView.handleaboutMe();
      console.log('hi');
    });
  }
};//end of function
//****************************About me Functon*********************
var aboutMeText = [];

function Text (info){
  this.text = info.text;
  this.title = info.title;
}
Text.prototype.toHtml = function () {
  var source = $('#aboutMe-template').html();
  var aboutMeRender = Handlebars.compile(source);
  return aboutMeRender(this);
};
aboutMe.forEach(function(ele){
  aboutMeText.push(new Text(ele));
});
aboutMeText.forEach(function (d) {
  $('#aboutSection').append(d.toHtml());
  console.log('newText');
});
