import { createContext, useState, useContext } from "react";

const MediaContext = createContext();

function MediaProvider({ children }) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const [media, setMedia] = useState(null);
    const [alert, setAlert] = useState({
        type: "info",
        message: null,
    });

    return (
        <MediaContext.Provider
            value={{
                media,
                setMedia,
                alert,
                setAlert,
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
