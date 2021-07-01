import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts-slice";
const store = configureStore({ reducer: posts.reducer });
export default store;
