// Qno 02
let a=5>4;
alert(a);          
let b="Apple">"Pineapple"
alert(b);          
let c ="2">"12";
alert(c);          
alert(undefined==null);    
alert(undefined===null);   
alert(null=="\n0\n");      
alert(null===+"\n0\n");    

// Qno 03
let a1=1;
let b1=1;
let c1=++a1;         
let d1=b1++;         
alert(c1);
alert(d1);

// Qno 04
let a2=2;
let x=1+(a2*=2);
alert(x);             

// Qno 5
let firstNum=parseInt(prompt("Enter 1st Number:"));
let secondNum=parseInt(prompt("Enter 2nd Number:"));
let sum=firstNum+secondNum;
alert(sum);

// Qno 06
let num1=parseInt(prompt("Enter 1st Number"));
let num2=parseInt(prompt("Enter 2nd Number"));
let result=(num1+num2);
(result<4)? alert("Below"):alert("Over");

// Qno 07
login=(prompt("Enter Status"));
(login=="Employee")? alert("Hello"):
(login=="Director")? alert("Greetings"):
(login=="")? alert("No Login"): alert("Invalid login");

//Qno 08
a5=null || 2 || undefined;
alert(a5);

// Qno 09
a6="alert(1)"|| 2 ||"alert(3)";


alert(a6);

// Qno 10
a7=1&&null&&2;
alert(a7);

// Qno 11
alert((alert(1))&& (alert(2)));

// Qno 12
alert(null||2&&3||4);  // result=3

// Qno 13
age=parseInt(prompt("Enter age:"));
(age>14&&age<90)? alert("Between"): alert("Not Between");

// Using Not !
age=parseInt(prompt("Enter age:"));
(!(age>90)&&!(age<14))? alert("Between"): alert("Not Between");

// Qno 14
a10=parseInt(prompt("enter"));
(a10==-1 || 0)? alert("first"):alert(null)
(a10==-1&&0)? alert("Second"):alert(null);
(a10==null||-1&&1)? alert("third"):alert(null);

// Qno 15
let browser=prompt("Enter Browser","");
// (browser="Edge")? alert("You have got Edge"):alert(null);
// (browser= "Chrome"||"Firefox"||"Safari"||"Opera")? alert("Okay we support these browsers too"):alert("Thhis page looks ok");
if (browser=="Edge"){
    alert("You have got Edge");
}
if (("Chrome"==browser)||("Safari"==browser)||("FireFox"==browser)||("Opera"==browser)){
    alert("Okay We support these Browsers too")
}
else{alert("We hope this page looks ok!")};

// Qno 16
let a11=parseInt(+prompt("Enter a number"))
switch(a11){
    case 0:
        alert("0");
        break;
    case 1:
        alert("1");
        break;
    case 2:
    case 3:
        alert("2,3");
        break;
};