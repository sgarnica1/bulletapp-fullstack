class Athlete {
  constructor(firstname, lastname, email, phoneNumber, plan, group) {
    this.id = Math.random()*1000000000000000000
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.phoneNumber = phoneNumber,
    this.plan = plan,
    this.group = group,
    this.createdDate = new Date()
  }
}

let athletes = []

if (localStorage.getItem('athletes') != null) {
  athletesList = localStorage.getItem('athletes')
  athletes = JSON.parse(athletesList)
} 


const createNewAthleteForm = document.getElementById('new-athlete-form')
const formElements = createNewAthleteForm.elements
const errorMessage = document.querySelector('.form__error')

createNewAthleteForm.addEventListener('submit', event => {
  event.preventDefault()

  const firstname = formElements.firstname.value.trim()
  const lastname = formElements.lastname.value.trim()
  const email = formElements.email.value.trim()
  const phoneNumber = formElements.phoneNumber.value.trim()
  const plan = formElements.plan.value.trim()
  const group = formElements.group.value.trim()
  const validEmail = validateEmail(email)
  const validPhoneNumber = validatePhoneNumber(phoneNumber)

  if(firstname == "" || lastname == "" || validEmail == "" || validPhoneNumber == "" || plan == "" || group == "")  {
    addErrorBorder(validEmail, validPhoneNumber)
  } 
  else {
    removeErrorBorder()
    for (let element of formElements) {
      element.value = ""
    }
    let athlete = new Athlete(firstname, lastname, email, phoneNumber, plan, group)
    athletes.push(athlete) 
    console.log(athlete)
    localStorage.setItem('athletes', JSON.stringify(athletes));
    window.location.replace('/athletes.html') 
  }
})


const validateEmail = email => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase())
}

const validatePhoneNumber = phoneNumber => {  
  // const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  const phoneRegex = /^\d{10,12}$/im
  return phoneRegex.test(String(phoneNumber))
}

const addErrorBorder = (email, phone) => {
  showErrorMessage()
  for(let el of formElements) {
    if (el.value == "") {
      el.classList.add('error')
    } else {
      el.classList.remove('error')
    }
  }

  email == false ? formElements.email.classList.add('error') : null
  phone == false ? formElements.phoneNumber.classList.add('error') : null
}

const removeErrorBorder = () => {
  removeErrorMessage()
  for(let el of formElements) {
    el.classList.remove('error')
  }
}

const showErrorMessage = () => {
  errorMessage.classList.add('show')
}

const removeErrorMessage = () => {
  errorMessage.classList.remove('show')
}