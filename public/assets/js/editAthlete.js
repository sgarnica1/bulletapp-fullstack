import { setDate } from "./modules/setDate.js";
import { Sidebar } from "./modules/sidebar.js";
import { Athlete } from "./modules/athletes.js";

class Form {
  selectSetOption(idArray) {
    for (let id of idArray) {
      const htmlEl = document.getElementById(id);
      const value = htmlEl.dataset.doc;
      const options = htmlEl.querySelectorAll("option");
      for (let option of options) {
        option.value == value ? (option.selected = true) : null;
      }
    }
  }
}

class App {
  static init() {
    new Sidebar(
      "sidebar",
      "nav__toggler",
      "nav__close-btn",
      "navlist__dropdown"
    );
    setDate();
    new Athlete("delete-athlete");
    const form = new Form();
    form.selectSetOption(["plan", "group"]);
  }
}

App.init();
