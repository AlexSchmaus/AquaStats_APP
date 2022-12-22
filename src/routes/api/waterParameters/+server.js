import {DBUSER, DBPASS, DBADDR} from '$env/static/private'
import {default as sql} from mssql

export function POST({request}) {

    const config = {
        user: DBUSER,
        password: DBPASS,
        server: DBADDR,
        database: "AquaStats"
    }

    /* stuff */
    return new Response()
}