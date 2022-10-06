import styled from "styled-components"

export default function Sucesso() {
    return (
        <EstiloTela>
            <EstiloTitulo>
                <h1>Pedido feito</h1>
                <h1>com sucesso!</h1>
            </EstiloTitulo>
            <EstiloDados>
                <h1>Filme e Sessão</h1>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </EstiloDados>
            <EstiloDados>
                <h1>Ingressos</h1>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </EstiloDados>
            <EstiloDados>
                <h1>Comprador</h1>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.189-10</p>
            </EstiloDados>
            <EstiloBotao>
                <p>Voltar pra Home</p>
            </EstiloBotao>
        </EstiloTela>
    )
}

const EstiloTela = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const EstiloTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 110px;
    margin-top: 67px;
    > h1{
        font-size: 24px;
        font-weight: 700;
        color: #247A6B;
    }
`

const EstiloDados = styled.div`
    width: 85%;
    margin-bottom: 20px;
    >h1{
        font-size: 24px;
        font-weight: 700;
        margin: 10px 0;
    }
    >p{
        font-size: 22px;
        font-weight: 400;
        margin: 5px 0;
    }
`

const EstiloBotao = styled.button`
    margin: 62px 0;
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border: none;
    > p{
        font-size: 18px;
        color: #ffffff;
    }
`