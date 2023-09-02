"use strict";
// let age: number = 12;
// let nam: string = "faeze";
// type person = string;
// const person: person[] = ["ali", "faeze"];
// person.push("zahra")
const contactList = [];
const email = document.querySelector("#email");
const password = document.querySelector("#password");
document.addEventListener("click", () => {
    console.log("ml");
});
email === null || email === void 0 ? void 0 : email.addEventListener("click", () => {
    console.log("mjkk");
});
const button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    var _a, _b;
    console.log(email === null || email === void 0 ? void 0 : email.value);
    const newContact = {
        id: crypto.randomUUID(),
        contactName: (_a = email === null || email === void 0 ? void 0 : email.value) !== null && _a !== void 0 ? _a : '',
        contactNumber: (_b = password === null || password === void 0 ? void 0 : password.value) !== null && _b !== void 0 ? _b : '',
        storage: "SIM",
        avatar: null,
    };
});
console.log(email);
//# sourceMappingURL=index.js.map