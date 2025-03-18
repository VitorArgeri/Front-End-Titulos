import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "./titulos.module.css";
import Card from "../components/cards";
import Section from "../components/section";

export default function Titulos() {
  return (
    <div className={styles.container}>

      <Header />

      <main className={styles.main}>

        <Section campeonato={"Conquistas Principais"}>
          <Card
            ano={2012}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"Corinthians 1 x 0 Chelsea"}
            textoAlt={"Troféu do Mundial Interclubes 2012"}
            titulo={"Mundial de Clubes da Fifa"}
          />
          <Card
            ano={2012}
            capa={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgU00ft7DASizVNy-dehrt5wBRQrdMVCw4bAdv-E7C70Pyrh8mr9koXnBRh0zUXUKIRD1GrxWiZf-AUolcwCMZesr3LxvpKzlCRzyBjIr8187y14TqxADkTSJVEymUtVukUNxFHGZSS75Q/s1600/libertadores+corinthians.JPG"}
            detalhes={"Corinthians 2 x 0 Boca Juniors"}
            textoAlt={"Troféu da Copa Libertadores da América 2012"}
            titulo={"Copa Libertadores da América"}
          />
          <Card
            ano={2000}
            capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxR9F3MdJuUOSnWvLTAg6uOWf31EOnWME4w&s"}
            detalhes={"Corinthians 0(4) x 0(3) Vasco"}
            textoAlt={"Troféu do Mundial de Clubes da FIFA 2000"}
            titulo={"Mundial de Clubes da FIFA"}
          />
        </Section>

        <Section campeonato={"Campeonatos Estaduais"}>
          <Card
            ano={2023}
            capa={"https://img.band.uol.com.br/image/2023/01/13/trofeu-do-paulistao-tera-homenagem-a-pele-17271.jpg"}
            detalhes={"30º título estadual"}
            textoAlt={"Troféu do Campeonato Paulista 2023"}
            titulo={"Campeonato Paulista"}
          />
          <Card
            ano={2019}
            capa={"https://conteudo.imguol.com.br/c/esporte/93/2019/03/28/trofeu-do-campeonato-paulista-de-2019-1553785004249_v2_1x1.jpg"}
            detalhes={"29º título estadual"}
            textoAlt={"Troféu do Campeonato Paulista 2019"}
            titulo={"Campeonato Paulista"}
          />
          <Card
            ano={2018}
            capa={"https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2025/01/trofeu-paulistao-aspect-ratio-512-320.jpg"}
            detalhes={"28º título estadual"}
            textoAlt={"Troféu do Campeonato Paulista 2018"}
            titulo={"Campeonato Paulista"}
          />
        </Section>

        <Section campeonato={"Campeonato Brasileiro"}>
          <Card
            ano={2017}
            capa={"https://placar.com.br/wp-content/uploads/2021/10/esporte-taca-campeonato-brasileiro-20141201-001-1.jpeg"}
            detalhes={"7º título brasileiro"}
            textoAlt={"Troféu do Campeonato Brasileiro 2017"}
            titulo={"Campeonato Brasileiro"}
          />
          <Card
            ano={2015}
            capa={"https://s2.glbimg.com/XDy3QbqqWkC6ZYfmelsOQU0YnM0=/560x350/e.glbimg.com/og/ed/f/original/2015/11/04/20150922181217_1.jpeg"}
            detalhes={"6º título brasileiro"}
            textoAlt={"Troféu do Campeonato Brasileiro 2015"}
            titulo={"Campeonato Brasileiro"}
          />
          <Card
            ano={2011}
            capa={"https://jornalismofc.wordpress.com/wp-content/uploads/2011/10/trofeu-20112.jpg?w=584"}
            detalhes={"5º título brasileiro"}
            textoAlt={"Troféu do Campeonato Brasileiro 2011"}
            titulo={"Campeonato Brasileiro"}
          />
        </Section>

        <Section campeonato={"Outras Conquistas"}>
          <Card
            ano={2009}
            capa={"https://www.netvasco.com.br/news/noticias15/arquivos/20090504copadobrasil2009.jpg"}
            detalhes={"Corinthians 2 x 0 Internacional"}
            textoAlt={"Troféu da Copa do Brasil 2009"}
            titulo={"Copa do Brasil"}
          />
          <Card
            ano={2013}
            capa={"https://s2-ge.glbimg.com/JguTadIbqEqEoN1m0mFL8PHeB9Y=/0x0:1536x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/y/y/kI1fthSa2Vhf3blXTD1Q/tacarecopa.jpg"}
            detalhes={"Corinthians 3 x 1 São Paulo"}
            textoAlt={"Troféu da Recopa Sul-Americana 2013"}
            titulo={"Recopa Sul-Americana"}
          />
          <Card
            ano={2002}
            capa={"https://todopoderosotimao.com.br/imagens/trofeus/copa_02.png"}
            detalhes={"Corinthians 3 x 2 Brasiliense"}
            textoAlt={"Troféu da Copa do Brasil 2002"}
            titulo={"Copa do Brasil"}
          />
        </Section>
      </main>

      <Footer />

    </div>
  );
};
