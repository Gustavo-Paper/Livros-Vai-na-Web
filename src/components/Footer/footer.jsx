import S from "./footer.module.scss"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/Twitter.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"

export default function Footer() {
    return (
        <footer >
            <section className={S.boxFooter}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""><img src={facebook} alt="imagem da logo facebook" /></a>
                    <a href=""><img src={twitter} alt="imagem da logo twitter" /></a>
                    <a href=""><img src={youtube} alt="imagem da logo youtube" /></a>
                    <a href=""><img src={linkedin} alt="imagem da logo linkedin" /></a>
                    <a href=""><img src={instagram} alt="imagem da logo instagram" /></a>
                </nav>
            </section>

            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>




    )


}