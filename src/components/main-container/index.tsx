import ThereIsNoAlbumAdded from "./../../images/thereIsNoAlbumAdded.jpg";

export function MainContainer() {
  // const total = 50;
  return (
    // Tamanho de referência da div 1348 x 717 {todas as divs centralizadas tem 717 de altura}

    <main className="flex rounded-md flex-col w-3/4 h-full bg-gradient-to-t from-black from-20% via-background via-50%% to-darkBlue to-75%% p-2">
      <div className="flex flex-row gap-2">
        <button
          type="button"
          className="text-sm font-medium bg-slate-300/25 px-4 py-1 rounded-full text hover:bg-slate-300/50"
        >
          Tudo
        </button>
        <button
          type="button"
          className="text-sm font-medium bg-slate-300/25 px-4 py-1 rounded-full text hover:bg-slate-300/50"
        >
          Músicas
        </button>
        <button
          type="button"
          className="text-sm font-medium bg-slate-300/25 px-4 py-1 rounded-full text hover:bg-slate-300/50"
        >
          Podcasts
        </button>
      </div>
      <section className="my-12 h-[140px] w-[1340px] bg-pink-500">
        <div className="flex flex-row justify-center align-center gap-2">
          <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
            <div className="w-12 h-12">
              <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
            </div>
            <p>Músicas Curtidas</p>
          </div>
          <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
            <div className="w-12 h-12">
              <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
            </div>
            <p>Músicas Curtidas</p>
          </div>
          <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
            <div className="w-12 h-12">
              <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
            </div>
            <p>Músicas Curtidas</p>
          </div>
          <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
            <div className="w-12 h-12">
              <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
            </div>
            <p>Músicas Curtidas</p>
          </div>
        </div>

        {/* <h3>Feito para Jean</h3>
        <span>a</span> */}
      </section>
      <section>
        <span>a</span>
      </section>
      <section>
        <span>a</span>
      </section>
      <section>
        <span>a</span>
      </section>
    </main>
  );
}
