/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 35;

if(age<10){
    console.log("free");
}
else if (age>10){
    console.log("50% Discount");
}
else if(age>=60){
    console.log("15% Discount.")
}
else {
    console.log("Regular ticket fare 800 tk.");
}