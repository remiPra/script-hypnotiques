import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";



function PenseePositivesCoue() {
    const [data, setData] = useState([
        {
        first:`Pour profiter pleinement de cette séance, je vous propose de vous installer 
        confortablement dans la position que vous souhaitez et je vous invite à fermer vos yeux.`    
    },{
        first:`Prenez le temps de vous installer dans vous-même, avec vous-même et pour vous même.`
    },{
        first:`Puis, adoptez une respiration douce, une respiration agréable, apaisante, détendante, 
        relaxante. Agréablement installé, vous êtes à l’écoute de ma voix (et de cette musique).`
    },{
        first:`C’est du temps pour vous que vous vous accordez, que vous vous octroyez. C’est le 
        temps de la liberté du lâcher-prise`
    },{
        first:`Quand vous inspirez, c’est comme si vous aspiriez tout l’oxygène absolument vital, 
        nécessaire, indispensable pour nourrir les milliards et milliards de cellules qui 
        composent votre organisme : les cellules de vos os, de vos muscles, de vos tissus, de 
        vos organes, de votre peau, de votre coeur,... `
    },{
        first:`Quand vous expirez, c’est comme si vous chassiez de vous, loin de vous, tout ce qui 
        n’est pas agréable ou confortable et vous êtes bien, de plus en plus relâché et apaisé.`
    },{
        first:`L’ensemble de vos muscles se détende, se relaxe et s’apaise davantage de seconde 
        en seconde et lors de chaque expiration.`
    },{
        first:`Vous êtes dans vous-même, avec vous-même et pour vous-même, ici et maintenant
        dans le but d’intégrer en vous des auto-suggestions destinées à penser positivement 
        pour changer votre vie.`
    },{
        first:`A présent, vous allez écouter et intégrer en vous chaque suggestion que je vous donne. 
        Chacune d’entre elle devenant votre réalité, une réalité intérieure, physiologique. Soyez 
        à l’écoute... `
    },{
        first:`Ensuite, vous les répéterez intérieurement, mentalement, et ferez en sorte qu’elles 
        raisonnent dans tout votre être pour devenir ce que vous voulez être. Pour cela, je vous 
        laisserai le temps nécessaire.`
    }
])
    return (<>
        <h2 style={{ marginTop: '100px', fontSize: "2.5em", textAlign: 'center' }}>
        20 auto-suggestions puissantes pour penser positif </h2>
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

export default PenseePositivesCoue