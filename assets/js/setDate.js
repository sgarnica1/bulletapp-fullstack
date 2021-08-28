const currentDate = new Date();
const navDate = document.querySelector('.current-date')

const day = currentDate.getDate()
const month = currentDate.getMonth()
const year = currentDate.getFullYear()


const setMonth = monthNumber => {
  const ene = "Enero"
  const feb = "Febrero"
  const mar = "Marzo"
  const abr = "Abril"
  const may = "Mayo"
  const jun = "Junio"
  const jul = "Julio"
  const ago = "Agosto"
  const sep = "Septiembre"
  const oct = "Octubre"
  const nov = "Noviembre"
  const dic = "Diciembre"


  if (monthNumber == 0) {
    return ene
  }   else if (monthNumber == 1) {
    return feb
  }  else if (monthNumber == 2) {
    return mar
  }  else if (monthNumber == 3) {
    return abr
  }  else if (monthNumber == 4) {
    return may
  }  else if (monthNumber == 5) {
    return jun
  }  else if (monthNumber == 6) {
    return jul
  }  else if (monthNumber == 7) {
    return ago
  }  else if (monthNumber == 8) {
    return sep
  }  else if (monthNumber == 9) {
    return oct
  }  else if (monthNumber == 10) {
    return nov
  }  else if (monthNumber == 11) {
    return dic
  }
}

const setDate = month => {
  let monthName = setMonth(month)
  let fullDate = (`${day} ${monthName} ${year}`)  
  navDate.innerText = fullDate
}

setDate(month)



