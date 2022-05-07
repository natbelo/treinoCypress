describe('Cadastro usuários', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('verifica mensagem validacao', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');

    });

    it('verifica mensagem email, user name e password inválido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[placeholder="email"]').type('teste');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[placeholder="user name"]').type('TESTE');
        cy.contains('small', 'Must be lower case').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[type="password"]').type('123');
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    });

    it('Cadastro novo usuário', () => {

        cy.registro('teste001@teste.com','teste 001','teste001','87654321');
        
    });
    
});