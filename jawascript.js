// alert ("Hello")
// console.log("hello")
//document.getElementById("test").innerHTML="to change be";
//console.log("to be done")
//var usesr_name="Ahmed";
//console.log("my full name is: "+usesr_name);
//document.getElementById("para").innerHTML="this is new para";

//Question1
document.getElementById("Question1").innerHTML = "This is example1.js";


//Question2
var firstName = "Umer";
var lastName = " Ahmed";
var fullName = firstName+" "+lastName;
var age = 23 ;

//console.log(`Hi, my name is ${fullName} I'm, ${age} years old and I'm learning Jawascript.`)
document.getElementById("Question2").innerHTML= "Hi, my name is " +fullName +" I'm,"+ age+ " years old and I'm learning Jawascript.";

//Question3
var num1 = 101;
var num2 = 7;
//var result= (num1+num2)/2;
//document.getElementById("Question3").innerHTML = result ;
var result= num1/num2;
document.getElementById("Question3").innerHTML = result.toFixed(2) ;

//Question4
var phnum1 = "988866552";
var phnum2 = "99087612366";
var phnum3 = "876543123";

if(phnum1.length == 9)
    document.getElementById("Q4.statment1").innerHTML = " Phone number "+phnum1+" is valid";
else    
    document.getElementById("Q4.statment1").innerHTML = " Phone number "+phnum1+" is invalid";
if(phnum2.length == 9)
    document.getElementById("Q4.statment2").innerHTML = " Phone number "+phnum2+" is valid";
else    
    document.getElementById("Q4.statment2").innerHTML = " Phone number "+phnum2+" is invalid";
if(phnum3.length == 9)
    document.getElementById("Q4.statment3").innerHTML = " Phone number "+phnum3+" is valid";
else    
    document.getElementById("Q4.statment3").innerHTML = `Phone number ${phnum3} is invalid`;


//Question5;
var power = Math.pow(32,6);
document.getElementById("Power").innerHTML=`32 power 6 is equal to ${power}`;

//Question6:
document.getElementById("Question6").innerHTML=`a) is valid b) is valid c) not valid (bcz Keyword) d) invalid (dash cannot be used) e) valid f) invalid (bcz cannot start with int) g) invalid (bcz space is not allowed)`;

//Question7;
document.getElementById("Question7").innerHTML=`console.log(quantity += quantity); output is {50} console.log( (7+5) / number + 2 ); output is {4} console.log(pressure); output is {undefined} console.log(temperature); output is {null} console.log(typeof pressure); {undefined} console.log(typeof temperature); {null}`;

//Question8
var url= "www.udemy.com";
document.getElementById("Question8a").innerHTML=`the www.udemy.com is converted in ${url.replace("www.udemy.com","https://www.google.com")}`;
console.log(url);
var url = "https://www.udemy.com";
document.getElementById("Question8b").innerHTML= (url.replace("https://www.udemy.com","https://www.google.com"));