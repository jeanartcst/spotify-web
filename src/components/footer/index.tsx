import { useEffect, useState } from 'react'
import { Navigation } from './navigation'
import { PlayerControls } from './player-controls'
import { type CurrentMusicProps, PlayingNow } from './playing-now'

// for examples only
import musics from './../../mockData/musics.json'

export function Footer() {
  const [currentSong, setCurrentSong] = useState<CurrentMusicProps>({
    song: '',
    song_id: '',
    album_cover: '',
    artist: '',
    artist_id: '',
    liked: false,
  })

  const songs: CurrentMusicProps[] = musics

  useEffect(() => {
    setCurrentSong(songs[1])
  }, [songs])

  return (
    <footer className="absolute bottom-0 h-[80px] max-h-24 flex flex-row w-[99.4%] bg-slate-950 rounded-sm justify-between  my-1 mx-1">
      <PlayingNow {...currentSong} />
      <PlayerControls />
      <Navigation />
    </footer>
  )
}
