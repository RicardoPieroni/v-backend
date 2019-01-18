import UserDomain from '../domain/user-domain';

/**
 * Remove the user by id
 *
 * id String The user id.
 * no response value expected for this operation
 **/
exports.removeUser = function(id) {
  return UserDomain.deleteOne({_id: id});
}


/**
 * retrieve all users
 *
 * returns List
 **/
exports.retrieveAll = () => {
  return UserDomain.find();
}

/** 
  * Retrieve user by field name
  * 
  * returns user
  **/
exports.retrieveUsersByFieldName = (fieldName, value) => {
  const query = {};
  query[fieldName] = { $regex: value};
  return UserDomain.find(query);
}

/**
 * Check if server is live
 * Retrieve 'User' object
 *
 * id String the user id
 * returns user
 **/
exports.retrieveById = (id) => {
  return UserDomain.findOne({ _id: id });
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
  const userData = {
    name,
    username,
    city,
    email,
    rideInGroup,
    daysWeek
  }
  return UserDomain.updateOne({_id: id}, { $set: userData });
}

