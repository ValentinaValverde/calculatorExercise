

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


//my goal here is option 1: if the value of the button clicked is = to *certain value*, return certain value.
//option 2: call number when clicked
//assign values to buttons...?


button.forEach((x) => {
    x.addEventListener('click', ()=> {
        const numValue = x.value;
        console.log(numValue);
        switch (numValue){
            case "1":
                alert(numValue);
                break;
            case "2":
                alert(numValue);
                break;
            case "3":
                alert(numValue);
                break;
            case "4":
                alert(numValue);
                break;
            case "5":
                alert(numValue);
                break;
            case "6":
                alert(numValue);
                break;
            case "7":
                alert(numValue);
                break;
            case "8":
                alert(numValue);
                break;
            case "9":
                alert(numValue);
                break;
            case "0":
                alert(numValue);
                break;


            case "+":
                alert(numValue);
                break;
            case "-":
                alert(numValue);
                break;
            case "/":
                alert(numValue);
                break;
            case "*":
                alert(numValue);
                break;
            case "+/-":
                alert(numValue);
                break;
            case "%":
                alert(numValue);
                break;
            case "clear":
                alert(numValue);
                break;


            case "=":
                alert(numValue);
                break;

            default:
                console.log("nada");
                break;
        }
    })
})

const calculation = [];




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








//Isaac tried helping but now I'm more confused
const pushNum = (a) => {
    console.log(a);
}

button.forEach((b) => b.addEventListener('click', function () {
    if (value = 0) {
        pushNum(numZero);
    }

}))