//your JS code here. If required.
document.querySelectorAll('.code').forEach((input, index, inputs) => {
  input.addEventListener('input', (e) => {
    const currentInput = e.target;
    const nextInput = inputs[index + 1];

    // Move to next input after typing a number
    if (currentInput.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    // Handle backspace key
    if (e.key === 'Backspace' && !input.value) {
      const prevInput = inputs[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  });
});



