describe('Testing our Form', () =>{
    beforeEach(function () {
        cy.visit('http://localhost:3000');
        cy.get('[href="/pizza"]').click();
    });
    it('Get the name input and input the name', () =>{
        cy.get('[data-cy="name-input"]')
        .type("Ryan Schueck")
        .should("have.value", "Ryan Schueck")
        .clear();
        cy.contains("Name is a required field.");
        cy.get('[data-cy="submit"]').should('be.disabled')
    });

    it('get checkbox attribute and test if the user can check and uncheck toppings', () =>{
        cy.get('[data-cy="checkbox"]')
        .check()
        .should('be.checked')
        .uncheck();
    });
    it('Testing the Submit button', () => {
        cy.get('[data-cy="name-input"]')
        .type("Ryan")
        .should("have.value", "Ryan");
        cy.get('[data-cy="checkbox"]')
        .check()
        .should('be.checked');
        cy.get('[data-cy="submit"]')
        .click();
    })
});