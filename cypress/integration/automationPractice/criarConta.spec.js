/// <reference types="cypress" />

describe('Cadastro nova conta', () => {

    beforeEach(() => {

        cy.visit('http://automationpractice.com/index.php')
    });

    it('Create an account', () => {
        

        cy.get('.login').click()
        cy.get('input[id="email_create"]').type('nbelo2019@gmail.com').should('be.visible')
        cy.contains('button','Create an account').click()
    
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type('Teste').should('be.visible')
        cy.get('#customer_lastname').type('TesteQA').should('be.visible')
        cy.get('#email').should('be.visible', 'nbelo2019@gmail.com')
        cy.get('#passwd').type('123456').should('be.visible')
    
        cy.get('#firstname').type('Teste').should('be.visible')
        cy.get('#lastname').type('TesteQA').should('be.visible')
        cy.get('#address1').type('Endereço').should('be.visible')
        cy.get('input[name="city"]').type('Cidade').should('be.visible')
        cy.get('#id_state').select('Alabama')
        /*cy.get('#id_state').its('length', {log:false}).then(n => {
            const randomOptionIndex = Cypress._.random(n-1)
            cy.get('#id_state').select(randomOptionIndex)
        })*/
        cy.get('input[id="postcode"]').type('00000')
        cy.get('#id_country').select('United States')
        cy.get('#phone_mobile').type('081999999999')
        cy.get('#alias').clear().type('teste@teste.com')
        cy.get('#submitAccount > span').click()
    
    });


    
});

