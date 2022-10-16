import pg from '../database/db.js';

async function getUrlByColumn(columnName, value) {
    return await pg.query(`SELECT * FROM urls WHERE "${columnName}"=$1;`, [value])
}

async function insertUrl(userId, url, shortUrl) {
    await pg.query(`INSERT INTO urls("userId", url, "shortUrl") VALUES($1, $2, $3);`, [
        userId,
        url,
        shortUrl
    ])
}

async function deleteUrl(id) {
    await pg.query(`DELETE FROM urls WHERE id=$1;`, [id])
}

async function getVisitsByColumn(columnName, value) {
    return await pg.query(`SELECT * FROM visits WHERE "${columnName}"=$1;`, [value])
}

async function insertVisit(urlId) {
    await pg.query(`INSERT INTO visits("urlId") VALUES(${urlId});`)
}

async function updateVisit(id, visitNumber) {
    await pg.query(`UPDATE visits SET "visitNumber"=${visitNumber} WHERE id=${id};`)
}


export const urlRepository = {
    getUrlByColumn,
    insertUrl,
    deleteUrl,
    getVisitsByColumn,
    insertVisit,
    updateVisit
}