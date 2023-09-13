

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

const add = document.getElementById('add').value;
const subtract = document.getElementById('subtract').value;
const divide = document.getElementById('divide').value;
const multiply = document.getElementById('multiply').value;


//new goal: make the values appear on the calculator screen.
//Update: DONE!
//new goal: display mult nums/vals at once

const calcScreen = document.getElementById('calcScreen');

button.forEach((x) => {
    x.addEventListener('click', function(num) {
        const numValue = x.value;
        console.log("NUM:", numValue);
        calcScreen.innerText = numValue;
    });
});

multiply.addEventListener('click', function(numValue){
    return numValue * numValue;
});



//goal: let the arr nums = the value of the buttons clicked.
const numbers = [numOne, numFive];
numbers.push(numTwo);


//goal: call each respective function when the button is clicked. add event listener?
//addition for loop

function sum(numValue){
    for (i = 0; i < numbers.length; i++) {
        numValue += numbers[i];
    }
    console.log(sum);
}


//subtration for loop
let difference = 0;

for (i = 0; i < numbers.length; i++) {
    difference -= numbers[i];
}
console.log(difference);


//division for loop
let solution = 100;

for (i = 0; i < numbers.length; i++) {
    solution /= numbers[i];
}
console.log(solution);


//multiplication for loop
let product = 100;

for (i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log(product);








//Isaac tried helping but now I'm more confused
const pushNum = (a) => {
    console.log(a);
}

button.forEach((b) => b.addEventListener('click', function () {
    if (value = 0) {
        pushNum(numZero);
    }

}))