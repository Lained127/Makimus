const form = document.getElementById('greeting-form');
const input = document.getElementById('user-input');
const message = document.getElementById('user-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text) {
    message.textContent = `Du hast eingegeben: ${text}`;
  } else {
    message.textContent = 'Bitte gib einen Text ein, bevor du fortfährst.';
    input.focus();
  }
});
