import { useContext } from 'react';
import Songs from '../../Context/Context';
import styles from './DetailSong.module.css'


const DetailSong = () =>{
    const {song} = useContext(Songs)
    return(
        <div className={styles.detailsong}>
            <div className={styles.title}>
                <h2 className={styles.title_1}>Now Playing</h2>
                <h2 className={styles.title_2}>{song.name}</h2>
            </div>
            <div className={styles.avatar}>
                <img src={song.links.images[0].url} alt="avatar" className={styles.avatar_avatar}/>
            </div>
            <div className={styles.avatar_name}>
                <img src={song.links.images[1].url} alt="avatar" className={styles.avatar_name_avatar}/>
                <h2 className={styles.title_avatar}>{song.author}</h2>
            </div>
        </div>
    )
}
export default DetailSong;