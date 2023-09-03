import { email, password, Device, button, button_2, removeButton, drawer_List, listcontactas, } from "./importer.js";
import { contactList } from "./states.js";
import { createListItem } from "./functions.js";
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
        const listItem = createListItem({
            contactName: newContact.contactName,
            contactNumber: newContact.contactNumber.toString(),
        });
        listcontactas?.appendChild(listItem);
    });
};
//# sourceMappingURL=events.js.map