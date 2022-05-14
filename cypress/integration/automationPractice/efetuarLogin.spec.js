/// <reference types="cypress" />

describe('Realizar login', () => {

    beforeEach(() => {

        cy.visit('http://automationpractice.com/index.php')
    });

    it.only('realizando login', () => {

        cy.get('.login').click()
        cy.get('input[id="email"]').type('nbelo2019@gmail.com')
        cy.get('input[type="password"]').type('123456')
        cy.get('#SubmitLogin > span').click()
    });
    
});

