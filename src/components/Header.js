import styled from "styled-components"

export default function Header(){
    return(
        <>
            <EstiloHeader>
                <h1>CINEFLEX</h1>
            </EstiloHeader>
        </>
    )
}

const EstiloHeader = styled.div`
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    > h1{
        font-size: 34px;
        color: #E8833A;
    }
`