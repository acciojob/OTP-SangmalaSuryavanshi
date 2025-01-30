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


describe('OTP Verification', () => {
  const baseUrl = 'http://localhost:3000'; // Adjust this to match your actual base URL

  it('should check page elements and type OTP correctly', () => {
    cy.visit(baseUrl + '/main.html');

    // Ensure the page loaded correctly by checking elements
    cy.get("#verification_heading").should("have.text", "Verify Your Account");
    cy.get("#verification_subtext").should("exist");
    cy.get(".code-container").find("input.code").eq(5).should("exist");

    // Ensure the first input field is focused
    cy.get(".code").eq(0).focus(); // Manually focus on the first field
    cy.focused().should("have.id", "code-1"); // Check if it is focused

    // Start typing in the OTP fields and check focus after each field
    cy.get(".code").eq(0).type(5);
    cy.focused().should("have.id", "code-2"); // Check focus moves to the second field

    cy.get(".code").eq(1).type(1);
    cy.focused().should("have.id", "code-3");

    cy.get(".code").eq(2).type(7);
    cy.focused().should("have.id", "code-4");

    cy.get(".code").eq(3).type(2);
    cy.focused().should("have.id", "code-5");

    cy.get(".code").eq(4).type(9);
    cy.focused().should("have.id", "code-6");

    cy.get(".code").eq(5).type(6);
  });

  it('should navigate backward with backspace', () => {
    cy.visit(baseUrl + '/main.html');

    // Typing values in the OTP fields
    cy.get(".code").eq(0).type(5);
    cy.get(".code").eq(1).type(1);
    cy.get(".code").eq(2).type(7);
    cy.get(".code").eq(3).type(2);
    cy.get(".code").eq(4).type(9);
    cy.get(".code").eq(5).type(6);

    // Perform backspace and check focus moves backwards
    cy.get(".code").eq(5).type("{backspace}");
    cy.focused().should("have.id", "code-5");

    cy.get(".code").eq(4).type("{backspace}");
    cy.focused().should("have.id", "code-4");

    cy.get(".code").eq(3).type("{backspace}");
    cy.focused().should("have.id", "code-3");

    cy.get(".code").eq(2).type("{backspace}");
    cy.focused().should("have.id", "code-2");

    cy.get(".code").eq(1).type("{backspace}");
    cy.focused().should("have.id", "code-1");

    cy.get(".code").eq(0).type("{backspace}");
  });
});

