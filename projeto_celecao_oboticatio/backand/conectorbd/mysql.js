const mysql = require('mysql')
require('dotenv').config()

const HOST = process.env.BD_HOST || 'localhost';
const USER = process.env.BD_USER || 'root';
const PASSWORD = process.env.BD_PASSWORD || '270883';
const PORT = Number( process.env.BD_PORT || 3306 );
const DATABASE = process.env.BD_DATABASE || 'oboticario';
const TIMEZONE = process.env.TIMEZONE || 'utc';
const CHARSET = process.env.CHARSET || 'utf8';

console.log(USER,PASSWORD)

const createConnection = () => {
    return mysql.createConnection({
        host:HOST,
        user:USER,
        password:PASSWORD,
        port:PORT,
        database:DATABASE,
        timezone:TIMEZONE,
        charset:CHARSET,
})
}


exports.querySync = (query, params = []) =>
    new Promise((res,rej) => {
        const connection = createConnection();

        const Onconect = (error) => {
            if(error){
                console.log('Ocorreu um Error', error);
                return rej(error)
            }

            connection.query(query,params, (error, result) => {
                connection.end()
                if(error){
                    console.log('Ocorreu um Error', error);
                    return rej(error)
                }
                res(result)
            })
        }

        connection.connect(Onconect)
    })
