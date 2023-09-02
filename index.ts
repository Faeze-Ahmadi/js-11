// let age: number = 12;
// let nam: string = "faeze";
// type person = string;
// const person: person[] = ["ali", "faeze"];
// person.push("zahra")

// console.log(person)

type contactProps = {
    id: string;
    contactName: string;
    contactNumber: string | Number;
    storage: "SIM" | "Device";
    avatar: string | null;

}

type contactListType = contactProps[];
const contactList: contactListType = [];


const email = document.querySelector<HTMLInputElement>("#email");
const password = document.querySelector<HTMLInputElement>("#password");
const SIM = document.querySelector<HTMLInputElement>("#SIM");
const Device = document.querySelector<HTMLInputElement>("#Device");
const button = document.querySelector<HTMLButtonElement>("#Show_button");
const button_2 = document.querySelector<HTMLButtonElement>("#show_button");

// document.addEventListener("click", () => {
//     console.log("ml")
// });

// email?.addEventListener("click", () => {
//     console.log("fm")
// });


button?.addEventListener("click", () => {
    console.log(Device?.checked)
    const newContact: contactProps = {
        id: crypto.randomUUID(),
        contactName: email?.value ?? '',
        contactNumber: password?.value ?? '',
        storage: Device?. checked ? "Device" : "SIM",
        avatar: null,
    }
    contactList.push(newContact);
    console.log(contactList);
});

// console.log(email)