describe('My First Test', () => {
    it('Visits the homepage', () => {
        cy.visit('/');
        cy.contains('July').should('exist');
    });
});