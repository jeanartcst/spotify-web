import {
  Play,
  MicrophoneStage,
  Playlist,
  DesktopTower,
  SpeakerSimpleX,
  // SpeakerSimpleNone,
  // SpeakerSimpleLow,
  // SpeakerSimpleHigh,
  ArrowsOutSimple,
  PictureInPicture,
} from "@phosphor-icons/react";

export function Navigation() {
  return (
    <div className="h-full flex-1 flex items-center justify-end mr-8 gap-2 md:gap-4">
      <button type="button" className="group">
        <div className="group rounded-sm border-solid border-[1px] border-[#b3b3b3] py-1 px-0.5 group-hover:border-white transition-colors duration-200">
          <Play
            className="group-hover:fill-white transition-colors duration-200"
            size={8}
            weight="fill"
            color="#b3b3b3"
          />
        </div>
      </button>
      <button type="button" className="group">
        <MicrophoneStage
          className="group-hover:fill-white transition-colors duration-200"
          size={22}
          weight="regular"
          color="#b3b3b3"
        />
      </button>
      <button type="button" className="group">
        <Playlist
          className="group-hover:fill-white transition-colors duration-200"
          size={22}
          weight="regular"
          color="#b3b3b3"
        />
      </button>
      <button type="button" className="group">
        <DesktopTower
          className="group-hover:fill-white transition-colors duration-200"
          size={22}
          color="#b3b3b3"
        />
      </button>
      <div className="flex items-center w-24 gap-2">
        <button type="button" className="group">
          <SpeakerSimpleX
            className="group-hover:fill-white transition-colors duration-200"
            size={22}
            color="#b3b3b3"
          />
        </button>
        <div className="w-full h-1 rounded-full bg-slate-600">
          <div className="w-1/2 h-1 rounded-full bg-white" />
        </div>
      </div>
      <button type="button" className="group">
        <PictureInPicture
          className="group-hover:fill-white transition-colors duration-200"
          size={22}
          color="#b3b3b3"
        />
      </button>
      <button type="button" className="group">
        <ArrowsOutSimple
          className="group-hover:fill-white transition-colors duration-200"
          size={22}
          color="#b3b3b3"
        />
      </button>
    </div>
  );
}
