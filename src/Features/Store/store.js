import { createStore } from "@reduxjs/toolkit";
import { CounterReducer } from "../Redux/Reducer/CounterReducer";
const store = createStore(CounterReducer);

export { store };
