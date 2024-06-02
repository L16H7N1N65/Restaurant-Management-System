import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAIL,

  RESTAURANT_CREATE_REQUEST,
  RESTAURANT_CREATE_SUCCESS,
  RESTAURANT_CREATE_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,

  RESTAURANT_UPDATE_REQUEST,
  RESTAURANT_UPDATE_SUCCESS,
  RESTAURANT_UPDATE_FAIL,

  RESTAURANT_DELETE_REQUEST,
  RESTAURANT_DELETE_SUCCESS,
  RESTAURANT_DELETE_FAIL,

  RESTAURANT_ALL_REQUEST,
  RESTAURANT_ALL_SUCCESS,
  RESTAURANT_ALL_FAIL,
} from "../constants/restaurantConstant";

export const restaurantListReducer = (
  state = { loading: true, tables: [] },
  action
) => {
  switch (action.type) {
    case RESTAURANT_LIST_REQUEST:
      return { loading: true, tables: [] };
    case RESTAURANT_LIST_SUCCESS:
      return {
        loading: false,
        tables: action.payload.tables,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case RESTAURANT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



export const restaurantCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RESTAURANT_CREATE_REQUEST:
      return { loading: true };
    case RESTAURANT_CREATE_SUCCESS:
      return { loading: false, success: true };
    case RESTAURANT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const restaurantDetailsReducer = (state = { table: {} }, action) => {
  switch (action.type) {
    case RESTAURANT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case RESTAURANT_DETAILS_SUCCESS:
      return { loading: false, table: action.payload };
    case RESTAURANT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tableUpdateReducer = (state = { table: {} }, action) => {
  switch (action.type) {
    case RESTAURANT_UPDATE_REQUEST:
      return { loading: true };
    case RESTAURANT_UPDATE_SUCCESS:
      return { loading: false, success: true, table: action.payload };
    case RESTAURANT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const restaurantDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case RESTAURANT_DELETE_REQUEST:
      return { loading: true };
    case RESTAURANT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case RESTAURANT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const restaurantAllReducer = (
    state = { loading: true, tables: [] },
    action
  ) => {
    switch (action.type) {
      case RESTAURANT_ALL_REQUEST:
        return { loading: true, tables: [] };
      case RESTAURANT_ALL_SUCCESS:
        return {
          tables: action.payload,
          loading: false,
        };
      case RESTAURANT_ALL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
