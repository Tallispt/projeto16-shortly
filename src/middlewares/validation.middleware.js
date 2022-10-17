import { signUpSchema, signInSchema } from '../schemas/authorization.schama.js';
import { urlSchema } from '../schemas/url.schema.js'

export const validationSchema = async (req, res, next) => {
    const data = req.body

    let validation
    if (Object.keys(data).length === 4) { validation = signUpSchema.validate(data) }
    if (Object.keys(data).length === 2) { validation = signInSchema.validate(data) }
    if (Object.keys(data).length === 1) { validation = urlSchema.validate(data) }

    if (validation.error)
        return res.status(422).send(validation.error.details[0].message)
    next()
}