import { useState } from "react";
import { useMediaContext } from "../context/MediaContext";

export default function HeaderComponent() {
    const { films, setFilms, tv, setTv, apiFilmUrl, apiKey, apiTvUrl } =
        useMediaContext();
    const [mediaTitle, setMediaTitle] = useState("");

    const handleChange = (e) => {
        setMediaTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${apiFilmUrl}?api_key=${apiKey}&query=${mediaTitle}`)
            .then((res) => res.json())
            .then((data) => setFilms(data.results));

        fetch(`${apiTvUrl}?api_key=${apiKey}&query=${mediaTitle}`)
            .then((res) => res.json())
            .then((data) => setTv(data.results));
    };

    console.log(films, tv);

    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-5">
                    <img src="/logo.png" alt="logo" />
                    <form
                        className="d-flex gap-5 h-50"
                        name="formForTitle"
                        onSubmit={handleSubmit}
                    >
                        <input
                            // value={mediaTitle}
                            onChange={handleChange}
                            type="text"
                            placeholder="Search a title..."
                        />
                        <button className="btn btn-warning">Search</button>
                    </form>
                </div>
            </div>
        </header>
    );
}
