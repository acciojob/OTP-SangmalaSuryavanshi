//your JS code here. If required.
document.querySelectorAll('.code').forEach((input, index, inputs) => {
  input.addEventListener('input', (e) => {
    const currentInput = e.target;
    const nextInput = currentInput.nextElementSibling; // Get the next sibling input

    // Move focus to next input after typing a number
    if (currentInput.value.length === 1 && nextInput && nextInput.classList.contains('code')) {
      nextInput.focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    // Handle backspace key
    if (e.key === 'Backspace' && !input.value) {
      const prevInput = input.previousElementSibling; // Get the previous sibling input
      if (prevInput && prevInput.classList.contains('code')) {
        prevInput.focus();
      }
    }
  });
});

