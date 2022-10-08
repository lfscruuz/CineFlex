import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import image1 from '../image.png'

export default function Filme() {
    const [horarios, setHorarios] = useState([])
    const [sessao, setSessao] = useState({})
    const {idFilme} = useParams()


    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        requisicao.then((resposta) => {
            setSessao(resposta.data)
            setHorarios(resposta.data.days)
        })

    }, [])

    return (
        <>
            <EstiloTitulo>
                <h1>Selecione o horário</h1>
            </EstiloTitulo>
            <div>
                {horarios.length === 0 ? <p>carregando...</p> : horarios.map((item) => {
                    return (
                        <EstiloSessoes data-identifier="session-date">
                            <p>{item.date}</p>
                            <EstiloContainerBotoes >
                                {item.showtimes.map((st) => {
                                    console.log(st)
                                    return (
                                        <Link to={`/assentos/${st.id}`}>
                                            <EstiloBotoes data-identifier="hour-minute-btn">
                                                {st.name}
                                            </EstiloBotoes>
                                        </Link>
                                    )
                                })}
                            </EstiloContainerBotoes>
                        </EstiloSessoes>
                    )
                })}
            </div>
            <EstiloFooter>
                <EstiloContainerImgs data-identifier="movie-img-preview">
                    {sessao.length === 0 ? <p>carregando...</p> : <img src={sessao.posterURL} />}
                </EstiloContainerImgs>
                <EstiloContainerTexto data-identifier="movie-and-session-infos-preview">
                    {sessao.length === 0 ? <p>carregando...</p> : <h1>{sessao.title}</h1>}
                </EstiloContainerTexto>
            </EstiloFooter>
        </>
    )
}
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
const EstiloCorpo = styled.div`
    margin-bottom: 117px;
`
const EstiloSessoes = styled.div`
    height: 100px;
    margin: 0 24px;
    >p{
        font-size:20px;
        color: #293845;
        margin: 22px 0;
    }
`
const EstiloContainerBotoes = styled.div`
    display: flex
`
const EstiloBotoes = styled.button`
    width: 83px;
    height:43px;
    background-color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 18px;
    margin-right: 8px;
    border: none;
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