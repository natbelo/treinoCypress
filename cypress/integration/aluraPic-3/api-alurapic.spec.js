describe('Buscar fotos e dados', () => {

    it('buscar fotos', () => {
        cy.request({
            method: 'GET',
            url: 'https://alura-fotos.herokuapp.com/flavio/'
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property('description');
            expect(res.body[0].description).to.be.equal('Farol iluminado');
        })
    })

    it.only('fazer login', () => {
        cy.request({
            method: 'POST',
            url: 'https://alura-fotos.herokuapp.com/flavio/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('id');
            expect(res.body.id).to.be.equal(1);
            expect(res.body).to.have.property('email');
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br");
        })
    })
})