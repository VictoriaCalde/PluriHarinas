const express = require('express');
const cors = require('cors');
const { conectarSQL } = require('./db');
const clientesRouter = require('./routes/clientes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', clientesRouter);

conectarSQL().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
});
