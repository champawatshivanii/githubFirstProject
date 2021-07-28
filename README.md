# githubFirstProject

Contains register and login function

## Installation using npm
npm install loginin

## Usage

# using require

Example 

const loginObj = require('loginin');


loginObj.register({
    "email": "admin1@testing.com",
    "password": "Testing@123",
    "firstName": "Admin",
    "lastName": "Admin"
})


loginObj.login({
    "email": "admin1@testing.com",
    "password": "Testing@123"
})

