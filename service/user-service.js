import UserDomain from '../domain/user-domain';

/**
 * Remove the user by id
 *
 * id String The user id.
 * no response value expected for this operation
 **/
exports.removeUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve all users
 *
 * returns List
 **/
exports.retrieveAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photosCount" : 6,
  "rideInGroup" : "always",
  "daysWeek" : [ "saturday", "saturday" ],
  "albunsCount" : 1,
  "city" : "city",
  "postsCount" : 0,
  "name" : "name",
  "email" : "email",
  "username" : "username"
}, {
  "photosCount" : 6,
  "rideInGroup" : "always",
  "daysWeek" : [ "saturday", "saturday" ],
  "albunsCount" : 1,
  "city" : "city",
  "postsCount" : 0,
  "name" : "name",
  "email" : "email",
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check if server is live
 * Retrieve 'Users' objects 
 *
 * id String the user id
 * returns user
 **/
exports.retrieveById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photosCount" : 6,
  "rideInGroup" : "always",
  "daysWeek" : [ "saturday", "saturday" ],
  "albunsCount" : 1,
  "city" : "city",
  "postsCount" : 0,
  "name" : "name",
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update the user by id
 *
 * id String The user id.
 * name String Updated value of name
 * username String Updated value of username
 * city String Updated value of city (optional)
 * email String Updated value of email (optional)
 * rideInGroup String Updated value of ride in group (optional)
 * daysWeek List Array of days of week (optional)
 * no response value expected for this operation
 **/
exports.updateUserById = function(id,name,username,city,email,rideInGroup,daysWeek) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

