import config from '../config';

const URL_CATEGORIAS = `${config.URL_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não deu :/');
    });
}

export default {
  getAllWithVideos,
};
