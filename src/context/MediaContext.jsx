import { createContext, useState, useContext } from "react";

const MediaContext = createContext();

function MediaProvider({ children }) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiFilmUrl = import.meta.env.VITE_API_URL;

    const [media, setMedia] = useState([]);

    return (
        <MediaContext.Provider
            value={{
                media,
                setMedia,
                apiKey,
                apiFilmUrl,
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
