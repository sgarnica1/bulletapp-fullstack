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
    return this.athletes;
  }
}

class AthletesListBox {
  constructor(
    athletesList,
    athletesBodyClass,
    searchBarId,
    noResultsTextClass,
    orderById
  ) {
    this.athletesBody = document.querySelector(`.${athletesBodyClass}`);
    this.searchBar = document.getElementById(searchBarId);
    this.noResultsText = document.querySelector(`.${noResultsTextClass}`);
    this.orderByInput = document.getElementById(orderById);
    console.log(orderById);

    this.render(athletesList);
    this.query(athletesList);
    this.sort(athletesList);
  }

  clear() {
    this.athletesBody.innerHTML = "";
  }

  setAthleteTemplate(
    firstname,
    lastname,
    email,
    phoneNumber,
    plan,
    group,
    createdOn
  ) {
    const athleteContainer = document.createElement("article");
    athleteContainer.classList.add("athlete");
    athleteContainer.innerHTML = `  <div class="athlete__name">${firstname} ${lastname}</div>
    <div class="athlete__email">${email}</div>
    <div class="athlete__phone">${phoneNumber}</div>
    <div class="athlete__plan">${plan}</div>
    <div class="athlete__group">${group}</div>
    <div class="athlete__date">${createdOn}</div>`;

    this.athletesBody.insertAdjacentElement("afterbegin", athleteContainer);
  }

  render(athletesList) {
    for (let athlete of athletesList) {
      let createdDate = athlete.createdDate;
      createdDate = createdDate.split("T");
      this.setAthleteTemplate(
        athlete.firstname,
        athlete.lastname,
        athlete.email,
        athlete.phoneNumber,
        athlete.plan,
        athlete.group,
        createdDate[0]
      );
    }
  }

  query(athletesList) {
    this.searchBar.addEventListener("keyup", () => {
      let query = this.searchBar.value.trim();
      let queriedAthletes = [];

      for (let i = 0; i < athletesList.length; i++) {
        let athleteName = `${athletesList[i].firstname} ${athletesList[i].lastname}`;
        athleteName = athleteName
          .replace("á", "a")
          .replace("é", "e")
          .replace("í", "i")
          .replace("ó", "o")
          .replace("ú", "u");
        if (athleteName.toUpperCase().includes(query.toUpperCase())) {
          this.clear();
          queriedAthletes.push(athletesList[i]);
        } else {
          this.clear();
        }

        if (queriedAthletes.length == 0) {
          this.athletesBody.parentElement.style.display = "none";
          this.noResultsText.classList.remove("d-none");
        } else {
          this.athletesBody.parentElement.style.display = "block";
          this.noResultsText.classList.add("d-none");
        }
      }
      this.render(queriedAthletes);
    });
  }

  sort(athletesList) {
    this.orderByInput.addEventListener("change", () => {
      let queriedAthletes = [];
      if (this.orderByInput.value === "ascending-date") {
        queriedAthletes = athletesList.sort(
          (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
        );
      }
      if (this.orderByInput.value === "descending-date") {
        queriedAthletes = athletesList.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
      }
      if (this.orderByInput.value === "ascending-name") {
        queriedAthletes = athletesList.sort((a, b) =>
          b.firstname.localeCompare(a.firstname)
        );
      }
      if (this.orderByInput.value === "descending-name") {
        queriedAthletes = athletesList.sort((a, b) =>
          a.firstname.localeCompare(b.firstname)
        );
      }

      this.clear();
      this.render(queriedAthletes);
    });
  }
}

class App {
  static init() {
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
