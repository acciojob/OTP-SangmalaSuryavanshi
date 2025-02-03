document.querySelectorAll('.code').forEach((input, index, inputs) => {
  input.addEventListener('input', () => {
    if (input.value) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value === '') {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
