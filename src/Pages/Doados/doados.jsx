import S from "./doados.module.scss"
import Protagonista from "../../assets/livro-protagonista.png"
import axios from 'axios'
import {useState, useEffect} from 'react'


export default function doados() {
   
   const [livros, setlivros] = useState([])

   const getlivros = async () => {
        const response = await axios.get("https://projeto-api-bzml.onrender.com/livros")
        setlivros(response.data)
   } 

   useEffect(()=> {
    getlivros()
   },[livros])

   
   
    return (
        <section className={S.doados}>
            <h2>Livros Doados</h2>

            <section className={S.livrosDoados}>

                <article>
                    <a href="#"><img src={Protagonista} alt="Imagem do livro; O Protagonista" /></a>

                    <h3>protagonista</h3>
                    <h4>Susanne Andrade</h4>
                    <h4>Ficção</h4>
                   
                </article>
                {livros.map((item)=>(
                      <article key={item.id}>
                        <img src={item.imagem_url} alt="" />
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                      </article>
                 ))}


            </section>

        </section>
    )
}