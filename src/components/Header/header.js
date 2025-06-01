import Logo from '../Logo';
import Menu from '../Menu/menu';
import Icones from '../Icones/icones';
import styled from 'styled-components';

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center; /* Alinha verticalmente os itens no centro */
  justify-content: space-between; 
  padding: 0 3%;
  height: 10%;
  border-bottom: 1px solid #f0f0f0;
`

function Header () {
    return(
        <HeaderContainer>
            <LeftSection>
                <Logo/>
                <Menu/>
            </LeftSection>
            <Icones/>
        </HeaderContainer>
    )
}

export default Header