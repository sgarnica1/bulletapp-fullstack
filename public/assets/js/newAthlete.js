import { Athletes, AthleteForm } from "./modules/newAthlete.js";
import { setDate } from "./modules/setDate.js";
import { Sidebar } from "./modules/sidebar.js";

class App {
  static init() {
    new Sidebar("sidebar", "nav__toggler", "nav__close-btn", "navlist__dropdown");
    setDate();
    const athletesList = new Athletes();
    new AthleteForm("new-athlete-form", "form__error", athletesList.athletes);
  }
}

App.init();
