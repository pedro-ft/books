import { livros } from "../Pesquisa/dadosPesquisa";
import { Titulo } from "../Titulo/titulo";
import CardRecomenda from "../CardRecomenda/cardRecomenda";
import imagemLivro from "../../imagens/livro2.jpg"
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const LivroImg = styled.img`
  height: 400px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

function NovosLivros (){
    return(
        <UltimosLancamentosContainer>
            <Titulo cor="#000" tamanhoFonte="36px">NOVOS LIVROS</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <LivroImg key={livro.id} src={livro.src} alt={livro.alt || `Capa do livro`} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Jogos Vorazes"
                descricao="Em um futuro distópico, jovens lutam por suas vidas em um evento televisionado."
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}


export default NovosLivros
