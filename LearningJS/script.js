\// //Array contains years
// var bornYear = [1989, 1990, 2014, 2002];
// var age = new Array();
// var i = 0;
// console.log("Current i is " + i);
// while (i < bornYear.length){
//     age[i]=2016-bornYear[i]
//     console.log("While i " + i);
//     i++
// }
// console.log(age);
//
// var adult = [];
//
// for (i=0;i<age.length;i++){
//     if (age[i]>=18){
//         adult[i]=true;
//     }
//     else {
//         adult[i]=false;
//     }
// }
// console.log(adult);

var cde = require("./abc");

console.log(cde(["a","b","c"]));




var events = require("events");
var util = require("util");

var Person = function (name) {
  this.name = name;
}

util.inherits(Person,events.EventEmitter);

chad = new Person("Chad");
chad1 = new Person("Chad1");
chad2 = new Person("chad2");

people = [chad,chad1,chad2];

people.forEach(function (Name) {
  Name.on('yell', function (msg) {
    console.log(Name.name + " yell out " + msg);
  })
});

chad.emit("yell","WHO AM I");

var file = require("fs");
var readText = file.readFileSync("abc.js","utf8");
console.log(readText);
