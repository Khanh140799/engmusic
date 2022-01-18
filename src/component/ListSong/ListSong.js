import styles from './ListSong.module.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useContext, useEffect, useState } from 'react';
import Songs from '../../Context/Context';


const ListSong=() =>{
    const {DataSongs,handleSetSong,song} = useContext(Songs);
    const [idSong,setIdSong] = useState(0)
    const[color,setColor] = useState("white")
    const handlePlaySong =(idSong,)=>{
        setIdSong(idSong)
        
        handleSetSong(idSong)
    };
    useEffect(() =>{
        setIdSong(song.id),[song]
    })
    
    
    return(
        <div className={styles.listsong}>
            <div className={styles.table}>
                <div className={styles.a}>
                    <div className={styles.listtitle}>
                        <div className={styles.num}>#</div>
                        <div className={styles.title}>Title</div>
                        <div className={styles.author}>Author</div>
                        <div className={styles.download}><ArrowDownwardIcon/></div>
                    </div>
                </div>
                <div className={styles.b}>
                    <div className={styles.listsongs}>
                        {
                            DataSongs.map((song,index) =>(
                                <tr className={styles.song} key={index} onClick={() =>handlePlaySong(song.id)}>
                                    <div className={styles.num}>{index+1}</div>
                                    <div className={styles.title}>{song.name}</div>
                                    <div className={styles.author}>{song.author}</div>
                                    <a href={song.url} className={styles.download}><ArrowDownwardIcon/></a>
                                </tr>
                            ))
                        };
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListSong;