'use strict';

var angular  = require('angular');

var Users    = require('./users');

module.exports = angular.module('myApp.application.services', [])
.factory('Users', Users)
.name;
