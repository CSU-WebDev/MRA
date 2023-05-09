describe('Footer', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  

    it('should contain MRA, copyright sign, and the current date', () => {
        const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
    
        cy.get('#footer')
          .find('p')
          .should('contain.text', `MRA © ${currentDate}`);
    });
    it('should find the element with id "footer" and check if it contains the text "This is a group project by :"', () => {
        cy.get('#footer')
          .should('contain.text', `MRA © ${currentDate}`);
        cy.get('#about-container')
          .should('contain', 'This is a group project by :')
        cy.get('#footer')
          .should('contain', 'Adeola Ogundipe');
        cy.get('#footer')
          .should('contain', 'Raj Kotak');
        cy.get('#footer')
          .should('contain', 'Mckenna Koetitz');
      });

});