import { fazerLogin } from '../src/login.js'
import assert from 'node:assert'

describe('Login', () => {

    it('Validar que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados ', () => {
        // Arrange
        const email = 'carlosh@gmail.com'
        const senha = '123456'

        const mensagemEsperada = 'Login realizado com sucesso!'

        // Act
        const retornoDaFuncao = fazerLogin(email, senha)

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada)
    })

    it('Validar que as credenciais expiraram caso expirado for true', () => {
        // Arrange
        const email = 'caio@gmail.com'
        const senha = 'senha123'

        const mensagemEsperada = 'Credenciais expiradas!'

        // Act
        const retornoDaFuncao = fazerLogin(email, senha)

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada)
    })

    it('Validar que uma mensagem de erro é apresentada quando o usuário não é encontrado', () => {
        // Arrange
        const email = 'usuario_nao_encontrado@gmail.com'
        const senha = '123456'

        const mensagemEsperada = 'Credenciais Incorretas!'

        // Act
        const retornoDaFuncao = fazerLogin(email, senha)

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada)
    })

    it('Validar que uma mensagem de erro é apresentada quando a senha está incorreta para o usuário encontrado.', () => {
        // Arrange
        const email = 'gustavo@gmail.com'
        const senha = 'senha_incorreta'

        const mensagemEsperada = 'Credenciais Incorretas!'

        // Act
        const retornoDaFuncao = fazerLogin(email, senha)

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada)
    })

})