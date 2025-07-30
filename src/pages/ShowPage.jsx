import { useMediaContext } from "../context/MediaContext";

export default function ShowPage() {
    const { media } = useMediaContext();
    const getCountryFlag = (code) => {
        if (code === "en") {
            return "gb";
        } else if (code === "ja") {
            return "jp";
        } else if (code === "zh") {
            return "cn";
        } else {
            return code;
        }
    };
    return (
        <>
            <div className="row row-cols-3 g-3">
                {media &&
                    media.map((film) => {
                        return (
                            <div key={film.id} className="col">
                                <div className="card h-100">
                                    <img
                                        src={
                                            "https://image.tmdb.org/t/p/w342" +
                                            film.backdrop_path
                                        }
                                        alt={film.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {film.title}
                                        </h5>
                                        <p>
                                            Original title:{" "}
                                            {film.original_title}
                                        </p>
                                        <p>
                                            Original language:{" "}
                                            <img
                                                src={
                                                    "https://flagcdn.com/w20/" +
                                                    getCountryFlag(
                                                        film.original_language
                                                    ) +
                                                    ".png"
                                                }
                                                alt=""
                                            />
                                        </p>
                                        <p>
                                            Voto: {film.vote_average.toFixed(1)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
