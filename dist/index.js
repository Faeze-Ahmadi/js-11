"use strict";
let age = 12;
let nam = "faeze";
const person = ["ali", "faeze"];
person.push("zahra");
console.log(person);
const email = document.querySelector("#email");
document.addEventListener("click", () => {
    console.log("ml");
});
email === null || email === void 0 ? void 0 : email.addEventListener("click", () => {
    console.log("mjkk");
});
const button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(email.value);
});
console.log(email);
//# sourceMappingURL=index.js.map