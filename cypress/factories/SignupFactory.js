var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: faker.phone.phoneNumber('(##)#########'),
            address: {
                postalcode: '04730-050',
                street: 'Rua Centro Africana',
                number: 's/n',
                details: 'qd 50 lt 33',
                district: 'Várzea de Baixo',
                cityState: 'São Paulo/SP'
            },
            deliveryMethod: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}