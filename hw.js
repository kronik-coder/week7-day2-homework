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

function displayFood(){
    for(let key in person3){
        if (Array.isArray(person3[key])){
            console.log(person3[key]);
        }
    }
}
displayFood()


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
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printInfo = () => `${this.name} is ${this.age} years old!`
    ageUp = () => {
        this.age++
        return this.age
    }

}

jesus = new Person('Jesus', 24)
console.log(jesus.printInfo())
console.log(jesus.ageUp())
console.log(jesus.ageUp())
console.log(jesus.ageUp())

// =============Exercise #3 ============//
/*

    Create a Promise based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log Small Number
*/

const lengthOfString = (str)=>{
    return new Promise(
        (resolve, reject)=>{
            if(str.length >= 10){
                resolve("Big Word")
            }else{
                reject("Small Word")
            }
        }
    )
}

lengthOfString("Hello").then(
    (result)=>{
        console.log(result)
    }
).catch(
    (error)=>{
        console.log(error)
    }
)