import {DBUSER, DBPASS, DBADDR} from '$env/static/private'
import {default as sql} from "mssql"
import { json } from "@sveltejs/kit"

const config = {
    user: DBUSER,
    password: DBPASS,
    server: DBADDR,
    database: "AquaStats",
    options: {
        trustServerCertificate: true
    }
}


export async function POST({request}) {

    let db = await sql.connect(config)
    let res = await db.request()
        .input('json', sql.VarChar(4000), value)
        .query('SELECT * FROM dbo.users')

    /* stuff */
    return json(res)
}

export async function GET(){
    
    let db = await sql.connect(config)
    let res = await db.request()
        .query('SELECT * FROM dbo.users')
    
    return json(res)
}