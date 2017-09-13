import reducers from "../reducers";

test("SET_SEARCH_MOVIE", () => {
  const state = reducers({ searchMovie: "", apiData: {} }, { type: "SET_SEARCH_MOVIE", payload: "es" });
  expect(state).toEqual({ searchMovie: "es", apiData: {} });
});

test("ADD_API_DATA", () => {
  const state = reducers(
    { searchMovie: "es", apiData: {} },
    {
      type: "ADD_API_DATA",
      payload: {
        movieId: 70178217,
        movieName: "House of Cards",
        imageType: "sdp",
        thumbnailUrl: "http://art.nflximg.net/920d5/aa6acd66076eb1127521a3fff5dceddbbf7920d5.jpg",
        fullSizeImageUrl: "http://art.nflximg.net/1ba7e/756e795d7469900eae82794a38f1942e6521ba7e.jpg",
        languageCode: "es"
      }
    }
  );
  expect(state).toEqual({
    searchMovie: "es",
    apiData: {
      "70178217": {
        movieId: 70178217,
        movieName: "House of Cards",
        imageType: "sdp",
        thumbnailUrl: "http://art.nflximg.net/920d5/aa6acd66076eb1127521a3fff5dceddbbf7920d5.jpg",
        fullSizeImageUrl: "http://art.nflximg.net/1ba7e/756e795d7469900eae82794a38f1942e6521ba7e.jpg",
        languageCode: "es"
      }
    }
  });
});
