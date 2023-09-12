

const numOne = document.getElementById('numOne').value;
const numTwo = document.getElementById('numTwo').value;
const numThree = document.getElementById('numThree').value;
const numFour = document.getElementById('numFour').value;
const numFive = document.getElementById('numFive').value;
const numSix = document.getElementById('numSix').value;
const numSeven = document.getElementById('numSeven').value;
const numEight = document.getElementById('numEight').value;
const numNine = document.getElementById('numNine').value;
const numZero = document.getElementById('numZero').value;

const button = document.querySelectorAll('.button');

const pushNum = (a) => {
    console.log(a);
}

//my goal here is option 1: if the value of the button clicked is = to *certain value*, return certain value.
//option 2: call number when clicked

button.forEach((b) => b.addEventListener('click', function () {
    if (value = 0) {
        pushNum(numZero);
    }

}))


//goal: let the arr nums = the value of the buttons clicked.
const numbers = [numOne, numFive];
numbers.push(numTwo);


//goal: call each respective function when the button is clicked. add event listener?
//addition for loop
let sum = 0;

for (i=0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);


//subtration for loop
let difference = 0;

for (i=0; i<numbers.length; i++){
    difference -= numbers[i];
}
console.log(difference);


//division for loop
let solution = 100;

for (i=0; i<numbers.length; i++){
    solution /= numbers[i];
}
console.log(solution);


//multiplication for loop
let product = 100;

for (i=0; i<numbers.length; i++){
    product *= numbers[i];
}
console.log(product);
