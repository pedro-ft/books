import styled from 'styled-components';

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MEUS LIVROS'];
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
                    <OpcaoItem><p>{texto}</p></OpcaoItem>
                ))}
            </MenuOpcaoContainer>
        </nav>
    )
}

export default Menu;