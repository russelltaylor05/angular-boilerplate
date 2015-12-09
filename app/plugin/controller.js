'use strict';

module.exports = function ($rootScope, $scope, API_URL, Users, $facebook) {
  
  $scope.configValue = API_URL;
  $scope.serviceValue = Users.getUser();

};
