import { createContext, useState, useContext } from "react";

const MediaContext = createContext();

function MediaProvider({ children }) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiFilmUrl = import.meta.env.VITE_API_FILM_URL;
    const apiTvUrl = import.meta.env.VITE_API_TV_URL;

    const [films, setFilms] = useState([]);
    const [tv, setTv] = useState([]);
    // const [media, setMedia] = useState([]);

    return (
        <MediaContext.Provider
            value={{
                films,
                setFilms,
                tv,
                setTv,
                apiKey,
                apiFilmUrl,
                apiTvUrl,
            }}
        >
            {children}
        </MediaContext.Provider>
    );
}

function useMediaContext() {
    return useContext(MediaContext);
}

export { MediaProvider, useMediaContext };
