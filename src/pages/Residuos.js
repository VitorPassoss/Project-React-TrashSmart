import React from 'react'
import Trasher from '../components/Trasher'
import { useState, useEffect } from "react";
import axios from 'axios';
import {Title} from "../styles"





const Residuos = () => {
   
    const [products, setProducts] = useState([]);
   

    useEffect(() => {
        axios.get(`http://192.168.1.109:3000`)
        .then(res => {
           setProducts(res.data.listaDados);
           console.log(res.data.listaDados)
           
        })
      },[]);
      
   
  return (
    <div>
           <ul>
            <Title>Lixeira Inteligente</Title>
                {
                  products.map((product)=>(
                    <li key={product.idresiduos}>
                       <Trasher nome={product.nome} peso={product.peso}></Trasher>
                    </li>
                  ))
                }
            </ul>
            
    </div>
  
  )
}

export default Residuos