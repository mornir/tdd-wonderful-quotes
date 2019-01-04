describe('User', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.only('can add new quotes', () => {
    const quote = 'A room without books is like a body without a soul.'
    cy.get('[data-cy="new-quote"]')
      .type(quote)
      .should('be.empty')

    cy.get('[data-cy="add-quote"]').click()

    cy.get('[data-cy="quotes-list"] li')
      .its('length')
      .should('eq', 2)

    cy.get('progress').should('have.value', 2)

    cy.contains(quote)
  })

  it('cannot add empty quotes', () => {
    cy.get('[data-cy="new-quote"]')
      .type(' {enter}')
      .should('be.empty')

    cy.get('[data-cy="quotes-list"] li')
      .its('length')
      .should('eq', 1)
  })

  it('can delete a quote by clicking on it', () => {
    cy.get('[data-cy="quotes-list"] li')
      .first()
      .click()

    cy.get('[data-cy="quotes-list"] li').should('not.exist')
  })

  /* it('cannot add more than 10 quotes'). */
})
