import pg from '../database/db.js';

async function getRanking() {
    return await pg.query(`
        SELECT users.id, users.name, 
        SUM(COALESCE(visits."visitNumber", 0)) as "visitCount",
        COUNT(urls.id) as "linksCount"
        FROM visits
        FULL OUTER JOIN urls ON urls.id=visits."urlId"
        FULL OUTER JOIN users ON users.id=urls."userId"
        GROUP BY users.id
        ORDER BY "visitCount" DESC
        LIMIT 10
        `)
}

export const rankingRepository = {
    getRanking
}