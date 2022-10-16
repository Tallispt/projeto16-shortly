import { userRepository } from '../repositories/user.repository.js';

export const userInfo = async (req, res) => {
    const { userId } = res.locals

    try {
        const userInfo = await userRepository.getUserInfoById(userId)

        if (!userInfo.rowCount) return res.sendStatus(404)

        const shortenedUrls = !userInfo.rows[0].id
            ? userInfo.rows.map(value => {
                return {
                    id: value.urlId,
                    shortUrl: value.shortUrl,
                    Url: value.url,
                    visitCount: value.visitCount
                }
            })
            : []

        const visitCount = shortenedUrls.reduce((a, b) => {
            return a + b.visitCount
        }, 0)

        res.status(200).send({
            id: userInfo.rows[0].id,
            name: userInfo.rows[0].name,
            visitCount,
            shortenedUrls
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}