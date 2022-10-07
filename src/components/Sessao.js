import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import image1 from '../image.png'

// background-color: ${props.isAvailable == 'selecionado' ? '#1AAE9E' : props.isAvailable == 'dispnível' ? '#C3CFD9' : '#FBE192'};

export default function Sessao() {

    const [assentos, setAssentos] = useState([])

    useEffect(() => {
        const requisicao = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/1/seats')

        requisicao.then((resposta) => {
            setAssentos(resposta.data.seats)
        })

    }, [])

    return (
        <EstiloTela>
            <EstiloTitulo>
                <h1>Selecione o(s) assento(s)</h1>
            </EstiloTitulo>
            <EstiloListaDeAcentos>
                {assentos.length === 0 ? <p>carregando...</p> : (console.log(assentos), assentos.map((item) => {
                    return (
                        <EstiloAssento key={item.id} isAvailable={item.isAvailable}>
                            <p>{item.name}</p>
                        </EstiloAssento>
                    )
                }))}

                <EstiloListaOpcoes>
                    <EstiloOpcoes />
                    <p>Selecionado</p>
                </EstiloListaOpcoes>
                <EstiloListaOpcoes>
                    <EstiloOpcoes />
                    <p>Disponível</p>
                </EstiloListaOpcoes>
                <EstiloListaOpcoes>
                    <EstiloOpcoes />
                    <p>Indisponível</p>
                </EstiloListaOpcoes>
            </EstiloListaDeAcentos>
            <EstiloDados>
                <h1>Nome do comprador</h1>
                <input placeholder="Digite seu nome..."></input>
                <h1>CPF do comprador</h1>
                <input placeholder="Digite seu CPF..."></input>
            </EstiloDados>
            <EstiloBotao>
                <p>Reservar assento(s)</p>
            </EstiloBotao>
            <EstiloFooter>
                <EstiloContainerImgs>
                    <img src={image1} />
                </EstiloContainerImgs>
                <EstiloContainerTexto>
                    <h1>Enola Holmes</h1>
                    <h1>Quinta-Feira - 15:00</h1>
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
    background-color: #C3CFD9;
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
    background-color: #C3CFD9;
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
        border: solid 1px lightgray;
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