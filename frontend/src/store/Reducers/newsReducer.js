import {FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS} from "../Actions/newsAction";

const initialState = {
    fetchLoading: false,
    singleLoading: false,
    news: [],
    one: null,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {...state, fetchLoading: true};
        case FETCH_NEWS_SUCCESS:
            return {...state, fetchLoading: false, news: action.payload};
        case FETCH_NEWS_FAILURE:
            return {...state, fetchLoading: false};
        default:
            return state;
    }
};

export default newsReducer;