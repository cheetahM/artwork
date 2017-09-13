// @flow

export type Movie = {
    movieId: number,
    movieName: string,
    imageType: string,
    thumbnailUrl: string,
    fullSizeImageUrl: string,
    languageCode: string
};

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
};

declare type ActionType = "SET_SEARCH_MOVIE" | "ADD_API_DATA";

declare type ActionT<A: ActionType, P> = {|
    type: A,
    payload: P
|};

export type Action = ActionT<"SET_SEARCH_MOVIE", string>;