import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Plus,
  RepeatOnce,
} from "@phosphor-icons/react";
import { useState } from "react";

type shuffleStatusProps = "inactive" | "active" | "shuffle-with-suggestions";
type repeatButtonStatus = "inactive" | "active" | "repeat-once";

export function PlayerControls() {
  const [shuffleStatus, setShuffleStatus] =
    useState<shuffleStatusProps>("inactive");
  const [isPLaying, setIsPLaying] = useState(false);
  const [repeatStatus, setRepeatStatus] =
    useState<repeatButtonStatus>("inactive");

  const handleShuffleClick = () => {
    if (shuffleStatus === "inactive") {
      setShuffleStatus("active");
      // TO-DO> shuffleMusics();
    }

    if (shuffleStatus === "active") {
      setShuffleStatus("shuffle-with-suggestions");
      // TO-DO> shuffleMusics();
    }

    if (shuffleStatus === "shuffle-with-suggestions") {
      setShuffleStatus("inactive");
      // TO-DO> shuffleMusics();
    }
  };

  const handleRepeatClick = () => {
    if (repeatStatus === "inactive") {
      setRepeatStatus("active");
      // TO-DO> repeatMusics();
    }
    if (repeatStatus === "active") {
      setRepeatStatus("repeat-once");
      // TO-DO> repeatMusics();
    }
    if (repeatStatus === "repeat-once") {
      setRepeatStatus("inactive");
      // TO-DO> repeatMusics();
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex-1 flex items-center justify-center mt-2 gap-2 md:gap-4">
        <div className="flex justify-center items-center gap-2 md:gap-4 px-6">
          <button
            type="button"
            className="transition-all "
            onClick={() => {
              console.log(shuffleStatus);
              handleShuffleClick();
            }}
          >
            {shuffleStatus === "inactive" ? (
              <Shuffle size={18} color="white" weight="bold" />
            ) : shuffleStatus === "active" ? (
              <Shuffle size={18} color="#1ed760" weight="bold" />
            ) : (
              <div className="mt-0 flex flex-col items-center justify-center">
                <Shuffle size={18} color="#1ed760" weight="bold" />{" "}
                <Plus size={8} color="#1ed760" weight="bold" />
              </div>
            )}
          </button>
          <button type="button">
            <SkipBack size={18} weight="fill" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsPLaying(!isPLaying);
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
          <button type="button">
            <SkipForward size={18} weight="fill" />
          </button>
          <button
            type="button"
            onClick={() => {
              handleRepeatClick();
            }}
          >
            {repeatStatus === "inactive" ? (
              <Repeat size={18} weight="bold" />
            ) : repeatStatus === "active" ? (
              <Repeat size={18} color="#1ed760" weight="bold" />
            ) : (
              <RepeatOnce size={18} color="#1ed760" weight="bold" />
            )}
          </button>
        </div>
      </div>
      <div className="mb-4 w-full px-4 py-4">
        <div className="w-full h-1.5  bg-slate-800/75 flex items-center justify-start rounded-sm">
          <div className=" bg-white/75  h-1.5 rounded-sm w-1/2" />
        </div>
      </div>
    </div>
  );
}
