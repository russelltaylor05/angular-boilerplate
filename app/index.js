'use strict';

var angular     = require('angular');
var router      = require('angular-ui-router');
var bootstrap   = require('angular-ui-bootstrap');
var config      = require('config');

var ngFacebook  = require('ng-facebook');

var appConfig   = require('./config');
var appRun      = require('./run');

var application = require('./application');
var plugin      = require('./plugin');

module.exports = angular.module('myApp', [
  config,
  bootstrap,
  router,

  ngFacebook,

  application,
  plugin
])
.config(appConfig)
.run(appRun)
.name;
