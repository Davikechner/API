import express from "express";
import {
    buscarUfs,
    buscarUfsPorId,
    buscarUfsPorNome,
    buscarUfsPorSigla
} from "./Servico/servico.js";

const app = express();
const PORT = 8080;

app.get("/ufs", (req, res) => {
    const nomeUf = req.query.nome;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: "Nenhuma UF encontrada!" });
    }
});

// Rota para buscar por ID
app.get("/ufs/id/:iduf", (req, res) => {
    const id = parseInt(req.params.iduf);

    if (isNaN(id)) {
        return res.status(400).json({ erro: "ID inválido. O ID deve ser um número." });
    }

    const uf = buscarUfsPorId(id);

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ erro: `Nenhuma UF encontrada com o ID ${id}` });
    }
});

// Rota para buscar por sigla (UF)
app.get("/ufs/sigla/:sigla", (req, res) => {
    const sigla = req.params.sigla;

    const resultado = buscarUfsPorSigla(sigla);

    if (resultado) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: `Nenhuma UF encontrada com a sigla ${sigla.toUpperCase()}` });
    }
});

// Inicializando o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT} - ${new Date().toLocaleString()}`);
});
