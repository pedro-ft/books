import Input from "../Input/input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 70px 0px;
    min-height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Titulo = styled.h2`
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 15px;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 35px;
`

const InputWrapper = styled.div`
  width: 100%;
  max-width: 550px; 
  margin-bottom: 35px;
`;

const ResultadosContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 550px; 
`;

const ResultadoItem = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border: 1px solid transparent;

  img {
    width: 70px;
    height: auto;
    border-radius: 4px;
    margin-right: 20px;
  }
p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    flex-grow: 1;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border-color: #E0E0E0; 
  }
`;

const MensagemSemResultados = styled.p`
  font-size: 16px;
  color: #FFFFFFB3;
  margin-top: 20px;
`;


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [textoDigitadoAnteriormente, setTextoDigitadoAnteriormente] = useState("");

    const handlePesquisa = (evento) => {
    const textoDigitado = evento.target.value.toLowerCase();
    setTextoDigitadoAnteriormente(evento.target.value);

    if (textoDigitado.trim() === "") {
      setLivrosPesquisados([]);
      return;
    }
    const resultadoPesquisa = livros.filter(livro =>
      livro.nome.toLowerCase().includes(textoDigitado)
    );
    setLivrosPesquisados(resultadoPesquisa);
  };
    
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <InputWrapper>
            <Input 
                placeholder="Escreva sua próxima leitura"
                value={textoDigitadoAnteriormente}
                onChange={handlePesquisa}
            />
            </InputWrapper>

           
        {livrosPesquisados.length > 0 && (
            <ResultadosContainer>
            {livrosPesquisados.map(livro => (
                <ResultadoItem key={livro.id || livro.nome}>
                <img src={livro.src} alt={`Capa do livro ${livro.nome}`} />
                <p>{livro.nome}</p>
                </ResultadoItem>
            ))}
            </ResultadosContainer>
        )}

        {textoDigitadoAnteriormente && livrosPesquisados.length === 0 && (
            <MensagemSemResultados>Nenhum livro encontrado para "{textoDigitadoAnteriormente}".</MensagemSemResultados>
        )}
        </PesquisaContainer>
  );
}

export default Pesquisa