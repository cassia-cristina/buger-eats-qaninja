
class SignupPage {
    
    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('contain', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.cityState)

        cy.contains('.delivery-method li', deliver.deliveryMethod).click()
        //cy.get('.dropzone input[accept^="image"]').attachFile('/images/' + deliver.cnh)
        cy.get('.dropzone input[accept^="image"]').selectFile('cypress/fixtures/images/' + deliver.cnh,{force: true})
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-popup .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        cy.contains('.alert-error', expectedMessage)
    }

}

export default new SignupPage;