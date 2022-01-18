import Head from 'next/head'
import Image from 'next/image'
import DetailSong from '../component/DetailSong/DetailSong'
import ListSong from '../component/ListSong/ListSong'
import Navbar from '../component/Navbar/Navbar'
import Songs from '../Context/Context'
import styles from '../styles/Home.module.css'
import DataSongs from '../data/songs.json'
import { useState } from 'react'


export default function Home() {
  const [song,setSong] =useState(DataSongs[0])
  const handleSetSong = (idSong) =>{
    const song = DataSongs.find(song => song.id ===idSong)
    setSong(song);
    if(!song)
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  
  return (
   <Songs.Provider value={{DataSongs,song,handleSetSong}}>
      <Navbar>
      </Navbar>
   </Songs.Provider>
  )
}
