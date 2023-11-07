const cron = require('node-cron')
cron.schedule('*/1 * * * * *', callback)

function callback(){
    console.log('running every 10 seconds')
}