import React, { useState } from 'react';
import SongList from "./components/SongList/songList";
import Header from './components/Header/header';
import MusicUploadForm from './components/MusicUploadForm/musicUploadForm';
import list from "./music_data/music_list";
import './App.css';

export default function App() {
  const [tracks, setTracks] = useState(list);

  //Function  to get updated list from child(MusicUploadForm) component
  function handlechange(tracks) {
    setTracks(tracks);
  }

  return (
    <>
      <Header />
      <div className='muf'>
        <MusicUploadForm list={tracks} getlist={handlechange} />
      </div>
      <SongList trackslist={tracks} />
    </>
  );
}
