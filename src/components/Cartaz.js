import { useParams } from "react-router-dom"
import styled from "styled-components"


export default function Cartaz({item}) {
    return (
        <EstiloCartaz>
            <img src={item.posterURL} />
        </EstiloCartaz>
    )
}

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