import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";


function VaincrePhobiesAraignees() {
    const [data,setData]= useState([
        {first:`Aujourd’hui, nous allons aborder cette notion de phobie en particulier la thématique
        tellement fréquente : celle des araignées.`,
        second:`Les phobies peuvent avoir différentes origines, la plupart du temps, on retrouve ça,
        parce que quand on est enfant et qu'on voit un de nos parents s'affoler joyeusement
        devant un petit truc comme ça, ou un petit peu plus gros, nous, qu'est-ce qu'on
        engramme dans notre esprit d'enfance ?`,
        third:`C’est forcément que cet animal est dangereux.`},
        {first:`Mais, l'animal en tant que tel n'est pas dangereux, en France, on n'a d’ailleurs pas
        d'araignées virulentes, avec celles qu’on trouve dans nos campagnes en tout cas.`,second:`On n'a pas forcément une expérience très douloureuse ou difficile avec cet animal.
        Ce serait aussi une explication pour une phobie, quand vous vous promenez dans une
        ferme ou une grange, d'un seul coup, vous tombez, vous êtes couvert d'araignée. Je
        pense que ça peut laisser une petite empreinte traumatique et générer potentiellement
        une phobie.`,
        third:`Cela dit, vous avez peut-être une expérience de cet ordre-là.
        De toute façon, on va demander aujourd'hui à votre inconscient, de remonter aux
        origines.`},
        {first:`  Ça peut être réel, d'avoir vécu une mauvaise expérience avec ce genre d'animal.
        En tout cas, ça peut être quelque chose de beaucoup plus transgénérationnelle, d'avoir
        vécu une expérience par procuration et en fait, depuis des générations et des
        générations. Finalement, on se trimballe ce truc.`,
        second:`
        L’araignée ne jouit pas forcément du coup d'une super bonne réputation.
        Finalement, l'inconscient collectif, peut avoir classé l'animal araignée dans une
        catégorie qui ne lui correspond pas forcément, parce que c’est un animal très utile dans
        les maisons, et c'est chouette de ne pas forcément les chasser, nécessairement en tout
        cas.`},
        {first:`
        Peut-être qu’on peut les isoler dans des endroits où on n’y va pas beaucoup.
        En tout cas, c'est plutôt la preuve que vous habitez dans un endroit qui est très sain.
        Alors ça, je dis cela à moi-même en même temps.`,second:`
        Évidemment, ce n'est pas toujours évident de se retrouver face à une bestiole de cet
        ordre-là, quand on a reçu justement un héritage ou quand on a vécu une expérience
        difficile, avec ce genre d'animal`},
        {first:`Ce qui veut dire qu'aujourd'hui, on va faire une séance d'hypnose consacrée donc à : 
        « comment est-ce que notre inconscient pourrait changer son point de vue, vis-à-vis 
        d’une expérience vécue, ou récupérée d’une certaine façon dans le générationnel, pour 
        la transformer pour, que voilà l'expérience avec l'animal soit dès aujourd'hui plus 
        plaisante et plus agréable ? »`},{
            first:`Donc, quelle que soit finalement cette origine, aujourd’hui, nous allons utiliser un 
            modèle d'hypnose, qui va permettre de remonter à toutes ces expériences et de les 
            regarder d'un autre point de vue.`,second:`Voilà ce que je vous propose : si ce « menu » vous intéresse, je vous invite à vous 
            installer dans cet endroit confortable, (peut-être une chaise ou un fauteuil ou un lit) de 
            façon à ce que vous puissiez vivre l'expérience sans forcément vous endormir.`
        },
        {first:`Faites-en sorte de , vous couper de l'espace pour vivre vraiment cette expérience 
        pleinement et complètement, parce que c'est important pour vous.`,second:`Comme vous le savez, vous allez écouter ma voix qui va vous accompagner pendant 
        tout ce temps, je suis tout le temps présent, tout le temps à vos côtés.`},
        {first:`Bien évidemment, s’il y a quoi que ce soit pendant la séance d’inconfortable, vous avez 
        cette possibilité de sortir de vous-même de la transe hypnotique, de couper la séance 
        sans aucun problème et de vous retrouver en sécurité dans cet endroit, où vous vous 
        êtes installé maintenant`},{
            first:`Prenez le temps de vous poser, de vous installer. Prenez le temps de vraiment trouver 
            la position dans laquelle vous êtes confortable.
            On va pouvoir ralentir le rythme maintenant.
            Posez tout ce qui était important de poser, de changer et on va ralentir`,
            second:`Prenez aussi le temps de laisser vos yeux se fermer (si ce n'est pas déjà fait).`
        },{
            first:`Profitez d'avoir tiré un peu ces rideaux naturels que sont vos paupières ; un peu comme
            lorsqu'on tire les rideaux de sa maison, qu'on ferme les volets pour s'isoler du monde 
            extérieur, se retrouver à l’intérieur de chez soi ou de soi en ce moment même.`,
            second:`On doit être capable de reconnaître l'existence d'un monde autour et en même temps 
            de reconnaître une proximité avec les sons que vous percevez en ce moment.`

        },
        {first:`Et puis faites un peu aussi le tour du propriétaire, de comment vous êtes maintenant, 
        comment vous vous sentez en début de cette séance, sur ce sujet-là ?`,second:`
        Peut-être que déjà, ça peut laisser émerger un certain nombre de désagréments, de 
tensions, d'images, de pensées, d'émotions, pourquoi pas.`}
])
    return (<>
        <h2 style={{marginTop:'100px',fontSize:"2.5em",textAlign:'center'}}>Vaincre la phobie des araignées</h2>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((element,index)=>(
            <SwiperSlide key={index} >
                <div style={{fontSize:"20px", padding: '0px 80px' }}>
                    <p>{element.first}</p>
                    <p>{element.second}</p>
                    <p>{element.third}</p>
                </div>
            </SwiperSlide>
               ))}
        </Swiper>
        
    </>)
}

export default VaincrePhobiesAraignees