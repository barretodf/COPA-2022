import app from './src/app.js'

const PORT = 3000

    //Escutar o servidor na porta 3000
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta http://localhost:${PORT}`)
    })
