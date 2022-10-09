import { useState } from "react"
import styled from "styled-components"

export default function Assentos({ assentos, item, ids, setIds, nomeDoAssento, setNomeDoAssento }) {

    const [selecionado, setSelecionado] = useState(false)
    const novoIDS = []
    
    function selecionar() {
        if (!item.isAvailable){
            alert('Assento não disponível')
        }else{
            if(selecionado){
                setSelecionado(false)
                ids.pop(Number(item.id))
                nomeDoAssento.pop(Number(item.name))

            }else{
                setSelecionado(true)
                ids.push(Number(item.id))
                nomeDoAssento.push(Number(item.name))

            }
        }
        
    }


    return (
        <EstiloAssento data-identifier="seat" onClick={selecionar} isAvailable={item.isAvailable} selecionado={selecionado}>
            <p>{item.name}</p>
        </EstiloAssento>
    )

};

const EstiloAssento = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background-color: ${props => props.selecionado == true ? '#1AAE9E' : props.isAvailable == false ? '#FBE192' : '#C3CFD9'};    
    border-radius: 50%;
    margin: 9px  4px;
    >p{
        font-size: 11px;
    }
`