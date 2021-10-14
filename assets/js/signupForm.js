const passInput = document.getElementById('password')
const passToggleBtn = document.querySelector('.password--toggle')

const inputLabelContainer = document.querySelectorAll('.login__input')

const passToggle = () => {
  passToggleBtn.addEventListener('click', () => {
    passToggleBtn.classList.toggle('visible')
    if(passToggleBtn.className.includes('visible')) {
      passInput.type = "text"
    } else {
      passInput.type = "password"
    }
  })
}

const inputFocus = () => {
  for(container of inputLabelContainer) {
      const input = container.querySelector('input')
      input.addEventListener('focus', e => {
        const label = e.currentTarget.previousElementSibling
        label.classList.add('focus')
      })
  }
}

const inputFocusOut = () => {
  for(container of inputLabelContainer) {
      const input = container.querySelector('input')
      input.addEventListener('focusout', e => {
        const label = e.currentTarget.previousElementSibling
        // label.classList.remove('focus')
        // console.log(label.value)
        if(input.value == '') {
          label.classList.remove('focus')
        }
      })
  }
}




passToggle()
inputFocus()
inputFocusOut()