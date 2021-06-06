"use strict";

let num = 50;

console.log("while");
while (num <= 55 ) {
    console.log(num);
    num++;
}


console.log("do while");
do {
    console.log(num);
    num--;
}
while (num >50);

console.log("for");
for( let i = 0; i <= 5; i++){
    console.log(num);
    num++;
}