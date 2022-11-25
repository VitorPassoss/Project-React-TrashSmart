import React from 'react'
import "../components/Trasher.css"
import {Styledblock} from "../styles"



const Trasher = ({nome,peso}) => {

  return (
    <div>
        <div className='center'>
            <div className='center-size'>
                
                <Styledblock>
                        <div>
                        <h1><span>Nome: </span>{nome}</h1>
                     
                        <h1 ><span>Peso Bruto: </span> {peso} g</h1>
                       
                        
                        <h1 ><span>Peso Liquido: </span> {peso} g</h1>
                        
                      
                        <h1 ><span>Peso Embalagem: </span>{peso} g</h1>
                        
                        
                        <h1 ><span>Material: </span>{peso} g</h1>
                        </div>
                </Styledblock>
            </div>
        </div>
    </div>
  )
}

export default Trasher