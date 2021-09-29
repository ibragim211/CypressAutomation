describe('My first test suide', function() {


    it.only('Test Case 1', function() {


        cy.visit("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
        cy.get('input[name="username"]').type('Ibragim')
        cy.get('input[name="password"]').type('12345')
        cy.wait(2000)
        cy.get('.btn-success')
            .should('contain', 'Login')
            .click()
    })


})