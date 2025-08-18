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