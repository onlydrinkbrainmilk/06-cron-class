const cron = require('node-cron')
cron.schedule('0 22 * * 1-5', callback)

function callback(){
    console.log('running every 10 seconds')
}