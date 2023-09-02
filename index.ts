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

document.addEventListener("click", () => {
    console.log("ml")
});

email?.addEventListener("click", () => {
    console.log("mjkk")
});

const button = document.querySelector<HTMLButtonElement>("#button");
button?.addEventListener("click", () => {
    console.log(email?.value)
    const newContact: contactProps = {
        id: crypto.randomUUID(),
        contactName: email?.value ?? '',
        contactNumber: password?.value ?? '',
        storage: "SIM",
        avatar: null,
    }
});



console.log(email)