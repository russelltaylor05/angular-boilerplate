'use strict';

var angular    = require('angular');

var services   = require('./services');
//var directives = require('./directives');
//var filters    = require('./filters');

module.exports = angular.module('myApp.application', [
  services,
  //directives,
  //filters
])
.name;
