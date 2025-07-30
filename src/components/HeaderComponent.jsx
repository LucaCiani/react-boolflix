import { useState } from "react";
import { useMediaContext } from "../context/MediaContext";

export default function HeaderComponent() {
    const { media, setMedia, apiFilmUrl, apiKey } = useMediaContext();

    const [mediaTitle, setMediaTitle] = useState("");

    const handleChange = (e) => {
        setMediaTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${apiFilmUrl}?api_key=${apiKey}&query=${mediaTitle}`).then(
            (res) => {
                res.json().then((data) => setMedia(data.results));
            }
        );
    };
    console.log(media);

    return (
        <header>
            <div className="container">
                <form
                    className="d-flex justify-content-center gap-5 my-5"
                    name="formForTitle"
                    onSubmit={handleSubmit}
                >
                    <input
                        // value={mediaTitle}
                        onChange={handleChange}
                        type="text"
                        placeholder="Search a title..."
                    />
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        </header>
    );
}
