import styled from "styled-components"
import image1 from '../image.png'

export default function Catalogo() {
    return (
        <>
            <EstiloTitulo>
                <h1>Selecione o filme</h1>
            </EstiloTitulo>
            <EstiloCatalogo>
                <EstiloCartaz>
                    <img src={image1}/>
                </EstiloCartaz>
                <EstiloCartaz>
                    <img src={image1}/>
                </EstiloCartaz>
                <EstiloCartaz>
                    <img src={image1}/>
                </EstiloCartaz>
                <EstiloCartaz>
                    <img src={image1}/>
                </EstiloCartaz>
                <EstiloCartaz>
                    <img src={image1}/>
                </EstiloCartaz>
                <EstiloCartaz>
                    <img src={image1}/>
                </EstiloCartaz>
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