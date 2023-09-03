import { email, password, Device, button, button_2, removeButton, drawer_List, listcontactas, } from "./importer.js";
import { contactList } from "./states.js";
export const showContactButtonHandler = () => {
    button_2?.addEventListener("click", () => {
        drawer_List?.classList.remove("bottom-[-100%]");
        drawer_List?.classList.add("bottom-[-0%]");
    });
};
export const closeContactButtonHandler = () => {
    removeButton?.addEventListener("click", () => {
        drawer_List?.classList.remove("bottom-[-0%]");
        drawer_List?.classList.add("bottom-[-100%]");
    });
};
export const HandlerCreatContact = () => {
    button?.addEventListener("click", () => {
        console.log(Device?.checked);
        const newContact = {
            id: crypto.randomUUID(),
            contactName: email?.value ?? '',
            contactNumber: password?.value ?? '',
            storage: Device?.checked ? "Device" : "SIM",
            avatar: null,
        };
        contactList.push(newContact);
        const listItem = document.createElement("li");
        listItem.className = "py-4 px-2 bg-white rounded-lg";
        const contactNameItem = document.createElement("h2");
        contactNameItem.className = "text-slate-700";
        contactNameItem.innerText = newContact.contactName;
        const phoneNumberItem = document.createElement("p");
        phoneNumberItem.className = "text-slate-500";
        phoneNumberItem.innerText = newContact.contactNumber.toString();
        listItem.appendChild(contactNameItem);
        listItem.appendChild(phoneNumberItem);
        listcontactas?.appendChild(listItem);
    });
};
//# sourceMappingURL=events.js.map