document.querySelectorAll('.code').forEach((input, index, inputs) => {
  input.addEventListener('input', () => {
    if (input.value) {
      // Automatically move focus to the next input if there is a value typed
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value === '') {
      // If the input is empty and Backspace is pressed, move focus to the previous input
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
