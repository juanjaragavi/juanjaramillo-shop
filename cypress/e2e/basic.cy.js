describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2', { timeout: 10000 }) // Increase timeout to 10 seconds
    .contains('Essentials for a cold winter');
  })
})