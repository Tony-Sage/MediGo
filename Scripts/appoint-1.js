/* --- VARIBALE DECLARATIONS AND DEFINITIONS --- */

const paymentButton = document.querySelector('#payment-button')
const form = document.querySelector('form')
const bookedDoctorName = document.querySelector('#doctor-name')
const bookedDoctorSpecialty = document.querySelector('#doctor-specialty')
const bookedDoctorImage = document.querySelector('#doctor-image')

/* ---- RUNS ON PAGE LOAD --- */
getBookedDoctor()

//enforcing form validation for reminder preferences
// This script ensures that at least one reminder preference is selected before submitting the form
  document.getElementById('preferenceForm').addEventListener('submit', function(event) {
    const checkboxes = document.querySelectorAll('input[name="reminder"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isChecked) {
      alert('Please select at least one reminder preference.');
      event.preventDefault(); // Prevent form from submitting
    }
  });


/* ---- FUNCTION DEFINITIONS ---- */

function getBookedDoctor() {
 bookedDoctor = JSON.parse(localStorage.getItem("booked-doctor"))
 bookedDoctorName.innerText = bookedDoctor.name
 bookedDoctorSpecialty.innerText = `${bookedDoctor.specialty} specialist`
 bookedDoctorImage.src = bookedDoctor.image
 
}

/* ---- EVENT LISTENERS ---- */
