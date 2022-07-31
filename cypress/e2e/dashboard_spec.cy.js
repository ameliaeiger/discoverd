describe('Dashboard', () => {
  beforeEach('A user should be able to view a dashboard', () => {
        cy.visit('http://localhost:19006/Welcome')
        cy.get('[data-testid=Nav-Button-Dashboard]').click()
  })

  it('Should have a button container', () => {
    cy.get('[data-testid=Dashboard]')
  })
})
