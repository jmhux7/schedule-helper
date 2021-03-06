var schedule = require('schedulejs')
var later = require('later')
  
//   var r4 = {
//     id: 'Resource4',
//     available: later.parse.recur().on(2).dayOfWeek().after('9:00').time(),
//     isNotReservable: false
//   };

  var p = later.parse.text;

// Step 1: Define our reservations (tasks)
var reservations = [
  {name: 'Joe', length: 4, availability: 'after 12:00'},
  {name: 'Mike', length: 2},
  {name: 'Frank', length: 8},
  {name: 'John', length: 3, availability: 'on Thurs and Fri'},
  {name: 'Peter', length: 1, availability: 'before 10:00am'},
  {name: 'Sam', length: 2},
  {name: 'Alan', length: 2},
  {name: 'James', length: 8},
  {name: 'Steve', length: 1, availability: 'after 12:00 and before 1:00pm'},
  {name: 'Mark', length: 2},
  {name: 'Alex', length: 8}
];

// Step 2: Define our elevators (resources)
var elevators = [
  {name: 'E1', availability: 'every weekday after 8:00am and before 4:00pm'},
  {name: 'E2', availability: 'every weekday after 8:00am and before 4:00pm'}
];

// Step 3: Tasks aren't in the right format, need to create a generator
var t = schedule.tasks()
          .id(function(d) { return d.name; })
          // our length is in hours, convert to minutes
          .duration(function(d) { return d.length * 60; })
          // use later.parse.text to parse text into a usable schedule
          .available(function(d) { return d.availability ? p(d.availability) : undefined; })
          // prioritize our reservations on first come first serve
          .priority(function(d, i) { return 100 - i; })
          // elevator reservations have to be contiguous
          .minSchedule(function(d) { return d.length * 60; })
          // assume that only one elevator is available for reservations to start
          .resources(['E1']);

var tasks = t(reservations);

// Step 4: Resources aren't in the right format, need to create a generator
var r = schedule.resources()
          .id(function(d) { return d.name; })
          .available(function(d) { return d.availability ? p(d.availability) : undefined; });

var resources = r(elevators);

// Step 5: Pick a start date for the schedule and set correct timezone
var start = new Date(2013, 2, 21);
schedule.date.localTime();

// Step 6: Create the schedule
console.log(schedule.create(tasks, resources, null, start));