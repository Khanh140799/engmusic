import AudioPlayer from 'react-h5-audio-player';
import styles from './Play.module.css'
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react';
import Songs from '../../Context/Context';

const Play=() => {
    const {song,handleSetSong}=useContext(Songs)
    const handClickNext =() =>{
        handleSetSong(song.id + 1)
    }
    const handClickPre=() => {
        handleSetSong(song.id - 1)
    }
    return(
        <div className={styles.play}>
            <AudioPlayer 
            className={styles.audio} layout='stacked-reverse'
            src={song.url}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handClickNext}
            onClickPrevious={handClickPre}
            />
        </div>
    )
}
export default Play;