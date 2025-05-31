import { livros } from "../Pesquisa/dadosPesquisa";
import { Titulo } from "../Titulo/titulo";
import CardRecomenda from "../CardRecomenda/cardRecomenda";
import imagemLivro from "../../imagens/livro2.jpg"
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function NovosLivros (){
    return(
        <UltimosLancamentosContainer>
            <Titulo cor="#000" tamanhoFonte="36px">NOVOS LIVROS</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt="Livro"/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Jogos Vorazes"
                descricao="Em um futuro distópico jovens lutam pelas suas vidas"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}


export default NovosLivros
