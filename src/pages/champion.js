import React from "react";

// Components
import Contianer from "../components/container/container";
import ChampionsCard from "../components/champions-card/champions-card";
import Layout from "../components/layout/layout";

//CSS
import * as styleComponents from "../assets/pagestyles/champions.module.scss";

//images
import ci1 from "../assets/images/all-champions/1.jpg";
import ci2 from "../assets/images/all-champions/2.jpg";
import ci3 from "../assets/images/all-champions/3.jpg";
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
import ci22 from "../assets/images/all-champions/22.webp";
import ci23 from "../assets/images/all-champions/23.jpg";

// Markup
const Champions = () => {
  return (
    <Layout>
      <Contianer>
        <div className={styleComponents.championspage}>
          <h1>Nos Champions</h1>
          <div className={styleComponents.flex}>
            <ChampionsCard
              image={ci23}
              dname="India, CH.DeJade Star of Cassy"
            ></ChampionsCard>
            <ChampionsCard image={ci1} dname="Ch. DeJade Soft Silver Dream">
              <p>
                Dream BOB 4X sur 2 championnes dont une grande championne (
                Br??me et ACM ) en sp??cialit?? ?? Long Sault le vendredi BOW juge
                Laurent Pichard
              </p>
              <p>Samedi en sp??cialit?? r??gionale Select Dog juge Anik Primeau</p>
              <p>Samedi en r??gulier Select dog juge Juan Miranda</p>
              <p>Dimanche en r??gulier Select dog juge David Kirkland</p>
              <p>Lundi BOB juge A Di Lorenzo</p>
              <p>
                Merci ?? Emily Burdon et ?? toute son ??quipe pour le magnifique
                travail avec Dream, ainsi qu'aux juges.
              </p>
            </ChampionsCard>
            <ChampionsCard image={ci2} dname="CH.DeJade Renagade Black Diamond">
              <p>
                ?? Windsor vendredi le 12 avril 2019 il a fait BB le matin (
                meilleur de la race )
              </p>
              <p>
                Le samedi il a fait meilleur des gagnants,merci ?? Nathalie
                Cl??ment d'avoir accept?? de le manier, finissant ainsi son
                championnat et le dimanche meilleur du sexe oppos??.
              </p>
            </ChampionsCard>
            <ChampionsCard
              image={ci3}
              dname="CH. DeJade Soft Dream in Gold (Gabou)"
            />
            <ChampionsCard image={ci5} dname="CH DeJade Salem">
              <p>
                N0: 1 rough colley en rally-O 2017 propri??taire Lucie LaBastille
              </p>
            </ChampionsCard>
            <ChampionsCard image={ci6} dname="CH DeJade Imagine A Blue Star">
              <p>
                Elle a termin??e son championnat en beaut?? ?? Br??me (juin 2016)
                sur 5 shows ,elle a fait 4 BOB et 2 fois BOW, select Bitch. Une
                fin de semaine de 10 points, il lui en manquait seulement 4 pour
                terminer, donc elle a 6 points d'accumul??s vers son Grand
                Championnat.
              </p>
            </ChampionsCard>
            <ChampionsCard image={ci7} dname="CH DeJade White Jalousie">
              <p>
                Elle a fait 2 fois BB and BOW 2 fois pour un total de 9 points
                d'accumul??s (juin 2016) vers son championnat, elle a termin??e le
                vendredi 24 juin 2016 ?? Ste-Anne-de-la-P??rade.
              </p>
            </ChampionsCard>
            <ChampionsCard image={ci8} dname="CH DeJade Soft Magic Gold Dust">
              <p>
                Le 14 juin 2014 ?? Br??me, Bo, DeJade Soft Magic Gold Dust a fait
                a plusieurs reprises BOS et BOB, BOW pour un total de 7 pts, a
                termin?? son championnat ?? Ste-Anne-de-la P??rade le vendredi 27
                juin 2014
              </p>
            </ChampionsCard>
            <ChampionsCard image={ci9} dname="CH DeJade A New Rhapsodie">
              <p>
                Le 14 juin 2014 ?? Br??me DeJade A New Rhapsodie a fait ??
                plusieurs reprises BOS et BOB BB, m??me sur une femelle d??j??
                championne, pour un total de 6 points malgr?? une forte mue assez
                ??vidente, vous pourrez le constater sur sa photo de championnat,
                Merci aux juges d'appr??cier mes chiens. et merci ?? Val??rie Arial
                pour son excellent travail.
              </p>
            </ChampionsCard>
            <ChampionsCard image={ci10} dname="CH DeJade Flirt Mystery (Misty)">
              <p>3 majeures ?? Br??me le 13 juin 2013 </p>
            </ChampionsCard>
            <ChampionsCard
              image={ci11}
              dname="CH Glasgowhill's DeJade Renegade (Oliver) "
            >
              <p>
                Nouveau champion BOW pour un total de 6 pts dont 3 majeures ??
                Ibervlle
              </p>
            </ChampionsCard>
            <ChampionsCard
              image={ci12}
              dname="Can. CH. CD,RN DeJade Imagine a Star (Bicket) championne Rally-O avanc??"
            >
              <p>Championne Rally-O avanc??</p>
              <p>Rally-O Excellence B ?? Ste-Foy (2013) </p>
            </ChampionsCard>
            <ChampionsCard image={ci13} dname="CH Milas DeJade New Star ">
              <p>
                Nouveau champion CH. Milas DeJade New Star ?? fait ?? 4 reprises
                BOB ?? Br??me la fin de semaine du 7 au 10 juin 2012. Il a 3
                majeure.
              </p>
            </ChampionsCard>
            <ChampionsCard image={ci14} dname="CH. DeJade Medzo">
              <p>Nouveau champion</p>
            </ChampionsCard>
            <ChampionsCard image={ci15} dname="CH. Glasgowhill Simply DeJade">
              <p>
                Nouveau champion a fait BOB ?? Ste-Foy dimanche 8/08/2010 malgr??
                une blessure au pied droit qu'il c'??tait fait avant de partir
                pour le show.
              </p>
            </ChampionsCard>
            <ChampionsCard
              image={ci16}
              dname="CH. DeJade Imagine a Star (Bicket)"
            >
              <p>
                Nouvelle championne a fait ?? 4 reprises BOB ?? L'Anse St-Jean.
              </p>
              <p>CD et RN, en ob??issance</p>
            </ChampionsCard>
            <ChampionsCard image={ci17} dname="CH. HarvestHil True Blue Charm">
              <p></p>
            </ChampionsCard>
            <ChampionsCard image={ci18} dname="CH. Simbad DeJade">
              <p>Nouveau Ch. et 4e de groupe </p>
            </ChampionsCard>
            <ChampionsCard image={ci19} dname="CH. Collection DeJade Sammy boy">
              <p></p>
            </ChampionsCard>
            <ChampionsCard image={ci20} dname="Ch. DeJade Angel dust (Angie)">
              <p>Arriv??e 4E de groupe , fait BPIG. les 6-7/06/09</p>
            </ChampionsCard>
            <ChampionsCard image={ci21} dname="CH. Constelation Kujo ">
              <p> Ch.FCC 4e de groupe</p>
              <p>CH.CKC 3e de groupe</p>
            </ChampionsCard>
          </div>
        </div>
      </Contianer>
    </Layout>
  );
};

export default Champions;
