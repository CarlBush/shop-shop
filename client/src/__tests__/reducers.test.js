import { reducer } from "../utils/reducers";

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "../utils/actions";

const initialState = {
    products: [],
    categories: [{ name: "Food"}],
    currentCategory: "1",
};


/*
This function accepts the following two parameters:
The current state object, so we can make our copy of it for the new state.
The action we're performing to update state, which is broken into the following two parts as an object:
*/
//UPDATE_PRODUCTS create a new state object (products)
test("UPDATE_PRODUCTS", () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});


test("UPDATE_CATEGORIES", () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});


test("UPDATE_CURRENT_CATEGORY", () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: "2"
    });

    expect(newState.currentCategory).toBe("2");
    expect(initialState.currentCategory).toBe("1");
});
