/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o Cadastro de campos obrigatórios', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araujo')
    cy.get('#signup-email').type('fabio@teste.com')
    cy.get('#signup-phone').type('11983298932')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })
})