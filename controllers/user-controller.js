'use strict';

const utils = require('../utils/writer.js');
const UserService = require('../service/user-service.js');

module.exports.removeUser = function removeUser (req, res, next) {
  const id = req.swagger.params['id'].value;
  UserService.removeUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAll = function retrieveAll (req, res, next) {
  UserService.retrieveAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUsersByFieldName = function retrieveUsersByFieldName (req, res, next) {
  const fieldName = req.swagger.params['fieldName'].value;
  const value = req.swagger.params['value'].value;
  UserService.retrieveUsersByFieldName(fieldName, value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveById = function retrieveById (req, res, next) {
  const id = req.swagger.params['id'].value;
  UserService.retrieveById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserById = function updateUserById (req, res, next) {
  const id = req.swagger.params['id'].value;
  const name = req.swagger.params['name'].value;
  const username = req.swagger.params['username'].value;
  const city = req.swagger.params['city'].value;
  const email = req.swagger.params['email'].value;
  const rideInGroup = req.swagger.params['rideInGroup'].value;
  const daysWeek = req.swagger.params['daysWeek'].value;
  UserService.updateUserById(id,name,username,city,email,rideInGroup,daysWeek)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
