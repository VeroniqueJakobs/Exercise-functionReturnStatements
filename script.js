
// Checking if a number is big   // this is a function that does something
const checkNumber = function(number) {
       
    if (number>100) {
        return console.log("true");
    }

    if(number <= 100) {
       return console.log("false") ;
    }
}; 

checkNumber(5);


// Bouncer at a club      // this is a function that does something
const checkPeople = function(maxNumber, currentNumber, age) {

    if (age < 18) {
        return console.log ("this is a club for adults");
    }

    if (currentNumber <= maxNumber) {
        return console.log("come in");
    }

    if (currentNumber > maxNumber) {
       return console.log("it's too busy now, come back later") ;
    }
}; 

checkPeople(60, 56, 19);


// Calculating the average    // this is a function that produces something
const calculateAverage = function(numbers) {
    const average = numbers.reduce((total, n) => total + n)/numbers.length;
    return average;
}

console.log (calculateAverage([5.67,6,7.67,8,9]));