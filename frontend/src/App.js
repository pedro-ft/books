import Header from './components/Header/header';
import Pesquisa from './components/Pesquisa/pesquisa'
import NovosLivros from './components/NovosLivros/novosLivros';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #472779 35%, #563d7e);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <NovosLivros />
    </AppContainer>
  );
}

export default App;
