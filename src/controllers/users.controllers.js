import pg from '../database/db.js';

export const userInfo = async (req, res) => {
    const { userId } = res.locals

    try {
        const table = await pg.query(`
        SELECT users.id, users.name, urls.id as "urlId", urls."shortUrl", urls.url, COALESCE(visits."visitNumber",0) as "visitCount"
        FROM visits
        FULL OUTER JOIN urls ON urls.id=visits."urlId"
        FULL OUTER JOIN users ON users.id=urls."userId"
        WHERE users.id=$1
        `, [userId])

        if (!table.rowCount) return res.sendStatus(404)

        const shortenedUrls = !table.rows[0].id
            ? table.rows.map(value => {
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
            id: table.rows[0].id,
            name: table.rows[0].name,
            visitCount,
            shortenedUrls
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}