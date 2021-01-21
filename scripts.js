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
//Question 7
let question7 = prompt ("Facebook was founded by?");
if (question7 === "Mark Zuckerberg"){
    result += 5;
}
else if (!question7){
    result = 0;
}
//Question 8 
let question8 = prompt ("How many states in USA?");
if (question8 === 50){
    result += 5;
}
else if (!question8){
    result = 0 ;
}
//Question 9 
let question9 = prompt ("How many oceans on earth?");
if (question9 === 5){
    result += 5;
}
else if(!question9){
    result = 0;
}
//Question 10
let question10 = prompt ("Titanic protagonist?");
if (question10 === "Leonardo DiCaprio"){
    result += 5;
}
else if (!question10){
    result = 0;
}
//Question 11
let question11 = prompt ("Author of the lord of the rings?");
if (question11 === "J. R. R. Tolkien"){
    result += 5;
}
else if (!question11){
    result = 0;
}
//Question 12
let question12 = prompt ("Largest island is?");
if (question12 === "Greenland"){
    result += 5;
}
else if (!question12){
    result = 0;
}
//Question 13
let question13 = prompt ("How many strings does the guitar have?");
if (question13 === "6"){
    result += 5;
}
else if (!question13){
    result = 0;
}
//Question 14
let question14 = prompt ("How many planets are in the solar system?");
if (question14 === "8"){
    result += 5;
}
else if (!question14){
    result = 0;
}




alert("You've earned " + result + " points")