import Catalogo from "./Catalogo";
import Filme from "./Filme";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";
import Header from "./Header";
import GlobalStyle from "../GlobalStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [dia, setDia] = useState('')
    const [movie, setMovie] = useState({})
    const [nome, setNome] = useState('')
    const [CPF, setCPF] = useState('')
    const [ids, setIds] = useState([])
    const [nomeDoAssento, setNomeDoAssento] = useState([])
    const ingresso = {
        ids: {},
        name: '',
        cpf: ''
    }

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Catalogo />} />
                <Route path="/sessoes/:idFilme" element={<Filme />} />
                <Route path="/assentos/:idSessao" element={
                    <Sessao
                        hora={hora} setHora={setHora}
                        dia={dia} setDia={setDia}
                        data={data} setData={setData}
                        movie={movie} setMovie={setMovie}
                        nome={nome} setNome={setNome}
                        CPF={CPF} setCPF={setCPF}
                        ids={ids} setIds={setIds}
                        nomeDoAssento={nomeDoAssento} setNomeDoAssento={setNomeDoAssento}
                        ingresso={ingresso}
                    />
                } />
                <Route path="/sucesso" element={
                    <Sucesso
                    hora={hora} setHora={setHora} 
                    dia={dia} setDia={setDia} 
                    data={data} setData={setData} 
                    movie={movie} setMovie={setMovie}
                    nome={nome} setNome={setNome}
                    CPF={CPF} setCPF={setCPF}
                    ids={ids} setIds={setIds}
                    nomeDoAssento={nomeDoAssento}
                    ingresso={ingresso} 
                    />
                } />
            </Routes>
        </BrowserRouter>
    )
}