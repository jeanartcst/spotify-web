import { Pause, Play } from '@phosphor-icons/react'
import { useState } from 'react'

export function PlayerControls() {
  const [isPLaying, setIsPLaying] = useState(false)
  return (
    <div className="flex-1 flex items-center justify-center flex-col mt-2">
      <button
        type="button"
        onClick={() => {
          setIsPLaying(!isPLaying)
        }}
        className="rounded-full bg-white p-2 flex items-center justify-center w-8 h-8"
      >
        {isPLaying ? (
          <Pause size={24} weight="fill" color="#000" />
        ) : (
          <Play size={24} weight="fill" color="#000" />
        )}
      </button>
      <div>
        <div className="w-[500px] h-1.5 mt-4 bg-slate-800/75 flex items-center justify-start">
          <div className=" bg-white/75 w-80 h-1.5" />
        </div>
      </div>
    </div>
  )
}
