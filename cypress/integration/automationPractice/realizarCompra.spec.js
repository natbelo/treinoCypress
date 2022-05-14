/// <reference types="cypress" />

describe('Realizar compras', function(){

    beforeEach(() => {

        cy.visit('http://automationpractice.com/index.php')
    });

    
    it.only('efetuar compra', function(){
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x').click()
        cy.get('.first-in-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
        


    })
    
})