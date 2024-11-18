// DOM Elements
const dataLabelInput = document.getElementById('data-label');
const dataValueInput = document.getElementById('data-value');
const addDataBtn = document.getElementById('add-data-btn');
const chartContainer = document.getElementById('chart-container');

// Event Listener
addDataBtn.addEventListener('click', addDataPoint);

// Function: Add Data Point
function addDataPoint() {
  const label = dataLabelInput.value.trim();
  const value = parseFloat(dataValueInput.value);

  if (label === '' || isNaN(value) || value <= 0) {
    alert('Please enter a valid label and value greater than zero.');
    return;
  }

  // Create a bar element
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.height = `${value * 10}px`; // Scale value for visualization
  bar.innerHTML = `
    <span>${value}</span>
    <span>${label}</span>
  `;

  // Append to chart container
  chartContainer.appendChild(bar);

  // Clear input fields
  dataLabelInput.value = '';
  dataValueInput.value = '';
}
