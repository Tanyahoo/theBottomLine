
// utilised lectures material and code from weeks 12 and 13, understanding has been reached!



// initialize an array to store user data
const users = [];

// function to create a new user and store it in the users array
function createUser(username, password){
    users.push({ username, password});
    // log the current state of the users array
    console.log(users); 
}



// function to authenticate a user based on their username and password
function authenticateUser(username, password){
    // find the user with the given username in the users array
    // would this work??const foundUser = users.find(user => user.username === username);
    const user = users.find(user => user.username === username);

    // if the user is not found (or doesn't exist) or the provided password does not match, return false
    // or if(!foundUser || foundUser.password !== password ) {
    if(!user || user.password !== password ) {
        return false;
    }
    // if the username and password match, return true
    return true;
}




// export the createUser and authenticateUser functions for use in other modules
module.exports = { createUser, authenticateUser };