'use strict';

var angular     = require('angular');

var Projects    = require('./projects');

module.exports = angular.module('myApp.application.services', [])
.factory('Projects', Projects)
.name