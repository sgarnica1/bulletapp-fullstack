class Sidebar {
  constructor(
    sidebarClass,
    hamburgerBtnClass,
    closeBtnClass,
    dropdownContainerClass
  ) {
    this.sidebarNav = document.querySelector(`.${sidebarClass}`);
    this.hamburgerBtn = document.querySelector(`.${hamburgerBtnClass}`);
    this.closeBtn = document.querySelector(`.${closeBtnClass}`);
    this.dropdownContainer = document.querySelectorAll(
      `.${dropdownContainerClass}`
    );
    this.triggerEvents();
    this.showSidebar();
    this.hideSidebar();
    this.toggleDropdownContent();
  }

  triggerEvents() {
    this.hamburgerBtn.addEventListener("click", this.showSidebar.bind(this));
    this.closeBtn.addEventListener("click", this.hideSidebar.bind(this));
    document.addEventListener("click", (event) =>
      event.target.closest("nav") == null ? this.hideSidebar() : null
    );
  }

  showSidebar() {
    this.sidebarNav.classList.add("show");
  }

  hideSidebar() {
    this.sidebarNav.classList.remove("show");
  }

  toggleDropdownContent() {
    for (const container of this.dropdownContainer) {
      let button = container.querySelector("button");

      button.addEventListener("click", (e) => {
        let currentDropdown = e.srcElement.closest("li");
        let button = currentDropdown.querySelector("button");
        let ul = currentDropdown.querySelector("ul");

        if (!button.classList.contains("show")) {
          button.classList.add("show");
          ul.classList.add("show");
        } else {
          button.classList.remove("show");
          ul.classList.remove("show");
        }
      });
    }
  }
}

new Sidebar("sidebar", "nav__toggler", "nav__close-btn", "navlist__dropdown");
