describe('OTP Verification Test', () => {
  it('should type OTP correctly and verify focus transitions', () => {
    // Visit the page
    cy.visit(baseUrl + "/main.html");

    // Ensure the page is fully loaded and the first input is focused
    cy.wait(1000);  // Wait for 1 second to ensure the page loads completely

    // Test typing the OTP and checking focus transitions
    cy.get(".code").eq(0).type(5);
    cy.wait(500);  // Wait for focus change after typing
    cy.focused().should('have.id', 'code-2');  // Assert focus moved to the second input

    cy.get(".code").eq(1).type(1);
    cy.wait(500);  // Wait for focus change
    cy.focused().should('have.id', 'code-3');  // Assert focus moved to the third input

    cy.get(".code").eq(2).type(7);
    cy.wait(500);  // Wait for focus change
    cy.focused().should('have.id', 'code-4');  // Assert focus moved to the fourth input

    cy.get(".code").eq(3).type(2);
    cy.wait(500);  // Wait for focus change
    cy.focused().should('have.id', 'code-5');  // Assert focus moved to the fifth input

    cy.get(".code").eq(4).type(9);
    cy.wait(500);  // Wait for focus change
    cy.focused().should('have.id', 'code-6');  // Assert focus moved to the sixth input

    cy.get(".code").eq(5).type(6);

    // Optionally, check the submit button click if part of the test flow
    cy.get(".submit-btn").click();
  });
});
