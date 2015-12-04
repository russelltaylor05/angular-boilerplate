'use strict';

module.exports = function ($rootScope, $scope, API_URL, Projects) {
  
  Projects.findAll()
  .then(function (data) {
    console.log(data);
  });
  
  $scope.message = API_URL;
};
