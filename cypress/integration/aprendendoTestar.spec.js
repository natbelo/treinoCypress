/// <reference types="cypress" />

context('Aprendendo a testar', () => {

    beforeEach(() => {

        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php')
        
    });

    it('Cadastrar usuário', () => {

        cy.get('[name=form_usuario]').type('NBelo')
        cy.get('[name=form_senha]').type('654321')
        cy.get('[name=form_nome]').type('Nat')
        cy.get('input[type="submit"]').click()
        
    });

    it.only('Deletar usuário', () => {

        cy.get('tr:nth-child(5) > td:nth-child(5) > a').click()
        
    });
    
});