const athletesBody = document.querySelector('.athletes__body')
const searchBar = document.getElementById('athlete-name-search')
const noResultsText = document.querySelector('.athletes__no-results')
const orderByInput = document.getElementById('orderby')

let athletes

if (localStorage.getItem('athletes') != null) {
  let athletesList = localStorage.getItem('athletes')
  athletes = JSON.parse(athletesList)
} else {
  athletes = []
}

const clearAthletes = () => athletesBody.innerHTML = ""

const setAthleteTemplate = (firstname, lastname, email, phoneNumber, plan, group, createdOn) => {
  const athleteContainer = document.createElement('article')
  athleteContainer.classList.add('athlete')
  athleteContainer.innerHTML = `  <div class="athlete__name">${firstname} ${lastname}</div>
  <div class="athlete__email">${email}</div>
  <div class="athlete__phone">${phoneNumber}</div>
  <div class="athlete__plan">${plan}</div>
  <div class="athlete__group">${group}</div>
  <div class="athlete__date">${createdOn}</div>`
  
  athletesBody.insertAdjacentElement('afterbegin', athleteContainer)
}

const createAthlete = athletesList => {
  for(let athlete of athletesList) {
    let createdDate = athlete.createdDate
    createdDate = createdDate.split('T')
    setAthleteTemplate(athlete.firstname, athlete.lastname, athlete.email, athlete.phoneNumber, athlete.plan, athlete.group, createdDate[0])
  }
}

const queryAthletes = athletesList => {
  searchBar.addEventListener('keyup', () => {
    let query = searchBar.value.trim()
    let queriedAthletes = []

    for(let i = 0; i < athletesList.length; i++) {
      let athleteName = `${athletesList[i].firstname} ${athletesList[i].lastname}`
      athleteName = athleteName.replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u')
      if(athleteName.toUpperCase().includes(query.toUpperCase())) {
        clearAthletes()
        queriedAthletes.push(athletesList[i])
      } else {
        clearAthletes()
      }

      if(queriedAthletes.length == 0) {
        athletesBody.parentElement.style.display = 'none'
        noResultsText.classList.remove('d-none')
      } else {
        athletesBody.parentElement.style.display = 'block'
        noResultsText.classList.add('d-none')
      }
    }
    createAthlete(queriedAthletes)
  })
}

const sortBy = athletesList => {
  orderByInput.addEventListener('change', () => {
    let queriedAthletes = []
    if(orderByInput.value === 'ascending-date') {
      queriedAthletes = athletesList.sort((a,b) => new Date(a.createdDate) - new Date(b.createdDate))
    } 
    if(orderByInput.value === 'descending-date') {
      queriedAthletes = athletesList.sort((a,b) => new Date(b.createdDate) - new Date(a.createdDate))
    } 
    if(orderByInput.value === 'ascending-name') {
      queriedAthletes = athletesList.sort((a,b) => b.firstname.localeCompare(a.firstname))
    }
    if(orderByInput.value === 'descending-name') {
      queriedAthletes = athletesList.sort((a,b) => a.firstname.localeCompare(b.firstname))
    }
    console.log(queriedAthletes)

    clearAthletes()
    createAthlete(queriedAthletes)
  })
}



createAthlete(athletes)
queryAthletes(athletes)
sortBy(athletes)