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
Project.loadAll = function (d) { //d is the returned array of Objects
  d.forEach(function (obj){
    myProjects.push (new Project(obj));
  });
  myProjects.forEach (function(ele) {
    $('#Home').append(ele.toHtml());
  });
};
Project.fetchAll = function (){
  if (localStorage.textForPortfolio){
    var fromLocalStorage = localStorage.getItem('textForPortfolio.json');
    var parsedData = JSON.parse(fromLocalStorage);
    Project.loadAll(parsedData);
    articleView.handleaboutMe();
  }
  else {
    $.getJSON('SCRIPTS/textForPortfolio.json', function(text){
      localStorage.setItem('textForPortfolio.json', JSON.stringify(text));
      Project.loadAll(text);
      articleView.handleaboutMe();
      text.map(function (b){
        return b.title;
      });
      var bodyCount = text.map (function (b){
        return b.body.split(' ').length;
      });
      var total = bodyCount.reduce(function (sum, current){
        return sum + current;
      });
      $('#wordcount').text(total);
    });
  }
};//end of Fetchall function
//****************************About me Functon**********************************
var aboutMeText = [];

function Data (info){
  this.text = info.text;
  this.title = info.title;
}
Data.prototype.toHtml = function () {
  var source = $('#aboutMe-template').html();
  var aboutMeRender = Handlebars.compile(source);
  return aboutMeRender(this);
};
Data.loadAll = function (a) {
  a.forEach(function(a){
    aboutMeText.push (new Data(a));
  });
  aboutMeText.forEach(function(a){
    $('#aboutSection').append(a.toHtml());
  });
};
Data.fetchAll = function () {
  if (localStorage.aboutMe) {
    var inLocalStorage = localStorage.getItem('aboutMe.json');
    var aboutMeParsed = JSON.parse (inLocalStorage);
    Data.loadAll(aboutMeParsed);
    articleView.handleaboutMe();
  }
  else{
    $.getJSON('SCRIPTS/aboutMe.json', function (a){
      localStorage.setItem('aboutMe.json', JSON.stringify(a));
      Data.loadAll(a);
      articleView.handleaboutMe();
    });
  }
};
