var moment = require('moment');

var date = moment();
date.add(1, 'year').subtract(28, 'months');
console.log(date.format('MMM Do, YYYY'));

var date2 = moment();
console.log(date2.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
