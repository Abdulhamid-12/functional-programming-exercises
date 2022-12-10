// 1. Create a function that when passed as a callback to the Higher Order function provided,
// makes the final return the number's square plus two

const addTwo = () => {
  return square(3) + 2;
};

function square(x) {
  return x * x;
}

const test = addTwo();
console.log(test);
// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`;
};

// you might notice that this function is less than ideal - that's great! We'll talk about why next
function greeting(first, last, title) {
  return "Hello " + createFullName(first, last, title);
}

console.log(greeting("Ahmed", "Ali", "Dr"));
