# githubFirstProject

Contains register and login function

## Installation

# using npm
npm install login

## Usage

# using require
const loginObj = require('login');
loginObj.register({
    "email": "admin1@innade.com",
    "password": "Innade@123",
    "firstName": "Admin",
    "lastName": "Admin"
})
loginObj.login({
    "email": "admin@innade.com",
    "password": "Innade@123"
})

