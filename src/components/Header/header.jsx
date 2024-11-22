import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/inicio"
import Doados from "../../Pages/Doados/doados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar"
import s from "./header.module.scss"

export default function header() {
    return (
        <BrowserRouter>

            <header className={s.header}>
                <section className={s.logoHeader}>
                    <img src={logo} alt="Imagem de um livro" />
                    <h1>Livros Vai na Web</h1>
                </section>

                <nav className={s.navHeader}>
                    <ul>

                        <li><Link className={s.link} to="/">Inicio</Link></li>
                        <li><Link className={s.link} to="Doados">Livros Doados</Link></li>
                        <li><Link className={s.link} to= "QueroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>

                <div className={s.barraDeBusca}>
                    <input type="text" />
                    <button>
                    <img src={search} alt="Imagem de uma lupa de busca" />
                    </button>
                </div>


            </header>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/doados" element={<Doados/>}/>
                <Route path="/QueroDoar" element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>


    )

}