'use strict';

var myProjects = [];

function Project (info){
  this.title = info.title;
  this.body = info.body;
  this.url = info.url;
};

Project.prototype.toHtml = function () {
  var $newProject = $('article.template').clone();

  $newProject.find('h1').html(this.title);
  $newProject.find('p').html(this.body);
  $newProject.find('a').attr('href', this.url);  //before moving on, need to remove the class of template
  $newProject.removeClass('template');
  return $newProject;
};

textForPortfolio.forEach(function(ele) {
  myProjects.push(new Project(ele));    ///setting properties into myProjects
  console.log('hi');
});

myProjects.forEach(function(article) {
  $('#main').append(article.toHtml());  //calls the toHTML method and attachest o DOM
  console.log('yo');
});


//Problem
// printing 3 times to document -

//Solve
//SO, in a forEach loop, we need to get an empty template,
//to do that, we have to remove the class from template, otherwords, it will reiterate for however
//many objects there are in the Array created.
