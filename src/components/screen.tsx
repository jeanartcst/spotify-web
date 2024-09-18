import { CaretDown, CheckCircle, PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'

export function Screen() {
  const [liked, setLiked] = useState(true)
  return (
    <div className="h-screen flex flex-row bg-emerald-700">
      <div>
        <footer className="absolute bottom-0 h-20 flex flex-row w-full bg-slate-950 rounded-sm ">
          <div className="flex-1 flex gap-4 flex-row ">
            <div className="px-4 py-3 group relative truncate">
              <button
                type="button"
                className="absolute bg-slate-950/70 rounded-full w-8 h-8 left-12 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <CaretDown size={24} />
              </button>
              <img
                src="https://i.scdn.co/image/ab67616d000048510446e86dd485e9adfc6abd3d"
                alt="Música tocando agora"
                className="min-w-14"
              />
            </div>
            <div className="flex flex-col justify-center space-y-[-0.25rem] ">
              <span>
                <a
                  href="*"
                  className="font-semibold text-white text-base font-sans text-center truncate hover:underline"
                >
                  Love By Grace
                </a>
              </span>
              <span>
                <a
                  href="*"
                  className="text-slate-300 font-thin text-sm font-sans text-center truncate hover:underline"
                >
                  Lara Fabian
                </a>
              </span>
            </div>
            <button
              type="button"
              className="items-center justify-center flex rounded-lg"
              onClick={() => {
                setLiked(!liked)
              }}
            >
              {liked ? (
                <CheckCircle size={22} weight="fill" color="#1ed760" />
              ) : (
                <PlusCircle size={22} />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span>▶️</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span>▶️</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
