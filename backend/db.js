const sql = require('mssql');

const config = {
    user: "LAPTOP-1P50TQ8M\\Usuario",
    password: " ",
    server: "LAPTOP-1P50TQ8M",
    database: "PluriHarinasWeb",
    options: {
      trustServerCertificate: true,
      trustedConnection: true,
      encrypt: false,
    },
  };
  

async function conectarSQL() {
    try {
        await sql.connect(config);
        console.log('Conectado a SQL Server');
    } catch (err) {
        console.error('Error al conectar con SQL Server', err);
    }
}

module.exports = { conectarSQL, sql };
