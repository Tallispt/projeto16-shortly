import dayjs from "dayjs";

import { authRepository } from '../repositories/authorization.repository.js'

const auth = async (req, res, next) => {
    const { authorization } = req.headers
    const token = authorization?.replace('Bearer ', '')

    const isTokenValid = token
        ? await authRepository.getAuthTokensByColumn('token', token)
        : { rowCount: 0 }

    if (!isTokenValid.rowCount) return res.sendStatus(401)

    //Sessão expira em 5 horas
    const time = dayjs().diff(dayjs(isTokenValid.rows[0].createdAt), 'minutes')

    if (time > 300) return res.sendStatus(408)

    res.locals.userId = isTokenValid.rows[0].userId
    next()
}

export default auth