  //code for handling tab navigation and responsive dropdown filtering
  function showCategory(category, event = null) {
    const allTabs = document.querySelectorAll('.tab');
    const buttons = document.querySelectorAll('.category-nav button');

    // Show the matching tab and hide the others
    allTabs.forEach(tab => {
      tab.style.display = tab.dataset.category === category ? 'block' : 'none';
    });

    // Highlight the active button
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target && event.target.tagName === 'BUTTON') {
      event.target.classList.add('active');
    }

    // Sync dropdown selection
    const select = document.getElementById('category-select');
    if (select && select.value !== category) {
      select.value = category;
    }
  }

  function filterByDropdown() {
    const selectedCategory = document.getElementById('category-select').value;
    showCategory(selectedCategory);
  }

  function setupResponsiveFilter() {
    const categorySelect = document.getElementById("category-select");
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleScreenChange(e) {
      if (e.matches) {
        categorySelect.addEventListener("change", filterByDropdown);
        filterByDropdown();
      } else {
        categorySelect.removeEventListener("change", filterByDropdown);
      }
    }

    handleScreenChange(mediaQuery);
    mediaQuery.addEventListener("change", handleScreenChange);
  }

  function setupCategoryButtons() {
    const buttons = document.querySelectorAll(".category-nav button");

    buttons.forEach(button => {
      if (!button.dataset.listenerAttached) {
        button.addEventListener("click", (event) => {
          const category = button.getAttribute("data-category");
          showCategory(category, event);
        });
        button.dataset.listenerAttached = "true";
      }
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    setupResponsiveFilter();
    setupCategoryButtons();

    // Show the first tab by default (or "appointment")
    showCategory('appointment');
  });

    // Toggle edit mode for profile
  function toggleEditSave(button) {
    const displayElements = document.querySelectorAll('.display-only');
    const editableElements = document.querySelectorAll('.editable');
    const isEditing = button.textContent === "Edit Profile";

    // Toggle visibility
    displayElements.forEach(el => el.style.display = isEditing ? 'none' : 'block');
    editableElements.forEach(el => el.style.display = isEditing ? 'block' : 'none');

    if (isEditing) {
      button.textContent = "Save Profile";
    } else {
      // Update display fields with form values
      document.getElementById('out-name').textContent = document.getElementById('name').value;
      document.getElementById('out-healthID').textContent = document.getElementById('health-ID').value;
      document.getElementById('out-gender').textContent = document.getElementById('gender').value;
      document.getElementById('out-age').textContent = document.getElementById('age').value;
      document.getElementById('out-bloodGroup').textContent = document.getElementById('bloodGroup').value;

      button.textContent = "Edit Profile";
    }
  }

// Upcoming Appointment & Medication
window.addEventListener("DOMContentLoaded", () => {
  const joinBtns = document.querySelectorAll(".join-btn");
  const rescheduleBtns = document.querySelectorAll(".U-App-btn");
  const cancelBtns = document.querySelectorAll(".U-App-btn-cancel");

  // Join Consultation Btn
  joinBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.open("https://zoom.com", "_blank");
    });
  });

  // Reschedule btn
  rescheduleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".U-App-1, .U-App-2");
      if (!parent) return;

      let dateInput = parent.querySelector(".reschedule-input");

      if (!dateInput) {
        // First click → show the calendar
        dateInput = document.createElement("input");
        dateInput.type = "datetime-local";
        dateInput.className = "reschedule-input";
        btn.insertAdjacentElement("afterend", dateInput);
        btn.textContent = "Confirm"; // change button text temporarily
      } else {
        // Second click → confirm selected date/time
        if (dateInput.value) {
          const textHolder = parent.querySelector(".text-holder p:last-of-type");
          const date = new Date(dateInput.value);
          textHolder.textContent =
            `Online - Video Consultation\n${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        }

        // remove calendar
        dateInput.remove();
        btn.textContent = "Reschedule"; // change button text back
      }
    });
  });


  // Cancel → Remove buttons & show cancelled text
  cancelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".U-App-1, .U-App-2");
      if (!parent) return;

      const btnContainer = parent.querySelector(".U-App-btn-container");
      btnContainer.innerHTML = "<p class='cancelled-text'>Cancelled</p>";
    });
  });
});
