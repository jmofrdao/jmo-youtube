const client = require("./client")


async function dropTables () {
    try {
        await client.query(`
        
        `)
    } catch (error) {
        throw error
    }
}

async function createTables() {
    try {
        await client.query(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
        )
        `)
    } catch (error) {
        throw error
    }
}

async function createInitialUsers () {
    try {
        const usersToCreate = [
            {username: "albert", password: "bertie99", email: 'bertie@gmail.com'},
            {username: "sandra", password: "sandra1234", email: "sandra12@yahoo.com"},
            {username: "scar", password: "scarscar21", email: "scarscar@gmail.com"},
        ];
        const users = await Promise.all(usersToCreate.map(createUser))
    }
}


async function rebuildDB () {
    try {
        await dropTables();
        await createTables();
    } catch (error) {
        throw error
    }
}

module.exports = {
    rebuildDB,
    dropTables,
    createTables
}