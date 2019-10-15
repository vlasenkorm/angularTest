(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider', '$translateProvider'];

  function config($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/phones', {
        template: '<phone-list></phone-list>'
      })
      .when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .when('/crud', {
        template: '<crude></crude>'
      })
      .when('/crud/:userId', {
        templateUrl: 'crud-detail/crud-detail.template.html'
      })
      .when('/about', {
        template: '<about></about>'
      })
      .otherwise('/');

    $translateProvider.translations('en', {
      //TopNav
      'home': 'Home',
      'list': 'List',
      'crud': 'CRUD',
      'about': 'About',
      //Home
      'h1Ang': 'AngularJS App',
      'column': 'Column',
      'columnText': 'Some text..',
      'h1Angular': 'Test project for learning AngularJS'
    });

    $translateProvider.translations('fr', {
      //TopNav
      'home': 'Accueil',
      'list': 'Liste',
      'crud': 'CLME',
      'about': 'Sur',
      //Home
      'h1Ang': 'AngulaireJS App',
      'column': 'Colonne',
      'columnText': 'Du texte..',
      'h1Angular': 'Projet de test pour apprendre AngularJS'
    });

    $translateProvider.preferredLanguage('en');
  }
})();


