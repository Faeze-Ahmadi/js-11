import { listcontactas } from "./importer.js";
export const createListItem = (contactInfo) => {
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-2 bg-white rounded-lg";
    const contactNameItem = document.createElement("h2");
    contactNameItem.className = "text-slate-700";
    contactNameItem.innerText = contactInfo.contactName;
    const phoneNumberItem = document.createElement("p");
    phoneNumberItem.className = "text-slate-500";
    phoneNumberItem.innerText = contactInfo.contactNumber.toString();
    listItem.appendChild(contactNameItem);
    listItem.appendChild(phoneNumberItem);
    listcontactas?.appendChild(listItem);
};
//# sourceMappingURL=functions.js.map