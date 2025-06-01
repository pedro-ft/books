import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`
const LogoImg = styled.img`
  height: 150px;
`

function Logo() {
    return(
        <LogoContainer>
          <LogoImg src={logo} alt='Logo' />
        </LogoContainer>
    )
}

export default Logo;