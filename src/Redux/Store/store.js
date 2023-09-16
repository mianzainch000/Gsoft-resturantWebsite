// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../Slice/cartSlice";
// const store = configureStore({
//   reducer: {
//     allCart: cartReducer,
//   },
// });
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // You can change this to another storage method if needed
import cartReducer from "../Slice/cartSlice";

const persistConfig = {
  key: "root", // key for the storage
  storage, // the storage method you imported earlier
  cart: ["allCart"], // list of reducers to persist
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    allCart: persistedReducer, // Use the persisted reducer here
  },
});

const persistor = persistStore(store); // Create a persistor
export default store;
export { persistor };
