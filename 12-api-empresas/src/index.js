const express = require('express');
const app = express();
const PORT = 3000;

const DBConnect = require('./database/connection');
DBConnect();

app.use(express.json());

// Remova a importação do módulo de autenticação
// const { checkToken } = require('./authMiddleware');

// Remova a rota pública que não requer autenticação
// const autenticacaoRoutes = require('./routes/autenticacao.routes');
// app.use(autenticacaoRoutes);

// Remova o middleware de autenticação das rotas protegidas
// const routes = require('./routes/routes');
// app.use(checkToken, routes);

// Use diretamente as rotas protegidas
const routes = require('./routes/routes');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
