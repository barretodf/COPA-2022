import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'dbcopauser',
    password: 'root',
    database: 'dbcopa'
})


conexao.connect()
export default conexao
