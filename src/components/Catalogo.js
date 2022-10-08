import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Cartaz from "./Cartaz"


export default function Catalogo() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const requisicao = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        requisicao.then((resposta) => {
            setFilmes(resposta.data)
        })

    }, [])

    return (
        <>
            <EstiloTitulo>
                <h1>Selecione o filme</h1>
            </EstiloTitulo>
            <EstiloCatalogo>
                {filmes.length === 0 ? <p>Carregando...</p> : filmes.map((item) => {
                    return (
                        <Link to={`/sessoes/${item.id}`}>
                            <Cartaz item={item}/>
                        </Link>
                    )
                })}
            </EstiloCatalogo>
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

const EstiloCatalogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`