import styled from 'styled-components';
import {Link} from 'react-router-dom'

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];
const OpcaoItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 5px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #472779;
  }
`
const MenuOpcaoContainer = styled.ul`
   display: flex;
   align-items: center;
   padding: 0;
   margin: 0;
   gap: 25px;
`

function Menu() {
    return(
        <nav>
            <MenuOpcaoContainer>
                {opcoes.map((texto) => (
                    <Link to={`/${texto.toLowerCase()}`}><OpcaoItem><p>{texto}</p></OpcaoItem></Link>
                ))}
            </MenuOpcaoContainer>
        </nav>
    )
}

export default Menu;