// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

function salute(){
    const time = new Date().getHours();
    // const time = 1;
    return (time > 11 && time < 24) ? 'Good afternoon' : 'Good morning';
}

console.log(salute());

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------

function nums(number){
    const arr = [];
    for(let i = number; i >= 0; i--){
        arr.push(i);
    }

    return arr;
}

console.log(nums(10));

