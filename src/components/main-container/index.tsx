import ThereIsNoAlbumAdded from "./../../images/thereIsNoAlbumAdded.jpg";

export function MainContainer() {
  // const total = 50;

  const easyAccess = [
    "Músicas Curtidas",
    "Elvis Presley",
    "Valeska Poposuda",
    "O melhor do Zé Ramalho",
    "Não clique nesse botão",
    "Furacão 2000",
    "O teatro mágico",
    "nothing to list here",
    "Os piores podcasts para ouvir durante uma guerra de canudos de papel contra colheres de cobre e algazarras de metal enquanto humanos tentam se defender de cachorros ciborgs de 30 centimetros com armas nuclears sem nuclos",
  ];

  return (
    // TO-DO: Tamanho de referência da div 1348 x 717 {todas as divs centralizadas tem 717 de altura}

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
      <section className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-12 mx-auto">
        {easyAccess.map((name, index) => (
          <div
            // TO-DO: Fix that index mapping latter
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="flex justify-start items-center rounded w-[326px] h-16 gap-2 bg-slate-300/25 hover:bg-slate-300/50"
          >
            <div className="flex justify-start h-16 w-16">
              <img
                src={ThereIsNoAlbumAdded}
                alt=" Empty Album"
                className="object-fill rounded"
              />
            </div>
            <p className=" w-60 line-clamp-1 mx-2 font-semibold">{name}</p>
          </div>
        ))}
      </section>
      <section className="my-10">
        <h1 className="static text-3xl mx-4">Feito para Peter Parker</h1>
        <div className="grid grid-cols-4 xl:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 mt-4">
          {easyAccess.map((name, index) => (
            <div
              // TO-DO: Fix that index mapping latter
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="w-[228px] h-[280px] flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg"
            >
              <div>
                <img
                  src={ThereIsNoAlbumAdded}
                  alt="Album folder"
                  width={202}
                  className="rounded-lg"
                />
                <p className="w-48 text-sm text-slate-300 pt-4 line-clamp-2">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-10">
        <h1 className="static text-3xl mx-4">
          Os piores podcasts para ouvir durante uma guerra de canudos de papel.
        </h1>
        <div className="grid grid-cols-4 xl:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 mt-4">
          {easyAccess.map((name, index) => (
            <div
              // TO-DO: Fix that index mapping latter
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="w-[228px] h-[280px] flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg"
            >
              <div className="">
                <img
                  src={ThereIsNoAlbumAdded}
                  alt="Album folder"
                  width={202}
                  className="rounded-lg"
                />
                <p className="w-48 text-sm text-slate-300 pt-4 line-clamp-2">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-3xl mx-4">Sugestões de streaming</h1>
        <div className="grid grid-cols-4 xl:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 mt-4">
          {easyAccess.map((name, index) => (
            <div
              // TO-DO: Fix that index mapping latter
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="w-[228px] h-[280px] flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg"
            >
              <div className="">
                <img
                  src={ThereIsNoAlbumAdded}
                  alt="Album folder"
                  width={202}
                  className="rounded-lg"
                />
                <p className="w-48 text-sm text-slate-300 pt-4 line-clamp-2">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-3xl mx-4">
          Tudo sobre o novo mundo mágico de Pitta
        </h1>
        <div className="grid grid-cols-4 xl:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 mt-4">
          {easyAccess.map((name, index) => (
            <div
              // TO-DO: Fix that index mapping latter
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="w-[228px] h-[280px] flex pt-1 justify-center hover:bg-slate-500/50 rounded-lg"
            >
              <div className="">
                <img
                  src={ThereIsNoAlbumAdded}
                  alt="Album folder"
                  width={202}
                  className="rounded-lg"
                />
                <p className="w-48 text-sm text-slate-300 pt-4 line-clamp-2">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
