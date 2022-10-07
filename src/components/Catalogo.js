import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"

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
                {filmes.length === 0 ? <p>Carregando...</p> : filmes.map((item) => { console.log(item); return <EstiloCartaz><img src={item.posterURL} /></EstiloCartaz>})}
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

const EstiloCartaz = styled.div`
    width: 145px;
    height: 209px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px lightgrey;
    > img{
        width: 129px;
        height: 193px;
    }
`