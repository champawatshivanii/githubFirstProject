const { Demo } = require('./Schema');
const { isEmpty, isEqual } = require('lodash');
const { i18n } = require('i18n');
/*      Mongodb Initialization      */
let connectDB = require("./configs/configs")();

async function register(data) {
    email = data.email;
    //  Make email as lowercase for unique
    email = email.toLowerCase().trim();
    //  Check whether the email is existed or not
    const userData = await Demo.findOne({ email, isDeleted: false });
    if (isEmpty(userData)) {
        let demo = new Demo(data);
        demo.save(function (error) {
            console.log("Your data has been saved!");
            if (error) {
                console.error(error);

            }
        });

    } else {
        console.log("Account with this email already exist");
    }
}

async function login(data) {
    email = data.email;
    password = data.password;
    //  Make email as lowercase for unique
    email = email.toLowerCase().trim();
    //  Check whether the email is existed or not
    const userData = await Demo.findOne({ email, isDeleted: false });
    if (isEmpty(userData)) console.log("User does not exist");
    else {
        const { _id, password: savedPassword } = userData;
        //  Verify the password
        const verifyPassword = isEqual(savedPassword, password);
        if (!verifyPassword) {
            console.log("enter correct password");
        }
        else {
            console.log("login success")
        }
    }



}

module.exports = { login, register };