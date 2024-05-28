const express = require('express');
const app = express();
const port = 3000;

// Servir o arquivo HTML
app.use('/documentos', serveIndex(__dirname));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
