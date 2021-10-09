const hamburgerBtn = document.querySelector('.nav__toggler')
const closeBtn = document.querySelector('.nav__close-btn')
const sidebarNav = document.querySelector('.sidebar')
const nav = document.querySelector('.navbar')


const showSidebar = () => sidebarNav.classList.add('show')
const hideSidebar = () => sidebarNav.classList.remove('show')


hamburgerBtn.addEventListener('click', showSidebar)
closeBtn.addEventListener('click', hideSidebar)
document.addEventListener('click', event => event.target.closest('nav') == null ? hideSidebar() : null)
