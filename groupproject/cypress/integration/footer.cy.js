describe('footer', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000')
  })
  
    it('should find the element with id "footer" and check if it contains the text "This is a group project by :"', () => {
        cy.get('#footer')
          .should('contain.text', 'MRA');
        cy.get('#footer')
          .should('contain', 'This is a group project by :')
        cy.get('#footer')
          .should('contain', 'Adeola Ogundipe');
        cy.get('#footer')
          .should('contain', 'Raj Kotak');
        cy.get('#footer')
          .should('contain', 'Mckenna Koetitz');
      });

});