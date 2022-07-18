import { useState } from 'react'
import NavBar from '../component/NavBar'
import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  const [videos, setVideos] = useState([{
    video: "/assets/Pexels Videos 2335977.mp4"
  }, {
    video: "assets/Pexels Videos 1893746.mp4"
  }])
  const [index, setIndex] = useState(1)

  const changeVideo = () => {
    console.log(index)
    if (index == (videos.length)) {
      setIndex(0)
    }
    else {
      setIndex(index++)
    }
  }

  return (<>
    <NavBar onindex={changeVideo} />

    {/* {(index == 0) && (
      <video autoPlay muted loop id="myVideo">
        <source src={videos[0].video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    )}
    {(index == 1) && (
      <video autoPlay muted loop id="myVideo">
        <source src={videos[1].video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    )} */}
    <div 
    // style={{position:'fixed',top:'0px',left:'0px',width:"100%",overflow:'hidden'}}
    id='myVideo'
    >
      <img src='/assets/bacground.png' width="1400px"/>
    </div>


    <Component {...pageProps} />
  </>
  )
}

export default MyApp
