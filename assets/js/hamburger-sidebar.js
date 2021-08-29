const hamburgerBtn = document.querySelector('.nav__toggler')
const closeBtn = document.querySelector('.nav__close-btn')
const sidebarNav = document.querySelector('.sidebar')

const showSidebar = () => {
  hamburgerBtn.addEventListener('click', () => {
    sidebarNav.classList.add('show')
  })
}

const hideSidebar = () => {
  closeBtn.addEventListener('click', () => {
    sidebarNav.classList.remove('show')
  })
}

showSidebar()
hideSidebar()