class Component {
  validateEmail(email) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  validatePhonenumber(phonenumber) {
    const phoneRegex = /^\d{10,12}$/im;
    return phoneRegex.test(String(phonenumber));
  }
}

class Athlete {
  constructor(firstname, lastname, email, phonenumber, plan, group) {
    this.id = Math.random() * 1000000000000000000;
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.phonenumber = phonenumber),
      (this.plan = plan),
      (this.group = group),
      (this.createdDate = new Date());
  }
}

export class AthleteForm extends Component {
  constructor(athleteFormId, formErrorClass, athletesList) {
    super();
    this.createNewAthleteForm = document.getElementById(athleteFormId);
    this.formElements = this.createNewAthleteForm.elements;
    this.errorMessage = document.querySelector(`.${formErrorClass}`);
    this.submitAthlete();
  }

  prevent(event) {
    event.preventDefault();
  }

  submitAthlete(athletesList) {
    this.createNewAthleteForm.addEventListener("submit", (event) => {
      prevent(event);

      const firstname = this.formElements.firstname.value.trim();
      const lastname = this.formElements.lastname.value.trim();
      const email = this.formElements.email.value.trim();
      const phonenumber = this.formElements.phonenumber.value.trim();
      const plan = this.formElements.plan.value.trim();
      const group = this.formElements.group.value.trim();
      const validEmail = this.validateEmail(email);
      const validPhonenumber = this.validatePhonenumber(phonenumber);

      if (
        firstname == "" ||
        lastname == "" ||
        validEmail == "" ||
        validPhonenumber == "" ||
        plan == "" ||
        group == ""
      ) {
        this.addErrorBorder(validEmail, validPhonenumber);
        prevent(event);
      } else {
        this.removeErrorBorder();
        for (let element of this.formElements) {
          element.value = "";
        }
        // let athlete = new Athlete(
        //   firstname,
        //   lastname,
        //   email,
        //   phonenumber,
        //   plan,
        //   group
        // );
        // athletesList.push(athlete);
        // console.log(athlete);
        // localStorage.setItem("athletes", JSON.stringify(athletesList));
        // window.location.replace("/athletes");
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
      ? this.formElements.phonenumber.classList.add("error")
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
