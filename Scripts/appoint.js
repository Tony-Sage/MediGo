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

const doctorList = document.querySelector('#doctor-list')

function renderDoctorList(){
  doctorList.innerHTML = "" // clear existing doctors

  doctorListData.forEach((doctor) => {
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
            <button>Check Availability</button>
          </div>
        </div>
      </div>
    `
    doctorList.innerHTML += doctorDiv
  })
}

renderDoctorList()