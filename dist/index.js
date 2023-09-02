"use strict";
// let age: number = 12;
// let nam: string = "faeze";
// type person = string;
// const person: person[] = ["ali", "faeze"];
// person.push("zahra")
const contactList = [];
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const SIM = document.querySelector("#SIM");
const Device = document.querySelector("#Device");
const button = document.querySelector("#add_button");
const button_2 = document.querySelector("#show_button");
const drawer_List = document.querySelector("#drawer_List");
const removeButton = document.querySelector("#removeButton");
const listcontactas = document.querySelector("#removeButton");
// document.addEventListener("click", () => {
//     console.log("ml")
// });
// email?.addEventListener("click", () => {
//     console.log("fm")
// });
button_2 === null || button_2 === void 0 ? void 0 : button_2.addEventListener("click", () => {
    drawer_List === null || drawer_List === void 0 ? void 0 : drawer_List.classList.remove("bottom-[-100%]");
    drawer_List === null || drawer_List === void 0 ? void 0 : drawer_List.classList.add("bottom-[-0%]");
});
removeButton === null || removeButton === void 0 ? void 0 : removeButton.addEventListener("click", () => {
    drawer_List === null || drawer_List === void 0 ? void 0 : drawer_List.classList.remove("bottom-[-0%]");
    drawer_List === null || drawer_List === void 0 ? void 0 : drawer_List.classList.add("bottom-[-100%]");
});
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    var _a, _b;
    console.log(Device === null || Device === void 0 ? void 0 : Device.checked);
    const newContact = {
        id: crypto.randomUUID(),
        contactName: (_a = email === null || email === void 0 ? void 0 : email.value) !== null && _a !== void 0 ? _a : '',
        contactNumber: (_b = password === null || password === void 0 ? void 0 : password.value) !== null && _b !== void 0 ? _b : '',
        storage: (Device === null || Device === void 0 ? void 0 : Device.checked) ? "Device" : "SIM",
        avatar: null,
    };
    contactList.push(newContact);
    console.log(contactList);
});
// console.log(email)
//# sourceMappingURL=index.js.map