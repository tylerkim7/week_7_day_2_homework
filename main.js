//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseThrough(arr){
    for (let i = 0; i < Object.keys(person3).length; i++){
        console.log(Object.keys(person3)[i])
    }
    for (let i = 0; i < Object.keys(person3).length; i++){
        if (Array.isArray(Object.values(person3)[i])){
            console.log(Object.values(person3))
        }
    }
}
console.log(parseThrough(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = console.log(`This person's name is ${name} and his age is ${age}.`)
}
let my_person1 = new Person('Tyler', 22)
let my_person2 = new Person('Relyt', 222)

// Use an arrow to create the printInfo method

const printInfo = (name, age) => console.log(`The person's name is ${name} and the person's age is ${age}`)

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

const addAge = (person_) => {
    return person_.age++;
}
console.log(addAge(my_person1))

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve(string)
        } else{
            reject(string)
        }
    })
}

stringLength("hello")
    .then((result) => {
        console.log("Big word")
    })
    .catch((error) => {
        console.log("Small Number")
    })



// CODE WARS PROBLEMS

// Unique in Order: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// Problem that I have done in python
var uniqueInOrder = function(iterable) {
    var arr = [];
    for (let i = 0; i< iterable.length; i++) {
    if (iterable[i] !== iterable[i+1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}

// Number of people in the bus: There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
// Problem that I have never done.

var number = function(busStops){
    let peopleEnter = 0
    let peopleExit = 0
    busStops.map((arr)=> { 
      peopleEnter += arr[0] 
      peopleExit += arr[1]
    })
    return peopleEnter  - peopleExit
  }