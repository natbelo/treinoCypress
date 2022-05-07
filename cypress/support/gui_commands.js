
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome).should('be.visible');
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();
})


Cypress.Commands.add('registro', (email, fullName, userName, password) => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[placeholder="email"]').type(email);
    cy.get('input[placeholder="full name"]').type(fullName);
    cy.get('input[placeholder="user name"]').type(userName);
    cy.get('input[type="password"]').type(password);
    cy.contains('button', 'Register').click();
})