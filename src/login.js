const usuarios = [
    {
        id: 1,
        nome: 'Carlos Henrique',
        email: 'CARLOSH@GMAIL.COM',
        senha: '123456',
        expirado: false
    },
    {
        id: 2,
        nome: 'João Henrique',
        email: 'jh2003@gmail.com',
        senha: '654321',
        expirado: false
    },
    {
        id: 3,
        nome: 'Gustavo',
        email: 'gustavo@gmail.com',
        senha: 'abcdef',
        expirado: false
    },
    {
        id: 4,
        nome: 'Thiago',
        email: 'thiago23@gmail.com',
        senha: 'abc123',
        expirado: false
    },
    {
        id: 5,
        nome: "Caio",
        email: 'caio@gmail.com',
        senha: 'senha123',
        expirado: true
    },
]

export function fazerLogin(email, senha) {
    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].email.toUpperCase() == email.toUpperCase()) {

            if (usuarios[i].senha != senha) {
                return 'Credenciais Incorretas!'
            }

            if (usuarios[i].expirado == true) {
                return 'Credenciais expiradas!'
            }

            return 'Login realizado com sucesso!'
        }
    }

    return 'Credenciais Incorretas!'
}