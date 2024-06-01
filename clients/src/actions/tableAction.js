import axios from "axios";
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
} from "../constants/tableConstant";

//get all tables
export const allTables = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESTAURANT_ALL_REQUEST,
        });

        //get user from state
        const {
            userLogin: { userInfo },
        } = getState();

        //headers
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        //if tables available is needed
        const { data } = await axios.get(`/api/tables/all`, config);

        dispatch({
            type: RESTAURANT_ALL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESTAURANT_ALL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//get all tables with pagination
export const listTables = (keyword = "", pageNumber = "") => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: RESTAURANT_LIST_REQUEST,
        });

        //get user from state
        const {
            userLogin: { userInfo },
        } = getState();

        //headers
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        //get all tables
        const { data } = await axios.get(
            `/api/tables?keyword=${keyword}&pageNumber=${pageNumber}`,
            config
        );

        dispatch({
            type: RESTAURANT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESTAURANT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//create a table
export const createTable = (table) => async (dispatch, getState) => {
    const { name } = table;

    try {
        dispatch({
            type: RESTAURANT_CREATE_REQUEST,
        });

        //get table from state
        const {
            userLogin: { userInfo },
        } = getState();

        //headers
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        //create table
        const { data } = await axios.post("/api/tables", { name }, config);
        dispatch({
            type: RESTAURANT_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESTAURANT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//get table details
export const listTableDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: RESTAURANT_DETAILS_REQUEST });

        //get user from state
        const {
            userLogin: { userInfo },
        } = getState();

        //headers
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        //api call to get table
        const { data } = await axios.get(`/api/tables/${id}`, config);
        dispatch({
            type: RESTAURANT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESTAURANT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//update a table
export const updateTable = (table) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESTAURANT_UPDATE_REQUEST,
        });

        //get user from state
        const {
            userLogin: { userInfo },
        } = getState();
        //headers
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        //update table
        const { data } = await axios.put(
            `/api/tables/${table.id}`,
            table,
            config
        );
        dispatch({
            type: RESTAURANT_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESTAURANT_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//delete table
export const deleteTable = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESTAURANT_DELETE_REQUEST,
        });

        //get user from state
        const {
            userLogin: { userInfo },
        } = getState();
        //headers
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        //api call to delete table
        await axios.delete(`/api/tables/${id}`, config);
        dispatch({
            type: RESTAURANT_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: RESTAURANT_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};