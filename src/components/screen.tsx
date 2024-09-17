export function Screen() {
  return (
    <div className="h-screen flex flex-row bg-emerald-700">
      <div>
        <footer className="absolute bottom-0 h-20 flex flex-row w-full bg-slate-950 rounded-sm">
          <div className="flex-1 flex gap-4 flex-row">
            <div className="px-4 py-3">
              <img
                src="https://i.scdn.co/image/ab67616d000048510446e86dd485e9adfc6abd3d"
                alt="Música tocando agora"
                width={56}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span>Love By Grace</span>
              <span>Lara Fabian</span>
            </div>
            <div className="items-center justify-center flex rounded-lg">
              <span>+</span>
            </div>
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
