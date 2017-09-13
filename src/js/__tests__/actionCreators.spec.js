// @flow

import moxios from "moxios";
import { setSearchMovie, addAPIData, getAPIDetails } from "../actionCreators";

const orangeIsNewBlack = {
    movieId: 70242311,
    movieName: "Orange Is the New Black",
    imageType: "sdp",
    thumbnailUrl: "http://art.nflximg.net/304d2/7da9da4ea90c6df7889b67137cb64737e65304d2.jpg",
    fullSizeImageUrl: "http://art.nflximg.net/934f7/e76e738da86e04d9c388605789211d6a883934f7.jpg",
    languageCode: "de"
};

test("setSearchMovie", () => {
    expect(setSearchMovie("en")).toMatchSnapshot();
});

test("addAPIData", () => {
    expect(addAPIData(orangeIsNewBlack)).toMatchSnapshot();
});

test("getAPIDetails", (done: Function) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
        getAPIDetails(orangeIsNewBlack.movieId)(dispatchMock);
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request
                .respondWith({
                    status: 200,
                    response: orangeIsNewBlack
                })
                .then(() => {
                    expect(request.url).toEqual(`http://localhost:3000/details/${orangeIsNewBlack.movieId}`);
                    expect(dispatchMock).toBeCalledWith(addAPIData(orangeIsNewBlack));
                    done();
                })
        })
    })
});