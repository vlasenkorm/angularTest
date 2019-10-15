'use strict';

// Define the `phonecatApp` module
angular
  .module('app', [
    'ngRoute',
    'pascalprecht.translate',
    'core',
    'home',
    'phoneDetail',
    'phoneList',
    'crud-http',
    'crud-detail',
    'about'
  ]);
