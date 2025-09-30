import colecaoUf from "../Dados/dados.js";

export const buscarUfs = () => colecaoUf;

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf =>
        uf.nome.toLowerCase().includes(nomeUf.toLowerCase())
    );
};

export const buscarUfsPorId = (id) => {
    const idUf = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUf);
};

export const buscarUfsPorSigla = (sigla) => {
    return colecaoUf.find(uf => uf.uf.toLowerCase() === sigla.toLowerCase());
};
