import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";



function ProtocoleControleDouleur() {
    const [data, setData] = useState([
        {
            first: ` L'objectif de cette séance d'Hypnose est de contribuer à limiter, et peut-être même à faire disparaitre, une douleur physique. 
        `, second: `La dissociation, l'une des étapes de la transe hypnotique, consiste à séparer le corps de l'esprit, l'un et l'autre devenant en 
        quelque sorte indépendants. Il est donc très fréquent que, pendant la séance d'Hypnose, le sujet hypnotisé ne ressente plus 
        son corps, et qu'il ait l'impression d'en être détaché. `}, {
            first: `Nous allons utiliser ce phénomène pour travailler sur la douleur, en recherchant à provoquer une hallucination kinesthésique, 
            c'est à dire une transformation de votre perception subjective au niveau des sensations. Bonjour. Cette séance d’Hypnose va 
            contribuer à… LIMITEZ…, et peut-être même à faire… DISPARAITRE…, une… DOULEUR… physique, que vous êtes
            susceptible d’avoir au moment où je vous parle.`
        }, {
            first: `Cette séance ne se substitue en aucun cas à un traitement médical ni à la consultation d’un professionnel de l’Hypnose en 
            cabinet. `, second: `Pour… COMMENCEZ…, je vous propose de prendre une… POSITION… bien… PLAISANTE…, et bien… AGREABLE…, 
            dans laquelle vous… SOYEZ BIEN…`
        }, {
            first: `Et même si, en ce moment-même, vous… RESSENTEZ… peut-être cette… SENSATION… qui n’est vraiment pas… 
            PLAISANTE… et vraiment pas… AGREABLE…, vous pouvez peut-être la… LAISSEZ DE COTE... `,
            second: ` Comme on dit, « seules les choses que l’on regarde existent. » 
            `
        }, {
            first: `Prenons l’exemple d’une personne qui rougit, et qui consulte un Praticien, pour un problème de rougissements excessifs. Bien 
            souvent, plus cette personne focalise son attention sur son problème, et plus elle l’amplifie. C’est tout à fait évident : plus vous 
            focalisez votre attention sur ce que vous ne voulez pas, et plus vous obtenez en retour, davantage de ce que vous ne voulez 
            pas.`
        }, {
            first: `. Et en conséquence, je vous propose de… LAISSEZ DE COTE… cette… SENSATION…, pour vous… CONCENTREZ 
        DAVANTAGE… et vous… CONCACREZ DAVANTAGE… au… POSITIF…, à savoir l’… ETAT… de… DETENTE…, l’… ETAT 
        HYPNOTIQUE…, qui va… COMMENCEZ… à s’… INSTALLEZ… dans quelques instants.
        `}, {
            first: `Vous vous situez et vous vous trouvez à présent dans une position… AGREABLE…, et peut-être que vous pouvez laisser 
            les… PAUPIERES… se… FERMEZ… 
            `
        }, {
            first: ` En sachant que durant cette séance, et à tout moment, si l’une de mes paroles, l’une de mes suggestions, ne vous convient 
            pas, vous pouvez la laisser de coté, et juste… GARDEZ CE QUI VOUS CONVIENT…, ce qui vous parle, ce qui vous 
            correspond, car ce qui est important c’est que vous… SOYEZ BIEN…, bien… DETENDU…, bien… RELAXEZ…`
        }, {
            first: ` Peut-être que vous pouvez, pendant un moment, être attentif à la position de ce corps, dans ce fauteuil (ou dans ce lit).             `
        }, {
            first: ` A la position de la tête : est-elle droite, est-elle penchée, cette tête-là ?             `
        }, {
            first: ` A la position du bras droit : quelle est sa position exacte, quelle est sa position précise ? 
            `
        }, {
            first: ` Peut-être à la position du bras gauche : quelle est sa position exacte ? Qu’elle est sa position précise ?             `
        }, {
            first: ` Peut-être aussi que vous pouvez être attentif aux positions des jambes : la jambe droite, la jambe gauche, les deux.             `
        }, {
            first: ` Et au fur et à mesure que j’aborde ces parties du corps, vous focalisez peut-être votre attention sur elles. 
            `
        }, {
            first: ` La tête. 
            `, second: ` Le bras droit. 
            `, third: ` Le bras gauche. 
            `
        }, {
            first: `Cette jambe droite.`, second: `Cette jambe droite. 
            Et cette jambe gauche.`
        }, {
            first: `Tous ces membres, toutes ces parties du… CORPS…, qui forment ce… CORPS…, qui composent le… CORPS… de cette 
            personne, et que vous pouvez peut-être… VISUALISEZ… de l’… EXTERIEUR…, en… SPECTATEUR…, un peu comme si 
            vous étiez… EN DEHORS…, un peu comme s’il n’était plus à vous, un peu comme si vous en étiez… DETACHEZ…, … 
            DISSOCIEZ… `
        }, {
            first: ` Et il y a des parties qui vont bien, où… TOUT SE PASSE BIEN… et qui se… DETENDENT DAVANTAGE… `
        }
        , {
            first: ` Et il y a peut-être cette partie, qui est moins… DETENDUE…, qui n’est pas encore… BIEN DETENDUE… 
`}, 
        {first:` Peut-être que vous pouvez y voir une boule de feu, peut-être y associer une autre image. 
        `},{
            first:` Toujours… SPECTATEUR… de ce… CORPS…, toujours… EN DEHORS…, le regardant de l’… EXTERIEUR…, peut-être
            que vous pouvez imaginer que cette boule de feu commence à… REDUIRE… `
        },{
            first:` Que sa… TAILLE DIMINUE…, de plus en… PLUS…, et peut-être… DAVANTAGE… à chaque… INSPIRATION… 
            `,second:` Pour devenir… PLUS PETITE… 
            `
        },{
            first:`Et alors que je vais me taire un moment, pendant ce temps, cette boule va devenir… COMME UN PETIT POIS…, un tout… 
            PETIT POIS... Quand vous réentendrez ma voix, cette boule sera… UN PETIT POIS…, un tout… PETIT POIS… `
        },{
            first:` [ Pause ] `
        }
    ])
    return (<>
        <h2 style={{ marginTop: '100px', fontSize: "2.5em", textAlign: 'center' }}>Protocole controle Douleur  </h2>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}


            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((element,index) => (
                <SwiperSlide key={index}>
                    <div  style={{ fontSize: "20px", padding: '20px 80px' }}>
                        <p>{element.first}</p>
                        <p>{element.second}</p>
                        <p>{element.third}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    </>)
}

export default ProtocoleControleDouleur