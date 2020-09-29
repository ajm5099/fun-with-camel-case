const toCamelCase = require('./camelCase.js');
const inquirer = require('inquirer');

inquirer.prompt( [
    {
        type: 'input',
        message: 'enter a string to be camelized: ',
        name: 'userStr'
    }
]).then(function(response) {
    // console.log(response);
    console.log(toCamelCase(response.userStr));
})