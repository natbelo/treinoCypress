/// <reference types="cypress" />

context('Aprendendo a testar', () => {

    beforeEach(() => {

        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php')
        
    });

    it.only('Cadastrar usuário', () => {

        cy.get('[name=form_usuario]').type('NBelo2')
        cy.get('[name=form_senha]').type('654321')
        cy.get('[name=form_nome]').type('Nat')
        cy.get('input[type="submit"]').click()

        cy.get('tr:nth-child(2) > td:nth-child(3)').should('have.text', 'NBelo2')
        
    });

    it('Deletar usuário', () => {

        cy.get('tr:nth-child(2) > td:nth-child(5) > a').click()
        
    });
    
});