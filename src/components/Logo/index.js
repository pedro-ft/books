import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
`
const LogoImg = styled.img`
  margin-right: 10px;
`

function Logo() {
    return(
        <LogoContainer>
          <LogoImg src={logo} alt='Logo' />
        </LogoContainer>
    )
}

export default Logo;