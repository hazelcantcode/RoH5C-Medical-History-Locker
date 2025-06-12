const form = document.getElementById('medicalForm');
const savedData = document.getElementById('savedData');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    dob: document.getElementById('dob').value,
    allergies: document.getElementById('allergies').value,
    medications: document.getElementById('medications').value,
    conditions: document.getElementById('conditions').value,
    contacts: document.getElementById('contacts').value,
    insurance: document.getElementById('insurance').value
  };
  localStorage.setItem('medicalData', JSON.stringify(data));
  displaySavedData(data);
});

function displaySavedData(data) {
  savedData.innerHTML = `
    <h2>Saved Information</h2>
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Date of Birth:</b> ${data.dob}</p>
    <p><b>Allergies:</b> ${data.allergies}</p>
    <p><b>Medications:</b> ${data.medications}</p>
    <p><b>Conditions:</b> ${data.conditions}</p>
    <p><b>Contacts:</b> ${data.contacts}</p>
    <p><b>Insurance:</b> ${data.insurance}</p>
  `;
  savedData.style.display = 'block';
}

window.onload = () => {
  const storedData = localStorage.getItem('medicalData');
  if (storedData) {
    displaySavedData(JSON.parse(storedData));
  }
}
