let result = 0;
// Question 1
let question1 = prompt ("When was born A.S. Pushkin?");
if (question1 === 1799){
    result += 5;
}
else if (!question1){
    result = 0;
}
// Question 2
let question2 = prompt ("Who opened the table of chemical elements?");
if (question2 === "Mendeleev"){
    result += 5;
}
else if(!question2){
    result = 0;
}
// Question 3
let question3 = prompt ("How many continents on the planet?");
if (question3 === 6){
    result += 5;
}
else if (!question3){
    result = 0;
}







alert("You've earned " + result + " points")