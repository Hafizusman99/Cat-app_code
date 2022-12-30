import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Features/ProductsSlice";

export default configureStore({
  reducer: {
    app: ProductsReducer,
  },
});
