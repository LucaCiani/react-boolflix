import { useMediaContext } from "../context/MediaContext";

export default function ShowPage() {
    const { films, tv } = useMediaContext();

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

    const renderStars = (vote) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= vote) {
                stars.push(
                    <i key={i} className="fa-solid fa-star text-warning"></i>
                );
            } else {
                stars.push(
                    <i key={i} className="fa-regular fa-star text-warning"></i>
                );
            }
        }
        return stars;
    };

    return (
        <>
            <h2 className="text-warning my-4">FILMS</h2>
            <div className="row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
                {films &&
                    films.map((film) => {
                        const vote = Math.round(film.vote_average / 2);

                        return (
                            <div key={film.id} className="col">
                                <div className="card h-100 justify-content-center">
                                    <img
                                        className="images"
                                        src={
                                            "https://image.tmdb.org/t/p/w342" +
                                            film.poster_path
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
                                            Vote: {renderStars(vote)}(
                                            {film.vote_count})
                                        </p>
                                        <p>Description: {film.overview}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <h2 className="text-warning my-4">TV SERIES</h2>
            <div className="row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
                {tv &&
                    tv.map((film) => {
                        const vote = Math.round(film.vote_average / 2);

                        return (
                            <div key={film.id} className="col">
                                <div className="card h-100">
                                    <img
                                        className="images"
                                        src={
                                            "https://image.tmdb.org/t/p/w342" +
                                            film.poster_path
                                        }
                                        alt={film.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {film.name}
                                        </h5>
                                        <p>
                                            Original title: {film.original_name}
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
                                            Vote: {renderStars(vote)} (
                                            {film.vote_count})
                                        </p>
                                        <p>Description: {film.overview}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
