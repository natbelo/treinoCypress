describe('Login usuários', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    });

    it('Login usuário válido', () => {
        
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.wait('@stubPost');
        cy.contains('a', '(Logout)').should('be.visible');
        
    });

    it('Login usuário inválido', () => {

        cy.login('TESTE', '12345678');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
          
    });
    
});