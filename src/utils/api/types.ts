
export type TMovieType = {
    posterUrl: string;
    title: string;
    date: Date;
    id: number;
}

export type TFeaturedMoviesResponse = Array<TMovieType>

export type TGenre = {
    id: number
    name: string
}

export type TGenreResponse = {
    genres: Array<TGenre>
}

export type TQueryParams = {
    query?: string,
    genre?: string|number,
    page?: string|number
}

export type TMovieInfo = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: { iso_3166_1: string; name: string }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type TCastInfo = {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}

export type TCrewInfo = {
    adult: boolean;
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}
