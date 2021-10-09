const dropdownContainer = document.querySelectorAll('.navlist__dropdown')

const showDropdown = () => {
  for (container of dropdownContainer) {
    let button = container.querySelector('button')
    
    button.addEventListener('click', (e) => {
      let currentDropdown = e.srcElement.closest('li')
      let button = currentDropdown.querySelector('button')
      let ul = currentDropdown.querySelector('ul')

      if (!button.classList.contains('show')) {
        button.classList.add('show')
        ul.classList.add('show')
      } else {
        button.classList.remove('show')
        ul.classList.remove('show')
      }
    })
  }
}

showDropdown()