export interface Movie {
    results: (ResultsEntity)[];
    page: number;
    total_results: number;
    dates: DateConstructor;
    total_pages: number;
}

export interface ResultsEntity{
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    genre_ids?: (number)[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface Dates{
    maximum: string;
    minimum: string;
}