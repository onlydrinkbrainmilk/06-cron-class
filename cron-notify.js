require('dotenv').config({ path: './key.env' })
var cron = require('node-cron');
var Pushover = require('node-pushover')

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USER_KEY
})
cron.schedule('*/10 * * * * *', sendNotification)

function sendNotification() {
    push.send('FEED ME! FEED ME!', 'please remember to open a can when you get home 🤌')}

function callback(){
    console.log('running every 10 seconds')
}