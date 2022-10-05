import Catalogo from "./Catalogo";
import Filme from "./Filme";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";
import Header from "./Header";
import GlobalStyle from "../GlobalStyles";


export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Catalogo />
            {/* <Filme />
            <Sessao />
            <Sucesso /> */}
        </>
    )
}