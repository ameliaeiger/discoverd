describe('Weclome Page', () => {
  beforeEach('The user should see the welcome page', () => {
    cy.visit('http://localhost:19006/Welcome')
  })

  it('Should allow user to see a welcome page', () => {
    cy.get('[data-testid=Welcome-Page]')
  })

  it('Should allow a user to see a greeting', () => {
    cy.get('[data-testid=Greeting]').contains('Welcome!')
  })

  it('Should allow a user to see a info message about the app', () => {
    cy.get('[data-testid=Greeting-Info]').contains('discoverd is a tool to help you identify the plant life around you.')
  })

  it('Should have a button that allows the user to navigate to the dashboard', () => {
    cy.get('[data-testid=Nav-Button-Dashboard]').click()
  })
})
