import pg from '../database/db.js';

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
    getAuthTokensByColumn,
    insertAuthToken,
    updateToken
}