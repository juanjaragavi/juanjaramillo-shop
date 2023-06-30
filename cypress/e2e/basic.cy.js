describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('p', { timeout: 10000 }) // Increase timeout to 10 seconds
    .contains('Tienda en Línea de Productos y Servicios de IA.');
  })
})