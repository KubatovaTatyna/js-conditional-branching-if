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

//Question 4
let question4 = prompt ("What is the longest river?");
if (question4 === "Nile"){
    result += 5;
}
else if (!question4){
    result = 0;
}
//Question 5
let question5 = prompt ("What is the capital of Jamaica?");
if (question5 === "Kingston"){
    result += 5;
}
else if (!question5){
    result = 0;
}
//Question 6
let question6 = prompt ("J.K.Rowling's popular work is?");
if (question6 === "Harry Potter"){
    result += 5;
}
else if (!question6){
    result = 0;
}





alert("You've earned " + result + " points")