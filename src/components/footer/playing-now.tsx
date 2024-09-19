import { CaretDown, CheckCircle, PlusCircle } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export interface CurrentMusicProps {
  artist_id: string
  artist: string
  song: string
  song_id: string
  album_cover: string
  liked: boolean
}

export function PlayingNow({
  artist,
  artist_id,
  song,
  song_id,
  album_cover,
  liked,
}: CurrentMusicProps) {
  const [isLiked, setIsLiked] = useState(false)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    isLiked !== liked && setIsLiked(liked)
  }, [])

  return (
    <div className="flex-1 flex gap-4 flex-row ">
      <div className="px-4 py-3 group relative truncate">
        <button
          type="button"
          className="absolute bg-slate-950/70 rounded-full w-8 h-8 left-12 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <CaretDown size={24} />
        </button>
        <img src={album_cover} alt="Capa do Album" className="min-w-14" />
      </div>
      <div className="flex flex-col justify-center space-y-[-0.25rem] ">
        <span>
          <a
            href={`/album/${song_id}`}
            className="font-semibold text-white text-base font-sans text-center truncate hover:underline"
          >
            {song}
          </a>
        </span>
        <span>
          <a
            href={`/artist/${artist_id}`}
            className="text-slate-300 font-thin text-sm font-sans text-center truncate hover:underline"
          >
            {artist}
          </a>
        </span>
      </div>
      <button
        type="button"
        title='Adicionar a músicas curtidas'
        className="items-center justify-center flex rounded-lg"
        onClick={() => {
          setIsLiked(!isLiked)
        }}
      >
        {isLiked ? (
          <CheckCircle size={22} weight="fill" color="#1ed760" />
        ) : (
          <PlusCircle size={22} />
        )}
      </button>
    </div>
  )
}
