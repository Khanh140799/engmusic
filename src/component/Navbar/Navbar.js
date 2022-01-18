import styles from './Navbar.module.css'
import Head from 'next/head';
import MusicVideoRoundedIcon from '@material-ui/icons/MusicVideoRounded';
import DetailSong from '../DetailSong/DetailSong';
import ListSong from '../ListSong/ListSong'
import AudioPlayer from 'react-h5-audio-player';
import Play from '../Play/Play';
import { useState } from 'react';

const Navbar=()=>{
    
    return(
        <div className={styles.main}>
            <Head>
                <title>Music</title>
            </Head>
            <div className={styles.navbar}>
                <div className={styles.navbar_icon}>
                    <MusicVideoRoundedIcon className={styles.icon}/>
                    <div className={styles.title}>English Music</div>
                </div>
            </div>
            <div className={styles.contain}>
                <DetailSong className={styles.detailsong}/>
                <ListSong className={styles.listsong}/>
            </div>
            <div className={styles.play}>
                <Play/>
            </div>
        </div>
    )
}

export default Navbar;