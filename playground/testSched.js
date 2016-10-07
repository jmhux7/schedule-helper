var schedule = require('schedulejs')
var later = require('later')

var p = later.parse.text;

var teacherSchedules = [
    {name: 'teacher3a', length: 1.5, availability: 'after 9:30am and before 11:10am or after 12:45pm and before 2:15pm or after 2:30pm'},
    {name: 'teacher3b', length: 1.5, availability: 'after 9:30am and before 11:10am or after 12:45pm and before 2:15pm or after 2:30pm'},
    {name: 'teacher3c', length: 1.5, availability: 'after 9:30am and before 11:10am or after 12:45pm and before 2:15pm or after 2:30pm'},
    {name: 'teacher3d', length: 1.5, availability: 'after 9:30am and before 11:10am or after 12:45pm and before 2:15pm or after 2:30pm'},
    {name: 'teacher4a', length: 1.5, availability: 'after 9:30am and before 10:20am or after 11:05am and before 12:15pm or after 12:45pm and before 2:15pm or after 2:30pm'},
    {name: 'teacher4b', length: 1.5, availability: 'after 9:30am and before 10:20am or after 11:05am and before 12:15pm or after 12:45pm and before 2:15pm or after 2:30pm'},
    {name: 'teacher4c', length: 1.5, availability: 'after 9:30am and before 10:20am or after 11:05am and before 12:15pm or after 12:45pm and before 2:15pm or after 2:30pm'},
    {name: 'teacher5a', length: 1.5, availability: 'after 10:15am and before 12:30pm or after 1:00pm and before 2:10pm or after 2:25pm'},
    {name: 'teacher5b', length: 1.5, availability: 'after 10:15am and before 12:30pm or after 1:00pm and before 2:10pm or after 2:25pm'},
    {name: 'teacher5c', length: 1.5, availability: 'after 10:15am and before 12:30pm or after 1:00pm and before 2:10pm or after 2:25pm'}
];

var computerLab = [
    {name: 'lab', availability: 'every weekday after 9:00am and before 3:30pm'}
];

var t = schedule.tasks()
    .id(function(d) { return d.name; })
    .duration(function(d) { return d.length * 60; })
    .available(function(d) { return d.availability ? p(d.availability) : undefined; })
    .priority(function(d, i) { return 100 - i; })          .minSchedule(function(d) { return d.length * 60; })          .resources(['lab']);

var tasks = t(teacherSchedules);

var r = schedule.resources()
    .id(function(d) { return d.name; })
    .available(function(d) { return d.availability ? p(d.availability) : undefined; });

var resources = r(computerLab);

var start = new Date (2016, 10, 10);
schedule.date.localTime();

console.log(schedule.create(tasks, resources, null, start));