// doctors' data
const doctorListData = [
 {
  name: "Dr. Martha",
  specialty: "Cardiologist",
  location: "Enugu",
  lowestPrice: 300,
  highestPrice: 2500,
  image: "../profile-doctor/lee.png"
 }, {
  name: "Dr. Smith",
  specialty: "Endocrinologist",
  location: "Enugu",
  lowestPrice: 300,
  highestPrice: 2500,
  image: "../profile-doctor/lee.png"
 }, {
  name: "Dr. Johnson",
  specialty: "Orthopedic",
  location: "Enugu",
  lowestPrice: 300,
  highestPrice: 2500,
  image: "../profile-doctor/lee.png"
 }, {
  name: "Dr. Garcia",
  specialty: "General Medicine",
  location: "Enugu",
  lowestPrice: 300,
  highestPrice: 2500,
  image: "../profile-doctor/lee.png"
 }, {
  name: "Dr. Lee",
  specialty: "Cardiologist",
  location: "Enugu",
  lowestPrice: 300,
  highestPrice: 2500,
  image: "../profile-doctor/lee.png"
 }, {
  name: "Dr. Kelvin Smith",
  specialty: "Cardiologist",
  location: "Enugu",
  lowestPrice: 300,
  highestPrice: 2500,
  image: "../profile-doctor/lee.png"
 }, {
  name: "Dr. Mary",
  specialty: "Cardiologist",
  location: "Enugu",
  lowestPrice: 300,
  highestPrice: 2500,
  image: "../profile-doctor/lee.png"
 }
]


/* ---- VARIABLE DEFINITIONS ---- */
const doctorList = document.querySelector('#doctor-list')
const searchBar = document.querySelector('#search-bar')


/* ---- RUN ON PAGE LOAD ---- */
renderDoctorList(doctorListData)



/* ---- FUNCTION DEFINITIONS ---- */

// renders the list of doctors on the page
function renderDoctorList(list){
  doctorList.innerHTML = "" // clear existing doctors
  list.forEach((doctor) => {
    const doctorDiv = `
      <div class="doctor" data-department="${doctor.specialty}">
        <div class="doctor-header">
          <p>${doctor.specialty}</p>
          <p class="Price">Price ₦${doctor.lowestPrice} - ₦${doctor.highestPrice}</p>
        </div>  
        <div class="content">
          <div class="content-flex">
            <img class="doctor-img" src="${doctor.image}" alt="${doctor.name}">
            <div class="doctor-text">
              <p class="name">${doctor.name}</p>
              <p class="location">
                <img class="location-img" src="../elements/map-marker.png" alt="location-icon">
                ${doctor.location}
              </p>
            </div>
          </div>  
          <div class="doctor-button">
            <button class="availability-button">Check Availability</button>
          </div>
        </div>
      </div>
    `
    doctorList.innerHTML += doctorDiv
  })
}

// makes the search bar functional 
function searchDoctorList(searchTerm){
 const results = doctorListData.filter((doctor)=>{
  if (
   doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
   doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) || 
   doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  ){return true}
 })
 renderDoctorList(results)
}

// makes check availability buttons functional 
function checkAvailability(button){
 button.style.display = "none"
 const randomPick = Math.random()
 loader = document.createElement("div")
 loader.className = "loader"
 parentDiv = button.parentNode
 parentDiv.appendChild(loader)
 setTimeout(() => {
  parentDiv.removeChild(loader)
  if (randomPick < 1/2){
   displayStatus("Available", button)
  } else {
   displayStatus(`Sorry, \n not available`, button)
  }
 }, 1500)
}

// displays if doctor is available or not
function displayStatus(message, button){
 if (message === "Available"){
  bookingButton = document.createElement('button')
  bookingButton.innerText = "Book appointment "
  parentDiv = button.parentNode
  parentDiv.appendChild(bookingButton)
 } 
 else {
  statusMessage = document.createElement('div')
  statusMessage.className = "status-message"
  statusMessage.innerHTML = `${message}`
  parentDiv = button.parentNode
  parentDiv.appendChild(statusMessage)
  setTimeout(() => {
   parentDiv.removeChild(statusMessage)
   button.style.display = "block"
  },1500)
 }
}

/* ---- EVENT LISTENERS --- */

// event listener for search bar
searchBar.addEventListener("input", (e)=>{
 searchDoctorList(e.target.value)
})

// event listener for check availability button
doctorList.addEventListener("click", (e) => {
 if (e.target.classList.contains("availability-button")) {
  checkAvailability(e.target)
 }
})