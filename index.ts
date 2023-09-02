let age: number = 12;
let nam: string = "faeze";
type person = string;
const person: person[] = ["ali", "faeze"];
person.push("zahra")

console.log(person)


const email = document.querySelector<HTMLInputElement>("#email");
document.addEventListener("click", () => {
    console.log("ml")
});

email?.addEventListener("click", () => {
    console.log("mjkk")
});

const button = document.querySelector<HTMLButtonElement>("#button");
button?.addEventListener("click", () => {
    console.log(email?.value)
});



console.log(email)