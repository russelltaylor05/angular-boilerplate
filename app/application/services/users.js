'use strict';

module.exports = function ($http, $q) {

  var Users = {};

  Users.getUser = function () {
    return 'user'
  };

  return Users;
};