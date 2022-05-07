/// <reference types="cypress" />

describe('Automation Practice', function(){

    it('Create an account', () => {

        cy.visit('http://automationpractice.com/index.php')

        cy.get('.login').click()
        cy.get('input[id="email_create"]').type('nbelo2019@gmail.com').should('be.visible')
        cy.contains('button','Create an account').click()

        cy.get('#id_gender2').click()
        cy.get('#customer_firstname').type('Teste').should('be.visible')
        cy.get('#customer_lastname').type('TesteQA').should('be.visible')
        cy.get('#email').should('be.visible', 'nbelo2019@gmail.com')
        cy.get('#passwd').type('123456').should('be.visible')

        cy.get('#firstname').type('Teste').should('be.visible')
        cy.get('#lastname').type('TesteQA').should('be.visible')
        cy.get('#address1').type('Endereço').should('be.visible')
        cy.get('input[name="city"]').type('Cidade').should('be.visible')
        cy.select('#id_state').click()

    });
    
})