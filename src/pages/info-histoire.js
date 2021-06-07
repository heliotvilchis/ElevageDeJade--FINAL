import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/historie.module.scss";

//Images
import his1 from "../assets/images/historie/his1.jpg";
import his2 from "../assets/images/historie/his2.jpg";
import his3 from "../assets/images/historie/his3.jpg";

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.histoire}>
          <h1>Histoire et origine du colley </h1>
          <img src={his1} alt="" />
          <p>
            Le colley ou collie est originaire d'Écosse, un pays de montagnes et
            de collines renommé pour l'élevage du mouton. Depuis toujours, le
            chien a été l'allié des bergers pour rassembler et pour déplacer les
            troupeaux. Le chien de berger est un animal qui a naturellement
            tendance à être fougueux, à mordiller les moutons aux jarrets et aux
            oreilles et à les disperser autant qu'a les rassembler. Un chien de
            berger bien dressé, par imitation d'un congénère expérimenté, sera
            beaucoup plus calme et posé; il n'interviendra qu'au bon moment et
            évitera de perturber les brebis et leurs agneaux, ou de défier
            inutilement les béliers. Un bon chien de berger est capable de
            remplacer 50 bergers! Ce travail exigeant a nécessité la sélection
            de sujets de qualité et a engendré une race d'une grande pureté.
          </p>
          <img src={his2} alt="" />
          <p>
            Les bergers d'Écosse descendent sans doute des chiens de berger que
            les Romains importèrent dans les îles britaniques et qui furent
            croisés avec des setters ou des terre-neuve et des chiens locaux.
            Rapidement est apparue une sorte de chien à la face allongée et au
            stop peu accentué, dont son issues plusieurs variétés se distinguant
            par la taille et le pelage, notamment le type à poil long (Rough
            Colley) qui résiste au froid des Highlands (hautes terres), et le
            type à poil court (Smooth Colley) des Lowlands (basses terres).
          </p>
          <p>
            Au départ, on considérait que le colley des Borders (Border Colley)
            et les autres colleys appartenaient à la même race; ces chiens
            avaient un gabarit plus petit que celui des colleys d'aujourd'hui.{" "}
          </p>
          <img src={his3} alt="" />
          <p>
            Par la suite le Border Colley fut considéré comme une race à part et
            les deux autres variétés de grands colleys furent baptisés Rough
            Colleys (colleys à poil long sauf sur la face, aussi appelé chiens
            de berger d'Écosse) et Smooth Colleys (colleys à poil court). Le
            Bearded Colley ou colley barbu (qui a un pelage long et abondant sur
            la face) est souvent rattaché à ses autres cousins bien qu'il soit
            d'une race à part. Le Rough Colley fut exporté dans les îles
            Shetland et est à l'origine du Shetland Sheepdog, le Sheltie, sorte
            de Rough Colley miniature.
          </p>
          <p>
            C'est en Angleterre en 1860 qu'eut lieu la première exposition de
            colleys. En 1871, le Kennel Club enregistra les premiers sujets. On
            effectua alors une sélection pour faire grandir les chiens, une
            tendance qui dura jusqu'en 1885, date à partir de laquelles le
            gabarit n'a plus guère changé.{" "}
          </p>
          <p>
            En Grande-Bretagne, ce chien de berger a toujours été tr ès en
            vogues, comme en témoigne la présence de colleys dans les jardins du
            château de le reine Victoria qui n'est certes pas étrangère à
            l'engouement du peuple britannique pour les colleys de tous poils.{" "}
          </p>
          <p>
            En 1906, un groupe de conducteurs de troupeaux décida de créer la
            Internationnal Sheepdogs Society (Société internationnale de chien
            de berger) et organisa la même année le premier concours ou trial de
            chiens de berger. Depuis lors, on peut envoyer son chien au concours
            annuel de la société auquel les Border Colleys participent en plus
            grand nombre que les représentants d'autres races. L'épreuve
            requiert que le chien contourne les brebis, qu'il les regroupe et
            les reconduise ensemble dans un délai de 15 minutes aux ordres du
            berger qui le guide à distance par des gestes et des sifflements. La
            renommée mondiale du colley n'est pas attribuable uniquement à sa
            beauté superbe; il la doit aussi à ses qualités physiques et
            psychologiques. Une des ambassadrices de la race est la chienne
            LASSIE, célèbre star de Hollywood qui était un Rough Colley hors du
            commun. Comme toutes les grandes vedettes, Lassie avait son propre
            appartement et elle était doublée par les chiens cascadeurs pour les
            scènes considérées dangeureuse. À sa mort, elle fut remplacées par
            sa fille et plus tard par divers autres colleys sans que jamais les
            spectateurs ne s'en aperçoivent. Sa célébrité a été telle que la
            langue populaire a adopté le mot "LASSIE" pour désigner le Rough
            Colley.{" "}
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
