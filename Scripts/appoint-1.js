let selectedTime = "";
// Script to handle date selection and display in the appointment system
// This script manages the date buttons, displays the current date, and allows navigation through dates
// Selectors for date buttons and display
// appoint-1.js

// Initial reference date (can be today's date or any default)
let currentStartDate = new Date(2025, 7, 14); // August is month 7 (zero-based index)
let selectedDate = new Date(currentStartDate); // clone

const selectedDateEl = document.getElementById("selectedDate");
const dateButtonsContainer = document.querySelector(".date-btn");
const leftArrow = document.querySelector(".arrow-btn:first-of-type");
const rightArrow = document.querySelector(".arrow-btn:last-of-type");

// Format helper
function formatDate(date) {
  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
}

// Render week buttons (Mon–Sun)
function renderWeek(startDate) {
  // Clear previous buttons
  dateButtonsContainer.innerHTML = "";
  const DAYS_TO_SHOW = 7;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < DAYS_TO_SHOW; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const btn = document.createElement("button");
    const dayName = date.toLocaleDateString("default", { weekday: "short" }); // e.g., Mon
    const dayNum = date.getDate();

    btn.innerHTML = `${dayName}<br>${dayNum}`;
    btn.dataset.date = date.toISOString();

    let isDisabled = false;

    // Disable past dates
    if (date < today) {
      isDisabled = true;
    }

    // Optional: disable weekends
    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      isDisabled = true;
    }

    // Optional: disable custom dates
    const disabledDates = ["2025-08-15", "2025-08-19"]; // Example ISO dates
    if (disabledDates.includes(date.toISOString().split("T")[0])) {
      isDisabled = true;
    }

    // Apply disabled styling and skip adding event listener
    if (isDisabled) {
      btn.classList.add("disabled");
      btn.disabled = true; // native attribute (optional)
    } else {
      // Allow click to select date
      btn.addEventListener("click", () => {
        selectedDate = new Date(date);
        updateSelectedDateDisplay();
        btn.addEventListener("click", () => {
          // Remove 'active' class from all date buttons
          [...dateButtonsContainer.querySelectorAll("button")].forEach((btn) =>
            btn.classList.remove("active")
          );

          // Set new selected date
          selectedDate = new Date(date);
          updateSelectedDateDisplay();

          // Highlight the clicked button
          btn.classList.add("active");
        });
      });
    }

    // Highlight selected date if it's not disabled
    if (!isDisabled && selectedDate.toDateString() === date.toDateString()) {
      btn.classList.add("active");
    }

    dateButtonsContainer.appendChild(btn);
  }
}

// Update visible text date
function updateSelectedDateDisplay() {
  selectedDateEl.textContent = formatDate(selectedDate);

  // Also set hidden form input values if needed
  const appointmentDateInput = document.getElementById("appointmentDate");
  if (appointmentDateInput) {
    appointmentDateInput.value = selectedDate.toISOString().split("T")[0]; // yyyy-mm-dd
  }
}

// Navigation
leftArrow.addEventListener("click", () => {
  currentStartDate.setDate(currentStartDate.getDate() - 7);
  selectedDate = new Date(currentStartDate); // select first day of new week
  updateSelectedDateDisplay();
  renderWeek(currentStartDate);
});

rightArrow.addEventListener("click", () => {
  currentStartDate.setDate(currentStartDate.getDate() + 7);
  selectedDate = new Date(currentStartDate); // select first day of new week
  updateSelectedDateDisplay();
  renderWeek(currentStartDate);
});

// Initial setup
updateSelectedDateDisplay();
renderWeek(currentStartDate);

// Script to handle time button selection in the appointment system
// This script manages the time buttons, allowing users to select an appointment time
// Selectors for time buttons and selected time
// Handle Time Button Selection
const timeButtonsContainer = document.querySelector(".time-btns");

timeButtonsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // Remove 'selected' class from all time buttons
    [...timeButtonsContainer.querySelectorAll("button")].forEach((btn) =>
      btn.classList.remove("selected")
    );

    // Add 'selected' to clicked button
    e.target.classList.add("selected");

    // Store selected time
    selectedTime = e.target.textContent.trim();
    document.getElementById("appointmentTime").value = selectedTime;
    console.log("Selected time:", selectedTime);
  }
});

// Form validation for appointment date and time
// This script ensures that both date and time are selected before submitting the form
// Selectors for form and inputs
document
  .getElementById("preferenceForm")
  .addEventListener("submit", function (e) {
    const checkboxes = document.querySelectorAll('input[name="reminder"]');
    const isChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );

    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;

    //enforcing form validation for reminder preferences
    // This script ensures that at least one reminder preference is selected before submitting the form
    if (!isChecked) {
      alert("Please select at least one reminder preference.");
      e.preventDefault();
      return;
    }

    if (!date || !time) {
      alert("Please select both a date and time for your appointment.");
      e.preventDefault();
      return;
    }
  });


/* --- VARIBALE DECLARATIONS AND DEFINITIONS --- */

const paymentButton = document.querySelector('#payment-button')
const form = document.querySelector('form')
const bookedDoctorName = document.querySelector('#doctor-name')
const bookedDoctorSpecialty = document.querySelector('#doctor-specialty')

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
}

/* ---- EVENT LISTENERS ---- */
