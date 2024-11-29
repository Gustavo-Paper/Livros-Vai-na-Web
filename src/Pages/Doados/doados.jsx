import S from "./doados.module.scss"
import Protagonista from "../../assets/livro-protagonista.png"


export default function doados() {
    return (
        <section className={S.doados}>
            <h2>Livros Doados</h2>

            <section className={S.livrosDoados}>

                <article>
                    <a href="#"><img src={Protagonista} alt="Imagem do livro O Protagonista" /></a>

                    <h4>protagonista</h4>
                    <h4>Susanne Andrade</h4>
                    <h4>Ficção</h4>

                </article>

            </section>

        </section>
    )
}