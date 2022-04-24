/// <reference types="cypress" />

context('Aprendendo a testar', () => {

    it('Cadastrar usuário', () => {

        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php')

        cy.get('[name=form_usuario]').type('NBelo')
        cy.get('[name=form_senha]').type('654321')
        cy.get('[name=form_nome]').type('Nat')
        cy.get('input[type="submit"]').click()
        
    });
    
});