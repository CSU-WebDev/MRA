describe('Navigation Bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should contain the text "Weather Info"and navigate to each section when the navbar links are clicked', () => {
        cy.get('#Nav').within(() => {
            cy.get('.navbar-link').eq(0).click()
        });
        cy.get('#Nav').should('be.visible');
        cy.url().should('include', '#App-header');

        cy.get('#Nav').within(() => {
            cy.get('#Nav').click()
        });
        cy.get('#Nav').should('be.visible');
        cy.url().should('include', '#footer');
    })
})