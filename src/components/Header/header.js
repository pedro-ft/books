import Logo from '../Logo';
import Menu from '../Menu/menu';
import Icones from '../Icones/icones';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    height: 15%;
    justify-content: center;
`

function Header () {
    return(
        <HeaderContainer>
            <Logo/>
            <Menu/>
            <Icones/>
        </HeaderContainer>
    )
}

export default Header