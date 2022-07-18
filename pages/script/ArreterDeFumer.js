import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";



function ArreterDeFumer() {
    const [data, setData] = useState([
       {first:`Peut-être pouvez-vous commencer à fixer un point devant vous, sur le mur par exemple. A partir de maintenant, seul ce point 
       vous intéresse. Soyez… BIEN ATTENTIF... Peut-être que vous pouvez vous intéresser à sa(ses) couleur(s), sa forme, sa taille. `}
       ,{first:` Surtout ne… LAISSEZ… pas… VOTRE ESPRIT S’ECHAPPER…, soyez particulièrement attentif au point devant vous. Faites 
       comme si le point allait s’... ECHAPPEZ…, vous devez le surveiller.`},{
        first:` Peut-être que vous pouvez observer le point d’un regard critique, comme pour le noter, le considérer. 
        `
       },{
        first:` N’… ENTREZ… pas… DANS CET ETAT… avant d’avoir… FERMEZ… les… PAUPIERES… 
        `
       },{
        first:` Laissez ces… PAUPIERES… se… FERMEZ… un moment. Très bien. 
        `
       },{
        first:`Durant cette séance, si l’une de mes suggestions ne vous parle pas, vous pouvez la laisser de côté et juste… GARDEZ… ce 
        qui est… BON… pour vous. A tout moment, vous pouvez bouger, … CHANGEZ… de position pour… DAVANTAGE… de… 
        CONFORT…, bailler, vous gratter; car ce qui est important, c’est que vous… SOYEZ BIEN…`
       },{
        first:`a… PROFONDEUR… de cette… TRANSE… pourra être de moins en plus… PROFONDE… ou de plus en moins en plus… 
        PROFONDE... Ce serait peut-être judicieux de vous poser la question:… PREFEREZ… -vous une transe… PROFONDE… ou 
        une transe… TRES PROFONDE ? `
       },{
        first:`Alors que ces… PAUPIERES… sont… BIEN FERMEZ…, soyez un moment attentif à ce qui se passe à… L’INTERIEUR… de 
        vous-même; ce volume respiratoire par exemple… Chaque inspiration… Chaque… RELACHE…(-ment), Comme ça, très bien. `
       },{
        first:` Plus vous inspirez, comme ceci… et vous soufflez, comme ça… Et plus certaines parties du… CORPS… se… RELÂCHE… 
        se DETEND…(-ent). Vous pouvez être curieux de savoir quelles sont les parties du… CORPS… les plus… DETENDUES… `
       },{
        first:`Peut-être ce bras gauche… REPOSEZ… par ici, ou le bras droit… REPOSEZ… par là. Peut-être l’une ou l’autre de ces deux 
        jambes, peut-être même la tête ? … DETENDEZ-VOUS… `
       },
       {first:`Alors que vous déglutissez à certains moments ou à d’autres, n’… N’APPROFONDISSEZ… pas… CET ETAT… TOUT DE 
       SUITE…, peut-être… DAVANTAGE… et… PLUS PROFONDEMENT… à votre manière. `},
       {first:`DETENDEZ-VOUS… 
       `,second:`Pensez… JE ME DETENDS… JE ME DETENDS…`},{
        first:`Comme vous pensez… JE ME DETENDS… et que vous entendez… DETENDEZ-VOUS…, cet état s’… APPROFONDIS. 
        Alors que… CET ETAT S’APPROFONDIT…, pensez… JE ME DETENDS… DETENDEZ-VOUS.`
       },{
        first:`Je me demande si vous avez déjà pu voir un escalier qui… DESCENDS… qui… DESCENDS… Comme ça, très bien, et de 
        plus en… PLUS PROFONDEMENT…`
       },{
        first:` Plus vous… DESCENDEZ CET ESCALIER… plus CET ETAT S’APPROFONDIT… `
       },{
        first:`Lorsque vous vous déplacez, je me demande où vous… RANGEZ CES CIGARETTES… Peut-être dans une poche ou dans 
        une autre, peut-être même dans un sac ? `
       },{
        first:` Intéressez-vous précisément à l’endroit où vous… RANGEZ CES CIGARETTES… C’est comment ? De quelle couleur ? 
        `
       },{
        first:` Ne vous… LIBEREZ… pas de ça… TOUT DE SUITE… `
       },{
        first:` Peut-être que vous pouvez visualiser un grand et magnifique parc, là-devant. Commencez à… AVANCEZ… dans ce paysage 
        qui vous… INSPIRE… peut-être tant de… SEREINITE…, de… LIBERTE… Très bien.`
       },{
        first:` Je vous propose un magnifique voyage en ballon. C’est parti. 
        `
       },{
        first:` Je ne vous ai pas dit, j’ai comme l’impression que plus j’… INSPIRES… et plus l’enveloppe du ballon se… MOBILISES… Et à 
        chaque inspiration, le ballon s’… ELEVES DAVANTAGE… DAVANTAGE… ENCORE…. DAVANTAGE…`
       },{
        first:`Regardez le ciel, et la montgolfière s’envole. 
        Je vois comme les composants du paysage rétrécissent. Plus vous vous… ELEVEZ… plus ça… CHANGES… ! 
       `
       },{
        first:` Ne… SORTEZ… pas ces… CIGARETTES… de l’endroit où vous les rangiez avant d’être bien… PRET… à les… JETEZ… 
        `
       },{
        first:` Lorsque ce sera fait, regardez-les tomber, tomber, tomber… DAVANTAGE... Alors qu’… ELLES TOMBENT…, ELLES 
        RETRECISSENT… Alors le paysage… CHANGES ENCORE… !`
       },{
        first:` Apprêtez-vous à… VOUS POSER… dans un nouveau lieu tellement… PLUS BEAU…, … POSITIF… et… BON… pour… 
        VOUS...`
       },{
        first:` Je vais me taire un moment, ne… PROFITEZ… pas… TOTALEMENT… de votre… NOUVELLE VIE… avant d’avoir 
        réentendu ma voix.`
       },{
        first:`Je vais compter jusqu’à 5 et vous pouvez compter mentalement avec moi. Lorsque je prononcerai ce chiffre, vous pourrez 
        faire ce que je vous proposerai de faire si vous en ressentez l’envie, et une partie de vous-même… SAIS TRES BIEN… ce qui 
        va se… PASSEZ…, peut-être… A…-(près)…, … AUTRE CHOSE… `
       },{
        first:` 1. Prenez plusieurs grandes et profondes inspirations. Inspirez… PROFONDEMENT…, relâchez complètement. Comme ça, 
        très bien.`
       },{
        first:`2. Vous pouvez bouger vos doigts et les différentes parties de votre corps. 
        `
       },{
        first:` 3. Savez-vous si vous préférez… JETEZ… ou donner les dernières… CIGARETTES… ? 
        `
       },{
        first:` 4. Apprêtez-vous à… REVENIR ICI ET MAINTENANT… 
        `
       },{
        first:`5. Vous pouvez ouvrir vos yeux; revenez Ici et Maintenant. 
        Bonjour !`
       }
    ])
    return (<>
        <h2 className='computer' style={{ marginTop: '100px', fontSize: "2.5em", textAlign: 'center' }}>
            Arreter de Fumer  </h2>
        <h2 className='mobile' style={{ marginTop: '65px', fontSize: "1.2em", textAlign: 'center' }}>
            Arreter de Fumer  </h2>
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
                <div className='computer' style={{height:'400px',fontSize:"28px", padding: '0px 80px' }}>
                    <p>{element.first}</p>
                    <p>{element.second}</p>
                    <p>{element.third}</p>
                </div>
                <div className='mobile' style={{height:'400px',fontSize:"20px", padding: '0px 35px' }}>
                    <p>{element.first}</p>
                    <p>{element.second}</p>
                    <p>{element.third}</p>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>

    </>)
}

export default ArreterDeFumer