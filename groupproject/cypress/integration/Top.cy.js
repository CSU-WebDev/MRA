describe('Top', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should contain the text "Weather Info"and navigate to each section when the navbar links are clicked', () => {
        cy.get('#Nav').within(() => {
            cy.get('#Nav').eq(0).click()
        });
        cy.get('#Nav').should('contain', 'Home');
        cy.url().should('include', '#home');

        cy.get('#Nav').within(() => {
            cy.get('#Nav').eq(1).click()
        });
        cy.get('#Nav').should('contain', 'Team');
        cy.url().should('include', '#footer');
    })
})