import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { audioConstants, imageConstants } from './Constants/audio';
// import Player from './Components/Player';
// import { position } from 'dom-helpers';
function App() {
  const [songs, setSongs] = useState([])
  const details = [
    {
      title: "song1",
      artist: "Nitesh",
      img_src: imageConstants.IMAGE_1,
      src: audioConstants.AUD_1
    },
    {
      title: "song2",
      artist: "Rahul",
      img_src: imageConstants.IMAGE_2,
      src: audioConstants.AUD_2
    },
    {
      title: "song3",
      artist: "Harish",
      img_src: imageConstants.IMAGE_3,
      src: audioConstants.AUD_3
    },
    {
      title: "song4",
      artist: "Yogesh",
      img_src: imageConstants.IMAGE_4,
      src: audioConstants.AUD_4
    }

  ]
  const name = "rahul";
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)
  // return (
  //   <div className="d-flex flex-row m-4 justify-content-between" >
  //     <button>hello</button>
  //     <button>hello</button>
  //     <button>hello</button>
  //     <button>hello</button>
  //     </div>

  // )
  const nextSong=(index)=>{
      index++;
      if(index == details.length){
        index = 0;
      }
      var audio = document.getElementById("audio"+index);
      audio.play();

  }

  let isPlaying=false;
  const play=(i)=>{
    console.log("clicked")
    var audio = document.getElementById("audio"+i);
    if(isPlaying==false){
      audio.play();
      isPlaying=true;
    }else{

      audio.pause()
      isPlaying=false;
    }
  }


  return (
    <div className="row">
      {details.map((song, i) => {
        return(

  <div className="card shadow-lg m-2 col" style={{ width: "18rem",position:"relative" }}>
  <div className="card-body"  >
    <h6 className="card-title justigy-content-center" style={{ position: "absolute", top: 50, left: 40 }} >Title:{song.title}</h6>
    <h6 className="card-text" style={{ position: "absolute", top: 80, left: 40 }}> Sung by {song.artist}</h6>
    <div style={{position:"absolute",width:"86%", top:"50%"}}>
      <div className="d-flex justify-content-between">
      <button className="card-button btn btn-info btn-sm" onClick={()=>{play(i) }}>play</button>
      <button className="card-button btn btn-info btn-sm" onClick={()=>{nextSong(i)}}>next</button>
      <button className="card-button btn btn-info btn-sm">pre</button>
      </div>
    </div>
    <img src={song.img_src} className="card-img" style={{width:"100%"}} />
    <audio id={"audio"+i} src={song.src}></audio>

  </div>
</div>
          ) 
      })}

    </div>
  );

}

export default App;
