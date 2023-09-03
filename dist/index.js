// let age: number = 12;
// let nam: string = "faeze";
// type person = string;
// const person: person[] = ["ali", "faeze"];
// person.push("zahra")
// console.log(person)
// import { contactProps , contactListType } from "./src/types";
import { button, button_2, removeButton } from "./src/importer.js";
import { showContactButtonHandler, closeContactButtonHandler, HandlerCreatContact } from "./src/events.js";
// type contactProps = {
//     id: string;
//     contactName: string;
//     contactNumber: string | Number;
//     storage: "SIM" | "Device";
//     avatar: string | null;
// }
// type contactListType = contactProps[];
// const contactList: contactListType = [];
// const email = document.querySelector<HTMLInputElement>("#email");
// const password = document.querySelector<HTMLInputElement>("#password");
// const SIM = document.querySelector<HTMLInputElement>("#SIM");
// const Device = document.querySelector<HTMLInputElement>("#Device");
// const button = document.querySelector<HTMLButtonElement>("#add_button");
// const button_2 = document.querySelector<HTMLButtonElement>("#show_button");
// const drawer_List = document.querySelector<HTMLButtonElement>("#drawer_List");
// const removeButton = document.querySelector<HTMLButtonElement>("#removeButton");
// const listcontactas = document.querySelector<HTMLUListElement>("#listcontactas");
// document.addEventListener("click", () => {
//     console.log("ml")
// });
// email?.addEventListener("click", () => {
//     console.log("fm")
// });
button_2?.addEventListener("click", showContactButtonHandler);
removeButton?.addEventListener("click", closeContactButtonHandler);
button?.addEventListener("click", HandlerCreatContact);
// console.log(email)
//# sourceMappingURL=index.js.map