// Zadani aplikace
// V Listu se zobrazi seznam filmu z url -> https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/movies.json
// kazdy item bude obsahovat obrazek napr, nazev filmu a cislo epizody -> https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/public/images/star_wars_episode_1_poster.png
// pod flatlistem bude tlacitko, ktery pretridi seznam filmu vzestupne/sestupne podle epizod

// To start with npm -> npm i -> npm run dev
// Vite React aplikace s tailwindem & typescriptem, snad jsem se trefil do zadání, je to všechno v jednom filu pro jednoduchost.

import { useState, useEffect } from "react";

interface MoviesResponse {
  title: string;
  episode_number: string;
  main_characters: string[];
  description: string;
  poster: string;
  hero_image: string;
}

const masterDataUrl =
  "https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/movies.json";
const pictureUrl =
  "https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/public/images/";

function App() {
  const [data, setData] = useState<null | MoviesResponse[]>(null);
  const [additionalDataToShow, setAdditionalDataToShow] = useState(Number);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // fetch function with data, loading, error state handling

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(masterDataUrl);
      const data = await response.json();
      setData(data.movies);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      console.error("There was an error while fetching data: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect for fetching the data after the first render/mount

  useEffect(() => {
    fetchData();
  }, []);

  // handler functions for onClick events

  const handleAdditionalDataToShow = (episodeNumber: string) => {
    setAdditionalDataToShow((prevVal) =>
      prevVal === Number(episodeNumber) ? 0 : Number(episodeNumber)
    );
  };

  const handleSort = (data: MoviesResponse[]) => {
    setData([...data].reverse());
  };

  let mainContent;

  if (error) {
    mainContent = (
      <p className="text-xl">
        I sense a disturbance in the Force. Retry, you must. Error: {error}
      </p>
    );
  } else if (isLoading) {
    mainContent = (
      <p className="text-xl">Loading, it is. Patience young padawan, you must have.</p>
    );
  } else if (data) {
    mainContent = (
      <>
        <section className="max-w-[800px] flex justify-center">
          <ul className="w-full flex flex-col">
            {data?.map((movie: MoviesResponse) => (
              <li key={movie.title}>
                <div className="bold grid grid-cols-4 gap-4 border-b-4">
                  <div className="col-span-3 flex flex-col justify-center items-start">
                    <button
                      className="p-1 text-xl transition hover:cursor-pointer hover:mb-1"
                      onClick={() => handleAdditionalDataToShow(movie.episode_number)}
                    >
                      <b>{movie.title}</b>
                      <b className="text-[2rem]">
                        {additionalDataToShow === Number(movie.episode_number) ? " ↓" : " ↑"}
                      </b>
                    </button>
                  </div>
                  <div className="max-w-[12rem] h-20 z-[-1]">
                    <img src={pictureUrl + movie.hero_image} alt={movie.hero_image} />
                  </div>
                </div>
                {additionalDataToShow === Number(movie.episode_number) ? (
                  <div className="grid grid-cols-4 gap-10 border-b-4 py-2 bg-white">
                    <div className="col-span-1">
                      <p className="mb-2 text-lg">
                        Episode number: <b>{movie.episode_number}</b>
                      </p>
                      <img src={pictureUrl + movie.poster} alt={movie.poster} />
                    </div>
                    <div className="col-span-3">
                      <p className="mb-4">
                        Main characters:{" "}
                        <b>
                          {movie.main_characters.map((character, i) => {
                            return i === movie.main_characters.length - 1
                              ? character + "."
                              : character + ", ";
                          })}
                        </b>
                      </p>
                      <p className="text-sm">{movie.description}</p>
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
        <section className="flex justify-center p-5">
          <button
            onClick={() => handleSort(data)}
            className="border-2 border-black p-2 rounded-md bg-gray-200 w-20"
          >
            Sort {data[0].episode_number === "1" ? "↓" : "↑ "}
          </button>
        </section>
      </>
    );
  }

  return <main className="flex flex-col items-center mt-16">{mainContent}</main>;
}

export default App;
