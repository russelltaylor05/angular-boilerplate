'use strict';

module.exports = function ($stateProvider) {
  $stateProvider
  .state('plugins', {
    url: '/',
    templateUrl: '/views/plugin/index.html',
    controller: 'MyAppCtrl',
  });
};
