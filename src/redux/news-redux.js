/**
 * @desc [应用版本]
 */
import produce from "immer";
import { createAction } from '../utils/createRedux';

/* Constants */
const GET_NEWS = 'GET_NEWS';
const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
const GET_NEWS_FAIL = 'GET_NEWS_FAIL';
const DELETE_ONE_NEWS = 'DELETE_ONE_NEWS';

export const VersionTypes = {
    GET_NEWS,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL,
    DELETE_ONE_NEWS,
};

/* Action Creators */
export const newsActions = {
    getNews: createAction(GET_NEWS),
    getNewsSuccess: createAction(GET_NEWS_SUCCESS),
    getNewsFail: createAction(GET_NEWS_FAIL),
    deleteOneNews: createAction(DELETE_ONE_NEWS),
};

const initialState = {
    news: [],
};

/* Reducers */
const newsReducer = (state = initialState, action) => {
    const type = action && action.type;
    return produce(state, draft => {
        switch(type) {
        case GET_NEWS_SUCCESS:
            draft.news = action.payload;
        case DELETE_ONE_NEWS:
            const index = action.payload;
            draft.news.splice(index, 1);
        }
  });
}

export const newsReducers = {
    news: newsReducer
};
