'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/user-service.js');

module.exports.removeUser = function removeUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.removeUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAll = function retrieveAll (req, res, next) {
  Default.retrieveAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveById = function retrieveById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.retrieveById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserById = function updateUserById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var name = req.swagger.params['name'].value;
  var username = req.swagger.params['username'].value;
  var city = req.swagger.params['city'].value;
  var email = req.swagger.params['email'].value;
  var rideInGroup = req.swagger.params['rideInGroup'].value;
  var daysWeek = req.swagger.params['daysWeek'].value;
  Default.updateUserById(id,name,username,city,email,rideInGroup,daysWeek)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
