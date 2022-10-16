import pg from '../database/db.js';

async function getUserByColumn(columnName, value) {
    return await pg.query(`SELECT * FROM users WHERE "${columnName}"=$1`, [value])
}

async function insertUser(name, email, password) {
    await pg.query("INSERT INTO users(name, email, password) VALUES($1, $2, $3)", [
        name,
        email,
        password
    ])
}

async function getUserInfoById(userId) {
    return await pg.query(`
        SELECT users.id, users.name, urls.id as "urlId", urls."shortUrl", urls.url, COALESCE(visits."visitNumber",0) as "visitCount"
        FROM visits
        FULL OUTER JOIN urls ON urls.id=visits."urlId"
        FULL OUTER JOIN users ON users.id=urls."userId"
        WHERE users.id=$1
        `, [userId])
}

export const userRepository = {
    getUserByColumn,
    insertUser,
    getUserInfoById
}