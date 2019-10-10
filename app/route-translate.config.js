(function(){
  'use strict';

angular
    .module('app')
    .config(config);
    
    config.$inject = ['$routeProvider','$translateProvider'];
    
    function config($routeProvider, $translateProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/home.template.html'
        })
        .when('/phones', {
          template: '<phone-list></phone-list>'
        })
        .when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        })
        .when('/crud', {
          templateUrl: '/crud/crud.template.html'
        })
        .when('/crud-http', {
          templateUrl: '/crud-http/crud.template.html'
        })
        .when('/about', {
          templateUrl: '/views/about.template.html'
        })
        .otherwise('/');
        
        $translateProvider.translations('en', {
          //TopNav
          'home' : 'Home',
          'list' : 'List',
          'crud' : 'CRUD',
          'crud-http' : 'CRUD-HTTP',
          'about': 'About',
          //Home
          'h1Ang' : 'AngularJS App',
          'column': 'Column',
          'columnText': 'Some text..',
          'h1Angular' : 'Test project for learning AngularJS'  
        });
        
        $translateProvider.translations('fr', {
          //TopNav
          'home' : 'Accueil',
          'list' : 'Liste',
          'crud' : 'CLME',
          'crud-http' : 'CLME-HTTP',
          'about': 'Sur',
          //Home
          'h1Ang' : 'AngulaireJS App',
          'column': 'Colonne',
          'columnText':'Du texte..',
          'h1Angular' : 'Projet de test pour apprendre AngularJS'   
        });
        
        $translateProvider.preferredLanguage('en');
  }
})();

  
