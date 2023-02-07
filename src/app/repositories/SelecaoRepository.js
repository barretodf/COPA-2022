import conexao from "../database/conexao"

class SelecaoRepository {
    //Crud

    //Inserir novo elemento na tabéla
    create() {}

    //Persistência de dados
    //Buscar tudo, select *
    //Usando promises
    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return new Promise ((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if(error) return reject('Não foi possível localizar')
                
                //Fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row) 
            })
        }) 
    }

    //Buscar por id
    findById() {}

    //Atualizar
    update() {}

    //Deletar
    delete() {}
}

export default new SelecaoRepository()