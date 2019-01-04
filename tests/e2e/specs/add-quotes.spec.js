describe('User', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  function addQuote(quote) {
    cy.get('[data-cy="new-quote"]').type(quote)
    cy.get('[data-cy="add-quote"]').click()
  }

  const getQuotes = () => cy.get('[data-cy="quotes-list"] li')

  it('can add new quotes', () => {
    const quote = 'A room without books is like a body without a soul.'
    cy.get('[data-cy="new-quote"]')
      .type(quote)
      .should('be.empty')

    cy.get('[data-cy="add-quote"]').click()

    getQuotes()
      .its('length')
      .should('eq', 2)

    cy.get('progress').should('have.value', 2)

    cy.contains(quote)
  })

  it('cannot add empty quotes', () => {
    addQuote('  ')

    getQuotes()
      .its('length')
      .should('eq', 1)
  })

  it('trims quotes', () => {
    const quote = 'test quote'
    addQuote(` ${quote}  `)

    // we use as explicit assertion here about the text instead of
    // using 'contain' so we can specify the exact text of the element
    // does not have any whitespace around it
    getQuotes()
      .eq(1)
      .should('have.text', quote)
  })

  it('can delete a quote by clicking on it', () => {
    getQuotes()
      .first()
      .click()

    getQuotes().should('not.exist')
  })

  it('cannot add more than 10 quotes', () => {
    cy.get('[data-cy="alert-overload"]').should('not.be.visible')
    let i = 0
    while (i < 10) {
      addQuote('TRALALALALA')
      i++
    }

    getQuotes().should('have.length', 10)
    cy.get('[data-cy="alert-overload"]').should('be.visible')
  })
})
