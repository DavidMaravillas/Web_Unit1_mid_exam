// Write a method that doubles each element in an array.

function doubler(array) {
    return array.map(el =>{
        return el*2
    })
}

// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) {
    let fact = []
    for(i=1; i <= num; i++){
        if(num %i === 0){
            fact.push(i)
        }
    }
    return fact
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
    if(arr.length % 2 === 0){
        return (arr[(arr.length/2)-1]+arr[arr.length/2])/2
    } else{
        return arr[(math.floor(arr.length/2)-1)]
    }
}

// Write a method that returns the product of all numbers in an array.

function product(arr) {
    return arr.reduce((prod,el)=>{
        return prod *= el
    },1)
}

// Write a method that returns the largest number in an array.

function largest(arr) {}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {}

// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {}

// Write a function that removes all the vowels from a string.

function disemvowel(str) {}

module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
