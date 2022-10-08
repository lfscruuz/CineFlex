import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sucesso({ setHora, setDia, data, setData, movie, setMovie, nome, setNome, CPF, setCPF, ids, setIds, ingresso }) {


    function formatarPedido() {
        setHora('')
        setDia('')
        setData('')
        setMovie({})
        setNome('')
        setCPF('')
        setIds([])
        ingresso = {
            ids: {},
            name: '',
            cpf: ''
        }
    }
    const cpfFormatado = CPF.split('')
    console.log(cpfFormatado)
    return (
        <EstiloTela>
            <EstiloTitulo>
                <h1>Pedido feito</h1>
                <h1>com sucesso!</h1>
            </EstiloTitulo>
            <EstiloDados>
                <h1>Filme e Sessão</h1>
                <p>{movie.title}</p>
                <p>{data}</p>
            </EstiloDados>
            <EstiloDados>
                <h1>Ingressos</h1>
                {ids.map((i) => {
                    return (
                        <p>Assento {i}</p>
                    )

                })}
            </EstiloDados>
            <EstiloDados>
                <h1>Comprador</h1>
                <p>Nome: {nome}</p>
                <p>
                    CPF:
                    {cpfFormatado[0]}{cpfFormatado[1]}{cpfFormatado[2]}.{cpfFormatado[3]}{cpfFormatado[4]}{cpfFormatado[5]}.{cpfFormatado[6]}{cpfFormatado[7]}{cpfFormatado[8]}-{cpfFormatado[9]}{cpfFormatado[10]}
                </p>
            </EstiloDados>
            <Link to='/'>
                <EstiloBotao>
                    <p>Voltar pra Home</p>
                </EstiloBotao>
            </Link>
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