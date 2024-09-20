import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  RepeatOnce,
} from '@phosphor-icons/react'
import { useState } from 'react'

// TO-DO: Make a logic that give the button attributes and action based on buttonStatus useState
// TO-DO: The repeat button can have three status: inactive, active and repeat-once
// TO-DO: The shuffle button can have three status: inactive, active and shuffle-with-suggestions

type buttonStatusProps =
  | 'inative'
  | 'ative '
  | 'repeat-once'
  | 'shuffle-with-suggestions'

export function PlayerControls() {
  const [buttonStatus, setButtonStatus] = useState<buttonStatusProps>('inative')

  const [isPLaying, setIsPLaying] = useState(false)
  return (
    <div className="flex flex-col ">
      <div className="flex-1 flex items-center justify-center mt-2">
        <div className="flex justify-center items-center gap-4 px-6">
          <Shuffle size={18} color="#1ed760" weight="bold" />
          <SkipBack size={18} weight="fill" />
        </div>
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
        <div className="flex justify-center items-center gap-4 px-6">
          <SkipForward size={18} weight="fill" />
          <Repeat
            size={18}
            color="#1ed760"
            weight="bold"
            onClick={() => {
              console.log(buttonStatus)
              setButtonStatus(buttonStatus)
            }}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="w-[500px] h-1.5  bg-slate-800/75 flex items-center justify-start rounded-sm">
          <div className=" bg-white/75 w-80 h-1.5 rounded-sm" />
        </div>
      </div>
    </div>
  )
}
