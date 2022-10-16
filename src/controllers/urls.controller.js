import pg from '../database/db.js';
import { nanoid } from 'nanoid';

import { urlSchema } from '../schemas/url.schema.js'
import { urlRepository } from '../repositories/urls.repository.js';

const shortenUrl = async (req, res) => {
    const { url } = req.body
    const { userId } = res.locals

    const validation = urlSchema.validate(url)
    if (validation.error)
        return res.status(422).send(validation.error.details[0].message)

    const shorten = { shortUrl: nanoid(8) }
    try {
        await urlRepository.insertUrl(userId, url, shorten.shortUrl)

        res.status(201).send(shorten)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const findUrlById = async (req, res) => {
    const { id } = req.params

    try {
        const url = await urlRepository.getUrlByColumn('urls', id)

        if (!url.rowCount) return res.sendStatus(404)

        delete url.rows[0].userId
        delete url.rows[0].createdAt

        res.status(200).send(url.rows[0])
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const redirectUrl = async (req, res) => {
    const { shortUrl } = req.params

    try {
        const url = await urlRepository.getUrlByColumn('shortUrl', shortUrl)

        if (!url.rowCount) return res.sendStatus(404)

        const visits = await urlRepository.getVisitsByColumn('urlId', url.rows[0].id)

        !visits.rowCount
            ? await urlRepository.insertVisit(url.rows[0].id)
            : await urlRepository.updateVisit(visits.rows[0].id, visits.rows[0].visitNumber + 1)

        res.status(200).send(url.rows[0].url)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteUrlById = async (req, res) => {
    const { id } = req.params
    const { userId } = res.locals

    try {
        const isUrlValid = await urlRepository.getUrlByColumn('id', id)

        if (!isUrlValid.rowCount) return res.sendStatus(404)

        if (userId !== isUrlValid.rows[0].userId) return res.sendStatus(401)

        await urlRepository.deleteUrl(id)

        res.sendStatus(204)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export { shortenUrl, findUrlById, redirectUrl, deleteUrlById }