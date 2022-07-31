describe('Response Page', () => {
  beforeEach('A User should be able to see the response page', () => {
    cy.visit('http://localhost:19006/Home')
    cy.get('[data-testid=Nav-Button-Dashboard]')
    .click()
    cy.get('[data-testid=Response-Button]')
    .click()
  })

  it('Should a plant card to the user', () => {
    cy.get('[data-testid=Plant-Card]')
  })

  it('Should display both Scientific and Common names', () => {
    cy.get(':nth-child(1) > [data-testid="Plant-Card"] > .r-alignItems-1awozwy > .r-flex-13awgt0 > .r-fontSize-adyw6z')
    .contains('common dandelion')
    cy.get(':nth-child(1) > [data-testid="Plant-Card"] > .r-alignItems-1awozwy > .r-flex-13awgt0 > .r-fontSize-1enofrn')
    .contains('Taraxacum officinale')
  })

  it('Should display an image of a possible plant', () => {
    cy.get('[data-testid=Plant-Image]')
  })

  it('Should display details about the plant', () => {
    cy.get('[data-testid=Plant-Details]')
  })

  it('Should have a button which will take the user to a webpage about the plant', () => {
    cy.get('[data-testid=Plant-URL]')
  })
})
