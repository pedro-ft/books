import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];
const IconeItem = styled.li`
    img {
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: block;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`
const IconesConjunto = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 25px;
`

function Icones () {
    return(
        <IconesConjunto>
          {icones.map((icone) => (
            <IconeItem><img src={icone} alt='icone'></img></IconeItem>
          ))}
        </IconesConjunto>
    )
}

export default Icones;