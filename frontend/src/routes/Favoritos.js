import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../services/favoritos';
import { Titulo } from '../components/Titulo/titulo';

const AppContainer = styled.div`
    width: 100%;
    min-height: 83.7vh;
    background-image: linear-gradient(90deg, #472779 35%, #563d7e);
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

async function deletarFavorito(id) {
  await deleteFavorito(id)
  await fetchFavoritos()
  alert(`Livro de id: ${id} deletado`)
  
}

  return (
    <AppContainer>
        <Titulo cor="#fff" tamanhoFonte="32px" text-align="center">Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
           favoritos.length !== 0 ? favoritos.map(favorito => (
            <Resultado onClick={() => deletarFavorito(favorito.id)}>
              <p>{favorito.nome}</p>
            </Resultado>
           )) : null
          }
        </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;
