import { Athletes, AthletesListBox } from "./modules/athletes.js";
import { setDate } from "./modules/setDate.js";
import { Sidebar } from "./modules/sidebar.js";


class App {
  static init() {
    new Sidebar("sidebar", "nav__toggler", "nav__close-btn", "navlist__dropdown");
    setDate();
    const athletesList = new Athletes();
    new AthletesListBox(
      athletesList.athletes,
      "athletes__body",
      "athlete-name-search",
      "athletes__no-results",
      "orderby"
      );
    }
}

App.init();
