'use strict';

// Define the `phonecatApp` module
angular
  .module('app', [
    'ngRoute',
    'pascalprecht.translate',
    'core',
    'phoneDetail',
    'phoneList',
    'crud',
    'crud-http'
  ]);
