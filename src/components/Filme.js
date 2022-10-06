import styled from "styled-components"
import image1 from '../image.png'

export default function Filme() {
    return (
        <>
            <EstiloTitulo>
                <h1>Selecione o horário</h1>
            </EstiloTitulo>
            <div>
                <EstiloSessoes>
                    <p>Quinta-feira - 24/06/2021</p>
                    <EstiloContainerBotoes>
                        <EstiloBotoes>15:00</EstiloBotoes>
                        <EstiloBotoes>19:00</EstiloBotoes>
                    </EstiloContainerBotoes>
                </EstiloSessoes>
                <EstiloSessoes>
                    <p>Quinta-feira - 24/06/2021</p>
                    <EstiloContainerBotoes>
                        <EstiloBotoes>15:00</EstiloBotoes>
                        <EstiloBotoes>19:00</EstiloBotoes>
                    </EstiloContainerBotoes>
                </EstiloSessoes>
            </div>
            <EstiloFooter>
                <EstiloContainerImgs>
                    <img src={image1} />
                </EstiloContainerImgs>
                <EstiloContainerTexto>
                    <h1>Enola Holmes</h1>
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