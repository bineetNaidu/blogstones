import { ActionType, StateModel, TypeEnum } from '../utils/types';

export const initialState = {
  blogs: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.payload };

    case 'LOGOUT_USER':
      return { ...state, user: null };

    case 'ADD_BLOG':
      return { ...state, blogs: [...state.blogs, action.payload] };

    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter((b) => b.id !== action.payload.id),
      };

    case 'UPDATE_BLOG':
      return {
        ...state,
        blogs: [
          ...state.blogs.filter((b) => b.id !== action.payload.id),
          action.payload,
        ],
      };

    case 'SET_BLOGS':
      return {
        ...state,
        blogs: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
