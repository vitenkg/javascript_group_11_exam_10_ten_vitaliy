import axios from "axios";

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
//
// // export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
// // export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
// // export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';
//
export const CREATE_NEWS_REQUEST = 'CREATE_NEWS_REQUEST';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAILURE = 'CREATE_NEWS_FAILURE';
//
export const fetchNewsRequest = () => ({type: FETCH_NEWS_REQUEST});
export const fetchNewsSuccess = products => ({type: FETCH_NEWS_SUCCESS, payload: products});
export const fetchNewsFailure = () => ({type: FETCH_NEWS_FAILURE});
//
// // export const fetchProductRequest = () => ({type: FETCH_PRODUCT_REQUEST});
// // export const fetchProductSuccess = product => ({type: FETCH_PRODUCT_SUCCESS, payload: product});
// // export const fetchProductFailure = () => ({type: FETCH_PRODUCT_FAILURE});
//
export const createNewsRequest = () => ({type: CREATE_NEWS_REQUEST});
export const createNewsSuccess = () => ({type: CREATE_NEWS_SUCCESS});
export const createNewsFailure = () => ({type: CREATE_NEWS_FAILURE});
//
export const fetchNewsData = () => {
    return async dispatch => {
        try {
            dispatch(fetchNewsRequest());
            const response = await axios.get('http://localhost:8000/news');
            console.log(response.data);
            dispatch(fetchNewsSuccess(response.data));
        } catch (e) {
            dispatch(fetchNewsFailure());
        }
    };
};
//
// // export const fetchProduct = id => {
// //     return async dispatch => {
// //         try {
// //             dispatch(fetchProductRequest());
// //             const response = await axios.get('http://localhost:8000/products/' + id);
// //             dispatch(fetchProductSuccess(response.data));
// //         } catch (e) {
// //             dispatch(fetchProductFailure());
// //         }
// //     };
// // };
//
export const createNews = data => {
    return async dispatch => {
        try {
            dispatch(createNewsRequest());

            await axios.post('http://localhost:8000/news', data);

            dispatch(createNewsSuccess());
        } catch (e) {
            dispatch(createNewsFailure());
            throw e;
        }
    };
}
