// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

const request = require('request')
request('https://jsonplaceholder.typicode.com/users/1',(error, response, body) => {
    if(!error && response.statusCode == 200) {
        console.log(body);
    } else {
        console.log("Working")
    }
});