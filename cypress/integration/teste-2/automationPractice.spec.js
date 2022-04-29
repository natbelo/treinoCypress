/// <reference types="cypress" />

describe('Automation Practice', function(){

    it('Create an account', () => {

        cy.visit('http://automationpractice.com/index.php')

        cy.get('.login').click()
        cy.get('input[id="email_create"]').type('nbelo2019@gmail.com').should('be.visible')
        cy.contains('button','Create an account').click()

    
        
    });
    
})