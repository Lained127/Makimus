const form = document.getElementById('input-form');
const input = document.getElementById('user-input');
const output = document.getElementById('output');

function updateOutput(message) {
  output.textContent = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();

  if (value.length === 0) {
    updateOutput('Bitte gib etwas ein.');
    input.focus();
    return;
  }

  updateOutput(`Du hast eingegeben: ${value}`);
  input.focus();
});
