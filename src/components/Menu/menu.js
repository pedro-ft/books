import styled from 'styled-components';

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MEUS LIVROS'];
const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const MenuOpcao = styled.ul`
   display: flex;
`

function Menu() {
    return(
        <MenuOpcao>
            {opcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </MenuOpcao>
    )
}

export default Menu;