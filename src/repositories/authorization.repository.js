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

async function getAuthTokensByColumn(columnName, value) {
    return pg.query(`SELECT * FROM "authTokens" WHERE "${columnName}"=$1`, [value])
}

async function insertAuthToken(userId, token) {
    await pg.query(`
            INSERT INTO "authTokens"("userId", token) VALUES($1, $2);
        `, [
        userId,
        token
    ])
}

async function updateToken(userId, token) {
    await pg.query(`UPDATE "authTokens" SET token=$1, "createdAt"=DEFAULT WHERE "userId"=$2`, [
        token,
        userId
    ])
}

export const authRepository = {
    getUserByColumn,
    insertUser,
    getAuthTokensByColumn,
    insertAuthToken,
    updateToken
}