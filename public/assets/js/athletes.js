import { Athletes } from "./modules/athletes.js";
import { setDate } from "./modules/setDate.js";
import { Sidebar } from "./modules/sidebar.js";

class App {
  static init() {
    new Sidebar(
      "sidebar",
      "nav__toggler",
      "nav__close-btn",
      "navlist__dropdown"
    );
    setDate();
    new Athletes(
      "delete-athlete"
    );
  }
}

App.init();
