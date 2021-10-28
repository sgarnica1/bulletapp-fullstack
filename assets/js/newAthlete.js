class Component {
  validateEmail(email) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10,12}$/im;
    return phoneRegex.test(String(phoneNumber));
  }
}

class Athlete {
  constructor(firstname, lastname, email, phoneNumber, plan, group) {
    this.id = Math.random() * 1000000000000000000;
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.plan = plan),
      (this.group = group),
      (this.createdDate = new Date());
  }
}

class Athletes {
  athletes = [];

  constructor() {
    this.getAthletesList();
  }

  getAthletesList() {
    if (localStorage.getItem("athletes") != null) {
      const athletesList = localStorage.getItem("athletes");
      this.athletes = JSON.parse(athletesList);
    }
    console.log(this.athletes);
    return this.athletes;
  }
}

class AthleteForm extends Component {
  constructor(athleteFormId, formErrorClass, athletesList) {
    super();
    this.createNewAthleteForm = document.getElementById(athleteFormId);
    this.formElements = this.createNewAthleteForm.elements;
    this.errorMessage = document.querySelector(`.${formErrorClass}`);
    this.submitAthlete(athletesList);
  }

  submitAthlete(athletesList) {
    this.createNewAthleteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const firstname = this.formElements.firstname.value.trim();
      const lastname = this.formElements.lastname.value.trim();
      const email = this.formElements.email.value.trim();
      const phoneNumber = this.formElements.phoneNumber.value.trim();
      const plan = this.formElements.plan.value.trim();
      const group = this.formElements.group.value.trim();
      const validEmail = this.validateEmail(email);
      const validPhoneNumber = this.validatePhoneNumber(phoneNumber);

      if (
        firstname == "" ||
        lastname == "" ||
        validEmail == "" ||
        validPhoneNumber == "" ||
        plan == "" ||
        group == ""
      ) {
        this.addErrorBorder(validEmail, validPhoneNumber);
      } else {
        this.removeErrorBorder();
        for (let element of this.formElements) {
          element.value = "";
        }
        let athlete = new Athlete(
          firstname,
          lastname,
          email,
          phoneNumber,
          plan,
          group
        );
        athletesList.push(athlete);
        console.log(athlete);
        localStorage.setItem("athletes", JSON.stringify(athletesList));
        window.location.replace("/athletes.html");
      }
    });
  }

  addErrorBorder(email, phone) {
    this.showErrorMessage();
    for (let el of this.formElements) {
      if (el.value == "") {
        el.classList.add("error");
      } else {
        el.classList.remove("error");
      }
    }

    email == false ? this.formElements.email.classList.add("error") : null;
    phone == false
      ? this.formElements.phoneNumber.classList.add("error")
      : null;
  }

  removeErrorBorder() {
    this.removeErrorMessage();
    for (let el of this.formElements) {
      el.classList.remove("error");
    }
  }

  showErrorMessage() {
    this.errorMessage.classList.add("show");
  }

  removeErrorMessage() {
    this.errorMessage.classList.remove("show");
  }
}

class App {
  static init() {
    const athletesList = new Athletes();
    new AthleteForm("new-athlete-form", "form__error", athletesList.athletes);
  }
}

App.init();
