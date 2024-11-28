import S from "./doados.module.scss"
import Protagonista from "../../assets/livro-protagonista.png"


export default function doados() {
    return (
        <section className={S.doados}>
            <section>

                <h2>Livros Doados</h2>

                <div className={S.livrosDoados}>

                    <a href="#"><img src={Protagonista} alt="Imagem do livro O Protagonista" /></a>

                </div>



            </section>

        </section>
    )
}