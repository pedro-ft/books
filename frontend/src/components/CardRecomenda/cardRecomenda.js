import styled from "styled-components"
import { Titulo } from "../Titulo/titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    gap: 25px;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 90%;  
    box-sizing: border-box;
`
const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    border-radius: 4px;
    margin-top: 15px;
    transition: background-color 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: #D48C00;
    }
`

const Descricao = styled.p`
    font-size: 14px;
    color: #4F4F4F;
    line-height: 1.5; 
    margin: 8px 0 0 0; 
`

const Subtitulo = styled.h4`
    color:rgba(0, 0, 0);
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 0 0;
`

const ImgLivro = styled.img`
    width: 150px;
    height: auto;
    border-radius: 4px;
`

function CardRecomenda ({titulo, subtitulo, descricao, img}) {
    return(
        <Card>
            <TextContainer>
                 <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                 <Subtitulo>{subtitulo}</Subtitulo>
                 <Descricao>{descricao}</Descricao>
            </TextContainer>
            <ImageContainer>
                <ImgLivro src={img} />
                <Botao>Saiba mais</Botao>
            </ImageContainer>
        </Card>
    )
}

export default CardRecomenda;