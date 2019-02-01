require("dotenv").config();

const express = require("espress");
const server = express();
const { PORT } = process.env;
server.use();

server.listen(PORT, () => {
    console.log(`O servidor está de pé em: http://localhost:${PORT}`);
    console.log("Para encerrar: ctrl + c");
});