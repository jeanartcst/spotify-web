import { useEffect, useState } from "react";
import { Navigation } from "./navigation";
import { PlayerControls } from "./player-controls";
import { type CurrentMusicProps, PlayingNow } from "./playing-now";

// for examples only
import musics from "./../../mockData/musics.json";

export function Footer() {
  const [currentSong, setCurrentSong] = useState<CurrentMusicProps>({
    song: "",
    song_id: "",
    album_cover: "",
    artist: "",
    artist_id: "",
    liked: false,
  });

  const songs: CurrentMusicProps[] = musics;

  useEffect(() => {
    setCurrentSong(songs[0]);
  }, [songs]);

  return (
    <footer className="absolute bottom-1 h-auto min-w-[620px] max-h-24 flex flex-row w-[99.4%] bg-black rounded-sm justify-between  my-1 mx-1">
      <div className="flex-1">
        <PlayingNow {...currentSong} />
      </div>
      <div className="flex-1 pt-2">
        <PlayerControls />
      </div>
      <div className="flex-1">
        <Navigation />
      </div>
    </footer>
  );
}
