import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Assentos from "./Assentos"


export default function Sessao({ hora, setHora, dia, setDia, data, setData, movie, setMovie, nome, setNome, CPF, setCPF, ids, setIds, nomeDoAssento, setNomeDoAssento, ingresso }) {

    const [assentos, setAssentos] = useState([])
    const { idSessao } = useParams()

    function mandarDados() {
        setIds(ids)
        setNomeDoAssento(nomeDoAssento)
        ingresso.ids = ids
        ingresso.name = nome
        ingresso.cpf = CPF
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', ingresso)
    }

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then((resposta) => {
            setAssentos(resposta.data.seats)
            setHora(resposta.data.name)
            setDia(resposta.data.day.weekday)
            setMovie(resposta.data.movie)
            setData(resposta.data.day.date)
        })

    }, [])



    return (
        <EstiloTela>
            <EstiloTitulo>
                <h1>Selecione o(s) assento(s)</h1>
            </EstiloTitulo>
            <EstiloListaDeAcentos>
                {assentos.length === 0 ? <p>carregando...</p> : assentos.map((item) => {
                    return (
                        <Assentos key={item.id} assentos={assentos} ids={ids} setIds={setIds} item={item} nomeDoAssento={nomeDoAssento} setNomeDoAssento={setNomeDoAssento} />
                    )
                })}
                <EstiloListaOpcoes>
                    <EstiloOpcoes className="selecionado" ata-identifier="seat-selected-subtitle" />
                    <p>Selecionado</p>
                </EstiloListaOpcoes>
                <EstiloListaOpcoes>
                    <EstiloOpcoes className="disponivel" data-identifier="seat-available-subtitle" />
                    <p>Dispon??vel</p>
                </EstiloListaOpcoes>
                <EstiloListaOpcoes>
                    <EstiloOpcoes className="indisponivel" data-identifier="seat-unavailable-subtitle" />
                    <p>Indispon??vel</p>
                </EstiloListaOpcoes>
            </EstiloListaDeAcentos>
            <EstiloDados>
                <h1>Nome do comprador</h1>
                <input data-identifier="buyer-name-input" onChange={(e) => {
                    setNome(e.target.value)
                }} placeholder="Digite seu nome..."></input>
                <h1>CPF do comprador</h1>
                <input data-identifier="buyer-cpf-input" onChange={(e) => {
                    setCPF(e.target.value)
                }} placeholder="Digite seu CPF (somente n??meros)..."></input>
            </EstiloDados>
            <Link to='/sucesso'>
                <EstiloBotao data-identifier="reservation-btn" onClick={mandarDados} >
                    <p>Reservar assento(s)</p>
                </EstiloBotao>
            </Link>
            <EstiloFooter>
                <EstiloContainerImgs data-identifier="movie-img-preview">
                    {assentos.length === 0 ? <p>carregando...</p> : <img src={movie.posterURL} />}
                </EstiloContainerImgs>
                <EstiloContainerTexto data-identifier="movie-and-session-infos-preview">
                    {assentos.length === 0 ? <p>carregando...</p> : <h1>{movie.title}</h1>}
                    {assentos.length === 0 ? <p>carregando...</p> : <h1>{dia} - {hora}</h1>}
                </EstiloContainerTexto>
            </EstiloFooter>
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
    justify-content: center;
    align-items: center;
    height: 110px;
    margin-top: 67px;
    > h1{
        font-size: 24px;
    }
`

const EstiloListaDeAcentos = styled.div`
    padding: 0 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100%;
`

const EstiloAssento = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background-color: ${props => props.selecionado == true ? '#0E7D71' : props.isAvailable == false ? '#FBE192' : '#C3CFD9'};    
    border-radius: 50%;
    margin: 9px  4px;
    >p{
        font-size: 11px;
    }
`

const EstiloListaOpcoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const EstiloOpcoes = styled.div`
     width: 26px;
    height: 26px;
    background-color: ${props => props.className === 'selecionado' ? '#1AAE9E' : props.className === 'disponivel' ? '#C3CFD9' : '#FBE192'};
    border-radius: 50%;
    margin: 9px  4px;
`

const EstiloDados = styled.div`
    margin: 20px;
    >h1{
        font-size: 18px;
        margin: 7px 0 3px 0;
    }
    >input{
        width: 327px;
        height: 51px;
        border: solid 1px #E8833A;
        font-size: 18px;
    }
`

const EstiloBotao = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border: none;
    > p{
        font-size: 18px;
        color: #ffffff;
    }
`

const EstiloFooter = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0;
    left:0;
    border-top: solid 1px #9EADBA;
    display: flex;
    align-items: center;
    padding: 14px 10px;
`

const EstiloContainerImgs = styled.div`
    padding: 5px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    >img{
        width: 48px;
        height: 72px;
    }
`

const EstiloContainerTexto = styled.div`
    font-size: 26px;
    color: #293845;
    margin-left: 14px;
`