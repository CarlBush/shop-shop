
//createContext = create the container to hold our global state data
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    //use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />
};

//receive the [state, dispatch] data our StoreProvider provider manages for us
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };