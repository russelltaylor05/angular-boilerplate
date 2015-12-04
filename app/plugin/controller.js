'use strict';

module.exports = function ($rootScope, $scope, API_URL) {


  $rootScope.dashboardLoading = true;
  $scope.message = API_URL;
};
