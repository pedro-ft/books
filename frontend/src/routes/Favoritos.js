import Pesquisa from '../components/Pesquisa/pesquisa'
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #472779 35%, #563d7e);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
