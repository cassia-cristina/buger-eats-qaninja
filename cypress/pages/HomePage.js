
class HomePage {

    go() {
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats')
    }

}

export default new HomePage