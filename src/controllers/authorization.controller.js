import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import { signUpSchema, signInSchema } from '../schemas/authorization.schama.js';
import { authRepository } from '../repositories/authorization.repository.js'

const signUp = async (req, res) => {
    const signUpData = req.body

    const validation = signUpSchema.validate(signUpData)
    if (validation.error)
        return res.status(422).send(validation.error.details[0].message)

    try {
        const emailExists = await authRepository.getUserByColumn('email', signUpData.email)
        if (emailExists.rowCount) return res.sendStatus(409)

        const passwordEncrypted = bcrypt.hashSync(signUpData.password, 10)

        await authRepository.insertUser(signUpData.name, signUpData.email, passwordEncrypted)
        res.sendStatus(201)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const signIn = async (req, res) => {
    const signInData = req.body

    const validation = signInSchema.validate(signInData)
    if (validation.error)
        return rusersIdes.status(422).send(validation.error.details[0].message)

    try {
        const userData = await authRepository.getUserByColumn('email', signInData.email)

        const isPasswordValid = userData.rowCount
            ? bcrypt.compareSync(signInData.password, userData.rows[0].password)
            : false

        if (!userData.rowCount || !isPasswordValid) return res.sendStatus(401)

        const tokenExists = await authRepository.getAuthTokensByColumn('userId', userData.rows[0].id)

        const token = uuid()

        //Caso exista um token para o usuário, ele atualiza. Do contrario, cria
        tokenExists.rowCount
            ? await authRepository.updateToken(userData.rows[0].id, token)
            : await authRepository.insertAuthToken(userData.rows[0].id, token)

        res.status(200).send({ valor: token })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export { signUp, signIn }