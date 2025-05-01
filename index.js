
// code direction taken from Lectures from Weeks 11 - 13, uderstanding is achieved!



// import express module
const express = require('express');
// assign variable 'app' to instance of express module
const app = express();




// import body-parser module, assign variable 'bodyParser' to its instance
const bodyParser = require("body-parser");
// configure app to use bodyParser middleware for handling form data
app.use(bodyParser.urlencoded({extended: true}));





// set EJS as the view engine for rendering pages
app.set("view engine", "ejs");





// import the custom authentication module created 
const auth = require('./auth.js');

// create users for testing authentication
auth.createUser("user", "pass");
auth.createUser("Alice", "pass456");

// test the authentication function, 1st is correct 2nd incorrect
console.log(auth.authenticateUser("user", "pass"));
console.log(auth.authenticateUser("Alice", "Secret987"));






// import and configure MySQL database connection, name database with Student ID
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'g00317831'
});
// establish and test connection with the database, including error outputs
connection.connect((err) => {
  if (err) {
    console.error('Error! Houston we have a problem.. : ', err);
  } else {
    console.log('We are connected to the database!');
  }
}); 




// Serve static files from 'home' directory
app.use(express.static("home"));





// route to handle login form submission, using POST to avoid password displayed in URL
app.post("/login", function(req, res) {
  //const username = req.body.username;
  //const password = req.body.password;
  // Extract username & password from req.body
  const {username, password} = req.body;

  // calling our authentication module 
  const authenticated = auth.authenticateUser(username, password);
  // outputting response true/false to console
  console.log(authenticated);

  // check if authentication is successful
  if(authenticated) {
    console.log("Authentication was successful!");
    // renders the home page to client
    res.render("home");
  } else {
    console.log("Authentication was NOT successful!");
    // Renders our ejs file called 'failed' to client with hyperlink back to login page
    res.render("failed");
  }
});





// Route for retrieving data from database using GET method, displays product info to client

app.get("/shop", function(req, res){
  // user chooses via website ID/item which is assigned to 'rec' value 
  const ID = req.query.rec;
  // connect to the database and table where ID (rec) was specified by user
  connection.query("SELECT * FROM g00317831.databaseproducts WHERE ID = ?", [ID], function(err, rows, fields) {
    if(err) {
      console.error("Error retrieving data from database:", err);
      // send an error message to the client
      res.status(500).send("Error retreiving data from database");
      // if rows are zero, ie not there..
    } else if(rows.length === 0) {
      console.error("No rows found for ID $[ID]"); 
      // respond with output error message to client
      res.status(404).send("No product found for ID $[ID]");
    } else {
      // log retrieved data and render the product page with the data
      console.log("Data retrieved from the Database!");
      // output to console all retrieved data (commented out as no longer needed, but useful)
      // console.log(rows[0].Product);
      // console.log(rows[0].Description);
      // console.log(rows[0].Colour);
      // console.log(rows[0].Fabric);
      // console.log(rows[0].Size);
      // console.log(rows[0].Price);
      // console.log(rows[0].Image);

      // variable names assigned to data
      const prodName = rows[0].Product;
      const prodDesc = rows[0].Description;
      const prodColor = rows[0].Colour;
      const prodFabric = rows[0].Fabric;
      const prodSize = rows[0].Size;
      const price = rows[0].Price;
      const pic = rows[0].Image;

      // respond to client with rendered ejs template containing values from database
     res.render("individualProducts.ejs", {myProduct: prodName, description: prodDesc, myImage: pic, myPrice: price});
    }    
  })
});




// route to home page which is an ejs file
app.get("/home", function(req, res){
  res.render("home.ejs");
})




// start the server and listen on port 3000
app.listen(3000, () => {
console.log('Server started on port 3000');
});