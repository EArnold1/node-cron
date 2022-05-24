const express = require('express');
const cron = require('node-cron');
const CronJob = require('cron').CronJob;

const app = express();


app.get('/:id', (req, res) => {

    let cronCheck = true;

    const task = cron.schedule('* * * * *', () => {
        console.log(`prom on ${req.params.id} and ${cronCheck}`);
    }, {
        scheduled: false
    });

    if (cronCheck) task.start();

    res.json({ msg: 'working' });
});

// app.get('/cron', (req, res) => {
//     const job = new CronJob('* 1 * * * *', () => {
//         console.log('hello p');
//     },
//         null,
//         true);

//     job.start();
//     res.json({ msg: 'hola' })
// });

const PORT = 5000;

app.listen(PORT, () => console.log('api working'));