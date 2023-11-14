require('dotenv').config({ path: './key.env' })
var cron = require('node-cron');
var Pushover = require('node-pushover')

var randomNum;
var fs = require('fs');
var cat = JSON.parse(fs.readFileSync('./cat.json','utf8'));
var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USER_KEY
})
cron.schedule('0 * * * *', sendNotification)

function sendNotification() {
    randomNum = Math.floor(Math.random()*9);
    push.send(cat[randomNum].subject, cat[randomNum].message)
}
function callback(){
    console.log('running every 10 seconds')
}