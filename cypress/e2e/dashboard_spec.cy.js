describe('Dashboard', () => {
  beforeEach('A user should be able to view a dashboard', () => {
        cy.visit('http://localhost:19006/Home')
        cy.get('[data-testid=Nav-Button-Dashboard]').click()
        cy.get('[data-testid=Dashboard]')
  })

  it('Should have a button container', () => {
    cy.get('[data-testid=Button-Container]').should('be.visible')
  })

  it('Should have a button which allows the user to select an image from mobile device', () => {
    cy.get('[data-testid=Upload-Image]')
    .contains('Upload Image')
    .should('be.visible')
    .click()
  })

  it('Should have a button which can open the users mobile camera, so they can take and picture', () => {
    cy.get('[data-testid=Take-Picture]')
    .contains('Take a Picture')
    .should('be.visible')
    .click()
  })

  it('Should have a button which allows a user to visit the response page', () => {
    cy.get('[data-testid=Response-Button]').should('be.visible').click()
  })

})
