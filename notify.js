require('dotenv').config()

var Pushover = require('node-pushover')
var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USER_KEY
})

// console.log(push)

push.send('Did you drink enough coffee today?', 'have a nice day')