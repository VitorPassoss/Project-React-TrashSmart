import React from 'react'
import "./Hobbie.css"
import {Link} from "react-router-dom"

const Hobbie = () => {
  
  return (
    <div className='index'>
        <div className='index-size'>
                <Link className='block' to="/Cadastro">
                    <button>Cadastrar Produtos</button>
                </Link>
                <Link className='block2' to="/residuos">
                        <button>Ver Residuos</button>
                </Link>
                
        </div>
      
        
    </div>
  )
}

export default Hobbie