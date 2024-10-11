import ThereIsNoAlbumAdded from "./../../images/thereIsNoAlbumAdded.jpg";

export function MainContainer() {
  // const total = 50;
  return (
    // Tamanho de referência da div 1348 x 717 {todas as divs centralizadas tem 717 de altura}

    <main className="flex rounded-md flex-col h-full animate-color-cycle ease-in-out p-2 overflow-scroll scrollbar-thin scrollbar-thumb-slate-500">
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
      <section className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-12 mx-auto">
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
        <h1 className="static text-3xl">Feito para Peter Parker</h1>
        <div className="grid grid-cols-4 xl:grid-cols-6  sm:grid-cols-3 md:grid-cols-4 mt-4">
          <div className="w-[228px] h-[280px] flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
          <div className="w-[228px] h-[280px]  flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg">
            <div className="">
              <img
                src={ThereIsNoAlbumAdded}
                alt="Album folder"
                width={202}
                className="rounded-lg"
              />
              <p className="text-sm text-slate-300 pt-4">
                Check this album for you.
              </p>
            </div>
          </div>
        </div>
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
