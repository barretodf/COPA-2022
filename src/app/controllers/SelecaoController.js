//import { query } from "express"
import conexao from "../database/conexao.js"

class SelecaoController {

    //Vai listar tudo, select *
    index(req, res) {
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql,(error, result)=>{
          if(error) {
            res.status(404).json({'error': error})
          }else {
            res.status(200).json(result)
          }
        })
      }
      
    //Vai listar tudo por id
    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (error, result) => {
          const linha = result[0]  
          if(error) {
            res.status(404).json({'erro': error})
          } else {
            res.status(200).json(linha)
          }
        })
      }

    //Vai criar dados
    store(req,res) {
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ?;"
        conexao.query(sql, selecao, (error, result) => {
          if(error) {
            res.status(404).json({'erro': error})
          } else {
            res.status(201).json(result)
          }
        })
      }

    //Atualiza dados
    update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        conexao.query(sql, [selecao, id], (error, result) => {
          if(error) {
            res.status(404).json({'erro': error})
          } else {
            res.status(200).json(result)
          }
        })
      }

    //Deleta dados
    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (error, result) => {
          if(error) {
            res.status(404).json({'erro': error})
          } else {
            res.status(200).json(result)
          }
        })
      }
}



// Padrão Singleton
export default new SelecaoController()