import ThereIsNoAlbumAdded from "./../../images/thereIsNoAlbumAdded.jpg";

export function MainContainer() {
  // const total = 50;
  return (
    // Tamanho de referência da div 1348 x 717 {todas as divs centralizadas tem 717 de altura}

    <main className="flex rounded-md flex-col w-3/4 h-full animate-color-cycle ease-in-out p-2">
      <div className="flex flex-row gap-2 mt-2">
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
      {/* <section className=""> */}
      <section className="grid grid-cols-4 gap-4 justify-center align-center my-12 mx-auto  rounded ">
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
          <p>Músicas Curtidas 2</p>
        </div>
        <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
          <div className="w-12 h-12">
            <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
          </div>
          <p>Músicas Curtidas 3</p>
        </div>
        <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
          <div className="w-12 h-12">
            <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
          </div>
          <p>Músicas Curtidas 4</p>
        </div>
        <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
          <div className="w-12 h-12">
            <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
          </div>
          <p>Músicas Curtidas 5</p>
        </div>
        <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
          <div className="w-12 h-12">
            <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
          </div>
          <p>Músicas Curtidas 6</p>
        </div>
        <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
          <div className="w-12 h-12">
            <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
          </div>
          <p>Músicas Curtidas 7</p>
        </div>
        <div className="flex justify-start px-4 items-center w-[326px] h-16 gap-2 bg-slate-300/25 rounded ">
          <div className="w-12 h-12">
            <img src={ThereIsNoAlbumAdded} alt=" Empty Album" />
          </div>
          <p>Músicas Curtidas 8</p>
        </div>
        {/* </div> */}

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
