import React from "react";

// Components
import Contianer from "../components/container/container";
import ChampionsCard from "../components/champions-card/champions-card";
import Layout from "../components/layout/layout";

//CSS
import * as styleComponents from "../assets/styles/champions.module.scss";

//images
import ci1 from "../assets/images/all-champions/1.jpg";
import ci2 from "../assets/images/all-champions/2.jpg";
import ci3 from "../assets/images/all-champions/3.jpg";
import ci4 from "../assets/images/all-champions/4.jpg";
import ci5 from "../assets/images/all-champions/5.jpg";
import ci6 from "../assets/images/all-champions/6.jpg";
import ci7 from "../assets/images/all-champions/7.jpg";
import ci8 from "../assets/images/all-champions/8.jpg";
import ci9 from "../assets/images/all-champions/9.jpg";
import ci10 from "../assets/images/all-champions/10.jpg";
import ci11 from "../assets/images/all-champions/11.jpg";
import ci12 from "../assets/images/all-champions/12.jpg";
import ci13 from "../assets/images/all-champions/13.jpg";
import ci14 from "../assets/images/all-champions/14.jpg";
import ci15 from "../assets/images/all-champions/15.jpg";
import ci16 from "../assets/images/all-champions/16.jpg";
import ci17 from "../assets/images/all-champions/17.jpg";
import ci18 from "../assets/images/all-champions/18.jpg";
import ci19 from "../assets/images/all-champions/19.jpg";
import ci20 from "../assets/images/all-champions/20.jpg";
import ci21 from "../assets/images/all-champions/21.jpg";

// Markup
const Champions = () => {
  return (
    <Layout>
      <Contianer>
        <div className={styleComponents.championspage}>
          <h1>Nos Champions</h1>
          <div className={styleComponents.flex}>
            <ChampionsCard
              image={ci1}
              dname="Ch. DeJade Soft Silver Dream"
              undertext="Dream BOB 4X sur 2 championnes dont une grande championne ( Brôme et ACM ) <br>
              en spécialité à Long Sault le vendredi BOW juge Laurent Pichard
              samedi en spécialité régionale Select Dog juge Anik Primeau
              samedi en régulier Select dog juge Juan Miranda
              dimanche en régulier Select dog juge David Kirkland
              Lundi BOB juge A Di Lorenzo
              Merci à Emily Burdon et à toute son équipe pour le magnifique travail avec Dream, ainsi qu'aux juges."
            />
            <ChampionsCard image={ci2} dname="CH.DeJade Renagade Black Diamond">
              <p>
                À Windsor vendredi le 12 avril 2019 il a fait BB le matin (
                meilleur de la race )
              </p>
              <p>
                Le samedi il a fait meilleur des gagnants,merci à Nathalie
                Clément d'avoir accepté de le manier, finissant ainsi son
                championnat et le dimanche meilleur du sexe opposé.
              </p>
            </ChampionsCard>
          </div>
        </div>
      </Contianer>
    </Layout>
  );
};

export default Champions;
