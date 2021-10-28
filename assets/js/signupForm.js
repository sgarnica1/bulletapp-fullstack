class LoginForm {
  inputLabelContainer = document.querySelectorAll(".login__input");

  constructor() {
    this.passToggle();
    this.inputFocus();
    this.inputFocusOut();
  }

  passToggle() {
    const passInput = document.getElementById("password");
    const passToggleBtn = document.querySelector(".password--toggle");
    passToggleBtn.addEventListener("click", () => {
      passToggleBtn.classList.toggle("visible");
      passToggleBtn.className.includes("visible")
        ? (passInput.type = "text")
        : (passInput.type = "password");
    });
  }

  inputFocus() {
    for (const container of this.inputLabelContainer) {
      const input = container.querySelector("input");
      input.addEventListener("focus", (e) => {
        const label = e.currentTarget.previousElementSibling;
        label.classList.add("focus");
      });
    }
  }

  inputFocusOut() {
    for (const container of this.inputLabelContainer) {
      const input = container.querySelector("input");
      input.addEventListener("focusout", (e) => {
        const label = e.currentTarget.previousElementSibling;
        input.value == "" ? label.classList.remove("focus") : null;
      });
    }
  }
}

class App {
  static init() {
    new LoginForm("login-form");
  }
}

App.init();
