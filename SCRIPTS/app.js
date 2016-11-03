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
      var textFromJson = text.map(function (b).reduce (function(sum, current){


      })
      {
        return b.title;
      }.reduce (function(sum, current){
      return sum + current;
      })
    });
  }
};//end of function
//****************************About me Functon**********************************
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

Text.loadAll = function (a) {
  a.forEach(function(a){
    aboutMeText.push (new Text(a));
  });
  aboutMeText.forEach(function(a){
    $('#aboutSection').append(a.toHtml());
  });
};

Text.fetchAll = function () {
  if (localStorage.aboutMe) {
    var inLocalStorage = localStorage.getItem('aboutMe.json');
    var aboutMeParsed = JSON.parse (inLocalStorage);
    Text.loadAll(aboutMeParsed);
    articleView.handleaboutMe();
  }
  else{
    $.getJSON('SCRIPTS/aboutMe.json', function (a){
      localStorage.setItem('aboutMe.json', JSON.stringify(a));
      Text.loadAll(a);
      articleView.handleaboutMe();
      var totalWordsAboutmeSection = a.map(function(c){
        console.log(c.text);
        // return c.text;
        return c.text.split(' ').

        })



      });
    });
  }
};
