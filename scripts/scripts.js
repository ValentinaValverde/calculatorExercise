

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

button.forEach((b) => b.addEventListener('click', function(){
    pushNum(numZero);
}))


