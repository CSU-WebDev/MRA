describe('Navigation Bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should display the text "Zip Code" and a text field', () => {
        cy.get('#App-header').within(() => {
            cy.get('input[id="city"]')
                .should('have.attr', 'placeholder', 'Example: 31907');
            cy.get('button[type="submit"]').contains('Submit');
        })
    })
})

