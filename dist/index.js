import { button, button_2, removeButton } from "./src/importer.js";
import { showContactButtonHandler, closeContactButtonHandler, HandlerCreatContact } from "./src/events.js";
button_2?.addEventListener("click", showContactButtonHandler);
removeButton?.addEventListener("click", closeContactButtonHandler);
button?.addEventListener("click", HandlerCreatContact);
//# sourceMappingURL=index.js.map