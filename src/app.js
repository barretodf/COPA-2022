import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

//Indicar para o express ler o body com json
app.use(express.json())

//Todas
app.get('/selecoes',SelecaoController.index)

app.get('/selecoes/:id', SelecaoController.show)

//Rota para criar de postagem
app.post('/selecoes', SelecaoController.store)

//Rota para atualizar por id
app.put('/selecoes/:id', SelecaoController.update)

//Rota para apagar po id
app.delete('/selecoes/:id', SelecaoController.delete)

export default app
