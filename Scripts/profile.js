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
  let isEditing = false;

  function toggleEditSave(button) {
    const editableElements = document.querySelectorAll('.editable');
    const displayOnlyElements = document.querySelectorAll('.display-only');

    if (!isEditing) {
      // Switch to edit mode
      editableElements.forEach(el => el.style.display = 'block');
      displayOnlyElements.forEach(el => el.style.display = 'none');
      button.textContent = 'Save Profile';
      isEditing = true;
    } else {
      // Save data and switch to view mode
      document.getElementById('out-name').textContent = document.getElementById('name').value;
      document.getElementById('out-healthID').textContent = document.getElementById('health-ID').value;
      document.getElementById('out-gender').textContent = document.getElementById('gender').value;
      document.getElementById('out-age').textContent = document.getElementById('age').value;
      document.getElementById('out-bloodGroup').textContent = document.getElementById('bloodGroup').value;

      editableElements.forEach(el => el.style.display = 'none');
      displayOnlyElements.forEach(el => el.style.display = 'block');
      button.textContent = 'Edit Profile';
      isEditing = false;
    }
  }