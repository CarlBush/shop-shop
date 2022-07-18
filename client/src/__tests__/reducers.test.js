import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "../utils/actions";

const initalState = {
    products: [],
    categories: [{ name: "Food"}],
    currentCategory: "1",
};